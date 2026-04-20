<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX License Transition Plan

**Status:** Active — applies while URPX is in pre-Draft stage.
**Trigger event:** Working Group formal acceptance of URPX as a Draft.
**Last reviewed:** 2026-04-19

This document explains how the URPX repository will transition license
identifiers when the URPX Working Group (under LFESS) formally accepts
URPX materials as a Draft. It is the reviewer-facing runbook and the
source of truth for the transition manifest consumed by
`scripts/transition-license.py`.

---

## 1. Current state (pre-Draft)

All files in this repository are currently licensed under **Apache
License, Version 2.0**. This blanket licensing applies because URPX is
still in pre-Draft stage. The Apache-2.0 license permits the Working
Group and prospective implementers to review, fork, and evaluate the
materials without IP friction.

See [LICENSE](LICENSE) for the full Apache-2.0 text.

## 2. Post-Draft target licenses

Upon Working Group Draft acceptance, files transition by category:

| Category | Current | Post-Draft target | Rationale |
|---|---|---|---|
| **Specification documents** | Apache-2.0 | W3C Document License | Standard W3C-compatible license for specification text. Covers ontology, SHACL, SKOS mappings, and all document pages that define the URPX standard. |
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
future_license = "W3C-20231102"
future_license_name = "W3C Document License"
paths = [
    "ontology/**/*.ttl",
    "shacl/**/*.ttl",
    "skos/**/*.ttl",
    "documentation/index.md",
    "documentation/pages/**/*.md",
    "documentation/diagrams/**/*.md",
    "documentation/diagrams/**/*.mmd",
    "documentation/diagrams/**/*.svg",
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
]

# -----------------------------------------------------------------------------
# Third-party content - not subject to transition; governed by REUSE.toml
# -----------------------------------------------------------------------------
[[category]]
name = "third_party"
current_license = "governed by REUSE.toml"
future_license = "governed by REUSE.toml"
paths = [
    "test-cases/pge-e-elec-2026-01-01/assets/PGE_E-ELEC_2026-01-01.pdf",
]
```

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
   `Apache-2.0 -> W3C-20231102`, every dataset as
   `Apache-2.0 -> CDLA-Permissive-2.0`, source/meta files unchanged.
3. **Download the new license texts.** The script offers a flag:
   ```
   python3 scripts/transition-license.py --download-licenses
   ```
   which invokes `reuse download` for `W3C-20231102` and
   `CDLA-Permissive-2.0` into `LICENSES/`.
4. **Apply.** Once the preview is correct and license texts are in
   place:
   ```
   python3 scripts/transition-license.py --apply
   ```
   The script rewrites `SPDX-License-Identifier:` lines in inline
   headers (.ttl), updates companion `.license` sidecars, and adjusts
   REUSE.toml entries as needed.
5. **Verify.** Run `reuse lint` — must exit 0. Run a fresh ScanCode
   scan and compare metrics against the pre-transition snapshot.
6. **Update this document.** Change section 1 from "Active" to
   "Completed on YYYY-MM-DD". Move the manifest to historical reference
   status.
7. **Update CHANGELOG.md** with the transition entry.
8. **Operator commits the changes.** (The script never commits.)

## 5. Rollback

If the Working Group requests changes during Draft acceptance review:

1. Revert the single commit produced by `--apply` via `git revert`.
2. Re-run `reuse lint` to confirm clean state.
3. Leave this document in "Active" status; revisit once the Working
   Group confirms final acceptance.

## 6. Notes on individual spec files

Every specification file (.ttl inline header, .md/.mmd/.jsonld/.csv
sidecar) carries an `SPDX-Transition-License-After-Draft` field that
names the target license for its category. This field makes the
intended transition visible file-by-file so any reader — including LF
Energy TAC reviewers and future contributors — can trace the plan
without reading only this document.

The transition script treats those fields as advisory metadata; the
authoritative source of truth for the transition remains the manifest
in section 3 of this document.

## 7. Relationship to LFESS governance

The LFESS Working Group Charter for URPX designates the Working Group
as the responsible body for promoting URPX materials through stages
(Sandbox -> Draft -> Approved). The choice of the W3C Document License
for specification text at Draft aligns URPX with broader W3C
compatibility goals and is consistent with the repository's historical
note (see README) that "subsequent versions will be published under a
W3C license."

Contact: `urpx-wg@lists.lfenergy.org` for Working Group matters;
`security@fluxtailor.com` for security concerns (see [SECURITY.md](SECURITY.md)).
