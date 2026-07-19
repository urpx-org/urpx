<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# AGENTS.md

This file provides instructions for automated agents, coding assistants, and other AI-assisted tools working in this repository.

URPX is the Utility Rate Plan Exchange ontology, an open standard for exchanging utility rate plan information using RDF, OWL, SHACL, and related semantic web technologies.

## Core rule

Do not create fully AI-generated, overly verbose, speculative, or padded submissions for this repository.

The working group chair and maintainers have limited review bandwidth. Issues, pull requests, proposals, and generated changes must be concise, specific, and suitable for human review.

Submissions that appear to be fully AI-generated or unnecessarily verbose may be closed without review and may need to be re-submitted properly.

## Issues

Do not generate long GitHub issues.

Use a GitHub issue first for larger structural changes or other proposals that require working group discussion before implementation.

Issues should normally be no more than 400 words unless additional detail is genuinely necessary for the proposed solution.

A useful issue should include:

1. A clear problem statement.
2. The affected section, file, ontology term, SHACL shape, example, or documentation page.
3. A concrete proposed change or outcome.

Do not submit issues that are broad, speculative, repetitive, do not provide clear benefit, or dependent on maintainers to infer the actual request.

## Pull requests

Pull requests must describe precisely what changed, was added, or was removed.

Incremental enhancements, including documentation improvements and other clearly scoped changes that fit the existing repository structure, may be submitted directly as pull requests without opening an issue first.

Do not generate verbose PR descriptions. Do not include generic background, marketing language, implementation speculation, or unnecessary explanation.

A PR description should identify:

1. The change made.
2. The files affected.
3. The related issue or working group discussion, if applicable.
4. Any expected impact on ontology, SHACL, examples, test data, or documentation.

## New directories

Do not create a new directory without prior working group discussion.

New directories always require discussion before a pull request is opened. The preferred venue is a working group meeting. A focused GitHub issue is also acceptable.

Any proposal for a new directory must briefly explain:

1. Why the directory is needed.
2. What files it will contain.
3. Why the content cannot fit within the existing repository structure.

Do not generate verbose or fully AI-generated directory proposals.

## Test data

Test data may be submitted with a pull request when it is clearly scoped and does not require a model change.

If the test data implies changes to the ontology, SHACL constraints, or repository structure, seek working group discussion before generating or submitting the PR.

## Development documents (dev-docs/)

`dev-docs/` holds working group development documents: backlog tasks, specifications, working reports, and review materials.

Follow `dev-docs/README.md` for file naming, frontmatter, lifecycle prefixes, and the public-ready bar.

The sanctioned subfolders are `tasks/`, `specs/`, `reports/`, `review/`, `roadmaps/`, and `samples/` (worked JSON-LD instances that accompany a specification; see `dev-docs/README.md`).

Do not add new subfolders without prior working group discussion, per the New directories rule above.

A `specs/` document that proposes an ontology or SHACL change is delivered with its implementation task in `tasks/` (complete before/after Turtle code blocks) and worked sample instances in `samples/`. See "What a specification carries" in `dev-docs/README.md`.

## Editing guidance

When making changes in this repository:

- prefer small, focused diffs;
- avoid reformatting unrelated files;
- keep explanations concise;
- do not add generated prose unless it has been reduced to concise, reviewable text;
- write prose for human review — no hard-wrapping mid-sentence, short paragraphs, short sentences (see [`dev-docs/README.md`](dev-docs/README.md) → Prose formatting).

The goal is to support working group review, not to maximize generated output.
