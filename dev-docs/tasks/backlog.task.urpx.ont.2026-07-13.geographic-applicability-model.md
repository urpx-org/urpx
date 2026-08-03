---
id: taskurpxontgeographicapplicabilitymodel
title: "Geographic applicability model"
desc: "Backlog: a general way to say where a rate plan or price applies — today geography lives on the service point profile (county/municipality/state) plus ServiceTerritory, with no standardized-area reference or zone concept."
updated: 1783900800000
created: 1783900800000
---

# Geographic applicability model

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 design work |
| **Surface** | `ontology/urpx-ontology.ttl` + SHACL (profile classes, `ServiceTerritory`, `AdministrativeBoundary` family), documentation |

## Problem

Geographic applicability is expressed indirectly: a service point profile
may carry `hasCounty` / `hasMunicipality` / `hasState`
(`AdministrativeBoundary` subclasses), and a `ServiceTerritory` names a
utility's footprint. There is no way to:

- reference a **standardized geographic area** (census/GIS identifiers,
  published zone maps) rather than a bare typed node;
- express **zones** that matter to pricing (climate zones, congestion
  zones, municipal utility boundaries) as first-class referents;
- state applicability geography **on the pricing side** (a price definition
  that applies only in certain areas) without routing everything through
  profile comparisons.

## Approach

1. Survey what real tariffs condition on geographically (climate-zone
   baselines, municipal surcharges, zonal delivery charges) and collect
   two or three concrete cases from existing or new test data.
2. Evaluate one general property (e.g. a located-in / applies-in-area link
   whose range is an area class holding an external identifier + authority)
   against per-kind properties. Prefer referencing external area registries
   over restating geometry — URPX should name areas, not model maps.
3. Decide the fate of the current `AdministrativeBoundary` family relative
   to the general mechanism (keep as convenience subset, or subsume).
4. Assess interplay with condition expressions and `ServiceTerritory`.

## Acceptance

1. A worked example: one rate plan whose price varies by zone, validating,
   with the zone referenced against a real external identifier.
2. Recorded decision on the general-vs-per-kind property question and the
   `AdministrativeBoundary` family's role.
