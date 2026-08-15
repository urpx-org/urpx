<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX v0.3.0 Release Notes

**Released:** 2026-08-03.
**Type:** Pre-draft minor release.
**Previous release:** [`v0.2.1`](urpx-release-notes-v0.2.1.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.3.0 reframes how published pricing material relates to the rate plan. Pricing content now lives in `PricingModel` nodes carried by publication-level containers (`TariffFiling`, `SourcePublication`); rate plans and modifiers are sharpened to pure identity records; and versions become consolidation artifacts that declare their own coverage through a required `CoverageClaim`, which states completeness; self-containment and an explaining `Evaluation` are optional.

This release is not backward-compatible with v0.2.x. Existing URPX datasets should be reviewed and migrated before being treated as v0.3.0-conformant.

---

## Highlights

- Introduced the pricing-model architecture: `PricingModel` carries pricing content, filed publicly through a `TariffFiling` or, for filing-less material (competitive supply, contract, market-indexed, scenario, partial ingest), standing on its own with its own validity dates.
- Retired the tariff document class family (`TariffPublication` and its subclasses) in favor of a single `SourcePublication` class with a `publicationType` enumeration.
- Renamed `URPXDocument` → `URPXPackage`.
- Added first-class identity classes, `RatePlanIdentifier` and `RatePlanModifierIdentifier`, linked from `RatePlan` / `RatePlanModifier` via `hasIdentifier`.
- Made `RatePlanVersion` and `RatePlanModifierVersion` consolidation artifacts: each now requires a `CoverageClaim` stating completeness (`completenessResult`); self-containment (`selfContained`) and an explaining `Evaluation` are optional.
- Separated the two axes a coverage claim reports. `completenessResult` states how much of the plan the snapshot covers, drawn from a six-member `CompletenessResultValue`. Two conditions that are properties of how the snapshot was assembled rather than of how complete it is now sit beside `selfContained` as booleans on `CoverageClaim`: `stale`, for a snapshot whose sources are known to have moved on, and `fallbackSourced`, for one that had to fall back to a secondary source. A claim can now say "complete, but fallback-sourced" without either fact displacing the other.
- Added a filing-lifecycle vocabulary: `supersedes`, `replaces` / `replacedBy`, `cancelledBy`, `cancelledOn`, `cancelsPriceDefinition`, and `sunsetOn` for intentional terminal discontinuation (as distinct from a data gap).
- Added scenario cost modeling (`ScenarioCostModel`, `ScenarioCostResult`) and temporal scoping (`TemporalScope`, `TemporalPeriod`).
- Renamed the plan-to-organization link `publishedBy` to `offeredBy`, and its inverse `publishes` to `offers`, so the property names the organization that offers the plan rather than asserting that the plan is a published artifact. `offeredBy` and `offers` are declared `owl:inverseOf` each other and align with schema.org `offeredBy` / `offers` by reference. Both are optional in either direction. `publishedBy` is re-homed onto `SourcePublication` and `URPXPackage`, where publication is a property of the artifact.
- Extended `commodity`, `offeredBy`, and `serviceRole` to `RatePlan` and `RatePlanModifier`; `commodity` is now multi-valued at the plan/modifier level (a plan or modifier may span commodities, e.g. a combined water/sewer modifier) and single-valued at the price and metric level.
- Added element-level consolidation lineage: `contributedBy` records the pricing model via which each snapshot element entered, and `consolidatedFrom` lists every contributing model on the version, so a resolved snapshot carries its own derivation and a consumer can trace each element back to its source filing and rate case. A `ModelExclusion` record on the claim's `Evaluation` (`hasModelExclusion`, pairing `excludedModel` with an `exclusionReason`) states machine-readably why a listed model contributed nothing, so the lineage completeness cross-check can be re-run by any consumer.
- Completed the temporal vocabulary: `hasTemporalPeriod` links a `TemporalScope` to the named interval its span denotes, `startDateTime` and `endDateTime` now apply to `TemporalScope` for intraday windows, and `cancelledOnDateTime` and `sunsetOnDateTime` add dateTime-precise twins of the two lifecycle dates. `dateModified` and `dateTimeModified` now apply to `PricingModel` and `TariffFiling`, giving overlapping, unlinked publication units a vocabulary-carried ordering signal.
- Documented three enumerations that previously shipped as bare member IRIs. `CompletenessResultValue` (6 members), `ConfidenceValue` (`verified`, `estimated`, `projected`) and `EvaluationKindValue` (`consolidation`, `coverageEvaluation`, `validation`, `comparison`, `benchmark`) now carry a label and a definition on every member, so all three appear in the generated data dictionary and each value has a stated meaning to exchange rather than only a name to match on.
- Grouped the phase codes under four categories. `PhaseCategoryValue` introduces `singlePhaseCategory`, `splitPhaseCategory`, `threePhaseCategory` and `measurementCategory`, and each `PhaseCodeKindValue` member declares its category with `skos:broader`, so a consumer can select "any three-phase code" without enumerating the individual codes.
- Made the plan-to-version and plan-to-model navigation links assertable. `hasRatePlanVersion` and `hasRatePlanModifierVersion` may be stated on a rate plan or modifier alongside the version-side `forRatePlan` / `forRatePlanModifier`, and `isReferencedByPricingModel` now applies to both `RatePlan` and `RatePlanModifier`. All three are optional: a data set may carry either direction or both, so a JSON-LD consumer can traverse without a reverse-path query, and a producer that prefers a single direction is not obliged to duplicate it.
- Closed every operational SHACL shape against its full declared property surface, with three deliberate, documented open exceptions for subclass-family reasons (`OrganizationShape`, `PriceSetShape`, `PriceSetAlternativeShape`).
- Completed the vocabulary's internal referential integrity: every `urpx:` term the ontology references is now defined in it, including the phase categories above, the enumeration members, and the charge-type members' bill-portion pointers.
- Added a Consolidated Edison SC1 Rate I test case set, including a self-contained resolved snapshot that carries element-level consolidation lineage, a five-statement supersession chain, and a supply-snapshot variant that resolves a market supply charge from an external feed through a `retrievedElsewhere` reference against a `ModelCollection` thread, alongside the PG&E test cases carried forward to the v0.3.0 model.
- Rewrote the tutorial's Terminology section ("Rate Plan vs Tariff vs Price") and the documentation set to consistently use "rate plan," "price," or "rate group" in place of the ambiguous bare word "rate."

---

## Breaking Changes

If you maintain datasets or downstream tooling, pay particular attention to these changes:

1. **The tariff document class family is retired.**
   `TariffPublication`, `TariffBookDocument`, `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`, `SupplyChargesDocument`, `DERExportsDocument`, and `HighlyDynamicPricesDocument` are removed. Use `SourcePublication` with the `publicationType` enumeration (`SourcePublicationTypeValue`) instead. The unused parallel `PublicationTypeValue` enumeration is also removed; the documented member individuals now live on `SourcePublicationTypeValue`.

2. **`URPXDocument` is renamed to `URPXPackage`.**
   All property domains, ranges, and shapes follow the rename.

3. **`RatePlanVersion` and `RatePlanModifierVersion` now require a coverage claim.**
   Every version must carry exactly one `CoverageClaim` (via `hasCoverageClaim`). Only `completenessResult` is required; `selfContained` and an explaining `Evaluation` are optional. Versions without a coverage claim will fail validation.

4. **`ReferenceInclusionValue` members are renamed.**
   `included` → `includedHere`; `shopFor` → `retrievedElsewhere`.

5. **`RateGroup` no longer subclasses `ServiceClass`.**
   A rate group is a named grouping inside a service class, not a kind of service class. Containment is now expressed via `parentServiceClass`.

6. **Version shapes no longer allow `supersedes`.**
   Lifecycle now lives on the filing; a version's timeline position derives from the filing chain rather than from a direct `supersedes` link on the version itself.

7. **The nested tariff reference classes are removed.**
   `TariffBookReference` and `TariffStatementReference`, and their linking properties `hasTariffBookReference` and `hasTariffStatementReference`, are removed. Page and leaf locators, statement type, and receipt dates sit directly on `DataSourceReference`; the tariff book versus statement distinction is carried by the referenced `SourcePublication`'s `publicationType`.

8. **`CompletenessResultValue` is narrowed to six members.**
   `complete`, `partial`, `pending`, `unsupported`, `unknown`, `noCoverage`. `stale` and `fallbackSourced` are no longer completeness verdicts; they are booleans on `CoverageClaim`. A claim that previously carried `completenessResult` of `stale` or `fallbackSourced` states its completeness on the six-member scale and sets the matching boolean. `SourcePublicationTypeValue` likewise carries the documented publication-type members; the parallel `PublicationTypeValue` enumeration is removed.

9. **`SourceReference` is renamed `DataSourceReference`.**
   The class now matches the `hasDataSourceReference` property that reaches it. `SourceReferenceShape` becomes `DataSourceReferenceShape`.

---

## Migration

Datasets built against v0.2.x require rework, not just a metadata bump:

- Move tariff-document typing to `SourcePublication` + `publicationType`.
- Rename `URPXDocument` references to `URPXPackage`.
- Add a `CoverageClaim` (at minimum `completenessResult`; `selfContained` and an explaining `Evaluation` are optional) to every `RatePlanVersion` and `RatePlanModifierVersion`.
- Move any pricing content that was previously attached directly to a rate plan or modifier into a `PricingModel`, carried by a `TariffFiling` or `SourcePublication` as appropriate.
- Flatten nested `hasTariffBookReference` / `hasTariffStatementReference` structures: move `pageStart`/`pageEnd`, `leafStart`/`leafEnd`, `tariffStatementType`, and the receipt dates onto the parent `DataSourceReference`, and set the referenced publication's `publicationType`.
- Retype `SourceReference` nodes to `DataSourceReference`.
- Split any `completenessResult` of `stale` or `fallbackSourced` into a six-member completeness verdict plus the matching boolean on the `CoverageClaim`.
- Rename the plan-to-organization link from `publishedBy` to `offeredBy` on rate plans, modifiers, pricing models and versions, and from `publishes` to `offers` on organizations. Keep `publishedBy` only on `SourcePublication` and `URPXPackage`.
- If you copied a charge type's bill-portion pointer from an earlier ontology release, note that the value is `urpx:supplyPortion`; `urpx:supply` was never a defined term.
- Re-run SHACL validation against `urpx-shacl.ttl`. The closed-shape batch in this release will surface any property used outside its now-explicit declared surface.

---

## References

- [v0.2.1 Release Notes](urpx-release-notes-v0.2.1.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Tutorial: Terminology](urpx-tutorial.md)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
