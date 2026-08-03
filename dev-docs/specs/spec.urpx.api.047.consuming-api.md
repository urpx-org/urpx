---
id: specurpxapi047consumingapi
title: "SPEC-URPX-API-047 — API for consuming published rate plans"
desc: "Stub spec for the URPX read/query API that lets applications discover published rate plans, retrieve rate plan versions, and check eligibility against the model. Design in progress — no endpoint or payload examples yet. Targets v0.4.0; does not gate the v0.3.0 launch."
updated: 1784937600000
created: 1784678400000
---

# SPEC-URPX-API-047 — API for consuming published rate plans

| Field | Value |
|-------|-------|
| **Status** | Draft — design in progress. Access model and profile order settled (§3.1); the detailed interface and payload examples are still to come. |
| **Author** | Flux Tailor |
| **Assignee** | @klaardeschepper (Flux Tailor lead) |
| **Delivered against** | URPX v0.3.0 candidate, branch `v0.3.0-wg-review` |
| **Target release** | v0.4.0 (additive; does not gate the v0.3.0 tag) |
| **Targets** | Documentation pages; no ontology or SHACL change anticipated for the read path |
| **Implementation task** | [task.urpx.api.2026-07-22.consuming-api-design.md](../tasks/task.urpx.api.2026-07-22.consuming-api-design.md) |
| **Related** | SPEC-URPX-ONT-042 (highly dynamic price series payload), SPEC-URPX-ONT-043 (dynamic price discovery and conformance) — the real-time price surface; this spec covers the general read/query surface for published plans |

## 1. Problem

Applications that consume published rate plans need a documented way to find plans, read their versions, and test eligibility without scraping documentation pages or reverse-engineering the graph. URPX today defines the data model but not a normative access interface for it.

The documentation site carries an illustrative API page (`documentation/pages/urpx-api-spec.md`): a non-normative sketch of the read surface, with diagrams, draft call shapes over the v0.3.0 model, and one worked SPARQL example. It is not a specification. This spec is the normative design for the read and query surface, and the illustrative page defers to it, so the documentation site does not publish API guidance that competes with this spec.

## 2. Scope

- **Discovery** — find rate plans available in a service territory, filterable by customer and service characteristics.
- **Version retrieval** — read the rate plan versions effective within a date range, with their resolved pricing content.
- **Eligibility** — test a customer/service-point profile against available plans.

Read path only. Rate plan submission and regulatory-approval tracking stay out of scope, consistent with the standard's boundary.

## 3. Status of design

This is a stub. The interface — protocol family, resource shapes, query parameters, and response envelopes — is still being designed and is not yet ready for working-group review. **No examples are included here on purpose**: example calls published before the design settles would drift out of step with it.

The next revision will add the resource model and worked examples once the design is validated against the v0.3.0 shapes and against at least one reference implementation. Until then, comments on scope and priorities are welcome via the task linked above.

## 3.1 Access model and profile order

URPX standardizes one thing on the wire: the **JSON-LD representation** of a rate plan, governed by the published context and the SHACL shapes. REST, GraphQL, and SPARQL are **access profiles** over that single representation — none is normative-primary. Because the representation is the stable contract, a new property in the model flows through to consumers without a per-endpoint transform.

The profiles are sequenced:

1. **SPARQL** — the native graph-query profile. A single worked example, the latest rate plan version for a rate plan, ships on the public documentation page at the v0.3.0 launch.
2. **GraphQL over JSON-LD** — the typed convenience profile and the **first published API specification**, authored by Flux Tailor as the next API deliverable after the v0.3.0 release. It fits the JSON-LD representation directly, so its schema is derived from the shapes and context rather than maintained as a separate, drift-prone contract.
3. **REST / JSON-LD / JSON** — a resource-oriented profile, developed later on broader input from data consumers. The baseline is content-negotiated JSON-LD (framing-driven, so model changes flow through without per-endpoint transform code); flattened plain-JSON projections are the later, consumer-driven layer, which is why REST follows rather than leads.

## 4. Non-goals

- No write/submission API in this spec.
- No new ontology or SHACL vocabulary for the read path (the model already carries what the API returns); any gap found during design is raised as its own item.
- Not a replacement for the dynamic-price discovery and conformance work (042/043), which covers the live-values surface.

## 5. Open questions

- How the read path references the dynamic-price endpoints defined in SPEC-URPX-ONT-043 rather than duplicating them.
- Pagination, caching, and versioning conventions for published data. Public tariff data is high-read and cacheable: the REST profile's URL-addressable GETs cache at CDN and proxy layers, whereas a GraphQL profile needs persisted queries to cache comparably — a factor in how each profile is specified.
- How discovery filters (service territory, customer characteristics) are exposed by the access layer, given that these attach to service-point and customer profiles and are evaluated by eligibility rules rather than being direct fields on a rate plan.
