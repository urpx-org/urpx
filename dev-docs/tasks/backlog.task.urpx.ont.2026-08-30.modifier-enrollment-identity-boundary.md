---
id: taskurpxontmodifierenrollmentidentityboundary
title: "Rule the modifier-enrollment identity boundary and align per-rider enrollment"
desc: "Backlog: NAESB ESPI V4's per-rider enrollment (TariffRiderRefs) has no URPX join between a stable RatePlanModifier identity and an enrollment record. The three status closeMatch pairings are settled; the identity boundary (widen ProgramEnrollment to reference a modifier, or mint a relator) is not, and the riderType free-string and epoch-seconds effectiveDate need handling. Post-v0.4.0; not launch-gating."
updated: 1788134400000
created: 1788134400000
---

# Rule the modifier-enrollment identity boundary and align per-rider enrollment

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.4.0 |
| **Assignment** | Unassigned — open for any working-group member to pick up |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, `skos/standards-integration/urpx-green-button-mappings.ttl` |
| **Source** | NAESB ESPI V4 `TariffRiderRefs` / `TariffRiderRef` (`espi_v4.xsd`) |
| **Spec** | [spec.urpx.ont.049.modifier-enrollment-identity-boundary.md](../specs/spec.urpx.ont.049.modifier-enrollment-identity-boundary.md) |

## Problem

A `TariffRiderRef` states *this rider, this status, effective this date*, but URPX has no property tying a customer's enrollment record to the stable `urpx:RatePlanModifier` the enrollment concerns. The three enrollment-status pairings are settled and already carried; the join is not. Deciding the join is a public-model identity choice, not a mapping triple.

## Approach

Not yet designed. The spec frames the fork: widen `urpx:ProgramEnrollment` to reference a `urpx:RatePlanModifier` (and admit it in the closed shape), or mint a narrowly scoped modifier-enrollment relator that leaves `ProgramEnrollment` program-specific. Two field-level sub-questions ride with it: `riderType` is a free `String256` that cannot map into the closed IRI enum `urpx:modifierType` (producer examples decide whether it is a type, a name, or an identifier), and `effectiveDate` is epoch seconds against a date-only `urpx:enrollmentStartDate`, so preserving the fact may need a temporally scoped assertion rather than a lossy projection.

## Acceptance

Not yet defined; this task records the carried design work. Whoever picks it up starts from a real producer payload, obtains a working-group decision on the identity boundary, settles the two field-level sub-questions from that decision, and delivers the full specification bundle (edit set with before-and-after Turtle, this task's own completion, and validating synthetic samples).
