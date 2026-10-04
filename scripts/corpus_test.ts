// SPDX-FileCopyrightText: The URPX Authors
// SPDX-License-Identifier: Apache-2.0

import { assert, assertEquals, assertRejects } from "@std/assert";
import { join } from "@std/path";
import {
  byteCompare,
  corpusLines,
  corpusPaths,
  readCorpus,
  REPO_ROOT,
} from "./corpus.ts";

async function gitLsFiles(globs: string[]): Promise<string[]> {
  const { code, stdout } = await new Deno.Command("git", {
    args: [
      "ls-files",
      "-z",
      "--cached",
      "--others",
      "--exclude-standard",
      "--",
      ...globs.map((g) => `:(glob)${g}`),
    ],
    cwd: REPO_ROOT,
  }).output();
  assertEquals(code, 0);
  const paths = new TextDecoder().decode(stdout).split("\0").filter(Boolean);
  return [...new Set(paths)].sort(byteCompare);
}

Deno.test("corpus.json documents and walkers name what exists", async () => {
  const corpus = await readCorpus();
  for (const kind of corpus.documents) assert(corpus.kinds[kind], kind);
  for (const walker of corpus.walkers) {
    await Deno.stat(join(REPO_ROOT, walker.path));
  }
});

Deno.test("corpus walker finds every manifest-all.json instance", async () => {
  const documents = await corpusPaths();
  assert(documents.length > 0, "the walker found no documents");
  const manifest = JSON.parse(
    await Deno.readTextFile(join(REPO_ROOT, "test-cases/manifest-all.json")),
  );
  for (const example of manifest.examples) {
    const path = `test-cases/${example.instanceJsonld}`;
    assert(documents.includes(path), `${path} is not a corpus document`);
  }
});

Deno.test("corpus walker agrees with git ls-files for every kind", async () => {
  const corpus = await readCorpus();
  for (const [kind, { include }] of Object.entries(corpus.kinds)) {
    const globs = corpus.roots.flatMap((r) => include.map((g) => `${r}/${g}`));
    const walked = await corpusPaths([kind], REPO_ROOT, corpus);
    assert(walked.length > 0, `kind ${kind} matched no files`);
    assertEquals(walked, await gitLsFiles(globs), kind);
  }
});

Deno.test("corpus CLI --all prints kind<TAB>path in byte order", async () => {
  const corpus = await readCorpus();
  const lines = await corpusLines(["--all"]);
  assertEquals(lines, [...lines].sort(byteCompare));
  const expected = [];
  for (const kind of Object.keys(corpus.kinds)) {
    for (const path of await corpusPaths([kind])) {
      expected.push(`${kind}\t${path}`);
    }
  }
  assertEquals(lines, expected.sort(byteCompare));
});

Deno.test("corpus walker rejects an undeclared kind", async () => {
  await assertRejects(() => corpusPaths(["no-such-kind"]));
});
