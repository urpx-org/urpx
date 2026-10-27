<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

---
site_category: getting-started
site_id: faq
site_title: "FAQ"
site_position: 4
---

# Frequently Asked Questions

**Q: What is a semantic web standard?**

A semantic web standard uses RDF (Resource Description Framework) to express data as interconnected graphs rather than flat tables or documents. This enables machines to understand relationships and context, not just data values.

**Q: Do I need to learn RDF to use URPX?**

No. URPX uses JSON-LD, which looks like regular JSON. The ontology and the SHACL shapes are RDF, and standard libraries handle the RDF semantics. Developers work with familiar JSON; semantic interoperability happens through the library.

**Q: How does URPX relate to OpenEI's URDB?**

URPX builds on [OpenEI's](https://openei.org) pioneering work in utility rate plan data accessibility. While OpenEI provides an excellent JSON format and comprehensive rate plan database, URPX adds:
- Formal ontology (machine-readable definitions)
- SHACL validation (automatic quality checks)
- SPARQL queries (powerful data analysis)
- Standards alignment (SKOS mapping profiles to Schema.org, Green Button, CIM and others; see [Interoperability](urpx-interoperability.md))

Both projects share the goal of making rate plan data more accessible. URPX can consume summary OpenEI charges data and align it with detailed URPX charges and rich semantic metadata.

**Q: What's the difference between a rate plan, a tariff, and a price?**

- **Rate Plan**: A complete package with all parameters needed to calculate customer cost (prices, schedules, eligibility rules). The rate plan is the first-class thing URPX models.
- **Tariff**: A regulatory document (tariff book) containing material from one or more rate plans. In URPX, tariffs are publication vehicles (places where parts of a rate plan appear), not the plan itself.
- **Price**: A single value applied to something measured or counted (e.g., $0.12/kWh), incomplete without the full rate plan context.

Rate plan data comes from many kinds of published sources: tariff books (primary), tariff statements, supplements, addenda, supply price sheets, and market price feeds. URPX models each of these as a `SourcePublication` whose kind is given by the `publicationType` enumeration (`tariffBook`, `tariffStatement`, `tariffSupplement`, `tariffAddendum`, `supplyCharges`, `derExports`, `highlyDynamicPrices`, `marketPriceFeed`). See the [Terminology](#terminology) section below for why URPX never uses the bare word "rate".

**Q: What is the difference between a rate plan and a rate plan modifier?**

A rate plan (`RatePlan`) is the base service a customer is on. A rate plan modifier (`RatePlanModifier`) is a separately published layer (a rider, discount, credit, or adjustment) that modifies a base rate plan rather than standing alone. Each is independently identified, versioned, and sourced: a `RatePlanModifierVersion` links back to its modifier identity via `forRatePlanModifier`, the same way a `RatePlanVersion` links back to its rate plan via `forRatePlan`. See the tutorial's [Rate Plan vs Rate Plan Modifier](urpx-tutorial.md#rate-plan-vs-rate-plan-modifier) section for the full rationale, including why URPX composes plans and modifiers instead of modeling every combination as its own plan.

**Q: Does URPX cover customer enrollment in a rate plan?**

No. URPX represents rate plan data: the plan, its modifiers, the pricing that applies, and the conditions under which it applies. It does not represent the event-based data that moves customers between plans, the adds, drops, and updates applied to customer profiles as enrollments start, change, and end. `CustomerProfile` and `ProgramEnrollment` carry the characteristics and enrollment state that eligibility is evaluated against, not a transaction feed. See the tutorial's [Scope: Rate Plan Data, Not Enrollment Events](urpx-tutorial.md#scope-rate-plan-data-not-enrollment-events) section for more detail.

**Q: Can URPX work with my existing systems?**

Yes. URPX publishes SKOS mapping profiles to other standards: the Schema.org profile is published, and Green Button and LF Energy CDS profiles are in draft under working group review. See [Interoperability](urpx-interoperability.md). You can also create custom mappings for proprietary formats.

**Q: What tools do I need to work with URPX?**

- JSON-LD processor (many languages)
- SHACL validator (for data quality)
- SPARQL endpoint (optional, for queries)
- Standard development tools (your IDE, version control)

**Q: What is the current status of URPX?**

URPX v0.5.1 has completed the Working Group Draft transition. See [TRANSITION.md](../../TRANSITION.md) for the transition record. The working group continues to refine the ontology and validation rules. You can follow progress and contribute at the [urpx-org GitHub organization](https://github.com/urpx-org):
- **urpx** - The standard: ontology, SHACL shapes, JSON-LD context, documentation, and curated test cases
- **urpx-dev** - The development record: specifications, tasks, reports, roadmaps, and design-decision logs
- **urpx-data-sandbox** - Community-contributed rate plan datasets, checked for conformance to the URPX version they declare
- **urpx-wg** - Working group materials: meeting agendas, notes, and branding

**Q: How can I participate in URPX development?**

Join the working group via [urpx-org on GitHub](https://github.com/urpx-org). You can contribute through:
- Reviewing and commenting on ontology designs
- Testing with real-world rate plan data
- Creating mappings for additional standards
- Improving documentation and examples

## Terminology

### "Rate Plan" and "Price" vs. "Tariffs & Rates"

Throughout URPX documentation and the ontology, the term **"rate plan"** is used as the standardized terminology, and the bare word "rate" is never used on its own. This distinction is deliberate and important. While URPX supports the current "dispersed" methods of rate plan publication, it is built for automation and designed to prioritize future-proofing. The lack of standardization in what "tariffs" and "rates" mean and the dispersed non-standard nature of their publication make them incompatible with URPX goals: to make it possible to accurately model cost for a scenario, and to analyze rate plans across utility territories.

**Rate Plan** (URPX Standardized Term):
- A complete package containing **all parameters** needed to calculate customer cost
- Includes: prices, time-of-use schedules, service tiers, seasonal variations, eligibility rules, and applicability conditions
- States its **coverage**: a required `CoverageClaim` says how complete each version snapshot is
- One semantic unit per snapshot for billing and analysis, with external references made explicit

**Price** (URPX Standardized Term):
- A single value applied to something measured or counted (e.g., $0.15/kWh, an $18.75 monthly charge)
- Modeled by the `Price` class and grouped in `PriceSet`s
- Incomplete without the full rate plan context

**Why URPX avoids the bare word "rate".** In everyday utility usage, "rate" can mean at least three different things:

1. A **single per-unit value**: "the summer rate is $0.15/kWh"
2. A **named grouping inside a service classification**: "Rate I", "Rate II"
3. The **whole plan**: "switch to the EV rate"

One word carrying three meanings is exactly the kind of ambiguity a data exchange standard exists to remove. So URPX gives each meaning its own unambiguous term: a single value is a **price** (`Price`, grouped in a `PriceSet`); the complete package is a **rate plan** (`RatePlan`); and the named grouping is a **rate group**:

**Rate Group** (`RateGroup`):
- The named grouping within a service class that utilities themselves often call a "rate", for example, *Rate I* within *Service Classification No. 1*
- A subdivision of a service class, not a kind of service class: Rate I is not a type of SC 1, it is a grouping inside it (`parentServiceClass` points from the rate group to its service class)
- A rate plan links to its grouping via `hasRateGroup`, so when a utility's published material says "SC 1 Rate I", the plan maps directly to that published grouping, without importing the ambiguous word "rate" into any other part of the model

Compound terms of art keep their established names: "rate case" (a regulatory proceeding, `RateCase`), "rate-setting", and utilities' own published names such as "Rate I" are used as-is.

**Examples:**

**Correct Usage:** "The residential rate plan includes energy prices, demand prices, and time-of-use periods"

**Correct Usage:** "SC 1 Rate I" (the utility's published rate group name)

**Ambiguous Usage:** "The residential rate is $0.15/kWh" (incomplete - missing TOU periods, tiers, and other prices; say "the residential energy price")

**Relationship to "Tariff":**
URPX uses "tariff" for formal regulatory documents (tariff books, tariff statements, supplements, addenda), while "rate plan" refers to the semantic structure containing complete pricing information. A tariff document may contain material from multiple rate plans. In URPX these published sources are `SourcePublication`s, with the kind of publication given by the `publicationType` enumeration.

**Ontology Alignment:**
- `RatePlan` class = the stable identity of the plan, independent of time
- `PricingModel` class = an authored, citable statement of pricing carried by a publication (possibly partial)
- `RatePlanVersion` class = the derived, complete snapshot of resolved plan facts for a temporal window, linked to its plan via `forRatePlan`
- `RateGroup` class = the utility's own published grouping, linked via `hasRateGroup`
- Clear terminology ensures semantic precision for standards review

This standardized terminology provides clarity for implementers and makes each snapshot's coverage explicit.
