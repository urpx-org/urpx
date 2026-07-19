---
id: taskurpxontvalueexpressionsimplementation
title: "Implement value expressions (SPEC-URPX-ONT-041)"
desc: "Backlog: apply the value-expression edit set — ValueExpression class, three operators (max, min, round), ConditionalValueNode, hasValueExpression attachment points, string-formula demotions — to the ontology and SHACL, with samples and validation."
updated: 1784419200000
created: 1784419200000
---

# Implement value expressions (SPEC-URPX-ONT-041)

| Field | Value |
|-------|-------|
| **Status** | Backlog — awaiting working group review of the spec |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, documentation pages, data dictionary regen |
| **Source** | [spec.urpx.ont.041.value-expressions.md](../specs/spec.urpx.ont.041.value-expressions.md) — the spec carries the complete before/after Turtle for every edit |
| **Samples** | [dev-docs/samples/comed-rrtp-hdp/](../samples/comed-rrtp-hdp/) · [dev-docs/samples/pge-b6-pdp-event/](../samples/pge-b6-pdp-event/) |

## Problem

Price calculation semantics are free-text strings (`calculationFormula`, `formula`), and `PriceUpdateRule` promises formulas its closed shape cannot carry. The spec defines the structured replacement; this task applies it.

## Approach

Apply the spec's edits in order, one commit-reviewable block at a time. The spec is the single source for the Turtle; do not restyle it while applying.

1. **E-01** — add `urpx:ValueExpression` + `ValueExpressionShape`.
2. **E-02** — widen `urpx:rootNode` domain and range (verify current line numbers first; the spec is pinned to commit `3d474cbd` and lines may have drifted).
3. **E-03** — add `maxOperator`, `minOperator`, `roundOperator`; update the `OperatorValue` `owl:oneOf` and `OperatorValueShape` `sh:in`.
4. **E-04** — add `urpx:ConditionalValueNode` + `guard`/`thenOperand`/`elseOperand` + shape.
5. **E-05** — widen `leftOperand`/`rightOperand` ranges; extend `OperationNodeShape`'s operand `sh:or` lists only (leave `ComparisonNodeShape` untouched).
6. **E-06** — add `urpx:hasValueExpression`; insert the property into `CalculationMethodShape`, `PriceUpdateRuleShape`, and the `calculationRule` inline shape in `MetricInputShape`.
7. **E-07** — apply the three annotation demotions.
8. Update the samples if review changed any term names; regenerate the data dictionary.

## Acceptance

1. Both `.ttl` files parse; full SHACL validation of all existing test cases shows zero new violations.
2. The spec's three worked examples (§6) validate; the samples validate against the merged edit set. Fixture coverage must include a `CalculationMethod`-level `hasValueExpression` (not only the `PriceUpdateRule` attachment) and the `maxOperator`/`roundOperator` operators (the §6.2 demand ratchet is the natural candidate), so every minted term has a validating instance.
3. Negative test passes: a `ConditionalValueNode` as a `ComparisonNode` operand is rejected.
4. Data dictionary regenerated; new terms present with definitions; changelog entry written describing the change.
5. The spec's open questions (§10) are answered or explicitly carried before the batch is committed.
