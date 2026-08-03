---
id: specurpxdocs045printableontologyposter
title: "Printable URPX ontology poster for conferences"
desc: "A human-designed, print-ready poster of the URPX vocabulary for conferences and outreach. An auto-generated v0.2.0 draft exists as a starting reference but is not human-readable; this spec asks for a curated, current-vocabulary poster. Unassigned — open for a working-group contributor. Targets v0.5.0 (not launch-gating)."
updated: 1784505600000
created: 1784505600000
---

# Printable URPX ontology poster for conferences

| Field | Value |
|-------|-------|
| **Status** | Draft — open for a working-group contributor |
| **Author** | Flux Tailor |
| **Assignee** | **Unassigned — open for any working-group member to pick up** |
| **Target** | v0.5.0 (post-launch; not launch-gating) |
| **Deliverable** | A print-ready poster file (PDF at A0 and A1) plus its editable source |

## Why

A single-sheet visual of the URPX vocabulary is useful at conferences, standards meetings, and in onboarding. It should let someone standing in front of it grasp the shape of the model — the core classes, how a rate plan relates to its versions and pricing models, and where the main property relationships run — without reading the specification.

## What exists today (starting reference, not a solution)

An earlier attempt is checked in at [`dev-docs/assets/poster-draft/`](../assets/poster-draft/): a Graphviz `.dot` source rendered to `.svg` with the `fdp` layout engine.

It is a complete, machine-generated dump of every class and relationship, and that is exactly its problem — **it is not human-readable as a poster.** Specifically:

- It renders the *entire* ontology at once with no visual hierarchy, so nothing stands out and the eye has no entry point.
- The `fdp` force-directed layout produces a dense web with crossing edges rather than a legible, grouped structure.
- It is stamped **v0.2.0** and predates the v0.3.0 reframe (identity records, `PricingModel`/publication containers, `RatePlanVersion` as the resolved snapshot, the coverage-claim model), so its content is out of date.
- It marks some edges as "proposed" properties that are not the current vocabulary.

Treat it as evidence of "we tried the automatic route and it does not read," not as a draft to polish.

## What the poster should be

- **Human-curated layout**, not an automatic dump: grouped by the natural regions of the model (identity and versions, pricing models and publications, prices and calculation, applicability and conditions, coverage and evaluation), with a clear reading order and a legend.
- **Current v0.3.0 vocabulary**, generated or checked against the committed `ontology/urpx-ontology.ttl` so class and property names are accurate.
- **Print-ready**: vector PDF at A0 (conference easel) and A1 (smaller booth), legible at arm's length; CMYK-safe colors; fonts embedded.
- **Brand-consistent** with the URPX site and other materials.
- **Maintainable source** committed alongside the output, so the poster can be refreshed when the vocabulary changes (note whether the source is hand-authored or a curated transform of the ontology).

## Scope notes

- Completeness is not the goal; **legibility is.** It is acceptable — likely necessary — to omit rarely-used terms and enumeration members and to show representative relationships rather than every edge.
- One poster covering the core model is enough for a first version; deeper topic posters (for example, the highly dynamic price series) can follow.

## Acceptance

1. A0 and A1 PDFs render with embedded fonts and legible text at print size.
2. Every class and property shown exists in the committed v0.3.0 ontology (no proposed or retired terms presented as current).
3. Editable source is committed with the output and documented well enough for the next contributor to refresh it.
4. Layout is grouped and readable, with a legend; it is not a raw force-directed dump.
