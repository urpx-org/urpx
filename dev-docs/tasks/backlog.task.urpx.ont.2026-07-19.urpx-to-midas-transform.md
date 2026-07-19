---
id: taskurpxonturpxtomidastransform
title: "Build the URPX to MIDAS reference transform (SPEC-URPX-ONT-044)"
desc: "Backlog: implement the reference transform from URPX rate plans + price time series to the MIDAS v2.0 upload schema per the normative mapping in SPEC-URPX-ONT-044, validate the worked example against the published MIDAS schema, and summarize the mapping on the interoperability page."
updated: 1784419200000
created: 1784419200000
---

# Build the URPX to MIDAS reference transform (SPEC-URPX-ONT-044)

| Field | Value |
|-------|-------|
| **Status** | Backlog — awaiting working group review of the spec |
| **Assignment** | **Unassigned — open for any WG member to pick up** (California participants especially welcome) |
| **Surface** | `scripts/` (new transform), `documentation/pages/urpx-interoperability.md`, [dev-docs/samples/midas-transform/](../samples/midas-transform/) |
| **Source** | [spec.urpx.ont.044.urpx-to-midas-transform.md](../specs/spec.urpx.ont.044.urpx-to-midas-transform.md) — the normative field mapping |
| **Depends on** | SPEC-URPX-ONT-041/042/043 implementations (the transform consumes value expressions, series, and endpoints) |

## Problem

MIDAS is the operating machine-to-machine rate channel in California, and URPX already carries the RIN as a first-class identifier scheme. Without a mechanical bridge from URPX to the MIDAS upload schema, maintaining a rate plan in URPX and serving it through MIDAS means double bookkeeping.

## Approach

1. Implement the transform in the repository's existing script tooling (Deno/TypeScript under `scripts/`), reading a URPX package plus its price time series and emitting a MIDAS v2.0 upload payload.
2. Enforce the spec's §4 constraints (allowed resolutions, gap-free equal-count unit streams, USD-only) and fail loudly on ambiguous `RateType` derivation (§3) — no guessing.
3. Report the documented information losses (§5: price status, supersession chains, expressions, provenance) on every run.
4. Honor the known MIDAS schema quirks recorded in the spec (§6: `RIN` vs `RateID` upload key; all nine value fields treated as required).
5. Regenerate the worked example in [dev-docs/samples/midas-transform/](../samples/midas-transform/) from the PG&E Net Billing Tariff export series using the transform, replacing the hand-authored draft.
6. Summarize the mapping on the interoperability documentation page.

## Acceptance

1. The transform's output for the PG&E Net Billing Tariff export series validates against the published MIDAS upload schema and matches the sample payload.
2. Constraint violations (wrong resolution, non-USD currency, gaps, ambiguous rate type) each produce a named error in a test run.
3. Interoperability page carries the mapping summary; changelog entry written describing the addition.
4. The spec's open questions (§9) are answered or explicitly carried before the batch is committed.
