---
id: taskurpxontchargeclassificationadditions
title: "Additional charge classification members (second tranche)"
desc: "Backlog: additive ChargeTypeValue and MeasurementTypeValue members beyond the reactive/apparent set already shipped — adopt each when a real test case first needs it."
updated: 1783900800000
created: 1783900800000
---

# Additional charge classification members

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; purely additive, no existing IRIs change |
| **Surface** | `ontology/urpx-ontology.ttl` (`owl:oneOf` lists + individuals), SHACL `sh:in` lists, charge-tag combinations CSV, data dictionary |

## Problem

The v0.3.0 charge classification covers the common tariff line items,
including the reactive/apparent measurement set. A second tranche of
recurring real-world line items remains unrepresentable as typed charges:

- `ChargeTypeValue` candidates: `apparentDemand`, `interconnectionCharge`,
  an exit / departing-load charge, a low-income discount, a
  `disconnectionCharge`, `franchiseFee`, `balancingAccountAdjustment`,
  `climateCredit`.
- `MeasurementTypeValue` candidate: `apparentEnergy`.

## Approach

Adopt **on demand**: when a test case or adopter first needs one of these,
add that member (enum `owl:oneOf`, typed individual, both SHACL `sh:in`
lists, combinations CSV row, dictionary regen) in one small additive change.
Resist adding the whole tranche speculatively — each member should enter
with at least one real line item that exercises it. Naming decisions
(e.g. exit fee vs. departing-load charge; which discount name) are made at
adoption time against the real source document's language.

## Acceptance (per member adopted)

1. Enum member + individual + both `sh:in` lists + combinations CSV row are
   consistent.
2. At least one test-case line item carries the new member and validates.
3. Changelog and regenerated documentation reflect the addition.
