// SPDX-FileCopyrightText: Flux Tailor LLC
// SPDX-License-Identifier: Apache-2.0

export const ACTIVE_RELEASE_FILES = [
  {
    file: "ontology/urpx-ontology.ttl",
    ontologyIri: "https://urpx.org/ns/ontology",
    namespaceUri: "https://urpx.org/ns/ontology/",
    payloadFile: "urpx-ontology.ttl",
    pagesPublished: true,
    prefix: "urpx",
    requiredTypes: [],
    versionPredicate: "owl:versionInfo",
  },
  {
    file: "shacl/urpx-shacl.ttl",
    ontologyIri: "https://urpx.org/ns/shacl/core",
    namespaceUri: "https://urpx.org/ns/shacl/core/",
    payloadFile: "urpx-shacl.ttl",
    pagesPublished: true,
    prefix: "urpx-shacl",
    requiredTypes: ["http://www.w3.org/ns/shacl#ShapesGraph"],
    versionPredicate: "dcat:version",
  },
] as const;

export type ReleaseFileDescriptor = typeof ACTIVE_RELEASE_FILES[number];

export function releaseIris(
  descriptor: ReleaseFileDescriptor,
  version: string,
): ReleaseIris {
  const releaseIri = `${descriptor.ontologyIri}/releases/v${version}`;
  const manifestationIri = `${releaseIri}/ttl`;
  const releasePayloadIri = `${manifestationIri}/${descriptor.payloadFile}`;
  const versionIri =
    `https://github.com/urpx-org/urpx/raw/v${version}/${descriptor.file}`;

  return {
    manifestationIri,
    releaseIri,
    releasePayloadIri,
    versionIri,
  };
}

export function isSemver(value: string): boolean {
  return /^\d+\.\d+\.\d+$/.test(value);
}

export function isDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export interface ReleaseIris {
  manifestationIri: string;
  releaseIri: string;
  releasePayloadIri: string;
  versionIri: string;
}
