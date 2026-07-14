---
id: taskurpxontstatementlineitemmodule
title: "Billing statement line-item module (separate, linked)"
desc: "Backlog: evaluate a statement line-item vocabulary as a separate module linked to URPX core — representing what a bill shows (line items, their prices, references to the plan terms that produced them) without pulling billing into the core tariff vocabulary."
updated: 1783900800000
created: 1783900800000
---

# Billing statement line-item module

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; explicitly a separate-module question, not core |
| **Surface** | New module (own namespace or clearly-bounded section), linked to core classes; no core semantics change |

## Problem

URPX core names what an implementer needs to read a **published tariff**;
a **bill statement** is a different document kind: line items with charged
amounts, quantities, and periods, each traceable to the plan terms that
produced it. Core already has adjacent pieces — `PriceSummary` (bundled
totals), `ScenarioCostResult` (computed outcomes), source references into
statement publications — but no representation of a statement's own line
items. Monthly adjustment-statement test cases show the need: their
contents can be cited as sources but not restated as data.

## Approach

1. **Boundary first.** Confirm the open-standard test: a tariff reader
   does not need line items, so this lives outside core — a separate,
   linked module (own prefix or clearly-bounded optional section), never a
   core dependency.
2. Model the minimal line item: label, charged amount, quantity + unit,
   service period, link to the `PriceDefinition` / rate plan version that
   produced it, link to the statement publication it appeared in.
3. Reuse before minting: check `PriceSummary`, `ScenarioCostResult`, and
   the existing source-reference classes for overlap; the module should
   compose with them, not duplicate them.
4. One worked example from a real statement.

## Acceptance

1. Recorded scope decision (module boundary, namespace).
2. Draft module with one validating worked example, or a recorded decision
   that the need is out of scope entirely.
