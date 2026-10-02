<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX Changelog

**Version:** 0.5.1 (Working Group Draft) **Last Updated:** 2026-10-01

[← Back to Index](documentation/index.md) | [Overview](documentation/pages/urpx-overview.md) | [Data Dictionary](documentation/pages/urpx-data-dictionary.md)

2026-10-01 — v0.5.1 (the development record moves to urpx-dev)
---

### Removed
- `dev-docs/` (72 files: tasks, specifications, reports, roadmaps, review material and the worked sample instances), the five design-decision logs under `documentation/pages/`, and the two draft mapping profiles `urpx-green-button-mappings.ttl` and `urpx-lf-energy-mappings.ttl` under `skos/standards-integration/` leave this repository. They are maintained in `urpx-org/urpx-dev`, the design and process record, each file byte-identical at its new path; the design-decision logs sit under `dev-docs/decisions/` there.

### Changed
- `README.md`, `AGENTS.md`, `documentation/index.md`, `documentation/pages/urpx-interoperability.md` and the v0.2.0 and v0.4.0 release notes no longer point at the moved files; `REUSE.toml` and `TRANSITION.md` drop their `dev-docs/` rules; the design-decision references in this changelog point at `urpx-org/urpx-dev`.

2026-09-15 — v0.5.1 (release metadata and the RDF license agree with the SPDX header)
---

### Fixed
- `dcterms:license` on the ontology and the shapes graphs now resolves to the W3C Software Notice and Document License IRI (`https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document`), matching each file's own SPDX header. It previously asserted Apache-2.0 inside the RDF while the header already read `W3C-20150513`, so a consumer parsing the graph and a consumer reading the header received opposite legal statements.
- `dcterms:issued` on both release nodes moves from the v0.5.0 date to `2026-09-14`, agreeing with the release notes.
- `targetURPXVersion`'s illustrative example value moves from the v0.5.0 raw-file URL to the v0.5.1 one.
- The v0.5.1 release notes' Changelog reference is now relative to the release-notes file, so the published Release body resolves and tag-anchors it instead of nesting it under a broken path.

2026-09-15 — v0.5.1 (test-case packages declare the release they validate against)
---

### Changed
- The twelve shipped test-case data files' `targetURPXVersion` and the catalog's `urpx_version` column move from a mix of v0.3.0 and v0.4.0 to v0.5.1, the ontology version every fixture's `@context` has selected since the context migration. Each test case still validates, as one merged graph, against the v0.5.1 ontology and shapes.

### Migration
- Point `targetURPXVersion` at `https://github.com/urpx-org/urpx/raw/v0.5.1/ontology/urpx-ontology.ttl`.

2026-09-15 — v0.5.1 (generated documentation drops stale and internal content)
---

### Fixed
- The generated data dictionary no longer instructs a reader to regenerate with `generate-dictionary.sh`, a script that does not exist; it names the actual regeneration route and states plainly that URPX is a Draft, replacing a pre-Draft sentence that had not been true since Working Group Draft acceptance.
- The generated corpus manifest (`test-cases/manifest-all.json`) no longer names the private repository that produces it; the field states only that the manifest is generated and by what kind of tool.
- Two dictionary diagram sections, Geographic Entities and Regulatory Entities, render as legend-only and are skipped; the generator now removes their prior output instead of leaving it in place, so the two files that still shipped labelled `URPX v0.3.0` are gone.
- The generated test-case catalog (`test-cases/index.md`) reads `rate plan features`, correcting a `rate-plan features` compound the generator emitted.

2026-09-15 — v0.5.1 (entry points state the current release)
---

### Fixed
- `README.md`, `CONTRIBUTING.md`, `documentation/index.md`, and the FAQ stated pre-Draft, v0.3.0, and Apache-only; each now states v0.5.1, Working Group Draft acceptance, and the three-license split.
- The hand-authored documentation pages' version headers move from Pre-draft to Working Group Draft, matching the completed transition.
- The interoperability page's banner now says the page, not the project, is a draft.
- Two prose instances in the API specification and quality-assurance pages said `rate structure`; both now say `rate plan structure`, and the quality-assurance page's edge-case note names the rate plan, not the tariff, as the thing with the pattern.

2026-09-09 — v0.5.1 (specification files move to the W3C Document License)
---

### Changed
- The ontology, SHACL shapes, SKOS mappings, documentation pages, the published JSON-LD context, the diagram set under `documentation/diagrams/` (the SVGs and their Graphviz `.dot` sources), per the transition plan in `TRANSITION.md`. Source tooling and meta files (`scripts/`, `README.md`, `LICENSE`, `documentation/examples/examples-schema.json`, and the like) are unchanged and remain Apache-2.0.
- `LICENSES/W3C-20150513.txt` is added.
- This closes the license transition `TRANSITION.md` describes; its status now reads Completed.

### Notes
- `documentation/pages/urpx-data-dictionary.md`, the diagram set under `documentation/diagrams/`, and `documentation/examples/manifest.json` carry no inline header, so their license moves through `REUSE.toml` entries rather than a header rewrite.

2026-09-09 — v0.5.1 (test-case datasets move to CDLA-Permissive-2.0)
---

### Changed
- The `test-cases/` JSON-LD and CSV example data, their generated catalog page `test-cases/index.md`, the generated corpus index `test-cases/manifest-all.json`, and the per-test-case diagrams under `test-cases/*/assets/` move from Apache-2.0 to CDLA-Permissive-2.0, per the transition plan in `TRANSITION.md`. The ConEd tariff assets carrying `LicenseRef-PublicRecord` are unaffected; they were never Apache-2.0. `test-cases/manifest-all-schema.json` stays Apache-2.0 as tooling.
- The worked sample instances under `dev-docs/samples/`, now in `urpx-org/urpx-dev`, carry CDLA-Permissive-2.0 on the same terms, as data accompanying development specifications. The prose around them stays Apache-2.0 with the rest of that tree.
- `LICENSES/CDLA-Permissive-2.0.txt` is added.

2026-09-08 — v0.5.0 (the namespace moves to urpx.org)
---

### Changed
- The vocabulary namespace moves from `https://urpx-org.github.io/urpx/ontology/` to `https://urpx.org/ns/ontology/`, and the shapes namespace to `https://urpx.org/ns/shacl/core/`. Every term IRI changes its host and path; the local names are unchanged. The ontology and the shapes identify themselves as version 0.5.0, and `owl:versionIRI`, `dcterms:hasVersion`, the release node, its distribution and both download URLs name v0.5.0.
- The vocabulary terms, the shapes and the semantics are unchanged from v0.4.0. This release moves identifiers only.

### Migration
- Rebind the `urpx` prefix from `https://urpx-org.github.io/urpx/ontology/` to `https://urpx.org/ns/ontology/`, and `urpx-shacl` to `https://urpx.org/ns/shacl/core/`. A document that binds the old base resolves no term after the move.
- Point `targetURPXVersion` at `https://github.com/urpx-org/urpx/raw/v0.5.0/ontology/urpx-ontology.ttl`.

### Notes
- The example data files under `test-cases/` and the published JSON-LD context still reference the previous host. They move to the new namespace in a following release.

2026-08-28 — v0.4.0 (a published JSON-LD context)
---

### Added
- A published JSON-LD context at `context/urpx-context.jsonld`, generated from the ontology. It binds the `urpx` prefix and its companion prefixes and gives every URPX property that carries a non-string XSD range an `@type` coercion read from the property's `rdfs:range`. All 100 such properties are covered, so a decimal, date, boolean or integer written against it is read as that datatype rather than as a plain string. The document declares no `@vocab` and binds no fixture-identity namespace.

### Changed
- The twelve shipped examples reference the published context by URL and carry no inline vocabulary bindings. Each example's `@context` is an array of the context URL and the identity prefixes the example defines for itself, so an implementer references one published document instead of hand-authoring a context for every package.

### Migration
- Reference the published context at its URL and keep only the identity prefixes a document defines for itself, rather than carrying an inline vocabulary context. The v0.4.0 context path retires at v0.5.0 rather than redirecting, so a consumer holding the v0.4.0 document moves to the v0.5.0 one when the namespace changes.

2026-08-23 — v0.4.0 (calculation attaches where the quantity is measured)
---

### Added
- `hasCalculationMethod` reaches `Ledger`, `MetricInput` and `MetricSpecification` alongside the three price classes. Its domain is the union of `Ledger`, `MetricInput`, `MetricSpecification`, `Price`, `PriceDefinition` and `PriceSet`, so one property carries the whole calculation bundle to the level the calculation describes.
- `LedgerShape`, `MetricInputShape` and `MetricSpecificationShape` each admit `hasCalculationMethod`, optional and at most one.
- `CalculationMethodShape` admits `calculatedBasedOn`, optional and unbounded. A calculated metric input names its sources there.

### Changed
- A calculated `MetricInput` states its derivation on a `CalculationMethod` reached through `hasCalculationMethod`, using `calculatedBasedOn` for the source metric inputs and `calculationFormula` for the formula text.
- `CalculationMethod` defines how a measured or derived quantity is calculated or reduced over a stated interval. It carries the aggregation, the interval window that aggregation applies over, and, for a calculated metric input, the sources it derives from. It attaches to a ledger, a metric input, a measurement specification or a price.
- `hasCalculationMethod` states which declaration governs where more than one is present: the one nearest the measurement, `MetricSpecification` before `MetricInput` before `Ledger`, resolved per property. An occurrence on a `Price`, `PriceDefinition` or `PriceSet` is a denormalized copy carried for tabular serialization where a measurement is reachable through the node's own references, directly or through a referenced ledger or metric input, and it agrees with that declaration. Where no measurement is reachable, the price-level declaration is complete on its own. A copy that disagrees with its source is a data-quality matter for the implementation holding both: no shape reads across a reference to check it.
- `calculatedBasedOn` declares `rdfs:domain CalculationMethod`. Validation with inferencing off is unaffected. A consumer validating with RDFS inferencing on sees a tighter result, because the domain then types the property's subject as a `CalculationMethod` and the closed `CalculationMethodShape` judges it.

### Removed
- `calculationRule`, together with the inline node shape inside `MetricInputShape` that carried it. This removal breaks in two ways. A document stating `calculationRule` on a `MetricInput` no longer validates, because the shape is closed and admits no such path. The property is also gone from the vocabulary itself, independently of whether any document used it.
- `formula`. `calculationFormula` on `CalculationMethod` carries formula text. This property likewise leaves the vocabulary outright.

### Migration
- A `MetricInput` carrying `calculationRule` carries `hasCalculationMethod` to a `CalculationMethod` instead. `formula` inside the old structure becomes `calculationFormula` on that calculation method, and `calculatedBasedOn` moves onto it unchanged.
- Both PG&E test cases move the base service charge's daily calculation method off the price definition and onto the ledger that price definition references, `pge:ledger-service` and `pge:ledger-base-charge` respectively. Each of those ledgers reaches a metric input, so a measurement is reachable and the declaration belongs at the ledger rather than standing alone on the price.
- The tutorial's demand example states the monthly maximum on a `CalculationMethod` nested under the measurement specification, which keeps its fifteen-minute observation interval. An `aggregationMethod` stated directly on a `MetricSpecification` does not validate.

2026-08-17 — v0.4.0 (the exchange package carries every unit)
---

### Added
- `packages`, the containment property of the exchange envelope. Its domain is `URPXPackage` and its range is the union of `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, `RatePlanModifierVersion`, `PricingModel`, `TariffFiling` and `SourcePublication`. Every exchangeable unit can therefore be packaged, and a package declares the URPX version its contents were authored against through `targetURPXVersion`.
- `URPXPackageShape` admits `packages` at `minCount 0` through `sh:or` over single-class shapes. `sh:class` takes one class, so `sh:or` is how SHACL core states a union-class constraint.

### Changed
- The ontology and the shapes identify themselves as version 0.4.0. `owl:versionIRI`, `dcterms:hasVersion`, `owl:versionInfo`, the release node, its distribution and both download URLs name v0.4.0, so a consumer resolving a package's `targetURPXVersion` reaches a document that identifies itself as the version the package declares.
- `URPXPackageShape` requires at least one of `packages`, `hasRatePlan` or `hasRatePlanModifier` on every `URPXPackage`. The envelope's job is to carry content and declare a version, and the shape now states the carrying half. Each of the three paths stays optional on its own: the requirement is that a package uses one of them, not that it uses any particular one.
- `hasRatePlan` and `hasRatePlanModifier` describe the exchange package they link from and name `packages` as the containment property that reaches every exchangeable unit. A consumer reading package contents reads both paths.

### Removed
- `hasTariffPublication`. `packages` carries a source publication, as it carries every other unit a package holds.

### Migration
- On a `URPXPackage`, `hasTariffPublication` becomes `packages`.
- `hasRatePlan` and `hasRatePlanModifier` remain valid on a `URPXPackage`. A package may carry a rate plan or a modifier through either those properties or `packages`.
- A `URPXPackage` states at least one content unit. A package carrying only metadata and a version declaration does not validate.
- An organization's EIA, DUNS or LEI value rides the identity chain: `Organization` → `hasIdentity` → `OrganizationIdentity` → `hasIdentifier` → `OrganizationIdentifier`, with `scheme` naming the register and `skos:notation` carrying the value. The PG&E E-TOU-C test case carries the worked example.

2026-08-14 — v0.4.0 (one identifier pattern)
---

### Added
- `IdentifierScheme`, the class of registers and naming authorities that issue identifiers. It is an open class: the members published with this vocabulary cover the common registers, and an implementer operating a scheme that is not among them mints its own IRI as an `IdentifierScheme` instance.
- `caMidasRinScheme` and `utilityTariffCodeScheme`, the two rate plan registers, as defined members beside the nine organization registers. Both carry a label, a definition and a preferred label.

### Changed
- `scheme` carries the register for every identifier. Its domain is `OrganizationIdentifier ∪ RatePlanIdentifier ∪ RatePlanModifierIdentifier`, and it ranges on `IdentifierScheme`. Ranging on an open class gives the property a documented value space while keeping an implementer-minted IRI legal.
- `identifierJurisdiction` applies to all three identifier classes, optional and at most one on each. A CA MIDAS RIN has a jurisdiction as much as an EIA ID does.
- `IdentifierSchemeValue` is `IdentifierScheme`, a class rather than an enumeration. The nine members keep their IRIs, labels and definitions, and are typed to it.
- `OrganizationIdentifierShape`, `RatePlanIdentifierShape` and `RatePlanModifierIdentifierShape` take one surface: `scheme` required, `skos:notation` required, `identifierJurisdiction` optional. An organization identifier carries a register and a value.

### Removed
- `identifierScheme`. `scheme` carries the register for all three identifier classes.
- `utilityId`. `skos:notation` carries the literal for every identifier, including the EIA, DUNS and LEI values that property held.
- `IdentifierSchemeValueShape`. `sh:nodeKind sh:IRI` on `scheme` is the constraint the register takes, which is what makes a scheme outside the published members legal.

### Migration
- On organization identifiers, `identifierScheme` becomes `scheme` and `utilityId` becomes `skos:notation`. Both are required, so an organization identifier states the register it comes from and the value it carries.
- The utility tariff code register is `urpx:utilityTariffCodeScheme` and the CA MIDAS RIN register is `urpx:caMidasRinScheme`. Rewrite `scheme` object IRIs that carry the hyphenated forms of either name.

2026-08-02 — v0.3.0 (offering and publication separated)
---

### Changed
- The link naming the organization behind a plan is renamed from `publishedBy` to `offeredBy`, and its domain is `PricingModel ∪ RatePlan ∪ RatePlanModifier ∪ RatePlanVersion ∪ RatePlanModifierVersion`. The property names the organization that offers the pricing for service, whether as a regulated tariff or a competitive supply product. Range and cardinality are unchanged.
- The organization-side link is renamed from `publishes` to `offers`, its range is widened from `RatePlan` to the same five-class union, and it is declared `owl:inverseOf offeredBy`. The widened range matches the domain of `offeredBy` exactly, so the entailed direction asserts no class membership its subject does not hold. `OrganizationShape`, `EnergyServiceProviderShape`, `RegulatoryAuthorityShape`, `SystemOperatorShape`, and `UtilityOperatorShape` admit `offers` in place of `publishes`. Both terms align with schema.org `offeredBy` and `offers` by reference; URPX does not import schema.org.
- `offeredBy` is optional in both directions, on the plan identity and on the version snapshot alike. The version shapes previously required the organization link (`minCount 1`); they now admit it at `minCount 0`. Teaching, sandbox, and research data that models no real utility validates without naming one.
- `publishedBy` is re-homed onto the artifacts that are published: its domain is now `PricingModel ∪ TariffFiling ∪ SourcePublication ∪ URPXPackage`, and all four shapes admit it (optional, at most one). Publication is a property of the artifact rather than of the rate plan whose terms that artifact states. A `PricingModel` carries both properties, being an authored unit that is itself published; where a model sits inside a filing, the filing carries the publisher. On a `SourcePublication`, `issuingAuthority` continues to name the issuing or approving body where that differs from the publisher.

### Migration
- Rename the `publishedBy` key to `offeredBy` on pricing models, rate plans, rate plan modifiers, and both version snapshots. On pricing models, filings, sources, and packages, `publishedBy` keeps its name and now has a shape that admits it.
- Rename `publishes` to `offers` on organizations.
- No data becomes invalid for want of an organization: the link is optional everywhere it appears.

2026-07-31 — v0.3.0 (external alignment annotations)
---

### Removed
- The Semantic Flow alignment annotations on `PriceDefinitionReference` and `resolvedFrom`: the `compatibleWith` assertion on the class and the `rdfs:seeAlso` pointers into that vocabulary from both terms. The relator model is unchanged, and every role the class holds is expressed in URPX terms: inclusion on `referenceInclusion`, the charge identity on `referencesPriceDefinition`, source evidence on `documentedBy`, temporal scope on `hasTemporalScope`, and the resolution thread on `resolvedFrom`, whose domain and range are unchanged.
- The `prov:` and `geosparql:` prefix declarations. Neither bound a term. The `Evaluation` class note and the attribution notes name PROV in prose, which needs no binding; URPX aligns with PROV by reference and does not import it.

2026-07-29 — v0.3.0 (plan-to-version links assertable)
---

### Changed
- `isReferencedByPricingModel` may now be asserted in instance data, and applies to `RatePlanModifier` as well as `RatePlan`. `RatePlanShape` and `RatePlanModifierShape` both admit it (optional, unbounded), so a data set can carry the link from a rate plan or modifier to the pricing models that declare content for it rather than requiring a consumer to search every model.
- Removed the `owl:inverseOf referencesRatePlan` declaration on `isReferencedByPricingModel`. The two are not inverses: `referencesRatePlan` admits `PriorRatePlan` as a subject while `isReferencedByPricingModel` ranges on `PricingModel` alone, so the pairing entailed that a `PriorRatePlan` is a `PricingModel`. Dropping it also lets the property serve rate plan modifiers, and further subjects later, without carrying an unsound entailment.
- `hasRatePlanVersion` and `hasRatePlanModifierVersion` may now be asserted in instance data. `RatePlanShape` and `RatePlanModifierShape` admit the plan-side property (optional, unbounded), so a data set can carry the plan-to-version link directly instead of requiring a consumer to scan every version for a matching `forRatePlan`. Each pair stays declared `owl:inverseOf`, so where only one direction is asserted the other is entailed; where both are asserted they must agree. Revises design decision #125, which had restricted the relationship to the version side.

2026-07-29 — v0.3.0 (pre-tag referential integrity and enumeration documentation)
---

Vocabulary definitions and corrections applied before the initial public tag, folded into the unreleased 0.3.0.

### Added
- `PhaseCategoryValue`, an enumeration grouping phase codes by electrical service configuration (`singlePhaseCategory`, `splitPhaseCategory`, `threePhaseCategory`, `measurementCategory`), and `phaseCategory`, the object property carrying a phase code's category. The 25 `PhaseCodeKindValue` members assert their category through it, grouping phase codes the way `ChargeCategoryValue` groups charge types.
- Typed member individuals with labels and definitions for the `CompletenessResultValue` (six members), `ConfidenceValue` (three) and `EvaluationKindValue` (five) enumerations, so each member carries interchange semantics and appears in the data dictionary.
- `rdfs:comment` and member-semantics notes on `ConfidenceValue` and `EvaluationKindValue`.
- `hasRatePlanVersion` and `hasRatePlanModifierVersion`, inverses of `forRatePlan` and `forRatePlanModifier`, so a consumer can traverse from a rate plan or a rate plan modifier to every resolved version snapshot built for it. Both are OWL-entailed and not asserted in instance data, matching `isReferencedByPricingModel`.

### Changed
- Corrected the `billPortion` classification on `creditPriceProtection`, `creditRenewable`, `generation`, `reliabilityCharge` and `usageCharge` to `supplyPortion`, the `BillPortionValue` member their supply-side siblings already carry.
- Revised the `forRatePlan` and `forRatePlanModifier` notes to state the authored version-to-plan direction and name the entailed inverse.

### Removed
- Removed the `rdfs:subPropertyOf` assertion on `utilityId`. The property itself is unchanged.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Added `PhaseCategoryValueShape` (`sh:targetClass`, `sh:nodeKind sh:IRI`, `sh:in` over the four members). No property shape is added for `phaseCategory`, matching the arrangement `chargeCategory` has on `ChargeTypeValue`: the assertion lives on the vocabulary's enumeration members rather than in instance data.

2026-07-26 — v0.3.0 (pre-tag reconciliation carriage and publication-type consolidation)
---

Vocabulary additions and corrections applied before the initial public tag, folded into the unreleased 0.3.0. The additions carry facts a consuming implementation needs when reconciling published units into resolved snapshots; the corrections close defects found in the post-application review of the two 2026-07-25 batches.

### Added
- `ModelExclusion`, a relator node on a coverage claim's `Evaluation`, recording that a pricing model listed in the version's `consolidatedFrom` set contributed no element to the snapshot, and why. Carried by `hasModelExclusion` (Evaluation to ModelExclusion), pairing `excludedModel` (the pricing model) with `exclusionReason` (a new `ExclusionReasonValue` enumeration: `pruned`, `fullySuperseded`, `voided`, `outOfScope`) and an optional `description`. This makes the consolidation completeness cross-check machine-checkable by any consumer holding the snapshot, instead of a producer-side prose promise.
- Typed member individuals with labels and definitions for the `publicationType` enumeration (`tariffBook`, `tariffStatement`, `tariffSupplement`, `tariffAddendum`, `supplyCharges`, `derExports`, `highlyDynamicPrices`, `marketPriceFeed`), which previously had no documentation anywhere.

### Changed
- Widened the domains of `dateModified` and `dateTimeModified` to include `PricingModel` and `TariffFiling`, so a publication unit can carry its own modification date. Where two publication units overlap with no `supersedes`, `replaces`, or `cancelledBy` link, the later modification date is the intended ordering signal; without this carriage a consumer reconciling two overlapping publications had no vocabulary-carried basis to order them.
- Widened the domain of `documentedBy` to include `TariffFiling`. The closed `TariffFilingShape` already admitted the path and the shipping statement fixtures already assert it on filing nodes; the ontology domain now agrees, removing an incorrect entailment.
- Renamed the enumeration class `SourcePublicationType` to `SourcePublicationTypeValue`, matching the `*Value` suffix every other enumeration class carries. Member IRIs and the `publicationType` property are unchanged, so no data is affected.
- Amended the `consolidatedFrom` note to route exclusion records to `hasModelExclusion`, and the `CoverageClaim` note to recommend a `TemporalScope` with `scopeKind` `coverage` stating the window a verdict covers.
- Tightened the `referencesRatePlan` note to state current semantics only.

### Removed
- Removed the orphaned `PublicationTypeValue` enumeration class, its ten member individuals, and its shape. No property or shape referenced it; its two live members (`tariffBook`, `tariffStatement`) move to the consolidated enumeration above, and the remaining eight members had zero usage anywhere in the vocabulary, shapes, or fixtures.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Added `ModelExclusionShape` (closed: `excludedModel` required, `exclusionReason` required against `ExclusionReasonValueShape`, optional `description`) and `ExclusionReasonValueShape`.
- `EvaluationShape` gains a `hasModelExclusion` path (optional, unbounded); it stays closed.
- `PricingModelShape` and `TariffFilingShape` gain `dateModified` and `dateTimeModified` paths (optional, 0..1); both stay closed.
- Renamed `SourcePublicationTypeShape` to `SourcePublicationTypeValueShape` and aligned it with the house enumeration-shape pattern (`sh:targetClass`, `sh:nodeKind sh:IRI`).
- Removed `PublicationTypeValueShape`.

### Test cases
- Moved the supply-referenced snapshot variant into its own test-case directory (`test-cases/coned-sc1-rate-i-supply-ref/`), so each directory carries one test case and its generated collateral depicts the right fixture.
- Filled the resolved snapshot's Market Supply Charge gap with the three published cycle prices from the shipped feed CSV (February 2 through May 1), making the modeled slots continuous for the coverage window. The claim is stated as `partial`: applicable statement charges beyond the MAC are not yet modeled for this plan, and the evaluation says so. The market feed fixture carries the same cycles and now binds to its rate plan via `referencesRatePlan` and carries a `dateModified`.
- The resolved snapshot now demonstrates the full coverage vocabulary: a coverage `TemporalScope` on the claim, `evaluatedBy`/`evaluatedOn` attribution on the evaluation, and a `ModelExclusion` recording that the January statement is listed as a source but fully superseded before the version's effective date.
- The supply-referenced variant no longer lists the feed models in `consolidatedFrom`: content resolved through a reference is not consolidated into the snapshot, so the feed models ride the reference's resolution thread only. Its reference now carries an applicability `TemporalScope`.
- Corrected the documented validation recipe for the statement filings: each validates merged with the identity, the delivery filing, and the earlier statements in its supersedes chain.

### Standards integration (`skos/standards-integration/urpx-green-button-mappings.ttl`)
- Refreshed the URPX to Green Button (NAESB ESPI) SKOS alignment to the 0.3.0 vocabulary and verified it against the NAESB ESPI V4 schemas. Aligned the Green Button bill line-item classification (`ItemKind`) to the URPX charge categories, replacing an earlier alignment to a `KindCategory` enumeration and `itemKind` member values the V4 schemas do not contain. Added `PriceSummary` as the rollup that lines up several URPX prices with one bill line item.
- Corrected the `urpx:` namespace in the mappings to the ontology IRI so the alignment resolves against real terms, and declared the missing `rdfs` prefix so the file parses. Stamped `owl:versionInfo` 0.3.0 with a `dcterms:conformsTo` pointer to the 0.3.0 release.

2026-07-25 — v0.3.0 (pre-tag consolidation lineage and temporal completeness)
---

Vocabulary additions applied before the initial public tag, folded into the unreleased 0.3.0. Every shape touched is closed, so these could not be layered on after the tag.

### Added
- Element-level consolidation lineage. `contributedBy` links an element of a consolidated rate plan version snapshot (a price definition, price, price set, ledger, eligibility rule, applicability rule, or general rule) to the pricing model via which it entered the snapshot, asserted at the most parent-level element the model contributed wholly. `consolidatedFrom` links the version snapshot to each contributing pricing model. Both are object properties ranged on `PricingModel`. A consumer holding a resolved snapshot can now record which pricing model supplied each element and, from the model, follow the publication chain to the tariff filing and rate case.
- `hasTemporalPeriod`: an object property linking a `TemporalScope` to the reusable named time interval (`TemporalPeriod`) its span denotes, wiring a relationship the scope's documentation described but no property expressed.
- `cancelledOnDateTime` and `sunsetOnDateTime`: dateTime-precise twins of the `cancelledOn` and `sunsetOn` lifecycle dates, for intraday cancellation of a tariff filing or standalone pricing model and intraday retirement of a plan sub-resource, matching the dateTime twin every other event property already carries.

### Changed
- Widened the domains of `startDateTime` and `endDateTime` to include `TemporalScope` (added alongside the existing `Price`, `PriceSet`, `TOUPeriod`, `BillingCycle`, `Season`), so a scope can express an intraday boundary for dynamic-feed publication and observation windows.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Added a `contributedBy` path (`sh:class urpx:PricingModel`, optional) to `PriceDefinitionShape`, `PriceShape`, `PriceSetShape`, `LedgerShape`, `EligibilityRuleShape`, `ApplicabilityRuleShape`, and `GeneralRuleShape`.
- Added a `consolidatedFrom` path (`sh:class urpx:PricingModel`, optional) to `RatePlanVersionShape` and `RatePlanModifierVersionShape`.
- Added `hasTemporalPeriod`, `startDateTime`, and `endDateTime` paths (all optional) to `TemporalScopeShape`.
- Added a `cancelledOnDateTime` path (optional) beside `cancelledOn` in `PricingModelShape` and `TariffFilingShape`, and a `sunsetOnDateTime` path (optional) beside `sunsetOn` in `PriceDefinitionShape`, `PriceShape`, `PriceSetShape`, `LedgerShape`, `EligibilityRuleShape`, and `ApplicabilityRuleShape`. All touched shapes stay closed.

### Test cases
- Extended the Consolidated Edison SC1 Rate I resolved snapshot with consolidation lineage: `consolidatedFrom` listing its contributing delivery, monthly adjustment, and market supply models, and `contributedBy` on each top-level contributed element.
- Added a Consolidated Edison SC1 Rate I supply snapshot variant that exercises a `retrievedElsewhere` `PriceDefinitionReference` resolved against a `ModelCollection` thread, with a coverage claim that is not self-contained and is fallback-sourced.

2026-07-25 — v0.3.0 (pre-tag model corrections)
---

Vocabulary corrections applied before the initial public tag, folded into the unreleased 0.3.0.

### Removed
- Removed the `TariffBookReference` and `TariffStatementReference` classes and their linking properties `hasTariffBookReference` and `hasTariffStatementReference`. A reference already points at a `SourcePublication` carrying a `publicationType`, so the tariff book vs. statement distinction is data, not a subclass. The page and leaf locators the subclasses carried (`pageStart`, `pageEnd`, `leafStart`, `leafEnd`, `tariffStatementType`, `dateReceived`, `dateTimeReceived`) now sit directly on the reference.

### Changed
- Renamed the generic reference class to `DataSourceReference` so it agrees with its property `hasDataSourceReference`. This reverts the earlier pre-tag rename to `SourceReference`; the property name was `hasDataSourceReference` throughout.
- Widened the domains of `leafStart`, `leafEnd`, and `tariffStatementType` onto `DataSourceReference`, and folded the removed subclasses out of the union domains and ranges of `anchorLink`, `dateApproved`, `dateTimeApproved`, `datePublished`, `dateTimePublished`, `dateModified`, `dateTimeModified`, `dateReceived`, `dateTimeReceived`, `pageStart`, `pageEnd`, and `description`.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Renamed `SourceReferenceShape` to `DataSourceReferenceShape`; it gains `leafStart`, `leafEnd`, `tariffStatementType`, `dateReceived`, and `dateTimeReceived`, and drops the `hasTariffBookReference` and `hasTariffStatementReference` paths. The shape stays closed.
- Removed `TariffBookReferenceShape` and `TariffStatementReferenceShape`.

2026-07-20 — v0.3.0 (pre-tag model corrections)
---

Vocabulary corrections applied before the initial public tag, folded into the unreleased 0.3.0.

### Changed
- Widened the domain of `hasIdentifier` to include `RatePlanVersion` and `RatePlanModifierVersion` (previously `OrganizationIdentity ∪ RatePlan ∪ RatePlanModifier`), so a resolved version snapshot can carry the customer-facing identifiers a consumer reads directly from the snapshot (for example the California MIDAS RIN), in addition to reaching them through `forRatePlan` / `forRatePlanModifier`.
- Widened the domains of `timezoneIdentifier` and `hasLocationDataSet` to include `RatePlanVersion` and `RatePlanModifierVersion`, so a resolved snapshot carries the timezone and location context needed to interpret its own timestamps and geographic scope directly, without dereferencing the plan identity.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- `RatePlanVersionShape` gains a `hasIdentifier` path (`sh:class urpx:RatePlanIdentifier`, optional).
- `RatePlanModifierVersionShape` gains a `hasIdentifier` path (`sh:class urpx:RatePlanModifierIdentifier`, optional).
- `RatePlanVersionShape` and `RatePlanModifierVersionShape` each gain `timezoneIdentifier` and `hasLocationDataSet` paths (optional).

2026-07-19 — v0.3.0 (pre-tag model corrections)
---

Vocabulary corrections applied before the initial public tag, folded into the unreleased 0.3.0.

### Changed
- Widened `replaces`, `replacedBy`, `cancelledBy`, and `cancelledOn` from a `TariffFiling`-only domain/range to the `PricingModel ∪ TariffFiling` union (matching the existing `supersedes` union), so a standalone pricing model — market or dynamic feed, competitive supply, contract, or scenario pricing — can be corrected in place or withdrawn the same way a tariff filing can. `PricingModelShape` gains the four corresponding property paths, constrained like-for-like (`sh:class urpx:PricingModel`) so a filing cannot replace a model, or a model a filing.
- Narrowed `CompletenessResultValue` from eight members to six genuine coverage verdicts (`complete`, `partial`, `pending`, `unsupported`, `unknown`, `noCoverage`); removed `stale` and `fallbackSourced`, which conflated freshness and resolution provenance with coverage. The class annotation now states per-member semantics directly.
- Widened the domain of `selfContained` to include `CoverageClaim` (previously `RatePlanVersion ∪ RatePlanModifierVersion` only), aligning the ontology with the SHACL shape and every existing fixture, all of which already assert it on the claim. Added a note naming the claim as the authoritative home on the rare occasion a materialized version-level mirror is also present.

### Added
- `stale` and `fallbackSourced`: two new boolean properties on `CoverageClaim`, parallel to `selfContained`, carrying the freshness and resolution-provenance facts split out of the completeness enum. A snapshot can now state coverage, freshness, and provenance as three independent, simultaneous facts instead of collapsing them into one enum value.
- `evaluatedBy` (range `Organization`) and `evaluatedOn` (`xsd:dateTime`) on `Evaluation`, so who attested a coverage verdict and when travels with the claim at interchange rather than living only in a private system. `EvaluationShape` gains the two corresponding property paths and remains closed.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- `PricingModelShape` gains `replaces`, `replacedBy`, `cancelledBy`, and `cancelledOn` property paths.
- `CompletenessResultValueShape`'s `sh:in` narrows to the six retained members.
- `CoverageClaimShape` gains `stale` and `fallbackSourced` (boolean, optional).
- `EvaluationShape` gains `evaluatedBy` and `evaluatedOn` (both optional); the shape stays closed.

2026-07-14 — v0.3.0 (pre-release refinements)
---

Vocabulary clean-up applied before the initial public release, folded into the unreleased 0.3.0.

### Retired
- Removed the profile usage properties `usageThreshold`, `averageMonthlyUsage`, and `usageVariability`. Usage-derived values are carried by the MetricInput mechanism (measured or calculated metric inputs); the retired properties had no example usage.

### Changed
- Split the dual-typed `powerFactor`: minted `powerFactorCharge` as the `ChargeTypeValue` member (the power-factor penalty charge) and kept `powerFactor` as a `MeasurementTypeValue` only.
- Narrowed the domain of `hasDataSourceReference` (dropped `SourcePublication`; citation runs the other way, via `sourcePublication`).
- Narrowed the domain of `operatesIn` to `UtilityOperator` and `EnergyServiceProvider`.
- Rewrote the `ProfileAlternative` class annotations to describe the condition-expression model, replacing text that described the earlier dimension mechanism.

### Editorial
- Language-tagged (`@en`) every `rdfs:label`, `skos:prefLabel`, and `skos:definition` literal in the ontology.
- Reworded several `skos:definition` entries that used "rate" ambiguously to "price", and de-hyphenated "rate plan" in two class comments.

2026-07-07 — v0.3.0
---

Release 0.3.0 reframes how published pricing material relates to the rate plan: pricing content is now carried by `PricingModel` nodes inside publication-level containers (`TariffFiling`, `SourcePublication`), rate plans and modifiers are sharpened to pure identity records, and versions become consolidation artifacts that declare their own coverage.

### Breaking Changes

#### Retired: tariff document class family in favor of `publicationType`
- Removed `TariffPublication`, `TariffBookDocument`, `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`, `SupplyChargesDocument`, `DERExportsDocument`, and `HighlyDynamicPricesDocument`. Publication kinds are now expressed with the `publicationType` enumeration (`SourcePublicationType`) on `SourcePublication`.

#### Renamed: `DataSourceReference` → `SourceReference`, `URPXDocument` → `URPXPackage`
- Class renames with all property domains/ranges and shapes updated accordingly.

#### Removed: `hasRatePlanVersion` / `hasRatePlanModifierVersion`
- The version→plan link is now `forRatePlan` / `forRatePlanModifier` on the version node; there is no inverse property on the plan.

#### Renamed: `ReferenceInclusionValue` members
- `included` → `includedHere`; `shopFor` → `retrievedElsewhere`.

#### Removed: `RateGroup` subclassing of `ServiceClass`
- A rate group is a named grouping inside a service class, not a kind of service class; containment is expressed via `parentServiceClass`.

### Ontology Changes

#### Added: pricing model and publication classes
- `PricingModel` (pricing content as documented by a publication), `TariffFiling` (a filed publication carrying pricing models), `SourcePublication`, `ModelCollection`, `PriceDefinitionReference`, `TemporalPeriod`, `TemporalScope`.

#### Added: identity, coverage, and evaluation classes
- `RatePlanIdentifier` and `RatePlanModifierIdentifier` (parallel plan / modifier identifier classes, with the new `scheme` property and `hasIdentifier` linking from `RatePlan` / `RatePlanModifier`), `CoverageClaim`, `Evaluation`, `ScenarioCostModel`, `ScenarioCostResult`.

#### Modified: identity and version semantics
- `RatePlan` and `RatePlanModifier` are pure identity records; pricing content lives in pricing models and resolved versions.
- `RatePlanVersion` and `RatePlanModifierVersion` are consolidation artifacts: each requires a `CoverageClaim` (`hasCoverageClaim`) stating completeness (`completenessResult`), self-containment (`selfContained`), and an explaining `Evaluation` (`explainedBy`).

#### Added: properties
- Publication and provenance: `containsPricingModel`, `withinPublication`, `documentedBy`, `sourcePublication`, `pursuantTo`, `referencesRatePlan`, `referencesRatePlanModifier`.
- Version and coverage: `forRatePlan`, `forRatePlanModifier`, `hasCoverageClaim`, `selfContained`, `completenessResult`, `explainedBy`, `resolvedFrom`, `hasPriceDefinitionReference`, `referenceInclusion`, `referencesPriceDefinition`.
- Collections and scenarios: `collectsPricingModel`, `collectionRole`, `forScenario`, `consumesVersion`, `producesResult`, `evaluationKind`.
- Temporal scoping: `hasTemporalScope`, `scopeKind`, `hasSelector`.
- Confidence: `confidence` on `PricingModel` and (derived) on `CoverageClaim` — on a claim it is the minimum of the contributing models' confidence values.
- Filing lifecycle: `cancelsPriceDefinition`, `replaces` / `replacedBy`, `cancelledBy`, `cancelledOn` on `TariffFiling`; `supersedes` extended to thread tariff filings as well as pricing models (version classes carry no lifecycle of their own — a version's timeline position derives from the filing chain).
- Sub-resource retirement: `sunsetOn` on `PriceDefinition | Price | PriceSet | Ledger | EligibilityRule | ApplicabilityRule` — distinguishes an intentional terminal discontinuation from a data gap.
- Validity-date domains: `effectiveDate` / `effectiveDateTime` / `expirationDate` / `expirationDateTime` extended to `TariffFiling`, `PriceDefinition`, and the plan components `TOUSchedule | Season | HolidayCalendar | ServiceTiers`.
- Named inverse: `isReferencedByPricingModel` (`owl:inverseOf` `referencesRatePlan`; entailed, not asserted in instance data).

#### Added: enumerations and members
- New: `ConfidenceValue` (`verified`, `estimated`, `projected`), `ScopeKindValue`, `EvaluationKindValue`, `CollectionRoleValue`.
- Extended: `CompletenessResultValue` gains `pending`; `SourcePublicationType` gains `marketPriceFeed`; `MeasurementTypeValue` gains `reactivePower`, `apparentPower`, `reactiveEnergy` (pairing the existing reactive/apparent units); `ChargeTypeValue` gains `reactiveDemand`, `customerCharge`, `fuelCharge`, `exportCredit`, `standbyCharge`, `lateFee`.

#### Domain expansions
- `publishedBy`, `serviceRole`, and `commodity` now also apply to `RatePlan` and `RatePlanModifier`.
- `hasIdentifier` carries the combined domain `OrganizationIdentity | RatePlan | RatePlanModifier` and range `OrganizationIdentifier | RatePlanIdentifier | RatePlanModifierIdentifier`; `scheme` applies to both identifier classes.

#### Annotation clean-up
- Eight annotation strings still describing retired v0.2.x terms (`DataSourceReference`, `URPXDocument`, `TariffPublication`) rewritten to the v0.3.0 vocabulary (`SourceReference`, `URPXPackage`, `publicationType`); wording only, no semantic change.
- Annotation literals using bare "rate" reworded to "rate plan," "pricing," "price," or "cost" as appropriate to the sentence, so that the term now consistently names the rate plan itself rather than a generic pricing concept; wording only, no semantic change.

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Added: node shapes for the new classes
- `PricingModelShape`, `TariffFilingShape`, `RatePlanIdentifierShape`, `CoverageClaimShape`, `EvaluationShape`, `ModelCollectionShape`, `PriceDefinitionReferenceShape`, `SourcePublicationShape`, `SourceReferenceShape`, `TemporalPeriodShape`, `TemporalScopeShape`, `ScenarioCostModelShape`, `ScenarioCostResultShape`, `URPXPackageShape`, plus value shapes for the new enumerations.

#### Updated: identity and version shapes
- `RatePlanShape` gains `hasIdentifier`, `commodity`, `publishedBy`, and `serviceRole` property blocks.
- `RatePlanVersionShape` requires `forRatePlan` and `hasCoverageClaim`.
- The version shapes no longer allow `supersedes` — lifecycle lives on the filing, and a version's timeline position derives from the filing chain.

#### Updated: filing, coverage, and component shapes
- `TariffFilingShape` gains the filing-lifecycle property blocks: `supersedes`, `replaces`, `replacedBy`, `cancelledBy` (filing or publication), `cancelledOn`, and `cancelsPriceDefinition`.
- `CoverageClaimShape` gains `confidence` (a `ConfidenceValue`).
- `PriceDefinitionShape` and the `TOUSchedule` / `Season` / `HolidayCalendar` / `ServiceTiers` shapes gain the four validity-date property blocks; `sunsetOn` is allowed on `PriceDefinitionShape`, `PriceShape`, `PriceSetShape`, `PriceSetAlternativeShape`, `LedgerShape`, `EligibilityRuleShape`, and `ApplicabilityRuleShape`.

#### Shape-alignment batch: closed shapes carry their full declared surface
- Constraint completeness across the closed shapes — every ontology-declared property is now either listed or covered by a design-rationale exclusion comment on the shape:
  - `RatePlanModifierVersionShape` mirrors its `RatePlanVersionShape` twin: `forRatePlanModifier` (required, exactly one), `hasCoverageClaim` (required, exactly one), `hasPriceDefinitionReference`, and `selfContained`.
  - `hasCoverageClaim` on both version shapes is exactly one: a snapshot is immutable, so a re-evaluation mints a new snapshot rather than a second claim.
  - `RatePlanVersionShape` also gains `hasPriceDefinitionReference` and the materialization timestamps `dateCreated` / `dateTimeCreated`, annotated as generation timestamps rather than authored lifecycle dates.
  - `RatePlanModifierShape` reaches identity parity with `RatePlanShape`: `commodity`, `hasIdentifier` (a `RatePlanModifierIdentifier`), `publishedBy`, `serviceRole`; the new closed `RatePlanModifierIdentifierShape` validates the identifier (`skos:notation` + `scheme`, each exactly one).
  - `SourcePublicationShape` gains its nineteen declared publication-provenance and filing-metadata properties (approval / creation / modification / publication / receipt dates in date and dateTime precision, `description`, `effectiveDateTime`, expiration dates, `filingNumber`, `issuingAuthority`, `pageReference`, `url`, `version`); `hasDataSourceReference` is a documented exclusion — references cite publications via `sourcePublication`, not the reverse.
  - `PricingModelShape` gains `hasGeneralRule`, the four validity dates (annotated: they carry the validity window of a pricing model not published within a tariff filing), and the forecast `expectedEndDate` / `expectedEndDateTime` pair (distinct from validity expiration).
  - `TariffFilingShape` gains `hasGeneralRule`; `PriceDefinitionReferenceShape` gains `resolvedFrom` (the `retrievedElsewhere` traceability path); `SourceReferenceShape` gains `hasSelector` (Web Annotation `oa:Selector`, external vocabulary used by reference).
  - `SystemOperatorShape` documents the deliberate exclusion of `operatesIn` (an organization operates in an ISO/RTO market; a system operator operating in a system operator would be circular).
  - `ScenarioCostModelShape`'s optional `hasCoverageClaim` is annotated as deliberate (a scenario cost model may pre-date coverage evaluation).
  - `description` (and on `ConditionExpressionShape` also `name`) allowed on the condition-tree shapes: `ConditionExpressionShape`, `ApplicabilityRuleShape`, `BooleanOperationNodeShape`, `OperationNodeShape`.
  - `commodity` is multi-valued on the rate plan, rate plan version, rate plan modifier, and rate plan modifier version shapes (a plan or modifier may span commodities — e.g. a combined water/sewer modifier) and single-valued on the price-level and metric shapes (`MetricSpecificationShape`, `PriceDefinitionShape`, `PriceSetShape`, `PriceSetAlternativeShape`, `PriceShape`).

#### Structural clean-up
- Shape targets follow the class renames (`SourceReference`, `URPXPackage`); the retired tariff document shapes are removed; the orphaned `DimensionValuePairShape` (no backing class) is removed.
- Operational shapes are closed (`sh:closed true`), with three deliberate open exceptions whose design rationale is documented on the shapes: `OrganizationShape` (base class of the four closed organization subclass shapes) and the `PriceSetShape` / `PriceSetAlternativeShape` pair (`PriceSetAlternative` subclasses `PriceSet`, so its instances are validated by both shapes and the pair must stay open for the subclass-specific properties).

### Test Data Updates

#### Updated: PG&E test cases carried to the v0.3.0 model
- Both `pge-e-elec` and `pge-e-tou-c-2026-03-01` now use `URPXPackage` (with a v0.3.0 `targetURPXVersion`) and `SourceReference`; rate plan and modifier versions are top-level graph nodes linked back through `forRatePlan` / `forRatePlanModifier`, and each version carries a `CoverageClaim` with an explaining `Evaluation`.
- `pge-e-elec` also corrects its `urpx` context IRI to the ontology namespace (`https://urpx-org.github.io/urpx/ontology/`), so its content is now genuinely validated by the shapes.
- `pge-e-tou-c-2026-03-01` remodels its advice-letter wrapper as a `SourcePublication` (`publicationType` `tariffSupplement`) referenced from the package; its income-tier and PCIA-vintage `PriceSetAlternatives` structure is unchanged.
- Both modifier versions in `pge-e-tou-c-2026-03-01` carry the consolidation surface: `forRatePlanModifier` back to their modifier identity and a `CoverageClaim` with explaining `Evaluation` (the PCIA version `complete`; the baseline-tier version `partial`, as medical baseline codes are not modeled). `applicableToRatePlan` is retained.
- Both validate `Conforms: True` against the v0.3.0 shapes.

#### Added: Consolidated Edison SC1 Rate I test case (`test-cases/coned-sc1-rate-i/`)
- Nine JSON-LD fixtures: rate plan identity, delivery-charges tariff filing, five monthly GR26 MAC Energy Charge statement filings (Statements Nos. 168–172), a Market Supply Charge pricing model from ConEd's published market price feed, and a fully self-contained resolved `RatePlanVersion` snapshot (effective 2026-02-01) carrying a `CoverageClaim` with `Evaluation` and per-price source references to the statements it consolidates.
- Source documents (tariff leaf PDF, General Rule 26 PDF, five monthly MAC statement PDFs, market supply charge CSV) are packaged under `assets/`; the test case is registered in `test-cases-index.csv` and `index.md`.
- The five MAC statement filings assert their supersession chain (`urpx:supersedes`, each statement to its predecessor), and the resolved snapshot's `CoverageClaim` carries a first-class `confidence` of `urpx:verified` (previously stated only in the `Evaluation` prose).

### Documentation Updates

#### Updated: tutorial Terminology section
- The section is now "Rate Plan vs Tariff vs Price": the rate plan leads as the first-class concept, the old **Rate** entry is replaced by **Price**, a new paragraph explains why URPX avoids the bare word "rate", and a **Rate Group** entry documents the named grouping utilities colloquially call a "rate".

#### Updated: documentation pages carried to the v0.3.0 vocabulary
- All prose pages now use `URPXPackage` (was `URPXDocument`), `SourceReference` (was `DataSourceReference`), and `SourcePublication` + `publicationType` (replacing the retired tariff document class family); versions are shown as top-level nodes linking back via `forRatePlan` / `forRatePlanModifier` instead of `hasRatePlanVersion` / `hasRatePlanModifierVersion`. Affected pages: [urpx-overview.md](documentation/pages/urpx-overview.md), [urpx-tutorial.md](documentation/pages/urpx-tutorial.md), [urpx-faq.md](documentation/pages/urpx-faq.md), [urpx-semantic-web-guide.md](documentation/pages/urpx-semantic-web-guide.md), [urpx-api-spec.md](documentation/pages/urpx-api-spec.md), [urpx-quality-assurance.md](documentation/pages/urpx-quality-assurance.md), [urpx-test-data-review-guide.md](documentation/pages/urpx-test-data-review-guide.md), and the SPARQL query diagram (`urpx-sparql-query-visual.mmd`).
- The tutorial now builds the v0.3.0 shape end to end: `URPXPackage` wrapper, a pricing-free `RatePlan` identity, and a top-level `RatePlanVersion` carrying `forRatePlan` and a required `CoverageClaim` with an explaining `Evaluation`. JSON-LD and SPARQL examples use the ontology namespace (`https://urpx-org.github.io/urpx/ontology/`).
- The overview describes the pricing-model architecture (pricing models carried by publications, source references, coverage and confidence) and its statement-prices example now models a `SourcePublication` + `TariffFiling` + `PricingModel` chain.
- The FAQ Terminology section tells the full "why not bare 'rate'" story (price / rate plan / rate group) that the tutorial links to; the quality-assurance page's terminology standard now states the same three-way rule with its exceptions, and its required-property lists match the v0.3.0 shapes (`forRatePlan`, `hasCoverageClaim`, `completenessResult`).
- The test-data review guide adds v0.3.0 review checks: `forRatePlan` targets, coverage-claim honesty (`completenessResult` / `selfContained` versus the file contents), and `sourcePublication` / `publicationType` provenance.

2026-05-07
---

### Breaking Changes

#### Introduced: `urpx:ServiceBracket` for contextual tier bounds
- Added `urpx:ServiceBracket` plus `urpx:hasServiceBracket` so `urpx:ServiceTier` remains the logical tier identity while bracket-specific bounds live on attached bracket nodes.
- Moved `urpx:lowerBound`, `urpx:lowerBoundOperator`, `urpx:upperBound`, and `urpx:upperBoundOperator` from `urpx:ServiceTier` to `urpx:ServiceBracket`.
- Added `urpx:referencesServiceBracket` on `urpx:Price`, `urpx:PriceDefinition`, `urpx:PriceSet`, and `urpx:PriceSetAlternative`, and expanded `urpx:referencesServiceTier`, `urpx:serviceTierNumber`, `urpx:referencesProfileAlternative`, and `urpx:appliesInSeason` where needed for the bracketed tier model.
- **Design Decision:** [#111](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-111)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Added: `ServiceBracketShape` and updated tier reference validation
- Added `urpx-shacl:ServiceBracketShape` with the lower-only, upper-only, or bounded `sh:or` pattern plus optional `appliesInSeason` and `referencesProfileAlternative`.
- Updated `ServiceTierShape` to require one or more `hasServiceBracket` links instead of validating bounds directly on the tier.
- Added optional `referencesServiceBracket` validation to `PriceShape`, `PriceDefinitionShape`, `PriceSetShape`, and `PriceSetAlternativeShape`, and added optional `name` / `description` on `ServiceTiersShape`.
- **Design Decision:** [#111](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-111)

2026-05-05
---

### Breaking Changes

#### Reworked: Applicability selectors onto profile properties
- Retired direct `ApplicabilityGroup` selector properties such as `appliesInCounty`, `appliesInMunicipality`, `appliesInServiceTerritory`, `appliesInState`, `appliesInGeographicZone`, `endUse`, `geographicScope`, `serviceClassPattern`, and `voltageLevel`.
- Applicability is now expressed through `ConditionExpression` using existing `CustomerProfile` / `ServicePointProfile` properties, with new service-point geography properties `hasCounty`, `hasMunicipality`, `hasServiceTerritory`, and `hasState` added where needed.
- `geographicScope`, `geographicZone`, `endUse`, `serviceClassPattern`, and `voltageLevel` now belong on `ServicePointProfile`.
- **Design Decision:** [#109](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-109)

### Ontology Changes

#### Expanded: `urpx:appliesInSeason`
- Added `urpx:ServiceTiers` to the domain of `urpx:appliesInSeason` so tier groups can be season-specific.
- **Design Decision:** [#110](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-110)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: `ApplicabilityGroupShape` and `ServicePointProfileShape`
- Removed direct applicability-selector validation from `ApplicabilityGroupShape`.
- Added `geographicScope`, `hasCounty`, `hasMunicipality`, `hasServiceTerritory`, `hasState`, `serviceClassPattern`, and `voltageLevel` validation to `ServicePointProfileShape`.
- **Design Decision:** [#109](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-109)

#### Updated: `ServiceTierShape` and `ServiceTiersShape`
- `ServiceTierShape` now accepts lower-only, upper-only, or fully bounded tiers.
- Added optional `appliesInSeason` validation to `ServiceTiersShape`.
- **Design Decision:** [#110](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-110)

2026-05-04
---

### Ontology Changes

#### Added: `urpx:customDimensionProperty`
- Added fallback `xsd:string` identifier for `AlternativeDimension` when no suitable URPX property exists.
- `AlternativeDimension` now allows either `dimensionProperty` or `customDimensionProperty`.
- **Design Decision:** [#107](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-107)

#### Added: `urpx:moderateIncomeProgram`
- Added `urpx:moderateIncomeProgram` to the `ProgramTypeValue` enumeration.
- **Design Decision:** [#108](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-108)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: `AlternativeDimensionShape`
- Made `dimensionProperty` optional, added `customDimensionProperty`, and required exactly one of the two with `sh:xone`.
- **Design Decision:** [#107](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-107)

#### Updated: `ProgramTypeValueShape`
- Added `urpx:moderateIncomeProgram` to the allowed program-type IRIs.
- **Design Decision:** [#108](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-108)

2026-05-01
---

### Ontology Changes

#### Added: `urpx:gYearValue`
- Added `urpx:gYearValue` (DatatypeProperty, range `xsd:gYear`) for calendar-year literal operands in condition expressions.
- Domain is the union of `urpx:DatatypeOperandNode` and `urpx:CustomOperandNode`, mirroring the other datatype-specific value properties.

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: `DatatypeOperandNodeShape` and `CustomOperandNodeShape`
- Added an optional `gYearValue` property declaration (`xsd:gYear`, `0..1`) on both shapes.
- Added a `gYearValue` literal branch to each shape's `sh:xone` so the gYear branch is mutually exclusive with the other literal and property-reference branches and may optionally carry `urpx:referencesMetricInput`.

### Documentation Updates

#### Updated: Condition Modeling and Data Dictionary
- Listed `urpx:gYearValue` alongside the other datatype-specific value properties in [urpx-condition-modeling.md](documentation/pages/urpx-condition-modeling.md) and the JSON-LD context examples.
- Added `urpx:gYearValue` rows to the `CustomOperandNode` and `DatatypeOperandNode` property tables in [urpx-data-dictionary.md](documentation/pages/urpx-data-dictionary.md).

2026-04-29
---

### Ontology Changes

#### Added: `owl:versionIRI` Release Metadata
- Added `owl:versionIRI` to the ontology header to publish the ontology-version IRI expected by `urpx:targetURPXVersion`.
- Clarified the `targetURPXVersion` note to point to the raw ontology file URL.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

#### Domain Expanded: `urpx:serviceRole`
- Added `urpx:PriorRatePlan` to the property domain union.
- **Design Decision:** [#106](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-106)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: `PriorRatePlanShape`
- Added optional `serviceRole` validation to align with the ontology domain expansion.
- **Design Decision:** [#106](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-106)

### Test Data Updates

#### Updated: PGE E-ELEC Example
- Added time zone metadata to `test-cases/pge-e-elec/data/urpx-rate-plan_pge_e-elec.jsonld`.

2026-04-28
---

### Breaking Changes

#### Renamed: Unique Identifier Properties and Required Document Target Version
- Renamed `urpx:ratePlanIdentifier` → `urpx:ratePlanUniqueIdentifier`.
- Renamed `urpx:modifierIdentifier` → `urpx:modifierUniqueIdentifier`.
- Moved modifier unique identifier ownership from `urpx:RatePlanModifierVersion` to `urpx:RatePlanModifier`.
- Added required `urpx:targetURPXVersion` on `urpx:URPXDocument`.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

#### Reworked: Scenario-Backed Eligibility and Structured Condition Coverage
- Added `urpx:Scenario` as the holder for `urpx:hasCustomerProfile` and `urpx:hasServicePointProfile`.
- Expanded `urpx:hasConditionExpression` to `urpx:ApplicabilityGroup` and `urpx:ProfileAlternative` in addition to rule classes.
- Removed `urpx:ApplicabilityConstraint`, `urpx:DimensionValuePair`, and the related applicability and dimension-value properties.
- **Design Decision:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104)

### Ontology Changes

#### Added: `urpx:Scenario` (Class)
- Added `urpx:Scenario` to group the profile inputs used when evaluating eligibility conditions.
- Moved `hasCustomerProfile` and `hasServicePointProfile` domains from `EligibilityRule` to `Scenario`.
- **Design Decision:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104)

#### Expanded: `urpx:hasConditionExpression`
- Domain now includes `urpx:ApplicabilityGroup` and `urpx:ProfileAlternative`.
- `ConditionExpression` is now the single structured condition entry point across eligibility, applicability, and profile-alternative contexts.
- **Design Decision:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104)

#### Removed: Obsolete Applicability Constraint and Dimension-Value Constructs
- Removed `urpx:ApplicabilityConstraint`, `urpx:DimensionValuePair`, `urpx:constraintProperty`, `urpx:constraintValue`, `urpx:forDimension`, `urpx:hasDimensionValue`, `urpx:hasInclusionConstraint`, `urpx:hasExclusionConstraint`, and `urpx:valueIRI`.
- **Design Decision:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104)

### Ontology Property Changes

#### Renamed: `urpx:ratePlanIdentifier` → `urpx:ratePlanUniqueIdentifier`
- Retained `urpx:RatePlan` as the owning class while making the uniqueness semantics explicit.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

#### Renamed and Moved: `urpx:modifierIdentifier` → `urpx:modifierUniqueIdentifier`
- Renamed the property and moved its domain to `urpx:RatePlanModifier`.
- Removed identifier ownership from `urpx:RatePlanModifierVersion`.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

#### Added: `urpx:targetURPXVersion`
- Added required document-level metadata pointing to the URPX ontology version a document targets.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: Identifier and Document Version Validation
- Updated `RatePlanShape` to require `ratePlanUniqueIdentifier`.
- Added `modifierUniqueIdentifier` to `RatePlanModifierShape` and removed the legacy identifier from `RatePlanModifierVersionShape`.
- Added required `targetURPXVersion` to `URPXDocumentShape`.
- **Design Decision:** [#103](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-103)

#### Added: `ScenarioShape`
- Added `ScenarioShape` for `urpx:Scenario` with `hasCustomerProfile` and `hasServicePointProfile`.
- Tightened the shape so a scenario must carry at least one of the two profile links.
- **Design Decisions:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104), [#105](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-105)

#### Updated: Structured Condition Validation
- Added `hasConditionExpression` validation to `ApplicabilityGroupShape` and `ProfileAlternativeShape`.
- Removed direct `hasCustomerProfile` and `hasServicePointProfile` validation from `EligibilityRuleShape`.
- Tightened `EligibilityRuleShape` so `hasConditionExpression` is required.
- Removed `ApplicabilityConstraintShape`.
- **Design Decisions:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104), [#105](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-105)

### Documentation Updates

#### Added: `documentation/pages/urpx-condition-modeling.md`
- Added a dedicated condition-modeling guide covering `ConditionExpression`, operand-node usage, Scenario-based evaluation context, and a full JSON-LD example.
- **Design Decisions:** [#104](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-104), [#105](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-105)

#### Updated: Contribution and Agent Guidance
- Added `AGENTS.md` and revised `CONTRIBUTING.md` with concise issue, pull request, and review expectations for the repository.

2026-04-24
---

### Breaking Changes

#### Reworked: Rate Plan Enrollment and Default Semantics
- Removed `urpx:isOptional` from `RatePlanModifier`; modifier optionality should be expressed through version-scoped option or compatibility relationships rather than a document-level boolean.
- Added `urpx:customerChoice` on `RatePlanVersion` with controlled values `urpx:voluntaryChoice` and `urpx:mandatoryChoice`.
- Added `urpx:isDefault` on `RatePlanVersion` to indicate the default enrollment or fallback version.
- **Design Decision:** [#100](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-100)

#### Renamed: Profile Count Properties and Removed Legacy Threshold
- Renamed `urpx:numberOfMeters` → `urpx:meterCount`.
- Renamed `urpx:numberOfOccupants` → `urpx:occupancyCount`.
- Removed `urpx:demandThreshold` from the ontology and SHACL.
- Updated profile-metric notes and examples to use the normalized property names.
- **Design Decision:** [#102](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-102)

### Ontology Changes

#### Added: `urpx:GeneralRule` (Class)
- Added `urpx:GeneralRule` as a reusable tariff-book-level shared rule resource.
- Added `urpx:generalRuleID` for stable rule identification.
- Added `urpx:hasGeneralRule` from `TariffBookDocument` and `urpx:referencesGeneralRule` from `RatePlanVersion` / `RatePlanModifierVersion`.
- Expanded domains of `urpx:name`, `urpx:description`, `urpx:hasDataSourceReference`, and `urpx:hasApplicabilityRule` to include `urpx:GeneralRule`.
- **Design Decision:** [#099](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-099)

#### Added: `urpx:CustomerChoiceValue` (Enumeration Class)
- Added `urpx:CustomerChoiceValue` with enum instances `urpx:voluntaryChoice` and `urpx:mandatoryChoice`.
- Added `urpx:customerChoice` on `urpx:RatePlanVersion`.
- **Design Decision:** [#100](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-100)

### Ontology Property Changes

#### Replaced: `urpx:isOptional` → `urpx:isDefault`
- Replaced the old modifier-level optionality property with a version-level default-selection flag.
- New domain: `urpx:RatePlanVersion`.
- **Design Decision:** [#100](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-100)

#### Domain Expanded: `urpx:applicableToRatePlan`
- Added `urpx:RatePlan` to the property domain union.
- **Design Decision:** [#101](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-101)

#### Domain Expanded: `urpx:applicableToRatePlanVersion`
- Added `urpx:RatePlanVersion` to the property domain union.
- **Design Decision:** [#101](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-101)

#### Cleanup: Profile Metric Property References
- Updated `urpx:profileMetricProperty`, `urpx:profileMetricInput`, and related notes to reference `urpx:meterCount` and `urpx:occupancyCount`.
- Updated `urpx:householdCount` notes to refer to `occupancyCount` instead of `numberOfOccupants`.
- **Design Decision:** [#102](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-102)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Added: `GeneralRuleShape`
- Added `urpx-shacl:GeneralRuleShape` with validation for `generalRuleID`, optional metadata, provenance, and optional `hasApplicabilityRule`.
- Added `hasGeneralRule` to `TariffBookDocumentShape`.
- Added `referencesGeneralRule` to `RatePlanVersionShape` and `RatePlanModifierVersionShape`.
- **Design Decision:** [#099](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-099)

#### Updated: Rate Plan Enrollment Validation
- Added `customerChoice` and `isDefault` to `RatePlanVersionShape`.
- Added `CustomerChoiceValueShape` for the new controlled vocabulary.
- Removed `isOptional` from `RatePlanModifierShape`.
- **Design Decision:** [#100](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-100)

#### Updated: Profile Count Validation
- Replaced `numberOfOccupants` with `occupancyCount` on `CustomerProfileShape`.
- Replaced `numberOfMeters` with `meterCount` on `ServicePointProfileShape`.
- Removed `demandThreshold` from `CustomerProfileShape`.
- **Design Decision:** [#102](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-102)

### Documentation Updates

#### Added: Design Decisions #099-#102
- Added design-decision entries covering `GeneralRule`, rate-plan enrollment/default semantics, compatibility-domain expansion, and profile count terminology normalization.
- Updated the decision index in `documentation/pages/urpx-design-decisions-081-120.md`.

2026-04-17
---

### Breaking Changes

#### Replaced: Condition Modeling with Rooted Condition Expressions
- Rule data must use `urpx:hasConditionExpression` instead of `urpx:hasCondition` and `urpx:hasConditionLogic`.
- Atomic predicates must be represented as `urpx:ComparisonNode`.
- Boolean composition must use `urpx:operandNodes` on `urpx:BooleanOperationNode`.
- Operand values must use `urpx:DatatypeOperandNode`, `urpx:ObjectOperandNode`, or `urpx:CustomOperandNode` with datatype-specific value properties instead of `urpx:literalType`.
- Removed legacy classes and properties: `urpx:Condition`, `urpx:ConditionLogic`, `urpx:TerminalNode`, `urpx:DatatypeTerminalNode`, `urpx:ObjectTerminalNode`, `urpx:CustomTerminalNode`, `urpx:LiteralTypeValue`, `urpx:hasCondition`, `urpx:hasConditionLogic`, `urpx:conditionOperands`, `urpx:literalType`, and datatype enum instances previously used only to declare operand literal types.
- **Design Decisions:** [#097](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-097), [#098](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-098)

### Ontology Changes

#### Added: Rooted Condition Expression Model
- Added `urpx:ConditionExpression` as the single rule-linked wrapper for condition logic.
- Added `urpx:ConditionNode`, `urpx:ComparisonNode`, `urpx:DatatypeOperandNode`, `urpx:ObjectOperandNode`, and `urpx:CustomOperandNode`.
- Added `urpx:hasConditionExpression` and `urpx:rootNode` to anchor each expression to a `urpx:ComparisonNode` or `urpx:BooleanOperationNode`.
- Updated `urpx:BooleanOperationNode` to use `urpx:logicExpression` and `urpx:operandNodes`.
- Updated `urpx:operator`, `urpx:leftOperand`, `urpx:rightOperand`, `urpx:conditionProperty`, `urpx:customConditionProperty`, `urpx:referencesValue`, and datatype-specific value properties to align with the new expression model.
- **Design Decisions:** [#097](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-097), [#098](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-098)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: Condition Expression Validation
- Updated `ApplicabilityRuleShape` and `EligibilityRuleShape` to use `urpx:hasConditionExpression`.
- Added `ConditionExpressionShape`, `ComparisonNodeShape`, `DatatypeOperandNodeShape`, `ObjectOperandNodeShape`, and `CustomOperandNodeShape`.
- Updated `BooleanOperationNodeShape` and `OperationNodeShape` to validate the new rooted expression and operand-node structure.
- Removed legacy condition, condition-logic, terminal-node, and literal-type shapes.
- **Design Decisions:** [#097](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-097), [#098](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-098)

2026-04-13
---

### Breaking Changes

#### Refactored: `urpx:hasPriceDefinition` — Ownership Moved to `BillingModel`
- Domain changed from `urpx:Ledger` to `urpx:BillingModel`; existing data must be migrated.
- Added `urpx:referencesLedger` on `urpx:PriceDefinition` (required); ledger association is now explicit rather than implied by containment hierarchy.
- **Rationale:** `PriceDefinition` is structural billing metadata, not ledger content. `BillingModel` is the correct ownership level; `referencesLedger` makes the ledger relationship queryable and SHACL-validatable.
- **Design Decision:** [#093](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-093)

#### Replaced: Condition Modeling Architecture
- Removed `urpx:conditionValue`, `urpx:conditionType`, and `urpx:logicExpression`; existing rule data using these properties must migrate.
- Added structured condition classes: `ConditionLogic`, `BooleanOperationNode`, `OperationNode`, `DatatypeTerminalNode`, `ObjectTerminalNode`, `CustomTerminalNode`, `LiteralTypeValue`.
- Added structural properties: `hasConditionLogic`, `conditionOperands`, `leftOperand`, `rightOperand`, `conditionProperty`, `customConditionProperty`, `literalType`, `referencesValue`.
- Added datatype-specific value properties: `booleanValue`, `dateValue`, `dateTimeValue`, `decimalValue`, `durationValue`, `gMonthValue`, `integerValue`, `stringValue`, `timeValue`.
- `Condition` remains the atomic predicate unit; `ConditionLogic` becomes the authoritative executable rule structure for boolean composition. `CustomTerminalNode` is retained as a fallback path only.
- Expanded `urpx:name` and `urpx:description` domains to include condition and logic resources.
- **Design Decision:** [#094](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-094)

### Ontology Changes

#### Added: `urpx:RateCase` (Class)
- New class representing formal regulatory proceedings that establish or revise rate plan and pricing artifacts.
- Added `urpx:caseNumber` (DatatypeProperty, `xsd:string`) and `urpx:hasRateCase` (ObjectProperty) to associate regulatory proceedings with applicable resources.
- `urpx:hasRateCase` domain includes: `Price`, `PriceDefinition`, `PriceSet`, `PriceSetAlternative`, `RatePlanVersion`, `RatePlanModifierVersion`.
- Expanded domains of `urpx:name`, `urpx:description`, `urpx:priority`, and `urpx:url` to include `urpx:RateCase`.
- **Design Decision:** [#095](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-095)

#### Added: Datetime Provenance Properties
- Added `xsd:dateTime` companions for all existing `xsd:date` provenance properties: `urpx:dateTimeApproved`, `urpx:dateTimeCreated`, `urpx:dateTimeModified`, `urpx:dateTimePublished`, `urpx:dateTimeReceived`, `urpx:dateTimeRetrieved`.
- Domains mirror the corresponding `xsd:date` properties; existing date-only fields are preserved.
- **Rationale:** Enables full timestamp-level provenance for sources that report at sub-day precision, without overloading the `xsd:date` fields used where only date precision is available or intended.
- **Design Decision:** [#096](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-096)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: `BillingModelShape` and `LedgerShape`
- Moved `hasPriceDefinition` constraint from `LedgerShape` to `BillingModelShape`.
- Added required `referencesLedger` constraint on `PriceDefinitionShape`.
- **Design Decision:** [#093](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-093)

#### Replaced: Condition and Rule Shapes
- Replaced `logicExpression` constraints on applicability and eligibility rule shapes with `hasConditionLogic`.
- Redefined `ConditionShape` as an atomic predicate with required `operator`, `leftOperand`, and `rightOperand`.
- Added shapes: `ConditionLogicShape`, `BooleanOperationNodeShape`, `OperationNodeShape`, `DatatypeTerminalNodeShape`, `ObjectTerminalNodeShape`, `CustomTerminalNodeShape`.
- `DatatypeTerminalNodeShape` enforces `literalType` plus the matching datatype-specific value property.
- `ConditionLogicShape` and `BooleanOperationNodeShape` constrain to boolean operators and `conditionOperands`-based composition.
- **Design Decision:** [#094](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-094)

#### Added: `RateCaseShape`
- Required: `caseNumber`, `url`.
- Optional: `name`, `description`, `priority` (`sh:minInclusive 1`).
- **Design Decision:** [#095](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-095)

#### Added: Datetime Provenance Constraints
- Added `dateTimeApproved`, `dateTimeCreated`, `dateTimeModified`, `dateTimePublished`, `dateTimeReceived`, and `dateTimeRetrieved` property constraints to all shapes that carry the corresponding `xsd:date` fields.
- **Design Decision:** [#096](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-096)

---

2026-04-10
---

### Ontology Property Changes

#### Renamed: `urpx:approvalDate` → `urpx:dateApproved`
- Renamed for consistency with `date`-prefixed naming convention (`datePublished`, `dateModified`, etc.).
- Expanded domain to include `urpx:TariffPublication`, `urpx:TariffBookReference`, `urpx:TariffStatementReference`, `urpx:RatePlan`, and `urpx:RatePlanModifier` in addition to existing `urpx:DataSourceReference`, `urpx:RatePlanVersion`, and `urpx:RatePlanModifierVersion`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Added: `urpx:dateCreated` (DatatypeProperty)
- **Range:** `xsd:date`
- **Domain:** `urpx:DataSourceReference`, `urpx:URPXDocument`, `urpx:TariffPublication`, `urpx:TariffBookReference`, `urpx:TariffStatementReference`, `urpx:RatePlan`, `urpx:RatePlanModifier`, `urpx:RatePlanVersion`, `urpx:RatePlanModifierVersion`
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Added: `urpx:dateReceived` (DatatypeProperty)
- **Range:** `xsd:date`
- **Domain:** `urpx:URPXDocument`, `urpx:TariffPublication`, `urpx:TariffBookReference`, `urpx:TariffStatementReference`
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Domain Expanded: `urpx:dateModified`
- Added `urpx:TariffBookReference`, `urpx:TariffStatementReference`, `urpx:TariffPublication`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Domain Expanded: `urpx:datePublished`
- Added `urpx:RatePlan`, `urpx:RatePlanModifier`, `urpx:RatePlanVersion`, `urpx:RatePlanModifierVersion`, `urpx:TariffBookReference`, `urpx:TariffStatementReference`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Domain Expanded: `urpx:anchorLink`
- Added `urpx:DataSourceReference` to the existing union of `urpx:TariffBookReference` and `urpx:TariffStatementReference`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Domain Expanded: `urpx:pageStart` and `urpx:pageEnd`
- Added `urpx:TariffBookReference` and `urpx:TariffStatementReference`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Domain Expanded: `urpx:hasDataSourceReference`
- Added `urpx:TariffPublication` and `urpx:TariffStatementDocument`.
- **Design Decision:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091)

#### Added: `TariffStatementTypeValue` Enum Instances
- Materialized individual definitions for: `distributionStatement`, `fuelAdjustmentStatement`, `purchasedPowerStatement`, `statementTypeOther`, `transmissionStatement`.
- **Design Decision:** [#092](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-092)

#### Comment and Annotation Refinements
- Clarified `rdfs:comment` and `skos:note` on `TariffAddendumDocument`, `TariffBookReference`, `TariffPublication`, `TariffStatementReference`, `hasModifierVersionOptions`, `hasTariffBookReference`, and `dateRetrieved`.

#### Cleanup: Removed Duplicate `profileMetricInput` Individual
- Removed duplicate individual definition; primary definition remains in the MetricInputTypeValue enum section.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Renamed `approvalDate` → `dateApproved` in `DataSourceReferenceShape`, `RatePlanVersionShape`, `RatePlanModifierVersionShape`.
- Added `dateCreated`, `dateReceived`, and expanded date property constraints across applicable shapes.
- Added `anchorLink` to `DataSourceReferenceShape`; added `pageStart`/`pageEnd` to `TariffBookReferenceShape` and `TariffStatementReferenceShape`.
- Added `hasDataSourceReference` to `TariffPublicationShape` and `TariffStatementDocumentShape`.
- Added date property blocks to `RatePlanShape`, `RatePlanModifierShape`, `TariffBookReferenceShape`, `TariffStatementReferenceShape`, `TariffPublicationShape`.
- Removed `rateStatement` from `TariffStatementTypeValueShape` `sh:in` list.
- **Design Decisions:** [#091](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-091), [#092](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-092)

---

2026-04-07
---

### Ontology Property Changes

#### Added: `urpx:hasModifierVersionOptions` (ObjectProperty)
- **Domain:** `urpx:RatePlanVersion`
- **Range:** `urpx:RatePlanModifierVersion`
- **Rationale:** Enables precise version-to-version compatibility modeling between a specific rate plan version and the modifier versions that are valid options for it.
- **Design Decision:** [#090](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-090)

#### Added: `urpx:applicableToRatePlanVersion` (ObjectProperty)
- **Domain:** `urpx:RatePlanModifierVersion`
- **Range:** `urpx:RatePlanVersion`
- **Rationale:** Allows modifier versions to declare which specific rate plan versions they may be applied to, parallel to the existing document-level applicability pattern.
- **Design Decision:** [#090](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-090)

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Added optional `urpx:hasModifierVersionOptions` property constraint to `RatePlanVersionShape`.
- Added optional `urpx:applicableToRatePlanVersion` property constraint to `RatePlanModifierVersionShape`.
- **Design Decision:** [#090](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-090)

---

2026-04-06
---

### Ontology Changes

#### Expanded: `urpx:DataSourceReference`
- Added provenance and pagination properties: `urpx:accessURL`, `urpx:dateRetrieved`, `urpx:dateModified`, `urpx:pageStart`, and `urpx:pageEnd`.
- Extended `approvalDate`, `datePublished`, `effectiveDate`, `effectiveDateTime`, `expirationDate`, and `expirationDateTime` to include `urpx:DataSourceReference` in their domains.
- Extended the domain of `urpx:hasDataSourceReference` to include `urpx:PriceSetAlternative`.
- **Rationale:** Captures retrieval provenance, publication metadata, and page-level citation details directly on the source reference object.
- **Design Decision:** [#088](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-088)

#### Added: Structured Tariff Citation Classes
- Added `urpx:TariffBookReference` and `urpx:TariffStatementReference` as nested citation classes under `DataSourceReference`.
- Added linking properties `urpx:hasTariffBookReference` and `urpx:hasTariffStatementReference`.
- Added structured location properties `urpx:anchorLink`, `urpx:leafStart`, and `urpx:leafEnd`; extended `urpx:tariffStatementType` to support `TariffStatementReference`.
- Removed legacy datatype properties `urpx:tariffBookReference` and `urpx:tariffStatementReference`.
- **Rationale:** Replaces opaque string citations with structured, queryable reference objects while keeping provenance metadata centralized on `DataSourceReference`.
- **Design Decision:** [#089](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-089)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Expanded: `DataSourceReferenceShape`
- Added validation for provenance, pagination, and nested tariff citation properties.
- **Design Decision:** [#088](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-088)

#### Added: `TariffBookReferenceShape` and `TariffStatementReferenceShape`
- Added dedicated node shapes for the new structured tariff citation classes.
- Removed direct string-based `tariffBookReference` and `tariffStatementReference` constraints from `PriceShape`, `PriceDefinitionShape`, `PriceSetShape`, and `PriceSetAlternativeShape`.
- **Design Decision:** [#089](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-089)

---

2026-03-24
---

### Ontology Changes

#### Added: `urpx:ServiceTiers` (Class)
- Added new container class `urpx:ServiceTiers` between `BillingModel` and individual `ServiceTier` instances.
- Added `urpx:hasServiceTiers` (`BillingModel` → `ServiceTiers`).
- Changed the domain of `urpx:hasServiceTier` from `urpx:BillingModel` to `urpx:ServiceTiers`.
- Moved `urpx:referencesMetricInput` and `urpx:referencesProfileAlternative` from `ServiceTier` to `ServiceTiers`.
- **Rationale:** Supports multiple independently scoped groups of tiers within one billing model, with metric/profile references attached at the correct grouping level.
- **Design Decision:** [#087](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-087)

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Added `urpx-shacl:ServiceTiersShape`.
- Updated `BillingModelShape` to use `urpx:hasServiceTiers` instead of linking directly to `ServiceTier`.
- Updated tier validation to align with the new container pattern.
- **Design Decision:** [#087](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-087)

---

2026-03-23
---

### Ontology Property Changes

#### Domain Extended: `urpx:name`
- Added `urpx:PriceSummary`, `urpx:DataSourceReference`, `urpx:EligibilityRule`, `urpx:TOUSchedule`, `urpx:ServiceTier`, `urpx:ApplicabilityRule`, `urpx:ApplicabilityGroup`, and `urpx:PriceUpdateRule`.
- **Rationale:** Standardizes human-readable labels across user-facing and documentation-facing entities.
- **Design Decision:** [#083](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-083)

#### Domain Extended: `urpx:description`
- Added `urpx:DataSourceReference` and `urpx:PriceUpdateRule`.
- **Design Decision:** [#083](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-083)

#### Domain Extended: `urpx:url`
- Added `urpx:ProgramEnrollment`.
- **Rationale:** Supports linking program enrollment records to enrollment portals or program documentation.
- **Design Decision:** [#083](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-083)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Added or Expanded: Human-Readable Metadata Constraints
- Added or expanded `urpx:name` property constraints on `DataSourceReferenceShape`, `EligibilityRuleShape`, `TOUScheduleShape`, `ServiceTierShape`, `ApplicabilityRuleShape`, `ApplicabilityGroupShape`, `PriceSummaryShape`, and `PriceUpdateRuleShape`.
- **Design Decision:** [#083](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-083)

#### Required: `name` on Core Published Entities
- Made `urpx:name` required on `RatePlanShape`, `RatePlanModifierShape`, `TariffPublicationShape`, and `TOUPeriodShape`.
- **Design Decision:** [#083](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-083)

---

2026-03-20
---

### Ontology Property Changes

#### Added: `urpx:hasModifierOptions` (ObjectProperty)
- **Domain:** `urpx:RatePlanVersion`
- **Range:** `urpx:RatePlanModifier`
- **Rationale:** Adds an explicit version-level link to available modifier documents without relying on indirect inference.
- **Design Decision:** [#084](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-084)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Hardened: Closed Node Shapes
- Added `sh:closed true` and `sh:ignoredProperties ( rdf:type )` broadly across existing node shapes.
- **Rationale:** Rejects undeclared properties and reinforces URPX as a single central exchange model rather than a schema intended for ad hoc local extensions.
- **Design Decision:** [#085](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-085)

#### Expanded: Organization and Authority Validation
- Expanded `EnergyServiceProviderShape` to validate broader organization metadata including `alternateName`, `commodity`, `hasIdentity`, `hasLocationDataSet`, `legalName`, `operatesIn`, `organizationType`, and `publishes`.
- Expanded `RegulatoryAuthorityShape` with broader organization and publication/jurisdiction validation.
- Added `SystemOperatorShape`.
- Added `nameType` validation to `OrganizationNameShape`.
- **Design Decision:** [#086](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-086)

#### Added: `hasModifierOptions` on `RatePlanVersionShape`
- Added optional `urpx:hasModifierOptions` property constraint.
- **Design Decision:** [#084](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-084)

---

2026-03-18
---

### Ontology Changes

#### Added: `urpx:MediaTypeValue` (Enumeration Class)
- Added controlled vocabulary class `urpx:MediaTypeValue` with 14 supported media-type instances.
- **Rationale:** Replaces free-text media type strings with a controlled, machine-validatable vocabulary.
- **Design Decision:** [#080](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-041-080.md#decision-080)

#### Changed: `urpx:mediaType`
- Converted from `owl:DatatypeProperty` with range `xsd:string` to `owl:ObjectProperty` with range `urpx:MediaTypeValue`.
- **Design Decision:** [#080](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-041-080.md#decision-080)

#### Refactored: `urpx:DataSourceTypeValue`
- Removed file-format-based source values: `urpx:csvSource`, `urpx:jsonSource`, `urpx:pdfSource`, `urpx:spreadsheetSource`, `urpx:xmlSource`.
- Added origin-based source values: `urpx:utilityWebsiteSource`, `urpx:regulatoryWebsiteSource`.
- **Rationale:** Source type now expresses provenance origin, while media format is captured separately by `urpx:mediaType`.
- **Design Decision:** [#081](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-081)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Updated: Data Source Media and Source-Type Validation
- Added `MediaTypeValueShape`.
- Updated `DataSourceTypeValueShape` to the refactored provenance-oriented enumeration.
- Updated `DataSourceReferenceShape` to validate `urpx:mediaType` via `sh:node` rather than `sh:datatype`.
- **Design Decision:** [#080](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-041-080.md#decision-080)
- **Design Decision:** [#081](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-081)

#### Relaxed: `enrollmentStatus` cardinality
- Made `urpx:enrollmentStatus` optional on `ProgramEnrollmentShape` and `PriorRatePlanShape`.
- **Rationale:** Enrollment status can be required in a customer scenario model, but not in generic representations of available or applicable programs and prior rate plans.
- **Design Decision:** [#082](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-081-120.md#decision-082)

2026-03-03 (continued)
---

### Ontology Changes

#### Domain Narrowed: `urpx:hasMetricInput`
- Removed `urpx:Price`, `urpx:PriceSet`, and `urpx:Condition` from the domain; domain is now `urpx:PlanElements` only.
- **Rationale:** Metric input *definitions* belong centrally in `PlanElements`. Individual objects reference metrics through `hasMetricSpecification`. Having `hasMetricInput` on Price, PriceSet, and Condition blurred the define-vs-reference distinction.
- **Design Decision:** [#077](#decision-077)

#### Domain Extended: `urpx:name`
- Added `urpx:ProfileAlternatives` and `urpx:ProfileAlternative` to the domain of `urpx:name`.
- **Rationale:** These are user-facing selection entities that need human-readable labels for display.
- **Design Decision:** [#078](#decision-078)

#### Domain Extended: `urpx:referencesProfileAlternative`
- Added `urpx:TOUSchedule` and `urpx:ServiceTier` to the domain.
- **Rationale:** Profile-based differentiation should apply uniformly across the rate plan structure — not just prices, but also TOU schedules and service tiers.
- **Design Decision:** [#079](#decision-079)

#### Alphabetical Reordering: Classes in `P` Block
- Reordered `PlanElements`, `PriceUpdateRule`, `Profile`, `ProfileAlternative`, `ProfileAlternatives`, `ProgramEnrollment` into strict alphabetical order.
- No semantic changes.

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Removed: `hasMetricInput` from `ConditionShape`, `PriceShape`, `PriceSetShape`
- Removed `urpx:hasMetricInput` property constraints from these three shapes.
- **Rationale:** Aligns with ontology domain narrowing (Decision #077).

#### Required: `name` on `LedgerShape` and `PriceDefinitionShape`
- Changed `urpx:name` from optional (`sh:minCount 0`) to required (`sh:minCount 1`).
- **Design Decision:** [#078](#decision-078)

#### Added: `name` on `ProfileAlternativeShape` and `ProfileAlternativesShape`
- Added required `urpx:name` property constraint (`sh:minCount 1`, `sh:maxCount 1`) to both shapes.
- **Design Decision:** [#078](#decision-078)

#### Added: `referencesProfileAlternative` on `TOUScheduleShape` and `ServiceTierShape`
- Added optional `urpx:referencesProfileAlternative` property constraint (`sh:minCount 0`, `sh:maxCount 1`).
- **Design Decision:** [#079](#decision-079)

#### Added: `referencesProfileAlternatives` on `PriceDefinitionShape`
- Added optional `urpx:referencesProfileAlternatives` property constraint (`sh:minCount 0`, `sh:maxCount 1`).
- **Design Decision:** [#079](#decision-079)

---

2026-03-03
---

### Ontology Property Changes

#### Property Renamed: `urpx:appliesInZone` → `urpx:appliesInGeographicZone`
- **Rationale:** Renamed for specificity — the property applies to geographic zones, and the name should unambiguously reflect this to avoid confusion with non-geographic zone concepts.
- **Design Decision:** [#067](#decision-067)

#### Domain Removal: `urpx:conditionType` and `urpx:conditionValue`
- Removed `urpx:EligibilityRule` and `urpx:ApplicabilityRule` from the domain of `conditionType` and `conditionValue`.
- **Rationale:** These properties belong on the structured `Condition` object, not on the rule-level objects. `EligibilityRule` and `ApplicabilityRule` contain `Condition` objects which in turn carry `conditionType` and `conditionValue`. Removing the rule classes from the domain enforces correct placement within the `Condition` structure.
- **Design Decision:** [#068](#decision-068)

#### Domain Extension: `urpx:hasLocationDataSet`
- Added `urpx:RatePlan` and `urpx:RatePlanModifier` to the domain of `urpx:hasLocationDataSet`.
- **Design Decision:** [#069](#decision-069)

#### Added: `urpx:nameType` (ObjectProperty)
- Domain: `urpx:OrganizationName`
- Range: `urpx:NameTypeValue`
- **Purpose:** Classifies organization names by type (e.g., legal, trade, doing-business-as), enabling structured name management for organizations with multiple name representations.
- **Design Decision:** [#070](#decision-070)

#### Removed: `urpx:profileId` (DatatypeProperty)
- **Rationale:** `@id` provides a referenceable unique identifier for profile instances; a separate `profileId` property is redundant.
- **Migration:** Replace all `urpx:profileId` values with `@id` declarations on CustomerProfile and ServicePointProfile objects.
- **Impact:** Breaking change for implementations relying on `profileId`.
- **Design Decision:** [#071](#decision-071)

#### Removed: `urpx:month`, `urpx:hour`, `urpx:day` from `UnitOfMeasureValue`
- **Rationale:** Time-based interval units are better expressed through structured interval metric specifications using `urpx:intervalDuration` (ISO 8601) rather than as unit-of-measure enumeration values.
- **Design Decision:** [#074](#decision-074)

#### Domain Update: `urpx:geographicZone`
- Removed `urpx:CustomerProfile` from the domain of `urpx:geographicZone`; domain now includes `urpx:ServicePointProfile`.
- **Rationale:** Geographic properties belong on `ServicePointProfile` (the location-centric profile) rather than on `CustomerProfile` (the customer-centric profile). This consolidates all geographic properties under `ServicePointProfile`.
- **Design Decision:** [#075](#decision-075)

### SHACL Updates (`shacl/urpx-shacl.ttl`)

#### Price Shape (`PriceShape`) — `sh:xone` constraint
- Added `urpx:basedOnPrice`, `urpx:basePrice`, and `urpx:currentPrice` as additional options in the `sh:xone` pricing constraint (now includes `amount`, `unitPrice`, `basedOnPrice`, `basePrice`, `currentPrice`).
- **Design Decision:** [#072](#decision-072)

#### Price Shape (`PriceShape`) — `referencesPriceDefinition` cardinality
- Updated `urpx:referencesPriceDefinition` cardinality on `PriceShape` to optional (`minCount 0`).
- **Rationale:** Not every Price instance requires an explicit link to a PriceDefinition; this should be optional.
- **Design Decision:** [#073](#decision-073)

#### PriceSet Shape (`PriceSetShape`) — `hasPrice` cardinality
- Updated `urpx:hasPrice` minimum cardinality from 2 to 1 on `PriceSetShape`.
- **Rationale:** A PriceSet with a single Price is valid, particularly for the `PriceSetAlternative` subclass pattern. Requiring at least 2 prevented flexible modeling.
- **Design Decision:** [#076](#decision-076)

### Documentation Updates (`documentation/`)

Updates made to align with ontology and SHACL changes in (`documentation/pages/`):
- `documentation/pages/urpx-api-spec.md`
- `documentation/pages/urpx-complex-condition-modeling.md` (removed, requires re-development)
- `documentation/pages/urpx-data-dictionary.md`
- `documentation/pages/urpx-design-principles.md`
- `documentation/pages/urpx-diagram-index.md`
- `documentation/pages/urpx-examples.md` (removed, requires re-development)
- `documentation/pages/urpx-faq.md`
- `documentation/pages/urpx-overview.md`
- `documentation/pages/urpx-quality-assurance.md`
- `documentation/pages/urpx-semantic-web-guide.md`
- `documentation/pages/urpx-syntax-guidelines.md`
- `documentation/pages/urpx-tutorial.md`

Update to urpx/documentation/index.md to remove broken links.

---

2026-03-02
---

### Ontology Changes

#### Class Renamed: `urpx:StatementTypeValue` → `urpx:TariffStatementTypeValue`
- **Rationale:** `StatementTypeValue` was too generic — "statement" is a broad term and the class specifically enumerates tariff statement types. Renaming aligns the class name with its domain class (`TariffStatementDocument`) and with the URPX convention of prefixing tariff-related classes with `Tariff`.
- Fixed `skos:note` capitalisation ("standardized" → "Standardized") during rename.
- **Impact:** No breaking change — not yet in use.
- **Design Decision:** [#065](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-041-080.md#decision-065)

#### Added: `urpx:tariffStatementType` (ObjectProperty)
- **Domain:** `urpx:TariffStatementDocument`
- **Range:** `urpx:TariffStatementTypeValue`
- **Rationale:** `TariffStatementDocument` lacked a property to classify which kind of statement a document represents (e.g., fuel adjustment, rate statement, transmission). `TariffStatementTypeValue` existed as a vocabulary class but had no corresponding property connecting it to the document.
- **Design Decision:** [#066](https://github.com/urpx-org/urpx-dev/blob/main/dev-docs/decisions/urpx-design-decisions-041-080.md#decision-066)

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Fixed typo: renamed `StateemntTypeValue` shape to `TariffStatementTypeValue` shape.
- Added `tariffStatementType` as an optional property constraint on `TariffStatementDocumentShape`.

---

2026-02-25
---

### Ontology Property Changes

#### Removed: `urpx:alternativesType` (ObjectProperty)
- **Rationale:** Removed along with `AlternativesTypeValue` enum class and all instances. Classification of alternative dimensions is better expressed through the ontology structure itself rather than a separate type property.
- **Impact:** Breaking change for any implementations using `alternativesType` on `ProfileAlternative`.

#### Removed: `urpx:timeZone` (DatatypeProperty)
- **Rationale:** Duplicated `urpx:timezoneIdentifier`. A single timezone property using IANA timezone identifiers is sufficient.
- **Impact:** Use `urpx:timezoneIdentifier` instead.

#### Added: `urpx:nameType` (ObjectProperty)
- Domain: `OrganizationName`
- Range: `NameTypeValue`
- Migrated from the original organization ontology.

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Removed `alternativesType` property constraint from `ProfileAlternativeShape`
- Removed `AlternativesTypeValueShape` enumeration shape
- Fixed `ProfileAlternativesShape`: restored `hasProfileAlternative` (containment) instead of `referencesProfileAlternative` (cross-reference)
- Added `basePrice` and `currentPrice` to Price `sh:xone` constraint (now 5 options: `amount`, `unitPrice`, `basedOnPrice`, `basePrice`, `currentPrice`)

### Documentation Updates

#### Data Dictionary (`documentation/pages/urpx-data-dictionary.md`)
- Comprehensive reconciliation of all class properties against ontology (35 non-ontology properties identified and resolved)
- Removed `alternativesType` property from ProfileAlternative and `AlternativesTypeValue` enumeration section
- URPXDocument: removed `identifier`, replaced `hasStatementDocument` with `hasRatePlanModifier` + `hasTariffPublication`
- RatePlan: renamed `identifier` → `ratePlanIdentifier`, removed `timeZone`/`submissionDate`/`approvedBy`/`applicableInTerritory`/`hasEligibilityRule`/`publishedBy`, added `hasRateGroup`
- RatePlanVersion: renamed `versionNumber` → `version`, added `publishedBy` and `hasEligibilityRule`, removed `hasModifier`
- EligibilityRule: renamed `ruleType` → `conditionType`, `value` → `conditionValue`, added `hasCustomerProfile`/`hasServicePointProfile`
- PriceSet: removed `hasStatementPrice`, renamed `dataSourceReference` → `hasDataSourceReference`
- Price: updated xone table (5 fields), renamed `tierNumber` → `serviceTierNumber`, replaced `tierThreshold` with `upperBound`/`lowerBound` on ServiceTier, renamed `dataSourceReference` → `hasDataSourceReference`
- Replaced StatementDocument/StatementPrice sections with TariffBookDocument/TariffStatementDocument/TariffSupplementDocument/TariffAddendumDocument
- ApplicabilityGroup: removed `groupName`/`groupType`/`isExclusive`, added `applicabilityLogic`/`hasInclusionConstraint`/`hasExclusionConstraint`/`appliesInZone`/`appliesForCustomerKind`/`appliesForCustomerSubKind`
- TOUSchedule: removed `scheduleType`/`hasMeasurement`
- TOUTier: renamed `tierStandardName` → `touTierStandardName`
- MetricInput: removed non-ontology `identifier`/`hasServiceTier`
- Updated SHACL examples with correct property names and xone constraint
- Updated SPARQL examples (removed `versionStatus` references)
- Updated `MeteringConfigurationValue` "Used By" to `hasMeteringConfiguration`

#### Semantic Web Guide (`documentation/pages/urpx-semantic-web-guide.md`)
- Updated JSON-LD examples: `AlternativeDimensionSet` → `ProfileAlternative`, removed `alternativesType`, corrected property names

---

2026-02-24
---

### Ontology Property Changes

#### Labels Updated
- Updated `urpx:includeHolidays` label to "Includes Holidays"
- Updated `urpx:includeNonHolidays` label to "Includes Non-Holidays"

#### Domain Extensions
- Extended `urpx:timezoneIdentifier` domain to include `RatePlan` and `RatePlanModifier`
- Extended `urpx:hasLocationDataSet` domain to include `RatePlan` and `RatePlanModifier`

#### Property Renamed
- Renamed `urpx:hasProfileAlternative` to `urpx:referencesProfileAlternative` on `PriceSetAlternative` and `PriceDefinition` domains
- Original `urpx:hasProfileAlternative` retained on `ProfileAlternatives` → `ProfileAlternative` containment relationship
- Renamed `urpx:forProfileAlternative` to `urpx:referencesProfileAlternative` (PriceSetAlternative, PriceDefinition → ProfileAlternative)
- Renamed `urpx:forProfileAlternatives` to `urpx:referencesProfileAlternatives` (PriceSetAlternatives, PriceDefinition → ProfileAlternatives)

#### Enumeration Updates
- Removed `urpx:month`, `urpx:hour`, and `urpx:day` from `UnitOfMeasureValue` (time expressed via `intervalDuration`)
- Expanded `ServiceRoleValue` enumeration definitions

### SHACL Updates (`shacl/urpx-shacl.ttl`)
- Reduced `PriceSet` minimum `hasPrice` cardinality from 2 to 1 (supports `PriceSetAlternative` subclass)
- Added `urpx:basedOnPrice` as third option in Price shape `sh:xone` (alongside `amount` and `unitPrice`)
- Renamed `urpx:forProfileAlternative` to `urpx:referencesProfileAlternative` on `PriceSetAlternativeShape`
- Renamed `urpx:forProfileAlternatives` to `urpx:referencesProfileAlternatives` on `PriceSetAlternativesShape`
- Added `urpx:hasLocationDataSet`, `urpx:timezoneIdentifier` to `RatePlanShape`
- Added `urpx:hasLocationDataSet`, `urpx:timezoneIdentifier` to `RatePlanModifierShape`

### Documentation Updates

#### Data Dictionary (`documentation/pages/urpx-data-dictionary.md`)
- Reconciled all enumeration tables against ontology (59 enum classes)
- Added 21 missing enumeration classes with complete value tables
- Corrected enumeration value names to match ontology (`delivery` → `deliveryPortion`, `supply` → `supplyPortion`, `bundled` → `bundledPortion`, `distribution` → `distributionCharge`, etc.)
- Alphabetically sorted all enumeration value tables
- Removed 4 classes not in ontology: `RatePlanStatusValue`, `VersionStatusValue`, `StatementStatusValue`, `UtilityTypeValue`
- Removed `versionStatus` property from RatePlanVersion (not in ontology)
- Renamed `forProfileAlternative`/`forProfileAlternatives` to `referencesProfileAlternative`/`referencesProfileAlternatives`
- Added `hasLocationDataSet`, `timezoneIdentifier` to RatePlan class
- Removed decision log cross-references

#### Examples, Tutorial, API Spec, Design Decisions
- Updated `billPortion` values across all files (`delivery` → `deliveryPortion`, `supply` → `supplyPortion`, `bundled` → `bundledPortion`)
- Updated `serviceRole` values across all files (`bundled` → `bundledServiceRole`)
- Updated `chargeType` values (`distribution` → `distributionCharge`)
- Updated property rename references in design decisions log

#### Quality Assurance (`documentation/pages/urpx-quality-assurance.md`)
- Updated `BillPortionValue` and `ServiceRoleValue` references to new enumeration names
- Removed decision log cross-references

#### Overview (`documentation/pages/urpx-overview.md`)
- Updated SHACL section for extensibility and accuracy

#### Tutorial (`documentation/pages/urpx-tutorial.md`)
- Added reference to validation script under development

---

2026-02-18
---

### Ontology Property Changes

#### Removed: `urpx:isCredit` (DatatypeProperty)
- **Rationale:** Risks data integrity by introducing ambiguity and duplicate credit handling for negative values. Impossible to enforce proper use of optional boolean property with large datasets.
- **Migration:** Credits are now indicated exclusively through negative `unitPrice`/`amount` values combined with credit-specific `chargeType` enumerations (e.g., `creditEnergy`, `capitalCredit`, `creditGeneration`).
- **Impact:** Breaking change for any implementations using `isCredit`. Remove all `isCredit` instances from data.
- **Status:** Open to revisiting credit tagging in the future (see working group agenda item).
- **Design Decision:** [#057](#decision-057)

#### Removed: `urpx:priceId` (DatatypeProperty)
- **Rationale:** `@id` provides a unique identifier for prices; a separate property is redundant.
- **Migration:** Replace all `urpx:priceId` values with `@id` declarations on Price objects.
- **Impact:** Breaking change for implementations relying on `priceId`.
- **Design Decision:** [#058](#decision-058)

#### Added: `urpx:referencesPriceDefinition` (ObjectProperty)
- **Domain:** `urpx:Price`, `urpx:PriceSet`
- **Range:** `urpx:PriceDefinition`
- **Purpose:** Provides an IRI-based link between a `Price` instance (containing temporal and numerical information) and its associated `PriceDefinition` object (containing structural, descriptive, and applicability information). Supports n:1 relationship.
- **Design Decision:** [#059](#decision-059)

#### Removed: `urpx:PriceDefinition` from temporal property domains
- Removed from `startDate`, `startDateTime`, `endDate`, `endDateTime`, `expectedEndDate`, `expectedEndDateTime` domains.
- **Rationale:** `PriceDefinition` communicates structural/descriptive price information and should not have temporal properties.
- **Design Decision:** [#062](#decision-062)

#### SHACL Updates
- Made `urpx:chargeType` and `urpx:chargeCategory` optional on Price shape (previously required).
- Made `urpx:billPortion` optional on PriceDefinition shape (previously required).
- **Rationale:** These are mapping categorizations; not required for complete data.
- **Design Decision:** [#061](#decision-061)

#### Test Data Updates
- Removed `urpx:isCredit` instances from test data.
- Replaced `urpx:priceId` with `@id` declarations.
- Added `urpx:referencesPriceDefinition` to each `Price` object.
- Consolidated delivery price definitions into single Ledger for consistency.
- Moved structural properties (`baseQuantity`, `hasCalculationMethod`, `hasApplicabilityRule`) from `Price` to `PriceDefinition`.
- Removed duplicate `chargeType`/`chargeCategory`/`touPeriodNumber` from Price instances where already on PriceDefinition.
- Added `assets/` and `data/` subdirectories to test case folder structure.

### Minor Updates
- Updated `AnnualIncomeRangeValue` instance descriptions to indicate ranges are "typical" rather than absolute.
- Updated `urpx:url` value from string to valid URL format in test data.

---

2026-02-11
---
- Corrected range for `urpx:dataSourceType` property.

---

2026-02-10
---
- Added `urpx:hertz` unit of measure to `UnitOfMeasureValue` enumeration.
- Added `urpx:EligibilityRule` and `urpx:Condition` to domain of `urpx:description` property.

---

2026-02-06
---

### Ontology Consistency Updates
- Added `urpx:otherEndUse` to `EndUseValue` enumeration.
- Added `urpx:measuredLedger` to `LedgerTypeValue` enumeration.
- Removed `urpx:net` from `MeteringConfigurationValue` enumeration.
- Added `urpx:ratePlanPublication` and `urpx:ratePlanModifierPublication` to `PublicationTypeValue` enumeration.
- Updated `billPortion` values in `ChargeTypeValue` charge classification combinations (`supply` -> `supplyPortion`, `delivery` -> `deliveryPortion`).
- Added `urpx:interval` to `MeteringConfigurationValue` enumeration.
- Added `MetricInputTypeValue` enumeration section (was missing from ontology).
- Added `urpx:day` and `urpx:year` to `UnitOfMeasureValue` enumeration.
- Removed misplaced `profileMetricProperty` definition from `UpdateFrequencyValue` section.

### SHACL Validation File
- **Added:** `shacl/urpx-shacl.ttl` (~3,635 lines) - Draft SHACL shapes for ontology validation.
- Updated PG&E test case data for SHACL compliance.
- **Design Decision:** [#060](#decision-060)

### Domain Fix
- Fixed `urpx:hasRateGroup` domain to use proper OWL union syntax: `owl:unionOf ( urpx:RatePlan urpx:ServiceClass )`.

---

2026-02-05
---
- Added units of measure: `urpx:bit`, `urpx:byte`, `urpx:count`, `urpx:decatherm`, `urpx:Gbps`, `urpx:item`, `urpx:Mbps`, `urpx:kilogallon`, `urpx:VA`, `urpx:VAh`, `urpx:VAr`, `urpx:VArh`, `urpx:kVAr`, `urpx:kVArh`.
- Updated domain/range for `urpx:hasAlternative`: domain changed from `ProfileAlternative` to `PriceSet`; range changed from `PriceSet` to `ProfileAlternative`.
- Updated domain for `urpx:hasAlternativeDimension`: changed from `ProfileAlternative` to `AlternativeDimensions`.
- Added `urpx:RatePlanModifierVersion` to `hasPrices` domain (along with `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`).
- Added `urpx:RatePlanModifierVersion` to domains of `approvalDate`, `changeDescription`, `changeReason`.
- Fixed `urpx:hasServiceTier`: domain corrected to `BillingModel`, range corrected to `ServiceTier`.

---

2026-01-30
---
- Added `urpx:RatePlanModifierVersion` to `hasPrices` and other property domains.
- Removed `urpx:ServicePointProfile` from `billingCycleCode` property domain.

---

2026-01-29
---
- Updated `.gitignore`.
- Minor ontology corrections.

---

2026-01-28
- removed tierThreshold as redundant
- updated ontology notes to removce progress notes

---
2026-01-27
---
Added for accounting purposes:
```turtle
urpx:isCredit a owl:DatatypeProperty ;
    rdfs:label "Is Credit"@en ;
    rdfs:comment "Indicates if the charge is a credit to the customer account."@en ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:Price urpx:PriceSet urpx:PriceDefinition urpx:PriceSetAlternative ) ] ;
    rdfs:range xsd:boolean ;
    skos:note "Used for accounting system integration. If true, the value should be treated as a credit (reducing balance) even if the amount is stored as a positive number. In URPX v0.1.1, negative unitPrices are still the primary mathematical indicator."@en .
```



Updated domain to allow for season price tagging:

```turtle
urpx:appliesInSeason a owl:ObjectProperty ;
    rdfs:label "Applies In Season"@en ;
    rdfs:comment "Season(s) this time bracket applies to" ;
    rdfs:domain [ a owl:Class ;
        owl:unionOf ( urpx:TimeBracket urpx:Price urpx:PriceSet urpx:PriceSetAlternative uprx:PriceSetAlternatives ) ] ;
    rdfs:range urpx:Season ;
    skos:note "URI references to seasons defined in PlanElements. Enables TimeBrackets to reference seasons without nesting. Multiple seasons can be referenced for brackets that apply across seasonal boundaries. Part of flat version architecture (Decision #018)." .
```

---

## Version 0.1.1 - January 27, 2026

### Changed
- Merged `urpx-standards-mapping.md`, `urpx-standards-mapping-with-skos.md`, and `urpx-standards-integration.md` into one document, `urpx-interoperability.md`.
- Added `urpx:endUse`, `urpx:hasHVAC`, `urpx:ledgerType`, and `urpx:metricInputType` to the data dictionary, and added `urpx:calculatedLedger` to `LedgerTypeValue`.
- Embedded the active diagrams directly into `urpx-diagram-index.md`, removing the need for external SVG exports, and archived draft and historical diagrams separately.

---

## Version 0.1.1 - January 21, 2026

### Changed
- Consolidated five separate ontology files (`urpx-core-ontology.ttl`, `urpx-charge-classification.ttl`, `urpx-geography.ttl`, `urpx-organization.ttl`, `urpx-profile.ttl`) into a single `urpx-ontology.ttl`.

### Added
- `urpx:hasIdentity` (`Organization` → `OrganizationIdentity`) for temporal identity tracking, and `urpx:hasName` (`OrganizationIdentity` → `OrganizationName`), reusing `schema:name` for the name value.

---

## Version 0.1.1 - January 20, 2026

### Changed
- Removed remaining CDS, NAESB, and CIM references across the organization, geography, profile, and core ontology files for IP compliance and semantic clarity.
- Converted `urpx:dataSourceReference` (a datatype property) to `urpx:hasDataSourceReference` (an object property referencing a new `urpx:DataSourceReference` class), enabling structured source traceability.
- Consolidated `EndUseCategoryValue` (profile) into `EndUseValue` (core), moving `agriculturalEndUse`, `municipalEndUse`, and `streetLightingEndUse` into the core enumeration and removing the now-redundant profile class.

### Added
- `HVACKindValue` and `urpx:hasHVAC` on the profile ontology.
- `communityChoiceAggregation` and `communitySolar` to `ProgramTypeValue`, aligning with California IOU/CCA rate plans.

---

## Version 0.1.1 - January 20, 2026 (Later Same Day)

### Changed
- `urpx:dataSourceReference` (a datatype property) becomes `urpx:hasDataSourceReference` (an object property), ranging on a new `urpx:DataSourceReference` class that carries `urpx:fileName`, `urpx:mediaType` (both `xsd:string`), and reuses `schema:url` for the source link.

### Migration
- Existing string-valued `dataSourceReference` statements move to the new object property and structured class.

---

## Version 0.1.1 - January 20, 2026 (Interval Consolidation)

### Changed
- Consolidated interval modeling onto two canonical properties: `urpx:intervalDuration` (`xsd:duration`) and `urpx:intervalType` (`urpx:IntervalTypeValue`).
- Added `urpx:intervalSelection` and `urpx:intervalAlignment` on `MetricSpecification` to model rolling-window and consecutive-period eligibility constraints (for example, a rolling 12-month average).

### Removed
- The `BillingIntervalTypeValue`, `MeasurementIntervalTypeValue`, and `CycleTypeValue` enumerations, and the `cycleDuration`, `cycleType`, `measurementIntervalDuration`, and `measurementIntervalType` properties they supported.

### Migration
- Existing data using the removed interval properties moves to `intervalDuration` / `intervalType`.

---

## Version 0.1.1 - January 19, 2026 (CalculationMethod Verification and ProfileAlternative Rename)

### Changed
- Verified the `CalculationMethod` architecture against complex billing scenarios (multi-cycle billing, demand billing with separate calculation methods, multi-meter aggregation, tiered pricing).
- Renamed `AlternativeDimensionSet` to `ProfileAlternative`, establishing `AlternativeDimensions` (which dimensions are relevant) and `ProfileAlternative` (which value combinations exist) as siblings under `ProfileAlternatives`.

### Migration
- Data using `AlternativeDimensionSet` moves to `ProfileAlternative`.

---

## Version 0.1.1 - January 19, 2026 (Profile Ontology Updates)

### Added
- `numberOfMeters`, `buildingSquareFootage`, and `billedDemand` on `ServicePointProfile`.
- `numberOfOccupants` on `CustomerProfile`.

---

## Version 0.1.1 - January 19, 2026 (Profile Metric Architecture)

### Added
- `profileMetricInput`, a `MetricInputTypeValue` member for profile-based metrics, and `profileMetricProperty` on `MetricInput` to reference profile properties.

### Changed
- Corrected the range of `hasMetricInput` to `urpx:MetricInput`, removing `MeteredMetric` and `ScenarioMetric` from it.
- Renamed `MeteredMetric` to `MetricSpecification`.

### Removed
- `ScenarioMetric` and `hasScenarioMetric`.
- `meter`, `customer`, `account`, `connection`, `each`, and `unit` from `UnitOfMeasureValue`.

---

## Version 0.1.1 - January 15, 2026

### Changed
- Removed a duplicate `hasDimensionValue` definition, and merged two duplicate `referencesMetricInput` definitions into one property with a union domain that also covers `urpx:ServiceTier`.
- Migrated `urpx:billingCycleCode`, `urpx:phaseCodeKind`, and the phase code enumerations from the core ontology to the profile ontology, where they are primarily used.
- Removed the `urpx:CalculationMethod` class (kept the `urpx:calculationMethod` property), removed `urpx:priceDefinition` (kept the `PriceDefinition` class), and removed `urpx:BillingCalculationReference` from the domain of `calculationMethod` (it referenced a non-existent class).
- Updated `urpx:hasPrices` to range on `urpx:Prices` (a container) rather than `urpx:Price` directly.
- Added `urpx:minimumTenure` (`xsd:duration`, ISO 8601) on `RatePlanVersion`, `RatePlanModifierVersion`, `PriorRatePlan`, and `ProgramEnrollment` for contract-duration modeling.

### Added
- `urpx:nonResidentialKind` to `CustomerKindValue`.
- `urpx:religiousInstitution` to `CustomerSubKindValue`, with `skos:broader` to `nonResidentialKind`.
- `urpx:hydroGeneration` and `urpx:nuclearGeneration` to `DERTypeValue`.

---

## Version 0.1.1 - January 4, 2026

### Breaking Changes

#### Charge to Price renaming
- Renamed all "Charge" terminology to "Price" across the ontology: classes (`Charge`→`Price`, `ChargeSet`→`PriceSet`, `ChargeSetAlternatives`→`PriceSetAlternatives`, `ChargeSummary`→`PriceSummary`), properties (`hasCharges`→`hasPrices`, `chargeType`→`priceType`, `chargeCategory`→`priceCategory`, `basedOnCharge`→`basedOnPrice`), and enumerations (`ChargeTypeValue`→`PriceTypeValue`, `ChargeCategoryValue`→`PriceCategoryValue`). "Price" better reflects the semantic meaning of rate plan pricing structures.

### Changed
- Renamed `hasChannel` to `hasMetricInput`, and `MetricSpecification` to `MeteredMetric`; added a new, standalone `ScenarioMetric` class, and widened `hasMetricInput`'s range to include both.
- Renamed `hasPriceInstance` to `hasPrices`; created a `PriceDefinition` class; `Ledger` uses `hasPriceDefinition` in place of `hasPrices`.
- Made `PriceSetAlternative` a subclass of `PriceSet`.
- Widened `hasApplicabilityGroup` to include `Price`, and `hasApplicabilityRule` to include `PriceSet`.
- Consolidated `hasServiceClass` and `applicableToServiceClass`, and widened `hasServiceClass` and `initialEffectiveDate` to include `RatePlanModifier`.
- Widened `currency` to include `RatePlanModifier` and `RatePlanModifierVersion`.
- Implemented `CalculationMethod`, `Ledger`, and `Channel` classes, and a two-tier `Price` architecture separating definitions from instances.

### Removed
- `possibleValues` (deprecated).
- `ServiceAccount` elements (deferred to a later release).
- `MetricInputRuleSet` (replaced by `Channel`).

### Migration
```turtle
# Before
urpx:Charge, urpx:hasCharges, urpx:chargeType
# After
urpx:Price, urpx:hasPrices, urpx:priceType
```

---

## Version 0.1.1 - December 17, 2025

### Changed
- Removed all "Developer Notes:" sections from the ontology files, and removed the unused `urpx:uuid` property.
- Set the metadata author to Klaar De Schepper, Flux Tailor LLC, with a modified date of 2025-12-17 and Apache-2.0 licensing for source code, noting a planned future transition to LF Energy.

### Notes
- This is an initial review version for working-group feedback, not yet production-ready.

---

## Version 0.1.1 - December 3, 2025

### Fixed
- Removed a duplicate `urpx:serviceCharge` definition (it had been defined in both `ChargeCategoryValue` and `ChargeTypeValue`).
- Corrected an `rdfs:domaarin` typo to `rdfs:domain` in the `urpx:chargeCategory` definition.

---

## Version 0.1.1 - December 2, 2025

### Added
- `documentation/pages/urpx-syntax-guidelines.md`, documenting labeling conventions for `rdfs:label`, `skos:prefLabel`, and `skos:definition`.

---

## Version 0.1.1 - November 25, 2025

### Fixed
- Restored 52 class definitions across the organization, charge-classification, and geography ontology files that had been dropped in an earlier commit, reorganizing `urpx-geography.ttl` into proper sections along the way.

---

## Version 0.1.1 - November 23, 2025 (Afternoon)

### Changed
- Recreated `urpx-tutorial.md`, `urpx-examples.md`, `urpx-quality-assurance.md`, `index.md`, and `urpx-api-spec.md` directly from the v0.1.1 ontology, replacing content built against earlier versions.
- Renamed `urpx-cds-integration.md` to `urpx-standards-integration.md`, broadening its scope to a general integration guide covering Green Button and LF Energy CDS patterns.
- Standardized terminology throughout the documentation set: "rate data" / "rate information" / "rate structure" become "rate plan data" / "rate plan information" / "rate plan structure" (except inside illustrative examples).
- Corrected a stale version reference in the data dictionary (v0.0.1 → v0.1.1) and a "production-ready" status claim in the overview to "draft review stage."

---

## Version 0.1.1 - November 23, 2025 (Morning)

### Added
- `urpx-semantic-web-guide.md`, an introduction to semantic web concepts (RDF, OWL, JSON-LD, SHACL, SPARQL) for working-group members new to the field.
- `urpx-standards-mapping.md`, describing the mapping methodology used for OpenADR, IEEE 2030.5, Zigbee, Matter, Thread, CIM, Green Button, and LF Energy integrations.
- `urpx-diagram-index.md`, a catalog of the diagram set with citations.
- Eight FAQ entries in the overview page, covering semantic web basics and the relationship to OpenEI.

### Changed
- Continued the terminology pass ("rate data" → "rate plan data", etc.) across the remaining documentation pages, and removed a reference to the deprecated `hasTemporalDefinition` property from the semantic web guide.

---

## Version 0.1.1 - November 18, 2025 (Diagram Updates)

### Changed
- Updated the core Mermaid diagram set (schema overview, temporal versioning, eligibility and applicability rules, PlanElements) to the current ontology architecture, and added a simplified PlanElements overview diagram.

---

## Version 0.1.1 - November 18, 2025 (Architectural Enhancements)

### Added
- `basedOnCharge` (`Charge` → `Charge`|`ChargeSummary`), enabling cascading calculations such as taxes computed on other charges or summaries.
- `VoltageLevel`, a five-member enumeration (secondary, primary, sub-transmission, transmission, distribution voltage), and the `voltageLevel` property on `ApplicabilityGroup` and `ServicePointProfile`; removed the old string-valued `serviceClass` property from `CustomerProfile` (the `ServiceClass` class for tariff-book rate classification is unaffected).
- `prorationMethod` on `BillingModel` (values: day-based, seasonal, none, custom), for partial-period billing.
- `summaryAmount` on `ChargeSummary`, clarifying that the class is aggregation-only rather than a calculation output, and widened `basedOnCharge`'s range to include `ChargeSummary`.
- `referencesTouPeriod` and `referencesServiceTier`, object references paralleling the existing `touPeriodNumber` / `serviceTierNumber` integer references; a charge uses one pattern or the other, with the integer pattern requiring a `MetricSpecification` for context.
- An IRI-reference pattern for `MetricSpecification`, alongside the existing embedded-blank-node pattern, so a specification can be defined once and referenced by many charges.

---

## Version 0.1.1 - November 16, 2025 (Enumeration Conversions)

### Changed
- Converted ten string-valued properties to object properties ranging on new enumeration classes: `meteringConfiguration`, `loadProfile`, and `premiseType` on `ServicePointProfile`; `specialNeedsStatus` and `taxExemptStatus` on `CustomerProfile`; `connectorType`, `inverterType`, and `panelOrientation` for DER classification; and `serviceRole` on rate plans.

### Added
- `derType` (`DERTypeValue`) for DER classification.
- `meter` to `UnitOfMeasureValue`.

---

## Version 0.1.1 - November 16, 2025 (Profile Class Hierarchy)

### Added
- `urpx:Profile`, an abstract parent class (no properties of its own) for `CustomerProfile` and `ServicePointProfile`.
- `urpx:CustomerProfileSet`, a container for `CustomerProfile` instances with boolean eligibility logic, and `urpx:hasCustomerProfileSet` linking it from `RatePlan`.

### Changed
- `CustomerProfile` and `ServicePointProfile` both become direct subclasses of `Profile`, replacing the earlier `EligibilityProfile` / `ServiceDeliveryProfile` intermediate layer.

---

## Version 0.1.1 - November 16, 2025 (Charge Alternatives Refactor)

### Changed
- Separated charge storage from dimension definition: a `Charges` container holds `hasChargeSet` (the base set) and `hasChargeSetAlternatives` (alternatives), each alternative a `chargeSetAlternative` (a `ChargeSet` subclass) pointing at an `AlternativeDimensionSet` via `forAlternative`.
- Dimension values move to an IRI-referenced pattern: dimension metadata is defined once in `AlternativeDimensionSet` and referenced by IRI rather than embedded as strings, using `forDimension` and `valueIRI` blank-node pairs.

---

## Version 0.1.1 - November 4, 2025

### Added
- `startMonth` / `endMonth` (two-digit ISO 8601 `--MM` format) and `applicableMonths` (a comma-separated list) on `Season`, alongside the existing date-based definition, so a season can be defined by date, month range, or month list.

### Removed
- `hasSeasonalSchedule` and the `SeasonalSchedule` class, superseded by the flat `PlanElements` pattern.

---

## Version 0.1.1 - October 31, 2025

### Changed
- Documented the "rate plan" vs. "rate" terminology distinction across the documentation: "rate plan" is used for the complete set of parameters needed to calculate cost; "rate" alone is treated as ambiguous.
- Rewrote the `urpx-organization.ttl` annotations in direct, W3C-style language, removing development-process notes, refactoring references, and backward-compatibility notes, as a first pass ahead of doing the same across the other ontology files.

---

## Version 0.1.1 - October 24, 2025

### Breaking Changes

#### CIM-aligned validity-interval properties
- Added `startDate`/`startDateTime`/`endDate`/`endDateTime` (the CIM `validityInterval` pattern) and `expectedEndDate`/`expectedEndDateTime`, separating billing-applicability dates ("when charges apply") from publication/regulatory dates ("when a filing becomes valid"), which keep the existing `effectiveDate`/`expirationDate` properties.
- On `Charge`, `ChargeSet`, `TOUPeriod`, `SeasonalSchedule`, and `BillingCycle`, `effectiveDate`/`effectiveDateTime`/`expirationDate`/`expirationDateTime` are renamed to `startDate`/`startDateTime`/`endDate`/`endDateTime`. `RatePlanVersion` and `URPXDocument` keep the effective/expiration names, since they carry publication dates rather than validity intervals.

### Migration
- Existing `Charge`/`ChargeSet`/`TOUPeriod`/`SeasonalSchedule`/`BillingCycle` data renames `effectiveDate(Time)` to `startDate(Time)` and `expirationDate(Time)` to `endDate(Time)`.

---

## Version 0.1.1 - October 23, 2025 (Class Restoration)

### Fixed
- Restored 83 class definitions in `urpx-core-ontology.ttl` (including `RatePlan`, `RatePlanVersion`, `Charge`, and `ChargeSet`) that had been dropped during an enum reorganization pass, and removed the legacy time-unit enumeration members (`second` through `year`) from `UnitOfMeasureValue` in favor of the duration-based interval properties on `MetricSpecification`.

---

## Version 0.1.1 - October 23, 2025 (PlanElements Extended to Modifiers)

### Changed
- Renamed `RatePlanElements` to `PlanElements` and `RatePlanElementSet` to `PlanElementSet`, and widened `hasPlanElements` to also apply to `RatePlanModifierVersion` (previously `RatePlanVersion` only), so rate plan modifiers can carry the same seasons, TOU schedules, and service tiers as rate plans.
- Documented a hybrid modifier-linking pattern: `applicableToRatePlan` for simple modifier-to-plan association, `hasEligibilityRule` for conditional or enrollment-based application.

---

## Version 0.1.1 - October 22, 2025 (PlanElements Core)

### Changed
- Renamed `PricingModel` to `RatePlanElements` (later `PlanElements`), merging the separate `TemporalDefinition` container into it so seasons, holidays, and pricing rules share one container.
- Added `RatePlanElementSet` (later `PlanElementSet`), grouping TOU schedules, service tiers, and dynamic pricing rules by metric (so energy rules stay separate from demand rules), linked from the parent container via `hasRatePlanElementSet`.

### Removed
- `PricingModel`, `TemporalDefinition`, `hasPricingModel`, `hasTemporalDefinition`, and the singular `hasSeason` (replaced by plural `hasSeasons`).

---

## Version 0.1.1 - October 21, 2025 (Flat RatePlanVersion Architecture)

### Added
- `TemporalDefinition` (seasons and holiday calendars), `PricingModel` (metric specifications, TOU schedules, service tiers, dynamic pricing rules), and `BillingModel`, each linked directly from `RatePlanVersion` via `hasTemporalDefinition`, `hasPricingModel`, and `hasBillingModel`.
- `Season` as a standalone class (previously nested in TOU schedules), referenced from a time bracket via `appliesInSeason`, so a season is defined once and referenced by many brackets.
- `ServiceTier`, with `lowerBound`/`upperBound` and operator-based (`lowerBoundOperator`/`upperBoundOperator`, ranging on `OperatorValue`) boundary comparison rather than boolean inclusivity flags, replacing the earlier `demandThreshold`/`usageThreshold` pattern.

### Changed
- Widened `billPortion`'s domain to include `MetricSpecification` (in addition to `Charge`), so bill-portion can be stated at the metric level.
- Reorganized the enumeration instances in all four ontology files to group by enumeration class rather than by property, eliminating duplicate instance definitions.
- Replaced the boolean `lowerBoundInclusive`/`upperBoundInclusive` flags on `ServiceTier` with `lowerBoundOperator`/`upperBoundOperator`.

---

## Version 0.1.1 - October 20, 2025 (Evening)

### Changed
- Consolidated three measurement properties onto canonical forms: `commodity` (replacing `metricCommodity`), `unitOfMeasure` (replacing `metricUnitOfMeasure` and `unit`), and `measurementKind` (replacing `measurementType`, aligned with Green Button naming).
- Renamed `phaseConfiguration` to `phaseCodeKind` and `PhaseConfigurationValue` to `PhaseCodeKindValue`; replaced eight non-standard codes with the 26-code CIM IEC 61968 `PhaseCodeKind` set, organized into four category concepts (three-phase, single-phase, split-phase, measurement).

### Removed
- `StatementCharge` and `StatementDocument` (use `Charge` and `ChargeSet` within `TariffStatementDocument` instead), and the properties that supported them (`hasStatementCharge`, `hasStatementDocument`, `chargeDescription`, `referencesPublication`, `statementPeriod`, `statementType`).

---

## Version 0.1.1 - October 16-20, 2025 (Measurement Framework)

### Added
- `MetricSpecification`, a simplified measurement specification (`metricCommodity`, `measurementKind`, `metricUnitOfMeasure`, `flowDirection`, `accumulationMethod`) covering the common billing cases without the full complexity of a Green Button `ReadingType`.
- Four enumeration classes: `FlowDirectionValue` (forward, reverse, net, bidirectional), `AccumulationValue` (delta, bulk, instantaneous, summation), `AggregationMethodValue` (sum, average, maximum, minimum, median), and `MeasurementIntervalTypeValue` (real-time through monthly).
- On `Charge`: `hasMetricSpecification`, `measurementIntervalDuration` (`xsd:duration`), `measurementIntervalType`, and `aggregationMethod`, supporting interval-based charges such as a 15-minute demand charge.
- Widened `currency`'s domain to `RatePlan`, `RatePlanVersion`, and `URPXDocument`, so currency can be set once at the document level or overridden per charge for cross-currency comparison.

### Changed
- Renamed `UsagePointProfile` to `ServicePointProfile` (aligning with CIM "service delivery point" terminology, IEC 61968-9), renaming its eleven properties accordingly (`billingCycleCode`, `connectionKind`, `endUseCategory`, `hasDistributedEnergyResource`, `loadProfile`, `meteringConfiguration`, `nominalVoltage`, `phaseConfiguration`, `premiseType`, `ratedPowerCapacity`, `hasServicePointProfile`), distinguishing it from the anonymous statistical `UsageProfile`.
- Expanded `MeasurementTypeValue` from 5 to 11 members, dropping the "Measurement" suffix for Green Button alignment (`energyMeasurement`→`energy`, etc.) and adding `frequency`, `power`, `pressure`, `temperature`, `volume`, and `volumetricFlow`.

### Migration
- `UsagePointProfile` → `ServicePointProfile`; `hasUsagePointProfile` → `hasServicePointProfile`.
- `MeasurementTypeValue` members drop the "Measurement" suffix (for example, `energyMeasurement` → `energy`).

---

## Version 0.1.1 - October 14, 2025 (Evening)

### Added
- `CustomerKindValue` (residential, commercial, industrial, enterprise, service-provider, and internal-use kinds) and `CustomerSubKindValue` (13 members organized under those parent kinds via `skos:broader`), aligned with the Green Button V4 `CustomerKind` enumeration.
- `appliesForCustomerKind` and `appliesForCustomerSubKind` on `ApplicabilityGroup`, for charge filtering by customer classification.

### Removed
- The earlier `CustomerKind`/`CustomerSubKind` classes, the deprecated `customerKindCode`/`customerKindName`/`customerSubKindCode`/`customerSubKindName` datatype properties, and `parentKind` (replaced by `skos:broader` on the enumeration instances).

### Migration
- Existing customer classification data moves to the new enumeration instances; parent/child relationships move from `parentKind` to `skos:broader`.

---

## Version 0.1.1 - October 14, 2025 (Morning)

### Fixed
- Added `rdfs:range rdf:List` to `hasPossibleValues`, which had been missing an explicit range for its list structure.

---

## Version 0.1.1 - October 13, 2025 (Late Evening)

### Changed
- Removed 15 duplicate `ChargeTypeValue` instances (and the duplicate class definition) from the core ontology; `ChargeTypeValue` now lives only in the charge-classification ontology.
- Added `@en` language tags to all labels across the four ontology files (970 labels total), and added labels to 303 entities that previously had none.

---

## Version 0.1.1 - October 13, 2025 (Evening)

### Changed
- Split the SHACL shapes into a core foundation (`urpx-core-shacl.ttl`, renamed from `urpx-shacl.ttl`, holding all enumeration validations and foundation shapes) plus six document-type-specific modules: tariff book, statement, supplement/addendum, supply charges, DER exports, and real-time prices. Each document-type module imports only the core file, so jurisdiction-specific overlays (for example, a New York PSC statement module) can be layered on without cascading imports.

---

## Version 0.1.1 - October 13, 2025 (Final Update)

### Changed
- Gave all 59 enumeration classes formal `owl:oneOf` declarations (W3C OWL 2 Primer style), and converted the 500+ enumeration instance names from snake_case to camelCase, with an explicit exception preserving SI/IEC unit symbols (`W`, `MW`, `kWh`, `MVA`, and so on) so that, for example, `MW` (megawatt) is not lowercased to `mw` (which would read as milliwatt).

### Migration
```turtle
# Before (snake_case)
urpx:chargeType urpx:energy_charge ;
# After (camelCase)
urpx:chargeType urpx:energyCharge ;
# Exception: SI units are unchanged
urpx:unitOfMeasure urpx:kWh ;
urpx:unitOfMeasure urpx:MW ;
```

---

## Version 0.1.2 - October 13, 2025 (Alternative Dimension Labels)

### Added
- `urpx:hasPossibleValues`, a structured object-property replacement for the string-array `urpx:possibleValues`, giving each possible value a human-readable `rdfs:label` (for GUI button generation) alongside its `skos:notation` code.
- `urpx:endUse` (`EndUseValue`: heating/non-heating) and `urpx:appliesInZone`, for geographic-zone-based charge alternatives.

### Changed
- Renamed `ontology/urpx-ontology.ttl` to `ontology/urpx-core-ontology.ttl`.

### Test Data
- Updated the synthetic test dataset to the `hasCustomerKind` property name and the new `hasPossibleValues` pattern for its dimension values.

---

## Version 0.1.1 - October 10, 2025 (Evening)

### Changed
- Added SHACL validation shapes for all 54 object-property enumerations (up from 3), each with type, cardinality, and business-rule constraints, closing a gap where enumeration properties had been validated as plain string datatypes.

---

## Version 0.1.1 - October 10, 2025 (Morning)

### Changed
- Made `hasCustomerProfile` and the renamed `hasUsagePointProfile` (from `hasUsageProfile`) parallel properties on `EligibilityRule`, rather than nesting one inside the other, aligning with CIM/Green Button standards.
- Renamed `UsageProfile` to `UsagePointProfile` (aligned with CIM `UsagePoint`, IEC 61968-9).
- Added `LocationDataSet` (versioned holiday, timezone, and daylight-saving data), linked from `Organization` via `hasLocationDataSet`, with `timezoneIdentifier` and `daylightSavingRules`; added `observesHoliday` on `HolidayCalendar` for direct holiday selection.
- Added `officialName` (full legal name) and `displayName` (short GUI-friendly name) on organizations, and `publishedBy` (`RatePlanVersion` → `Organization`).
- Created seven `URPXDocument` subtype classes (`TariffBookDocument`, `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`, `SupplyChargesDocument`, `DERExportsDocument`, and `RealTimePricesDocument`), each with a defined capability matrix for which content it may carry.
- Renamed `RatePlanModifierDefinition` to `RatePlanModifier` throughout.

### Removed
- The unused CDS integration classes `TemporalAlignment`, `SeasonalPattern`, and `HolidayAlignment` (and their properties and enumerations), keeping `SeasonalPatternValue` and `cdsHolidayReference`, which remain in use.

### Migration
- `hasCustomerProfile` moves from `RatePlanVersion` to `EligibilityRule`; `UsageProfile` references move to `UsagePointProfile`; `RatePlanModifierDefinition` references move to `RatePlanModifier`.

---

## Version 0.1.2 - September 26, 2025

### Changed
- Completed the string-to-enumeration conversion project: all 54 enumeration properties are now object properties ranging on enumeration classes, with `annualIncomeRange`, `interconnectionStatus`, `assistanceEligibilityLevel`, and `connectionKind` as the final four.

---

## Version 0.1.1 - September 26, 2025

### Fixed
- Moved `hasCustomerProfileSet`'s domain from `RatePlan` to `RatePlanVersion`, since eligibility criteria are version-specific rather than plan-specific.
- Added SHACL shapes validating `chargeType`, `commodity`, and `unitOfMeasure` as object properties (they had been validated as plain strings despite the ontology already treating them as enumerations).

---

## Version 0.1.0 - September 26, 2025

### Breaking Changes

#### CustomerProfileSet architecture
- Added `CustomerProfileSet`, a container for related customer profiles sharing eligibility logic, with `customerProfileRuleExpression` for boolean (AND/OR/NOT) combination logic, moving `hasCustomerProfile` from `URPXDocument` onto `RatePlan` via this container. Added `profileId` for unique identification of a profile within a rate plan's scope, and `applicableToCustomerProfile` linking `ChargeSetAlternatives` to a profile.

#### Property rename
- Renamed `tierNumber` to `serviceTierNumber`.

### Changed
- Restricted `serviceRole` to the `RatePlan`/`RatePlanVersion` level with "retail"/"bundled" values, and confirmed `billPortion` at the `Charge`/`ChargeSet` level (delivery/supply/bundled); both are now prohibited in eligibility conditions.
- Added `DataSourceTypeValue` (CSV, JSON, PDF, XML, API, manual, database, spreadsheet) for structured data-source typing.

### Migration
```turtle
# Before
urpx:document urpx:hasCustomerProfile urpx:profile1 .
# After
urpx:ratePlan urpx:hasCustomerProfileSet urpx:profileSet1 .
urpx:profileSet1 a urpx:CustomerProfileSet ;
    urpx:customerProfileRuleExpression "profile1 AND NOT profile2" ;
    urpx:hasCustomerProfile urpx:profile1 .
urpx:profile1 a urpx:CustomerProfile ;
    urpx:profileId "residential-urban-high" .
```
- `tierNumber` becomes `serviceTierNumber`.

---

## Version 0.0.7 - September 25, 2025

### Changed
- Renamed `urpx-geo:serviceType` to `urpx-geo:utilityServiceKind` (CIM `ServiceKind` alignment), ranging on a new `UtilityServiceKindValue` (electric, gas, multi, water service).
- Began converting enumeration properties from string-valued datatype properties to object properties ranging on enumeration classes: `commodity`, `unitOfMeasure`, `measurementType`, `accountServiceType`, `cycleType`, `calculationMethod`, `touTierStandardName` (renamed from `tierStandardName`), `dayType`, `observanceRule`, `changeReason`, `territoryType`, `dynamicPricingType`, `updateFrequency`, and `priceSource`.

### Removed
- `customerCategory` (redundant with the existing `CustomerKind` structure).

---

## Version 0.0.6 - September 23, 2025

### Changed
- Moved the test datasets and validation/generation tooling out of this repository into dedicated repositories, so this repository holds only the ontology, SHACL constraints, and core documentation.

---

## Version 0.0.5 - September 18, 2025

### Changed
- Widened `hasEligibilityRule`'s domain to include `CustomerProfile`, so a customer profile can carry its own embedded eligibility rules directly, removing the earlier duplication between `appliesTo` and `hasEligibilityRule`.

### Fixed
- Converted several test-data timestamps from timezone-offset format to UTC (`Z`), and fixed a JSON syntax error (missing closing brackets) in a test dataset.

---

## Version 0.0.4 - September 15, 2025

### Added
- Complete Time-of-Use schedules (peak/off-peak periods with holiday handling) to test cases 0003 through 0007.
- `urpx:tariffBookReference`, a structured reference carrying leaf and page numbers, a media type, and a range reference, replacing unstructured citation text.
- A new test case (0007), modeling demand-based commercial standby service with contract demand, facility, and energy charges.

---

## Version 0.0.3 - September 12, 2025

### Added
- `ChargeSetAlternatives` and `AlternativeDimension`, for representing mutually exclusive charge variations along dimensions such as service territory, voltage level, or billing cycle, with `hasChargeSetAlternatives`, `hasAlternative`, and `hasAlternativeDimension` linking them together. SHACL requires at least two alternatives per container and consistent dimension keys across them.

### Changed
- Converted the charge-classification enumeration values from PascalCase to camelCase (84 values across charge categories, charge types, and bill portions).

### Migration
- PascalCase charge-classification values (for example, `ServiceCharge`) become camelCase (`serviceCharge`).

---

## Version 0.0.2 - September 2025

### Changed
- Widened `urpx:billingCycleCode`'s domain to include `Charge` and `ChargeSet`, allowing it to be stated once at the `ChargeSet` level and inherited by its charges.
- Replaced `CustomerCharge` terminology with the canonical `MinimumCharge` throughout the ontology, and removed `skos:altLabel` synonym references; SHACL now rejects `CustomerCharge` with an explicit error pointing to `MinimumCharge`.
- Reorganized specification documents under `documentation/specifications/`, and added `README.md`, `urpx-tutorial.md`, and `urpx-quality-assurance.md`.

---

## Version 0.0.1 - September 2025

### Breaking Changes

#### ISO 8601 datetime compliance
- All `xsd:dateTime` values now require timezone information.

#### Charge classification
- Replaced string-valued charge classification (`"service"`, `"energy"`) with semantic object properties and classes: charge types (`ServiceCharge`, `EnergyCharge`, `DemandCharge`, `CapacityCharge`, `CreditCharge`, `AdjustmentCharge`, `FeeCharge`, `TaxCharge`, `MinimumCharge`), charge categories (`FixedCharge`, `UsageCharge`, `TieredCharge`, `TimeBasedCharge`, `DemandCharge`, `EventBasedCharge`), and bill portions (`DeliveryCharge`, `SupplyCharge`, `BundledCharge`).

### Added
- `urpx:RateGroup`, for hierarchical sub-classification within a `ServiceClass`, linked via `urpx:hasRateGroup`.

### Migration
```turtle
# Before
urpx:effectiveDate "2025-01-01T00:00:00"^^xsd:dateTime ;
urpx:chargeType "service" ;
# After
urpx:effectiveDate "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
urpx:chargeType urpx:serviceCharge ;
```

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 0.0.7 | 2025-09-23 | Enumeration conversion project began: string-valued properties converted to object properties ranging on enumeration classes, aligned with CIM, CDS, Green Button, and ISO. |
| 0.0.6 | 2025-09-23 | Repository structure reorganization - test data migration to dedicated repositories. |
| 0.0.5 | 2025-09-18 | Unified Eligibility Model implementation and test data validation enhancements. |
| 0.0.4 | 2025-09-15 | Time-of-Use schedule enhancement and structured tariff book references. |
| 0.0.3 | 2025-09-12 | Enum naming convention standardization - PascalCase to camelCase migration. |
| 0.0.2 | 2025-09-09 | CustomerCharge→MinimumCharge consistency fix and repository cleanup. |
| 0.0.1 | 2025-09-09 | Initial release with ISO 8601 compliance and semantic charge classification. |

---

*For technical support or questions about these changes, please refer to the [Tutorial](documentation/pages/urpx-tutorial.md) or [FAQ](documentation/pages/urpx-faq.md).*

[← Back to Index](documentation/index.md) | [Overview](documentation/pages/urpx-overview.md) | [Data Dictionary](documentation/pages/urpx-data-dictionary.md)
