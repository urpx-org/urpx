<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20150513 -->
<!-- Comment: Transitioned to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

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
- No term is added, removed or redefined. The vocabulary is identical to v0.4.0 apart from the namespace and the version metadata.

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

- The example data files under `test-cases/` and the published JSON-LD context still reference the previous host. They move to the new namespace in a following release.

---

## References

- [v0.4.0 Release Notes](urpx-release-notes-v0.4.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
