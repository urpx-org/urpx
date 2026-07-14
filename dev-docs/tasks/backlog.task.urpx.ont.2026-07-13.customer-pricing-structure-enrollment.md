---
id: taskurpxontcustomerpricingstructureenrollment
title: "Customer pricing structure: enrollment links and the metering-data bridge"
desc: "Backlog: make which rate plans and modifiers a customer is enrolled in, per usage point and per service role (delivery vs. supply), a transferable URPX artifact — a Scenario extension with reified enrollment links and a bridge property from AccountServiceAgreement, referencing external metering data (e.g. Green Button) by URI rather than restating it."
updated: 1783900800000
created: 1783900800000
---

# Customer pricing structure + enrollment

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 design work |
| **Surface** | `ontology/urpx-ontology.ttl` + SHACL (`Scenario`, `AccountServiceAgreement`, enrollment vocabulary), one worked example |
| **Related** | `task.urpx.ont.2026-07-12.vintage-selection-via-agreement-dates.md` (extends `serviceRole` to `AccountServiceAgreement` — the same enabler) |

## Problem

There is no structured way to state a customer's **enrolled pricing
structure**: which rate plan(s) and modifier(s) apply, at which usage
point, in which service role (delivery vs. retail supply vs. bundled),
over which period. In restructured markets an analyst often knows the
delivery rate plan but not the retail supply contract; a transferable,
privacy-preserving artifact carrying whichever parts are known would ride
alongside metering-data exchanges (such as Green Button) without
duplicating them.

## Approach

1. **Widen `Scenario`, don't fork it.** `Scenario` already holds the
   customer/service-point inputs for evaluation; let it also carry the
   enrolled structure, with its own start/end so it reads standalone.
   Update the class note so the evaluation-input meaning is preserved.
2. **Enrollment as a reified link**, most likely through
   `AccountServiceAgreement` (its stated purpose): usage-point reference
   (external URI), the enrolled rate plan or rate plan modifier, a
   `serviceRole`, and validity dates. Do **not** reuse the
   document-containment `hasRatePlan` for enrollment.
3. **Bridge property** from `AccountServiceAgreement` (and/or
   `CustomerProfile`) to the `Scenario`, by URI or inline.
4. **Reference, don't restate, metering data.** Usage points and
   meter-level detail stay external URIs; the scenario must remain useful
   with the supply side absent (unknown or withheld).

## Acceptance

1. A worked example: one customer with a delivery rate plan at one usage
   point and an export-crediting modifier at another, supply unknown,
   validating end to end.
2. Recorded decisions on the `Scenario` widening and the enrollment link
   shape; class notes updated.
