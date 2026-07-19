---
id: reporturpxontdcjv030reviewnotes
title: "DCJ — review of the URPX v0.3.0 candidate (WG #012 pre-read)"
desc: "DCJ's reaction, questions and comments on the URPX v0.3.0 candidate walkthrough, grounded in urpx-org/urpx@236a67f: a Bottom line (three assents), where the model lands well for a California corpus, six questions (led by whether a corpus resolves deterministically), two Minor items, an offer to build a California worked set, the reconciled California backlog, and a two-shape companion (issues #32 and #25). Saved 2026-07-13; our response is in report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response."
updated: 1783900800000
created: 1783900800000
---

# DCJ — review of the URPX v0.3.0 candidate (WG #012 pre-read)

> **Editorial notes (ours, not DCJ's).** Bracketed **`[plan]`** insertions mark where DCJ's
> "rate" means the *rate plan* (the stable identity), to keep it distinct from a rate group,
> a price, or a schedule. DCJ also coins **"leaf"** for the resolved `RatePlanVersion`; we
> flag it at first use and **do not adopt the term** — "leaf" reads as a static published
> artifact and belongs to the `TariffFiling` domain, whereas the resolved snapshot is the
> derived, machine-readable thing. See our [response](report.urpx.ont.2026-07-13.dcj-v0.3.0-review-response.md).

Grounded in the v0.3.0 candidate at urpx-org/urpx@236a67f: the [model-update walkthrough](https://github.com/urpx-org/urpx/blob/236a67fcccf187fc3ff4bc98985ceb10c6c7c40e/dev-docs/reports/report.urpx.ont.2026-07-07_urpx-model-update-walkthrough.md) we're reacting to, plus the ontology, the SHACL, and the ConEd SC1 Rate I worked example set.

## Bottom line

The direction is right, and we're glad to see it carried all the way through the vocabulary, the shapes, and an end-to-end example. Answering the three things §8 asks the group to check:

1. **Does the model match the direction from the last two meetings?** Yes. Making the plan a stable identity and having published pricing point *at* it (`PricingModel` → `referencesRatePlan` / applicability) is the inversion we were hoping for.
2. **Does the worked set cover our publication patterns?** It covers the core fragmentation well. Three California patterns sit just outside what the ConEd example exercises; we name them below and would be glad to run the same five-part exercise against a California rate [plan].
3. **Explicit assent to the `RatePlanVersion` re-meaning.** Yes: re-meaning it as the derived, resolved snapshot (rather than an authored artifact) matches how we actually consume this data. We assent.

Our one substantive concern, detailed below, is whether the general case is mechanically resolvable end to end (not just the hand-authored example): whether a downstream engine can turn a corpus of these documents into fully-qualified, date-addressable priced rate [plan] versions without human interpretation in the loop. That is the thing we'd most like to close, and it's the lens behind most of the questions that follow.

For context, the candidate also resolves several things we'd raised earlier: the reference-direction inversion (our standalone-modifier `applicableToRatePlan` question, [#23](https://github.com/urpx-org/urpx/issues/23)), `SourcePublication` + `publicationType` in place of the per-document-type classes (our `URPXDocument` packaging question, [#26](https://github.com/urpx-org/urpx/issues/26)), and lifecycle moving to the filing (our cross-filing supersession question, [#16](https://github.com/urpx-org/urpx/issues/16)). Seeing those fold into one coherent reframe is great.

## Where the model lands well for a California corpus

* **Partial-by-design `PricingModel`.** California delivery and generation almost never arrive in one artifact; a citable unit that may cover only part of a plan is exactly what we need.
* **`SourcePublication` + `publicationType`.** Tariff book, tariff statement, market price feed as values rather than classes matches how our sources actually differ.
* **The `ConditionExpression` grammar.** The `NOT(hasServiceClass = SC11)` tree in the MAC statement is the kind of structured eligibility we need for CARE/FERA, medical baseline, NBT, and CCA-vs-bundled cohorts, without falling back to prose.
* **`ca-midas-rin` as a first-class identifier scheme.** In California the RIN is the customer-facing identifier for a customer's resolved rate [plan]: it appears on the bill and is the key under which the utility uploads that rate [plan]'s prices to the state MIDAS feed. A typed identifier scheme for it is genuinely useful; we'd raised RIN modeling in [discussion #46](https://github.com/urpx-org/urpx/discussions/46) and are glad to see `ca-midas-rin` as a documented convention.
* **Facts keep their own validity dates; the snapshot doesn't clip them.** This matches MIDAS exactly, where each price carries its own start/end.
* **The self-contained snapshot with provenance preserved.** Carrying every node in full while keeping its published URI is precisely how we'd want a consumer artifact to behave.

## Questions from applying the candidate to California

Working through the ConEd example against our corpus surfaced a set of questions. We may be missing an existing pattern in each case; where that's so, a pointer is all we need.

### The question underneath the rest: can a corpus be resolved end to end?

Everything else here is downstream of one requirement. We consume this data by resolving a corpus of URPX documents into fully-qualified, date-addressable rate [plan] versions: walking the links to assemble each plan and the pricing that applies to it, enumerating every distinct qualifier combination the plan fans out into (service class, rate group, zone, tension, cohort eligibility), and resolving each one to a `RatePlanVersion`, the candidate's term for the derived, resolved snapshot ("the read artifact"), which is the fully-qualified rate [plan] version we'll informally call a *leaf* [ed.: = the resolved `RatePlanVersion`; we do not adopt "leaf" — see response] below. Each leaf is what our downstream turns into a real-time price stream (one OpenADR 3 program per leaf).

The candidate draws a compute-scope line here that we read as exactly right: the `RatePlanVersion` carries the scenario-independent resolved facts, and the `ScenarioCostModel` / `ScenarioCostResult` pair is the computation contract for applying usage and time, with execution engines placed explicitly outside URPX scope. We are not asking URPX to compute prices; that sits on our side of that line. We are asking that everything *up to* the line, producing the resolved `RatePlanVersion` from a corpus, can be done by a downstream engine deterministically and without human interpretation. The candidate is close: the resolved `RatePlanVersion` in the example is exactly the shape of snapshot we need, and the links to assemble the tree (`referencesRatePlan`, `hasIdentifier`, applicability, `containsPricingModel`, `forRatePlan`, `documentedBy`) are present. Two things in the example give us pause about whether the general case is mechanically resolvable.

**1. Is resolution deterministic, or does it depend on prose?**

The resolved snapshot's reconciliation rules appear to live in the `Evaluation`'s free-text `description`: derived confidence as "min of contributing packages," and window selection ("the statements from the version effective date through the most recent published one," "the cycle price covering the effective date and the most recent published future cycle"). In the one example the MAC materialises four windows and the MSC materialises two, under policies stated only in prose. A downstream engine that has to read English to know which windows to include, or how to bound them, cannot resolve a corpus mechanically, and two engines will resolve the same inputs differently. Is the intent that reconciliation follows a specified, machine-expressible procedure (so any two consumers produce the same resolved snapshot from the same inputs), with the `Evaluation` as a human-readable record of a deterministic result rather than the definition of it? Reconciliation produces the `RatePlanVersion`, so its determinism is what makes the whole pipeline reproducible; the cost computation past it is already, rightly, ours.

**2. Are the applicability qualifiers machine-readable?**

The applicability conditions are what enumerate the distinct qualifier combinations of a rate [plan]: each distinct qualifier combination that selects a different price set (Rate I / Zone J / low tension, bundled vs CCA) is a distinct resolvable rate [plan] version. In the example these are modeled at two fidelities: the MAC carries a full `ConditionExpression`, while the market feed's `ApplicabilityGroup` carries only a `name` ("Full Service customers, Rate I, Zone J, low tension"). The ontology note says packages reach plans via "ServiceClass/RIN URI via ConditionExpression," so we read the bare-name form as illustrative. But if a generic feed's applicability is only a prose label, a consumer cannot determine which plans and which qualifier combinations it applies to, and so cannot enumerate them at all. Could we see a market/generic package whose applicability is a resolvable `ConditionExpression` (testing service-class, zone, or tension URIs)? Nearly all of our generation and NBT pricing arrives as generic feeds reached this way, so this mechanism is what makes the corpus enumerable.

### Clarifications we'd value before building against the candidate

**3. Where the resolution boundary sits.** Given the above, our concern is not who runs the resolver but that the corpus is resolvable end to end. Concretely: is a source-conversion corpus like ours expected to publish authored `PricingModel`s inside `TariffFiling`s (carrying the links and applicability a consumer needs to resolve the snapshots), to publish resolved `RatePlanVersion` snapshots directly, or both? We are glad to publish whichever form carries the resolvable structure. What we need to confirm is that between what we publish and what a consumer computes, nothing essential to resolving a rate [plan] version is left to human interpretation. (This follows directly from question 1.)

**4. Window-scoped prices vs successive filings.** The example expresses monthly-changing prices two ways: the MAC as a supersession thread of one `TariffFiling` per month, and the MSC as a single `PricingModel` with many validity-dated windows. Our MIDAS-derived feeds update monthly and could be modeled either way. Is there authoring guidance on which form to use when (regulated statement vs market feed), so two implementers converge?

**5. A worked example with externally-priced components.** The mechanism for partial coverage is present (`PriceDefinitionReference` with `referenceInclusion` = `retrievedElsewhere`, and `selfContained` derived from it), but the ConEd snapshot is fully self-contained, so it isn't exercised. Our common California case is a CCA or Direct Access customer: delivery is complete and self-contained, generation is priced by a third party. A worked *partial* snapshot would let us confirm we're using `PriceDefinitionReference` / `retrievedElsewhere` as intended, and we'd want to check whether the `CoverageClaim` is meant to enumerate which components are external or leave that to the `PriceDefinitionReference` relators plus the `Evaluation` prose.

**6. Where the MIDAS RIN attaches.** Operationally a RIN names a customer's *resolved* rate [plan]: it is the identifier printed on the bill and the key under which the utility publishes that rate [plan]'s prices, so it points at a fully-resolved snapshot. In the candidate, `hasIdentifier` attaches a `RatePlanIdentifier` to a `RatePlan` or `RatePlanModifier` (the identity), but not to the resolved `RatePlanVersion`. Is there an intended way for a resolved snapshot to carry its RIN, so the snapshot a consumer produces is labeled with the same identifier the customer sees? We ask only about carrying the RIN as an identifier, not about resolving from it: there is no general public mapping from a RIN back to a tariff filing today, so we don't assume one.

### Minor

1. `confidence` is `{verified, estimated, projected}`. A value we compute arithmetically from two published feeds (our derived generation cells) doesn't obviously fall into any of the three. Is "estimated" the intended bucket for a computed value, or is derived/computed provenance out of scope for `confidence`?

2. A California regulatory filing (a CPUC advice letter) typically publishes many schedules at once. We read `containsPricingModel` as one `TariffFiling` to many `PricingModel`s; a quick confirmation would be helpful.

## Offer

Section 8 invites naming a missing pattern and repeating the five-part exercise against it. We'd be glad to build the same identity / filing / statements / feed / resolved-snapshot set for a California rate [plan] that exercises the generation-vs-delivery split, a MIDAS price feed, and an externally-priced component (CCA generation). If useful, we can share it as a candidate test case alongside the ConEd set.

Thanks again to the URPX team for carrying the reframe all the way through to a working example. It's a substantial step, and it lines up well with the data we work with.

---

## California backlog worked against the candidate

We then worked our full California backlog against the candidate: every rate [plan] pattern we had parked as "we cannot express this yet." The honest result is that most of those were our own gap, not the model's. We found existing constructs that carry them, and we validated the encodings against your v0.3.0 SHACL shapes (each conforms). We are revising the corpus to use them. Specifically:

* Two independent alternative axes at once (income tier by baseline territory), our [discussion #31](https://github.com/urpx-org/urpx/discussions/31): a single `ProfileAlternatives` with multiple `AlternativeDimensions` is the matrix, exactly as the vocabulary note says. Expressible today.
* Percentage-of-bill and computed discounts (CARE / FERA, primary-voltage), [#24](https://github.com/urpx-org/urpx/issues/24): `basedOnPrice` + `multiplier` on the discount line. Our earlier confusion was a net-versus-line-item modeling error on our side.
* Percent-of-baseline usage caps (EV2's 800% of baseline), [#18](https://github.com/urpx-org/urpx/issues/18): an `OperationNode` multiply over a referenced `MetricInput`; the shape of the operand tree carries the "percent of" meaning.
* Cross-schedule price reference (E-16 energy equals E-2 energy plus riders), [discussion #33](https://github.com/urpx-org/urpx/discussions/33): `basedOnPrice` across plans plus adder; there is no plan-boundary constraint, so it validates as is.
* Site and account aggregation (sum demand across meters), [discussion #29](https://github.com/urpx-org/urpx/discussions/29): an `aggregatedMetricInput` whose `calculationRule` carries `formula` + `calculatedBasedOn`, the same shape as the net-export example.
* Assistance-program recognition (CARE as low income, cross-utility), [#10](https://github.com/urpx-org/urpx/issues/10): comparing `programType` to `lowIncomeProgram` directly, which we had been escaping to free text unnecessarily.

Two patterns still look like genuine gaps, where we tried and could not find a path; we sketch rough shapes for both in the companion below, offered as ideas if you confirm there is no existing path we have missed.

---

## Companion: two shapes we would find useful

These are discussion sketches, not a spec, and either may dissolve if you point us at the right construct.

### 1. An additive or relative tier bound ([discussion #32](https://github.com/urpx-org/urpx/discussions/32))

**The case.** Baseline allowances publish as a signed delta on an existing tier bound. PG&E Medical Baseline adds +16.438 kWh/day to the Tier 1 allowance; SCE heat-pump water heater adds +1.9 / 2.6 / 3.0 kWh/day by season.

**Where we are stuck.** `ServiceBracket` carries absolute bounds only (`upperBound` / `lowerBound`), and `ServiceBracketShape` is closed, so we can record a recomputed absolute ceiling per territory, season, and schedule cell, but the published figure (the delta) never appears as data, and one allowance fans out into many precomputed cells.

**Rough shape.** One signed datatype property on `ServiceBracket`, `upperBoundDelta` (`xsd:decimal`), admitted as an alternative to (and mutually exclusive with) an absolute `upperBound`, so a delta bracket shifts the base tier's bound. The sign carries add versus subtract; per-season variants ride the existing `appliesInSeason`. A `lowerBoundDelta` twin only if a real lower-tier case turns up. No operator property and no new relator: one number for a one-number problem.

```json
{
  "@id": "pge:e1-medbaseline/tier1-delta",
  "@type": "urpx:ServiceBracket",
  "urpx:serviceTierNumber": 1,
  "urpx:upperBoundDelta": 16.438,
  "urpx:appliesInSeason": { "@id": "urpx:summerSeason" }
}
```

### 2. Gating a derived quantity on a condition ([#25](https://github.com/urpx-org/urpx/issues/25))

**The case.** A standby credit subtracts a DER's maximum generation from billing demand only when that DER is non-operational. The subtraction is a derivation; the "only when non-operational" is a condition on it.

**Where we are stuck.** The two facts around it are already expressible: eligibility without enrollment as an `EligibilityRule` + `ConditionExpression`, and "non-operational" as `interconnectionStatus` equals `disconnectedStatus`. What we could not find is a place to attach a condition to a derived quantity: the `calculationRule` node is closed to `formula` and `calculatedBasedOn`.

**Rough shape.** Let the derived `MetricInput` carry a `hasConditionExpression`, or scope it with an `ApplicabilityRule` that does, so the derivation fires only when its condition holds. This reuses the existing `ConditionExpression` grammar rather than adding new logic, and keeps the closed calculation node untouched.

```json
{
  "@id": "cpau:ar-standby-credit",
  "@type": "urpx:ApplicabilityRule",
  "urpx:hasConditionExpression": {
    "@type": "urpx:ConditionExpression",
    "urpx:rootNode": {
      "@type": "urpx:ComparisonNode",
      "urpx:operator": { "@id": "urpx:equalsOperator" },
      "urpx:leftOperand": {
        "@type": "urpx:ObjectOperandNode",
        "urpx:conditionProperty": { "@id": "urpx:interconnectionStatus" }
      },
      "urpx:rightOperand": {
        "@type": "urpx:ObjectOperandNode",
        "urpx:referencesValue": { "@id": "urpx:disconnectedStatus" }
      }
    }
  }
}
```
