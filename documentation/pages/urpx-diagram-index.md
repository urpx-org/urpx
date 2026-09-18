<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

---
site_category: learning
site_id: diagram-index
site_title: "Diagram Index"
site_position: 2
---

# URPX Diagram Index

**Version:** 0.5.1 (Working Group Draft)
**Last Updated:** 2026-08-20

[← Back to Index](/docs/getting-started/overview)

---

## Overview

This index lists the diagram assets currently present in the repository and the documentation pages that use them.

---

## Published Documentation Diagrams

### Temporal Versioning Summary

- **Source:** Mermaid diagram embedded in `documentation/pages/urpx-overview.md`
- **Used in:** [Overview](urpx-overview.md)
- **Shows:** How a `TariffFiling` chain carries supersession, and how each `RatePlanVersion` snapshot is consolidated from the pricing models in force and bound to its `RatePlan`

---

## Unreferenced Diagram Assets

### Price Structure Diagram

- **File:** `documentation/diagrams/urpx-price-structure-diagram.mmd`
- **Status:** Present in the repository but not currently embedded in a documentation page
- **Shows:** `RatePlanVersion` -> `Prices` -> `PriceSet` -> `Price` with required pricing-field semantics and optional classification metadata

### SPARQL Query Visual

- **File:** `documentation/diagrams/urpx-sparql-query-visual.mmd`
- **Status:** Present in the repository but not currently embedded in a documentation page
- **Shows:** A graph traversal pattern for querying prices from a rate plan identified by `ratePlanUniqueIdentifier`

### TOU Structure Diagram

- **File:** `documentation/diagrams/urpx-tou-structure-diagram.mmd`
- **Status:** Present in the repository but not currently embedded in a documentation page
- **Shows:** `TOUSchedule` -> `TOUTier` -> `TOUPeriod` -> `TimeBracket` with price references by `touPeriodNumber`

---

## Project Planning Diagrams

### Development Gantt

- **File:** `documentation/diagrams/urpx-gantt.mmd`
- **Purpose:** Development roadmap, current through the tagged releases and the release in progress

---

## Catalog Metadata

- **File:** `documentation/diagrams/urpx-diagrams.md`
- **Purpose:** Companion catalog of the diagram assets currently checked into the repository

---

## Notes

- This index intentionally reflects the files that are currently present in `documentation/diagrams/`.
- Older draft-only diagram references that are not checked into the repository are omitted from this list.

---

[← Back to Index](/docs/getting-started/overview)
