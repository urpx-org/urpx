// SPDX-FileCopyrightText: Flux Tailor LLC
// SPDX-License-Identifier: Apache-2.0

export const ACTIVE_RELEASE_FILES = [
  {
    file: "ontology/urpx-ontology.ttl",
    ontologyIri: "https://urpx-org.github.io/urpx/ontology",
    namespaceUri: "https://urpx-org.github.io/urpx/ontology/",
    payloadFile: "urpx-ontology.ttl",
    pagesPublished: true,
    prefix: "urpx",
    requiredTypes: [],
  },
  {
    file: "shacl/urpx-shacl.ttl",
    ontologyIri: "https://urpx-org.github.io/urpx/ontology/shacl",
    namespaceUri: "https://urpx-org.github.io/urpx/ontology/shacl/",
    payloadFile: "urpx-shacl.ttl",
    pagesPublished: true,
    prefix: "urpx-shacl",
    requiredTypes: ["http://www.w3.org/ns/shacl#ShapesGraph"],
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
