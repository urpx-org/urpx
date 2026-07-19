# dev-docs/samples

Worked JSON-LD instances that accompany development specifications under [`dev-docs/specs/`](../specs/). Each set is a complete URPX representation, not an excerpt, so a reviewer can read a proposed design against real graph data and a future implementer has a fixture to validate against.

**These are synthetic test data, not production data.** Every document declares this in its root description and marks its pricing content with the `estimated` confidence value. Price values are illustrative and do not reproduce any utility's filed or published prices. Identifiers such as MIDAS RINs used in these samples are fictitious and are not registered anywhere.

## Relationship to `test-cases/`

`test-cases/` holds fixtures that validate against the released ontology and SHACL.
The sets here exercise **proposed** vocabulary from specifications still under review, so they validate only against the v0.3.0 candidate merged with those specifications' edit sets — not against v0.3.0 alone. When a specification is adopted and its vocabulary lands, its conformance-vector sets move into `test-cases/`.

## Sets

| Set | Exercises | What it shows |
|---|---|---|
| [`comed-rrtp-hdp/`](comed-rrtp-hdp/) | specs 041, 042, 043 | A wholesale-indexed hourly rate plan: a value expression for the hourly supply calculation, a driver price series and the expected resolved series (a conformance vector), a settled series demonstrating true-up, and a discovery endpoint. |
| [`pge-nbt-export-series/`](pge-nbt-export-series/) | spec 042 | Hourly export compensation as a price series — the extrapolated form of values a plan package marks as resolved externally; weekday/weekend day typing; credits as negative unit prices. |
| [`pge-b6-pdp-event/`](pge-b6-pdp-event/) | specs 041, 042, 043 | A time-of-use plan with an event-triggered critical peak adder expressed as a conditional value expression, plus the adder in extrapolated form for one event day. |
| [`midas-transform/`](midas-transform/) | spec 044 | The PG&E export series transformed to a California MIDAS v2.0 upload payload, demonstrating the field mapping and the credit sign flip. |

## Conventions

- Each JSON-LD document is a single object with an inline `@context` and a `@graph` array, following the `test-cases/` fixtures.
- `@id` values use per-document prefixes (`comed:`, `pge:`, `org:`) under the fixtures namespace.
- Unit prices are quoted decimal strings; credits are negative.
- Interval times in price series are UTC; local-time interpretation (day types, time-of-use labels) is governed by each plan's timezone.
- Licensing follows the repository: these files are covered by the `dev-docs/**` entry in `REUSE.toml` (Apache-2.0 during the pre-Draft stage), so they carry no per-file license header.
