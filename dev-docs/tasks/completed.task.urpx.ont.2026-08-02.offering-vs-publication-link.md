---
id: taskurpxontofferingvspublicationlink
title: "Separate offering from publication on the plan-to-organization link"
desc: "Rename publishedBy to offeredBy on the pricing model, plan, modifier, and both version snapshots; rename publishes to offers, widen its range to match, and declare the pair owl:inverseOf; make the link optional in both directions; re-home publishedBy onto the artifacts that are published. Applied to the unreleased v0.3.0 before the initial public tag. Records Decision #131."
updated: 1785628800000
created: 1785628800000
---

# Separate offering from publication on the plan-to-organization link

| Field | Value |
|-------|-------|
| **Status** | Completed — applied to the unreleased v0.3.0 before the initial public tag |
| **Assignment** | Flux Tailor |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, five documentation pages, five test-case fixtures, two development samples |
| **Decision** | [Decision #131](../../documentation/pages/urpx-design-decisions-v0.3.0.md#decision-131) |
| **Changelog** | `urpx-changelog.md`, 2026-08-02 entry |

## Problem

`publishedBy` was the only organization link on `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, and `RatePlanModifierVersion`. Every fixture that asserted it named the utility whose plan it is: `org:consolidated-edison` on the ConEd service classifications, `org:utility-pge` on the PG&E schedules.

Its definition said something else. It read "Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version," so the vocabulary asserted publication about the one thing in the chain that is not published.

Consider an URPX rate plan built from a utility's tariff PDF. Con Edison is correctly the utility for the plan. What Con Edison published is the PDF. The rate plan is a model of the terms that PDF states, and it is not itself an artifact anyone published.

Two gaps followed. `URPXPackage` carried no organization link at all. `SourcePublication` named its publisher only through `issuingAuthority`, an `xsd:string`, so the publisher of a tariff book could not be referenced as an `Organization` IRI while the plan it states could.

On the organization side an undeclared, narrower twin already existed: `publishes`, with domain `Organization` and range `RatePlan`, admitted by five organization-family shapes and asserted by no data.

## What changed

**`offeredBy` names the offering party.** Domain `PricingModel ∪ RatePlan ∪ RatePlanModifier ∪ RatePlanVersion ∪ RatePlanModifierVersion`, range `Organization`, at most one. It is the utility or supplier that makes the pricing available for service, whether as a regulated tariff or a competitive supply product.

**`offers` is its declared inverse,** with a range matching that domain exactly.

The match is load-bearing. `RatePlan` is `owl:disjointWith` `RatePlanVersion`, so had `offers` kept its old `RatePlan` range under a declared inverse, asserting `offeredBy` on a snapshot would have entailed that the snapshot is a `RatePlan`. This is the unsound-entailment pattern removed from `isReferencedByPricingModel` in the 2026-07-29 changelog entry.

**Both directions are optional.** The version shapes previously required the link at `minCount 1` and now admit it at `minCount 0`. URPX is used for teaching, sandbox, and research data that models no real utility; requiring an organization would make a synthetic plan invalid for want of a party that does not exist.

**`publishedBy` moves to the artifacts that are published:** `PricingModel ∪ TariffFiling ∪ SourcePublication ∪ URPXPackage`. A `PricingModel` carries both properties, being an authored unit that is itself published. Where a model sits inside a filing, the filing carries the publisher. Where a source's publisher differs from its approving body, `issuingAuthority` continues to name the latter.

**Naming.** `offeredBy` and `offers` align with schema.org by reference; URPX does not import schema.org. The vocabulary already described these organizations this way — the `EnergyServiceProvider` note reads "Offer rate plans and DER rate plan modifiers but typically don't own distribution infrastructure."

**Scope note.** The tutorial and FAQ section that distinguished a rate plan from a customer-facing product now states the scope directly: URPX represents rate plan data, not the event-based adds, drops, and updates applied to customer profiles as enrollments start, change, and end. `CustomerProfile` and `ProgramEnrollment` carry the state eligibility is evaluated against, not a transaction feed.

## Applied surface

**Ontology.** Added `offeredBy` and `offers`; removed `publishes`; re-homed `publishedBy` with a rewritten comment and note.

**SHACL.** `PricingModelShape`, `RatePlanShape`, `RatePlanModifierShape`, `RatePlanVersionShape`, and `RatePlanModifierVersionShape` take `offeredBy` at `minCount 0`. `OrganizationShape`, `EnergyServiceProviderShape`, `RegulatoryAuthorityShape`, `SystemOperatorShape`, and `UtilityOperatorShape` take `offers` as an `sh:or` over the five classes. `PricingModelShape`, `TariffFilingShape`, `SourcePublicationShape`, and `URPXPackageShape` take `publishedBy`. All of these shapes are closed, so the blocks are what make the properties assertable.

**Data.** Fifteen key renames across `test-cases/coned-sc1-rate-i/` (two files), `test-cases/coned-sc1-rate-i-supply-ref/`, `test-cases/pge-e-elec/`, `test-cases/pge-e-tou-c-2026-03-01/`, and the `comed-rrtp-hdp` and `pge-b6-pdp-event` development samples.

**Documentation.** `urpx-api-spec.md` and `urpx-tutorial.md` (worked JSON-LD), `urpx-quality-assurance.md` and `urpx-tutorial.md` (the link leaves the `RatePlanVersion` required-property lists), `urpx-faq.md` and `urpx-tutorial.md` (the scope note), and `urpx-release-notes-v0.3.0.md`. `urpx-data-dictionary.md` and the test-case diagrams regenerate from the ontology and are not hand-edited.

## Migration

1. Rename the `publishedBy` key to `offeredBy` on pricing models, rate plans, rate plan modifiers, and both version snapshots.
2. Rename `publishes` to `offers` on organizations.
3. On pricing models, filings, sources, and packages, `publishedBy` keeps its name and now has a shape that admits it.

No data becomes invalid for want of an organization: the link is optional everywhere it appears. The two renamed keys are breaking, and land before the initial public tag, so no released vocabulary is affected.

## Verification

- Both Turtle files parse. All four test cases validate as merged graphs, and per-file conformance is unchanged from before the edit set across every fixture and development sample.
- A minimal instance asserting `offeredBy` on all five subject classes, `offers` on an organization, and `publishedBy` on a pricing model, filing, source, and package raises no violation on those paths. The same instance under the previous names raises closed-shape violations, confirming the shapes moved rather than admitting both.
- Under OWL RL, `offeredBy` on a `RatePlanVersion` entails the `offers` direction and does not entail that the snapshot is a `RatePlan`. With the range left at `RatePlan`, the same instance entails it, which is what the widening prevents.
