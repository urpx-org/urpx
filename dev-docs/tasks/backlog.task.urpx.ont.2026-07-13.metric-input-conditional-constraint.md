---
id: taskurpxontmetricinputconditionalconstraint
title: "Conditional constraint: profile-metric inputs must name their profile property"
desc: "Backlog: tighten MetricInputShape so a MetricInput typed profileMetricInput requires profileMetricProperty, with a negative fixture proving the constraint fires. Encode with SHACL-core sh:or, not sh:if/sh:then."
updated: 1783900800000
created: 1783900800000
---

# MetricInput conditional constraint

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; today's shapes accept the weaker form, no existing data is wrong |
| **Surface** | `shacl/urpx-shacl.ttl` (`MetricInputShape`), one negative test fixture |

## Problem

`MetricInputShape` requires `metricInputType` (1..1) and allows
`profileMetricProperty` 0..1 unconditionally. A `MetricInput` whose type is
`profileMetricInput` but which names no `profileMetricProperty` therefore
validates, even though it is unevaluable — the consumer cannot know which
profile property supplies the value.

## Approach

1. Add a conditional constraint to `MetricInputShape`: when
   `metricInputType` is `urpx:profileMetricInput`, `profileMetricProperty`
   must be present (minCount 1). SHACL core has no if/then construct —
   encode as `sh:or` (either the type is not `profileMetricInput`, or the
   property is present), or as a SPARQL-based constraint if the `sh:or`
   form proves unreadable.
2. Positive fixture: a `profileMetricInput` with `profileMetricProperty` —
   passes.
3. Negative fixture: a `profileMetricInput` without it — must fail, and the
   validation harness must assert the failure (a fixture that must fail is
   only useful if something checks that it does).
4. Data dictionary row for `profileMetricProperty` updated to state the
   conditionality.

## Acceptance

1. The weaker instance fails validation; all existing test cases still pass.
2. The negative fixture is wired into the validation run as an
   expected-failure.
