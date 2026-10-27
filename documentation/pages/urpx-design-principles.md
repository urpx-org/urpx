<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

---
site_category: advanced-topics
site_id: design-principles
site_title: "Design Principles"
site_position: 2
---

# URPX Design Principles

**Version**: 0.5.1 (Working Group Draft)
**Last Updated**: 2026-10-05
**Status**: Active

---

## Purpose

This document defines the core design principles and organizational standards for URPX ontology development. These principles ensure consistency and maintainability across the project.

---

## 1. Alphabetical Organization

### 1.1 Class Definitions

**Rule**: All OWL classes MUST be organized alphabetically by their local name (after the `urpx:` prefix).

**Rationale**: 
- Enables quick location of class definitions
- Reduces merge conflicts in collaborative development
- Provides a predictable structure for readers and tools

**Example**:
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

urpx:AccountServiceAgreement a owl:Class ;
    rdfs:label "Account Service Agreement"@en .

urpx:BillingModel a owl:Class ;
    rdfs:label "Billing Model"@en .

urpx:CalculationMethod a owl:Class ;
    rdfs:label "Calculation Method"@en .
```

### 1.2 Property Definitions

**Rule**: All properties (ObjectProperty, DatatypeProperty) MUST be organized alphabetically by their local name.

**Rationale**: Same as class organization - predictability and maintainability.

### 1.3 Enumeration Values

**Rule**: Within an enumeration class definition (`owl:oneOf`), members SHOULD be organized alphabetically by their local name, unless a natural order (for example a confidence scale, a voltage level, or an interval duration) reads more clearly. Inline comments are not used to group members.

**Example** (an illustrative excerpt; the full enumeration carries more members):
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

urpx:CommodityValue owl:equivalentClass [ owl:oneOf (
    urpx:biomass
    urpx:coal
    urpx:electricity
    urpx:naturalGas
    urpx:solar
    urpx:water
    urpx:wind
) ] .
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
- `urpx:ChargeTypeValue`
- `urpx:CommodityValue`

**Rationale**: Distinguishes enumeration classes from regular classes and provides consistent pattern recognition.

### 2.4 Enumeration Instances

**Rule**: Use camelCase for enumeration instances, with descriptive suffixes where appropriate.

**Pattern**: `urpx:descriptiveName` or `urpx:descriptiveNameType`

**Examples**:
- `urpx:supplyLedger` (not `urpx:supply`)
- `urpx:measuredMetricInput` (not `urpx:measured`)
- `urpx:monthlyInterval` (not `urpx:monthly`)

**Rationale**: Prevents naming collisions and improves semantic clarity.

---

## 3. Documentation Standards

### 3.1 Required Annotations

**Rule**: Every class and property MUST have:
1. `rdfs:label` - Human-readable name, carrying a language tag (`@en`) so labels can be provided in other languages
2. `rdfs:comment` - Brief description (1-2 sentences)
3. `skos:note` - Detailed explanation, usage patterns, and design rationale

**Example**:
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:BillingModel a owl:Class ;
    rdfs:label "Billing Model"@en ;
    rdfs:comment "Defines billing-specific rules and calculation patterns with ledger-based organization."@en ;
    skos:note "Contains one or more ledgers for organizing prices by billing category (supply, delivery, etc.) and defines calculation rules, proration patterns, and adjustment mechanisms." .
```

### 3.2 Concise Notes

**Rule**: Keep `skos:note` content concise.

**Guidelines**:
- Focus on essential information
- Avoid verbose explanations that belong in separate documentation
- Use clear, technical language

**Anti-pattern** (too verbose):
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:BillingModel skos:note "This class is really important because it does many things. First, it does X. Then it does Y. Also, it can do Z in some cases. Users should be aware that..." .
```

**Correct pattern** (concise):
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:BillingModel skos:note "Defines billing calculation rules and proration patterns. Supports ledger-based organization for supply/delivery separation." .
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
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:RegulatoryAuthority a owl:Class ;
    rdfs:label "Regulatory Authority"@en ;
    rdfs:subClassOf urpx:Organization ;
    skos:note "Government or quasi-government entity with rate-setting authority. Includes PUCs, FERC, international regulators with nested jurisdictions." .
```

### 4.2 Property Domains and Ranges

**Rule**: Specify domain and range for properties unless a property is deliberately left open (for example `hasTemporalScope`, which applies across classes).

**Guidelines**:
- Use `owl:unionOf` for multiple possible domains/ranges
- Document cardinality constraints in `skos:note`

**Example**:
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

urpx:url a owl:DatatypeProperty ;
    rdfs:label "URL"@en ;
    rdfs:comment "URL of the item" ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:SourcePublication urpx:URPXPackage urpx:RatePlan urpx:RatePlanVersion urpx:RatePlanModifier urpx:RatePlanModifierVersion urpx:DataSourceReference urpx:ProgramEnrollment urpx:RateCase urpx:Organization ) ] ;
    rdfs:range xsd:anyURI ;
    skos:note "Direct link to PDF, HTML, or other document format." .
```

### 4.3 Enumeration Pattern

**Rule**: Use `owl:oneOf` for closed enumerations.

**Pattern**:
```turtle
@prefix urpx: <https://urpx.org/ns/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

urpx:EnumerationNameValue a owl:Class ;
    rdfs:label "Enumeration Name Value"@en ;
    rdfs:comment "Brief description of enumeration purpose" ;
    owl:equivalentClass [ a owl:Class ;
            owl:oneOf ( urpx:value1 urpx:value2 urpx:value3 ) ] ;
    skos:note "Enumeration class for [purpose]. Covers [scope]." .
```

---

## 5. Version Control

**Rule**: Update `owl:versionInfo` and `dcterms:modified` with each release.

**Pattern**:
```turtle
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

<https://urpx.org/ns/ontology> a owl:Ontology ;
    owl:versionInfo "0.5.1" ;
    dcterms:modified "2026-09-08"^^xsd:date .
```

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
- [ ] Properties have domain and range, or a documented reason to be open
- [ ] Naming conventions followed
- [ ] Documentation is concise
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
- [URPX Syntax Guidelines](urpx-syntax-guidelines.md) - Labeling conventions and ontology syntax
- [URPX Overview](urpx-overview.md) - Project overview and architecture
- [URPX Quality Assurance](urpx-quality-assurance.md) - Testing and validation

### External Standards
- [OWL 2 Web Ontology Language](https://www.w3.org/TR/owl2-overview/)
- [RDF 1.1 Turtle](https://www.w3.org/TR/turtle/)
- [SKOS Simple Knowledge Organization System](https://www.w3.org/TR/skos-reference/)

---

## License

Copyright © The URPX Authors. Licensed under the W3C Software Notice and Document License (W3C-20150513). See [NOTICE](../../NOTICE) for the full statement.
