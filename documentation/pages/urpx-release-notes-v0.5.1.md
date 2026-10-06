<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

# URPX v0.5.1 Release Notes

**Released:** 2026-10-06.
**Type:** Working Group Draft patch release.
**Previous release:** [`v0.5.0`](urpx-release-notes-v0.5.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX (Utility Rate Plan Exchange) is an open standard for representing and exchanging utility rate plan data between utilities, regulators, vendors, and researchers. URPX is built on the semantic web standards RDF, OWL, and SHACL.

URPX data is exchanged as JSON-LD (JavaScript Object Notation for Linked Data), a lightweight, human-readable format. The URPX API specification is under development and is not part of this release.

URPX is at the Working Group Draft stage. The URPX Working Group, under LF Energy Standards and Specifications (LFESS), accepted the standard as a Draft on 2026-07-17. Draft is the middle of the three LFESS stages (Sandbox, Draft, Approved): the vocabulary is published for implementation and review, and terms can still change between releases. Every change will be recorded in the release notes and the changelog.

## What v0.5.1 offers

- The ontology and the SHACL shapes, in Turtle, at their permanent `urpx.org` namespace (`https://urpx.org/ns/ontology/`, `https://urpx.org/ns/shacl/core/`).
- A JSON-LD context (`https://urpx.org/ns/context`) to reference from instance data.
- A curated corpus of four test cases (twelve data files) across two utilities (Pacific Gas & Electric, Consolidated Edison) and two jurisdictions (California, New York), covering time-of-use pricing, tariff filings, market-supply pricing, and resolved rate plan snapshots.
- Clear licensing: specification text under the W3C Software Notice and Document License, example datasets under CDLA-Permissive-2.0, source and tooling under Apache-2.0.
- Comprehensive documentation: a full data dictionary, per-section class diagrams, a tutorial, an FAQ, and quality-assurance guidance.

---

## What changed since v0.5.0

- Three additive vocabulary changes, each with its shape constraint: `urpx:publicationPlatform`, a string property on `urpx:URPXPackage` naming the software platform that produced or assembled the package; `urpx:vendorOrganization`, a new member of `urpx:OrganizationTypeValue` for an organization that operates such a platform without itself being an energy-market participant; and `urpx:url`, now also allowed on `urpx:Organization`. All three are optional. No existing identifier changes.
- Two ontology domain corrections and one mapping correction bring the ontology in line with constraints the shapes and the test cases already carry: `urpx:description` may now be stated on `urpx:Evaluation`, and `urpx:effectiveDate` on `urpx:RatePlanVersion`, matching shapes that already allowed them; and the URPX to Schema.org SKOS mapping now maps the declared `urpx:timezoneIdentifier`. These add no constraint and change no identifier.
- Licensing by file category, completing the transition recorded in `TRANSITION.md`: specification files (ontology, shapes, SKOS mappings, JSON-LD context, documentation pages, diagrams) under `W3C-20150513`; dataset files (test-case data, generated catalogs, per-test-case diagrams) under `CDLA-Permissive-2.0`; source, tooling, and repository metadata under `Apache-2.0`. The `dcterms:license` statement inside the ontology and the shapes agrees with each file's SPDX header, and the repository is REUSE-compliant.
- The copyright holder on project files is The URPX Authors. Third-party source assets in the test cases (utility tariff documents and pricing data) keep their own holders and the `LicenseRef-PublicRecord` notice.
- All four test cases, and the test-case catalog, declare v0.5.1. Eleven of the twelve data files name the organization and the platform that assembled their package.
- The development record (tasks, specifications, working reports, roadmaps and worked sample instances), the five design-decision logs and the two draft mapping profiles move to [urpx-org/urpx-dev](https://github.com/urpx-org/urpx-dev). This repository holds the standard, its documentation and the curated test cases.

The full license texts are in `LICENSES/`; the per-category assignment is recorded in `TRANSITION.md`.

---

## Migration

- No existing identifier changes. Existing bindings and queries continue to work unchanged, and the two new terms and the widened property are optional. One new constraint: an `urpx:Organization` may carry at most one `urpx:url` value.
- Point `targetURPXVersion` at `https://github.com/urpx-org/urpx/raw/v0.5.1/ontology/urpx-ontology.ttl`.
- Repository and document paths changed: the files that were under `dev-docs/`, the design-decision logs, and the two draft mapping profiles are now in `urpx-org/urpx-dev`. Links into those paths need updating.

---

## What's next

- The access API specification: discovery, version retrieval, and eligibility checks over published rate plan data. In development; see the [API specification](urpx-api-spec.md) for the current sketch.
- Mapping profiles: Green Button and LF Energy Connected Data Specifications (CDS) profiles are drafts under working group review. See [Interoperability](urpx-interoperability.md).
- Highly dynamic pricing: an interchange payload for streams of resolved price values, with settlement status per observation; machine-readable value expressions for price calculation; discovery metadata for dynamic price endpoints; and a transform to the California Energy Commission's MIDAS rate server. Draft specifications are in urpx-dev, planned as the first additive bundle after this release.
- Energy resource specifications for clean energy purchasing: how a rate plan states the emissions profile and energy sources of the supply and delivery it prices, so a buyer can choose by them. In early design; the open question is whether that profile sits inside the rate plan or in a companion vocabulary the plan points at.
- The working group continues to refine the ontology and the validation rules. Open specifications and the roadmap are in [urpx-org/urpx-dev](https://github.com/urpx-org/urpx-dev); meeting agendas and notes are in [urpx-org/urpx-wg](https://github.com/urpx-org/urpx-wg).

---

## References

- [v0.5.0 Release Notes](urpx-release-notes-v0.5.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- [Changelog](../../urpx-changelog.md)
