---
id: taskurpxont20260720dcjround2vocabularyfollowups
title: "v0.4.0 follow-ups from the round-2 v0.3.0 review (identifier-on-version, computed-quantity confidence, California example conventions)"
desc: "Backlog stubs for the non-gating items raised in the round-2 v0.3.0 review: carrying the customer-facing identifier on a resolved version, a confidence value for an exactly-computed quantity, and agreeing identifier + source-citation conventions for the California worked-example set. Each is left as a stub for the reviewer to confirm whether the v0.3.0 changes already resolve it. Two related vocabulary gaps are already tracked separately (GH #32, GH #25)."
updated: 1784505600000
created: 1784505600000
---

# v0.4.0 follow-ups from the round-2 v0.3.0 review

| Field | Value |
|-------|-------|
| **Status** | Backlog — stubs for the reviewer to confirm |
| **Assignment** | **Unassigned — open for a working-group member** |
| **Target** | v0.4.0 (none gate the v0.3.0 tag) |

The round-2 review noted two items that were accepted in the response to the first review but are not in the candidate at its current tip, and one collaboration item. None gate publication; they are recorded here so they are not lost and so the reviewer can confirm whether the v0.3.0 model already covers them.

## 1. Customer-facing identifier on a resolved version — RESOLVED in v0.3.0

**Raised:** carrying the customer-facing identifier (the California MIDAS RIN) on a resolved version, so a consumer reading only the snapshot has it.

**Resolution (v0.3.0):** the identifier is now available on the version by two paths. It still has its authoritative home on the plan *identity* — a `RatePlan` carries one or more `RatePlanIdentifier`s via `hasIdentifier` (`scheme` + `skos:notation`), reachable from a version through `forRatePlan` — and, for standalone-snapshot consumption, `hasIdentifier` was widened onto `RatePlanVersion` / `RatePlanModifierVersion` so a snapshot can carry the identifier directly (alongside `timezoneIdentifier` and `hasLocationDataSet`). The plan identity remains authoritative; a version-level copy MUST agree. The reuse call was reuse-by-widening (no new property minted). Recorded as Decision #127. No longer a v0.4.0 item.

## 2. Confidence value for an exactly-computed quantity

**Raised:** a confidence value for a quantity that is exactly computed (not estimated).

**Current state (v0.3.0):** `ConfidenceValue` and the `confidence` property already exist. The question is whether a computed quantity may carry a confidence stamp that marks it as exact/computed.

**Open question for the reviewer:** confirm whether the existing `confidence` / `ConfidenceValue` vocabulary already lets a computed quantity be stamped as exact, or whether an enumeration member or an admitted path is missing. Prefer reusing the existing term over adding one.

## 3. California worked-example set — identifier and source-citation conventions

**Raised (contribution):** the California worked-example set (the generation-versus-delivery split, a machine-readable generic price feed with resolvable applicability, and an externally-priced community-choice generation component) will be built as a post-launch contribution to sit alongside the Consolidated Edison example, and serves as an independent second-corpus check that the same inputs resolve to the same snapshot.

**Action:** agree the identifier conventions (identifier schemes, `@id` and file-naming patterns) and the source-citation conventions so the California set sits cleanly beside the existing example. This is a conventions-alignment task, not a vocabulary change.

## Related vocabulary gaps — already tracked (no action here)

The two known vocabulary gaps confirmed to stay on the post-launch backlog with interim modeling that validates are already tracked as unassigned tasks:

- **Additive / relative tier bound (baseline-allowance delta)** — [`task.urpx.ont.2026-07-13.gh-32.additive-tier-bound-allowance.md`](task.urpx.ont.2026-07-13.gh-32.additive-tier-bound-allowance.md) (GitHub #32).
- **Gating a derived quantity on a condition** — [`task.urpx.ont.2026-07-13.gh-25.conditional-derived-quantity.md`](task.urpx.ont.2026-07-13.gh-25.conditional-derived-quantity.md) (GitHub #25).

Address these when a concrete need or contribution arrives, not as a pre-publication task.
