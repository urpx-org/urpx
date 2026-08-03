---
id: taskurpxontmachinereadablegenericapplicability
title: "Machine-readable applicability on generic/market packages"
desc: "Backlog (unassigned) from Don's v0.3.0 Q2: a generic market feed's ApplicabilityGroup in the worked example carries only a prose name, so a consumer cannot determine which plans / qualifier combinations it applies to. Confirm the bare-name form is illustrative only, provide a market package whose applicability is a resolvable ConditionExpression, and decide whether SHACL should require it."
updated: 1783900800000
created: 1783900800000
---

# Machine-readable applicability on generic packages

| Field | Value |
|-------|-------|
| **Status** | Backlog — high priority; nearly all California generation / NBT pricing arrives as generic feeds reached this way, so machine-readable applicability is what lets a consumer enumerate the qualifier combinations of a rate plan |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | One worked example (a market/generic `PricingModel` with resolvable applicability), condition-modeling documentation, possibly a SHACL constraint on generic-package applicability |
| **Source** | WG v0.3.0 review, Q2 — `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md`; walkthrough §6.4 (market feed) |

## Problem

Applicability conditions are what let a consumer enumerate the distinct qualifier
combinations of a rate plan — each combination (service class / rate group / zone / tension
/ cohort) that selects a different price set is a distinct resolvable rate plan version. In
the worked example the MAC statement carries a full `ConditionExpression`, but the market
supply feed's `ApplicabilityGroup` carries only a `name` ("Full Service customers, Rate I,
Zone J, low tension"). The ontology note says packages reach plans via "ServiceClass/RIN URI
via ConditionExpression", so the bare-name form reads as illustrative — but if a generic
feed's applicability is only a prose label, a consumer cannot determine which rate plans and
qualifier combinations it applies to. Generic feeds (no `referencesRatePlan`, reached by
applicability only) are exactly where this bites.

## Approach

1. Confirm the intended contract: a generic/market package's applicability must be a
   resolvable `ConditionExpression` over qualifier URIs (service class, zone, tension), not
   a prose `name`; the bare-name form in the example is illustrative and should be corrected
   or clearly labelled.
2. Publish a worked market/generic package whose `ApplicabilityGroup` carries a resolvable
   `ConditionExpression` testing those URIs.
3. Decide whether SHACL should require structured applicability when a `PricingModel`
   declares no `referencesRatePlan` (reachable only by applicability). Weigh against
   packages legitimately reached another way before adding a hard constraint.

## Acceptance

1. A worked generic package whose applicability a consumer can resolve mechanically to the
   rate plans / qualifier combinations it applies to.
2. Condition-modeling documentation states the generic-package applicability contract.
3. A recorded decision on whether the contract is SHACL-enforced or guidance-only.
