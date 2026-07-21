<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX (Utility Rate Plan Exchange) Design Decisions Log — v0.3.0

**Version:** 0.3.0 (unreleased, pre-Draft)

This page records design decisions for v0.3.0. Starting with v0.3.0, each
major and minor version has its own design-decision log page. The prior,
dated record (decisions #001 through #111) remains in
[`urpx-design-decisions-001-040.md`](urpx-design-decisions-001-040.md),
[`urpx-design-decisions-041-080.md`](urpx-design-decisions-041-080.md), and
[`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md), which
are organized in blocks of forty. Decision numbering continues across pages;
this page begins at Decision #121, at the start of the next block after the
081–120 range.

---

## Decision Index

- Decision #121: Pricing Model Architecture — PricingModel, TariffFiling, and SourcePublication
- Decision #122: Filing-Owned Lifecycle and Shared Validity Dates
- Decision #123: Required CoverageClaim on Version Snapshots
- Decision #124: Charge/Measurement Split for Power Factor
- Decision #125: Version-to-Plan Link Inversion
- Decision #126: Correction and Withdrawal Parity for Standalone Pricing Models
- Decision #127: Identity, Timezone, and Location Metadata on Resolved Version Snapshots

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
### Decision #125: Version-to-Plan Link Inversion

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-07-07
- **Issue:** With `RatePlan` and `RatePlanModifier` sharpened to pure identity records (Decision #121), the prior two-way link between a plan and its versions (`hasRatePlanVersion` / `hasRatePlanModifierVersion` on the plan, alongside a version pointing back) no longer fit a plan that carries no derived content of its own.
- **Category:** Architecture

**Context:**
`hasRatePlanVersion` and `hasRatePlanModifierVersion` previously let a `RatePlan` or `RatePlanModifier` point at its versions directly.

**Decision:**
Remove `hasRatePlanVersion` and `hasRatePlanModifierVersion`. A version now points at its plan or modifier via `forRatePlan` / `forRatePlanModifier`; there is no inverse property on the plan or modifier side.

**Options Considered:**

1. **Version-to-plan only, no inverse (Selected)**
   - Pro: `urpx:forRatePlan` is documented as "the version→plan binding. No RatePlan→version navigation property," keeping `RatePlan` a stable identity that does not enumerate its own derived snapshots.
   - Pro: Matches `RatePlan`'s own annotation as "the stable identifier... independent of time," with derived content reached only from the version side.
   - Con: A consumer must query for versions referencing a plan rather than read them off the plan directly.

2. **Keep a two-way link (plan-to-version and version-to-plan)**
   - Pro: Direct navigation from a plan to its versions.
   - Con: Duplicates the same relationship in both directions on a class that is meant to carry no derived content.

**Rationale:**
- `RatePlan` and `RatePlanModifier` are identity records; a stable identity does not need to carry a growing list of the derived snapshots built from it over time.
- The single-direction link keeps the derived-artifact relationship on the derived artifact (the version), not on the identity it was built for.

**Consequences / Impact:**
- **Positive:** A cleaner identity/derived-artifact boundary — versions reference their plan, plans do not reference their versions.
- **Breaking Change:** Yes — `hasRatePlanVersion` / `hasRatePlanModifierVersion` are removed; consumers must query by `forRatePlan` / `forRatePlanModifier` instead of reading a version list off the plan.
- **Requirements:** Producers must replace `hasRatePlanVersion` / `hasRatePlanModifierVersion` with `forRatePlan` / `forRatePlanModifier` on the version node.

**References:**
- Changelog: `urpx-changelog.md`, 2026-07-07 entry ("Removed: `hasRatePlanVersion` / `hasRatePlanModifierVersion`").
- Release notes: `documentation/pages/urpx-release-notes-v0.3.0.md`, Breaking Changes item 3 and Migration.
- Ontology: `ontology/urpx-ontology.ttl` — `urpx:forRatePlan`, `urpx:RatePlan` annotations.

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
