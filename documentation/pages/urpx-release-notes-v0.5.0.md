<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

# URPX v0.5.0 Release Notes

**Released:** 2026-09-08.
**Type:** Pre-draft minor release.
**Previous release:** [`v0.4.0`](urpx-release-notes-v0.4.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.5.0 moves the vocabulary to its permanent namespace at `urpx.org`. The terms, the shapes and the semantics are unchanged from v0.4.0. This release changes identifiers only.

The ontology namespace moves from `https://urpx-org.github.io/urpx/ontology/` to `https://urpx.org/ns/ontology/`, and the shapes namespace moves to `https://urpx.org/ns/shacl/core/`. Every term keeps its local name and changes only its host and path.

This release is not backward-compatible with v0.4.0 at the identifier level. Data or tooling that binds the previous namespace resolves no term until it rebinds.

---

## What changed

- The ontology base IRI is `https://urpx.org/ns/ontology/`.
- The shapes base IRI is `https://urpx.org/ns/shacl/core/`.
- The ontology and the shapes identify themselves as version 0.5.0. `owl:versionIRI`, `dcterms:hasVersion`, the release node, its distribution and both download URLs name v0.5.0. The ontology states the version literal on `owl:versionInfo` and the shapes file states it on `dcat:version`.
- The generated JSON-LD context binds `urpx` to `https://urpx.org/ns/ontology/` and is published as the artifact `https://urpx.org/ns/context`.
- The namespace is published through [Semantic Flow](https://github.com/semantic-flow/weave). Each ontology term and SHACL shape has a human-readable ResourcePage, while the three source artifacts retain immutable `releases/v0.5.0` snapshots.
- No term is added, removed or redefined. The vocabulary is identical to v0.4.0 apart from the namespace and the version metadata.

### Published release artifacts

- `ontology/urpx-ontology.ttl` → `https://urpx.org/ns/ontology/releases/v0.5.0/ttl/urpx-ontology.ttl`
- `shacl/urpx-shacl.ttl` → `https://urpx.org/ns/shacl/core/releases/v0.5.0/ttl/urpx-shacl.ttl`
- `context/urpx-context.jsonld` → `https://urpx.org/ns/context/releases/v0.5.0/jsonld/urpx-context.jsonld`

---

## Breaking Changes

1. **The vocabulary namespace changes host and path.**
   A document that binds `urpx` to `https://urpx-org.github.io/urpx/ontology/` resolves no term after this release. Rebind it to `https://urpx.org/ns/ontology/`.

2. **The shapes namespace changes likewise.**
   Rebind `urpx-shacl` to `https://urpx.org/ns/shacl/core/`.

---

## Migration

- Rebind the `urpx` prefix to `https://urpx.org/ns/ontology/`, and, where it is used, rebind `urpx-shacl` to `https://urpx.org/ns/shacl/core/`.
- Point `targetURPXVersion` at `https://github.com/urpx-org/urpx/raw/v0.5.0/ontology/urpx-ontology.ttl`.
- The local names are unchanged, so no term is renamed. A rebind of the prefix is the whole of the migration.

---

## Notes

- The example data files under `test-cases/` and the published JSON-LD context use the new namespace in this release.
- GitHub Pages serves the Semantic Flow output for `urpx.org`. URPX does not require `Accept`-header content negotiation: term identifiers resolve to ResourcePages, and machine-readable ontology, SHACL, and context files have explicit published URLs.

---

## References

- [v0.4.0 Release Notes](urpx-release-notes-v0.4.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
