---
id: taskurpxontdcjv030reviewresponse
title: "Track responses to DCJ's v0.3.0 review"
desc: "Tracking task for the WG v0.3.0 review from DCJ: one row per point (assents, Q1-Q6, two Minor items, gaps #32/#25, the California worked-set offer), each with our position and a completion mark, so we can show when each was answered and closed. Links the source issues, Don's notes, our response report, and the (unassigned) design tasks spun off from it."
updated: 1783900800000
created: 1783900800000
---

# Track responses to DCJ's v0.3.0 review

| Field | Value |
|-------|-------|
| **Status** | Open — responses drafted, chair rulings partly recorded; close each row as it is answered and confirmed |
| **His notes** | `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md` |
| **Our response** | `dev-docs/reports/report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md` |
| **Candidate reviewed** | `dev-docs/reports/report.urpx.ont.2026-07-07_urpx-model-update-walkthrough.md` |
| **Source issues** (WG access) | [#25](https://github.com/urpx-org/urpx/issues/25), [#32](https://github.com/urpx-org/urpx/issues/32) |

Mark each row `[x]` when our answer is drafted-and-recommended; the chair converts to `[xK]`
(or `[KDS …]`) when she has confirmed it and it is communicated back to Don / the WG. Design
and authoring work is spun off into **unassigned** tasks any WG member may pick up.

## Points to answer

- [x] **Bottom line — assents.** Don assents to all three §8 checks incl. the
  `RatePlanVersion` re-meaning → clears the assent gating the release + license transition.
  *Answered 2026-07-13 (record only).*
- [KDS] **Q1 — Deterministic resolution.** Position: **agree it must be deterministic, but the
  reconciliation transform is out of URPX scope** (business logic; the WG is not responsible
  for correctly-resolved `RatePlanVersion` instances). URPX hardens the schema *below* the
  version and provides the bridge; it does not author a resolution procedure. No design task;
  scope line recorded under the boundary decision row.
- [KDS] **Q2 — Machine-readable applicability on generic feeds.** Recommend requiring a
  resolvable `ConditionExpression` + a worked example (this *is* hardening the below-version
  schema). → unassigned task `task.urpx.ont.2026-07-13.machine-readable-generic-applicability.md`.
- [KDS] **Q3 — What a corpus publishes.** Both are supported, publisher's choice: (a) publish
  authored `PricingModel`s (+ filings) and let reconciliation derive the `RatePlanVersion`,
  **or** (b) publish a fully-baked `RatePlan` + `RatePlanVersion` directly with **no**
  underlying `PricingModel`. URPX carries whichever is chosen.
- [KDS] **Q4 — Window-scoped prices vs successive filings.** Statements → filing-per-event
  supersession thread; feeds → single `PricingModel` with windows. → unassigned guidance task
  `task.urpx.ont.2026-07-13.window-vs-filing-authoring-guidance.md`.
- [KDS: yes, a task can be created for someone to produce this] **Q5 — Partial
  (externally-priced) worked example.** Produce a CCA/DA partial snapshot; `CoverageClaim` =
  verdict, externality carried by `PriceDefinitionReference`. → unassigned task
  `task.urpx.ont.2026-07-13.partial-externally-priced-snapshot-example.md`.
- [KDS yes ok] **Q6 — RIN on the resolved snapshot.** Allow `hasIdentifier` on
  `RatePlanVersion` (carry, not resolve-from).
- [KDS] **Minor 1 — `confidence` for a computed value.** Recommend adding a `computed`/`derived`
  `ConfidenceValue` member, folded into walkthrough §7.3 confidence work.
- [KDS]: as long as the PricingModel instances have their own source references this is technically possible, however the "advice letter" should be its own "informational" tariffFiling associated with the change reason. Also this risks scope creep further into workarounds around current tariff filing systems or an ontology for public service commission filings. That is out of scope
 **Minor 2 — many schedules per filing.** One advice letter = one `TariffFiling` → one
  `PricingModel` per schedule; `containsPricingModel` is 1→many. Confirm.[KDS yes technically possible and valid]
- [KDS] **Decision — representation vs. operational boundary.** Chair's principle (URPX
  represents publications; it does not model the publication event, and resolution is
  operational). Also settles Q1/Q3/Q4. **Chair: add to the July 14 urpx-wg agenda with draft
  discussion notes; candidate for `dev-docs/decisions/`.**
- [KDS] **Gap #32 — Additive / relative tier bound.** Recommend trying `basedOn`/adder reuse
  before a new `upperBoundDelta`. → unassigned task
  `task.urpx.ont.2026-07-13.gh-32.additive-tier-bound-allowance.md`. Issue [#32](https://github.com/urpx-org/urpx/issues/32).
- [KDS] **Gap #25 — Gating a derived quantity on a condition.** Recommend
  `hasConditionExpression` on the derived `MetricInput`, with a "no rule engine" boundary.
  → unassigned task `task.urpx.ont.2026-07-13.gh-25.conditional-derived-quantity.md`. Issue [#25](https://github.com/urpx-org/urpx/issues/25).
- [KDS] **Offer — California worked set.** Accept; coordinate as a shared test case exercising
  Q2 + Q5. → unassigned task `task.urpx.ont.2026-07-13.california-worked-example-set.md`.

## Follow-up — DCJ's confirmations (2026-07-14)

Two notes back from DCJ: assent to the filing / snapshot split, and a cross-check of the
walkthrough deck against the shapes. Reply drafted for the chair to send.

- [x] **Minor 2 confirmed — many schedules per filing.** Don confirms a multi-schedule single
  document (CPUC advice letter) maps to several `PricingModel`s in one `TariffFiling`
  (`containsPricingModel` 1→many), each with its own `SourceReference`; delivery vs generation
  and month-over-month stay separate filings. Our answer holds — loop closable. **Relay the
  chair's refinement in the reply:** model the advice-letter cover document as its own
  informational `TariffFiling` carrying the change reason, and keep URPX out of modeling the
  public-service-commission filing *workflow* (out of scope). Confirm this refinement is what
  goes back.
- [x] **Boundary decision confirmed.** Don confirms his reading of "URPX represents publications,
  it does not model the publication event": effective dates and supersession stay asserted data
  (validity windows, effective/expiration dates, supersedes links), never an event model. One
  precision relayed: that ordering data lives on the publication units (`TariffFiling`; and
  `PricingModel` for filing-less content) and, underneath, on the facts (a price carries its own
  start/end; `sunsetOn` marks intentional retirement). Ties to the July-14 agenda decision-doc
  candidate.
- [x] **New — supersession / cancellation / effective-dating domain question (resolved, no model
  error).** Don cross-checked the walkthrough's shift #3 ("lifecycle attaches to `TariffFiling`")
  against the shapes at `236a67f` and found supersedes on `PricingModel` only, no filing-level
  cancellation, and dates not on the filing. **Cause: `236a67f` predates the filing-lifecycle
  vocabulary** — that commit added the walkthrough plus a *draft* ontology/SHACL; the lifecycle
  terms landed at `48cd1af8` ("Add filing lifecycle and identifier vocabulary; complete closed
  shapes"). On current `main` the deck holds: `replaces`/`replacedBy`/`cancelledBy`/`cancelledOn`/
  `cancelsPriceDefinition` are all domain `TariffFiling` (filing-level); `effectiveDate`/
  `expirationDate` are on `TariffFiling` **and** `PricingModel` (filing authoritative when
  present, filing-less models carry their own); `supersedes` is deliberately dual-domain
  (`PricingModel ∪ TariffFiling`) — filing chain plus authored-model thread, as its `skos:note`
  states. Correct Don's intended reading to the two-layer split, not "lifecycle on the authored
  PricingModel." Reply carries the California threading guidance.
- [x] **Process — review packet pointed reviewers at a pre-vocabulary commit.** `236a67f` is
  behind the candidate vocabulary (`48cd1af8`), so reviewers hit a phantom deck-vs-shapes
  mismatch. Point the v0.3.0 review materials at `48cd1af8` or later (ideally a tagged candidate)
  before the WG review meeting so nobody else repeats it. Sequence with the review-packet / WG
  meeting prep.

## Done when

Every row is confirmed by the chair (`[xK]`) and communicated back to Don / the WG, and each
spun-off design task is either resolved or carried on its own backlog.
