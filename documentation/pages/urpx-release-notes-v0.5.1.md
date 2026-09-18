<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

# URPX v0.5.1 Release Notes

**Released:** 2026-09-14.
**Type:** Working Group Draft patch release.
**Previous release:** [`v0.5.0`](urpx-release-notes-v0.5.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX (Utility Rate Plan Exchange) is an open vocabulary and SHACL shape set for exchanging utility rate plan data between utilities, regulators, vendors, and researchers, built on RDF, OWL, and SHACL. Version 0.5.1 is the first public release of the standard: the vocabulary and shapes are stable at their permanent `urpx.org` namespace, a published JSON-LD context ties instance data to one referenced document, a curated corpus of worked test cases validates against real utility rate plans, and the specification, dataset, and tooling licensing is complete.

---

## What v0.5.1 offers

- A stable public vocabulary and SHACL shape set for utility rate plan data, at the permanent `urpx.org` namespace (`https://urpx.org/ns/ontology/`, `https://urpx.org/ns/shacl/core/`).
- A published JSON-LD context (`https://urpx.org/ns/context`), so instance data validates and types correctly against one referenced document.
- A curated corpus of twelve worked, validating test-case packages across two utilities (Pacific Gas & Electric, Consolidated Edison) and two jurisdictions (California, New York), covering time-of-use pricing, tariff filings, market-supply pricing, and resolved rate plan snapshots.
- Clear licensing: specification text under the W3C Software Notice and Document License, example datasets under CDLA-Permissive-2.0, source and tooling under Apache-2.0.
- Comprehensive documentation: a full data dictionary, per-section class diagrams, a tutorial, an FAQ, an API reference, and quality-assurance guidance.

---

## This release

- Version: 0.5.1.
- Specification files (ontology, shapes, SKOS mappings, JSON-LD context, documentation pages, diagrams): W3C Software Notice and Document License (`W3C-20150513`).
- Dataset files (test-case data, generated catalogs, per-test-case diagrams): CDLA-Permissive-2.0.
- Source, tooling, and repository metadata: Apache-2.0.
- All twelve shipped test-case packages, and the test-case catalog, declare v0.5.1.
- No term, class, property, or shape constraint changes from v0.5.0.
- The repository is REUSE-compliant: every file's license is recorded in an SPDX header, a `.license` sidecar, or `REUSE.toml`, and `reuse lint` passes.

The full license texts are in `LICENSES/`; the per-category assignment is recorded in `TRANSITION.md`.

---

## Migration

None. This release makes no term, class, property, or shape constraint changes; existing bindings, queries, and validating instance data continue to work unchanged.

---

## References

- [v0.5.0 Release Notes](urpx-release-notes-v0.5.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](../../urpx-changelog.md)
