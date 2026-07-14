---
id: reporturpxontdcjv030reviewresponse
title: "Response to Don Jackson's v0.3.0 review"
desc: "Our point-by-point response to Don Jackson's URPX v0.3.0 review. Don assents to all three §8 checks (incl. the RatePlanVersion re-meaning, which unblocks the release + license transition). For each open question we give a recommended answer with compact options, source references, and links to the tracking task and (unassigned) design tasks. Companion to report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes."
updated: 1783900800000
created: 1783900800000
---

# Response to Don Jackson's v0.3.0 review

His full notes: [dcj-v0.3.0-review-notes](report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md).
Candidate reviewed: [v0.3.0 walkthrough](report.urpx.ont.2026-07-07_urpx-model-update-walkthrough.md).
Point-by-point completion tracked in [task.dcj-v0.3.0-review-response](../tasks/task.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md).
Source issues (WG members have access): [#25](https://github.com/urpx-org/urpx/issues/25), [#32](https://github.com/urpx-org/urpx/issues/32).

Each open item has a **recommended** answer (✅) and the alternatives; recommendations are
provisional until the chair rules. Design/authoring work is spun off into **unassigned**
tasks that any WG member is welcome to pick up.

## Bottom line — assent received

Don assents to all three §8 checks, including the one that gated the release: the
`RatePlanVersion` re-meaning (authored artifact → derived, resolved snapshot). **This clears
the assent §8 asked for before the release and license transition** discussed at #011. No
action beyond recording the assent.

## Q1 — Deterministic resolution *(his headline concern)*

**Ask.** Window selection and confidence blending that produce a `RatePlanVersion` live in
`Evaluation` free-text (walkthrough §6.5); two engines would resolve the same inputs
differently. Should reconciliation be a specified, machine-expressible procedure?

**Our position.** **We agree the result must be deterministic** — the same inputs should
always yield the same resolved `RatePlanVersion`. But **defining that reconciliation
transform sits outside URPX's scope.** Resolution is business logic, and the working group
does not take on responsibility for guaranteeing correctly-resolved `RatePlanVersion`
instances; that belongs to consuming implementations. The group's focus is **hardening the
schema *below* the version** — the authored `PricingModel` / `PriceDefinition` layer and the
links that make a corpus assemblable — and providing a clean **bridge** from that layer to
the resolved snapshot. The redesign is that bridge; it is deliberately not a workaround for
current static-publication methods, and it does not pull the resolution step inside the
standard.

So: **determinism — yes, and we endorse it as an expectation on any conformant resolver;** a
URPX-authored resolution algorithm — no, out of scope. What URPX *can* do is keep the
below-version schema tight enough (see Q2) that a deterministic resolver is possible against
it.

→ No design task (out of scope). The scope line is recorded under the representation /
operational boundary decision below. Refs: walkthrough §6.5, §7.3.

## Q2 — Machine-readable applicability on generic feeds

**Ask.** The market feed's `ApplicabilityGroup` carries only a prose `name` (§6.4); a
consumer then cannot determine which rate plans / qualifier combinations it applies to. Show
a generic package whose applicability is a resolvable `ConditionExpression`.

This is squarely in scope — it *is* hardening the below-version schema.

- ✅ **A. Require a resolvable `ConditionExpression`** on generic packages (bare `name` is illustrative only); publish a worked example. *Pro:* the corpus becomes enumerable against the schema; matches the ontology note ("ServiceClass/RIN URI via ConditionExpression"). *Con:* a SHACL constraint must be scoped so it doesn't reject packages reached another way.
- **B. Keep `name` optional, guidance-only.** *Pro:* no shape change. *Con:* leaves the gap open.

→ **Recommend A.** Task (unassigned): [machine-readable-generic-applicability](../tasks/task.urpx.ont.2026-07-13.machine-readable-generic-applicability.md). Refs: walkthrough §6.4.

```json
// sketch: generic feed applicability as a resolvable condition, not a prose name
{ "@type": "urpx:ApplicabilityGroup",
  "urpx:hasConditionExpression": { "@type": "urpx:ConditionExpression",
    "urpx:rootNode": { "@type": "urpx:ComparisonNode",
      "urpx:operator": { "@id": "urpx:equalsOperator" },
      "urpx:leftOperand": { "@type": "urpx:ObjectOperandNode", "urpx:conditionProperty": { "@id": "urpx:hasServiceClass" } },
      "urpx:rightOperand": { "@type": "urpx:ObjectOperandNode", "urpx:referencesValue": { "@id": "coned:sc1" } } } } }
```

## Q3 — What a corpus should publish *(chair-answered)*

**Ask.** Authored `PricingModel`s inside `TariffFiling`s, resolved `RatePlanVersion`
snapshots directly, or both?

→ **Answer: both are supported, publisher's choice.** A utility may (a) publish authored
`PricingModel`s (+ filings) and let reconciliation derive the `RatePlanVersion`, **or** (b)
publish a fully-baked `RatePlan` + `RatePlanVersion` directly, with **no** underlying
`PricingModel`. URPX carries whichever the publisher chooses and does not require the
authored layer to exist when a resolved snapshot is published directly. (Consistent with Q1:
who resolves, and whether resolution happens at all, is the publisher's/consumer's call.)

## Q4 — Window-scoped prices vs successive filings *(chair-confirmed)*

**Ask.** Monthly changes as a supersession thread of filings (the MAC) or one `PricingModel`
with validity-dated windows (the MSC) — which when?

→ **Answer:** the two forms in the example *are* the guidance —
**regulated statements → one `TariffFiling` per publication event** (supersession thread);
**market/dynamic feeds → a single `PricingModel` with validity-dated windows.** Task
(unassigned) to write it up: [window-vs-filing-authoring-guidance](../tasks/task.urpx.ont.2026-07-13.window-vs-filing-authoring-guidance.md). Refs: walkthrough §6.3–6.4.

## Q5 — Partial (externally-priced) worked example *(chair: task approved)*

**Ask.** A partial snapshot (CCA/DA: delivery self-contained, generation priced by a third
party) exercising `PriceDefinitionReference` + `retrievedElsewhere`; does `CoverageClaim`
enumerate which components are external?

→ **Answer:** **yes, produce the partial example.** On the sub-question: `CoverageClaim`
states the *verdict* (complete/partial, self-contained or not — `selfContained` derived from
any `retrievedElsewhere`); *which* components are external is carried by the
`PriceDefinitionReference` relators, not enumerated separately on the claim. Task
(unassigned): [partial-externally-priced-snapshot-example](../tasks/task.urpx.ont.2026-07-13.partial-externally-priced-snapshot-example.md). Refs: walkthrough §6.5.

## Q6 — RIN on the resolved snapshot *(chair-confirmed)*

**Ask.** A RIN names a *resolved* rate plan version, but `hasIdentifier` attaches only to
`RatePlan` / `RatePlanModifier`, not `RatePlanVersion`. Can a snapshot carry its RIN?

→ **Answer: A — allow `hasIdentifier` (a `RatePlanIdentifier`) on `RatePlanVersion`**, to
carry the RIN as a label on the resolved snapshot, not as a resolve-from key (Don explicitly
disclaims reverse mapping). *Why:* the consumer's resolved snapshot then shows the same
identifier the customer sees on the bill, which a plain `forRatePlan` → `RatePlan` link
cannot give at the right granularity (the snapshot varies per window/qualifier; the plan's
RIN does not).

## Minor 1 — `confidence` for a computed value

**Ask.** A value computed arithmetically from two published feeds fits none of
`{verified, estimated, projected}`. Is "estimated" intended, or is computed provenance out
of scope?

- ✅ **A. Add a `computed`/`derived` member** to `ConfidenceValue`, folded into the §7.3 work that already moves confidence to a first-class `CoverageClaim` placement. *Pro:* an exact-but-derived value is neither a guess (`estimated`) nor a forecast (`projected`). *Con:* one enum member + doc.
- **B. Treat it as `estimated`** and document. *Pro:* no vocabulary change. *Con:* overloads "estimated" and loses the distinction his downstream cares about.

→ **Recommend A**, tracked with walkthrough §7.3.

## Minor 2 — many schedules per filing + the publication boundary

**Ask.** A CPUC advice letter publishes many schedules at once; is `containsPricingModel`
one `TariffFiling` → many `PricingModel`s?

→ ✅ **Yes — one advice letter = one `TariffFiling` → one `PricingModel` per schedule**, each
with its own `SourceReference` into that publication. This matches the physical publication
and Don's read, and is consistent with the chair's principle below. (The alternative — one
`TariffFiling` per schedule — would fragment a single regulatory document and misrepresent
the publication.)

**Chair's governing principle (recorded).** *A `TariffFiling` is one document each, with its
own source reference; bundling unrelated models into one filing has no benefit and would not
represent the actual publications. URPX represents publications; it does not model the
publication event — that boundary is where representation ends and operations begin.* This
principle also answers Q1 (resolution is operational), Q3 and Q4, and is queued as a standing
decision (chair: to the **July 14 urpx-wg agenda with draft discussion notes**; candidate for
`dev-docs/decisions/`).

## Gap #32 — Additive / relative tier bound

**Ask.** Baseline allowances publish as a signed delta on a tier bound (PG&E Medical Baseline
+16.438 kWh/day); `ServiceBracket` bounds are absolute and `ServiceBracketShape` is closed,
so the delta never appears as data and one allowance fans out into many cells.

- **A. Precompute absolute cells (status quo).** *Pro:* no change. *Con:* the published delta is lost; ~240 entities/schedule.
- ✅ **B. Reuse `basedOn` + adder, lifted to bounds** — the pattern Don already found for prices (#24, #18). *Pro:* no new vocabulary if it carries; consistent with existing arithmetic. *Con:* must confirm it can target a bound, not only a price.
- **C. New signed `upperBoundDelta`** (Don's sketch). *Pro:* "one number for a one-number problem". *Con:* needs a base-bound reference mechanism (his "no relator" leaves *which* bound underspecified) and an `sh:xone` on a closed shape.
- **D. Defer / prose-only.**

→ **Recommend: resolve in task, trying B before C** (reuse before new vocabulary). Task (unassigned): [gh-32.additive-tier-bound-allowance](../tasks/task.urpx.ont.2026-07-13.gh-32.additive-tier-bound-allowance.md). Issue [#32](https://github.com/urpx-org/urpx/issues/32). His sketch:

```json
{ "@id": "pge:e1-medbaseline/tier1-delta", "@type": "urpx:ServiceBracket",
  "urpx:serviceTierNumber": 1, "urpx:upperBoundDelta": 16.438,
  "urpx:appliesInSeason": { "@id": "urpx:summerSeason" } }
```

## Gap #25 — Gating a derived quantity on a condition

**Ask.** A standby credit subtracts a DER's generation only when it is non-operational; the
`calculationRule` node has nowhere to carry the condition.

- ✅ **A. `hasConditionExpression` on the derived `MetricInput`** — reuses the `ConditionExpression` grammar; leaves the closed `calculationRule` node untouched. *Pro:* minimal; the condition sits on the thing being derived. *Con:* introduces conditional evaluation into the calculation layer — bound it to a single gated derivation.
- **B. Scope via an `ApplicabilityRule`** (his alternate sketch). *Pro:* reuses an existing scoping node. *Con:* risks overloading applicability (which prices apply) with a derivation gate — a known failure mode.
- **C. `calculationFormula` prose escape hatch.** *Pro:* no change. *Con:* not machine-resolvable.
- **D. Defer.**

→ **Recommend: resolve in task, leaning A with an explicit "no rule engine" boundary.** Task (unassigned): [gh-25.conditional-derived-quantity](../tasks/task.urpx.ont.2026-07-13.gh-25.conditional-derived-quantity.md). Issue [#25](https://github.com/urpx-org/urpx/issues/25). His sketch is in the [notes](report.urpx.ont.2026-07-13.dcj-v0.3.0-review-notes.md#2-gating-a-derived-quantity-on-a-condition-25).

## Offer — a California worked set

Don offers to build the identity / filing / statements / feed / resolved-snapshot set for a
California rate plan exercising the generation-vs-delivery split, a MIDAS feed, and an
externally-priced CCA component, as a candidate test case.

→ **Recommend: accept.** It directly exercises Q2 (generic-feed applicability) and Q5
(partial snapshot) against real data, and a second independent corpus is the strongest test
of whether resolution is deterministic across implementations. Task (unassigned) to
coordinate: [california-worked-example-set](../tasks/task.urpx.ont.2026-07-13.california-worked-example-set.md).
