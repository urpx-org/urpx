---
id: taskurpxontgh32additivetierboundallowance
title: "GH #32 — Additive / relative tier bound (baseline-allowance delta)"
desc: "Backlog (unassigned): decide whether a ServiceBracket can publish a signed bound delta so an additive baseline allowance is stored as the delta rather than fanned out into precomputed absolute cells. Prefer reusing the existing basedOn/adder pattern (lifted to bounds) before adding a new upperBoundDelta property; if a property is added, resolve what the delta references and whether the closed ServiceBracketShape opens. GitHub issue #32."
updated: 1783900800000
created: 1783900800000
---

# GH #32 — Additive / relative tier bound

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 vocabulary-gap candidate; today's data can be modelled by precomputing absolute cells, so nothing is wrong, only bloated |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **GitHub issue** | [#32](https://github.com/urpx-org/urpx/issues/32) (WG members have access) |
| **Surface** | `ontology/urpx-ontology.ttl` + `shacl/urpx-shacl.ttl` (`ServiceBracket` / `ServiceBracketShape`), condition-modeling documentation, at least one fixture |
| **Source** | WG v0.3.0 review, gap 1 — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md`; our response `report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md` |

## Problem

Some baseline allowances publish as a *signed delta on an existing tier bound*, not as an
absolute bound:

- PG&E Standard Medical Baseline adds **+16.438 kWh/day** to the Tier 1 allowance — one
  fixed constant, uniform across territory, code, and season, applying to all five PG&E
  baseline-having residential schedules.
- SCE heat-pump water heater adds **+1.9 / 2.6 / 3.0 kWh/day** by season.

`ServiceBracket` carries absolute bounds only (`upperBound` / `lowerBound`) and
`ServiceBracketShape` is closed. So today the only way to represent the allowance is to
recompute an absolute ceiling per (territory, season, schedule) cell. Two costs follow: the
*published* figure — the delta — never appears as data, and one uniform allowance fans out
into many precomputed cells (issue #32 estimates ~240 entities per schedule) whose literals
diverge even though the underlying rule is a single constant.

## Approach

Decide among these outcomes (including "no change"):

1. **Reuse existing pattern (preferred first).** Confirm whether the `basedOn` +
   multiplier/adder pattern already used for prices can be lifted to bounds, so no new
   property is needed. If it carries, this is the answer — it reuses vocabulary.
2. **New signed property.** The review sketch proposes a single signed `upperBoundDelta`
   (`xsd:decimal`) on `ServiceBracket`, mutually exclusive with an absolute `upperBound`
   (sign carries add vs. subtract; per-season variants ride `appliesInSeason`; a
   `lowerBoundDelta` twin only if a real lower-tier case appears). If taken, answer first:
   - **What does the delta reference?** "Shift the base tier's bound" implies the base
     absolute bound it modifies, which lives on the underlying schedule/rate plan, not on
     the delta bracket. With "no new relator," how does a delta bracket identify *which*
     bound it shifts? Without that link the delta is unevaluable.
   - **Shape cost.** Mutually-exclusive-with-`upperBound` on a closed `ServiceBracketShape`
     needs an `sh:xone` (or opening the shape). Is a one-property addition worth that?
3. **Out of scope.** Accept prose-only / precomputed-cell modelling for now.

Any structured outcome needs a positive fixture (a delta bracket that resolves to the
correct absolute bound) and a data-dictionary row.

## Notes / relations

- Issue #32 also raises profile-alternative-dimension stacking (medical-eligibility as a
  third dimension) against `PlanElementsShape.hasProfileAlternatives` `sh:maxCount 1` —
  tracked separately (discussion #31,
  `task.urpx.ont.2026-07-13.profile-alternative-eligibility-unification.md`). Keep the
  bound-delta question distinct from the stacking question.

## Acceptance

1. A recorded decision among the outcomes above, with rationale.
2. If a structured form is adopted: vocabulary/SHACL change lands with a positive fixture
   that resolves to the correct absolute bound, a negative fixture if the mutual-exclusion
   constraint is added, all existing test cases still pass, and the data dictionary reflects
   the new property and its conditionality.
