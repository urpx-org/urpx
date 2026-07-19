# ComEd Residential Real-Time Pricing — highly dynamic prices worked set

Models a wholesale-indexed hourly residential rate plan with the proposed value-expression, price-series, and endpoint-discovery vocabulary. Real-Time Pricing is the utility's name for this rate plan type; the umbrella term for the sub-daily price streams here is *highly dynamic prices*.

**Synthetic test data — not for production use.** Prices are illustrative and are not ComEd's actual prices. Every document marks its pricing content `estimated`.

## Files

| File | Type | Purpose |
|---|---|---|
| `comed-rrtp-plan.jsonld` | Rate plan | Full representation: plan identity, a generic market price package for the PJM day-ahead wholesale driver, the authored supply and delivery content (with the hourly supply value expression and a discovery endpoint), and a resolved snapshot with a coverage claim. |
| `comed-rrtp-lmp-series-20260115.jsonld` | Driver series | One day of hourly PJM day-ahead wholesale prices — the input to the conformance vector. |
| `comed-rrtp-series-20260115-dayahead.jsonld` | Expected series | The resolved hourly supply prices for the same day — the expected output of the conformance vector. |
| `comed-rrtp-series-20260115-final.jsonld` | Settled series | The same day settled, superseding the day-ahead series; three peak-evening hours carry final values. Demonstrates true-up. |

## What each specification is exercised by

- [`spec.urpx.ont.041.value-expressions.md`](../../specs/spec.urpx.ont.041.value-expressions.md) — the `PriceUpdateRule` `comed:pur-day-ahead-lmp` carries a `ValueExpression`: an `OperationNode` adding the wholesale-price metric input and the 0.00735 retail adder.
- [`spec.urpx.ont.042.highly-dynamic-price-series.md`](../../specs/spec.urpx.ont.042.highly-dynamic-price-series.md) — the three `PriceTimeSeries` documents, with `PriceObservation`s, `priceStatus`, and a `supersedes` link.
- [`spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md`](../../specs/spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md) — the `DynamicPriceEndpoint` on `comed:dp-hourly-lmp`, and the conformance vector below.

## Conformance vector

Given the recipe (the `add` expression on `comed:pur-day-ahead-lmp`) and the driver series (`comed-rrtp-lmp-series-20260115.jsonld`), a conforming implementation must produce values decimal-equal to `comed-rrtp-series-20260115-dayahead.jsonld`. Each expected value equals the driver value plus 0.00735. For example, local hour 17 (`2026-01-15T23:00:00Z`) has driver 0.04100 and expected 0.04835.

The driver series supplies the `comed:mi-hourly-wholesale-price` metric input the expression references; that binding is declared here rather than in vocabulary, per spec 043 open question 3.

## True-up

`comed-rrtp-series-20260115-final.jsonld` supersedes the day-ahead series with `finalPriceStatus`. The three settled peak-evening hours differ from the projected values; the rest are unchanged. This is what `supersedes` plus `priceStatus` express: a later settled series replacing an earlier projected one.

## Validation

These files exercise proposed vocabulary from specs 041–043 and validate only against the v0.3.0 candidate (commit `3d474cbd`) merged with those specs' edit sets, not against v0.3.0 alone.
