<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# Contributing to URPX

Thank you for your interest in contributing to URPX. URPX is developed under the Linux Foundation Energy Standards and Specifications (LFESS) Working Group process.

URPX is the Utility Rate Plan Exchange ontology, an open standard for exchanging utility rate plan information using semantic web technologies including RDF, OWL, and SHACL.

This repository is intended for working group review and standards development. The working group chair and maintainers have limited time for review. Submissions should be concise, specific, and ready for human review.

## General expectations

All issues, pull requests, and other repository submissions must be written and reviewed by the person submitting them.

Do not submit content that is fully AI-generated, overly verbose, speculative, or padded with background material that is not necessary to evaluate the request. Submissions that appear to be fully AI-generated or unnecessarily long may be closed without review. They may be re-submitted in a concise and actionable form.

AI-generated or AI-assisted drafting does not excuse the submitter from understanding the proposal, checking it for accuracy, and reducing it to the information needed by the working group.

## Licensing of contributions

By contributing to this repository you agree that your contribution is licensed under the terms that apply to the corresponding file category:

- **Specification files** (the ontology, SHACL shapes, SKOS mappings, and documentation pages): the W3C Software Notice and Document License (W3C-20150513).
- **Dataset files** (test-case data and index files): the Community Data License Agreement - Permissive 2.0 (CDLA-Permissive-2.0).
- **Source code and meta files:** the Apache License, Version 2.0. See [LICENSE](LICENSE).

See [TRANSITION.md](TRANSITION.md) for the completed transition record and file-classification manifest.

## Developer Certificate of Origin (DCO)

All contributions must include a `Signed-off-by` line in every commit.
Adding this line certifies that you wrote the contribution — or otherwise have the right to submit it under the applicable license — per the [Developer Certificate of Origin, version 1.1](https://developercertificate.org/).

Append a DCO line by running:

```
git commit --signoff
```

The line looks like this:

```
Signed-off-by: Your Name <you@example.com>
```

Pull requests missing `Signed-off-by` on every commit will be asked to rebase and re-sign.

## Terminology and language use

Understanding the following distinctions is important when working with URPX. For more detail, see the [URPX FAQ](documentation/pages/urpx-faq.md) and [URPX Overview](documentation/pages/urpx-overview.md).

- **Tariff:** A regulatory document, such as a tariff book, containing one or more rate plans. It is published by utilities and approved by regulatory authorities.
- **Rate plan:** A complete package with all parameters needed to calculate customer cost, including prices, TOU schedules, service tiers, seasonal variations, eligibility rules, and applicability conditions.
- **Rate:** A single price value, such as `$0.12/kWh`, which is incomplete without the surrounding rate plan context.

Language used by contributors should be polite, professional, and constructive. Prefer precise descriptions such as "verbose" or "redundant" instead of dismissive wording.

## How to contribute

### GitHub issues

Use GitHub Issues for concrete feedback and focused proposals that identify a specific problem, question, or improvement and propose a concrete change to URPX.

Use a GitHub issue first for larger structural changes or other proposals that require discussion before implementation.

Most issues should be shorter than 400 words. The 400-word limit is intended for comprehensive or unusually complex change proposals.
Longer issues are acceptable only when the proposed solution genuinely requires additional detail.

Each issue should include:

1. A clear problem statement.
2. The affected section, file, ontology term, SHACL shape, example, or documentation page.
3. A concrete proposed change or outcome.

If there is uncertainty about whether something should be framed as an issue, prefer presenting it as an open question.

Avoid issues that are:

- fully AI-generated without human review;
- overly verbose;
- broad, speculative, or unfocused;
- not providing clear benefit to the standard;
- derogatory or containing unprofessional language;
- requests for maintainers to infer the actual change being proposed.

Issues that do not meet these expectations may be tagged as such or closed, and can be re-submitted in a concise, actionable form.

### Pull requests

Pull requests must describe precisely what has been changed, added, or removed.

Incremental enhancements, such as documentation improvements and other clearly scoped changes that fit the existing repository structure, may be opened directly as pull requests without a prior issue.

PR descriptions must not be overly verbose or fully AI-generated. They should be short, specific, and sufficient for a reviewer to understand the change.

Fork the repository, make your changes on a feature branch, include DCO sign-off on every commit, and open a pull request against the default branch.

A pull request should include:

1. A summary of the change.
2. The affected files or sections.
3. Any related issue or working group discussion.
4. Any expected impact on the ontology, SHACL constraints, examples, or documentation.

### New directories

Creating a new directory in the repository always requires prior working group discussion before a pull request is opened.

The first place for this discussion should be a working group meeting.
A focused GitHub issue is also acceptable when meeting discussion is not practical.

Proposals for new directories must be concise and explain:

1. Why the directory is needed.
2. What files it will contain.
3. Why the content cannot fit within the existing repository structure.

### Test data

Test data may be submitted directly with a pull request when it is clearly scoped and does not require a model change.

If the test data implies a change to the ontology, SHACL constraints, or repository structure, discuss it with the working group before opening the pull request.

### Reviews

Contributions are reviewed by the URPX Working Group. Substantial changes to specification text require working group consensus.

The working group chair and maintainers do not have the budget or bandwidth to review fully AI-generated or excessively long submissions. Contributors are responsible for making submissions concise, accurate, and actionable before opening an issue or pull request.

## Code of conduct

URPX follows the Linux Foundation's code of conduct. Be kind, be constructive, assume good faith. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Security issues

Do **not** open public issues for security concerns. See [SECURITY.md](SECURITY.md) for responsible disclosure.

## Questions

- Working Group mailing list: `urpx-wg@lists.lfenergy.org`
- Chair: `chair@urpx.org`
- Security: `security@urpx.org` (see [SECURITY.md](SECURITY.md))
