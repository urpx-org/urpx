---
id: taskurpxontprofilealternativeeligibilityunification
title: "ProfileAlternative / EligibilityRule boundary and inline profiles"
desc: "Backlog: decide whether alternatives may carry profile properties inline (not only condition expressions over references), whether a direct profile-reference property is warranted, and write guidance on when variation belongs in one rate plan's alternatives versus a separate rate plan."
updated: 1783900800000
created: 1783900800000
---

# ProfileAlternative / EligibilityRule boundary

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 design question; current vocabulary is workable |
| **Surface** | `ontology/urpx-ontology.ttl` + SHACL (`ProfileAlternative`, `EligibilityRule`, profile classes), condition-modeling documentation |

## Problem

Both `EligibilityRule` and `ProfileAlternative` express "this applies when
the customer/service point looks like X", via condition expressions. Three
questions remain open from earlier design rounds and survive the v0.3.0
condition-expression redesign:

1. **Inline profiles.** An alternative can only *test* characteristics
   through its condition expression; it cannot *state* them as a profile
   fragment (a `CustomerProfile` / `ServicePointProfile` value set carried
   inline). Should it?
2. **Direct profile reference.** Is a property linking a
   `ProfileAlternative` to an existing profile instance by IRI warranted,
   or does the condition expression subsume it?
3. **Boundary guidance.** When is variation one rate plan with
   alternatives, and when is it two rate plans? Implementers need a stated
   rule of thumb; today the boundary is folklore.

## Approach

Work from real test cases (the vintage-cohort case in
`test-cases/pge-e-tou-c-2026-03-01/` is the sharpest existing example —
see `task.urpx.ont.2026-07-12.vintage-selection-via-agreement-dates.md`).
Draft the smallest vocabulary change that resolves 1–2 (possibly none), and
a documentation section for 3. Any unification must keep eligibility
(may the customer enroll) distinct from applicability (which prices apply)
— collapsing those two meanings is the known failure mode.

## Acceptance

1. Each of the three questions has a recorded decision (including "no
   change" outcomes).
2. Condition-modeling documentation carries the boundary guidance with a
   worked example.
