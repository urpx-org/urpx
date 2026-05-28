<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX v0.2.1 Release Notes

**Released:** 2026-05-28
**Type:** Pre-draft patch release
**Previous release:** [`v0.2.0`](urpx-release-notes-v0.2.0.md)

---

## Overview

URPX v0.2.1 is a patch release against v0.2.0. It corrects a SHACL cardinality constraint, refreshes the PG&E E-TOU-C test case to use the `ServiceBracket` separation introduced in v0.2.0, and updates the ontology and SHACL metadata to the `v0.2.1` version IRI.

No structural changes to the ontology. Existing v0.2.0-conformant data does not require migration.

---

## What Changed

### SHACL

| Item | Change |
|------|--------|
| `urpx:summaryAmount` cardinality | Updated cardinality constraint in `urpx-shacl.ttl` |

### Test Cases

| Item | Change |
|------|--------|
| PG&E E-TOU-C 2026-03-01 | Refreshed to use `ServiceBracket` separation per v0.2.0 model |
| PG&E E-TOU-C manifest entry | Added to test-case manifest |

### Metadata

| File | Change |
|------|--------|
| `ontology/urpx-ontology.ttl` | `owl:versionIRI`, `owl:versionInfo`, `dcterms:hasVersion`, distribution URLs updated to `v0.2.1` |
| `shacl/urpx-shacl.ttl` | `owl:versionIRI`, `dcat:version`, `dcterms:hasVersion`, distribution URLs updated to `v0.2.1` |

---

## Migration

No migration required. All changes are backwards-compatible with v0.2.0.

If you validate data against `urpx-shacl.ttl`, update your local copy of the SHACL file. The `summaryAmount` cardinality fix may surface previously-silent validation issues on documents that populate this field.

---

## References

- [v0.2.0 Release Notes](urpx-release-notes-v0.2.0.md)
