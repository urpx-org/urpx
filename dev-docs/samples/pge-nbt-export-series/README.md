# PG&E Net Billing Tariff — export compensation price series

Models the hourly export compensation rate of the PG&E Net Billing Tariff
(generation component) as a highly dynamic price series: the extrapolated form of
values a plan package marks as resolved externally.

**Synthetic test data — not for production use.** Values are illustrative and are
not PG&E's published avoided-cost values.

## Files

| File | Type | Purpose |
|---|---|---|
| `pge-nbt-ecr-context.jsonld` | Context | The minimal set of nodes the series references — the rate plan modifier identity, the source publication, the price definition (with its calculation method), and the ledger — so the series resolves within this set. |
| `pge-nbt-ecr-generation-series-2026w02.jsonld` | Price series | One week of hourly export compensation values, differentiated weekday and weekend, for the week of 2026-01-05. |

## Exercises

[`spec.urpx.ont.042.highly-dynamic-price-series.md`](../../specs/spec.urpx.ont.042.highly-dynamic-price-series.md) —
a `PriceTimeSeries` of 168 gap-free hourly `PriceObservation`s referencing the
`pge:pd-ecr-generation` price definition, with `finalPriceStatus` (the
avoided-cost-calculator vintage values are fixed for nine years at publication).

## Notes

- **Sign convention.** URPX carries credits as negative unit prices; the export
  compensation values here are negative. Machine-to-machine channels such as MIDAS
  publish export prices as positive payments to the customer — the transform flips
  the sign (see
  [`spec.urpx.ont.044.urpx-to-midas-transform.md`](../../specs/spec.urpx.ont.044.urpx-to-midas-transform.md) §4
  and [`../midas-transform/`](../midas-transform/)).
- **Day typing.** The 168 hourly intervals run from `2026-01-05T08:00:00Z` (local
  Monday midnight, PST) to `2026-01-12T07:00:00Z`. Weekday values apply Monday
  through Friday (120 hours), weekend values Saturday and Sunday (48 hours); the
  switch to weekend values occurs at `2026-01-10T08:00:00Z` and the interval times
  are UTC while the day type is local.

## Validation

These files exercise proposed vocabulary from spec 042 and validate only against
the v0.3.0 candidate (commit `3d474cbd`) merged with that spec's edit set.
