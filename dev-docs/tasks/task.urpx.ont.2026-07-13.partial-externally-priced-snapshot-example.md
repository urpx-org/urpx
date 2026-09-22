---
id: taskurpxontpartialexternallypricedsnapshotexample
title: "Worked example: partial (externally-priced) resolved snapshot"
desc: "Backlog (unassigned) from Don's v0.3.0 Q5: produce a worked partial RatePlanVersion for a CCA / Direct Access customer (delivery self-contained, generation priced by a third party) that exercises PriceDefinitionReference with retrievedElsewhere and a CoverageClaim of partial / not-self-contained. Confirms the partial-coverage mechanism the ConEd example does not exercise."
updated: 1783900800000
created: 1783900800000
---

# Worked example: partial (externally-priced) resolved snapshot

| Field | Value |
|-------|-------|
| **Status** | Backlog — worked example; the mechanism exists but is unexercised |
| **Assignment** | **Unassigned — open for any WG member to pick up** (pairs with the California worked-example set, `task.urpx.ont.2026-07-13.california-worked-example-set.md`) |
| **Surface** | One worked `RatePlanVersion` fixture + validation wiring; possibly a data-dictionary clarification |
| **Source** | WG v0.3.0 review, Q5 — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md`; walkthrough §6.5 |

## Problem

The partial-coverage mechanism is present (`PriceDefinitionReference` with
`referenceInclusion` = `retrievedElsewhere`, and `selfContained` derived from it), but the
ConEd worked snapshot is fully self-contained, so it is never exercised. The common
California case — a CCA or Direct Access customer whose delivery is complete and
self-contained while generation is priced by a third party — is exactly the partial case.

## Approach

1. Build a worked `RatePlanVersion` where delivery is included and generation is
   `retrievedElsewhere`, with a `CoverageClaim` of partial / not-self-contained.
2. Confirm the intended division of labour: `CoverageClaim` states the *verdict*
   (complete/partial, self-contained or not); *which* components are external is carried by
   the `PriceDefinitionReference` relators, not enumerated separately on the claim.
3. Wire the fixture into the validation run.

## Acceptance

1. A validating partial snapshot exercising `PriceDefinitionReference` / `retrievedElsewhere`.
2. The `CoverageClaim`-vs-`PriceDefinitionReference` division of labour is documented and
   demonstrated by the fixture.
