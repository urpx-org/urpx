// SPDX-FileCopyrightText: Flux Tailor LLC
// SPDX-License-Identifier: Apache-2.0

import { fromFileUrl, join } from "@std/path";
import {
  ACTIVE_RELEASE_FILES,
  isDate,
  isSemver,
  type ReleaseFileDescriptor,
  releaseIris,
} from "./release_metadata.ts";

const REPO_ROOT = fromFileUrl(new URL("../", import.meta.url));
const VERSION_PATTERN = String.raw`\d+\.\d+\.\d+`;
const DATE_PATTERN = String.raw`\d{4}-\d{2}-\d{2}`;

export interface ReleaseSetVersionOptions {
  dryRun?: boolean;
  issued: string;
  root?: string;
  version: string;
}

export interface ReleaseSetVersionResult {
  changedFiles: string[];
  unchangedFiles: string[];
}

export async function setReleaseVersion(
  options: ReleaseSetVersionOptions,
): Promise<ReleaseSetVersionResult> {
  validateOptions(options);

  const root = options.root ?? REPO_ROOT;
  const updates: FileUpdate[] = [];
  const errors: string[] = [];

  for (const descriptor of ACTIVE_RELEASE_FILES) {
    const path = join(root, descriptor.file);
    try {
      const previous = await Deno.readTextFile(path);
      const next = updateReleaseMetadata(
        previous,
        descriptor,
        options.version,
        options.issued,
      );
      updates.push({
        changed: previous !== next,
        next,
        path,
        relativePath: descriptor.file,
      });
    } catch (error) {
      errors.push(`${descriptor.file}: ${errorMessage(error)}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Could not set release version:\n- ${errors.join("\n- ")}`);
  }

  if (!options.dryRun) {
    for (const update of updates) {
      if (update.changed) {
        await Deno.writeTextFile(update.path, update.next);
      }
    }
  }

  return {
    changedFiles: updates
      .filter((update) => update.changed)
      .map((update) => update.relativePath),
    unchangedFiles: updates
      .filter((update) => !update.changed)
      .map((update) => update.relativePath),
  };
}

export function updateReleaseMetadata(
  contents: string,
  descriptor: ReleaseFileDescriptor,
  version: string,
  issued: string,
): string {
  const { releaseIri, versionIri } = releaseIris(descriptor, version);
  let next = contents;

  next = replaceRequired(
    next,
    new RegExp(
      `${escapeRegExp(descriptor.ontologyIri)}/releases/v${VERSION_PATTERN}`,
      "g",
    ),
    releaseIri,
    "release resource IRIs",
  );
  next = replaceRequired(
    next,
    new RegExp(
      `https://github\\.com/urpx-org/urpx/raw/v${VERSION_PATTERN}/${
        escapeRegExp(descriptor.file)
      }`,
      "g",
    ),
    versionIri,
    "raw tag version IRI",
  );
  next = replaceRequired(
    next,
    new RegExp(`${descriptor.versionPredicate} "${VERSION_PATTERN}"`, "g"),
    `${descriptor.versionPredicate} "${version}"`,
    `${descriptor.versionPredicate} literals`,
  );
  next = replaceRequired(
    next,
    new RegExp(`dcterms:issued "${DATE_PATTERN}"\\^\\^xsd:date`, "g"),
    `dcterms:issued "${issued}"^^xsd:date`,
    "release issued date",
  );
  next = next.replace(
    new RegExp(`(# Version:\\s*)${VERSION_PATTERN}`, "i"),
    `$1${version}`,
  );

  return next;
}

export function parseReleaseSetVersionArgs(
  args: readonly string[],
): ParsedReleaseSetVersionArgs {
  let dryRun = false;
  let issued: string | undefined;
  let root: string | undefined;
  let version: string | undefined;

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];

    if (arg === "--") {
      continue;
    }

    if (arg === "--dry-run") {
      dryRun = true;
      continue;
    }

    if (arg === "--issued") {
      issued = requiredValue(args, ++index, "--issued");
      continue;
    }

    if (arg.startsWith("--issued=")) {
      issued = arg.slice("--issued=".length);
      continue;
    }

    if (arg === "--root") {
      root = requiredValue(args, ++index, "--root");
      continue;
    }

    if (arg.startsWith("--root=")) {
      root = arg.slice("--root=".length);
      continue;
    }

    if (arg === "--version") {
      version = requiredValue(args, ++index, "--version");
      continue;
    }

    if (arg.startsWith("--version=")) {
      version = arg.slice("--version=".length);
      continue;
    }

    throw new Error(`Unsupported argument: ${arg}`);
  }

  if (!version) {
    throw new Error("--version is required");
  }
  if (!issued) {
    throw new Error("--issued is required");
  }

  return { dryRun, issued, root, version };
}

function validateOptions(options: ReleaseSetVersionOptions): void {
  if (!isSemver(options.version)) {
    throw new Error(`--version must be SemVer-shaped, got ${options.version}`);
  }
  if (!isDate(options.issued)) {
    throw new Error(`--issued must be an ISO date, got ${options.issued}`);
  }
}

function replaceRequired(
  contents: string,
  pattern: RegExp,
  replacement: string,
  label: string,
): string {
  const matches = contents.match(pattern);
  if (!matches || matches.length === 0) {
    throw new Error(`could not find ${label}`);
  }

  return contents.replaceAll(pattern, replacement);
}

function requiredValue(
  args: readonly string[],
  index: number,
  flag: string,
): string {
  const value = args[index];
  if (!value) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

interface FileUpdate {
  changed: boolean;
  next: string;
  path: string;
  relativePath: string;
}

interface ParsedReleaseSetVersionArgs {
  dryRun: boolean;
  issued: string;
  root?: string;
  version: string;
}

if (import.meta.main) {
  try {
    const options = parseReleaseSetVersionArgs(Deno.args);
    const result = await setReleaseVersion(options);
    const verb = options.dryRun ? "would update" : "updated";

    console.log(
      `URPX release metadata ${verb} for v${options.version} (${options.issued}).`,
    );

    if (result.changedFiles.length > 0) {
      console.log(`Changed files:\n- ${result.changedFiles.join("\n- ")}`);
    } else {
      console.log("No file changes needed.");
    }
  } catch (error) {
    console.error(
      `URPX release metadata update failed: ${errorMessage(error)}`,
    );
    Deno.exit(1);
  }
}
