<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

---
site_category: technical-reference
site_id: syntax-guidelines
site_title: "Syntax Guidelines"
site_position: 2
---

# URPX Syntax Guidelines

**Version:** 0.5.0 (Pre-draft)
**Last Updated:** 2026-08-20

[← Back to Index](/docs/getting-started/overview) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md)

---

## Overview

This document defines the standardized syntax and labeling conventions used in the URPX ontology. These guidelines ensure consistency across all URPX implementations and enable data consumers, automated processes, and AI agents to properly interpret and generate URPX-compliant data.

### Audience

**Primary Audience**: URPX Working Group contributors, technical developers, ontology engineers, and AI agents working directly with URPX RDF/OWL ontology files.

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
- Training AI models
- Technical specifications

## Language Tag Requirements

All textual properties must include the `@en` language tag for:
- **Internationalization support**: Enables future multilingual deployments (see [Internationalization Guide](urpx-i18n-guide.md))
- **RDF compliance**: Follows semantic web best practices (RFC 5646)
- **Tool compatibility**: Ensures proper parsing by RDF libraries

**Note**: While `@en` is the current standard for URPX, the [URPX Internationalization Guide](urpx-i18n-guide.md) provides comprehensive specifications for implementing multilingual support across all URPX properties.

## Enumeration Naming Conventions

### Class Names
- Pattern: `[Concept]Value` (e.g., `CommodityValue`, `ChargeTypeValue`)
- Format: PascalCase with descriptive concept name

### Instance Names  
- Pattern: `[descriptive]` (e.g., `electricService`, `naturalGas`)
- Format: camelCase starting with lowercase
- Exception: Preserve standard SI unit symbols (kWh, MW, etc.)

### Property Names
- Pattern: `[relationship][TargetClass]` (e.g., `hasCustomerKind`, `appliesInSeason`)
- Format: camelCase starting with lowercase

## Example Implementation

```turtle
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

## AI Agent Guidelines

When generating or validating URPX data:

1. **Always include** all three label types for enumeration instances
2. **Always add** `@en` language tags to all textual properties
3. **Use** `skos:prefLabel` values for user-facing displays
4. **Use** `rdfs:label` values for formal documentation
5. **Use** `skos:definition` values for explanatory text

## Validation Checklist

- [ ] All enumeration instances have `rdfs:label`
- [ ] All enumeration instances have `skos:prefLabel` 
- [ ] All enumeration instances have `skos:definition`
- [ ] All textual properties include `@en` language tags
- [ ] Labels follow proper capitalization conventions
- [ ] Definitions are complete sentences
- [ ] PrefLabels are concise and UI-friendly

---

*For technical details, see [Data Dictionary](urpx-data-dictionary.md).*

[← Back to Index](/docs/getting-started/overview) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md)
