---
id: reporturpxont20260720dcjv030reviewround2disposition
title: "Don Jackson's round-2 review of the v0.3.0 candidate: summary and disposition"
desc: "A committee record of Don Jackson's second review of the v0.3.0 candidate: his recommendation to publish, the record confirmation he provided, the small documentation issues he found and how each was handled before publication, the non-gating items carried to v0.4.0, and his contribution commitments."
updated: 1784505600000
created: 1784505600000
---

# Don Jackson's round-2 review of the v0.3.0 candidate: summary and disposition

This is a committee record of Don Jackson's second pass over the v0.3.0 candidate and the staging site. It summarizes his recommendation, the confirmation he put on the record, every issue he raised, and how each was handled.

## Recommendation: publish v0.3.0

Don Jackson recommends publishing v0.3.0. His read: it clears the minimum-viable-product bar, there is nothing embarrassing in it, and he does not see a common, important tariff pattern that URPX plainly cannot represent (offered as his own read, not a subject-matter-expert opinion). Going public opens the standard to wider scrutiny, comment, and contributions; it does not mean the standard is finished or frozen. A reference or resolving implementation by the URPX team is not a prerequisite for publishing the standard.

## Confirmation for the record

- He agrees with the v0.3.0 redesign, and specifically confirms on the record the one change reviewers were asked to confirm: a rate plan version is now the resolved, read-only snapshot a consumer reads, not an authored document.
- He supports recording the group's approval to publish.

## Documentation issues found, and how each was handled before publication

All of Don Jackson's findings were documentation issues, not model defects. Each was verified against the committed ontology and shapes, and all were confirmed accurate. The following were corrected ahead of the tag:

- **Overview geographic example.** The "Geographic Applicability" example used properties that are not in the v0.3.0 ontology, so it would have failed validation if copied. It has been reworked to use the vocabulary that does exist (the service-territory class and the geographic-scope enumeration), with a pointer to the Condition Modeling page for the full applicability pattern. The replacement was checked against the shapes.
- **Coverage-claim requirements in the release notes.** The notes read as though a coverage claim requires both self-containment and an explaining evaluation. In the shapes, only the completeness result is required; self-containment and the explaining evaluation are optional. This matters for partial-coverage rate plans (for example Community Choice Aggregation and Direct Access, where completeness is partial and self-containment may be absent). The release-notes wording has been corrected in every place it appeared.
- **Namespace prefix.** Two teaching pages (Condition Modeling and Interoperability) plus the internationalization guide declared the `urpx:` prefix as an address that does not resolve, so a context copied from them would not work. They now use the canonical URPX namespace. The data dictionary carried the same stale prefix; its generator source has been corrected and the published page will pick it up on the next regeneration.
- **Rate-plan description in the data dictionary.** The rate-plan "Semantic Context" still described the old containment model ("contains multiple versions"), which read oddly beside the updated identity-record description. The generator source has been corrected to the identity-record wording; the published page updates on the next regeneration.
- **Launch-polish items.** The in-progress diagram placeholder has been removed from the Overview (a proper printable poster is now a separate v0.4.0 item); an internal status line has been removed from the release-notes page; the version stamp on three pages has been updated from 0.2.0 to 0.3.0; and two copy-paste-broken code snippets in the tutorial (a trailing comma and an identifier written without its prefix) have been fixed.

## Non-gating items carried to v0.4.0

Don Jackson flagged these as status checks, not blockers:

- **Customer-facing identifier on a resolved version — resolved in v0.3.0.** This was accepted in the response to his first review. The identifier is now available both by reaching the plan identity through `forRatePlan` and directly on the version: `hasIdentifier` was widened onto `RatePlanVersion` / `RatePlanModifierVersion` for standalone-snapshot consumption (alongside `timezoneIdentifier` and `hasLocationDataSet`), with the plan identity remaining authoritative. Recorded as Decision #127. No longer a v0.4.0 item.
- **Confidence value for an exactly-computed quantity.** The `confidence` / `ConfidenceValue` vocabulary already exists; the open question — whether a computed quantity can already be stamped as exact, or whether an enumeration member is missing — is recorded for confirmation and, if needed, a small v0.4.0 addition.
- **Two known vocabulary gaps** — an additive baseline-allowance tier bound (GitHub #32) and gating a derived quantity on a condition (GitHub #25) — stay on the post-launch backlog with interim modeling that validates, to be addressed when a concrete need or contribution arrives.

## Contribution commitments

- He will migrate his corpus to v0.3.0.
- He will build the California worked-example set as a post-launch contribution: the generation-versus-delivery split, a machine-readable generic price feed with resolvable applicability, and an externally-priced community-choice generation component, sitting alongside the Consolidated Edison example. It also serves as an independent second-corpus check that the same inputs resolve to the same snapshot. He would like to agree identifier and source-citation conventions so it sits cleanly beside the existing example.

## Pull requests

- His full sign-off is filed as a review report (pull request #49).
- A California identity and partial-coverage example for the Overview is filed as pull request #50; it demonstrates the identity and partial-coverage patterns correctly and is a useful addition. Both are being incorporated into the candidate ahead of the tag.
