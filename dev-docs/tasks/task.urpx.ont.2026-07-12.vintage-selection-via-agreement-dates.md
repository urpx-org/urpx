---
id: taskurpxontvintageselectionagreementdates
title: "Vintage-keyed price selection via agreement dates (PCIA-style cohort pricing)"
desc: "Backlog: replace the custom-string vintage selector in the PG&E E-TOU-C test case with typed conditions over the customer's bundled-service AccountServiceAgreement dates; extend the serviceRole domain to AccountServiceAgreement to enable it. Current modeling validates and stays acceptable until this lands."
updated: 1783814400000
created: 1783814400000
---

# Vintage-keyed price selection via agreement dates

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; the current modeling validates and is acceptable in the interim |
| **Surface** | `ontology/urpx-ontology.ttl` (one domain extension + notes), `test-cases/pge-e-tou-c/` (condition rewrite), SHACL follow-through |

## Current state

The vintaged Power Charge Indifference Adjustment in
`test-cases/pge-e-tou-c/` is one `PriceDefinition` whose per-kWh
value varies by the customer's bundled-service departure vintage year. The
test case models the eighteen vintage rows as `PriceSetAlternative`s selected
through `ProfileAlternative`s, and each selection condition compares a
`CustomOperandNode` carrying the custom string `"departureVintage"` against a
year value.

This validates — `CustomOperandNode` is the documented fallback when no
suitable vocabulary property exists — but the selector itself is not part of
the vocabulary: an implementer evaluating the condition tree has nothing that
defines `"departureVintage"`. The structure works; the selection semantics are
not machine-evaluable.

## Proposed fix

The departure vintage is already implied by data the model can carry: it is
the year the customer's **bundled-service agreement ended**. Select on the
agreement, not on a custom string:

1. **Extend the `urpx:serviceRole` domain to include
   `urpx:AccountServiceAgreement`** (currently `RatePlan | RatePlanModifier |
   RatePlanVersion | RatePlanModifierVersion | EnergyServiceProvider |
   PriorRatePlan`), so the agreement whose role is `urpx:bundledServiceRole`
   is identifiable among a customer's agreements.
2. **Express each vintage condition over the bundled agreement's
   `urpx:contractExpirationDate`** with the existing comparison operators —
   for vintage 2009: `contractExpirationDate` `greaterThanOrEqualOperator`
   2009-01-01 AND `lessThanOperator` 2010-01-01 (or a single
   `betweenOperator`). No new date property is needed:
   `contractEffectiveDate` / `contractExpirationDate` already exist on
   `AccountServiceAgreement`.
3. **State the evaluation semantics** in a `skos:note`: condition operands may
   reference properties of the agreements bound to the scenario
   (`hasAccountServiceAgreement`, the existing-account case). Say how the
   bundled agreement is picked when a customer has several agreements, and
   that a scenario with no bundled-service agreement history (for example a
   prospect quote) matches no vintage row.
4. **Rewrite the eighteen test-case conditions** to the typed form. The
   `ProfileAlternatives` wrapper itself stays — it works; whether a leaner
   price-level cohort key is worth introducing is a separate design question
   and is out of scope here.

## Acceptance

1. No `CustomOperandNode` remains in the vintage selection path of
   `test-cases/pge-e-tou-c/`; every condition references declared
   vocabulary terms only.
2. `urpx:serviceRole` domain includes `AccountServiceAgreement`; annotation
   notes updated; changelog entry under Ontology Changes.
3. Full test-case validation matrix passes.
4. Regenerated documentation picks up the domain change.
