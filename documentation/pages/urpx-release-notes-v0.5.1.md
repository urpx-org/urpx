<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

# URPX v0.5.1 Release Notes

**Released:** 2026-09-14.
**Type:** Working Group Draft patch release.
**Previous release:** [`v0.5.0`](urpx-release-notes-v0.5.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.5.1 completes the license transition. The specification files move from Apache-2.0 to the W3C Software Notice and Document License (`W3C-20150513`), the dataset files move to CDLA-Permissive-2.0, and source and metadata files stay under Apache-2.0. Alongside the license transition, this release also brings the release metadata, the generated documentation, and the entry points a first-time reader meets into agreement with that completed state.

No term, class, property or shape constraint changes in this release. The vocabulary edits are the version metadata (`owl:versionInfo`, `owl:versionIRI`, `dcterms:hasVersion`, the release node and its download URLs, all naming 0.5.1) and the license triples, plus one illustrative annotation example (`targetURPXVersion`'s `skos:note`) that now cites this release instead of the last one.

---

## What changed

- **Specification files carry `W3C-20150513`.** This covers the ontology, the shapes, the SKOS mappings, the published JSON-LD context, the documentation pages that define the standard, the diagram set and its Graphviz sources, and the generated documentation-examples index.
- **Dataset files carry `CDLA-Permissive-2.0`.** This covers the test-case example data, the generated catalog and corpus indexes, the per-test-case diagrams, and the worked sample instances that accompany development specifications.
- **Source and metadata files stay under Apache-2.0.** Tooling, schema files and repository metadata are unchanged.
- **The repository is REUSE-compliant.** Every file's license is recorded in an SPDX header, a `.license` sidecar, or `REUSE.toml`, and `reuse lint` passes.
- **The ontology and shapes graphs' own `dcterms:license` now agrees with their SPDX header**, and `dcterms:issued` names this release's date.
- **The twelve shipped test-case packages, and the catalog's version column, now declare v0.5.1**, the ontology version their published context has selected since the earlier context migration.
- **The generated data dictionary, corpus manifest and test-case catalog no longer carry pre-Draft wording, a nonexistent regeneration command, a private repository name, or stale v0.3.0 diagram output.**
- **The entry points a first-time reader meets** (`README.md`, `CONTRIBUTING.md`, the documentation index, the FAQ, the hand-authored page headers, and the interoperability banner) **state the current release, Working Group Draft acceptance, and the three-license split**, replacing claims left over from before the transition.

---

## License

- The specification text is available under the **W3C Software Notice and Document License**, the standard license for W3C specification text.
- The example datasets are available under **CDLA-Permissive-2.0**, a permissive data license.
- Tooling and metadata remain under **Apache-2.0**.

The full texts are in `LICENSES/`, and the per-category assignment is recorded in `TRANSITION.md`.

---

## Impact

- Consumers of the vocabulary see no semantic change. Every term IRI, class, property and shape constraint is unchanged from v0.5.0; what moved is the license triples, the version metadata, one illustrative annotation example, and the generated and hand-authored documentation surfaces listed above.
- A test-case package or catalog row that pinned `targetURPXVersion` or `urpx_version` to v0.3.0 or v0.4.0 now reads v0.5.1; nothing about how the packages validate changed underneath that literal.
- Reuse of the specification text and the example data is governed by the licenses above rather than by Apache-2.0.

---

## References

- [v0.5.0 Release Notes](urpx-release-notes-v0.5.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](../../urpx-changelog.md)
