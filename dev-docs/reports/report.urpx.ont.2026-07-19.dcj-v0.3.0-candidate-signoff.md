---
id: reporturpxontdcjv030candidatesignoff
title: "DCJ — v0.3.0 candidate review: sign-off, two carry-forward items, and the California worked set"
desc: "Second-pass California-corpus review of the v0.3.0 candidate as it now stands (PR #48 tip, past the vocabulary at 48cd1af8). Reaffirms the three §8 assents; reports a checked migration of the 73-filing California corpus against the v0.3.0 shapes (bounded, largely mechanical, one new authored artifact per resolved version); flags two earlier-accepted items not present on the current candidate (identifier-on-resolved-version, a computed confidence value); confirms comfort with the two deferred gaps; and confirms scope for the California worked-example set. Companion to report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes and its response."
updated: 1784419200000
created: 1784419200000
---

# DCJ — v0.3.0 candidate review: sign-off, two carry-forward items, and the California worked set

Grounded in the v0.3.0 candidate as it now stands: PR #48 (`v0.3.0-wg-review`) at its current tip, which is past the filing-lifecycle vocabulary landed at `48cd1af8`. This second pass reviews the candidate vocabulary and shapes directly, not the earlier pre-vocabulary snapshot our first notes were written against. Companion to [dcj-v0.3.0-review-notes](report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md) and its [response](report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md).

## Bottom line

We reviewed the candidate as it now stands and reaffirm the three §8 assents, including the `RatePlanVersion` re-meaning. The reframe is carried through the ontology, the SHACL shapes, and the worked examples. We took the further step of converting our California corpus against the v0.3.0 shapes end to end rather than estimating: the one piece of genuinely new authored content is the per-version `CoverageClaim` and its `Evaluation`, and we found no blocker to converting and publishing against v0.3.0. We support merging the candidate.

## What we verified against the candidate

- **Identity-record inversion.** `RatePlan` and `RatePlanModifier` are identity-only; the version binds back through `forRatePlan` / `forRatePlanModifier`; `hasRatePlanVersion` is retired. Present and validating.
- **Publication architecture.** Authored pricing sits in `PricingModel` carried by `TariffFiling`, and `SourcePublication` typed by `publicationType` replaces the per-document-type classes. This matches how our sources actually differ (tariff book, tariff statement, market price feed) far better than a class per document kind.
- **Coverage on every resolved version.** `hasCoverageClaim` is required, `completenessResult` is required inside it, and `selfContained` plus an explaining `Evaluation` carry the completeness record. Present and validating.
- **The California bill-facing identifier.** `ca-midas-rin` as a documented `scheme` convention on `RatePlanIdentifier` / `RatePlanModifierIdentifier`, aligned to `adms:Identifier`, is exactly the typed identifier we need.

The conversion exercises exactly the breaking changes v0.3.0 intends (the retired document classes and the source-reference rename, the identity-record inversion, and the newly required per-version `CoverageClaim`), and it is mechanical apart from the `CoverageClaim`. For a self-contained tariff the claim's `Evaluation` is a short completeness statement; genuine reconciliation reasoning is needed only for the externally-priced (community-choice and direct-access generation) subset, which is the partial-snapshot case discussed earlier.

## Two carry-forward items we could not exercise on the current candidate

Both were accepted in the response to our first review; we could not find either on the candidate at its current tip, so we flag them to confirm they are still queued, and whether they are intended to land before or after publication.

1. **Carrying the customer-facing identifier on a resolved version.** On the current candidate `hasIdentifier` has domain `RatePlan` and `RatePlanModifier`, and the closed `RatePlanVersion` shape does not admit `hasIdentifier`, so we were unable to attach a resolved snapshot's RIN as a label on that snapshot. The RIN names the customer's resolved rate (it is printed on the bill and is the key under which the utility uploads that rate's prices to the state feed), so being able to label the resolved version with it is the piece we were confirming. We are not asking to resolve a filing back from a RIN, only to carry the RIN as a label.
2. **A confidence value for an exactly-computed quantity.** `ConfidenceValue` offers `verified`, `estimated`, and `projected`. Some of our generation cells are computed arithmetically from two published feeds, which is neither a measurement nor a forecast, and we could not find a value that fits it on the current candidate.

## The two deferred vocabulary gaps

We are comfortable with the interim modeling for both items parked for post-release work, and neither blocks the corpus: the additive baseline-allowance bound (we precompute absolute cells, which validate) and gating a derived quantity on a condition (we carry the derivation as prose for now). As working-group members we are willing to take up either task when the group is ready.

## The California worked-example set

We confirm we will build the California set we offered, to sit alongside the ConEd example. Proposed scope: an identity record; the delivery and generation filings; a monthly statement chain; a market or generic price feed whose applicability is a resolvable condition over service-class, zone, and tension identifiers rather than a prose label; and a resolved snapshot, exercising the generation-versus-delivery split and an externally-priced community-choice generation component. Because it is an independent second corpus resolved by an independent implementation, it also serves as a practical cross-check that the same inputs resolve to the same snapshot. We would like to agree identifier and source-citation conventions with the group so the set sits cleanly beside ConEd.
