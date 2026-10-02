<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

# URPX v0.4.0 Release Notes

**Released:** 2026-09-08.
**Type:** Pre-draft minor release.
**Previous release:** [`v0.3.0`](urpx-release-notes-v0.3.0.md)

[← Back to Release Notes](/release-notes)

---

## Overview

URPX v0.4.0 gives every identifier one pattern and the exchange package one containment property.

An identifier states its register on `scheme` and its value on `skos:notation`. This holds for organization, rate plan and rate plan modifier identifiers alike. The register set is an open class rather than a fixed enumeration.

A `URPXPackage` reaches every exchangeable unit through `packages`. A package that carries no content unit no longer conforms.

Every shipped test-case data file declares the URPX version its contents were authored against. Both the ontology and the shapes identify themselves as v0.4.0.

This release is not backward-compatible with v0.3.0. Organization identifiers, packages that carried a source publication, and packages that carried only a version declaration each need rework before the data is treated as v0.4.0-conformant.

---

## Highlights

- `scheme` carries the register for every identifier. Its domain is the union of `OrganizationIdentifier`, `RatePlanIdentifier` and `RatePlanModifierIdentifier`. Its range is `IdentifierScheme`.
- `IdentifierScheme` is the class of registers and naming authorities that issue identifiers. It is an open class. Eleven members ship with the vocabulary: nine organization registers, plus `caMidasRinScheme` and `utilityTariffCodeScheme`. An implementer operating a register outside those eleven mints its own IRI as an `IdentifierScheme` instance.
- `caMidasRinScheme` and `utilityTariffCodeScheme` are defined terms. Each carries a label, a definition and a preferred label.
- `identifierJurisdiction` applies to all three identifier classes. It is optional and at most one on each.
- `OrganizationIdentifierShape`, `RatePlanIdentifierShape` and `RatePlanModifierIdentifierShape` take one surface: `scheme` required, `skos:notation` required, `identifierJurisdiction` optional. All three are closed.
- `packages` is the containment property of the exchange envelope. Its domain is `URPXPackage`. Its range is the union of `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, `RatePlanModifierVersion`, `PricingModel`, `TariffFiling` and `SourcePublication`.
- `URPXPackageShape` requires at least one of `packages`, `hasRatePlan` or `hasRatePlanModifier` on every package. Each of the three paths stays optional on its own. `hasRatePlan` and `hasRatePlanModifier` remain valid, so a consumer reading package contents reads all three paths.
- All twelve shipped test-case data files carry a `URPXPackage` with `targetURPXVersion`, which `URPXPackageShape` requires; eleven declare v0.4.0 and `pge-e-elec` declares v0.3.0, which is the version it validates against. The version a file was written for is a fact in the file rather than a property of where it is stored.
- The ontology and the shapes identify themselves as version 0.4.0. In each document, `owl:versionIRI`, `dcterms:hasVersion`, the release node, its distribution and both download URLs name v0.4.0. The ontology states the version literal on `owl:versionInfo` and the shapes file states it on `dcat:version`. A consumer resolving a package's `targetURPXVersion` reaches a document that names the same version.
- The PG&E E-TOU-C test case carries a worked organization identifier: `Organization` to `hasIdentity` to `OrganizationIdentity` to `hasIdentifier` to `OrganizationIdentifier`, with `scheme` naming `eiaScheme`, `skos:notation` carrying the EIA value and `identifierJurisdiction` naming the jurisdiction.

---

## Breaking Changes

If you maintain datasets or downstream tooling, pay particular attention to these changes:

1. **`identifierScheme` is removed.**
   `scheme` carries the register for all three identifier classes. `OrganizationIdentifierShape` is closed, so an organization identifier still asserting `identifierScheme` fails validation.

2. **`utilityId` is removed.**
   `skos:notation` carries the literal for every identifier, including the EIA, DUNS and LEI values that property held. The same closure applies: an organization identifier still asserting `utilityId` fails validation.

3. **`IdentifierSchemeValue` becomes the class `IdentifierScheme`.**
   The nine registers keep their IRIs, labels and definitions, and are typed to the new class. The `owl:oneOf` enumeration on the ontology side and the `sh:in` list on the shape side are both dropped, and `IdentifierSchemeValueShape` is removed. `scheme` takes `sh:nodeKind sh:IRI`, which is the constraint that makes a register outside the published members legal.

4. **The identifier shapes require a register and a value.**
   `scheme` and `skos:notation` are each required on `OrganizationIdentifierShape`. The two properties they replace were both optional, so an organization identifier that named neither register nor value validated before and does not now. `RatePlanIdentifierShape` and `RatePlanModifierIdentifierShape` already required both. They gain optional `identifierJurisdiction` and are otherwise unchanged.

5. **`hasTariffPublication` is removed.**
   `packages` carries a source publication, as it carries every other unit a package holds. `URPXPackageShape` is closed, so a package still asserting `hasTariffPublication` fails validation.

6. **A `URPXPackage` states at least one content unit.**
   `URPXPackageShape` requires at least one of `packages`, `hasRatePlan` or `hasRatePlanModifier`. A package carrying only metadata and a version declaration no longer conforms.

---

## Migration

Datasets built against v0.3.0 need term-level rework, not a version bump alone:

- On organization identifiers, rename `identifierScheme` to `scheme` and `utilityId` to `skos:notation`. Both are required.
- An organization's registry identifier belongs on an `OrganizationIdentifier`, not on the organization node. `OrganizationShape` is open by design, so a value asserted directly on the organization keeps validating while carrying no identifier a consumer can read; `urpx:eiaId` is not a defined term in the vocabulary at any version. `OrganizationIdentityShape` is closed and requires `hasName`, so the identity node names the organization alongside the identifier.
- Move an organization's EIA, DUNS or LEI value onto an `OrganizationIdentifier` reached through the identity chain:

  ```json
  "urpx:hasIdentity": {
    "@type": "urpx:OrganizationIdentity",
    "urpx:hasName": {
      "@type": "urpx:OrganizationName",
      "urpx:name": "Pacific Gas & Electric Company"
    },
    "urpx:hasIdentifier": {
      "@type": "urpx:OrganizationIdentifier",
      "urpx:scheme": { "@id": "urpx:eiaScheme" },
      "skos:notation": "14328",
      "urpx:identifierJurisdiction": "US"
    }
  }
  ```

- Retype nodes declared `urpx:IdentifierSchemeValue` to `urpx:IdentifierScheme`. The register IRIs are unchanged.
- Rewrite `scheme` object IRIs that carry a hyphenated register name. `urpx:utility-tariff-code` becomes `urpx:utilityTariffCodeScheme`, and `urpx:ca-midas-rin` becomes `urpx:caMidasRinScheme`. Neither hyphenated form was ever a defined term.
- A register outside the eleven published members is an IRI of your own, typed `urpx:IdentifierScheme`. `scheme` no longer constrains its value to a fixed list.
- JSON-LD data that does not already bind the `skos` prefix adds `"skos": "http://www.w3.org/2004/02/skos/core#"` to its `@context`. Without the binding, `skos:notation` does not expand and the required value is not asserted.
- On a `URPXPackage`, `hasTariffPublication` becomes `packages`. `hasRatePlan` and `hasRatePlanModifier` remain valid, so a package may carry a rate plan or a modifier through either those properties or `packages`.
- Give every `URPXPackage` at least one content unit. A package that exists only to declare a version states the unit it carries as well.
- Point `targetURPXVersion` at this release: `https://github.com/urpx-org/urpx/raw/v0.4.0/ontology/urpx-ontology.ttl`.
- Re-run SHACL validation against `urpx-shacl.ttl`. The closed identifier and package shapes surface any retired property still asserted in the data.

---

## References

- [v0.3.0 Release Notes](urpx-release-notes-v0.3.0.md)
- [Data Dictionary](urpx-data-dictionary.md)
- Design Decisions (v0.4.0)
- [Changelog](https://github.com/urpx-org/urpx/blob/main/urpx-changelog.md)
