// SPDX-FileCopyrightText: Flux Tailor LLC
// SPDX-License-Identifier: Apache-2.0

import { fromFileUrl, join } from "@std/path";
import { Parser, type Quad, type Term } from "n3";
import {
  ACTIVE_RELEASE_FILES,
  isSemver,
  type ReleaseFileDescriptor,
  releaseIris,
} from "./release_metadata.ts";

const REPO_ROOT = fromFileUrl(new URL("../", import.meta.url));

const RDF = {
  type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
} as const;

const OWL = {
  Ontology: "http://www.w3.org/2002/07/owl#Ontology",
  versionIRI: "http://www.w3.org/2002/07/owl#versionIRI",
  versionInfo: "http://www.w3.org/2002/07/owl#versionInfo",
} as const;

const DCTERMS = {
  hasVersion: "http://purl.org/dc/terms/hasVersion",
  isVersionOf: "http://purl.org/dc/terms/isVersionOf",
  issued: "http://purl.org/dc/terms/issued",
} as const;

const DCAT = {
  Distribution: "http://www.w3.org/ns/dcat#Distribution",
  distribution: "http://www.w3.org/ns/dcat#distribution",
  downloadURL: "http://www.w3.org/ns/dcat#downloadURL",
} as const;

const XSD = {
  date: "http://www.w3.org/2001/XMLSchema#date",
} as const;

export interface ReleaseValidationOptions {
  expectedVersion?: string;
  requireTag?: boolean;
  root?: string;
  runGit?: GitRunner;
}

export interface ReleaseValidationResult {
  version?: string;
  errors: string[];
  warnings: string[];
}

type GitRunner = (
  args: readonly string[],
  root: string,
) => Promise<string> | string;

interface ParsedReleaseFile {
  contents: string;
  descriptor: ReleaseFileDescriptor;
  quads: readonly Quad[];
}

export async function validateRelease(
  options: ReleaseValidationOptions = {},
): Promise<ReleaseValidationResult> {
  const root = options.root ?? REPO_ROOT;
  const errors: string[] = [];
  const warnings: string[] = [];
  const parsedFiles: ParsedReleaseFile[] = [];

  for (const descriptor of ACTIVE_RELEASE_FILES) {
    try {
      parsedFiles.push({
        contents: await Deno.readTextFile(join(root, descriptor.file)),
        descriptor,
        quads: await parseRepoTurtle(root, descriptor.file),
      });
    } catch (error) {
      errors.push(
        `${descriptor.file}: could not parse Turtle: ${String(error)}`,
      );
    }
  }

  const versions = new Set<string>();
  const expectedVersion = options.expectedVersion;

  for (const parsedFile of parsedFiles) {
    const version = validateReleaseFile(parsedFile, errors, expectedVersion);
    if (version) {
      versions.add(version);
    }
  }

  let version = versions.size === 1 ? [...versions][0] : undefined;
  if (versions.size > 1) {
    errors.push(
      `active release files disagree on owl:versionInfo: ${
        [...versions].sort().join(", ")
      }`,
    );
  }

  if (expectedVersion) {
    if (!isSemver(expectedVersion)) {
      errors.push(
        `--version must be SemVer-shaped, got ${expectedVersion}`,
      );
    }
    if (version && version !== expectedVersion) {
      errors.push(
        `release metadata declares ${version}, but --version requested ${expectedVersion}`,
      );
    }
    version = expectedVersion;
  }

  if (version) {
    await validateReleaseNotes(root, version, parsedFiles, errors);
    await validateTagPolicy(root, version, options, errors);
  }

  return { version, errors, warnings };
}

export function parseReleaseValidateArgs(args: readonly string[]): {
  expectedVersion?: string;
  requireTag: boolean;
} {
  let expectedVersion: string | undefined;
  let requireTag = false;

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];

    if (arg === "--") {
      continue;
    }

    if (arg === "--require-tag") {
      requireTag = true;
      continue;
    }

    if (arg === "--version") {
      const value = args[++index];
      if (!value) {
        throw new Error("--version requires a value");
      }
      expectedVersion = value;
      continue;
    }

    if (arg.startsWith("--version=")) {
      expectedVersion = arg.slice("--version=".length);
      continue;
    }

    throw new Error(`Unsupported argument: ${arg}`);
  }

  return { expectedVersion, requireTag };
}

async function validateReleaseNotes(
  root: string,
  version: string,
  parsedFiles: readonly ParsedReleaseFile[],
  errors: string[],
): Promise<void> {
  const notePath = `documentation/pages/urpx-release-notes-v${version}.md`;
  let contents: string;

  try {
    contents = await Deno.readTextFile(join(root, notePath));
  } catch {
    errors.push(`${notePath}: release notes are required for v${version}`);
    return;
  }

  if (!contents.includes(`v${version}`)) {
    errors.push(`${notePath}: should mention v${version}`);
  }

  for (const { descriptor } of parsedFiles) {
    if (!contents.includes(descriptor.file)) {
      errors.push(`${notePath}: should list ${descriptor.file}`);
    }
  }

  for (const { descriptor } of parsedFiles) {
    if (!descriptor.pagesPublished) {
      continue;
    }

    const { releasePayloadIri } = releaseIris(descriptor, version);
    if (!contents.includes(releasePayloadIri)) {
      errors.push(
        `${notePath}: should list published payload ${releasePayloadIri}`,
      );
    }
  }
}

async function validateTagPolicy(
  root: string,
  version: string,
  options: ReleaseValidationOptions,
  errors: string[],
): Promise<void> {
  if (!options.requireTag) {
    return;
  }

  const tag = `v${version}`;
  const runGit = options.runGit ?? runGitCommand;

  let head: string;
  let tagCommit: string;

  try {
    head = await runGit(["rev-parse", "HEAD"], root);
  } catch (error) {
    errors.push(`could not resolve HEAD for tag validation: ${String(error)}`);
    return;
  }

  try {
    tagCommit = await runGit(["rev-list", "-n", "1", tag], root);
  } catch {
    errors.push(`required release tag ${tag} does not exist`);
    return;
  }

  if (head.trim() !== tagCommit.trim()) {
    errors.push(`required release tag ${tag} does not point at HEAD`);
  }
}

function validateReleaseFile(
  parsedFile: ParsedReleaseFile,
  errors: string[],
  expectedVersion?: string,
): string | undefined {
  const { contents, descriptor, quads } = parsedFile;
  const { file, namespaceUri, ontologyIri } = descriptor;
  const subject = ontologyIri;

  requireObjectPresent(quads, file, subject, RDF.type, OWL.Ontology, errors);
  for (const type of descriptor.requiredTypes) {
    requireObjectPresent(quads, file, subject, RDF.type, type, errors);
  }

  const versionInfo = requireSingleObject(
    quads,
    file,
    subject,
    OWL.versionInfo,
    errors,
    expectedVersion
      ? { expectedLiteralValue: expectedVersion }
      : { expectedLiteral: true },
  );
  const version = versionInfo?.value;

  if (!version || !isSemver(version)) {
    errors.push(`${file}: ontology owl:versionInfo must be SemVer-shaped`);
    return version;
  }

  const validationVersion = expectedVersion && isSemver(expectedVersion)
    ? expectedVersion
    : version;
  const {
    manifestationIri,
    releaseIri,
    releasePayloadIri,
    versionIri,
  } = releaseIris(descriptor, validationVersion);

  requireSingleObject(quads, file, subject, DCTERMS.hasVersion, errors, {
    expectedNamedNode: releaseIri,
  });
  requireSingleObject(quads, file, subject, OWL.versionIRI, errors, {
    expectedNamedNode: versionIri,
  });

  requireObjectPresent(quads, file, releaseIri, RDF.type, OWL.Ontology, errors);
  for (const type of descriptor.requiredTypes) {
    requireObjectPresent(quads, file, releaseIri, RDF.type, type, errors);
  }
  requireSingleObject(quads, file, releaseIri, DCTERMS.isVersionOf, errors, {
    expectedNamedNode: ontologyIri,
  });
  requireSingleObject(quads, file, releaseIri, OWL.versionInfo, errors, {
    expectedLiteralValue: validationVersion,
  });
  requireSingleObject(quads, file, releaseIri, DCAT.distribution, errors, {
    expectedNamedNode: manifestationIri,
  });

  const issued = requireSingleObject(
    quads,
    file,
    releaseIri,
    DCTERMS.issued,
    errors,
    { expectedLiteral: true },
  );
  if (issued?.termType === "Literal") {
    if (
      issued.datatype.value !== XSD.date ||
      !/^\d{4}-\d{2}-\d{2}$/.test(issued.value)
    ) {
      errors.push(`${file}: release dcterms:issued must be an xsd:date`);
    }
  }

  requireObjectPresent(
    quads,
    file,
    manifestationIri,
    RDF.type,
    DCAT.Distribution,
    errors,
  );
  requireObjectPresent(
    quads,
    file,
    manifestationIri,
    DCAT.downloadURL,
    releasePayloadIri,
    errors,
  );

  if (!contents.includes(`@prefix ${descriptor.prefix}: <${namespaceUri}> .`)) {
    errors.push(
      `${file}: ${descriptor.prefix}: prefix should be ${namespaceUri}`,
    );
  }

  for (const term of quads.flatMap(quadTerms)) {
    if (term.termType === "NamedNode" && term.value.includes("/release/")) {
      errors.push(
        `${file}: release paths must use plural /releases/: ${term.value}`,
      );
    }
  }

  return version;
}

function requireSingleObject(
  quads: readonly Quad[],
  file: string,
  subject: string,
  predicate: string,
  errors: string[],
  expectation: ObjectExpectation = {},
): Term | undefined {
  const objects = quads
    .filter((quad) =>
      quad.subject.value === subject && quad.predicate.value === predicate
    )
    .map((quad) => quad.object);

  if (objects.length !== 1) {
    errors.push(
      `${file}: expected exactly one ${compactIri(predicate)} on ${
        compactIri(subject)
      }, found ${objects.length}`,
    );
    return objects[0];
  }

  const [object] = objects;
  if (expectation.expectedNamedNode) {
    if (
      object.termType !== "NamedNode" ||
      object.value !== expectation.expectedNamedNode
    ) {
      errors.push(
        `${file}: expected ${
          compactIri(predicate)
        } to be <${expectation.expectedNamedNode}>, got ${formatTerm(object)}`,
      );
    }
  }

  if (expectation.expectedLiteral && object.termType !== "Literal") {
    errors.push(
      `${file}: expected ${compactIri(predicate)} to be a literal, got ${
        formatTerm(object)
      }`,
    );
  }

  if (expectation.expectedLiteralValue !== undefined) {
    if (
      object.termType !== "Literal" ||
      object.value !== expectation.expectedLiteralValue
    ) {
      errors.push(
        `${file}: expected ${compactIri(predicate)} literal ${
          JSON.stringify(expectation.expectedLiteralValue)
        }, got ${formatTerm(object)}`,
      );
    }
  }

  return object;
}

function requireObjectPresent(
  quads: readonly Quad[],
  file: string,
  subject: string,
  predicate: string,
  object: string,
  errors: string[],
): void {
  const found = quads.some((quad) =>
    quad.subject.value === subject &&
    quad.predicate.value === predicate &&
    quad.object.value === object
  );

  if (!found) {
    errors.push(
      `${file}: expected ${compactIri(subject)} ${
        compactIri(predicate)
      } <${object}>`,
    );
  }
}

async function parseRepoTurtle(
  root: string,
  relativePath: string,
): Promise<Quad[]> {
  const absolutePath = join(root, relativePath);
  const turtle = await Deno.readTextFile(absolutePath);
  return new Parser({ baseIRI: `file://${absolutePath}` }).parse(turtle);
}

async function runGitCommand(
  args: readonly string[],
  root: string,
): Promise<string> {
  const command = new Deno.Command("git", {
    args: [...args],
    cwd: root,
    stderr: "piped",
    stdout: "piped",
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr).trim());
  }
  return new TextDecoder().decode(output.stdout).trim();
}

function quadTerms(quad: Quad): readonly Term[] {
  return [quad.subject, quad.predicate, quad.object, quad.graph];
}

function compactIri(value: string): string {
  return value
    .replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:")
    .replace("http://www.w3.org/2002/07/owl#", "owl:")
    .replace("http://purl.org/dc/terms/", "dcterms:")
    .replace("http://www.w3.org/ns/dcat#", "dcat:")
    .replace("http://www.w3.org/ns/shacl#", "sh:")
    .replace("https://urpx-org.github.io/urpx/ontology/shacl/", "urpx-shacl:")
    .replace("https://urpx-org.github.io/urpx/ontology/", "urpx:");
}

function formatTerm(term: Term): string {
  if (term.termType === "NamedNode") {
    return `<${term.value}>`;
  }
  if (term.termType === "Literal") {
    return JSON.stringify(term.value);
  }
  return `${term.termType}(${term.value})`;
}

interface ObjectExpectation {
  expectedLiteral?: boolean;
  expectedLiteralValue?: string;
  expectedNamedNode?: string;
}

if (import.meta.main) {
  try {
    const args = parseReleaseValidateArgs(Deno.args);
    const result = await validateRelease(args);
    if (result.errors.length > 0) {
      console.error("URPX release validation failed:");
      for (const error of result.errors) {
        console.error(`- ${error}`);
      }
      Deno.exit(1);
    }

    const version = result.version ? `v${result.version}` : "unknown version";
    console.log(`URPX release validation passed for ${version}.`);
  } catch (error) {
    console.error(`URPX release validation could not run: ${String(error)}`);
    Deno.exit(1);
  }
}
