<!-- SPDX-FileCopyrightText: 2026 Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX v0.3.0 Release Notes (Draft)

**Status:** Draft — pending Working Group review and vote. Dates and version metadata are finalized when this draft is tagged.
**Type:** Pre-draft minor release
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
- Renamed `DataSourceReference` → `SourceReference` and `URPXDocument` → `URPXPackage`.
- Added first-class identity classes, `RatePlanIdentifier` and `RatePlanModifierIdentifier`, linked from `RatePlan` / `RatePlanModifier` via `hasIdentifier`.
- Made `RatePlanVersion` and `RatePlanModifierVersion` consolidation artifacts: each now requires a `CoverageClaim` stating completeness (`completenessResult`); self-containment (`selfContained`) and an explaining `Evaluation` are optional.
- Added a filing-lifecycle vocabulary: `supersedes`, `replaces` / `replacedBy`, `cancelledBy`, `cancelledOn`, `cancelsPriceDefinition`, and `sunsetOn` for intentional terminal discontinuation (as distinct from a data gap).
- Added scenario cost modeling (`ScenarioCostModel`, `ScenarioCostResult`) and temporal scoping (`TemporalScope`, `TemporalPeriod`).
- Extended `commodity`, `publishedBy`, and `serviceRole` to `RatePlan` and `RatePlanModifier`; `commodity` is now multi-valued at the plan/modifier level (a plan or modifier may span commodities, e.g. a combined water/sewer modifier) and single-valued at the price and metric level.
- Closed every operational SHACL shape against its full declared property surface, with three deliberate, documented open exceptions for subclass-family reasons (`OrganizationShape`, `PriceSetShape`, `PriceSetAlternativeShape`).
- Added a new nine-fixture Consolidated Edison SC1 Rate I test case, including a fully self-contained resolved snapshot and a five-statement supersession chain, alongside the PG&E test cases carried forward to the v0.3.0 model.
- Rewrote the tutorial's Terminology section ("Rate Plan vs Tariff vs Price") and the documentation set to consistently use "rate plan," "price," or "rate group" in place of the ambiguous bare word "rate."

---

## Breaking Changes

If you maintain datasets or downstream tooling, pay particular attention to these changes:

1. **The tariff document class family is retired.**
   `TariffPublication`, `TariffBookDocument`, `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`, `SupplyChargesDocument`, `DERExportsDocument`, and `HighlyDynamicPricesDocument` are removed. Use `SourcePublication` with the `publicationType` enumeration (`SourcePublicationType`) instead.

2. **`DataSourceReference` is renamed to `SourceReference`; `URPXDocument` is renamed to `URPXPackage`.**
   All property domains, ranges, and shapes follow the rename.

3. **The version-to-plan link is inverted.**
   `hasRatePlanVersion` and `hasRatePlanModifierVersion` are removed. A version now points at its plan or modifier via `forRatePlan` / `forRatePlanModifier`; there is no inverse property on the plan side.

4. **`RatePlanVersion` and `RatePlanModifierVersion` now require a coverage claim.**
   Every version must carry exactly one `CoverageClaim` (via `hasCoverageClaim`). Only `completenessResult` is required; `selfContained` and an explaining `Evaluation` are optional. Versions without a coverage claim will fail validation.

5. **`ReferenceInclusionValue` members are renamed.**
   `included` → `includedHere`; `shopFor` → `retrievedElsewhere`.

6. **`RateGroup` no longer subclasses `ServiceClass`.**
   A rate group is a named grouping inside a service class, not a kind of service class. Containment is now expressed via `parentServiceClass`.

7. **Version shapes no longer allow `supersedes`.**
   Lifecycle now lives on the filing; a version's timeline position derives from the filing chain rather than from a direct `supersedes` link on the version itself.

---

## Migration

Datasets built against v0.2.x require rework, not just a metadata bump:

- Move tariff-document typing to `SourcePublication` + `publicationType`.
- Rename `DataSourceReference` references to `SourceReference`, and `URPXDocument` references to `URPXPackage`.
- Replace `hasRatePlanVersion` / `hasRatePlanModifierVersion` with `forRatePlan` / `forRatePlanModifier` on the version node.
- Add a `CoverageClaim` (at minimum `completenessResult`; `selfContained` and an explaining `Evaluation` are optional) to every `RatePlanVersion` and `RatePlanModifierVersion`.
- Move any pricing content that was previously attached directly to a rate plan or modifier into a `PricingModel`, carried by a `TariffFiling` or `SourcePublication` as appropriate.
- Re-run SHACL validation against `urpx-shacl.ttl` — the closed-shape batch in this release will surface any property used outside its now-explicit declared surface.

---

## References

- [v0.2.1 Release Notes](urpx-release-notes-v0.2.1.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Tutorial — Terminology](urpx-tutorial.md)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
