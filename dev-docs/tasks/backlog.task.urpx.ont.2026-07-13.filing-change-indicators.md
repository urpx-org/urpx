---
id: taskurpxontfilingchangeindicators
title: "Per-price filing change indicators"
desc: "Backlog: a typed change-indicator on Price mirroring regulatory sheet markers ((R) restated, (I) increase, (D) decrease, (N) new, (T) text, …), so a filing's per-row deltas are machine-readable; changeReason on the version level cannot carry them."
updated: 1783900800000
created: 1783900800000
---

# Per-price filing change indicators

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; additive |
| **Surface** | `ontology/urpx-ontology.ttl` (one property + one enum), SHACL, data dictionary |

## Problem

Regulatory tariff sheets mark every row with a change indicator — under
California GO 96-B and comparable FERC conventions: (R) restated,
(T) textual, (I) increase, (D) decrease, (N) new, (L) letter change,
(Z) editorial — so a reviewer can scan what changed without re-reading the
sheet. URPX carries `changeReason` on the rate plan version (why the
version as a whole changed) but nothing at the price level, so ingested
filings lose the per-row markers.

## Approach

1. Datatype/object property `changeIndicator`, domain `urpx:Price`, range
   a new enumeration `ChangeIndicatorValue` with members for the marker
   set above plus a catch-all (`changeIndicatorOther`), following the
   existing `changeReason` / `changeDescription` naming pattern.
2. Keep it strictly descriptive of the source filing: the indicator
   restates what the published sheet marks, it does not assert a computed
   diff. (A computed comparison would be a consumer feature, not
   vocabulary.)
3. Worked example: one filed sheet's prices carrying their real markers.

## Acceptance

1. Enum + property + SHACL `sh:in` list consistent; dictionary regenerated.
2. One test case carries real markers from its source sheet and validates.
