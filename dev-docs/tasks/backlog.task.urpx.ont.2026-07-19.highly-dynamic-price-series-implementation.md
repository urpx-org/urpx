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

1. **E-01/E-02** — add `PriceTimeSeries` and `PriceObservation` classes, `hasPriceObservation`, `intervalStart`, `intervalEnd`, and both node shapes. **Open investigation before minting `PriceObservation`:** evaluate reusing the existing `Price` as the observation unit instead — `Price` already carries `startDateTime`/`endDateTime` (`xsd:dateTime`, already admitted by `PriceShape`), `unitPrice`, and `touPeriodNumber`, so a minted `PriceObservation` may be a redundant twin. Do **not** subclass `Price` (maintenance cost). Decide whether `PriceShape`'s observation-irrelevant permitted fields (`hasDynamicPricing`, `appliesInSeason`, the five-way price `sh:xone`) are tolerable on an observation, or justify a tighter unit despite the reuse loss. **Three resolution paths are on the table (see spec §2):** (1) mint `PriceObservation` with its tight closed shape; (2) reuse `Price` as the observation unit as-is; (3) reuse `Price` but validate observation data against a separate, more closed profile shape rather than against `PriceShape`. Note for path (3): SHACL cannot make `PriceShape` reject an observation and hand it off to another shape — a node is checked against every target-matching shape and none can be suppressed — so a profile shape must itself *target* observations, which for a same-typed `Price` needs a context or SPARQL target (URPX uses neither today; every shape targets by class). Whichever path wins, reuse the existing `startDateTime`/`endDateTime` and do **not** mint `intervalStart`/`intervalEnd` (redundant twins). If the outcome is path (2) or (3), E-02 changes from a class mint to a documented usage pattern (plus, for path 3, the profile shape), and the observation-timing idiom collapses onto `startDateTime`/`endDateTime`.
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
