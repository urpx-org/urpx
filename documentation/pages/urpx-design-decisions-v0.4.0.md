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
