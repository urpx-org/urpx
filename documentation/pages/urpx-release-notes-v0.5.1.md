<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20150513 -->

# URPX v0.5.1 Release Notes

**Released:** 2026-09-14.
**Type:** Pre-draft patch release.
**Previous release:** [`v0.5.0`](urpx-release-notes-v0.5.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.5.1 completes the license transition. The specification files move from Apache-2.0 to the W3C Software Notice and Document License (`W3C-20150513`), the dataset files move to CDLA-Permissive-2.0, and source and metadata files stay under Apache-2.0.

No term, class, property, shape constraint or namespace changes in this release. The only vocabulary edits are the version metadata: `owl:versionInfo`, `owl:versionIRI`, `dcterms:hasVersion`, the release node and its download URLs now name 0.5.1.

---

## What changed

- **Specification files carry `W3C-20150513`.** This covers the ontology, the shapes, the SKOS mappings, the published JSON-LD context, the documentation pages that define the standard, the diagram set and its Graphviz sources, and the generated documentation-examples index.
- **Dataset files carry `CDLA-Permissive-2.0`.** This covers the test-case example data, the generated catalog and corpus indexes, the per-test-case diagrams, and the worked sample instances that accompany development specifications.
- **Source and metadata files stay under Apache-2.0.** Tooling, schema files and repository metadata are unchanged.
- **The repository is REUSE-compliant.** Every file's license is recorded in an SPDX header, a `.license` sidecar, or `REUSE.toml`, and `reuse lint` passes.

---

## License

- The specification text is available under the **W3C Software Notice and Document License**, the standard license for W3C specification text.
- The example datasets are available under **CDLA-Permissive-2.0**, a permissive data license.
- Tooling and metadata remain under **Apache-2.0**.

The full texts are in `LICENSES/`, and the per-category assignment is recorded in `TRANSITION.md`.

---

## Impact

- Consumers of the vocabulary see no semantic change. Every term IRI, class, property and shape constraint is unchanged from v0.5.0; only the version metadata moved.
- Reuse of the specification text and the example data is governed by the licenses above rather than by Apache-2.0.

---

## References

- [v0.5.0 Release Notes](urpx-release-notes-v0.5.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
