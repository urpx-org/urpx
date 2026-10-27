<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

---
site_category: technical-reference
site_id: syntax-guidelines
site_title: "Syntax Guidelines"
site_position: 2
---

# URPX Syntax Guidelines

**Version:** 0.5.1 (Working Group Draft)
**Last Updated:** 2026-10-05

[← Back to Index](/docs/getting-started/overview) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md)

---

## Overview

This document defines the standardized syntax and labeling conventions used in the URPX ontology. These guidelines ensure consistency across all URPX implementations and enable data consumers and automated processes to interpret and generate URPX-compliant data.

### Audience

**Primary Audience**: URPX Working Group contributors, technical developers, ontology engineers, and automated tools working directly with URPX RDF/OWL ontology files.

**Purpose**: This is a technical reference for ontology manipulation, property naming, and labeling conventions. It provides the precise syntax rules needed for:
- Creating or modifying ontology definitions
- Generating URPX-compliant RDF data
- Validating ontology structure and annotations
- Ensuring consistency across URPX implementations

**Not Covered Here**: High-level URPX concepts, business use cases, or implementation guides. For those topics, see:
- [URPX Overview](urpx-overview.md) - Conceptual introduction
- [URPX Tutorial](urpx-tutorial.md) - Step-by-step implementation guide
- [Data Dictionary](urpx-data-dictionary.md) - Complete entity reference

## Label Types and Usage

### rdfs:label
- **Purpose**: Primary human-readable name for formal documentation and RDF tools
- **Format**: Full descriptive name with proper capitalization
- **Language**: Always include `@en` language tag
- **Example**: `rdfs:label "Electric Service"@en`

### skos:prefLabel
- **Purpose**: Concise display name for user interfaces and applications
- **Format**: Short, clean version suitable for buttons, dropdowns, and menus
- **Language**: Always include `@en` language tag
- **Example**: `skos:prefLabel "Electric"@en`

### skos:definition
- **Purpose**: Clear, technical definition of the concept
- **Format**: Complete sentence explaining the meaning and usage
- **Language**: Always include `@en` language tag
- **Example**: `skos:definition "Electric utility service account"@en`

## Complete Labeling Pattern

Every enumeration instance should include all three label types:

```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:electricity a urpx:CommodityValue ;
    rdfs:label "Electricity"@en ;
    skos:prefLabel "Electricity"@en ;
    skos:definition "Electric energy commodity"@en .
```

## Use Cases by Label Type

### rdfs:label
- RDF validation tools
- Ontology documentation
- Formal semantic web applications
- Academic and research contexts

### skos:prefLabel
- User interface buttons and menus
- API response display names
- Mobile app interfaces
- Dashboard labels

### skos:definition
- Help text and tooltips
- Documentation generation
- Generated data and tooling
- Technical specifications

## Language Tag Requirements

All annotation literals in the ontology (`rdfs:label`, `skos:prefLabel`, `skos:definition`, `skos:note`) include the `@en` language tag, for:
- **Internationalization support**: Enables future multilingual deployments
- **RDF compliance**: Follows semantic web best practices (RFC 5646)
- **Tool compatibility**: Ensures proper parsing by RDF libraries

Instance data is different: properties such as `urpx:name` and `urpx:description` are typed `xsd:string` in the shapes, so their values carry no language tag.

**Note**: `@en` is the current standard for URPX annotations. Multilingual support across all URPX properties is planned future work.

## Enumeration Naming Conventions

### Class Names
- Pattern: `[Concept]Value` (e.g., `CommodityValue`, `ChargeTypeValue`)
- Format: PascalCase with descriptive concept name

### Instance Names
- Pattern: `[descriptive]` (e.g., `electricService`, `naturalGas`)
- Format: camelCase starting with lowercase
- Exception: Preserve standard symbols: SI units (kWh, MW) and phase codes (A, AB, ABCN)

### Property Names
- Pattern: `[relationship][TargetClass]` (e.g., `hasCustomerKind`, `appliesInSeason`)
- Format: camelCase starting with lowercase

## Example Implementation

```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

# Enumeration Class
urpx:CommodityValue a owl:Class ;
    rdfs:label "Commodity Value"@en ;
    skos:definition "Enumeration of valid utility commodity types"@en .

# Enumeration Instance
urpx:naturalGas a urpx:CommodityValue ;
    rdfs:label "Natural Gas"@en ;
    skos:prefLabel "Natural Gas"@en ;
    skos:definition "Natural gas commodity for heating and energy"@en .

# Object Property
urpx:commodity a owl:ObjectProperty ;
    rdfs:label "Commodity"@en ;
    rdfs:range urpx:CommodityValue ;
    skos:definition "The type of utility commodity being provided"@en .
```

## Guidelines for Generated Data

When a tool generates or validates URPX data:

1. **Always include** all three label types for enumeration instances
2. **Always add** `@en` language tags to annotation literals, never to `xsd:string` instance data
3. **Use** `skos:prefLabel` values for user-facing displays
4. **Use** `rdfs:label` values for formal documentation
5. **Use** `skos:definition` values for explanatory text

## Validation Checklist

- [ ] All enumeration instances have `rdfs:label`
- [ ] All enumeration instances have `skos:prefLabel`
- [ ] All enumeration instances have `skos:definition`
- [ ] All annotation literals include `@en` language tags
- [ ] Labels follow proper capitalization conventions
- [ ] Definitions are complete sentences
- [ ] PrefLabels are concise and UI-friendly

---

*For technical details, see [Data Dictionary](urpx-data-dictionary.md).*

[← Back to Index](/docs/getting-started/overview) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md)
