<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX Test Data Review Guide

**Version**: 0.3.0 (Pre-draft)
**Last Updated**: 2026-07-07
**Status**: Active

**How to review a URPX JSON-LD test case against its source tariff book**

[← Back to Index](/docs/getting-started/overview)

---

## Overview

This guide is for reviewing URPX test data in `test-cases/`, especially JSON-LD rate plans derived from tariff book PDFs.

The review has two goals:

1. **Validation**: the JSON-LD should conform to the URPX ontology and SHACL shapes.
2. **Fidelity**: the JSON-LD should faithfully represent the tariff book source without dropping material information, inventing unsupported data, or modeling the tariff book in the wrong URPX pattern.

SHACL validation is necessary, but it is not sufficient. A file can pass SHACL and still omit a TOU period, flatten a customer choice into prose, or attach applicability at the wrong level.

---

## Review Inputs

Before review, gather:

- the source tariff book PDF
- the URPX JSON-LD file
- the current ontology: [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- the current SHACL shapes: [`shacl/urpx-shacl.ttl`](/ontology/urpx-shacl.ttl)
- any extraction notes, audit logs, or transformation notes if available

Example review pair in this repository:

- PDF: [`test-cases/pge-e-elec/assets/PGE_E-ELEC_2026-01-01.pdf`](../../test-cases/pge-e-elec/assets/PGE_E-ELEC_2026-01-01.pdf)
- JSON-LD: [`test-cases/pge-e-elec/data/urpx-rate-plan_pge_e-elec.jsonld`](../../test-cases/pge-e-elec/data/urpx-rate-plan_pge_e-elec.jsonld)

---

## Review Workflow

Use this order:

1. [Clone the repository](#1-clone-the-repository).
2. [Confirm the review scope](#2-confirm-scope-before-comparing-details).
3. [Run SHACL validation](#3-run-shacl-validation).
4. [Review rule logic: eligibility, applicability, and customer choice](#4-review-rule-logic-carefully).
5. [Review TOU schedules and time brackets](#5-review-tou-schedules-and-time-brackets).
6. [Review service tiers, metrics, and calculation basis](#6-review-service-tiers-metrics-and-calculation-basis).
7. [Review billing structure and prices](#7-review-billing-structure-and-prices).
8. [Verify provenance back to the tariff](#8-verify-provenance-back-to-the-tariff).
9. [Record findings and open questions](#9-record-findings-and-open-questions).

The sections below expand each step in order.

---

## 1. Clone the Repository

Clone the repository before starting review so you can inspect the current ontology, SHACL, examples, and supporting notes together.

From this document, the current ontology and SHACL files are at:

- [`../../ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- [`/ontology/urpx-shacl.ttl`](/ontology/urpx-shacl.ttl)

---

## 2. Confirm Scope Before Comparing Details

Start with the basic question: **Did the transform model the right tariff book artifact?**

Check:

- the correct utility and schedule name
- the correct effective date or effective datetime
- whether the source is a full rate plan, one tariff book sheet, or only part of a larger filing
- whether the JSON-LD represents one version or several versions
- whether optional riders, credits, and special conditions from the source are intentionally in or out of scope

Common mistakes:

- a tariff book contains multiple rate plans but the JSON-LD silently mixes them
- a filing effective date is captured, but the price values are copied from a different revision
- only table data is modeled, while eligibility prose and footnotes are dropped

At this stage, also check:

- `urpx:targetURPXVersion` (on the `URPXPackage`)
- `urpx:ratePlanUniqueIdentifier`
- `urpx:initialEffectiveDate`
- `urpx:effectiveDate` or `urpx:effectiveDateTime`
- `urpx:changeReason`
- `urpx:priceCurrency`
- `urpx:forRatePlan` on every `RatePlanVersion`: the version must point at the right plan identity
- `urpx:hasCoverageClaim` on every version, and whether the claimed `completenessResult` and `selfContained` value are actually true of the file: a version claiming `complete` while a component is only referenced externally is a review finding
- `urpx:hasRateCase`, if the tariff book references a rate case or docket

---

## 3. Run SHACL Validation

Run SHACL first so structural and datatype issues do not distract from the tariff book review.

### Step by Step

1. From the repository root, create or activate a Python environment.
2. Install `pyshacl`.
3. Run validation against the JSON-LD test case using the URPX ontology and SHACL files.

Example:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install pyshacl
python3 -m pyshacl \
  -df json-ld \
  -sf turtle \
  -ef turtle \
  -s shacl/urpx-shacl.ttl \
  -e ontology/urpx-ontology.ttl \
  -i rdfs \
  -f human \
  test-cases/pge-e-elec/data/urpx-rate-plan_pge_e-elec.jsonld
```

If parser auto-detection has trouble with JSON-LD, rerun with `-df json-ld`.

Interpretation:

- exit code `0`: conformant
- exit code `1`: non-conformant

Passing SHACL means the file is structurally acceptable. It does **not** prove that the tariff book was modeled completely or correctly.

---

## 4. Review Rule Logic Carefully

This is the part most likely to pass a superficial review while still being wrong.

### Eligibility

If the tariff book says who may take service under the rate plan, review `urpx:hasEligibilityRule` first.

Check:

- every material condition in the tariff book appears in the structured rule
- `AND` and `OR` relationships match the tariff book exactly
- the rule is in `urpx:hasConditionExpression`, not left only in free-text description
- the operand type matches the concept being tested
- custom fields are used only when no current ontology property fits

Examples of details to verify:

- customer kind or subkind
- DER requirements such as EV charging, storage, or heat pump participation
- program enrollment requirements
- prior rate plan or enrollment-history conditions

For the condition-expression model, see [`urpx-condition-modeling.md`](urpx-condition-modeling.md).

### Applicability

Applicability answers a different question: **when does a price, price definition, or price set apply?**

Check whether the tariff book condition belongs on:

- `urpx:ApplicabilityRule` for temporal or logical conditions
- `urpx:ApplicabilityGroup` for geography, customer kind, end use, voltage, and similar scope filters

Reviewers should confirm that applicability is attached at the right level:

- on a `PriceDefinition` if the condition is part of the abstract price definition
- on a `Price` if the condition is specific to that dated price instance
- on a `PriceSet` if the condition governs a grouped set of prices

Common mistakes:

- month-based credits modeled only in the price name instead of an applicability rule
- geographic or service-voltage filters described in prose instead of structured applicability
- eligibility that applies across the whole tariff book being attached to an individual price

### Profile Alternatives and Customer Choice

Use `ProfileAlternatives` when the tariff book offers **mutually exclusive options that require an explicit customer or configuration choice**.

Typical examples:

- heating vs. non-heating
- voltage configuration choices
- end-use-based alternatives
- alternate price sets for distinct customer configurations

Reviewers should verify:

- `urpx:hasProfileAlternatives` is present in `PlanElements` when the tariff book truly has alternatives
- `ProfileAlternatives` includes `urpx:hasAlternativeDimensions`
- the alternative set has at least two `urpx:hasProfileAlternative` entries
- each `ProfileAlternative` is clearly named and carries its required `urpx:hasConditionExpression`
- `PriceSetAlternatives` points to the correct `ProfileAlternatives` via `urpx:referencesProfileAlternatives`
- each `PriceSetAlternative` or alternative-specific `PriceDefinition` points to the correct `ProfileAlternative` via `urpx:referencesProfileAlternative`

Do **not** treat an explicit customer choice as if it were only generic applicability. If the tariff book presents alternative configurations that are mutually exclusive, the review should expect the alternatives pattern rather than a flat set of applicability rules.

---

## 5. Review TOU Schedules and Time Brackets

Time-of-use modeling deserves its own pass. Small mistakes here can materially change the meaning of the tariff book.

Check:

- the correct `TOUSchedule` exists for the measured quantity it governs
- the schedule references the correct `MetricInput`
- each tier preserves the utility label in `urpx:tierSourceName`
- each tier uses the appropriate standard tier enum in `urpx:touTierStandardName`
- each distinct TOU period has its own `urpx:touPeriodNumber`
- each `TOUPeriod` contains the full set of `TimeBracket` entries needed for that period
- prices and price definitions reference the intended TOU periods consistently

For each `TimeBracket`, confirm:

- `urpx:startTime`
- `urpx:endTime`
- season linkage when the tariff book is seasonal
- `urpx:dayType`
- any holiday or calendar distinctions, if the tariff book uses them

Review questions:

- Do the brackets cover the intended hours?
- Are there overlaps within the same season and day type that the tariff book does not support?
- Are there gaps where the tariff book implies continuous 24-hour coverage?
- Are split periods modeled as multiple time brackets on the same TOU period when appropriate?
- Are summer and winter periods separated when the tariff book defines them separately?

Particular red flags:

- a TOU price exists, but no `TOUSchedule` or `TOUPeriod` is present
- a TOU period is present, but its hours do not match the PDF
- weekday/weekend distinctions are flattened into `allDays`
- midnight wraparound is handled incorrectly

If the tariff book combines TOU with seasons, tiers, or both, check that those dimensions remain distinct in the model. A seasonal TOU price should not be reduced to only a seasonal label or only a time-of-day label.

---

## 6. Review Service Tiers, Metrics, and Calculation Basis

Next, confirm that the JSON-LD captures **what is being measured** and **how the tariff book calculates the price**.

Check the `MetricInput`, `MetricSpecification`, `ServiceTier`, `PriceDefinition`, and `Price` structure together.

Review questions:

- Is each price based on the correct measurement kind: energy usage, demand, meter count, household count, days, months, or another metric?
- Are units of measure represented correctly?
- Are per-day, per-meter, per-billing-cycle, and per-kWh distinctions preserved?
- Are service tiers modeled where the tariff book has block or threshold pricing?
- If the tariff book combines tiers and TOU, do the prices reference both the service tier and the TOU period appropriately?

Common mistakes:

- per-meter or per-day fixed prices modeled as generic flat prices with no metric basis
- tiered blocks collapsed into plain prices
- TOU and tier logic combined informally in names instead of structured references
- supply and delivery measurements mixed under one metric when the tariff book distinguishes them

---

## 7. Review Billing Structure and Prices

After the structural review, do a line-by-line comparison of tariff book prices to URPX prices.

### PriceDefinition vs Price

In URPX, reviewers should expect:

- `PriceDefinition` for stable price metadata
- `Price` for dated numeric values

Check that:

- the price name, `urpx:chargeType`, `urpx:chargeCategory`, and `urpx:billPortion` are modeled on the right object
- `PriceDefinition` includes `urpx:referencesLedger`
- numeric values are on `Price`
- dates belong on `Price`, not on the price definition

### Completeness

Every material price in the tariff book should land somewhere in URPX:

- minimum or fixed customer prices
- energy prices
- demand prices
- riders and adjustments
- credits
- taxes or regulatory prices if they are in scope for the test case

Ask both directions:

- **Forward check**: did every tariff book price, rule, and schedule element end up in URPX?
- **Backward check**: does every modeled URPX price trace back to the tariff book?

### Numeric Fidelity

For each price, verify:

- exact source value
- correct sign
- correct currency
- correct decimal precision
- correct effective dates

Important checks:

- credits should usually be negative in the price value
- source values should not be silently rounded
- derived totals should not replace atomic tariff book line items unless the test case explicitly intends that simplification

### Unbundled and Grouped Structures

If the tariff book separates supply, delivery, or other ledgers, the JSON-LD should preserve that structure.

Check:

- the right ledgers exist
- `PriceDefinition` objects point to the intended ledger
- grouped prices in `PriceSet` reflect real tariff book grouping, not arbitrary bundling

---

## 8. Verify Provenance Back to the Tariff

Every review should end with a provenance pass.

Check every `DataSourceReference` (attached via `urpx:hasDataSourceReference` or `urpx:documentedBy`) for:

- correct local file or source URL
- `urpx:accessURL` when applicable
- `urpx:mediaType`
- `urpx:dataSourceType`
- `urpx:dateRetrieved`
- `urpx:sourcePublication`: the `SourcePublication` node with the correct `urpx:publicationType` (tariff book vs. statement vs. supplement vs. market price feed) and its own effective date

For a tariff book or statement citation, the page and leaf locators sit directly on the `DataSourceReference`; verify:

- `urpx:pageStart`
- `urpx:pageEnd`
- `urpx:leafStart`
- `urpx:leafEnd`

Review expectation:

- provenance should be precise enough that another reviewer can quickly locate the source passage or table
- broad or generic page ranges should be narrowed where practical
- important rules or unusual prices should have traceable source support

---

## 9. Record Findings and Open Questions

Share review results in the place that best matches the state of the work:

- if the PR is still open and you can make the fix, push changes to the PR branch
- if the PR is still open and you are unsure how to resolve an issue, leave an inline review comment or a natural-language review note on the pull request
- if the PR has already merged and you can make the fix, open a new PR with the proposed change
- if the PR has already merged and you still have review comments or open questions, file a GitHub Issue

### What to Flag in Review

Flag the file if any of the following are true:

- SHACL passes, but a tariff book section is still missing from the model
- structured rules are replaced by prose only but could be modeled with URPX
- profile alternatives are really customer choices, but the file models them as plain applicability
- TOU brackets overlap, leave gaps, or use the wrong day-type or seasonal scope
- prices are attached to the wrong abstraction layer
- credits use the wrong sign
- source values are rounded or normalized without justification
- provenance is too weak to trace the source
- the JSON-LD contains data that cannot be justified from the tariff book or documented review decisions

### Suggested Review Record

Capture findings in a short review note with:

- file reviewed
- source PDF reviewed
- SHACL result
- completeness findings
- modeling findings
- provenance findings
- open questions
- disposition: approved, needs revision, or blocked

Keep findings specific and tied to the file path, tariff book section, and URPX structure involved.

---

## Related References

- [`urpx-quality-assurance.md`](urpx-quality-assurance.md)
- [`urpx-condition-modeling.md`](urpx-condition-modeling.md)
- [`urpx-data-dictionary.md`](urpx-data-dictionary.md)
- [`shacl/urpx-shacl.ttl`](/ontology/urpx-shacl.ttl)
- [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
