<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX v0.2.0 Release Notes

**Released:** 2026-05-01  
**Updated:** 2026-05-07  
**Type:** Pre-draft release  
**Previous public release:** None

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.2.0 is a substantial pre-draft update focused on clearer price modeling, a fully reworked structured condition architecture, stronger SHACL validation, and better documentation for implementers and reviewers.

Compared with earlier pre-release drafts, this release is not backward-compatible. Existing URPX datasets should be reviewed and migrated before being treated as v0.2.0-conformant.

---

## Release Artifacts

Source files:

- `ontology/urpx-ontology.ttl`
- `shacl/urpx-shacl.ttl`

Published payloads:

- `https://urpx-org.github.io/urpx/ontology/releases/v0.2.0/ttl/urpx-ontology.ttl`
- `https://urpx-org.github.io/urpx/ontology/shacl/releases/v0.2.0/ttl/urpx-shacl.ttl`

---

## Highlights

- Reworked the billing model so `PriceDefinition` is owned by `BillingModel` and linked to its ledger with `urpx:referencesLedger`.
- Replaced the legacy condition model with the rooted `ConditionExpression` architecture used across eligibility, applicability, and profile-alternative contexts.
- Tightened eligibility modeling so each `EligibilityRule` uses a single `ConditionExpression`, and direct profile links on rules are no longer valid.
- Retired direct `ApplicabilityGroup` selector properties in favor of `ConditionExpression` over profile-based properties.
- Added `ServiceBracket` so tier bounds move off `ServiceTier` and can vary by context.
- Added `GeneralRule` for reusable tariff-book-level shared rules.
- Added `RateCase` and datetime provenance properties to improve regulatory and source traceability.
- Renamed identifier properties to make uniqueness explicit and added required `urpx:targetURPXVersion` on `URPXDocument`.
- Added `customerChoice` and `isDefault` semantics for rate plan versions.
- Renamed `numberOfMeters` to `meterCount`, renamed `numberOfOccupants` to `occupancyCount`, and removed `demandThreshold`.
- Expanded the documentation set with condition modeling, quality assurance, and test-data review guidance.

---

## Breaking Changes

If you maintain datasets or downstream tooling, pay particular attention to these changes:

1. `PriceDefinition` ownership moved from `Ledger` to `BillingModel`.
   Existing data must move definitions to the billing model layer and add `urpx:referencesLedger`.

2. The applicability condition model was replaced.
   Legacy constructs such as `hasCondition`, `hasConditionLogic`, legacy terminal-node patterns, earlier applicability/dimension-value structures, and direct `ApplicabilityGroup` selector properties were removed in favor of `ConditionExpression`, `rootNode`, `ComparisonNode`, `BooleanOperationNode`, typed operand nodes, and profile-based condition properties.

3. Eligibility rules now require a single `ConditionExpression`.
   `EligibilityRule` must use `urpx:hasConditionExpression`, and direct `hasCustomerProfile` / `hasServicePointProfile` links on `EligibilityRule` are no longer valid.

4. Tier bounds moved to `ServiceBracket`.
   `lowerBound`, `lowerBoundOperator`, `upperBound`, and `upperBoundOperator` no longer belong on `ServiceTier`. Bound data must move to one or more `ServiceBracket` nodes, with `referencesServiceBracket` used where exact bracket linkage is needed.

5. Identifier properties were renamed.
   `ratePlanIdentifier` became `ratePlanUniqueIdentifier`, and `modifierIdentifier` became `modifierUniqueIdentifier`.

6. `URPXDocument` now requires `targetURPXVersion`.
   Documents should point to the ontology version they were authored against using the raw tagged ontology URL, for example:
   `https://github.com/urpx-org/urpx/raw/v0.2.0/ontology/urpx-ontology.ttl`

7. Enrollment/default semantics changed.
   `isOptional` was removed in favor of `customerChoice` and `isDefault` on `RatePlanVersion`.

8. Profile count terminology and threshold handling changed.
   `numberOfMeters` became `meterCount`, `numberOfOccupants` became `occupancyCount`, and `demandThreshold` was removed.

9. Eligibility profile inputs moved to `Scenario` for eligibility evaluation for an individual customer or scenario. `hasCustomerProfile` and `hasServicePointProfile` no longer belong directly on `EligibilityRule`, eligibility conditions are expressed on `EligibilityRule` using `hasConditionExpression`.
---

## Migration Guidance

To migrate an older pre-release dataset to `v0.2.0`:

- move `PriceDefinition` instances under `BillingModel`
- add `urpx:referencesLedger` to every `PriceDefinition`
- replace legacy rule condition structures with a single `urpx:hasConditionExpression` on each `EligibilityRule`
- migrate retired `ApplicabilityGroup` selector properties to `ConditionExpression` over `CustomerProfile` / `ServicePointProfile` properties
- move tier bounds from `ServiceTier` to `ServiceBracket` and add `urpx:hasServiceBracket` where tier bounds are authored
- rename legacy identifier properties
- replace `isOptional` with `customerChoice` and `isDefault`
- rename `numberOfMeters` to `meterCount` and `numberOfOccupants` to `occupancyCount`
- remove `demandThreshold` and express threshold logic through rules / metric patterns
- add `urpx:targetURPXVersion` to `URPXDocument` using:
  `https://github.com/urpx-org/urpx/raw/v0.2.0/ontology/urpx-ontology.ttl`
- rerun SHACL validation against [`shacl/urpx-shacl.ttl`](/ontology/urpx-shacl.ttl)

The updated PG&E E-ELEC example under [`test-cases/`](https://github.com/urpx-org/urpx/tree/main/test-cases) can be used as a current-model reference.

---

## Validation and Documentation

v0.2.0 strengthens validation and reviewer support:

- SHACL coverage was expanded to match the new billing, condition, applicability, service-bracket, identifier, and provenance models.
- [`urpx-condition-modeling.md`](urpx-condition-modeling.md) documents the current structured condition pattern.
- [`urpx-quality-assurance.md`](urpx-quality-assurance.md) summarizes validation expectations.
- [`urpx-test-data-review-guide.md`](urpx-test-data-review-guide.md) provides a tariff-book-to-URPX review workflow for test cases.
- [`urpx-data-dictionary.md`](urpx-data-dictionary.md) was refreshed for the v0.2.0 ontology surface.

---

## Repository and Governance Updates

This release also adds project-level governance and licensing metadata:

- REUSE licensing metadata and public-record handling for third-party tariff-book source material
- `TRANSITION.md` documenting the planned post-Draft license transition
- updated `CONTRIBUTING.md`, `SECURITY.md`, and `AGENTS.md`

These changes do not alter the URPX data model, but they do affect repository hygiene, review workflow, and release readiness.

---

## References

- [`urpx-changelog.md`](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
- [`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md)
- [`urpx-condition-modeling.md`](urpx-condition-modeling.md)
- [`urpx-quality-assurance.md`](urpx-quality-assurance.md)
- [`urpx-test-data-review-guide.md`](urpx-test-data-review-guide.md)
