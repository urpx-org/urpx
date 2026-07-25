---
id: taskurpxapiconsumingapidesign
title: "Consuming API design (read/query interface for published rate plans)"
desc: "Design the URPX read/query API — discovery, version retrieval, eligibility — against the v0.3.0 model, reconciling the earlier requirements-phase API page. Assigned to Flux Tailor; in progress. Produces SPEC-URPX-API-047. Targets v0.4.0; does not gate the v0.3.0 launch."
updated: 1784851200000
created: 1784678400000
---

# Consuming API design (read/query interface for published rate plans)

| Field | Value |
|-------|-------|
| **Status** | In progress |
| **Assignment** | Flux Tailor |
| **Surface** | [spec.urpx.api.047.consuming-api.md](../specs/spec.urpx.api.047.consuming-api.md); documentation API page |
| **Target release** | v0.4.0 (additive; does not gate the v0.3.0 tag) |
| **Source** | Chair direction, 2026-07-22 — API named as a prominent work item; the design needs to be re-derived against the v0.3.0 model rather than carried from the earlier requirements-phase page |

## Problem / opportunity

URPX defines the rate plan data model but not a documented access interface for consuming it. An earlier requirements-phase API page (`documentation/pages/urpx-api-spec.md`) exists but predates the v0.3.0 model, so its example calls no longer match the shipped vocabulary and shapes. A current, model-accurate read/query API — discovery, version retrieval, eligibility — is the next consumer-facing gap after the model itself.

## Access model and profile order (settled 2026-07-24)

URPX standardizes the JSON-LD representation of a rate plan as the one thing on the wire; REST, GraphQL, and SPARQL are access profiles over it, none normative-primary (see SPEC-URPX-API-047 §3.1). The profiles are sequenced:

1. **SPARQL** — the native graph-query profile; a single worked example (latest rate plan version for a rate plan) ships on the documentation page for the v0.3.0 launch.
2. **GraphQL over JSON-LD** — the first published API specification, authored by Flux Tailor as the next API deliverable after the v0.3.0 release; schema derived from the shapes and context.
3. **REST / JSON-LD / JSON** — developed later on broader input from data consumers; content-negotiated JSON-LD as the baseline, flattened plain-JSON as the later consumer-driven layer.

## Approach

1. Audit the earlier requirements-phase API page against the v0.3.0 model; record where it is stale, where it still holds, and what carries forward. **Done for launch** — the page is reduced to a non-normative illustrative sketch (stale response examples removed, retained diagrams and call drafts aligned, one SPARQL example added).
2. Design the GraphQL-over-JSON-LD profile (schema derivation, query shapes, response envelope) against the v0.3.0 shapes — the first published API specification.
3. Define how the read path references the dynamic-price endpoints from SPEC-URPX-ONT-043 rather than duplicating them.
4. Validate the design against at least one reference implementation before adding worked examples to SPEC-URPX-API-047.
5. Develop the REST/JSON profile subsequently, shaped by broader input from data consumers once the standard is public.

## Acceptance

1. SPEC-URPX-API-047 carries a settled resource model and worked examples for the GraphQL profile, validated against the v0.3.0 shapes.
2. The stale requirements-phase page is reconciled so the documentation site does not publish contradictory API guidance. **Satisfied for the v0.3.0 launch** — the page is a non-normative sketch aligned to v0.3.0; full worked examples follow with the settled interface.
3. The read path references, and does not duplicate, the dynamic-price discovery/conformance surface (042/043).
