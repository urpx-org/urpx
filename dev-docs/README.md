<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# dev-docs/ Conventions

`dev-docs/` holds the working group's development documents: backlog tasks,
specifications, working reports, and review materials. It is part of the
public repository and is held to the same public standard as the rest of the
repository.

## Subfolders

`dev-docs/` uses five document kinds, each in its own subfolder, created when
its first document is added:

- `tasks/` — units of work: open backlog items, in-progress work, and
  completed work.
- `specs/` — specifications for a proposed or adopted design.
- `reports/` — working reports: analysis, proposals, and walkthroughs
  prepared for working group review.
- `review/` — review materials, such as review packets and sign-up sheets.
- `roadmaps/` — the standard's development history and forward roadmap.

These five are pre-agreed and do not need separate discussion. Any subfolder
beyond them follows the repository's new-directory rule in `AGENTS.md`, which
requires working group discussion before a pull request is opened.

## File naming

Files use a dot-separated name:

- Tasks: `task.urpx.<initiative>.<YYYY-MM-DD>.<slug>.md`
- Specs: `spec.urpx.<initiative>.<NNN>.<slug>.md`
- Reports: `report.urpx.<initiative>.<YYYY-MM-DD>.<slug>.md`

`<initiative>` names the area of work — in use today: `ont` (ontology) and
`web` (website and tooling). `<slug>` is kebab-case.

A task that maps to a numbered GitHub issue carries a `gh-<NN>` segment in
the slug, for example
`task.urpx.ont.2026-07-13.gh-25.conditional-derived-quantity.md`. Use the
`gh-<NN>` segment only when a numbered issue exists.

## Frontmatter

Every file opens with YAML frontmatter:

```yaml
---
id: <short stable slug>
title: "<title>"
desc: "<one-line summary>"
updated: <epoch milliseconds>
created: <epoch milliseconds>
---
```

- `id` — a short, stable identifier for the file. It does not change when
  the file is renamed, for example on a lifecycle transition.
- `title` — the document's title.
- `desc` — a one-line summary of the document's content.
- `created` — when the file was first added, in epoch milliseconds.
- `updated` — when the file was last substantively changed, in epoch
  milliseconds.

## Lifecycle prefixes (tasks only)

Task files carry a lifecycle prefix in the filename:

- `backlog.task....md` — open, unassigned, and available for a working
  group member to pick up.
- `task....md` (no prefix) — actively being worked.
- `completed.task....md` — done and accepted.

A task's own `Status` field must agree with its filename prefix. Moving a
task from one lifecycle stage to another is a rename, not a content
rewrite.

## The public-ready bar

Everything in `dev-docs/` is held to the same bar as the rest of the
repository:

- Plain, factual voice. Describe the change or the design question, not
  internal process.
- No references to private repositories, internal project names, or
  working sessions.
- No personal names in review sign-ups.
- No non-public URLs.
- No emojis.

## Terminology

- Do not hyphenate "rate plan" or "tariff book" in prose. Slugs and ids are
  exempt.
- The composite term is "rate plan structure" — never "rate structure."
- Avoid the bare word "rate" for the plan itself; say "rate plan." A
  numeric value is a "price."
- A tariff, or tariff book, is a publication vehicle for parts of a rate
  plan. It is not the rate plan itself.
