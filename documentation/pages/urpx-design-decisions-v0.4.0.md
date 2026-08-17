<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX (Utility Rate Plan Exchange) Design Decisions Log — v0.4.0

**Version:** 0.4.0 (unreleased, pre-Draft)

This page records design decisions for v0.4.0. Starting with v0.3.0, each major and minor version has its own design-decision log page.

The prior, dated record (decisions #001 through #111) remains in [`urpx-design-decisions-001-040.md`](urpx-design-decisions-001-040.md), [`urpx-design-decisions-041-080.md`](urpx-design-decisions-041-080.md), and [`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md), which are organized in blocks of forty. Decisions #121 through #131 are recorded on [`urpx-design-decisions-v0.3.0.md`](urpx-design-decisions-v0.3.0.md).

Decision numbering continues across pages; this page begins at Decision #132.

---

## Decision Index

- Decision #132: One Identifier Pattern Across Organization, Rate Plan, and Rate Plan Modifier
- Decision #133: The Exchange Package Carries Every Exchangeable Unit Through One Property

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
- **Residual redundancy:** A rate plan or a modifier can be carried by either `packages` or the retained property, so a consumer reading package contents checks both paths.
- **Requirements:** No class is minted or renamed, so the website codegen dictionary configuration needs no `sections:` change and the regeneration does not halt. The retired property and the new one both appear in the generated data dictionary and diagrams, so those artifacts regenerate.

**References:**
- Changelog: `urpx-changelog.md`, 2026-08-17 entry ("the exchange package carries every unit").
- Ontology (`ontology/urpx-ontology.ttl`): `urpx:packages` and its union range; the removed `urpx:hasTariffPublication`.
- SHACL (`shacl/urpx-shacl.ttl`): `URPXPackageShape` admits `urpx:packages` through `sh:or`; the removed `hasTariffPublication` property block.
- Test cases: `test-cases/pge-e-tou-c/data/urpx-rate-plan_pge_e-tou-c.jsonld` carries the source publication on `urpx:packages`.
- Related: Decision #121 (the `PricingModel`, `TariffFiling`, and `SourcePublication` architecture, which is why an authored filing is not reached through the external document path); Decision #131 (the widened inverse range, the prior case of the entailment that rules out widening an inverse-declared property's domain).
