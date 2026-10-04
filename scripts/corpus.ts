// SPDX-FileCopyrightText: The URPX Authors
// SPDX-License-Identifier: Apache-2.0

// The TypeScript walker for corpus.json.
//
//   deno run --allow-read scripts/corpus.ts            the documents
//   deno run --allow-read scripts/corpus.ts <kind>...  the files of those kinds
//   deno run --allow-read scripts/corpus.ts --all      every kind, as kind<TAB>path
//
// Output is repo-relative POSIX paths, one per line, in C-locale byte order.

import { fromFileUrl, join } from "@std/path";

export const REPO_ROOT = fromFileUrl(new URL("../", import.meta.url));

export interface CorpusKind {
  description?: string;
  media_type?: string;
  include: string[];
}

export interface Corpus {
  corpus: string;
  roots: string[];
  kinds: Record<string, CorpusKind>;
  documents: string[];
  walkers: { language: string; path: string; api?: string; cli: string }[];
}

export async function readCorpus(root = REPO_ROOT): Promise<Corpus> {
  return JSON.parse(await Deno.readTextFile(join(root, "corpus.json")));
}

const encoder = new TextEncoder();

/** C-locale order: compare UTF-8 bytes. */
export function byteCompare(a: string, b: string): number {
  const x = encoder.encode(a);
  const y = encoder.encode(b);
  for (let i = 0; i < Math.min(x.length, y.length); i++) {
    if (x[i] !== y[i]) return x[i] - y[i];
  }
  return x.length - y.length;
}

function segmentRegExp(segment: string): RegExp {
  const body = segment.split("*").map((s) =>
    s.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
  ).join("[^/]*");
  return new RegExp(`^${body}$`);
}

/** Repo-relative paths of the files under `base` matching one glob. */
async function walkGlob(
  root: string,
  base: string,
  segments: string[],
  out: Set<string>,
): Promise<void> {
  if (segments.length === 0) return;
  const [head, ...rest] = segments;
  if (head === "**") {
    await walkGlob(root, base, rest, out);
  }
  let entries: Deno.DirEntry[];
  try {
    entries = await Array.fromAsync(Deno.readDir(join(root, base)));
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) return;
    throw error;
  }
  if (head === "**") {
    for (const entry of entries) {
      const path = `${base}/${entry.name}`;
      if (entry.isDirectory) await walkGlob(root, path, segments, out);
      else if (rest.length === 0 && entry.isFile) out.add(path);
    }
    return;
  }
  const match = segmentRegExp(head);
  for (const entry of entries) {
    const path = `${base}/${entry.name}`;
    if (match.test(entry.name)) {
      if (rest.length === 0) {
        if (entry.isFile) out.add(path);
      } else if (entry.isDirectory) {
        await walkGlob(root, path, rest, out);
      }
    }
  }
}

/**
 * Every file of the given kinds, as corpus.json declares them; with no kinds,
 * the kinds corpus.json lists as documents.
 */
export async function corpusPaths(
  kinds: string[] = [],
  root = REPO_ROOT,
  corpus?: Corpus,
): Promise<string[]> {
  const layout = corpus ?? await readCorpus(root);
  const out = new Set<string>();
  for (const kind of kinds.length ? kinds : layout.documents) {
    const declared = layout.kinds[kind];
    if (!declared) throw new Error(`corpus.json declares no kind "${kind}"`);
    for (const r of layout.roots) {
      for (const glob of declared.include) {
        await walkGlob(root, r, glob.split("/"), out);
      }
    }
  }
  return [...out].sort(byteCompare);
}

/** The lines the CLI prints for `args`. */
export async function corpusLines(
  args: string[],
  root = REPO_ROOT,
): Promise<string[]> {
  const layout = await readCorpus(root);
  if (args.length === 1 && args[0] === "--all") {
    const lines: string[] = [];
    for (const kind of Object.keys(layout.kinds)) {
      for (const path of await corpusPaths([kind], root, layout)) {
        lines.push(`${kind}\t${path}`);
      }
    }
    return lines.sort(byteCompare);
  }
  return corpusPaths(args, root, layout);
}

if (import.meta.main) {
  try {
    const lines = await corpusLines(Deno.args);
    await Deno.stdout.write(
      encoder.encode(lines.map((l) => `${l}\n`).join("")),
    );
  } catch (error) {
    console.error(`corpus: ${error instanceof Error ? error.message : error}`);
    Deno.exit(2);
  }
}
