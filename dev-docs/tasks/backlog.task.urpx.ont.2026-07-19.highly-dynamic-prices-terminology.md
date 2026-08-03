---
id: taskurpxonthighlydynamicpricesterminology
title: "Adopt 'highly dynamic prices' as the umbrella term in documentation"
desc: "Backlog: record 'highly dynamic prices' as the preferred umbrella term for sub-daily resolved price streams across the terminology guidance and documentation pages, reserving 'Real-Time Pricing' for the specific rate plan type it names; no ontology changes."
updated: 1784419200000
created: 1784419200000
---

# Adopt "highly dynamic prices" as the umbrella term in documentation

| Field | Value |
|-------|-------|
| **Status** | Backlog — documentation-only, small |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | `dev-docs/README.md` (Terminology), `CONTRIBUTING.md` (Terminology and language use), `documentation/pages/urpx-tutorial.md`, `urpx-faq.md`, `urpx-overview.md`, `urpx-interoperability.md` |
| **Source** | Reviewer preference recorded during the March 2026 expert review of highly dynamic pricing; already reflected in the `urpx:highlyDynamicPrices` publication type |

## Problem

Documentation prose mixes "real-time prices", "real-time pricing", and "dynamic pricing" when describing sub-daily resolved price streams. The vocabulary already leans the other way: the publication type is `highlyDynamicPrices`. Without recorded guidance, new prose will keep drifting toward "real-time", which over-promises cadence (many such streams are hourly or day-ahead) and collides with the specific rate plan type named Real-Time Pricing.

## Approach

1. Add to the terminology guidance (`dev-docs/README.md` Terminology, `CONTRIBUTING.md`):
   - **Preferred:** "highly dynamic prices" for streams of resolved price values at sub-daily cadence, and "highly dynamic pricing" for the practice.
   - **Reserved:** "Real-Time Pricing" only as the proper name of that rate plan type (the `urpx:realTimePricing` enumeration member and rate plans so named by their utilities, such as hourly wholesale-indexed residential plans).
   - **Avoid:** bare "real-time prices" as a generic term for the stream.
2. Sweep the four documentation pages for generic "real-time price(s)" prose and reword to "highly dynamic prices" where the umbrella sense is meant; leave rate-plan-type names and enumeration member documentation untouched.
3. **No ontology changes:** `urpx:realTimePricing` (a rate plan type) and `urpx:realTimeInterval` (an interval resolution) keep their names — they name specific things, not the umbrella.

## Acceptance

1. Terminology guidance carries the preferred/reserved/avoid entry.
2. No documentation page uses generic "real-time prices" for the stream concept; rate-plan-type usages remain.
3. No `.ttl` diff.
