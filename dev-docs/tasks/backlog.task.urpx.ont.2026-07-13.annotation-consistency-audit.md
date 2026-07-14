---
id: taskurpxontannotationconsistencyaudit
title: "Annotation consistency and accuracy audit"
desc: "Backlog: audit every rdfs:comment, skos:note, and skos:definition for accuracy against the current vocabulary and for consistent style (voice, casing, punctuation, terminology), fixing drift accumulated across releases."
updated: 1783900800000
created: 1783900800000
---

# Annotation consistency and accuracy audit

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 |
| **Surface** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl` (annotation strings only — no structural change), data dictionary regen |

## Problem

Annotations accumulate drift: comments written for an earlier release can
describe vocabulary that has since changed (one such case — a class comment
describing a removed mechanism — was caught and fixed during v0.3.0
close-out), and style varies with authorship era (sentence casing,
punctuation, "rate plan" phrasing, note-vs-comment division of labor).
Inconsistent annotations read as neglect in a published standard and seed
implementer misreadings.

## Approach

1. Define the house style in one short section (where: contributing docs):
   `rdfs:comment` = one-sentence definition; `skos:note` = usage guidance;
   sentence case; terminology rules ("rate plan structure", rate plan as
   subject, no bare "rate"); language tags on all three annotation
   predicates.
2. Scripted sweep for mechanical inconsistencies (casing, tag coverage,
   empty/duplicate annotations), then a human pass for **accuracy**: does
   each comment still describe the term as it exists?
3. Fix in one reviewed change; regenerate the data dictionary.

## Acceptance

1. Style section published; sweep script reproducible.
2. Zero annotations describing retired or changed semantics.
3. Dictionary regenerated; full validation matrix unaffected (annotations
   only).
