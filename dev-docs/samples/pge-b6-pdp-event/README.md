# PG&E B-6 Peak Day Pricing — event-triggered adder

Models the PG&E Schedule B-6 small general time-of-use rate plan with a Peak Day Pricing overlay: an event-triggered critical peak adder expressed as a conditional value expression, plus the adder in extrapolated form for one event day.

**Synthetic test data — not for production use.** Values are illustrative and are not PG&E's filed prices.

## Files

| File | Type | Purpose |
|---|---|---|
| `pge-b6-pdp-plan.jsonld` | Rate plan | Full representation: plan identity, the authored content (time-of-use schedule, seasons, demand charges, the event adder with its conditional value expression and discovery endpoint, the bill credit), an eligibility condition, and a resolved self-contained snapshot. |
| `pge-b6-pdp-adder-series-20260715.jsonld` | Price series | The critical peak adder for a called event day (2026-07-15), 1.20000 during the four event hours (14:00–18:00 local) and zero otherwise. |

## What each specification is exercised by

- [`spec.urpx.ont.041.value-expressions.md`](../../specs/spec.urpx.ont.041.value-expressions.md) — the `PriceUpdateRule` `pge:pur-pdp-event-trigger` carries a `ValueExpression` whose root is a `ConditionalValueNode`: guard `event-active == true`, then 1.20000, else 0.00000. The eligibility rule also exercises the adopted condition model (a `ComparisonNode` for demand ≤ 75 kW).
- [`spec.urpx.ont.042.highly-dynamic-price-series.md`](../../specs/spec.urpx.ont.042.highly-dynamic-price-series.md) — the event-day `PriceTimeSeries`.
- [`spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md`](../../specs/spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md) — the `DynamicPriceEndpoint` (an information page, `otherProtocol`) and the conformance vector below.

## Conformance vector

Given the recipe (the conditional expression on `pge:pur-pdp-event-trigger`) and the declared event window (2026-07-15, 14:00–18:00 local), a conforming implementation must produce values decimal-equal to `pge-b6-pdp-adder-series-20260715.jsonld`: 1.20000 at UTC 21:00, 22:00, 23:00 on 2026-07-15 and 00:00 on 2026-07-16, and 0.00000 for the other twenty hours.

Event signals are not carried as a price series — which days become event days is operational scheduling delivered through demand response channels, not pricing content (spec 043 open question 4). The event window is declared here for the vector; the `event-active` metric input the expression reads is the interface to that external signal.

## Eligibility

The plan's eligibility is modeled as two criteria joined by `andOperator`: the customer is commercial (`hasCustomerKind` equals `commercialKind`) and maximum demand is at or below 75 kW. The exact service-class taxonomy and the tariff's "consistently under" temporal qualifier are representative here and are pending authoritative sourcing against the filed schedule.

## Metric input type

`pge:mi-pdp-event-active` uses `measuredMetricInput`: the event-active state is an observed external signal, not a value derived from other inputs, so it is measured rather than calculated or virtual.

## Validation

These files exercise proposed vocabulary from specs 041–043 and validate only against the v0.3.0 candidate (commit `3d474cbd`) merged with those specs' edit sets.
