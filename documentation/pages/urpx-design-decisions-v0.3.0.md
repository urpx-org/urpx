<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

---
site_category: advanced-topics
site_id: design-decisions-v0.3.0
site_title: "Design Decisions v0.3.0"
site_label: "Decisions v0.3.0"
site_position: 6
---

# URPX (Utility Rate Plan Exchange) Design Decisions Log — v0.3.0

**Version:** 0.3.0 (pre-Draft)

This page records design decisions for v0.3.0. Starting with v0.3.0, each major and minor version has its own design-decision log page.

The prior, dated record (decisions #001 through #111) remains in [`urpx-design-decisions-001-040.md`](urpx-design-decisions-001-040.md), [`urpx-design-decisions-041-080.md`](urpx-design-decisions-041-080.md), and [`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md), which are organized in blocks of forty.

Decision numbering continues across pages; this page begins at Decision #121, at the start of the next block after the 081–120 range.

---

## Decision Index

- Decision #121: Pricing Model Architecture — PricingModel, TariffFiling, and SourcePublication
- Decision #122: Filing-Owned Lifecycle and Shared Validity Dates
- Decision #123: Required CoverageClaim on Version Snapshots
- Decision #124: Charge/Measurement Split for Power Factor
- Decision #125: Version-to-Plan Link Inversion
- Decision #126: Correction and Withdrawal Parity for Standalone Pricing Models
- Decision #127: Identity, Timezone, and Location Metadata on Resolved Version Snapshots
- Decision #128: Collapse Nested Tariff Reference Classes into DataSourceReference
- Decision #129: Element-Level Consolidation Lineage and Temporal Completeness
- Decision #130: Publication Type Enumeration Consolidation
- Decision #131: Offering and Publication Separated on the Plan-to-Organization Link

---

## Decisions Registry

<a id="decision-121"></a>
### Decision #121: Pricing Model Architecture — PricingModel, TariffFiling, and SourcePublication

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-07
- **Issue:** Authored pricing content, the regulatory publication that carries it, and the external document it was published in were not distinguished, so `RatePlan` and its modifiers carried pricing content directly and the tariff document class family (`TariffPublication` and its subclasses) conflated document typing with the content it held.
- **Category:** Architecture

**Context:**
Prior to v0.3.0, rate plans and modifiers carried pricing content directly, and `TariffPublication`, `TariffBookDocument`, `TariffStatementDocument`, `TariffSupplementDocument`, `TariffAddendumDocument`, `SupplyChargesDocument`, `DERExportsDocument`, and `HighlyDynamicPricesDocument` formed a class-per-document-kind family for representing tariff documents.

**Decision:**
Separate three concerns into three classes: `PricingModel` (the authored, citable, possibly-partial statement of pricing for a rate plan — "the unit a publication actually carries"), `TariffFiling` (an excerpt of a `SourcePublication` that contains one or more `PricingModel`s — the regulatory publication unit, optional for filing-less content), and `SourcePublication` (the external, third-party published artifact, typed by a `publicationType` enumeration rather than a class hierarchy). `RatePlan` and `RatePlanModifier` become pure identity records with no pricing content of their own.

**Options Considered:**

1. **Three-way split: PricingModel / TariffFiling / SourcePublication (Selected)**
   - Pro: Keeps the authored pricing content, the regulatory publication that carries it, and the external source document as three distinct, independently referenceable concerns.
   - Pro: Lets filing-less pricing content (competitive supply, contract, market-indexed, scenario, partial ingest) stand on its own with its own validity dates, without forcing a `TariffFiling` wrapper where none exists.
   - Pro: Replaces a class-per-document-kind hierarchy with one `SourcePublication` class and a `publicationType` enumeration, which is easier to extend than adding a new document subclass per kind.
   - Con: Breaking — the retired tariff document classes and the direct plan/modifier pricing content must be migrated.

2. **Retain document-class-per-kind and plan-carried pricing content**
   - Pro: No migration required.
   - Con: Cannot express a publication kind that doesn't already have a dedicated class.
   - Con: Rate plans and modifiers cannot be read as stable identities independent of their pricing content.

**Rationale:**
- `PricingModel` is "the authored published unit," distinct from `TariffFiling` ("the URPX content unit within" a `SourcePublication`) and from `SourcePublication` itself ("the external document"); the ontology's own annotations state that `TariffFiling` and `SourcePublication` are siblings, not sub/superclasses.
- A rate plan or modifier's stable identity should not depend on which pricing content currently applies to it.

**Consequences / Impact:**
- **Positive:** Pricing content, publication units, and external source documents can each evolve and be cited independently.
- **Breaking Change:** Yes — `TariffPublication` and its subclasses are removed; pricing content must move into `PricingModel` nodes carried by a `TariffFiling` or standing alone as filing-less content.
- **Requirements:** Producers must classify existing tariff documents with `SourcePublication` + `publicationType` and move pricing content into `PricingModel`.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-07 entry ("Retired: tariff document class family in favor of `publicationType`"; "Added: pricing model and publication classes").
- Release notes: `documentation/pages/urpx-release-notes-v0.3.0.md`, Overview and Highlights.
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:PricingModel`, `urpx:TariffFiling`, `urpx:SourcePublication` class annotations.

---

<a id="decision-122"></a>
### Decision #122: Filing-Owned Lifecycle and Shared Validity Dates

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-07
- **Issue:** With pricing content and its publication now separated (Decision #121), the model needed a clear answer for where lifecycle facts — supersession, in-place correction, cancellation, and validity windows — are asserted, and whether a resolved version snapshot carries any lifecycle of its own.
- **Category:** Architecture, Validation

**Context:**
`TariffFiling` carries a filing-lifecycle vocabulary: `supersedes` (forward-in-time change of effective period), `replaces` / `replacedBy` (in-place correction of the same effective period), `cancelledBy` / `cancelledOn` (voiding a filing, whether by a successor or by withdrawal), and `cancelsPriceDefinition`. `supersedes` is deliberately dual-domain — it also threads authored `PricingModel`s within a `ModelCollection` for filing-less content. Validity dates (`effectiveDate`, `effectiveDateTime`, `expirationDate`, `expirationDateTime`) were extended to `TariffFiling`, `PriceDefinition`, and the plan-component classes `TOUSchedule`, `Season`, `HolidayCalendar`, and `ServiceTiers`.

**Decision:**
Lifecycle properties (`supersedes`, `replaces`/`replacedBy`, `cancelledBy`, `cancelledOn`, `cancelsPriceDefinition`) live on `TariffFiling` (and, for `supersedes`, also on `PricingModel` for filing-less content); `RatePlanVersion` and `RatePlanModifierVersion` carry no lifecycle properties of their own — a version's position in the timeline derives from the filing chain, not from a direct link on the version. Validity dates are shared across the publication units and the plan components they qualify, rather than confined to one class.

**Options Considered:**

1. **Lifecycle on the filing chain; versions carry no lifecycle (Selected)**
   - Pro: A version is a derived, materialized snapshot; deriving its timeline position from the filing chain keeps it a pure read artifact rather than a second place where lifecycle facts could drift out of sync with the filing.
   - Pro: `supersedes` on both `TariffFiling` and `PricingModel` covers both the regulated-filing case and the filing-less case with the same property.
   - Con: Consumers must walk the filing chain (or model-collection thread) to answer "what did this supersede," rather than reading it off the version directly.

2. **Allow `supersedes` directly on version shapes**
   - Pro: Simpler single-hop lookup from a version.
   - Con: Duplicates lifecycle state on both the filing and the version, risking disagreement between the two.

**Rationale:**
- `urpx:supersedes` is documented as "a forward-in-time change of effective period... NOT a same-period correction (`urpx:replaces`) nor a cancellation/withdrawal (`urpx:cancelledBy`)"; keeping the three lifecycle concepts on the filing keeps them mutually exclusive and unambiguous.
- `urpx:cancelledBy` is documented as the void marker distinguishing a voided filing (excluded from active reads but retained for audit) from a superseded filing (which "stays valid history").
- The `RatePlanVersionShape` and `RatePlanModifierVersionShape` SHACL shapes no longer allow `supersedes` on the version.

**Consequences / Impact:**
- **Positive:** One place (the filing chain) to resolve supersession, correction, and cancellation, instead of two.
- **Breaking Change:** Yes — data asserting `supersedes` directly on a version must move that assertion to the corresponding filing (or, for filing-less content, to the `PricingModel`).
- **Requirements:** Producers must model lifecycle transitions on `TariffFiling` (or `PricingModel` for filing-less content), and may attach validity dates directly to `PriceDefinition` and the plan-component classes where a component's own window differs from its filing's.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-07 entry ("Added: properties — Filing lifecycle," "Validity-date domains").
- Release notes: `documentation/pages/urpx-release-notes-v0.3.0.md`, Highlights and Breaking Changes item 7.
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:supersedes`, `urpx:replaces`, `urpx:replacedBy`, `urpx:cancelledBy`, `urpx:cancelledOn` annotations; `urpx:effectiveDate` domain.
- SHACL: `shacl/urpx-shacl.ttl` — `TariffFilingShape` and `PricingModelShape` carry `supersedes`; `RatePlanVersionShape` / `RatePlanModifierVersionShape` do not.

---

<a id="decision-123"></a>
### Decision #123: Required CoverageClaim on Version Snapshots

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-07
- **Issue:** A resolved `RatePlanVersion` or `RatePlanModifierVersion` snapshot had no stated way to declare whether it was complete or self-contained, so a consumer could not distinguish a fully consolidated snapshot from a partial one without out-of-band knowledge.
- **Category:** Architecture, Validation

> **Revision (2026-07-20):** the required node is the `CoverageClaim` itself; within it, only `completenessResult` is required. Self-containment (`selfContained`) and the explaining `Evaluation` (linked via `explainedBy`) are optional — this matters for partial-coverage rate plans (for example Community Choice Aggregation and Direct Access, where completeness is partial and self-containment may be absent). Separately, freshness (`stale`) and resolution provenance (`fallbackSourced`) were split out of the completeness enum into independent boolean properties on the claim, so `CompletenessResultValue` is now the six coverage verdicts below. The title dropped "and Evaluation" to match. Authority: `CoverageClaimShape`, and the `urpx-changelog.md` 2026-07-19 entry.

**Context:**
`RatePlanVersion` and `RatePlanModifierVersion` are derived, materialized snapshots consolidated from applicable `PricingModel`s for a temporal window. v0.3.0 requires each snapshot to carry exactly one `CoverageClaim` (via `hasCoverageClaim`), stating a `completenessResult` (`complete`, `partial`, `pending`, `unsupported`, `unknown`, or `noCoverage`). A derived `selfContained` boolean (false if any `PriceDefinitionReference` is `retrievedElsewhere`) and an explaining `Evaluation` (linked via `explainedBy`) are optional additions; freshness (`stale`) and resolution provenance (`fallbackSourced`) are separate optional booleans on the claim (see the Revision above).

**Decision:**
Make `hasCoverageClaim` required (exactly one) on both version shapes, so completeness is honest-by-construction rather than asserted separately from the snapshot's actual contents.

**Options Considered:**

1. **Required CoverageClaim with an explaining Evaluation (Selected)**
   - Pro: The ontology's own annotation states completeness is "honest-by-construction: every snapshot has a required `CoverageClaim`, and self-containment is derived from whether any component is `retrievedElsewhere`."
   - Pro: `Evaluation` separates the verdict (`CoverageClaim`) from its rationale, so the "why" behind a completeness verdict is a durable, portable artifact rather than only implicit in the producing process.
   - Pro: A snapshot is immutable — `hasCoverageClaim` is exactly one on both version shapes, so a re-evaluation mints a new snapshot rather than appending a second claim to the same one.
   - Con: Producers must generate a `CoverageClaim` and `Evaluation` for every snapshot, even a trivially complete one.

2. **Leave completeness undeclared or optional**
   - Pro: Fewer required nodes per snapshot.
   - Con: A consumer cannot tell a fully consolidated snapshot from a partial one without external knowledge.

**Rationale:**
- `CoverageClaim` is documented as "a scoped, computed verdict on what can be answered from a snapshot or cost model under stated conditions... a verdict only; the rationale lives on a linked `Evaluation`."
- `confidence` on a `CoverageClaim` is derived as the minimum of the contributing models' confidence values, so the claim also carries an epistemic signal, not only a structural one.

**Consequences / Impact:**
- **Positive:** Every resolved snapshot states its own completeness and self-containment, checkable by a validator rather than assumed by a consumer.
- **Breaking Change:** Yes — a `RatePlanVersion` or `RatePlanModifierVersion` without a `CoverageClaim` fails SHACL validation.
- **Requirements:** Producers must generate a `CoverageClaim` and `Evaluation` for every version and modifier-version snapshot.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-07 entry ("Modified: identity and version semantics"; "Added: identity, coverage, and evaluation classes").
- Release notes: `documentation/pages/urpx-release-notes-v0.3.0.md`, Highlights and Breaking Changes item 4.
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:CoverageClaim`, `urpx:Evaluation`, `urpx:completenessResult`, `urpx:selfContained`, `urpx:explainedBy`, `urpx:RatePlanVersion` / `urpx:RatePlanModifierVersion` annotations.

---

<a id="decision-124"></a>
### Decision #124: Charge/Measurement Split for Power Factor

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-14
- **Issue:** `powerFactor` was dual-typed, standing in for both a measurement (the power-factor ratio itself) and a charge (a power-factor correction penalty on a bill), which conflated a measured quantity with a billed charge.
- **Category:** Naming Convention, Validation

**Context:**
The charge-type classification work reviewed `powerFactor`'s dual role. As a `MeasurementTypeValue`, it names the power-factor ratio/percentage being measured; utilities also assess a distinct power-factor correction charge or penalty on a bill, which needs its own `ChargeTypeValue` member.

**Decision:**
Mint `urpx:powerFactorCharge` as a new `ChargeTypeValue` member (the power-factor penalty charge, categorized under `chargeCategory` `auxiliaryCharge` and `billPortion` `deliveryPortion`), and keep `urpx:powerFactor` as a `MeasurementTypeValue` only.

**Options Considered:**

1. **Split into a charge concept and a measurement concept (Selected)**
   - Pro: A measured power-factor ratio and a billed power-factor charge are different kinds of fact; keeping one term dual-typed made it ambiguous which sense a given triple intended.
   - Pro: `powerFactorCharge` fits the existing `ChargeTypeValue` classification (with `chargeCategory` and `billPortion`), alongside the related `reactiveDemand` charge, which its annotation explicitly distinguishes from `powerFactorCharge`.
   - Con: Existing data using `powerFactor` in the charge sense must move to `powerFactorCharge`.

2. **Keep `powerFactor` dual-typed**
   - Pro: No migration required.
   - Con: A consumer cannot tell from the type alone whether a `powerFactor` triple is a measurement or a billed charge.

**Rationale:**
- `urpx:powerFactorCharge` is defined as `rdf:type urpx:ChargeTypeValue` with definition "Power factor correction charge or penalty."
- `urpx:powerFactor` remains defined as `rdf:type urpx:MeasurementTypeValue` with definition "Power factor measurement (ratio, percentage)."
- The `reactiveDemand` charge's own note cross-references and distinguishes itself from `powerFactorCharge`, confirming the charge-side concept is now a distinct, named member of `ChargeTypeValue`.

**Consequences / Impact:**
- **Positive:** A power-factor measurement and a power-factor charge are now separately typed and cannot be confused.
- **Breaking Change:** Existing data using `powerFactor` to mean a billed charge must migrate to `powerFactorCharge`.
- **Requirements:** Producers should use `powerFactorCharge` for the billed penalty and `powerFactor` only for the measured ratio.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-14 entry ("Split the dual-typed `powerFactor`: minted `powerFactorCharge`... and kept `powerFactor` as a `MeasurementTypeValue` only").
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:powerFactorCharge` (`ChargeTypeValue`), `urpx:powerFactor` (`MeasurementTypeValue`), `urpx:reactiveDemand` annotations.

---

<a id="decision-125"></a>
### Decision #125: Plan and Version Link in Both Directions

- **Status:** Accepted (pre-Draft). **Revised 2026-07-29**, reversing the original 2026-07-07 ruling recorded below.
- **Date:** 2026-07-07; revised 2026-07-29
- **Issue:** Whether a `RatePlan` or `RatePlanModifier` may link directly to the resolved version snapshots built for it, or whether the link exists only on the version side.
- **Category:** Architecture

**Context:**
`RatePlan` and `RatePlanModifier` are pure identity records (Decision #121). The versions built from them are derived consolidation artifacts. The question is which end of that relationship carries the link.

**Decision (as revised 2026-07-29):**
Both directions are available and either may be asserted. `hasRatePlanVersion` links a `RatePlan` to each `RatePlanVersion` built for it, and `hasRatePlanModifierVersion` does the same for modifiers. `forRatePlan` and `forRatePlanModifier` carry the version-to-plan direction. Each pair is declared `owl:inverseOf`, so where a data set asserts only one direction the other is entailed. `RatePlanShape` and `RatePlanModifierShape` admit the plan-side property, so an asserted plan-to-version link validates.

**Rationale for the revision:**
- Once the links exist in a data set they should be preserved and directly traversable. A consumer holding a rate plan should not have to scan every `RatePlanVersion` in the graph to discover which ones belong to it.
- The identity/derived-artifact boundary that motivated the original ruling is about *what content a plan carries*, not about whether the plan can reference its own derived artifacts. A reference is not derived content.
- Declaring the inverse makes the relationship explicit in the vocabulary rather than leaving plan-to-version navigation as an undocumented query convention.

**Original ruling (2026-07-07, now reversed):**
Remove `hasRatePlanVersion` and `hasRatePlanModifierVersion`; a version points at its plan via `forRatePlan` / `forRatePlanModifier` only, with no inverse on the plan side. Its stated grounds were that a stable identity should not carry a growing list of derived snapshots, and that a two-way link duplicates one relationship in both directions.

Disposition of that ruling's elements: the identity/derived-content boundary is **carried** (a plan still carries no pricing content of its own, and versions remain the derived artifacts); the single-direction restriction is **dropped**; the duplication concern is **transformed** into an `owl:inverseOf` declaration, so the two directions are one relationship in the vocabulary rather than two independent facts, and a consumer may rely on entailment instead of storing both.

**Consequences / Impact:**
- **Positive:** Plan-to-version navigation is direct and vocabulary-documented; a delivered data set keeps its links rather than requiring a graph-wide scan to rebuild them.
- **Breaking Change:** None relative to v0.2.x. Both properties existed there and remain available, so the earlier removal never reaches a released version.
- **Requirements:** Producers may assert either direction or both. Where both are asserted they must agree; a consumer may treat one direction as authoritative and derive the other.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-07 entry (removal) and 2026-07-29 entry (restoration with the inverse declared).
- Ontology: `ontology/urpx-ontology.ttl`: `urpx:hasRatePlanVersion`, `urpx:hasRatePlanModifierVersion`, `urpx:forRatePlan`, `urpx:forRatePlanModifier`.
- SHACL: `shacl/urpx-shacl.ttl`: `RatePlanShape`, `RatePlanModifierShape`.

---

<a id="decision-126"></a>
### Decision #126: Correction and Withdrawal Parity for Standalone Pricing Models

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-19
- **Issue:** `replaces`/`replacedBy` (same-period correction) and `cancelledBy`/`cancelledOn` (voiding) were scoped to `TariffFiling` only, so a standalone `PricingModel` published with no enclosing filing — market or dynamic feed, competitive supply, contract, or scenario pricing — had no conformant way to be corrected in place or withdrawn. `supersedes` already covered both publication units (Decision #122), but supersession is the wrong tool for a same-period correction: a superseded subject stays valid history, while a corrected bad window must be voided.
- **Category:** Architecture, Validation

**Context:**
Decision #122 established that lifecycle attaches to publication units and extended `supersedes` to the `PricingModel ∪ TariffFiling` union so filing-less content could be threaded forward in time. The same extension was not carried through to `replaces`/`replacedBy`/`cancelledBy`/`cancelledOn`, which remained `TariffFiling`-only, leaving the two-layer split incomplete for the correction and withdrawal facet of lifecycle.

**Decision:**
Widen `replaces`, `replacedBy`, `cancelledBy`, and `cancelledOn` from a `TariffFiling`-only domain/range to the `PricingModel ∪ TariffFiling` union, matching `supersedes`, and add the four corresponding property paths to `PricingModelShape`, each constrained like-for-like (`sh:class urpx:PricingModel`) so cross-type replacement — a filing replacing a model, or a model replacing a filing — fails validation, mirroring the existing per-shape constraint already shipped on `TariffFilingShape`.

**Options Considered:**

1. **Widen to `PricingModel ∪ TariffFiling`, constrained like-for-like per shape (Selected)**
   - Pro: Completes the two-layer split Decision #122 started, so all four lifecycle predicates — not just `supersedes` — treat a standalone pricing model as its own publication unit.
   - Pro: The OWL union alone cannot forbid a filing from replacing a model; the per-shape `sh:class` constraint can and does, exactly as it already does for `supersedes`.
   - Con: `cancelledBy`'s range grows to three members (`PricingModel`, `TariffFiling`, `SourcePublication`).

2. **Treat a corrected or withdrawn standalone model as "superseded" instead**
   - Pro: No new domain/range widening required.
   - Con: Wrong semantics — supersession end-dates the prior subject but keeps it valid history; a corrected bad window must be voided, not retained as valid history.

3. **Wrap every standalone model in a synthetic `TariffFiling` so the filing-only predicates still apply**
   - Pro: No property widening needed.
   - Con: Fabricates a regulatory filing artifact that does not exist for market or dynamic-feed content; burdens every emitter with a wrapper that misrepresents the source.

**Rationale:**
- `urpx:supersedes` already carries the `PricingModel ∪ TariffFiling` union; leaving the other three lifecycle predicates filing-only made the two-layer split inconsistent across the four terms that together express lifecycle.
- The like-for-like shape constraint keeps cross-type replacement invalid even though the OWL-level union, by itself, permits it.
- For a pricing model published within a filing, correction and cancellation continue to ride the filing chain; the widened predicates apply to a standalone model with no enclosing filing.

**Consequences / Impact:**
- **Positive:** A standalone pricing model now has a conformant way to be corrected in place or withdrawn, completing the two-layer lifecycle split that supersession already established.
- **Breaking Change:** No — the domain/range widening is additive, and the four new `PricingModelShape` property paths are optional (`0..1`).
- **Requirements:** None for existing data. A producer correcting or withdrawing a standalone pricing model may now assert `replaces`/`replacedBy`/`cancelledBy`/`cancelledOn` on it directly.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-19 entry ("Widened `replaces`, `replacedBy`, `cancelledBy`, and `cancelledOn`...").
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:replaces`, `urpx:replacedBy`, `urpx:cancelledBy`, `urpx:cancelledOn` annotations.
- SHACL: `shacl/urpx-shacl.ttl` — `PricingModelShape` gains the `replaces`/`replacedBy`/`cancelledBy`/`cancelledOn` property paths.

---

<a id="decision-127"></a>
### Decision #127: Identity, Timezone, and Location Metadata on Resolved Version Snapshots

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-20
- **Issue:** A resolved `RatePlanVersion` / `RatePlanModifierVersion` is the artifact a consumer reads standalone, but the customer-facing identifier (for example the California MIDAS RIN), the timezone needed to interpret the snapshot's own timestamps, and the location dataset (holidays, DST rules) were reachable only by dereferencing the plan identity through `forRatePlan`. A consumer holding only the snapshot could not read them directly.
- **Category:** Architecture, Interoperability

**Decision:**
Make `hasIdentifier`, `timezoneIdentifier`, and `hasLocationDataSet` available directly on `RatePlanVersion` and `RatePlanModifierVersion`, so a standalone snapshot carries its own identity, timezone, and location context. The plan identity remains the authoritative home; a version-level copy is a denormalized convenience for standalone-snapshot consumption and, where present, MUST agree with the identity.

**Options Considered (reuse ladder):**

1. **Reuse by widening (Selected).** Widen the existing `hasIdentifier`, `timezoneIdentifier`, and `hasLocationDataSet` property domain unions to include the two version classes, and add the corresponding optional paths to both version shapes (`hasIdentifier` → `RatePlanIdentifier` / `RatePlanModifierIdentifier` respectively). No new property is minted.
   - Pro: The version reuses the same properties and identifier classes the plan identity already uses; a consumer resolves identity uniformly whether it holds the plan or the snapshot.
   - Pro: Additive — every prior domain member is retained; existing data is unaffected.
   - Con: The identifier can now appear in two places (identity and version), raising a consistency obligation (addressed by the authority rule below).
2. **Mint a version-scoped identifier/timezone/location property set.** Rejected — a parallel twin of terms that already carry the role; the reuse loss and ongoing maintenance cost are not justified when a domain widening suffices.
3. **Leave it reachable only via `forRatePlan`.** Rejected for the standalone-snapshot use case the reviewer raised (a consumer reading only the snapshot needs the RIN and timezone in hand).

**Rationale:**
- Reuse-first: the correct rung is reuse-by-widening (rung 3), not a mint. The identifier already has a home on the identity; the version gains reach to the same term, it does not get its own.
- The contested version-level fields from the first review (`ratePlanUniqueIdentifier`, `initialEffectiveDate`, `hasRateGroup`, `applicableToRateGroup`) are deliberately NOT added — they are identity/structure facts, not snapshot-interpretation metadata.

**Consequences / Impact:**
- **Positive:** A resolved snapshot is self-describing for identity, timezone, and location without dereferencing the plan identity.
- **Breaking Change:** No — the domain widenings are additive and the version-shape paths are optional.
- **Authority rule:** the plan identity is authoritative; when a version carries a copy of an identifier, timezone, or location dataset, it MUST agree with the identity's. (Parallels the `selfContained` claim-vs-version rule already noted in the ontology.)

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-20 entry ("Widened the domain of `hasIdentifier` ... `timezoneIdentifier` and `hasLocationDataSet` ...").
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:hasIdentifier`, `urpx:timezoneIdentifier`, `urpx:hasLocationDataSet` domain unions.
- SHACL: `shacl/urpx-shacl.ttl` — `RatePlanVersionShape` and `RatePlanModifierVersionShape` gain the three optional paths.

---

<a id="decision-128"></a>
### Decision #128: Collapse Nested Tariff Reference Classes into DataSourceReference

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-25
- **Supersedes:** Decision #089 (TariffBookReference and TariffStatementReference Nested Citation Classes), in `urpx-design-decisions-081-120.md`
- **Issue:** `TariffBookReference` and `TariffStatementReference`, minted in Decision #089, duplicated citation metadata that `DataSourceReference` already carries, and the tariff-book-versus-statement distinction they encoded is already stated by the referenced publication's `publicationType`.
- **Category:** Architecture, Validation

**Context:**
Decision #089 promoted tariff book and tariff statement citations to two nested classes, `TariffBookReference` and `TariffStatementReference`, reached from `DataSourceReference` through `hasTariffBookReference` and `hasTariffStatementReference`, to carry structured in-document locators (page and leaf position, statement type). A `DataSourceReference` already cites a `SourcePublication`, and that publication carries a `publicationType` (tariff book, statement, supplement, market price feed), so the kind of source is already data on the publication. The only content the two subclasses added beyond that distinction was ordinary optional locator metadata: `pageStart`, `pageEnd`, `leafStart`, `leafEnd`, `tariffStatementType`, and receipt dates, all of which sit naturally on the citation itself.

**Decision:**
Remove `TariffBookReference` and `TariffStatementReference` and their linking properties `hasTariffBookReference` and `hasTariffStatementReference`. Carry the page and leaf locators, statement type, and receipt dates directly on `DataSourceReference`, and let the tariff-book-versus-statement distinction ride the referenced `SourcePublication`'s `publicationType`.

**Options Considered (reuse ladder):**

1. **Reuse by widening, flattening the locators onto `DataSourceReference` (Selected).** Widen the domains of `leafStart`, `leafEnd`, `tariffStatementType`, and the receipt-date properties onto `DataSourceReference`, drop the two subclasses and their linking properties, and let `publicationType` carry the source-kind distinction. No new term is minted; the reference reuses the metadata terms it already neighbors.
   - Pro: The book-versus-statement distinction stays where it already lives, on the referenced publication's `publicationType`, with no parallel encoding.
   - Pro: One citation class instead of three, and two fewer shapes; a citation's page and leaf position are optional metadata on the citation, not a distinct kind of thing.
   - Pro: Additive for locator data; every locator the subclasses held is preserved on the reference.
   - Con: Nested `hasTariffBookReference` / `hasTariffStatementReference` structures in existing data must flatten their locators onto the parent reference.

2. **Keep the nested classes (Decision #089 as-is).** Rejected. A near-twin mint of a role `DataSourceReference` plus `publicationType` already cover, adding ongoing maintenance (two classes, two properties, two shapes) with no added expressiveness. This is the reuse-before-minting smell the collapse removes.

**Rationale:**
- The reuse ladder's correct rung here is reuse-by-widening (rung 3), not a mint (rung 4): the locators widen onto the existing reference class, and the source-kind distinction reuses `publicationType` rather than being re-encoded as a subclass. Decision #089 took the mint rung where widening suffices.
- Leaf and page positions are optional descriptive metadata on a citation, not a separate kind of citation. Minting a class per document kind is the over-modeling pattern v0.3.0 has otherwise retired (see Decision #121's move from a document-class family to `publicationType`).
- Removing the twins before the initial public tag keeps the first published vocabulary minimal.

**Consequences / Impact:**
- **Positive:** One citation class, fewer shapes, and no loss of locating detail; the source-kind distinction has a single home on `publicationType`.
- **Breaking Change:** Yes. Nested `hasTariffBookReference` / `hasTariffStatementReference` structures must flatten their page and leaf locators onto the `DataSourceReference`. Folded into the unreleased v0.3.0 before the initial public tag, so no released vocabulary is affected.
- **Requirements:** Producers place page and leaf locators, statement type, and receipt dates directly on `DataSourceReference`, and rely on the referenced publication's `publicationType` for the tariff-book-versus-statement distinction.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-25 entry ("Removed the `TariffBookReference` and `TariffStatementReference` classes and their linking properties...").
- Supersedes: Decision #089 (`urpx-design-decisions-081-120.md`), which minted the two nested classes.
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:DataSourceReference`; the removed `urpx:TariffBookReference`, `urpx:TariffStatementReference`, `urpx:hasTariffBookReference`, `urpx:hasTariffStatementReference`; the widened `urpx:leafStart`, `urpx:leafEnd`, and `urpx:tariffStatementType` domains.
- SHACL (`shacl/urpx-shacl.ttl`): `DataSourceReferenceShape` gains the flattened paths and stays closed; `TariffBookReferenceShape` and `TariffStatementReferenceShape` removed.

---

<a id="decision-129"></a>
<a id="proposed-consolidation-lineage-temporal-completeness"></a>
### Decision #129: Element-Level Consolidation Lineage and Temporal Completeness

- **Status:** Accepted (pre-Draft); amended 2026-07-26 (see the amendment at the end of this entry)
- **Date:** 2026-07-25
- **Issue:** A resolved rate plan version snapshot could not record which pricing model contributed each of its elements; a `TemporalScope` could not reference the named time interval its documentation described, nor express an intraday boundary; and the `cancelledOn` and `sunsetOn` lifecycle dates had no dateTime-precise twin.
- **Category:** Provenance, Temporal, Validation

**Context:**
A `RatePlanVersion` or `RatePlanModifierVersion` is a consolidated snapshot derived from one or more applicable pricing models, but no property recorded that derivation at the element level. `documentedBy` cites a source document and `resolvedFrom` points a reference at a `ModelCollection` thread; neither answers the question a consumer holding a resolved snapshot needs answered: which pricing model supplied this price definition, and through which filing and rate case did it arrive. Separately, the `TemporalScope` annotation said a scope may reference a `TemporalPeriod`, but no property carried that domain and range, and the scope admitted only date-granular boundaries, so it could not express an intraday publication or observation window. Finally, most event properties carry a dateTime twin (for example `effectiveDate` and `effectiveDateTime`), but `cancelledOn` and `sunsetOn` did not, so an intraday cancellation or retirement could not be stated precisely. Every shape involved is closed, so none of these could be layered on after the initial public tag.

**Decision:**
Add two object properties for consolidation lineage: `contributedBy`, from a snapshot element (a price definition, price, price set, ledger, eligibility rule, applicability rule, or general rule) to the pricing model via which it entered the snapshot, asserted at the most parent-level element the model contributed wholly; and `consolidatedFrom`, from the version snapshot to each contributing pricing model. Both range on `PricingModel`. Add `hasTemporalPeriod` to link a `TemporalScope` to the named interval its span denotes, and widen `startDateTime` and `endDateTime` onto `TemporalScope`. Add `cancelledOnDateTime` and `sunsetOnDateTime` as dateTime-precise twins of the two lifecycle dates. All additions are optional in the shapes, and all touched shapes stay closed.

**Options Considered:**

1. **Two lineage properties: element-level `contributedBy` plus version-level `consolidatedFrom` (Selected).** The element property answers the per-element source question; the version property gives a cheap source-document index and a completeness cross-check (every element-level `contributedBy` target should appear in `consolidatedFrom`, and every model in `consolidatedFrom` should contribute at least one element or have its exclusion explained in the claim's Evaluation).
   - Pro: Answers both the per-element lineage question and the version-level indexing and cross-check needs.
   - Pro: Keeps the snapshot flat and queryable; per-link document metadata already lives on `DataSourceReference`.
2. **Version-level link only.** Rejected. Loses per-element lineage, which is exactly the consumer story (show the source tariff document and rate case for this element).
3. **Element-level link only.** Rejected. Loses the version-level source index and the completeness cross-check.
4. **A reified lineage node (a class carrying element, model, and role).** Rejected as heavier; per-link metadata is already carried at the document layer, and the two-property design keeps snapshots flat.
5. **Import PROV.** Rejected. The standard aligns with PROV by reference only; `Evaluation` is deliberately not a `prov:Activity`.

**Rationale:**
- Element-level lineage answers the audit, regulator-review, and source-display question directly, and from the model the existing publication chain (`withinPublication` to the tariff filing, `pursuantTo` to the rate case) completes the walk.
- The temporal additions reuse existing terms where possible: `startDateTime` and `endDateTime` widen onto `TemporalScope` (reuse by widening) rather than minting scope-specific boundary properties, and the two lifecycle twins follow the established `effectiveDate` to `effectiveDateTime` append precedent.
- `hasTemporalPeriod` closes a documented-but-unwired relationship rather than adding new semantics.

**Consequences / Impact:**
- **Positive:** A resolved snapshot can carry its own consolidation lineage and intraday temporal detail, readable without dereferencing the source models.
- **Breaking Change:** No. Every addition is optional and every existing fixture stays valid.
- **Requirements:** Producing implementations SHOULD assert both lineage properties on consolidated snapshots. Whether a future version makes `consolidatedFrom` mandatory on new snapshots is left open.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-25 entry ("pre-tag consolidation lineage and temporal completeness").
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:contributedBy`, `urpx:consolidatedFrom`, `urpx:hasTemporalPeriod`, `urpx:cancelledOnDateTime`, `urpx:sunsetOnDateTime`; the widened `urpx:startDateTime` and `urpx:endDateTime` domains.
- SHACL (`shacl/urpx-shacl.ttl`): the `contributedBy`, `consolidatedFrom`, `hasTemporalPeriod`, `startDateTime`, `endDateTime`, `cancelledOnDateTime`, and `sunsetOnDateTime` paths; all touched shapes stay closed.
- Test cases: the Consolidated Edison SC1 Rate I resolved snapshot (consolidation lineage) and its supply snapshot variant (a `retrievedElsewhere` `PriceDefinitionReference` resolved against a `ModelCollection` thread, not self-contained and fallback-sourced).

**Amendment (2026-07-26):**
Three carriage gaps found while writing a consuming reconciliation design against this decision were closed the next day, under the same decision:
- **Machine-readable exclusions.** The completeness cross-check in option 1 said an excluded model's reason lives "in the claim's Evaluation", but the closed `EvaluationShape` carried only free text, so no consumer could re-run the check. Added `ModelExclusion` (a relator node pairing `excludedModel` with an `exclusionReason` from the new `ExclusionReasonValue` enumeration: `pruned`, `fullySuperseded`, `voided`, `outOfScope`), carried by `hasModelExclusion` on `Evaluation`. A flat two-property alternative was rejected because reasons could not be paired to models when more than one is excluded.
- **Publication-unit recency.** Reconciliation of two overlapping publication units with no lifecycle link needs an ordering signal the vocabulary carries. Widened `dateModified` and `dateTimeModified` onto `PricingModel` and `TariffFiling` (reuse by widening; the property's role is unchanged) and documented the later-modification-date ordering convention in the property notes.
- **`documentedBy` domain alignment.** The ontology domain excluded `TariffFiling` while the closed `TariffFilingShape` admitted the path and the shipping statement fixtures assert it on filing nodes. Widened the domain to `PricingModel`, `TariffFiling`, `PriceDefinitionReference`; rejecting the usage instead would have stripped the document citation exactly where a regulatory filing needs it.
- The reference test cases were extended to demonstrate all of the above, plus a coverage-scoped `TemporalScope` on the claim, evaluation attribution (`evaluatedBy`/`evaluatedOn`), and continuous market supply cycles from the shipped feed data. The flagship snapshot's verdict is stated as `partial`, with the evaluation naming what is not yet modeled, so the reference set demonstrates an honest partial claim. See the changelog entry of 2026-07-26.

---

<a id="decision-130"></a>
### Decision #130: Publication Type Enumeration Consolidation

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-26
- **Issue:** Two enumeration classes carried the publication-kind role. `publicationType` ranged over `SourcePublicationType` (eight members, no member documentation, no typed individuals, and a name breaking the `*Value` suffix convention), while an orphaned `PublicationTypeValue` (ten members, all typed and documented, plus its own shape) was referenced by no property and no shape. The two shared the member IRIs `tariffBook` and `tariffStatement`.
- **Category:** Architecture, Naming, Validation

**Context:**
Decision #128 made `publicationType` the sole carrier of the tariff book versus tariff statement distinction on citations, which raised the stakes on the enumeration behind it. An implementer asking "what are the valid publication types" found an empty data-dictionary section for the live enumeration and a fully documented table for the orphaned one, with member sets that disagree; `marketPriceFeed`, asserted by the shipping test cases, was defined nowhere.

**Decision:**
Consolidate on one enumeration class, renamed `SourcePublicationTypeValue` to match the `*Value` suffix every other enumeration carries (its own label already read "Source Publication Type Value"). Give all eight members typed individuals with labels and definitions, reusing the two definitions that existed on the orphan. Remove the `PublicationTypeValue` class, its ten member individuals, and its shape: its eight exclusive members (`amendment`, `notice`, `order`, `ratePlanPublication`, `ratePlanModifierPublication`, `regulatoryFiling`, `supplement`, `tariffBookLeaves`) had zero usage anywhere in the vocabulary, shapes, or fixtures.

**Rationale:**
- One documented enumeration with a single home for the publication-kind distinction; the empty dictionary section fills on the next regeneration.
- The rename is free before the initial public tag and never again: member IRIs and the `publicationType` property are untouched, so no data changes.
- Keeping the first published vocabulary minimal (the Decision #128 rationale) argues against shipping ten defined-but-unreachable members.

**Consequences / Impact:**
- **Positive:** The distinction Decision #128 relies on is now backed by a documented, singly-homed enumeration.
- **Breaking Change:** Only relative to unreleased pre-tag states; no released vocabulary carried `SourcePublicationTypeValue` under its old name, and no data asserts the removed members.
- **Requirements:** Producers set `publicationType` to one of the eight `SourcePublicationTypeValue` members.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-26 entry.
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:SourcePublicationTypeValue` and its eight typed member individuals; the removed `urpx:PublicationTypeValue` and its members.
- SHACL (`shacl/urpx-shacl.ttl`): `SourcePublicationTypeValueShape` (renamed, with `sh:targetClass` and `sh:nodeKind`); the removed `PublicationTypeValueShape`.
- Related: Decision #128 (the distinction rides `publicationType`); Decision #121 (the document class family retired in favor of `publicationType`).

---

<a id="decision-131"></a>
<a id="offering-publication-separated"></a>
### Decision #131: Offering and Publication Separated on the Plan-to-Organization Link

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-02
- **Issue:** `publishedBy` was the only organization link on `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, and `RatePlanModifierVersion`, and it named the utility or supplier whose plan it is. Its name and definition asserted publication instead. A URPX rate plan derived from a utility's tariff PDF is not itself a published artifact: the PDF is what the utility published.
- **Category:** Naming, Architecture, Validation

**Context:**
Every fixture asserting `publishedBy` on a plan or snapshot named the offering utility — `org:consolidated-edison` on the ConEd service classifications, `org:utility-pge` on the PG&E schedules. The definition read "Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version," so the vocabulary asserted publication about the one thing in the chain that is not published.

Publication had no home on the artifacts that are published. `URPXPackage` and `TariffFiling` carried no organization link at all. `SourcePublication` named its publisher only through `issuingAuthority`, an `xsd:string`, so the publisher of a tariff book could not be referenced as an `Organization` IRI while the plan it states could.

An undeclared, narrower twin of the link already existed on the organization side: `publishes`, with domain `Organization` and range `RatePlan`, admitted by five organization-family shapes and asserted by no data.

**Decision:**
Rename `publishedBy` to `offeredBy`, with domain `PricingModel ∪ RatePlan ∪ RatePlanModifier ∪ RatePlanVersion ∪ RatePlanModifierVersion`, an `Organization` range, and at-most-one cardinality. Rename `publishes` to `offers`, widen its range to match that domain, and declare the two `owl:inverseOf` each other. Make the link optional in both directions. Re-home `publishedBy` onto the artifacts that are published: `PricingModel ∪ TariffFiling ∪ SourcePublication ∪ URPXPackage`.

**Options Considered (reuse ladder):**

1. **Reuse the existing property under a corrected name (Selected).** The relationship the vocabulary needs was already modelled at the right cardinality on the right four classes; only the name and definition were wrong. Renaming mints no term, changes no domain or range, and adds no shape block.
   - Pro: The name states what every shipping fixture already means.
   - Pro: Frees `publishedBy` for the artifacts that are published, which had no typed organization link, rather than retiring a term the model needs.
   - Pro: Free before the initial public tag and never again.
   - Con: A breaking key rename for any producer already emitting `publishedBy` on a plan.

2. **Keep `publishedBy` on the plan and mint a second `offeredBy` alongside it.** Rejected. Two organization links on the same four classes, with no rule for which to assert, is the redundant-twin outcome the reuse ladder exists to prevent; the publication reading would remain available on a subject that is not published.

3. **Keep `publishedBy` and correct only its definition.** Rejected. The label and local name are what an implementer reads first; a comment that contradicts them relocates the confusion rather than removing it.

4. **Retire `publishedBy` rather than re-home it.** Rejected. The pricing model, the filing, the source publication, and the exchange package all genuinely need a typed publisher, and widening the domain of a term already in the vocabulary is a lower rung than minting one later.

**Rationale:**
- The reuse ladder's correct rung is reuse-as-is under a corrected name for the offering link, and reuse-by-widening (rung 3) for the publication link. No term is minted; the vocabulary's term count is unchanged.
- The widened range on `offers` is load-bearing, not cosmetic. `RatePlan` is `owl:disjointWith` `RatePlanVersion`. Had `offers` kept its `RatePlan` range while being declared inverse, asserting `offeredBy` on a snapshot would have entailed that the snapshot is a `RatePlan`, contradicting the disjointness. This is the unsound-entailment pattern removed from `isReferencedByPricingModel` in the 2026-07-29 entry.
- `offeredBy` and `offers` align with schema.org `offeredBy` and `offers` by reference. The existing `EnergyServiceProvider` note already described these organizations as offering rate plans.
- The link is optional in both directions because URPX is used for teaching, sandbox, and research data that models no real utility. Requiring an organization would make a synthetic plan invalid for want of a party that does not exist.
- "Offering" previously named an out-of-scope concept in the FAQ and tutorial. That section now states the scope directly: URPX represents rate plan data, not the event-based adds, drops, and updates applied to customer profiles as enrollments start, change, and end. "Offer" does one job in the documentation as a result.

**Consequences / Impact:**
- **Positive:** The plan names its utility without claiming to be a publication, and the publication chain gains a typed publisher on every class that is published.
- **Positive:** The organization-side link is sound as an inverse for the first time; previously it was a narrower, undeclared twin.
- **Breaking Change:** Yes, twice over. The `publishedBy` key on plans and snapshots becomes `offeredBy`, and `publishes` on organizations becomes `offers`. Folded into the unreleased v0.3.0 before the initial public tag, so no released vocabulary is affected.
- **Loosening:** The version shapes previously required the organization link. They now admit it optionally. Data that validated before still validates.
- **Requirements:** Producers assert `offeredBy` on the pricing model, plan, modifier, or snapshot, and `publishedBy` on the pricing model, filing, source publication, or exchange package. A `PricingModel` carries both, being an authored unit that is itself published; where a model sits inside a filing, the filing carries the publisher. Where a source's publisher differs from its approving body, `issuingAuthority` continues to name the latter.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-02 entry ("offering and publication separated").
- Task: `dev-docs/tasks/completed.task.urpx.ont.2026-08-02.offering-vs-publication-link.md`.
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:offeredBy`, `urpx:offers`, and the re-homed `urpx:publishedBy`; the removed `urpx:publishes`.
- SHACL (`shacl/urpx-shacl.ttl`): `PricingModelShape`, `RatePlanShape`, `RatePlanModifierShape`, `RatePlanVersionShape`, and `RatePlanModifierVersionShape` take `offeredBy` at `minCount 0`; `OrganizationShape`, `EnergyServiceProviderShape`, `RegulatoryAuthorityShape`, `SystemOperatorShape`, and `UtilityOperatorShape` take `offers` over the widened union; `PricingModelShape`, `TariffFilingShape`, `SourcePublicationShape`, and `URPXPackageShape` take `publishedBy`.
- Related: Decision #125 (the plan-to-version link inversion, whose both-directions-assertable pattern `offers` follows); Decision #121 (the pricing model architecture that owns the publication chain).
