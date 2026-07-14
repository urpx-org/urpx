---
id: taskurpxontcaliforniaworkedexampleset
title: "California worked-example set (accept Don's offer)"
desc: "Backlog (unassigned) from Don's v0.3.0 offer: build the identity / filing / statements / feed / resolved-snapshot set for a California rate plan that exercises the generation-vs-delivery split, a MIDAS price feed, and an externally-priced CCA generation component, as a candidate test case alongside the ConEd set. A second independent corpus is the strongest test of resolution determinism (Q1) and of generic-feed applicability (Q2)."
updated: 1783900800000
created: 1783900800000
---

# California worked-example set

| Field | Value |
|-------|-------|
| **Status** | Backlog — offered by Don's team; accept and coordinate |
| **Assignment** | **Unassigned — open for any WG member to pick up**; Don's team offered to build it |
| **Surface** | A worked example set (identity, filing, statements, feed, resolved snapshot) contributed alongside the ConEd set |
| **Source** | WG v0.3.0 review, Offer — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md` |

## Problem / opportunity

Don offered to repeat the five-part exercise (§8) against a California rate plan exercising
the generation-vs-delivery split, a MIDAS price feed, and an externally-priced CCA generation
component. This is high value: a second independent corpus is the strongest available test of
whether resolution is deterministic across implementations (Q2 machine-readable applicability
feeds directly into it, and the externally-priced component pairs with
`task.urpx.ont.2026-07-13.partial-externally-priced-snapshot-example.md`).

## Approach

1. Accept the offer; agree scope and the identifier/source conventions so it sits alongside
   the ConEd set.
2. Validate the contributed set against the v0.3.0 SHACL shapes.
3. Use it to check the generic-feed applicability contract (Q2) and the partial-snapshot
   mechanism (Q5) against real California data.

## Acceptance

1. A validating California worked-example set is contributed and lives alongside the ConEd set.
2. It exercises the generation-vs-delivery split, a MIDAS-style feed with machine-readable
   applicability, and an externally-priced component.
