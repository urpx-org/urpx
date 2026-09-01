---
id: taskurpxontgreenbuttonprogramidcodebook
title: "Design the Green Button ProgramIdMappings code-list alignment"
desc: "Backlog: NAESB ESPI V4's ProgramIdMappings is a utility-local reading-code codebook (tou / cpp / consumptiontier), not program enrollment, and the closed ProgramEnrollmentShape cannot express the enrollment alignment. Run the design pass that decides whether and how to render the codebook — candidate is a SKOS scheme branching by discriminator to the tier and time-of-use surfaces. Post-v0.4.0; not launch-gating."
updated: 1788134400000
created: 1788134400000
---

# Design the Green Button `ProgramIdMappings` code-list alignment

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.4.0 |
| **Assignment** | Unassigned — open for any working-group member to pick up |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, `skos/standards-integration/urpx-green-button-mappings.ttl` |
| **Source** | NAESB ESPI V4 `ProgramIdMappings` / `programIdMapping` extension (`espi_v4.xsd`) |
| **Spec** | [spec.urpx.ont.048.green-button-programid-codebook.md](../specs/spec.urpx.ont.048.green-button-programid-codebook.md) |

## Problem

`ProgramIdMappings` is a utility-local codebook of reading codes — its discriminator values `tou` / `cpp` / `consumptiontier` are the same families ESPI carries as numeric fields on `ReadingType` and `IntervalReading` — not program enrollment. It cannot be aligned to `urpx:ProgramEnrollment`: that shape is closed and admits no `code` or `note`. The codebook needs a code-list design pass, which is more than a mapping triple.

## Approach

Not yet designed. The candidate route in the spec is generic SKOS code-list machinery (`skos:ConceptScheme` holding concepts with `skos:notation`, `skos:prefLabel`, `skos:note`), branching by discriminator to `urpx:ServiceTier`, `urpx:TOUPeriod` / `urpx:TOUTier`, or a critical-peak surface. URPX has no `ConceptScheme` precedent today, so the scheme-identity choice is real. The `cpp` leaf and the numeric-`code` notation form both need producer examples before a target is chosen.

## Acceptance

Not yet defined; this task records the carried design work. Whoever picks it up starts from a real producer payload, settles the scheme identity and the discriminator branching, and delivers the full specification bundle (edit set with before-and-after Turtle, this task's own completion, and validating synthetic samples).
