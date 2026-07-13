---
id: taskurpxontexamplecoveragelifecyclevalidation
title: "Example coverage: reconciliation, standalone supply, lifecycle, negative validation"
desc: "Backlog: round out the test-case suite with the cases the current examples don't exercise — a reconciliation cycle with overlapping/corrected/cancelled filings, a standalone competitive-supply rate plan, real replacement/withdrawal lifecycle data, and negative-validation fixtures that must fail."
updated: 1783900800000
created: 1783900800000
---

# Example coverage: lifecycle and validation

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0; grows the suite, changes no vocabulary |
| **Surface** | `test-cases/`, validation harness |

## Problem

The current test cases cover complete published rate plans and a
supersession chain of adjustment statements. Four coverage gaps remain:

1. **Reconciliation cycle** — a quarter's worth of filings with overlaps,
   corrections, cancellations, and gaps, showing how successive published
   sources assemble into resolved rate plan versions.
2. **Standalone competitive supply** — a supply-only rate plan (contract
   or market-indexed) with no regulatory filing wrapper, demonstrating
   that the filing is genuinely optional.
3. **Replacement / withdrawal lifecycle** — no fixture exercises
   `replaces` / `cancelledBy` yet. **Prefer waiting for a real cancellation
   case** (they occur regularly, e.g. in distributed-energy credit
   programs) over inventing a synthetic one; real filings carry the
   awkward details synthetic data misses.
4. **Negative validation** — fixtures that must FAIL (start with an
   invalid enumeration value), wired into the harness as expected
   failures. A constraint no test can violate is an unproven constraint.

## Approach

Take the cases opportunistically and independently — each is a separate
small addition. For (3), watch incoming filing work for a real
cancellation/withdrawal and model it when it appears. For (4), add
expected-failure support to the validation run first; then one minimal
invalid-enum fixture establishes the pattern.

## Acceptance (per case added)

1. The case validates (or, for negative fixtures, fails exactly as
   asserted) in the standard matrix.
2. A short README states what the case demonstrates and its source.
