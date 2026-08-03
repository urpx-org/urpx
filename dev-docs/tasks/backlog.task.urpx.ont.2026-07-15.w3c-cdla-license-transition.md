---
id: taskurpxontw3ccdlalicensetransition
title: "Execute the post-Draft W3C and CDLA license transition"
desc: "Backlog: run the license transition described in TRANSITION.md once the working group formally accepts URPX as a Draft — specification files move from Apache-2.0 to the W3C Document License and datasets to CDLA-Permissive-2.0, with source and meta files staying Apache-2.0."
updated: 1784073600000
created: 1784073600000
---

# Execute the post-Draft W3C and CDLA license transition

| Field | Value |
|-------|-------|
| **Status** | Backlog — next up. Ready to execute; gated on the working group's formal acceptance of URPX as a Draft. |
| **Runbook** | [TRANSITION.md](../../TRANSITION.md) — the full plan, the file-classification manifest, and the step-by-step procedure. |
| **Surface** | SPDX headers and `.license` sidecars across `ontology/`, `shacl/`, `skos/`, and `documentation/`; dataset files under `test-cases/`; `REUSE.toml`; `LICENSES/`; `TRANSITION.md`. No ontology or SHACL semantics change. |

## Problem

The repository is currently licensed under Apache-2.0 throughout, which is the
correct license for the pre-Draft stage. When the working group accepts URPX as a
Draft, the specification files move to the W3C Document License and the dataset
files to CDLA-Permissive-2.0, while source code and meta files stay Apache-2.0.
The plan and the automation for this already exist; what remains is to run them at
the moment the trigger event occurs. Making this a visible task means the next step
after the acceptance vote is on the record rather than living only inside the
runbook.

## Approach

Follow the procedure in [TRANSITION.md](../../TRANSITION.md) §4:

1. Record the acceptance date and the working group decision reference.
2. Preview the transition (`python3 scripts/transition-license.py`) and confirm
   every specification file shows `Apache-2.0 -> W3C-20231102`, every dataset shows
   `Apache-2.0 -> CDLA-Permissive-2.0`, and source and meta files are unchanged.
3. Download the new license texts into `LICENSES/`
   (`python3 scripts/transition-license.py --download-licenses`).
4. Apply (`python3 scripts/transition-license.py --apply`).
5. Run `reuse lint` and confirm it exits clean.
6. Update `TRANSITION.md` from "Active" to "Completed on YYYY-MM-DD" and move the
   manifest to historical reference status.
7. Add a transition entry to `urpx-changelog.md`.

## Acceptance

1. `reuse lint` passes after the transition.
2. Every specification file carries the W3C Document License identifier and every
   dataset file carries CDLA-Permissive-2.0; source and meta files remain
   Apache-2.0.
3. `TRANSITION.md` is marked completed with the acceptance date, and the changelog
   records the transition.
