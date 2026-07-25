---
id: taskurpxontwindowvsfilingauthoringguidance
title: "Authoring guidance: window-scoped prices vs. successive filings"
desc: "Backlog (unassigned) from Don's v0.3.0 Q4: document when to model changing prices as a supersession thread of one TariffFiling per publication event (regulated statements) versus a single PricingModel with many validity-dated windows (market/dynamic feeds), so two implementers converge. The two forms already appear in the worked example; this task turns them into stated guidance."
updated: 1783900800000
created: 1783900800000
---

# Authoring guidance: window-scoped prices vs. successive filings

| Field | Value |
|-------|-------|
| **Status** | Backlog — documentation; the model already supports both forms, only the guidance is missing |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | Authoring / condition-modeling documentation (no vocabulary change expected) |
| **Source** | WG v0.3.0 review, Q4 (chair-confirmed) — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md`; walkthrough §6.3–6.4 |

## Problem

Monthly-changing prices can be modelled two ways, both present in the ConEd worked example:
the MAC as a supersession thread of one `TariffFiling` per month, and the MSC as a single
`PricingModel` with many validity-dated windows. Both validate. Without stated guidance, two
implementers modelling the same MIDAS-derived monthly feed will choose differently.

## Approach

Write the authoring rule: **regulated statements → one `TariffFiling` per publication event**
(supersession thread — each filing is its own document with its own `DataSourceReference`);
**market / dynamic feeds → a single `PricingModel` with validity-dated windows.** Ground it
in the worked example and in the chair's publication-boundary principle (URPX represents
publications; it does not model the publication event).

## Acceptance

1. Documentation states the rule with the worked example cited for each form.
2. Two implementers modelling the same monthly feed converge on the same form.
