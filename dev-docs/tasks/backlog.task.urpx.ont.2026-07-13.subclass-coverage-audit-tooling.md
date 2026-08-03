---
id: taskurpxontsubclasscoverageaudittooling
title: "Subclass coverage audit tooling (ontology + SHACL)"
desc: "Backlog: build a repeatable audit that reports where a class is referenced (domain/range unions, sh:class, sh:targetClass) but its subclasses lack explicit coverage, driven by a reviewed policy file. Report-only; nothing auto-merged."
updated: 1783900800000
created: 1783900800000
---

# Subclass coverage audit tooling

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 |
| **Surface** | New `scripts/` audit + policy file; findings may produce reviewed ontology/SHACL patches |

## Problem

When a property's domain or range names a superclass, or a shape constrains
with `sh:class`, the intended treatment of that class's subclasses is
implicit. As the vocabulary grows, gaps appear silently: a new subclass is
added and no one re-checks every union and shape that referenced its parent.
A one-off audit of an earlier release found dozens of such candidate gaps;
that catalogue went stale as soon as the vocabulary was restructured — the
lesson is that coverage checking must be a repeatable script, not a document.

## Approach (design defaults, open to revision)

1. **Discovery script** — deterministic JSON output listing every
   superclass-referencing context (ontology unions, `sh:class`,
   `sh:targetClass`) and the coverage status of each direct subclass.
   Direct subclasses only; transitive closure per policy entry when a
   context demands it.
2. **Policy file** — the source of truth for intent. Each finding gets a
   status: `required` / `excluded` / `defer`, with a note. Intentionally
   narrow contexts are allowlisted here rather than auto-detected.
3. **Report-only enforcement** — the audit surfaces gaps without failing CI
   until the policy file is mature; every unclassified gap gets a policy
   entry or a fix.
4. **Apply script** — generates additive-only patches from `required`
   entries onto a feature branch; every change lands through normal PR
   review, nothing auto-merged.
5. **Candidate extra invariant** to fold into the same validation pass:
   rate plan versions of the same rate plan must not have overlapping
   validity windows (except drafts) — expressible as a SPARQL-based
   constraint once wanted.

## Acceptance

1. Discovery runs against the current ontology + SHACL and produces a
   stable, reviewable findings file.
2. Policy file covers every finding; the audit exits clean in report mode.
3. Documentation for maintainers: how to classify a new finding.
