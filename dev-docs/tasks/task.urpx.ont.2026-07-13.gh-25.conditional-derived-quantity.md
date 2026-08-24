---
id: taskurpxontgh25conditionalderivedquantity
title: "GH #25 — Gating a derived quantity on a condition (standby demand credit)"
desc: "Backlog (unassigned): decide whether and where a condition may attach to a derived quantity so a derivation fires only when the condition holds (sketch: hasConditionExpression on a derived MetricInput or a scoping ApplicabilityRule, reusing ConditionExpression). A derivation now lives on the named CalculationMethod class, so the Approach section needs re-deriving; guard the boundary against a general rule engine. GitHub issue #25."
updated: 1783900800000
created: 1783900800000
---

# GH #25 — Gating a derived quantity on a condition

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 vocabulary-gap candidate; the conditional derivation currently has no structured home |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **GitHub issue** | [#25](https://github.com/urpx-org/urpx/issues/25) (WG members have access) |
| **Surface** | `ontology/urpx-ontology.ttl` + `shacl/urpx-shacl.ttl` (`MetricInput` / `CalculationMethod` / `ApplicabilityRule` / `ConditionExpression`), condition-modeling documentation, one fixture |
| **Source** | WG v0.3.0 review, gap 2 — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md`; our response `report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md` |

## Problem

CPAU Schedule E-4 TOU §D.7.d: a standby demand credit reduces billing (Maximum) Demand by
the sum of the Maximum Generation of a customer's non-utility generators — **but only when
those generators are non-operational**. The reduction is a *derivation*; "only when
non-operational" is a *condition on it*.

The two surrounding facts are already expressible after the v0.3.0 condition-expression
work: eligibility-without-enrollment as an `EligibilityRule` + `ConditionExpression`, and
"non-operational" as `interconnectionStatus` equals `disconnectedStatus`. What is missing is
a place to **attach a condition to a derived quantity**.

**The obstacle this task was written around is gone.** A calculated `MetricInput` states its derivation on a `urpx:CalculationMethod` reached through `urpx:hasCalculationMethod`, using `urpx:calculatedBasedOn` for the source metric inputs and `urpx:calculationFormula` for the formula text. That is a named class with its own SHACL shape, so a condition can attach there directly and the shape can gain the path. The anonymous node this task describes could not carry one. `CalculationMethod.calculationFormula` (an `xsd:string`) remains prose rather than structure.

## Approach

**Needs re-deriving before anyone picks this up.** Every option below was designed around keeping an anonymous derivation node untouched, and that node no longer exists. Whoever opens this task re-derives the options against the named `CalculationMethod` attachment point first; the list is kept as written rather than silently rewritten.

Decide among (including "no change"):

1. **New attachment point (leaning here).** Let the derived `MetricInput` carry a
   `hasConditionExpression`, reusing the existing `ConditionExpression` grammar and keeping
   the closed `calculationRule` node untouched. Answer first:
   - **Scope / boundary.** Conditional evaluation in the calculation layer is the thin end
     of a rule engine. Bound this to a single gated derivation; state explicitly what is
     *not* being added (no branching, no ordering, no side effects).
   - **`ApplicabilityRule` overload.** The alternate sketch scopes the derivation with an
     `ApplicabilityRule`; confirm this does not collide with its existing meaning
     (applicability = which prices apply). Keep applicability distinct from the derivation
     gate (see `task.urpx.ont.2026-07-13.profile-alternative-eligibility-unification.md`).
2. **`calculationFormula` is the intended path.** Confirm prose formula is the sanctioned
   escape hatch and document it. (Weak: not machine-resolvable.)
3. **Out of scope** for now.

## Acceptance

1. A recorded decision among the outcomes above, with rationale and an explicit statement of
   the rule-engine boundary if any conditional attachment is added.
2. If a structured form is adopted: vocabulary/SHACL change lands with a fixture where the
   derivation fires only when its condition holds (and a companion showing it does not fire
   otherwise), all existing test cases still pass, and condition-modeling documentation
   carries the worked standby-credit example.
