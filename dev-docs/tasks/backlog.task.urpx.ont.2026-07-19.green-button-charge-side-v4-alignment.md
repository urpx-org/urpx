---
id: taskurpxontgreenbuttonchargesidev4
title: "Re-derive the Green Button charge-side alignment against ESPI V4 ItemKind"
desc: "Backlog: the URPX ↔ Green Button SKOS mappings align URPX charge types to a KindCategory enumeration that does not exist in the NAESB ESPI V4 schemas, and to itemKind member values that do not match V4's ItemKind members. Re-derive the charge-side alignment against V4 ItemKind (or annotate a deliberate source revision), keeping the confirmed structural and service-kind anchors."
updated: 1784419200000
created: 1784419200000
---

# Re-derive the Green Button charge-side alignment against ESPI V4 `ItemKind`

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-v0.3.0 |
| **Assignment** | **Unassigned — open for any WG member to pick up** |
| **Surface** | `skos/standards-integration/urpx-green-button-mappings.ttl` |
| **Source** | Verification of the mappings file against the NAESB ESPI V4 XML schemas (`espi_v4.xsd`, `customer_v4.xsd`) |

## Problem

The mappings file's charge-side blocks align URPX charge types to two vocabularies that do not hold up against the current NAESB ESPI V4 schemas:

1. The nine `gb:KindCategory_*` concepts (Access, Demand, Energy, FixedCharge, Tax, Fee, Rebate, GenerationCredit, Other) reference a `KindCategory` type with **zero occurrences** in either V4 schema; it appears to derive from an older ESPI/CIM revision.
2. The five `gb:itemKind_*` concepts (energy, demand, service, tax, adjustment) reference the V4 `ItemKind` type, which **does** exist (`espi_v4.xsd`: `LineItem/itemKind` element and the `ItemKind` simple type), but V4's members are different: 1 Energy Generation Fee, 2 Energy Delivery Fee, 3 Energy Usage Fee, 4 Administrative Fee, 5 Tax, 6 Energy Generation Credit, 7 Energy Delivery Credit, 8 Administrative Credit, 9 Payment, 10 Information. V4 has no "demand", "service", or "adjustment" item kind.

The structural anchors are confirmed and are not in question: `gb:PricingStructure`, `gb:LineItem`, and the `ServiceKind` service-category codes all resolve in V4.

## Approach

1. Map URPX charge types to the V4 `ItemKind` codes that exist: `usageCharge` → 3 (Energy Usage Fee); `creditGeneration` and `discount` → 6 (Energy Generation Credit); `taxes` / `taxSales` → 5 (Tax); generation and delivery fees → 1 / 2; administrative fees and credits → 4 / 8.
2. Retire the `gb:KindCategory_*` concepts and the non-matching `gb:itemKind_*` concepts, or — if the working group wants to keep aligning to the older revision's richer categories — retain them under a distinct prefix with a `skos:note` naming the source standard and revision, alongside the V4 alignment.
3. Record deliberate-absence notes for the URPX distinctions V4 `ItemKind` cannot carry (for example demand versus usage charges), so an implementer sees "we looked, V4 has no counterpart" rather than silence.
4. Pin the `gb:` namespace IRI form deliberately (the mappings use `http://naesb.org/espi#`; the XSD target namespace is `http://naesb.org/espi` without the fragment) with a note stating the choice.

## Acceptance

1. Every retained or new `gb:` charge-side term resolves in the V4 schemas or carries an explicit source-revision note.
2. Deliberate absences recorded for unmapped URPX charge distinctions.
3. File parses; SPDX/REUSE header intact; changelog entry describes the alignment change.
