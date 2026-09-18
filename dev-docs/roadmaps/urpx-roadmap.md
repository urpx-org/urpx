<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX Roadmap

This roadmap describes the planned direction of the URPX (Utility Rate Plan
Exchange) standard. It is maintained by the URPX Working Group and updated as
priorities change. Dates are intentionally omitted for later phases; the near-term
sequence is ordered, the later themes are directional.

**Current stage:** v0.3.0, pre-Draft. The standard is under working group review
ahead of a formal vote to accept it as a Draft.

## Near-term: to a public release and a Working Group Draft

In order:

1. **Working group review of v0.3.0.** Reviewers work through the ontology, SHACL
   shapes, data dictionary, and the real-data test cases, and raise issues or
   proposed changes. See [CONTRIBUTING.md](../../CONTRIBUTING.md).
2. **Working group approval to publish.** The working group confirms v0.3.0 as the
   starting point and authorizes publication, recorded in the meeting minutes. A
   formal ballot is not required (see [GOVERNANCE.md](../../GOVERNANCE.md)).
3. **License conversion.** Specification files move to the W3C Document License and
   datasets to CDLA-Permissive-2.0, per [TRANSITION.md](../../TRANSITION.md).
   Source and meta files stay Apache-2.0.
4. **Licensing and IP review.** The converted materials pass an LF Energy IP scan.
5. **Public release.** The repository and the documentation site are published,
   the release is tagged, and the ontology IRI dereferences.

## Path through the LF Energy lifecycle

URPX is hosted under LF Energy Standards and Specifications (LFESS). The working
group intends to move the standard through the LFESS stages — Sandbox, Draft, and
Approved — as review, adoption, and conformance evidence accumulate. Governance and
roles are described in [GOVERNANCE.md](../../GOVERNANCE.md).

## Vocabulary themes under consideration (post-release)

These are candidate additions on the backlog, each additive and dependent on a real
published example that needs it. They are proposals, not commitments; several are
tracked as tasks under [`dev-docs/tasks/`](../tasks/).

- **Charge classification coverage** — additional charge-type members as real
  filings surface charges the current enumeration does not name.
- **Geographic applicability** — a more machine-readable model for where a rate
  plan or a price applies.
- **Filing change indicators** — per-price markers mirroring regulatory sheet
  conventions (restated, increase, decrease, new, and similar).
- **Conditional and derived quantities** — metric-input conditional constraints and
  derived quantities used in some tariffs.
- **Additive tier and bound allowances** — tier bounds expressed as allowances that
  add across contexts.
- **Statement line-item module** — representing itemized statement lines where a
  published statement is the primary source.
- **Customer pricing-structure enrollment** and **profile-alternative eligibility
  unification** — consolidating how customer choice and eligibility are expressed.
- **Container naming** — a human-readable name on holiday calendars and location data sets, which are referenced by identifier alone today while their peer containers each carry one.

## Tooling and quality themes

- **Worked examples** — expand the real-data test corpus with additional utilities
  and jurisdictions, each with per-price citations to its source documents.
- **Subclass-coverage audit tooling** — automated checks that every class and
  property is exercised by the shapes and the test cases.
- **Annotation consistency** — a periodic pass keeping labels, definitions, and
  notes consistent across the vocabulary.
- **Conformance** — the SHACL shapes and the validation matrix serve as the
  standard's executable conformance suite; keep it complete as the vocabulary grows.

## How to get involved

- Join the mailing list: [urpx-wg@lists.lfenergy.org](https://lists.lfenergy.org/g/urpx-wg).
- Open an issue using one of the [issue templates](../../.github/ISSUE_TEMPLATE/) —
  a bug report, a question, or a term proposal.
- See [CONTRIBUTING.md](../../CONTRIBUTING.md) and [AGENTS.md](../../AGENTS.md) for how
  changes are proposed and reviewed.
