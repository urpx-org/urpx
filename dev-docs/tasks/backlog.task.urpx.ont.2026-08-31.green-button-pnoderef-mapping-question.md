---
id: taskurpxontgreenbuttonpnoderefmappingquestion
title: "Should PnodeRef appear in the Green Button mapping, and where"
desc: "Backlog: NAESB ESPI V4's PnodeRef (a wholesale ISO/RTO pricing-node reference) has no URPX counterpart today. Left out of the canonical Green Button mapping for now rather than recorded as a deliberate absence. Revisit post-v0.4.0: whether URPX should represent it at all, and if so, on the retail mapping or on the urpx:Scenario / urpx:ServicePointProfile surface."
updated: 1788203176000
created: 1788203176000
---

# Should `PnodeRef` appear in the Green Button mapping, and where

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.4.0 |
| **Assignment** | Unassigned — open for any WG member to pick up |
| **Surface** | `skos/standards-integration/urpx-green-button-mappings.ttl`; possibly `ontology/urpx-ontology.ttl` (`urpx:Scenario` / `urpx:ServicePointProfile`) |
| **Source** | NAESB ESPI V4 `PnodeRef` (`espi_v4.xsd`), reached from a usage point through `PnodeRefs` |

## Problem

`PnodeRef` is a wholesale ISO/RTO pricing-node reference: a node type, a reference string, and effective dates. URPX today models retail rate plans and their modifiers and holds nothing at the wholesale-settlement layer, so there is no counterpart to align it to.

The Green Button mapping file currently says nothing about `PnodeRef` — no alignment and no deliberate-absence note. That is a deliberate choice for now, not an oversight: whether and how URPX should represent a wholesale pricing-node reference is still open, including whether it belongs on the retail mapping at all or only on an evaluation-input surface such as `urpx:Scenario` / `urpx:ServicePointProfile`.

## Approach

Not yet designed. Candidate directions, none decided:

1. Leave it unmapped permanently and record that in the mapping file once the question is actually closed.
2. Reference a wholesale pricing node from `urpx:ServicePointProfile`, which `urpx:Scenario` already composes, as a time-scoped assignment rather than a bare value.
3. Some other treatment, including possibly no ontology change at all if no real published example needs it.

## Acceptance

Not yet defined; this task records the open question, not a committed design. Whoever picks it up should start from a real producer example before choosing a direction.
