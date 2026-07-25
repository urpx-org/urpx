---
id: specurpxont046geographicapplicabilityentities
title: "Geographic applicability entities — a coherent, worked idiom for scoping prices to named areas"
desc: "Backlog stub. The in-tree geographic vocabulary (ServiceTerritory, ServicePointProfile/geographicScope, GeographicScopeValue) lacks a settled, worked idiom for 'a price or plan applies within a named geographic area'. Settle the applicability idiom, provide a validating worked example, and restore a correct Overview illustration. Unassigned; targets v0.4.0; not launch-gating."
updated: 1784505600000
created: 1784505600000
---

# Geographic applicability entities — a coherent, worked idiom for scoping prices to named areas

| Field | Value |
|-------|-------|
| **Status** | Backlog — stub for a working-group contributor |
| **Author** | Flux Tailor |
| **Assignee** | **Unassigned — open for any working-group member to pick up** |
| **Target** | v0.4.0 (post-launch; not launch-gating) |

## Why

The Overview page had a "Geographic Applicability" example that was omitted before the v0.3.0 tag. It illustrated the topic with a named `ServiceTerritory` that nothing referenced plus a `ServicePointProfile` carrying a `geographicScope` enumeration level — which validates but does not demonstrate a price actually being scoped to a named area, and referred to terms from a separate, larger geography model that is not in the candidate. Rather than ship a half-illustration, the Overview now carries prose plus a pointer to Condition Modeling, and the worked treatment is deferred here.

## Problem

The pieces exist in the ontology but the idiom that ties them together is not settled or documented:

- `ServiceTerritory` — a named geographic area a utility serves.
- `ServicePointProfile` with `geographicScope` (range `GeographicScopeValue`: `statewideScope`, `countyScope`, `serviceTerritoryScope`, `municipalityScope`, `customScope`) — classifies the administrative level of a service delivery point.
- `ApplicabilityRule` / `ApplicabilityGroup` with `hasConditionExpression` — the general applicability mechanism that determines when a price, price set, or price definition applies.

What is missing: a settled answer to how a price is scoped to a *named territory* (not just a scope *level*) through the applicability model — how a `ConditionExpression` tests a service point's territory or geographic scope, and how `ServiceTerritory` is referenced from that test — plus a worked, validating example.

## Scope

1. Settle the geographic-applicability idiom against the committed ontology and shapes: how `ApplicabilityRule` → `ConditionExpression` → comparison references `ServiceTerritory` and/or `geographicScope` to scope a price to a named area.
2. If the idiom needs a term the current vocabulary lacks, run the reuse ladder before minting (reuse `ServiceTerritory`/`geographicScope`/existing comparison vocabulary first); reconcile with the "separate larger geography model" that the earlier Overview example drew from — carried, transformed, or dropped, item by item.
3. Provide a synthetic worked example that validates with pyshacl and demonstrates a price scoped to a named territory.
4. Restore a correct, validating Overview snippet built on that idiom (replacing the pointer-only prose).

## Acceptance

1. A documented applicability idiom for "price applies within a named geographic area" using only committed v0.3.0 vocabulary (or a ratified addition with its reuse analysis).
2. A synthetic instance that conforms under `urpx-shacl.ttl`.
3. A restored Overview example whose prose and code agree and that demonstrates the price-scoping it describes.
