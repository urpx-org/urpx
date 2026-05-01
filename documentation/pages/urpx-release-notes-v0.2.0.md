<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX v0.2.0 Release Notes

**Released:** 2026-05-01  
**Type:** Pre-draft release  
**Previous release:** `v0.1.2`

[← Back to Index](../index.md)

---

## Overview

URPX v0.2.0 is a substantial pre-draft update focused on clearer price modeling, a fully reworked structured condition architecture, stronger SHACL validation, and better documentation for implementers and reviewers.

Compared with `v0.1.2`, this release is not backward-compatible. Existing URPX datasets should be reviewed and migrated before being treated as v0.2.0-conformant.

---

## Highlights

- Reworked the billing model so `PriceDefinition` is owned by `BillingModel` and linked to its ledger with `urpx:referencesLedger`.
- Replaced the legacy condition model with the rooted `ConditionExpression` architecture used across eligibility, applicability, and profile-alternative contexts.
- Added `Scenario` to hold customer-profile and service-point-profile inputs used during eligibility evaluation.
- Added `GeneralRule` for reusable tariff-book-level shared rules.
- Added `RateCase` and datetime provenance properties to improve regulatory and source traceability.
- Renamed identifier properties to make uniqueness explicit and added required `urpx:targetURPXVersion` on `URPXDocument`.
- Added `customerChoice` and `isDefault` semantics for rate plan versions.
- Expanded the documentation set with condition modeling, quality assurance, and test-data review guidance.

---

## Breaking Changes

If you maintain datasets or downstream tooling, pay particular attention to these changes:

1. `PriceDefinition` ownership moved from `Ledger` to `BillingModel`.
   Existing data must move definitions to the billing model layer and add `urpx:referencesLedger`.

2. The condition model was replaced.
   Legacy constructs such as `hasCondition`, `hasConditionLogic`, legacy terminal-node patterns, and earlier applicability/dimension-value structures were removed in favor of `ConditionExpression`, `rootNode`, `ComparisonNode`, `BooleanOperationNode`, and typed operand nodes.

3. Eligibility profile inputs moved to `Scenario`.
   `hasCustomerProfile` and `hasServicePointProfile` no longer belong directly on `EligibilityRule`.

4. Identifier properties were renamed.
   `ratePlanIdentifier` became `ratePlanUniqueIdentifier`, and `modifierIdentifier` became `modifierUniqueIdentifier`.

5. `URPXDocument` now requires `targetURPXVersion`.
   Documents should point to the ontology version they were authored against.

6. Enrollment/default semantics changed.
   `isOptional` was removed in favor of `customerChoice` and `isDefault` on `RatePlanVersion`.

7. Profile count terminology changed.
   `numberOfMeters` became `meterCount`, and `numberOfOccupants` became `occupancyCount`.

---

## Migration Guidance

To migrate a `v0.1.2` dataset to `v0.2.0`:

- move `PriceDefinition` instances under `BillingModel`
- add `urpx:referencesLedger` to every `PriceDefinition`
- replace legacy condition structures with `urpx:hasConditionExpression`
- rename legacy identifier properties
- add `urpx:targetURPXVersion` to `URPXDocument`
- rerun SHACL validation against [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)

The updated PG&E E-ELEC example under [`test-cases/`](../../test-cases/) can be used as a current-model reference.

---

## Validation and Documentation

v0.2.0 strengthens validation and reviewer support:

- SHACL coverage was expanded to match the new billing, condition, scenario, identifier, and provenance models.
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

- [`urpx-changelog.md`](../../urpx-changelog.md)
- [`urpx-design-decisions-081-120.md`](urpx-design-decisions-081-120.md)
- [`urpx-condition-modeling.md`](urpx-condition-modeling.md)
- [`urpx-quality-assurance.md`](urpx-quality-assurance.md)
- [`urpx-test-data-review-guide.md`](urpx-test-data-review-guide.md)
