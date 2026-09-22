// SPDX-FileCopyrightText: The URPX Authors
// SPDX-License-Identifier: Apache-2.0

import { assert, assertEquals } from "@std/assert";
import { fromFileUrl } from "@std/path";
import {
  parseReleaseValidateArgs,
  validateRelease,
} from "./release_validate.ts";

const REPO_ROOT = fromFileUrl(new URL("../", import.meta.url));

Deno.test("release validation accepts the current source release metadata", async () => {
  const result = await validateRelease({ root: REPO_ROOT });

  assert(result.version);
  assert(/^\d+\.\d+\.\d+$/.test(result.version));
  assertEquals(result.errors, []);
});

Deno.test("release validation can pin the expected release version", async () => {
  const currentVersion = await currentReleaseVersion();
  const expectedVersion = nextPatchVersion(currentVersion);
  const result = await validateRelease({
    expectedVersion,
    root: REPO_ROOT,
  });

  assert(
    result.errors.some((error) =>
      error.includes(
        `release metadata declares ${currentVersion}, but --version requested ${expectedVersion}`,
      )
    ),
  );
  assert(
    result.errors.some((error) =>
      error.includes(
        `ontology/urpx-ontology.ttl: expected owl:versionInfo literal "${expectedVersion}"`,
      )
    ),
  );
  assert(
    result.errors.some((error) =>
      error.includes(
        `ontology/urpx-ontology.ttl: expected dcterms:hasVersion to be <https://urpx.org/ns/ontology/releases/v${expectedVersion}>`,
      )
    ),
  );
  assert(
    result.errors.some((error) =>
      error.includes(
        `shacl/urpx-shacl.ttl: expected exactly one dcat:distribution on urpx-shacl:releases/v${expectedVersion}`,
      )
    ),
  );
});

Deno.test("release validation can require the release tag to point at HEAD", async () => {
  const version = await currentReleaseVersion();
  const result = await validateRelease({
    root: REPO_ROOT,
    requireTag: true,
    runGit: (args) => {
      if (args.join(" ") === "rev-parse HEAD") {
        return "abc123";
      }
      if (args.join(" ") === `rev-list -n 1 v${version}`) {
        return "def456";
      }
      throw new Error(`unexpected git args: ${args.join(" ")}`);
    },
  });

  assertEquals(result.errors, [
    `required release tag v${version} does not point at HEAD`,
  ]);
});

Deno.test("release validation argument parser supports version and tag flags", () => {
  assertEquals(
    parseReleaseValidateArgs(["--", "--version", "0.2.1", "--require-tag"]),
    {
      expectedVersion: "0.2.1",
      requireTag: true,
    },
  );
  assertEquals(parseReleaseValidateArgs(["--version=0.2.1"]), {
    expectedVersion: "0.2.1",
    requireTag: false,
  });
});

async function currentReleaseVersion(): Promise<string> {
  const result = await validateRelease({ root: REPO_ROOT });
  assertEquals(result.errors, []);
  assert(result.version);
  return result.version;
}

function nextPatchVersion(version: string): string {
  const [major, minor, patch] = version.split(".").map(Number);
  return `${major}.${minor}.${patch + 1}`;
}
