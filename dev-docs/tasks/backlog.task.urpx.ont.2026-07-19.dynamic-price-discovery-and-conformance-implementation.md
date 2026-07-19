---
id: taskurpxontdynamicpricediscoveryconformanceimplementation
title: "Implement dynamic price discovery + conformance vectors (SPEC-URPX-ONT-043)"
desc: "Backlog: apply the endpoint-discovery edit set (DynamicPriceEndpoint, EndpointProtocolValue, url/mediaType widenings, applicationLdJson member) and promote the two expected-output conformance vectors into the test-case catalog."
updated: 1784419200000
created: 1784419200000
---

# Implement dynamic price discovery + conformance vectors (SPEC-URPX-ONT-043)

| Field | Value |
|-------|-------|
| **Status** | Backlog — awaiting working group review of the spec |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, `test-cases/`, documentation pages (quality assurance, interoperability) |
| **Source** | [spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md](../specs/spec.urpx.ont.043.dynamic-price-discovery-and-conformance.md) — the spec carries the complete Turtle for every edit |
| **Samples** | [dev-docs/samples/comed-rrtp-hdp/](../samples/comed-rrtp-hdp/) · [dev-docs/samples/pge-b6-pdp-event/](../samples/pge-b6-pdp-event/) |
| **Depends on** | SPEC-URPX-ONT-041 and SPEC-URPX-ONT-042 implementations |

## Problem

Consumers cannot machine-discover where a dynamic price's live values are served, and the test-case catalog has no expected-output vectors proving that two implementations compute the same dynamic prices from the same recipe.

## Approach

1. **E-01** — add `DynamicPriceEndpoint`, `hasDynamicPriceEndpoint`, `requiresAuthentication`, the endpoint shape, and the `DynamicPricingShape` insert.
2. **E-02** — add the `EndpointProtocolValue` enumeration (four members), `endpointProtocol`, and the value shape.
3. **E-03** — widen `url` and `mediaType` domains; add the `applicationLdJson` media-type member (individual, `owl:oneOf`, `sh:in`).
4. **E-04** — promote the two conformance vector sample sets into `test-cases/` folders with catalog rows; record the pass criterion (decimal equality after expression-stated rounding) in each vector README and on the quality-assurance page.
5. Hand-evaluate each vector's recipe against its driver series and confirm the expected series reproduces exactly, before promoting.

## Acceptance

1. Both `.ttl` files parse; existing test cases validate with zero new violations; the endpoint block in the ComEd sample validates.
2. Negative test passes: an endpoint without `url` is rejected.
3. Both vectors live under `test-cases/` with index rows; independent hand evaluation matches the expected series exactly.
4. Data dictionary regenerated; changelog entry written describing the change.
5. The spec's open questions (§7) are answered or explicitly carried before the batch is committed.
