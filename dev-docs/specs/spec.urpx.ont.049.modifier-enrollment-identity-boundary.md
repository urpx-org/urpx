---
id: specurpxont049modifierenrollmentidentityboundary
title: "SPEC-URPX-ONT-049 — Modifier-enrollment identity boundary"
desc: "Frames the identity-boundary fork for aligning NAESB ESPI V4's per-rider enrollment (TariffRiderRefs) to URPX. The three enrollment-status closeMatch pairings are settled and already carried; the join between a stable modifier identity and an enrollment record is not — no property ties ProgramEnrollment to a RatePlanModifier. States the widen-versus-mint fork, the riderType free-string-to-closed-enum gap, and the epoch-seconds-to-date handling; does not rule the fork."
updated: 1788134400000
created: 1788134400000
---

# SPEC-URPX-ONT-049 — Modifier-enrollment identity boundary

| Field | Value |
|-------|-------|
| **Status** | Draft — unratified. Frames the identity-boundary fork; does not rule it. Not yet the delivery bundle a mint or a widening carries. |
| **Assignee** | Unassigned — open for any working-group member to pick up |
| **Target release** | Post-v0.4.0; not launch-gating |
| **Targets (candidate, none authored here)** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, `skos/standards-integration/urpx-green-button-mappings.ttl` |
| **Design-pass task** | [backlog.task.urpx.ont.2026-08-30.modifier-enrollment-identity-boundary.md](../tasks/backlog.task.urpx.ont.2026-08-30.modifier-enrollment-identity-boundary.md) |
| **Source** | NAESB ESPI V4 `TariffRiderRefs` / `TariffRiderRef` (`espi_v4.xsd`) |

## 1. Problem

`TariffRiderRefs` (`espi_v4.xsd:1528`) is a list of `TariffRiderRef` (`:1607`), each carrying `riderType` (a `String256`), `enrollmentStatus` (a three-member `EnrollmentStatus`), and `effectiveDate` (a `TimeType`). It records a customer's enrolled riders on top of a base rate plan.

One part is settled and already carried in the Green Button mapping: the three enrollment-status pairings, `enrolled` → `urpx:activeStatus`, `unenrolled` → `urpx:inactiveStatus`, `enrolledPending` → `urpx:pendingStatus`, as `skos:closeMatch` scoped to ESPI's rider `EnrollmentStatus`.

What is not settled is the **join**. A `TariffRiderRef` states one customer-scoped fact — *this rider, this status, effective this date* — but URPX has no property tying a customer's enrollment record to the stable identity of the rider it concerns. Verified against `ontology/urpx-ontology.ttl` this pass:

- `urpx:referencesRatePlanModifier` has `rdfs:domain urpx:PricingModel` and range `urpx:RatePlanModifier` — it links a pricing model to a modifier, not an enrollment record to one.
- `urpx:hasRatePlanModifier` is package containment.
- `urpx:ProgramEnrollment` carries `programName` and `programType` → `urpx:ProgramTypeValue`, is reached from a customer profile via `hasProgramEnrollment`, and references no modifier. Its shape (`ProgramEnrollmentShape`) is `sh:closed true` and admits no modifier reference.

So "enrolled in *this specific* rider, status X, as of date D" cannot be assembled from the current terms. That gap is a public-model identity choice, which is the fork this spec frames.

## 2. The identity-boundary fork

Two routes, each defensible, with different consequences for the public model:

1. **Reuse by widening.** Allow `urpx:ProgramEnrollment` to reference a `urpx:RatePlanModifier` (a new object property, or widening an existing reference), and admit that reference in the closed `ProgramEnrollmentShape`. Cost: it changes the meaning and domain of the enrollment surface, which today means participation in a *utility program*, to also cover per-rider enrollment.
2. **Mint (last resort).** Introduce a narrowly scoped modifier-enrollment relator that references the stable `urpx:RatePlanModifier` and carries status plus a temporal scope, leaving `urpx:ProgramEnrollment` specific to utility programs. Cost: a new public identity to define and maintain.

The schema establishes that the association exists; it cannot choose URPX's identity boundary. This spec states the fork and stops. It does not rule which route wins.

## 3. Two field-level sub-questions the fork carries

These ride with the join and must be settled in the same design pass:

- **`riderType` (free string) into a closed enumeration.** `riderType` is an unconstrained `String256`. `urpx:modifierType` is an object property on `urpx:RatePlanModifierVersion` (not on the stable `urpx:RatePlanModifier`) whose range `urpx:ModifierTypeValue` is a closed IRI enumeration. Arbitrary text cannot be mapped into a closed IRI enum. Producer examples are needed to decide whether `riderType` is a modifier type, a modifier name (`urpx:name`), or an external code (`urpx:RatePlanModifierIdentifier`). This spec names the candidates; it does not choose.
- **`effectiveDate` (epoch seconds) into a date-only property.** ESPI defines `effectiveDate` as when the *current* rider enrollment status took effect, so it may date `enrolled`, `unenrolled`, or `enrolledPending`. `TimeType` is epoch seconds; `urpx:enrollmentStartDate` accepts only `xsd:date` and specifically means when participation began. Mapping the one onto the other loses time precision and conflates which status the date stamps. The epoch-seconds-to-date handling is part of this spec's design pass. A candidate to preserve the fact faithfully is a temporally scoped assertion — `urpx:hasTemporalScope` on a `urpx:TemporalScope` carrying `urpx:startDateTime` as `xsd:dateTime`, with `urpx:scopeKind` naming what the timestamp stamps — rather than an unconditional projection onto `enrollmentStartDate`. Which target is right depends on the identity-boundary ruling above.

## 4. Evidence that settles the fork

Real producer payloads showing what `riderType` actually carries and which enrollment transition `effectiveDate` stamps, and a ruling on the identity boundary (widen the enrollment surface, or mint a modifier-enrollment relator). The boundary ruling is the gating input: the field-level targets follow from it.

## 5. What this spec does not do

It authors no property, mints no relator, widens no shape, and rules no fork. When the design pass runs, it produces the full delivery bundle the repository's specification convention requires — the edit set with before-and-after Turtle, an implementation task, and validating synthetic samples.
