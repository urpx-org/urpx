<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX Design Principles

**Version**: 0.2.0 (Pre-draft)
**Last Updated**: 2026-03-02  
**Status**: Active

---

## Purpose

This document defines the core design principles and organizational standards for URPX ontology development. These principles ensure consistency, maintainability, and AI-assisted development efficiency across the project.

---

## 1. Alphabetical Organization

### 1.1 Class Definitions

**Rule**: All OWL classes MUST be organized alphabetically by their local name (after the `urpx:` prefix).

**Rationale**: 
- Enables quick location of class definitions
- Reduces merge conflicts in collaborative development
- Improves AI context efficiency by providing predictable structure

**Example**:
```turtle
urpx:AccountServiceAgreement a owl:Class ;
    rdfs:label "Account Service Agreement"@en ;
    ...

urpx:BillingModel a owl:Class ;
    rdfs:label "Billing Model"@en ;
    ...

urpx:CalculationMethod a owl:Class ;
    rdfs:label "Calculation Method"@en ;
    ...
```

**Exception**: Subclasses may be placed immediately after their parent class for clarity, but this should be documented in comments.

### 1.2 Property Definitions

**Rule**: All properties (ObjectProperty, DatatypeProperty) MUST be organized alphabetically by their local name.

**Rationale**: Same as class organization - predictability and maintainability.

### 1.3 Enumeration Values

**Rule**: Within enumeration class definitions (`owl:oneOf`), values SHOULD be organized alphabetically unless semantic grouping provides clearer understanding.

**Example - Alphabetical**:
```turtle
urpx:CommodityValue owl:oneOf (
    urpx:biomass
    urpx:coal
    urpx:electricity
    urpx:naturalGas
    urpx:solar
    urpx:water
    urpx:wind
) .
```

**Example - Semantic Grouping** (when justified):
```turtle
urpx:PhaseCodeKindValue owl:oneOf (
    # Single phase
    urpx:A
    urpx:B
    urpx:C
    # Two phase
    urpx:AB
    urpx:BC
    # Three phase
    urpx:ABC
    urpx:ABCN
) .
```

---

## 2. Naming Conventions

### 2.1 Class Names

**Rule**: Use PascalCase for all class names.

**Pattern**: `urpx:ConceptName`

**Examples**:
- `urpx:RatePlan`
- `urpx:BillingModel`
- `urpx:ServicePointProfile`

### 2.2 Property Names

**Rule**: Use camelCase for all property names.

**Pattern**: `urpx:propertyName`

**Examples**:
- `urpx:hasCalculationMethod`
- `urpx:unitPrice`
- `urpx:effectiveDate`

### 2.3 Enumeration Classes

**Rule**: Enumeration classes MUST end with `Value`.

**Pattern**: `urpx:ConceptNameValue`

**Examples**:
- `urpx:LedgerTypeValue`
- `urpx:ChannelTypeValue`
- `urpx:CommodityValue`

**Rationale**: Distinguishes enumeration classes from regular classes and provides consistent pattern recognition.

### 2.4 Enumeration Instances

**Rule**: Use camelCase for enumeration instances, with descriptive suffixes where appropriate.

**Pattern**: `urpx:descriptiveName` or `urpx:descriptiveNameType`

**Examples**:
- `urpx:supplyLedger` (not `urpx:supply`)
- `urpx:measuredChannel` (not `urpx:measured`)
- `urpx:monthlyInterval` (not `urpx:monthly`)

**Rationale**: Prevents naming collisions and improves semantic clarity.

---

## 3. Documentation Standards

### 3.1 Required Annotations

**Rule**: Every class and property MUST have:
1. `rdfs:label` - Human-readable name in English
2. `rdfs:comment` - Brief description (1-2 sentences)
3. `skos:note` - Detailed explanation, usage patterns, and design rationale

**Example**:
```turtle
urpx:BillingModel a owl:Class ;
    rdfs:label "Billing Model"@en ;
    rdfs:comment "Defines billing-specific rules and calculation patterns with ledger-based organization."@en ;
    skos:note "Contains one or more ledgers for organizing prices by billing category (supply, delivery, etc.) and defines calculation rules, proration patterns, and adjustment mechanisms." .
```

### 3.2 W3C Compliance

**Rule**: Keep `skos:note` content concise and W3C-compliant.

**Guidelines**:
- Focus on essential information
- Avoid verbose explanations that belong in separate documentation
- Use clear, technical language

**Anti-pattern** (too verbose):
```turtle
skos:note "This class is really important because it does many things. First, it does X. Then it does Y. Also, it can do Z in some cases. Users should be aware that..." .
```

**Correct pattern** (concise):
```turtle
skos:note "Defines billing calculation rules and proration patterns. Supports ledger-based organization for supply/delivery separation." .
```

---

## 4. Structural Principles

### 4.1 Class Hierarchy

**Rule**: Use `rdfs:subClassOf` for true IS-A relationships only.

**Guidelines**:
- Subclass when the child IS-A specialized version of the parent
- Avoid deep hierarchies (prefer 2-3 levels maximum)
- Document the inheritance relationship in `skos:note`

**Example**:
```turtle
urpx:RateGroup a owl:Class ;
    rdfs:subClassOf urpx:ServiceClass ;
    rdfs:label "Rate Group"@en ;
    rdfs:comment "Specific rate grouping within a service class" ;
    skos:note "Subclass of ServiceClass representing specific rate groups like 'Service Class 2 Rate I'." .
```

### 4.2 Property Domains and Ranges

**Rule**: Always specify domain and range for properties.

**Guidelines**:
- Use `owl:unionOf` for multiple possible domains/ranges
- Document cardinality constraints in `skos:note`

**Example**:
```turtle
urpx:calculationMethod a rdf:Property ;
    rdfs:label "Calculation Method"@en ;
    rdfs:comment "A textual description of the calculation method."@en ;
    rdfs:domain urpx:Price ;
    rdfs:range xsd:string ;
    skos:note "This property allows for a simple, human-readable description of the calculation logic directly on a price. For complex, machine-readable rules, a more formal rule representation should be used." .
```

### 4.3 Enumeration Pattern

**Rule**: Use `owl:oneOf` for closed enumerations.

**Pattern**:
```turtle
urpx:EnumerationNameValue a owl:Class ;
    rdfs:label "Enumeration Name Value"@en ;
    rdfs:comment "Brief description of enumeration purpose" ;
    owl:equivalentClass [ a owl:Class ;
            owl:oneOf ( urpx:value1 urpx:value2 urpx:value3 ) ] ;
    skos:note "Enumeration class for [purpose]. Covers [scope]." .
```

---



---

## 5. Version Control

### 5.1 Ontology Versioning

**Rule**: Update `owl:versionInfo` and `dcterms:modified` with each release.

**Pattern**:
```turtle
urpx: a owl:Ontology ;
    owl:versionInfo "0.1.1" ;
    dcterms:modified "2025-12-17"^^xsd:date ;
    ...
```

### 5.2 Backup Before Major Changes

**Rule**: Create timestamped backups before major refactoring.

**Pattern**: `backups/[epic_name]_[YYYYMMDD]/`

**Example**: `backups/v0.1.1_comprehensive_start_20251216/`

---

## 6. Quality Assurance

### 6.1 Validation Requirements

**Rule**: All ontology changes MUST pass:
1. Turtle syntax validation (rapper, rdflib)
2. OWL consistency checking

### 6.2 Review Checklist

Before committing ontology changes, verify:
- [ ] Alphabetical organization maintained
- [ ] All classes have label, comment, and note
- [ ] All properties have domain and range
- [ ] Naming conventions followed
- [ ] Documentation is concise and W3C-compliant
- [ ] Turtle syntax validates
- [ ] No duplicate definitions

---

## 7. Collaboration Guidelines

### 7.1 Pull Request Standards

**Rule**: PRs modifying ontology files MUST include:
1. Description of changes
2. Rationale for changes
3. Breaking change assessment
4. Validation results
5. Updated documentation (if applicable)

### 7.2 Review Focus Areas

Reviewers should verify:
- Adherence to design principles
- Semantic correctness
- Documentation quality
- Migration guidance (for breaking changes)

---

## 8. References

### Related Documents
- [URPX Syntax Guidelines](./urpx-syntax-guidelines.md) - Turtle syntax and formatting
- [URPX Overview](./urpx-overview.md) - Project overview and architecture
- [URPX Quality Assurance](./urpx-quality-assurance.md) - Testing and validation

### External Standards
- [OWL 2 Web Ontology Language](https://www.w3.org/TR/owl2-overview/)
- [RDF 1.1 Turtle](https://www.w3.org/TR/turtle/)
- [SKOS Simple Knowledge Organization System](https://www.w3.org/TR/skos-reference/)

---

## License

Copyright © 2025 Flux Tailor LLC. Licensed under Apache 2.0.