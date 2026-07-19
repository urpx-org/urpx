---
id: taskurpxonthighlydynamicpriceseriesimplementation
title: "Implement highly dynamic price series (SPEC-URPX-ONT-042)"
desc: "Backlog: apply the price-series interchange edit set — PriceTimeSeries, PriceObservation, PriceStatusValue, producedByRule, ten domain widenings, and the two feed publication-type member declarations — to the ontology and SHACL, with samples and validation."
updated: 1784419200000
created: 1784419200000
---

# Implement highly dynamic price series (SPEC-URPX-ONT-042)

| Field | Value |
|-------|-------|
| **Status** | Backlog — awaiting working group review of the spec |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, documentation pages, data dictionary regen |
| **Source** | [spec.urpx.ont.042.highly-dynamic-price-series.md](../specs/spec.urpx.ont.042.highly-dynamic-price-series.md) — the spec carries the complete before/after Turtle for every edit |
| **Samples** | [dev-docs/samples/comed-rrtp-hdp/](../samples/comed-rrtp-hdp/) · [dev-docs/samples/pge-nbt-export-series/](../samples/pge-nbt-export-series/) · [dev-docs/samples/pge-b6-pdp-event/](../samples/pge-b6-pdp-event/) |
| **Depends on** | SPEC-URPX-ONT-041 implementation (the samples tie series to value expressions) |

## Problem

URPX has no vocabulary for the stream of resolved price values — the extrapolated form that machine-to-machine rate services exchange. The spec defines a compact, maximally-reusing payload; this task applies it.

## Approach

1. **E-01/E-02** — add `PriceTimeSeries` and `PriceObservation` classes, `hasPriceObservation`, `intervalStart`, `intervalEnd`, and both node shapes.
2. **E-03** — add the `PriceStatusValue` enumeration (three members), `priceStatus`, and the value shape.
3. **E-04** — add `producedByRule`.
4. **E-05** — apply the ten domain widenings exactly as listed (verify each property's current declaration against the live tree first; the spec is pinned to commit `3d474cbd`).
5. **E-06** — declare `marketPriceFeed` and `highlyDynamicPrices` as typed individuals with labels and definitions.
6. Validate the three sample sets, including the projected-then-final supersession pair; regenerate the data dictionary.

## Acceptance

1. Both `.ttl` files parse; all existing test cases validate with zero new violations.
2. All linked samples validate against the merged edit set.
3. Negative tests pass: observation without `intervalStart` or `unitPrice` rejected; status outside the enumeration rejected.
4. Data dictionary regenerated; changelog entry written describing the change.
5. The spec's open questions (§9) are answered or explicitly carried before the batch is committed.
