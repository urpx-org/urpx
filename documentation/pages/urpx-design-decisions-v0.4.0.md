<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20150513 -->

---
site_category: advanced-topics
site_id: design-decisions-v0.4.0
site_title: "Design Decisions v0.4.0"
site_label: "Decisions v0.4.0"
site_position: 7
---

# URPX (Utility Rate Plan Exchange) Design Decisions Log — v0.4.0

**Version:** 0.4.0 (pre-Draft)

This page records design decisions for v0.4.0. Starting with v0.3.0, each major and minor version has its own design-decision log page.

The prior, dated record (decisions #001 through #111) remains in [`urpx-design-decisions-001-040.md`](urpx-design-decisions-001-040.md), [`urpx-design-decisions-041-080.md`](urpx-design-decisions-041-080.md), and [`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md), which are organized in blocks of forty. Decisions #121 through #131 are recorded on [`urpx-design-decisions-v0.3.0.md`](urpx-design-decisions-v0.3.0.md).

Decision numbering continues across pages; this page begins at Decision #132.

---

## Decision Index

- Decision #132: One Identifier Pattern Across Organization, Rate Plan, and Rate Plan Modifier
- Decision #133: The Exchange Package Carries Every Exchangeable Unit Through One Property
- Decision #134: A Calculation Attaches Where The Quantity Is Measured
- Decision #135: One Published JSON-LD Context, Generated From The Ontology's Ranges
- Decision #136: The Validation Unit Is The Declared Set

---

## Decisions Registry

<a id="decision-132"></a>
### Decision #132: One Identifier Pattern Across Organization, Rate Plan, and Rate Plan Modifier

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-14
- **Issue:** `OrganizationIdentifier`, `RatePlanIdentifier`, and `RatePlanModifierIdentifier` were named as one family and shared no property beneath the class name. Two scheme properties, two value carriers, a closed nine-member register on the organization side against a free IRI on the rate plan side, and cardinality loose enough that an `OrganizationIdentifier` carrying nothing validated.
- **Category:** Naming, Architecture, Validation

**Context:**
The organization side carried `identifierScheme`, ranged on the closed enumeration `IdentifierSchemeValue`, with the literal on `utilityId`. The rate plan side carried `scheme` as a free IRI with no stated range, with the literal on `skos:notation`. Both patterns modelled the same thing: a register, and a value issued by it.

The split had two consequences an implementer meets directly. An implementer operating a register outside the nine published members could not use `identifierScheme` at all, because the shape closed it by `sh:in`. And `OrganizationIdentifierShape` made all three of its properties optional, so an identifier that identified nothing conformed.

`utilityId` was also a misnamed carrier. Its class documents itself as holding "EIA ID, DUNS, LEI, and other jurisdiction-specific identifiers", so the literal on a DUNS identifier is not a utility id.

The rate plan side named two conventions in a note, `urpx:ca-midas-rin` and `urpx:utility-tariff-code`. Neither was defined. The second is asserted by shipping test cases, so a consumer dereferencing it in the URPX namespace reached nothing. Both also broke the vocabulary's naming convention, which is camelCase throughout with register members suffixed `Scheme`.

**Decision:**
Harmonize onto the rate plan pattern, and open the register. `scheme` carries the register for all three identifier classes, ranged on `IdentifierScheme`. `skos:notation` carries every literal. `IdentifierSchemeValue` becomes `IdentifierScheme`, an open class keeping all nine members as typed individuals. The two conventions become defined members, `urpx:caMidasRinScheme` and `urpx:utilityTariffCodeScheme`. All three identifier shapes take one surface: `scheme` required, `skos:notation` required, `identifierJurisdiction` optional. `identifierScheme`, `utilityId`, and `IdentifierSchemeValueShape` are removed.

**Options Considered (reuse ladder):**

1. **Harmonize onto the rate plan pattern and open the register (Selected).** The kept terms are the ones data already uses; the retired terms had no consumers outside the vocabulary and its generated documentation.
   - Pro: A standard cannot enumerate the registers that will exist. Implementers start new ones, and the open class is what admits them.
   - Pro: `skos:notation` is reuse-as-is of a SKOS term already carrying the literal on two of the three classes. Nothing is minted for the value carrier.
   - Pro: `scheme` is reuse-by-widening: one existing property gains a class in its domain, rather than a second property being kept beside it.
   - Pro: Free while the vocabulary is unreleased. Opening a closed enumeration and retiring properties are both breaking once it is public.
   - Con: A breaking key rename for any producer emitting `identifierScheme` or `utilityId` on an organization identifier.

2. **Harmonize onto the organization pattern, closing the rate plan register too.** Rejected. It would close the value space of `scheme` to nine members, invalidate the `utility-tariff-code` usage in the shipping test cases, and require a vocabulary release for every implementer who stands up a register.

3. **Keep both patterns and document the split in a note.** Rejected. Two properties for one relationship, with no rule for which to assert, is the redundant-twin outcome the reuse ladder exists to prevent. A note does not tell a producer which to write.

4. **Open the register but keep the `IdentifierSchemeValue` name.** Rejected, and the reason is mechanical rather than cosmetic. The dictionary generator treats a `*Value` suffix as the marker of a closed enumeration and renders such classes as tables of legal values. Keeping the suffix would publish an open register as a closed list, which is the opposite of the intent.

**Rationale:**
- A standard cannot close the set of identifier registers, because implementers start new ones. `sh:nodeKind sh:IRI` on `scheme` is the whole constraint the register takes, and that is precisely what makes a scheme outside the published members legal.
- The `rdfs:range` on `scheme` is newly stated. The property previously had no documented value space at all. Ranging it on an open class gives the term a meaning without closing it: the published members say what the common registers are, and an implementer-minted IRI stays valid.
- Requiring `scheme` and `skos:notation` on all three shapes is a tightening, and it is the point. An identifier states the register it comes from and the value that register issued, or it is not an identifier.
- `identifierJurisdiction` widens to all three classes because jurisdiction is a property of the identifier rather than of the organization. A CA MIDAS RIN has a jurisdiction as much as an EIA ID does.
- Promoting the two conventions to defined terms is the only part of this decision that touches data. It settles local names; it does not settle the namespace they sit in.

**Consequences / Impact:**
- **Positive:** An implementer standing up a register uses the same property, the same value carrier, and the same shape surface as every published register.
- **Positive:** `urpx:utilityTariffCodeScheme` resolves. The IRI the test cases assert is now a defined member with a label and a definition.
- **Breaking Change:** Yes. `identifierScheme` and `utilityId` are removed, `IdentifierSchemeValue` is renamed, and organization identifiers gain two required properties. Folded into the unreleased line before the initial public tag, so no released vocabulary is affected.
- **Tightening:** `OrganizationIdentifierShape` previously admitted an instance carrying nothing. Data relying on that admits no longer validates.
- **Requirements:** `IdentifierScheme` is a non-enum class, so the data dictionary generator requires a `sections:` placement for it in the website codegen configuration before the vocabulary change is merged, or the regeneration halts on the unclassified-class path.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-14 entry ("one identifier pattern").
- Ontology (`ontology/urpx-ontology.ttl`): the widened `urpx:scheme` and `urpx:identifierJurisdiction`; `urpx:IdentifierScheme` and its eleven members; the removed `urpx:identifierScheme` and `urpx:utilityId`.
- SHACL (`shacl/urpx-shacl.ttl`): `OrganizationIdentifierShape`, `RatePlanIdentifierShape`, and `RatePlanModifierIdentifierShape` take the shared surface; the removed `IdentifierSchemeValueShape`.
- Related: Decision #128 (the collapse of nested reference classes, whose single-carrier direction this follows); Decision #130 (the publication type enumeration, the prior case of an enumeration whose members were defined nowhere reachable).

---

<a id="decision-133"></a>
### Decision #133: The Exchange Package Carries Every Exchangeable Unit Through One Property

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-17
- **Issue:** `URPXPackageShape` is `sh:closed`, and the containment paths it admitted reached three classes: `RatePlan`, `RatePlanModifier`, and `SourcePublication`. A `TariffFiling`, a `RatePlanVersion`, a `RatePlanModifierVersion`, and a `PricingModel` could not be carried by a package at all.
- **Category:** Architecture, Validation, Naming

**Context:**
`urpx:targetURPXVersion` has domain `URPXPackage` and is required at `minCount 1` on `URPXPackageShape`. It is the only term in the vocabulary that declares which URPX version content was authored against. A unit that no package can carry therefore has no way to state its version, and the units outside the three containment paths are the ones most often exchanged on their own: a resolved version snapshot, a regulatory filing, a standalone pricing model.

The existing publication path does not reach a filing. `TariffFiling` is the URPX content unit within an external published document, and `SourcePublication` is that document; the two are siblings rather than one being a kind of the other, and `TariffFiling` is not a subclass of anything.

Measured against the shipped test cases: the nine-file ConEd set is six `TariffFiling`, one `RatePlanVersion`, one `PricingModel`, and one `RatePlan`, so eight of the nine fell outside the admitted paths. The two PG&E fixtures are the only package-rooted data, and both root on a `RatePlan`, which is the one case the existing paths served.

**Decision:**
Mint `urpx:packages`, with domain `URPXPackage` and a range that is the union of `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, `RatePlanModifierVersion`, `PricingModel`, `TariffFiling`, and `SourcePublication`. `URPXPackageShape` admits it at `minCount 0` through `sh:or` over single-class shapes, because `sh:class` takes one class and SHACL core states a union-class constraint no other way.

`hasTariffPublication` is retired; `packages` carries a source publication along with every other unit. `hasRatePlan` and `hasRatePlanModifier` are retained.

**Options Considered (reuse ladder):**

1. **One property with a union range (Selected).** No live property carries package-to-filing, package-to-version, or package-to-model, so reuse as-is is unavailable; no sibling class is in play, so reuse by extension does not apply.
   - Pro: The set of exchangeable units will grow. A union range grows by one entry, where parallel properties grow by one property, one shape block, and one documented term each.
   - Pro: One name answers "what does this package contain", so a consumer reads one path rather than testing several.
   - Con: A union range is less self-documenting than a typed property name, which the `skos:note` and the `sh:or` membership both carry instead.

2. **Widen `hasRatePlanVersion` to include `URPXPackage` in its domain.** Rejected, and the reason is unsoundness rather than style. That property is declared `owl:inverseOf forRatePlan`, so a package as subject would entail the package **is** a `RatePlan`. This is the entailment pattern removed from `isReferencedByPricingModel` in the 2026-07-29 entry.

3. **Four further parallel containment properties beside the existing three.** Rejected. It answers today's four gaps and re-opens on the next unit added, and it leaves seven properties whose only distinction is the class each points at.

4. **Declare `TariffFiling` a subclass of `SourcePublication` so the existing path reaches it.** Rejected. It would give an authored URPX content unit the lifecycle of the external document that publishes it, which is the distinction Decision #121 established.

**Rationale:**
- The envelope's job is to carry content and declare a version. A containment path that reaches three of the seven exchangeable units makes the version declaration unreachable for the rest, which is a gap in the exchange format rather than a missing convenience.
- `LocationDataSet` stays out of the initial union. Adding a class to a union range is additive and breaks no data, so the union admits what is exchanged today and widens when a case appears.
- The `sh:or` encoding is the same pattern used elsewhere in the shapes for a value that may take one of several classes. It is house-consistent rather than novel.
- `hasRatePlan` and `hasRatePlanModifier` are retained to preserve the two names for a possible scenario input in which a service agreement has an associated rate plan or rate plan modifier. Retention preserves the terms only: both keep the single domain `URPXPackage` and are admitted by `URPXPackageShape` alone, so a use on another subject would first require a deliberate domain and shape widening, with the relationship's semantics settled at that point.
- A closed shape reports nothing about a containment path no data attempts, which is why the negative case is asserted in the validation run rather than reasoned about: a `URPXPackage` carrying a class outside the union raises `sh:OrConstraintComponent` on the `packages` path.

**Consequences / Impact:**
- **Positive:** `targetURPXVersion` is declarable on every exchangeable unit, each through a package that carries it.
- **Positive:** The nine-file ConEd set can be wrapped, and a filing, a snapshot, or a pricing model can be exchanged as a package of its own.
- **Breaking Change:** Yes, for `hasTariffPublication`. On a `URPXPackage` it becomes `packages`. Folded into the unreleased line before the initial public tag, so no released vocabulary is affected.
- **Tightening:** `URPXPackageShape` previously admitted a package carrying no content unit. It now requires at least one of `packages`, `hasRatePlan` or `hasRatePlanModifier` through a node-level `sh:or`; each of the three paths stays optional on its own. Data relying on the earlier admission no longer validates.
- **Residual redundancy:** A rate plan or a modifier can be carried by either `packages` or the retained property, so a consumer reading package contents checks both paths.
- **Requirements:** No class is minted or renamed, so the website codegen dictionary configuration needs no `sections:` change and the regeneration does not halt. The retired property and the new one both appear in the generated data dictionary and diagrams, so those artifacts regenerate.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-17 entry ("the exchange package carries every unit").
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:packages` and its union range; the removed `urpx:hasTariffPublication`.
- SHACL (`shacl/urpx-shacl.ttl`): `URPXPackageShape` admits `urpx:packages` through a `sh:or` over single-class shapes, and requires at least one content unit through a node-level `sh:or`; the removed `hasTariffPublication` property block.
- Test cases: `test-cases/pge-e-tou-c/data/urpx-rate-plan_pge_e-tou-c.jsonld` carries the source publication on `urpx:packages`.
- Related: Decision #121 (the `PricingModel`, `TariffFiling`, and `SourcePublication` architecture, which is why an authored filing is not reached through the external document path); Decision #131 (the widened inverse range, the prior case of the entailment that rules out widening an inverse-declared property's domain).

---

<a id="decision-134"></a>
### Decision #134: A Calculation Attaches Where The Quantity Is Measured

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-23
- **Issue:** `hasCalculationMethod` had a three-class domain covering only `Price`, `PriceDefinition` and `PriceSet`, so a measured quantity had nowhere to state the aggregation and interval window it is reduced over. A calculated `MetricInput` stated its derivation on an anonymous `calculationRule` node reached by a separate property, with its own `formula` beside the `calculationFormula` already on `CalculationMethod`.
- **Category:** Architecture, Validation, Naming

**Context:**
`CalculationMethod` carries the aggregation method, four interval properties and a formula. All of those describe a measurement, not a price: a monthly maximum of a fifteen-minute demand series is a fact about the demand series. `CalculationMethod`'s own `skos:note` has described attachment to a ledger since v0.1.x, while no shape or domain admitted it there.

The tutorial's demand example is the case this blocked. It stated `aggregationMethod` directly on a `MetricSpecification`, which no shape admits, because `aggregationMethod` has a single domain and `MetricSpecificationShape` is closed. The example did not validate, and neither did the nine measurement fragments modeled on it.

Derivation had a second, parallel surface. `calculationRule` was an object property with domain `MetricInput` and no declared range, pointing at an anonymous node whose closed shape admitted `formula` and `calculatedBasedOn`. Neither `calculationRule` nor `formula` nor `calculatedBasedOn` occurred in any shipped document.

**Decision:**
Widen `hasCalculationMethod` to the six-class union `Ledger`, `MetricInput`, `MetricSpecification`, `Price`, `PriceDefinition`, `PriceSet`, and admit the path on `LedgerShape`, `MetricInputShape` and `MetricSpecificationShape`. Retire `calculationRule` and `formula`. `CalculationMethod` absorbs derivation by admitting `calculatedBasedOn`, which gains `rdfs:domain CalculationMethod`; `calculationFormula` is the single formula property.

Where more than one declaration is present, the one nearest the measurement governs, `MetricSpecification` before `MetricInput` before `Ledger`, resolved per property. A declaration on a price class is a denormalized copy for tabular serialization where a measurement is reachable through the node's own references, directly or through a referenced ledger or metric input. Where no measurement is reachable, the price-level declaration is complete on its own.

**Options Considered (reuse ladder):**

1. **One widening of `hasCalculationMethod` (Selected).** Reuse by widening. The property, the class and the class's shape all already exist; nothing is minted.
   - Pro: The calculation bundle is a group of six properties on `CalculationMethod`. Carrying the node to a new level moves all six at once, where widening each property's own domain would take six domain edits and six shape entries per level, repeated for each of the three levels added.
   - Pro: A node has an identity, so two measurements can reference the same `CalculationMethod`. A property value stated directly on a measurement cannot be shared, and a shared monthly-maximum definition is the ordinary case in a commercial rate plan.
   - Pro: The precedence rule needs somewhere to live. A node gives one place to say which declaration governs; six independent properties give six.
   - Con: A union domain is less self-documenting than a set of typed properties, which the property's `skos:note` carries instead.

2. **Widen `aggregationMethod` and the interval properties individually.** Rejected. It is the shape the withdrawn two-edit proposal took, and it would have let the tutorial's original line validate untouched. It states the aggregation but not what it aggregates over, offers nothing to share between two measurements, and leaves the interval properties stated at one level with no rule about a second.

3. **Keep both calculation surfaces, split by role: `calculationRule` for derivation, `hasCalculationMethod` for aggregation and interval.** Rejected. The split is representable, since one `MetricInput` can carry both child nodes and they compose through their common parent. What it leaves is two calculation surfaces whose composition order is undefined and two formula properties whose relative authority is unstated, both of which would need a further rule to settle. The standby demand credit is the case that decides it: a derivation that fires only when a customer's generators are non-operational needs a condition attached to the derivation, and an anonymous node closed to two properties cannot carry one, while a named class with its own shape can gain the path. With zero shipped uses of either retiring property, consolidating on the named class costs no data and removes the second rule rather than writing it.

4. **Mint a class for measurement-level calculation, distinct from the price-level one.** Rejected. The properties would be identical to `CalculationMethod`'s, and the precedence rule requires the two to be comparable per property, which is simplest when they are the same class.

5. **Add `PriceSetAlternative` to the domain union.** Rejected as redundant. `PriceSetAlternative` is `rdfs:subClassOf PriceSet`, and `PriceSet` is a member of the union, so an instance of the subclass is in the domain already. The containment is a consequence of the ontology's OWL semantics rather than of RDFS alone: RDFS entails that the instance is a `PriceSet`, and it takes OWL to interpret membership in `PriceSet` as membership in the anonymous union class. A probe over a typed `PriceSetAlternative` with no separately asserted `PriceSet` type confirms both halves, returning union membership under OWL-RL and not under RDFS. Thirty of the thirty-nine property paths on `PriceSetAlternativeShape` already rely on the same containment, so naming this one class explicitly would be inconsistent with the shape it validates against.

**Rationale:**
- The vocabulary states what a filed charge means. A monthly maximum applied to a fifteen-minute demand series is part of that meaning, and it belongs on the measurement whose series it reduces rather than on each price that happens to reference it.
- One property carrying a node to three new levels is the cheapest rung the inventory offers. No class and no property is minted for the reach.
- The precedence rule is stated, not validated. A shape sees one node and its immediate values, so it cannot compare a price-level copy against a declaration two references away. A copy that disagrees with its source is therefore a data-quality matter for the implementation holding both graphs, not a conformance rule. A forward path across the references is expressible, so this is a proportionality judgment about scope rather than a technical limit, and it stays consistent with the boundary already drawn around resolution as business logic.
- The two retiring properties are removed rather than deprecated in place. Both are unused in shipped documents, and the tag this precedes is the point at which removing a term is cheapest.
- Both interval properties can now be stated on adjacent nodes in one path, since `MetricSpecification` and `CalculationMethod` share four interval property names. The clean reading is that a measurement specification's interval is the granularity the quantity is recorded at and a calculation method's interval is the window the calculation applies over; the tutorial's demand example is written that way, with a fifteen-minute observation interval and a monthly reduction window.

**Consequences / Impact:**
- **Positive:** A measured quantity states its aggregation and window at the measurement. The tutorial's demand example validates, as do the measurement fragments modeled on it.
- **Positive:** A calculated `MetricInput` has one derivation surface and one formula property.
- **Breaking Change:** Yes, twice over for `calculationRule`. A document stating it on a `MetricInput` no longer validates, because `MetricInputShape` is closed and the path is gone. Separately, `calculationRule` and `formula` are removed from the vocabulary whether or not a document used them. No shipped document did.
- **Restricting, conditional on inferencing:** `calculatedBasedOn` gains `rdfs:domain CalculationMethod`. Nothing loses conformance with inferencing off. A consumer validating with RDFS inferencing on sees a tighter result, because the domain types the property's subject as a `CalculationMethod` and the closed shape then judges it.
- **Additive:** The domain widening and the four admitted paths each strictly enlarge what conforms.
- **Data migration:** Both PG&E test cases carried the only two occurrences of `hasCalculationMethod` in shipped data, each on `pd-base-charge` with a daily interval. Each of those price definitions reaches a metric input through the ledger it references, so a measurement is reachable and the ruled rule places the declaration at the ledger. The method moves onto `pge:ledger-service` and `pge:ledger-base-charge` respectively. No price-level copy is added back: a copy is optional denormalization rather than a requirement, and a test case showing the ledger-level declaration alone illustrates the model better than one showing a redundant copy with nothing to disagree with.
- **Documentation:** The tutorial's demand example and the diagram above it change to the form the shapes admit.
- **Requirements:** No class is minted or renamed, and every surviving term keeps its object-or-datatype character and its declaring class, so the website codegen dictionary configuration needs no `sections:` change. The generated data dictionary regenerates: `hasCalculationMethod` gains rows under `Ledger`, `MetricInput` and `MetricSpecification`, and the `calculationRule` row leaves `MetricInput`.
- **Generated-artifact note:** `calculationRule` appeared in the data dictionary typed as a datatype property, and `formula` and `calculatedBasedOn` did not appear at all. The generator places a property by the SHACL shape that admits it, so a property no shape admits is not published and a property with no declared range is not classified. That is generator behavior on these three terms, not a rule about how the vocabulary may declare a term; a property with no declared domain remains publishable.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-23 entry ("calculation attaches where the quantity is measured").
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:hasCalculationMethod`'s six-class union domain and its precedence note; `urpx:CalculationMethod`'s definition; `urpx:calculatedBasedOn`'s declared domain; the removed `urpx:calculationRule` and `urpx:formula`.
- SHACL (`shacl/urpx-shacl.ttl`): `LedgerShape`, `MetricInputShape` and `MetricSpecificationShape` admit `urpx:hasCalculationMethod`; `CalculationMethodShape` admits `urpx:calculatedBasedOn`; the removed `calculationRule` property shape and its inline node shape in `MetricInputShape`.
- Test cases: `test-cases/pge-e-elec/data/urpx-rate-plan_pge_e-elec.jsonld` and `test-cases/pge-e-tou-c/data/urpx-rate-plan_pge_e-tou-c.jsonld` carry the base service charge's calculation method on the ledger.
- Documentation: `documentation/pages/urpx-tutorial.md`, the demand metric input and the diagram above it.
- Accepted open residue, both annotation-level and neither blocking: the interval boundary between a measurement specification and a calculation method is described in this entry's rationale and not yet written into `MetricSpecification`'s own note, and `calculatedBasedOn` is admitted on a `CalculationMethod` reached from a ledger or a price, where enforcement would require reading across the inverse of `hasCalculationMethod`. Wording for the first is open to the working group; the second is revisited if the property gains occurrences.
- Related: Decision #121 (the `PricingModel`, `TariffFiling` and `SourcePublication` architecture); Decision #133 (the `sh:or` encoding for a union-class constraint, and the same dictionary-configuration question).

---

<a id="decision-135"></a>
### Decision #135: One Published JSON-LD Context, Generated From The Ontology's Ranges

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-28
- **Issue:** Every shipped example carried a full inline `@context`, hand-maintained per file. Across the set, the examples coerced 25 typed properties between them, while the ontology declares a non-string XSD range on 100. So 75 typed properties were coerced in no shipped context, and an implementer copying an example's context and writing `"basePrice": "0.148"` got a plain string where a decimal was meant.
- **Category:** Architecture, Documentation, Interoperability

**Context:**
A JSON-LD context binds the prefixes a document uses and coerces each typed property to its datatype, so a value written as a JSON string is read as the typed literal the vocabulary declares. Each example carried its own context, and a context covered only the terms its author happened to use. Nothing tied a context to the vocabulary, so a context could omit a coercion the ontology declares and no check would notice until a consumer read a decimal as a string.

**Decision:**
Publish one JSON-LD context at `context/urpx-context.jsonld`, generated from the ontology rather than hand-authored. The generator binds the `urpx` prefix and its companion prefixes, and emits one `@type` coercion for every URPX property whose `rdfs:range` is a non-string XSD datatype, reading the datatype from the range. All 100 such properties are covered by construction, and the context cannot drift from the vocabulary because the vocabulary is its input. The document is `@context` and nothing else: it declares no `@vocab`, and it binds no fixture-identity namespace. The twelve shipped examples reference this context by URL and carry no inline vocabulary bindings.

**Options Considered:**

1. **Generate one context from the ontology's ranges, and reference it (Selected).**
   - Pro: Coverage is total by construction. Every typed property is coerced because the generator reads every range, closing the gap the per-file contexts left on 75 of the 100 typed properties.
   - Pro: The context cannot fall behind the vocabulary. It regenerates from the ontology, so a property added or retyped is coerced or dropped without a hand edit.
   - Pro: An implementer references one document rather than reproducing a context per package, which is the surface the coverage gap arose on.
   - Con: An example's validity depends on the context resolving. This is handled by resolving the context locally in every gate rather than over the network.

2. **Keep the inline contexts and check each against a published one.** Rejected. It keeps every example carrying a hand-maintained context, which is the surface the coverage gap lived on, and it makes the published context an auditor of the per-file ones rather than the single form an implementer references.

3. **Publish a hand-authored context.** Rejected. A hand-authored context covers the terms its author thought of, which is the failure the per-file contexts already demonstrated. Only generation from the ranges covers all 100 typed properties.

4. **Declare `@vocab` so unlisted terms resolve into the URPX namespace.** Rejected. A `@vocab` mapping silently absorbs a misspelled term into the URPX namespace, which is the opposite of what a standard's context should do. An unknown term stays unresolved.

**Rationale:**
- A context's job is to make a JSON document read as the typed graph the vocabulary declares. A generated context is the only form that does this for every typed property rather than for the ones an author listed.
- Reading each coercion from `rdfs:range` means the context states what the ontology states, so the two cannot disagree.
- Omitting `@vocab` and the fixture namespaces keeps the published context to vocabulary alone: it binds what an implementer needs and nothing that identifies test data.

**Consequences / Impact:**
- **Positive:** A value written against the published context carries its datatype. A decimal, date, boolean or integer is read as that datatype rather than as a string, for all 100 typed properties.
- **Positive:** An implementer references one published document rather than hand-authoring a context per package.
- **Address retirement:** The v0.4.0 context path retires at v0.5.0 rather than redirecting. A consumer holding the v0.4.0 document moves to the v0.5.0 one when the namespace changes.
- **Requirements:** The context is a generated artifact. It regenerates on an ontology change alongside the data dictionary, so a vocabulary change that adds or retypes a typed property updates the context in the same regeneration.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-28 entry ("a published JSON-LD context").
- Context artifact: `context/urpx-context.jsonld`, the generated document.
- Examples: the twelve `test-cases/*/data/*.jsonld` reference the published context and keep only the identity prefixes each defines for itself.
- Related: Decision #133 (`targetURPXVersion`, the version an example declares, which the context coerces to `xsd:anyURI` like every other typed property).

---

<a id="decision-136"></a>
### Decision #136: The Validation Unit Is The Declared Set

- **Status:** Accepted (pre-Draft)
- **Date:** 2026-08-15
- **Issue:** No shipped document stated what a conforming URPX document is. An implementer validating one file of a multi-file set against the shapes, and getting failures, had nothing telling them that a single file of a set is not the unit that validates.
- **Category:** Validation, Conformance

**Context:**
URPX content is exchanged both as a single self-contained document and as a set of documents that reference one another. The ConEd example is nine files: an identity, a delivery filing, a resolved snapshot and a statement chain, each a document in its own right, together describing one rate as applied. A PG&E example is a single file. The shapes are the same in both cases; what differs is how much of the graph any one file holds.

**Decision:**
The validation unit is the declared set, not the file. A set an author declares as several files validates as the union of those files, read as one graph. A document that is genuinely one file validates alone. Conformance is judged over the unit an author declares, so the nine-file ConEd set conforms as one graph and a single-file PG&E rate plan conforms on its own.

**Options Considered:**

1. **Validate the declared set as one graph (Selected).**
   - Pro: It matches how URPX data is exchanged. A referencing document is completed by the documents it references, and the set is what carries a whole rate as applied.
   - Pro: A single document is the same rule with a declared set of one file, so one statement covers both shapes of data.

2. **Require every file to conform on its own.** Rejected. A file holding part of a set is missing exactly the nodes the rest of the set supplies, so requiring per-file conformance would fail ordinary, correct data for referencing nodes that live in a sibling file.

**Rationale:**
- A closed shape reports the properties a node is missing. It cannot report that the reader brought the wrong unit, because a file holding part of a set is missing exactly the nodes the rest of the set supplies, and the shape has no way to say those nodes are elsewhere rather than absent. The unit therefore has to be stated, not inferred from a validation failure.
- Cross-document references are the ordinary shape of URPX data: a snapshot references the filing it resolves, a statement references the rate it bills. Validating a referencing file alone would report every referenced node as missing, which is a statement about the unit, not about the data.
- A single document validating alone is the same rule, not an exception: its declared set is one file.

**Consequences / Impact:**
- A consumer validates the declared set as one graph. Loading one file of a multi-file set and validating it in isolation is expected to report failures, and those failures are about the unit rather than the data.
- The rule states what conformance is judged over. It adds no shape and changes no shape: the same shapes apply, over the union an author declares.

**References:**
- Test cases: the nine-file ConEd set under `test-cases/coned-sc1-rate-i/` validates as one graph, and the single-file PG&E rate plans validate alone.
- Related: Decision #133 (`packages`, the containment property through which a package names the units it carries as one declared set).
