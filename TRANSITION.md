<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX License Transition Plan

**Status:** Completed on 2026-09-09.
**Trigger event:** Working Group formal acceptance of URPX as a Draft.
Satisfied 2026-07-17.
**Last reviewed:** 2026-09-09.

This document explains how the URPX repository will transition license
identifiers when the URPX Working Group (under LFESS) formally accepts
URPX materials as a Draft. It is the reviewer-facing runbook and the
source of truth for the transition manifest consumed by
`scripts/transition-license.py`.

---

## 1. Current state (Draft, transitioned 2026-09-09)

Following Working Group Draft acceptance (2026-07-17), files transition by the categories in section 2: specification files carry `W3C-20150513`, datasets carry `CDLA-Permissive-2.0`, and source and meta files stay under **Apache License, Version 2.0**, unchanged. See [LICENSE](LICENSE) for the Apache-2.0 text and `LICENSES/` for the others.

## 2. Post-Draft target licenses

Upon Working Group Draft acceptance, files transition by category:

| Category | Current | Post-Draft target | Rationale |
|---|---|---|---|
| **Specification documents** | Apache-2.0 | W3C-20150513 (W3C Software Notice and Document License) | Standard W3C-compatible license for specification text. Covers ontology, SHACL, SKOS mappings, and all document pages that define the URPX standard. |
| **Datasets** | Apache-2.0 | CDLA-Permissive-2.0 | Community Data License Agreement Permissive 2.0 — industry standard for open datasets distributed alongside specifications. Covers test-case data and index files. |
| **Source code / tooling** | Apache-2.0 | Apache-2.0 (no change) | Scripts and executable tooling remain under Apache-2.0 regardless of specification status. |
| **Meta files** | Apache-2.0 | Apache-2.0 (no change) | LICENSE, NOTICE, CONTRIBUTING, SECURITY, README, REUSE.toml, .gitignore, .gitattributes remain under Apache-2.0 — they govern the project, they are not the specification. |

## 3. File-classification manifest

This TOML block is the **source of truth** consumed by
`scripts/transition-license.py`. Edit only with operator review.

```toml
[manifest]
version = "1.0.0"
trigger_event = "Working Group Draft acceptance"
copyright_holder = "Flux Tailor LLC"

# -----------------------------------------------------------------------------
# Specification files -> W3C Document License at Draft
# -----------------------------------------------------------------------------
[[category]]
name = "specification"
current_license = "Apache-2.0"
future_license = "W3C-20150513"
future_license_name = "W3C Software Notice and Document License (2015-05-13)"
paths = [
    "ontology/**/*.ttl",
    "shacl/**/*.ttl",
    "skos/**/*.ttl",
    "documentation/index.md",
    "documentation/pages/**/*.md",
    "documentation/diagrams/**/*.md",
    "documentation/diagrams/**/*.mmd",
    "documentation/diagrams/**/*.dot",
    "documentation/diagrams/**/*.svg",
    "context/**/*.jsonld",
]

# -----------------------------------------------------------------------------
# Datasets -> CDLA-Permissive-2.0 at Draft
# -----------------------------------------------------------------------------
[[category]]
name = "dataset"
current_license = "Apache-2.0"
future_license = "CDLA-Permissive-2.0"
future_license_name = "Community Data License Agreement - Permissive 2.0"
paths = [
    "test-cases/**/*.jsonld",
    "test-cases/**/*.csv",
    "test-cases/index.md",
    "test-cases/manifest-all.json",
    "test-cases/**/assets/diagram.dot",
    "test-cases/**/assets/diagram.svg",
    "dev-docs/samples/**/*.json",
    "dev-docs/samples/**/*.jsonld",
]

# -----------------------------------------------------------------------------
# Source code / tooling -> no change
# -----------------------------------------------------------------------------
[[category]]
name = "source"
current_license = "Apache-2.0"
future_license = "Apache-2.0"
paths = [
    "scripts/**/*.py",
    "scripts/**/*.sh",
    "scripts/**/*.js",
]

# -----------------------------------------------------------------------------
# Meta files -> no change
# -----------------------------------------------------------------------------
[[category]]
name = "meta"
current_license = "Apache-2.0"
future_license = "Apache-2.0"
paths = [
    "README.md",
    "LICENSE",
    "NOTICE",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "TRANSITION.md",
    "REUSE.toml",
    ".gitignore",
    ".gitattributes",
    "urpx-changelog.md",
    "AGENTS.md",
    "CODE_OF_CONDUCT.md",
    "GOVERNANCE.md",
    "MAINTAINERS.md",
    "CITATION.cff",
    ".github/**",
    "dev-docs/**/*.md",
]

# -----------------------------------------------------------------------------
# Third-party content - not subject to transition; governed by REUSE.toml
# -----------------------------------------------------------------------------
[[category]]
name = "third_party"
current_license = "governed by REUSE.toml"
future_license = "governed by REUSE.toml"
paths = [
    "test-cases/pge-e-elec/assets/PGE_E-ELEC_2026-01-01.pdf",
    "test-cases/pge-e-tou-c/assets/PGE_E-TOU-C_2026-03-01.pdf",
    "test-cases/coned-sc1-rate-i/assets/coned_sc1_rate1_2026-02-01.pdf",
    "test-cases/coned-sc1-rate-i/assets/conedtariffbook2025_general_rule_26.pdf",
    "test-cases/coned-sc1-rate-i/assets/mac-202601.pdf",
    "test-cases/coned-sc1-rate-i/assets/mac-202602.pdf",
    "test-cases/coned-sc1-rate-i/assets/mac-202603.pdf",
    "test-cases/coned-sc1-rate-i/assets/mac-202604.pdf",
    "test-cases/coned-sc1-rate-i/assets/mac-202605.pdf",
    "test-cases/coned-sc1-rate-i/assets/lds-appnd-2025.csv",
    "test-cases/coned-sc1-rate-i-supply-ref/assets/lds-appnd-2025.csv",
]
```

**Note on the specification target identifier.** `W3C-20150513` is the valid SPDX identifier used here for the W3C Software Notice and Document License. The SPDX record states that the 2023 minor modifications did not require a new identifier, so the same identifier applies. `W3C-20231102` is retained here only as the invalid identifier originally recorded in this transition plan.

`documentation/pages/urpx-data-dictionary.md` and `documentation/diagrams/**/*.svg` (seventeen files: sixteen dictionary SVGs plus `documentation/diagrams/urpx-temporal-versioning-summary.svg`) match this section's globs conceptually but carry no inline header or sidecar; REUSE.toml annotations carry their license instead, since the script's rewrite cannot reach either. Both now carry `W3C-20150513` there.

## 4. Transition procedure

When the Working Group accepts URPX to Draft:

1. **Operator confirms the trigger event.** Record the acceptance date
   and any Working Group decision references.
2. **Preview the transition.** Run:
   ```
   python3 scripts/transition-license.py
   ```
   Default mode is preview. No files modified. Review the summary diff.
   Every specification file should appear as
   `Apache-2.0 -> W3C-20150513`, every dataset as
   `Apache-2.0 -> CDLA-Permissive-2.0`, source/meta files unchanged.
3. **Download the new license texts.** The script offers a flag:
   ```
   python3 scripts/transition-license.py --download-licenses
   ```
   which invokes `reuse download` for `W3C-20150513` and
   `CDLA-Permissive-2.0` into `LICENSES/`.
4. **Apply.** Once the preview is correct and license texts are in
   place:
   ```
   python3 scripts/transition-license.py --apply
   ```
   <!-- REUSE-IgnoreStart -->
   The script rewrites `SPDX-License-Identifier:` lines in inline
   headers (.ttl), updates companion `.license` sidecars, and adjusts
   REUSE.toml entries as needed.
   <!-- REUSE-IgnoreEnd -->
5. **Verify.** Run `reuse lint` — must exit 0. Run a fresh ScanCode
   scan and compare metrics against the pre-transition snapshot.
6. **Update this document.** Change section 1 from "Active" to
   "Completed on YYYY-MM-DD". Move the manifest to historical reference
   status.
7. **Update `urpx-changelog.md`** with the transition entry.
8. **Operator commits the changes.** (The script never commits.)

## 5. Rollback

If the Working Group requests changes during Draft acceptance review:

1. Revert the single commit produced by `--apply` via `git revert`.
2. Re-run `reuse lint` to confirm clean state.
3. Leave this document in "Active" status; revisit once the Working
   Group confirms final acceptance.

## 6. Notes on individual spec files

Specification and dataset files carry their current SPDX identifiers through inline headers, sidecars, or REUSE.toml as described above. The historical manifest in section 3 records the transition classification consumed by `scripts/transition-license.py`.

## 7. Relationship to LFESS governance

The LFESS Working Group Charter for URPX designates the Working Group
as the responsible body for promoting URPX materials through stages
(Sandbox -> Draft -> Approved). The choice of the W3C Document License
for specification text at Draft aligns URPX with broader W3C
compatibility goals and is consistent with the repository's historical
note (see README) that "subsequent versions will be published under a
W3C license."

Contact: `urpx-wg@lists.lfenergy.org` for Working Group matters;
`security@urpx.org` for security concerns (see [SECURITY.md](SECURITY.md)).
