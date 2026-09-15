<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->

---
site_category: advanced-topics
site_id: design-decisions-001-040
site_title: "Design Decisions 001–040"
site_label: "Decisions 001–040"
site_position: 3
---

# URPX (Utility Rate Plan Exchange) Design Decisions Log

**Version:** 1.0
**Created:** 2025-09-25
**Last Updated:** 2026-01-28

> **Note:** Design decisions reference the original modular ontology files (urpx-core-ontology.ttl, urpx-profile.ttl, urpx-organization.ttl, urpx-geography.ttl, urpx-charge-classification.ttl). As of v0.1.1, these files have been consolidated into a single `ontology/urpx-ontology.ttl` file.

## Welcome!

This document is the architectural memory of the URPX project - a living record of every significant design decision made during development. Whether you're a contributor looking to understand why things work the way they do, a reviewer evaluating our standards compliance, or a future maintainer picking up where we left off, this log provides the context and rationale behind our choices.

Each decision includes the alternatives we considered, the reasoning behind our selection, implementation details, and impact assessment. We believe in transparent, well-documented design that stands up to scrutiny and evolves thoughtfully over time.

**How to use this document:**
- Browse the [Decision Index](#decision-index) below for quick navigation
- Each decision has a 🔗 link emoji for easy sharing
- Follow the template when adding new decisions
- Challenge our thinking - good design decisions should be defensible!

---

## Purpose

This document logs design decisions made during URPX ontology development with rationale, alternatives considered, and impact assessment. Provides audit trail for architectural choices and standards alignment decisions.

---

## Decision Status Legend

- **✅ Implemented** - Decision implemented and deployed
- **📋 Approved** - Decision approved, pending implementation
- **🔄 Under Review** - Decision under consideration
- **❌ Rejected** - Decision rejected, alternative chosen
- **📚 Superseded** - Decision replaced by newer decision

---

## Decision Index

Quick links to all design decisions:

- ✅ Decision #001: serviceType → utilityServiceKind Rename
- ✅ Decision #002: ObjectProperty Pattern for Enumerations - 100% Complete
- ✅ Decision #003: Architectural Boundaries (URPX vs CDS)
- ✅ Decision #004: CustomerProfileSet Architecture Implementation
- ✅ Decision #005: EligibilityRule Parallel Properties Architecture
- ✅ Decision #006: LocationDataSet Versioned Auxiliary Data
- ✅ Decision #007: URPXDocument Type Capability Matrix
- ✅ Decision #008: AlternativeDimension Human-Readable Labels
- ✅ Decision #009: Formal OWL Enumeration Architecture with camelCase Convention
- ✅ Decision #010: SI Unit Symbol Preservation in Enumeration Naming
- ✅ Decision #011: CustomerKind/CustomerSubKind Proper Enumeration Architecture
- ✅ Decision #012: ServicePointProfile CIM Terminology Alignment
- ✅ Decision #013: Dual-Level Currency Architecture
- ✅ Decision #014: MetricSpecification Simplified Measurement Approach
- ✅ Decision #015: MeasurementTypeValue Green Button Naming Alignment
- ✅ Decision #016: Measurement Framework Enumeration Expansion
- ✅ Decision #017: Measurement Framework Property Consolidation
- ✅ Decision #018: Flat RatePlanVersion Architecture - TemporalDefinition, PricingModel, BillingModel
- ✅ Decision #021: MetricInputRuleSet Semantic Clarity Rename
- ✅ Decision #022: Single Profile Parent Class Architecture
- ✅ Decision #023: Dual IRI+Integer Reference Pattern for TOUPeriod and ServiceTier
- ✅ Decision #024: Dual-Pattern Architecture for MetricSpecification Reuse
- ✅ Decision #025: baseQuantityUnit Scope - Infrastructure Quantities Only
- ✅ Decision #026: Charge Interval Representation - Measurement Processing on Charge
- ✅ Decision #027: ISO 8601 Two-Digit Month Format for Temporal Patterns
- ✅ Decision #028: Flexible ISO 8601 Charge Applicability Properties
- ✅ Decision #029: CalculationIntervalValue Enumeration for Time-Based Charges
- 📋 Decision #030: CalculationMethod CIM Alignment - Future Research Task
- ✅ Decision #031: Shared Namespace Strategy with rdfs:isDefinedBy
- 🚧 Decision #032: Profile-Scenario Ontology Consolidation
- ✅ Decision #033: Scenario Ontology Separation Strategy
- ✅ Decision #034: Schema.org Vocabulary Reuse - Core Properties Replacement
- ✅ Decision #035: Deferral of Financial Property Replacements
- ✅ Decision #036: `ScenarioMetric` Class Definition
- ✅ Decision #037: Generic Utility Identifier - eiaId to utilityId Rename
- ✅ Decision #038: Season Temporal Simplification - xsd:gMonth Multi-Value Pattern
- 📋 Decision #039: TOUSchedule Measurement Architecture Refinement - BillingModel Migration
- ✅ Decision #040: Eligibility Properties Deprecation - Unified Condition Pattern

---

## How to Add New Decisions

1. Use the Decision Template at the beginning of this document
2. Assign the next sequential decision number
3. Add link emoji 🔗 to the decision header: `### 🔗 Decision #XXX:`
4. Add entry to the Decision Index above with working link
5. Follow the template structure for consistency

---
### Decision Template

<a id="decision-XXX"></a>
### 🔗 Decision #XXX: [Decision Title]

- **Status:** 📋 Approved
- **Date:** [Date]
- **Issue:** [Link to related issue]
- **Category:** [Category]
- **Impact:** [High/Medium/Low] - [Description]

**Context:**
[Background and problem description]

**Decision:**
[What was decided]

**Alternatives Considered:**

1. **Option 1** ⭐ **SELECTED**
   - ✅ [Advantage 1]
   - ✅ [Advantage 2]
   - ❌ [Disadvantage if any]

2. **Option 2**
   - ✅ [Advantage 1]
   - ❌ [Disadvantage 1]
   - ❌ [Disadvantage 2]

**Rationale:**
- [Key reasoning point 1]
- [Key reasoning point 2]

**Implementation Details:**
- [Implementation step 1]
- [Implementation step 2]

**Impact Assessment:**
- **Positive**: [Positive impacts]
- **Breaking Change**: [Any breaking changes]
- **Requirements**: [Additional requirements]

**References:**
- [Related documents]

---

## Categories

- **Standards Compliance** - CIM, CDS, FERC, ISO alignment decisions
- **Naming Convention** - Property and class naming decisions
- **Architecture** - High-level structural design decisions  
- **Data Boundaries** - Integration and separation decisions
- **Performance** - Scalability and optimization decisions
- **Validation** - SHACL and semantic validation decisions

---

## Decision Principles

### Standards Alignment
- Prioritize industry standards (CIM, CDS, FERC) for interoperability
- Document deviations with clear rationale
- Maintain forward compatibility with emerging standards

### Semantic Clarity  
- Favor explicit over implicit semantics
- Eliminate ambiguity in property and class definitions
- Use industry-standard terminology where available

### Privacy by Design
- Maintain clear boundaries between rate plan and customer data
- Use reference patterns for cross-system integration
- Prevent accidental PII exposure in rate plan semantics

### Future-Proofing
- Design for extensibility and evolution
- Minimize breaking changes in future updates
- Support multiple integration patterns

---

## Maintenance Guidelines

1. **Decision Recording** - Document all architectural decisions promptly
2. **Alternative Analysis** - Always consider multiple alternatives
3. **Impact Assessment** - Evaluate both immediate and long-term impacts  
4. **Reference Tracking** - Link decisions to related issues and documents
5. **Review Process** - Regular review of decisions for relevance and effectiveness

## Decisions Registry

<a id="decision-001"></a>
### 🔗 Decision #001: serviceType → utilityServiceKind Rename

- **Status:** ✅ Implemented
- **Date:** 2025-09-25
- **Category:** Standards Compliance, Naming Convention
- **Impact:** Medium - Property rename affecting geographic ontology

**Context:**
Property naming ambiguity identified where `serviceType` appeared in multiple ontology contexts creating semantic confusion between different service classifications. Geographic context required CIM ServiceKind alignment for utility service territory classification.

**Decision:**
Rename `urpx-geo:serviceType` to `urpx-geo:utilityServiceKind` to eliminate ambiguity and achieve direct CIM standards alignment.

**Alternatives Considered:**

1. **`utilityServiceKind`** ⭐ **SELECTED**
   - ✅ Direct CIM ServiceKind enumeration alignment  
   - ✅ Clear utility domain specificity
   - ✅ Eliminates generic "service" ambiguity
   - ✅ Established utility industry naming convention

2. **`serviceCategory`** 
   - ✅ CIM ServiceCategory pattern alignment
   - ❌ Less specific than CIM ServiceKind
   - ❌ Still contains generic "service" term

3. **`commodityType`**
   - ✅ CIM Commodity classification alignment
   - ❌ Focuses on substance rather than service delivery
   - ❌ Less geographic context specificity

4. **`territoryServiceKind`**
   - ✅ Geographic-specific CIM ServiceKind variant
   - ❌ Redundant with domain context
   - ❌ Overly verbose naming

5. **`serviceDomain`**
   - ✅ Clear operational domain indication
   - ❌ No direct CIM standards alignment
   - ❌ Custom terminology without industry precedent

**Rationale:**
- **CIM Standards Alignment**: Direct mapping to CIM ServiceKind enumeration used throughout utility industry
- **Semantic Clarity**: "utilityServiceKind" clearly indicates utility-specific service classification
- **Geographic Context**: Maintains semantic clarity within service territory context  
- **Industry Convention**: Follows established CIM naming patterns for utility data models
- **Ambiguity Resolution**: Eliminates confusion between different "serviceType" properties

**Implementation Details:**
- Property renamed: `urpx-geo:serviceType` → `urpx-geo:utilityServiceKind`
- Range updated: `ServiceTypeValue` → `UtilityServiceKindValue`
- Added 4 alphabetized enum instances: `electric_service`, `gas_service`, `multi_service`, `water_service`
- Enhanced CIM ServiceKind alignment documentation
- Updated property comments to reference CIM ServiceKind patterns

**Impact Assessment:**
- **Positive**: Enhanced CIM standards compliance, eliminated naming ambiguity
- **Breaking Change**: Property name change affects existing references
- **Documentation Update Required**: All references to serviceType in geographic context need updating
- **Future-Proof**: Establishes pattern for other context-specific service type properties

**References:**
- CIM ServiceKind enumeration specification
- Geographic ontology CIM alignment requirements
- URPX Documentation Update Log

---

<a id="decision-002"></a>
### 🔗 Decision #002: ObjectProperty Pattern for Enumerations - 100% Complete

- **Status:** ✅ Implemented - COMPLETE  
- **Date:** 2025-09-23 to 2025-09-26
- **Completion:** 2025-09-26
- **Category:** Architecture, Standards Compliance
- **Impact:** High - Core architectural pattern affecting entire ontology

**Context:**
Mixed usage of string-based and ObjectProperty-based enumerations across ontology created inconsistent validation, querying patterns, and standards compliance. Need for systematic approach to structured enumerations.

**Decision:**
Adopt ObjectProperty pattern for all enumeration properties with dedicated enumeration value classes and instances across the entire URPX ontology.

**Pattern:**
```turtle
# ObjectProperty with enum class (ADOPTED)
urpx:propertyName a owl:ObjectProperty ;
    rdfs:label "Property Name" ;
    rdfs:range urpx:PropertyNameValue ;
    owl:cardinality 1 ;
    skos:note "Standards-aligned enumeration..." .

urpx:PropertyNameValue a owl:Class ;
    rdfs:label "Property Name Value" ;
    rdfs:comment "Enumeration values" .

urpx:enum_instance a urpx:PropertyNameValue ;
    rdfs:label "Enum Instance" ;
    skos:prefLabel "Enum" ;
    skos:definition "Definition..." .
```

**Alternatives Considered:**

1. **ObjectProperty Pattern** ⭐ **SELECTED**
   - ✅ Type-safe enumeration validation
   - ✅ Standards-compliant semantic structure
   - ✅ Extensible enumeration management
   - ✅ Enhanced SHACL validation capabilities

2. **String-based Enumerations**
   - ✅ Simple implementation
   - ❌ Limited validation capabilities
   - ❌ No standards alignment
   - ❌ Type safety gaps

3. **Mixed Approach**
   - ❌ Inconsistent developer experience
   - ❌ Complex validation rules
   - ❌ Maintenance overhead

**Complete Implementation:**
- **✅ Phase 1**: 14/14 properties - CDS/Standards Critical + Core Business Logic + Market & Pricing
- **✅ Phase 2A**: 15/15 properties - Core Ontology Properties  
- **✅ Phase 2B**: 9/9 properties - Geographic Properties (urpx-geography.ttl)
- **✅ Phase 2C**: 12/12 properties - Organization Properties (urpx-organization.ttl)
- **✅ Phase 2D**: 4/4 properties - Final Critical Properties
- **✅ TOTAL**: 54/54 properties (100% COMPLETE) with 500+ enum instances

**Final Results:**
- **500+ Enum Instances**: Complete enumeration coverage with standards alignment
- **Full CIM/CDS/FERC/ISO Compliance**: Industry standards integration achieved
- **Production-Ready Architecture**: Type-safe semantic validation throughout ontology
- **Comprehensive Documentation**: Each enum value includes labels, definitions, and standards references

**Rationale:**
- **Type Safety**: Prevents enumeration value typos and invalid selections
- **Standards Integration**: Direct compatibility with CIM, CDS, FERC systems
- **Validation**: Structured SHACL validation replaces string pattern matching
- **Documentation**: Comprehensive enum value definitions with standards references
- **Extensibility**: Easy addition of new enumeration values without breaking changes

**Impact Assessment:**
- **Positive**: Production-ready semantic validation, enhanced standards compliance
- **Breaking Change**: String-based enum usage no longer supported
- **Development Investment**: Complete systematic conversion across entire ontology
- **Long-term Benefit**: Scalable, maintainable enumeration architecture
- **Production Ready**: Foundation for conference presentation and industry deployment

**Next Phase - SHACL Validation Update Required:**
Despite 100% ontology conversion, SHACL validation rules still expect string datatypes instead of ObjectProperty classes. This creates critical production blocker requiring immediate SHACL constraint updates for all 54 converted properties.

**References:**
- URPX Enumeration Inventory
- CIM enumeration pattern specifications
- CDS integration requirements
- Production Readiness Plan

---

<a id="decision-003"></a>
### 🔗 Decision #003: Architectural Boundaries (URPX vs CDS)

- **Status:** ✅ Implemented  
- **Date:** 2025-09-18
- **Category:** Architecture, Data Boundaries
- **Impact:** High - Core integration architecture

**Context:**
Need to maintain clear architectural boundaries between URPX (rate plan semantics) and CDS (customer data) while enabling necessary integration without data duplication or privacy violations.

**Decision:**
Maintain strict architectural boundaries with reference-only integration patterns. URPX contains rate plan semantics; CDS contains customer data. Integration via external references only.

**Principles:**
1. **No PII in URPX**: No personally identifiable information stored in rate plan data
2. **Reference-Only Integration**: External references to CDS entities, not data duplication  
3. **Clear Domain Separation**: Rate plan logic in URPX, customer data in CDS
4. **Privacy by Design**: Architecture prevents accidental PII exposure

**Implementation Examples:**

**✅ CORRECT - Reference Pattern:**
```turtle
urpx:creditRating a owl:DatatypeProperty ;
    rdfs:comment "Reference to CDS credit rating classification" ;
    skos:note "Credit rating data lives in CDS for alternative credit scoring..." .
```

**❌ INCORRECT - Data Duplication:**
```turtle
urpx:creditScore a owl:DatatypeProperty ;
    rdfs:range xsd:integer ;
    rdfs:comment "Customer credit score" .
```

**Rationale:**
- **Privacy Protection**: Prevents accidental PII storage in rate plan data
- **Clear Separation**: Maintains distinct system responsibilities
- **Regulatory Compliance**: Supports data governance and privacy regulations
- **System Integration**: Enables integration without architectural compromise

**Impact Assessment:**
- **Positive**: Clear privacy boundaries, regulatory compliance support
- **Constraint**: Integration complexity for cross-system queries
- **Benefit**: Reduced data synchronization challenges
- **Future-Proof**: Supports evolving privacy and data governance requirements

**References:**
- Customer Data Specification (CDS) integration patterns
- URPX privacy architecture requirements

---

<a id="decision-004"></a>
### 🔗 Decision #004: CustomerProfileSet Architecture Implementation

- **Status:** ✅ Implemented
- **Date:** 2025-09-26
- **Issue:** CustomerProfile and EligibilityRule Integration
- **Category:** Architecture, Major Enhancement
- **Impact:** High - Complete customer eligibility architecture redesign

**Context:**
CustomerProfile and EligibilityRule exhibited redundant data patterns and complex interdependencies. Rate plan eligibility determination required cleaner separation between customer archetypes and boolean eligibility logic while maintaining charge selection capabilities.

**Decision:**
Implement comprehensive CustomerProfileSet architecture with boolean eligibility expressions and individual profile ID references for charge selection.

**Architecture Components:**

1. **CustomerProfileSet Class** ⭐ **IMPLEMENTED**
   - ✅ Container for related customer profiles with shared eligibility logic
   - ✅ `customerProfileRuleExpression` for boolean logic (AND, OR, NOT operations)
   - ✅ CIM UsagePointGroup alignment for industry standards compatibility

2. **Enhanced CustomerProfile Class** ⭐ **IMPLEMENTED**  
   - ✅ Individual customer archetype with unique `profileId` for charge selection
   - ✅ Focused on customer characteristics rather than eligibility logic
   - ✅ Referenced by ChargeSetAlternatives for precise charge applicability

3. **Relationship Updates** ⭐ **IMPLEMENTED**
   - ✅ Moved `hasCustomerProfile` from URPXDocument to RatePlan domain via CustomerProfileSet
   - ✅ Added `applicableToCustomerProfile` for ChargeSetAlternatives integration

**Alternatives Considered:**

1. **CustomerProfileSet Architecture** ⭐ **SELECTED**
   - ✅ Clean separation of concerns (eligibility vs characteristics)
   - ✅ Boolean logic support for complex eligibility scenarios
   - ✅ Profile ID references enable precise charge selection
   - ✅ Eliminates CustomerProfile/EligibilityRule redundancy

2. **Enhanced EligibilityRule Only**
   - ✅ Simpler implementation path
   - ❌ Maintains redundancy between profiles and rules
   - ❌ No clean charge selection mechanism

3. **Direct CustomerProfile Boolean Logic**
   - ✅ Single class approach
   - ❌ Mixes customer characteristics with eligibility logic
   - ❌ Limited reusability across rate plans

**Implementation Details:**
- **CustomerProfileSet Properties**: `customerProfileRuleExpression` for boolean logic, `hasCustomerProfile` for contained profiles
- **CustomerProfile Properties**: `profileId` for unique identification within rate plan scope
- **SHACL Validation**: Comprehensive validation for profileId uniqueness, boolean expression syntax, and architectural compliance
- **Documentation Updates**: Complete developer notes with CIM alignment and usage patterns

**Rationale:**
- **Architectural Clarity**: Eliminates redundancy between customer archetypes and eligibility determination
- **Boolean Logic**: Supports complex eligibility scenarios with AND, OR, NOT operations and parentheses
- **Charge Selection**: ProfileId references enable precise charge applicability without eligibility complexity
- **Standards Alignment**: CIM UsagePointGroup pattern provides industry-standard foundation
- **Production Ready**: Complete implementation with SHACL validation and comprehensive documentation

**Impact Assessment:**
- **Positive**: Clean architecture, eliminated redundancy, enhanced charge selection precision
- **Breaking Change**: Moves customer profiles from document-level to rate plan-level organization
- **Enhanced Capability**: Boolean eligibility logic supports complex utility rate structures
- **Future-Proof**: Scalable architecture supports evolving customer segmentation requirements

**References:**
- CIM UsagePointGroup specification
- ChargeSetAlternatives integration patterns
- URPX SHACL validation rules

---

<a id="decision-005"></a>
### 🔗 Decision #005: EligibilityRule Parallel Properties Architecture

- **Status:** ✅ Implemented
- **Date:** 2025-10-10
- **Category:** Architecture, Standards Compliance
- **Impact:** High - Core eligibility architecture redesign

**Context:**
CustomerProfile and UsagePointProfile (formerly UsageProfile) needed cleaner integration with eligibility determination. Previous architecture had hasCustomerProfile on RatePlanVersion, creating ambiguity about where profiles applied for charge selection versus overall eligibility.

**Decision:**
Implement parallel properties architecture where both hasUsagePointProfile and hasCustomerProfile have domain EligibilityRule, enabling flat structure without deep nesting.

**Alternatives Considered:**

1. **Parallel Properties on EligibilityRule** ⭐ **SELECTED**
   - ✅ CIM/Green Button standards alignment (separates UsagePoint from Customer)
   - ✅ Cost modeling efficiency - both needed simultaneously for eligibility
   - ✅ No deep nesting - one level structure
   - ✅ Flexible - can use either or both profiles per rule

2. **Container Approach (ProfileSet)**
   - ✅ Groups related profiles
   - ❌ Adds extra nesting level
   - ❌ Complicates optional profile handling

3. **Nested Hierarchy (UsagePointProfile contains CustomerProfile)**
   - ✅ Shows relationship
   - ❌ Deep nesting complexity
   - ❌ Violates CIM separation pattern

4. **Keep CustomerProfile at RatePlanVersion**
   - ❌ Doesn't address UsagePointProfile integration
   - ❌ Ambiguity about eligibility vs charge selection

**Rationale:**
- **CIM Standards**: Separates physical service point (UsagePoint) from business entity (Customer)  
- **Green Button Alignment**: UsagePoint model with DER extensions kept distinct from customer data
- **Real-world Example**: "Residential customer (CustomerProfile) with solar DER (UsagePointProfile) in Zone H qualifies for TOU rate" - both needed
- **Query Efficiency**: Flat structure enables: `?rule hasCustomerProfile ?customer ; hasUsagePointProfile ?usagePoint`
- **Flexibility**: Rules can have ONLY customer criteria, ONLY usage point criteria, or both

**Implementation Details:**
- `hasUsagePointProfile` property with domain EligibilityRule, range UsagePointProfile
- `hasCustomerProfile` domain changed from RatePlanVersion to EligibilityRule
- UsageProfile renamed to UsagePointProfile for CIM alignment
- Both properties documented as parallel for eligibility determination

**Impact Assessment:**
- **Positive**: Clean architecture, CIM alignment, flexible eligibility rules
- **Breaking Change**: hasCustomerProfile domain moved from RatePlanVersion
- **Standards Ready**: Aligns with IEC 61968-9 (Metering) and CDS patterns

**References:**
- CIM UsagePoint specification
- Green Button DER extensions
- Design Issue #007 resolution

---

<a id="decision-006"></a>
### 🔗 Decision #006: LocationDataSet Versioned Auxiliary Data

- **Status:** ✅ Implemented  
- **Date:** 2025-10-10
- **Issue:** Holiday calendar versioning requirement
- **Category:** Architecture, Temporal Management
- **Impact:** Medium - Auxiliary data versioning framework

**Context:**
Holiday dates change year to year (e.g., Thanksgiving date varies, DST rules change). Organizations need to publish versioned auxiliary location data so rate plans can reference appropriate versions for billing calculations across time series.

**Decision:**
Create LocationDataSet class to bundle versioned holiday calendars with timezone and DST rules. Organizations publish versions as holidays change or timezone rules update.

**Alternatives Considered:**

1. **LocationDataSet Bundling** ⭐ **SELECTED**
   - ✅ Bundles related location data (holidays + timezone + DST)
   - ✅ Versioned as unit with effectiveDate/expirationDate
   - ✅ Extensible for future location-specific data
   - ✅ Organizations publish multiple versions

2. **Independent HolidayCalendar Versioning**
   - ✅ Simpler initial implementation
   - ❌ Doesn't address timezone offset management
   - ❌ Fragments related location data

3. **Embed in Organization Versioning**
   - ✅ Ties to organization lifecycle
   - ❌ Less flexible for multi-org scenarios
   - ❌ Couples org changes with location data updates

**Rationale:**
- **Holiday Date Changes**: Enables year-to-year holiday date updates (Thanksgiving, Easter, etc.)
- **Timezone Management**: Bundles timezone identifier and DST rules with holidays
- **Extensibility**: Container pattern allows future location data additions
- **Multi-version Support**: Organizations can publish multiple versions for temporal coverage

**Implementation Details:**
```turtle
LocationDataSet class with:
- effectiveDate/expirationDate for versioning
- hasHolidayCalendar property
- timezoneIdentifier property (IANA timezone)
- daylightSavingRules property

Dual reference pattern:
- RatePlanVersion.hasHolidayCalendar (select entire calendar)
- RatePlanVersion.observesHoliday (select specific holidays)
```

**Impact Assessment:**
- **Positive**: Solves holiday date change problem, enables timezone management
- **Extensible**: Future location data additions without breaking changes
- **Dual Access**: Rate plans can reference full calendar OR specific holidays

**References:**
- Working-group notes on the holiday-versioning requirement
- CIM CalendarTimeInterval patterns

---

<a id="decision-007"></a>
### 🔗 Decision #007: URPXDocument Type Capability Matrix

- **Status:** ✅ Implemented
- **Date:** 2025-10-10  
- **Issue:** Document type specialization requirements
- **Category:** Architecture, Document Types
- **Impact:** Medium - Content capabilities framework

**Context:**
URPX needed different document types with specific content capabilities. Not all documents should contain rate plans - some are just charge adjustments, modifiers, or specialized pricing (DER exports, real-time prices).

**Decision:**
Create 7 URPXDocument subclasses with clearly defined capability matrix.

**Document Type Capabilities:**
- **TariffBook**: RatePlans ✓, Modifiers ✓, Charges ✓ (full capabilities)
- **TariffStatement**: Modifiers ✓, Charges ✓ (NO RatePlans)
- **Supplement/Addendum**: Modifiers ONLY
- **SupplyCharges**: Modifiers ✓, Charges ✓ (competitive markets)
- **DERExports**: Modifiers ✓, Charges ✓ (IEEE 1547 future)
- **RealTimePrices**: RatePlans ✓, Modifiers ✓, Charges ✓ (MIDAS future)

**Rationale:**
- **Clear Constraints**: Each document type has explicit capabilities
- **Standards Alignment**: DERExports (IEEE 1547), RealTimePrices (MIDAS/OpenADR)
- **Flexibility**: Two document types can contain RatePlans (TariffBook, RealTimePrices)
- **Regulatory Patterns**: Matches tariff filing structures

**Impact Assessment:**
- **Positive**: Clear document type semantics, future standards placeholders
- **Validation**: SHACL can enforce capability constraints per type
- **Extensible**: Container pattern allows future deep integration

---

<a id="decision-008"></a>
### 🔗 Decision #008: AlternativeDimension Human-Readable Labels

- **Status:** ✅ Implemented
- **Date:** 2025-10-13
- **Issue:** ChargeSetAlternatives GUI filter button labels
- **Category:** Architecture, User Interface
- **Impact:** Medium - Alternative dimension value labeling

**Context:**
AlternativeDimension `possibleValues` contained only identifiers without human-readable labels, blocking GUI filter button generation for ChargeSetAlternatives in consuming applications.

**Decision:**
Replace `possibleValues` (string array) with `hasPossibleValues` (structured objects) containing `rdfs:label`, optional `skos:notation`, and value identifiers.

**Implementation:**
```turtle
urpx:hasPossibleValues a owl:ObjectProperty ;
    rdfs:domain urpx:AlternativeDimension ;
    rdfs:comment "Structured possible values with labels for GUI buttons" .
```

**Pattern:** `{"@id": "ex:Value", "rdfs:label": "Label", "skos:notation": "CODE"}`

**Related Changes:**
- Added `urpx:endUse` property (Heating/Non-Heating) replacing serviceClass in alternatives
- Added `urpx:appliesInZone` for geographic zone alternatives  
- SHACL validation requires `rdfs:label` on all possible values
- Controlled vocabulary for `alternativesType` excludes rate plan-level properties (serviceClass, demandThreshold, usageThreshold, seasonalSchedule)

**Rationale:**
GUI-ready labels, SKOS standards alignment, extensible for translations/definitions.

**Impact:**
Enables consuming-application GUI filter buttons, maintains RDF/linked data patterns.

---

<a id="decision-009"></a>
### 🔗 Decision #009: Formal OWL Enumeration Architecture with camelCase Convention

- **Status:** ✅ Implemented
- **Date:** 2025-10-13
- **Category:** Standards Compliance, Architecture
- **Impact:** Critical - Affects all 50+ enumeration classes and 500+ instances

**Context:**
URPX ontology v0.1.0 exhibited critical inconsistencies in enumeration architecture that would not pass senior engineer review:
1. Mixed OWL formalism (some with `owl:oneOf`, most without)
2. Inconsistent naming (snake_case vs camelCase)
3. Duplicate ChargeTypeValue definitions across files

This created standards compliance gaps, reduced OWL reasoning capability, and complicated maintenance for an open source semantic web project.

**Decision:**
Implement comprehensive formal OWL enumeration architecture with camelCase naming convention for all enumeration instances.

**Architecture Pattern:**
```turtle
# Formal OWL Enumeration Pattern (ADOPTED)
urpx:ChargeTypeValue a owl:Class ;
    rdfs:label "Charge Type Value" ;
    rdfs:comment "Enumeration of valid charge type values" ;
    owl:equivalentClass [
        a owl:Class ;
        owl:oneOf (
            urpx:energyCharge
            urpx:demandCharge
            urpx:minimumCharge
            ...
        )
    ] .

urpx:energyCharge a urpx:ChargeTypeValue ;
    rdfs:label "Energy Charge" ;
    skos:definition "Volumetric charge based on energy consumption" .
```

**Alternatives Considered:**

1. **Formal OWL with camelCase** ⭐ **SELECTED**
   - ✅ W3C OWL 2 Primer compliant (`owl:oneOf` + initial-lowercase)
   - ✅ JSON-LD ecosystem compatibility (JavaScript convention)
   - ✅ Schema.org property value pattern alignment
   - ✅ Clear distinction from classes (PascalCase)
   - ✅ Standard in major open source ontologies
   - ✅ Tool ecosystem defaults (Protégé, Jena, RDFLib)

2. **Formal OWL with snake_case**
   - ✅ Readable URIs
   - ❌ Not standard in W3C ontologies
   - ❌ Not JSON-LD friendly
   - ❌ More common in enterprise/internal ontologies than open source

3. **Formal OWL with PascalCase**
   - ❌ PascalCase typically reserved for classes
   - ❌ Creates confusion between classes and instances
   - ❌ Schema.org uses this for single-word concepts, not compound values

4. **Maintain Status Quo (mixed patterns)**
   - ❌ Won't pass senior engineer review
   - ❌ Violates W3C best practices
   - ❌ Reduces OWL reasoning effectiveness
   - ❌ Poor maintainability

**Rationale:**

**W3C OWL 2 Primer Compliance:**
- **Quote**: "OWL provides the owl:oneOf construct to explicitly list all possible members of a class"
- **Quote**: "Local names starting with lowercase letter typically denote properties and individuals"
- **URL**: https://www.w3.org/TR/owl2-primer/

**JSON-LD Compatibility:**
- JavaScript ecosystem standard: camelCase for identifiers
- Makes URPX consumable by web developers
- Aligns with modern linked data applications

**Schema.org Alignment:**
- Multi-word property values use camelCase pattern
- While Schema.org uses PascalCase for single-word enum concepts, URPX enumeration instances are property values, not standalone concepts

**W3C Linked Data Best Practices:**
- Recommends consistent URI patterns across ontology
- **URL**: https://www.w3.org/TR/ld-bp/

**Tool Ecosystem:**
- Protégé (standard OWL editor): Suggests camelCase for individuals
- Apache Jena: Examples use camelCase
- RDFLib (Python): Examples use camelCase

**Implementation Details:**

**Automated Transformation:**
- Python scripts using RDFLib for safe parsing/modification
- Batch processing: 4 ontology files, 50+ enumeration classes, 500+ instances
- snake_case → camelCase conversion: `energy_charge` → `energyCharge`
- Add `owl:oneOf` to ALL enumeration classes
- Remove duplicate ChargeTypeValue definitions from core (keep in charge-classification)
- Update all version metadata to v0.1.1

**Validation:**
- RDFLib parsing validation
- Custom validation script checking:
  - Every `*Value` class has `owl:oneOf`
  - All instances in their class's `owl:oneOf`
  - Consistent camelCase naming
  - No duplicates

**SHACL Updates:**
- Update validation rules from string datatypes to class constraints
- Modularize SHACL into 7 files (core + 6 document-specific)
- Test validation pipeline with updated constraints

**Benefits:**
- ✅ **Standards Compliance**: Full W3C OWL 2 Primer alignment
- ✅ **Reasoning Support**: Closed enumerations enable proper OWL reasoning
- ✅ **JSON-LD Ready**: Web developer friendly for open source adoption
- ✅ **Consistency**: Single pattern across entire ontology
- ✅ **Maintainability**: Clear, documented architecture
- ✅ **Senior Review Ready**: Technically defensible with authoritative references

**Impact Assessment:**
- **Positive**: Production-ready formal OWL architecture, enhanced standards compliance
- **Breaking Change**: All 500+ enumeration instance URIs change
- **Migration**: Automated scripts minimize manual effort
- **Future-Proof**: Scalable architecture for ontology evolution

**References:**
- W3C OWL 2 Primer: https://www.w3.org/TR/owl2-primer/
- W3C Linked Data Best Practices: https://www.w3.org/TR/ld-bp/
- Schema.org: https://schema.org
- Documentation Update Log Batch #010

---

<a id="decision-010"></a>
### 🔗 Decision #010: SI Unit Symbol Preservation in Enumeration Naming

- **Status:** ✅ Implemented
- **Date:** 2025-10-13
- **Issue:** Validation detected SI unit symbols as camelCase violations during transformation
- **Category:** Standards Compliance, Technical Precision
- **Impact:** Critical - Prevented international standards violation

**Context:**
During the v0.1.1 enumeration transformation, the validation script initially flagged standard electrical unit symbols (W, MW, GW, kW, kWh, MVA, etc.) as violations of the camelCase naming convention. These are UnitOfMeasureValue instances that represent SI derived units with internationally standardized symbols.

**Decision:**
Create explicit exceptions in the validation script to preserve standard SI/IEC unit symbols exactly as defined by international standards bodies (IEC 80000, NIST, ISO). These symbols must not be altered to fit camelCase conventions.

**Critical Review Analysis:**
When validation flagged "W, MW, GW, kWh" as naming violations, critical review questions revealed the issue:
1. **"What would senior engineers criticize?"** → "You can't change SI unit symbols!"
2. **"Is this technically precise?"** → Standard electrical units are internationally standardized
3. **"Would this pass IEEE/IEC review?"** → No - these symbols are defined by international standards

**Alternatives Considered:**

1. **Preserve SI Symbols (SELECTED)** ⭐
   - ✅ Maintains IEC 80000 compliance (International System of Quantities)
   - ✅ Preserves NIST standards (SI base and derived units)
   - ✅ Follows IEEE standards for electrical units
   - ✅ Maintains ISO 80000 specifications
   - ✅ No ambiguity - universally recognized symbols

2. **Convert to camelCase (e.g., "MW" → "mw")**
   - ❌ Violates international standards (IEC 80000)
   - ❌ Creates ambiguity ("mw" is milliwatt, not megawatt)
   - ❌ Would fail engineering review
   - ❌ Non-standard in scientific/technical contexts

3. **Spell out full names (e.g., "MW" → "megawatt")**
   - ❌ Loses standard symbol recognition
   - ❌ Inconsistent with technical documentation
   - ❌ Not how electrical units are referenced in industry
   - ❌ Increases verbosity unnecessarily

**Rationale:**

**IEC 80000 Compliance:**
SI derived units for electrical measurements have standardized symbols that must not be altered:
- Power: W (watt), kW (kilowatt), MW (megawatt), GW (gigawatt)
- Energy: Wh (watt-hour), kWh (kilowatt-hour), MWh (megawatt-hour), GWh (gigawatt-hour)
- Apparent Power: VA (volt-ampere), kVA, MVA
- Voltage: V (volt), kV (kilovolt)
- Current: A (ampere), kA (kiloampere)

**NIST/ISO Standards:**
- SI prefixes (k, M, G) have specific meanings (10³, 10⁶, 10⁹)
- Case matters: "M" = mega (10⁶), "m" = milli (10⁻³)
- Changing "MW" to "mw" would change meaning from megawatt to milliwatt

**Industry Practice:**
- Electrical engineering documentation universally uses these symbols
- Utility tariffs reference kWh, kW, MVA in standardized forms
- Regulatory filings (FERC, state PUCs) use standard unit symbols
- CIM (Common Information Model) uses these exact symbols

**Implementation Details:**
```python
# Added to validate_enum_architecture.py
standard_units = {
    'W', 'Wh', 'kW', 'kWh', 'MW', 'MWh', 'GW', 'GWh',
    'VA', 'VAh', 'kVA', 'kVAh', 'MVA', 'MVAh',
    'V', 'kV', 'A', 'kA'
}
if name in standard_units:
    return True  # Valid despite uppercase
```

**Impact Assessment:**
- **Positive**: Maintains international standards compliance, prevents technical errors
- **Critical Catch**: Would have failed engineering review if not caught
- **Standards Ready**: IEC, NIST, ISO, IEEE compliant
- **No Breaking Changes**: Original symbols already correct

**References:**
- IEC 80000: International System of Quantities and Units
- NIST SP 811: Guide for the Use of the International System of Units (SI)
- ISO 80000: Quantities and units
- IEEE Std 260.1: Standard Letter Symbols for Units of Measurement

---

<a id="decision-011"></a>
### 🔗 Decision #011: CustomerKind/CustomerSubKind Proper Enumeration Architecture

- **Status:** ✅ Implemented
- **Date:** 2025-10-14
- **Category:** Standards Compliance, Enumeration Architecture
- **Impact:** High - Customer classification enumeration consistency

**Context:**
The `customerKind` and `customerSubKind` properties were improperly formatted as classes with Code/Name datatype properties rather than following the established ObjectProperty enumeration pattern used for all other enumerations in the ontology. This created architectural inconsistency and prevented proper SHACL validation.

**Decision:**
Convert CustomerKind/CustomerSubKind to proper ObjectProperty enumeration pattern following established conventions: CustomerKindValue and CustomerSubKindValue enumeration classes with hierarchical organization via skos:broader relationships.

**Alternatives Considered:**

1. **Proper Enumeration Pattern with "Value" Suffix** ⭐ **SELECTED**
   - ✅ Consistent with all 54 other ObjectProperty enumerations
   - ✅ Follows established "Value" suffix convention (EntityTypeValue, TOUTierStandardNameValue, etc.)
   - ✅ Type-safe customer classification with proper validation
   - ✅ Hierarchical taxonomy via skos:broader relationships
   - ✅ Green Button V4 CustomerKind alignment

2. **Keep Simple CustomerKind Name (No "Value" Suffix)**
   - ✅ Simpler naming
   - ❌ Breaks established enumeration naming convention
   - ❌ Would be ONLY enum without "Value" suffix
   - ❌ Creates inconsistency across ontology

3. **Maintain Status Quo (Code/Name Properties)**
   - ❌ Inconsistent with ObjectProperty enumeration pattern
   - ❌ Unable to leverage proper SHACL validation
   - ❌ Type safety gaps
   - ❌ Architectural debt

**Rationale:**

**Convention Consistency:**
ALL enumeration classes in the ontology use the "Value" suffix:
- EntityTypeValue, TOUTierStandardNameValue, PhaseConfigurationValue
- ConnectionKindValue, EndUseCategoryValue, GeographicZoneValue
- etc.

Maintaining this convention ensures:
1. Immediate recognition of enumeration classes
2. Predictable pattern across entire ontology  
3. Clear distinction from other class types
4. Consistent developer experience

**Green Button Alignment:**
- Customer classification aligned with Green Button V4 CustomerKind enumeration
- 6 main kinds cover all utility customer types
- 13 subkinds provide detailed classification under parent kinds

**Hierarchical Organization:**
Using `skos:broader` instead of custom `parentKind` property:
- Follows SKOS vocabulary standards
- Enables standard taxonomic queries
- Compatible with semantic web tools
- Reduces custom property proliferation

**Implementation Details:**

**Enumeration Classes Created:**
```turtle
urpx:CustomerKindValue a owl:Class ;
    owl:equivalentClass [ owl:oneOf ( 
        urpx:residentialKind urpx:commercialKind urpx:industrialKind
        urpx:enterpriseKind urpx:serviceProviderKind urpx:internalUseKind 
    ) ] .

urpx:CustomerSubKindValue a owl:Class ;
    owl:equivalentClass [ owl:oneOf (
        urpx:residentialStandard urpx:residentialFarm urpx:residentialMultiUnit
        urpx:commercialStandard urpx:commercialStreetlight urpx:commercialPumping
        urpx:industrialStandard urpx:industrialLargeLoad
        urpx:energySupplier urpx:energyScheduler urpx:windMachine
        urpx:subsidiary urpx:regionalOperator
    ) ] .
```

**Object Properties Updated:**
```turtle
urpx:hasCustomerKind
    rdfs:domain urpx:CustomerProfile ;
    rdfs:range urpx:CustomerKindValue ;
    # No cardinality limit - supports multiple kinds

urpx:hasCustomerSubKind
    rdfs:domain urpx:CustomerProfile ;
    rdfs:range urpx:CustomerSubKindValue ;
    # No cardinality limit - supports multiple subkinds
```

**ApplicabilityGroup Integration:**
```turtle
urpx:appliesForCustomerKind
    rdfs:domain urpx:ApplicabilityGroup ;
    rdfs:range urpx:CustomerKindValue ;
    # Enables charge filtering by customer type

urpx:appliesForCustomerSubKind  
    rdfs:domain urpx:ApplicabilityGroup ;
    rdfs:range urpx:CustomerSubKindValue ;
    # Enables detailed subcategory filtering
```

**Deprecated Elements Removed:**
- customerKindCode (datatype property)
- customerKindName (datatype property)
- customerSubKindCode (datatype property)
- customerSubKindName (datatype property)
- parentKind (object property - replaced by skos:broader)
- Old CustomerKind and CustomerSubKind classes

**Added Constraint:**
```turtle
urpx:hasCustomerProfile
    rdfs:domain urpx:EligibilityRule ;
    owl:cardinality 1 ;
    # Each eligibility rule references exactly one customer profile
```

**Benefits:**
- ✅ **Architecture Consistency**: Matches all other enumeration patterns
- ✅ **Type Safety**: Object properties enable proper validation
- ✅ **Hierarchical Taxonomy**: skos:broader provides clear parent-child relationships
- ✅ **Charge Filtering**: ApplicabilityGroup properties enable customer-based charge selection
- ✅ **Multiple Classification**: Supports complex customer profiles with multiple kinds/subkinds
- ✅ **Standards Alignment**: Green Button V4 compatibility

**Impact Assessment:**
- **Positive**: Consistent enumeration architecture, proper validation, charge filtering capabilities
- **Breaking Change**: Old CustomerKind/CustomerSubKind classes and Code/Name properties removed
- **Migration Required**: Update all customer classification references to new pattern
- **Future-Proof**: Scalable taxonomy structure supports evolving customer segmentation

**References:**
- Green Button V4 CustomerKind specification
- SKOS vocabulary standards

---

<a id="decision-012"></a>
### 🔗 Decision #012: ServicePointProfile CIM Terminology Alignment

- **Status:** ✅ Implemented
- **Date:** 2025-10-16
- **Issue:** UsagePointProfile naming ambiguity and CIM alignment
- **Category:** Standards Compliance, Naming Convention
- **Impact:** High - Core service delivery point modeling class renamed

**Context:**
The `UsagePointProfile` class name created ambiguity with `UsageProfile` (anonymous statistical data) and didn't fully align with CIM terminology. CIM uses "service delivery point" terminology (IEC 61968-9) to describe physical service connections, which better represents the class's purpose of modeling utility service point characteristics.

**Decision:**
Rename `UsagePointProfile` to `ServicePointProfile` to align with CIM "service delivery point" terminology and ensure coverage for a wide array of services beyond just usage measurement.

**Alternatives Considered:**

1. **ServicePointProfile** ⭐ **SELECTED**
   - ✅ Aligns with CIM "service delivery point" terminology (IEC 61968-9)
   - ✅ Clearly distinguishes from UsageProfile (statistical data)
   - ✅ Better represents service delivery context
   - ✅ Covers wide array of services (not just metering/usage)
   - ✅ More accurate for physical service connection characteristics

2. **Keep UsagePointProfile**
   - ✅ No migration required
   - ❌ Ambiguity with UsageProfile persists
   - ❌ Partial CIM alignment only
   - ❌ Focus on "usage" not comprehensive service delivery

3. **ServiceDeliveryPoint**
   - ✅ Full CIM terminology
   - ❌ Overly verbose for frequent property usage
   - ❌ "Point" suffix less common in ontology patterns

4. **MeterPoint**
   - ✅ Short and specific
   - ❌ Too focused on metering, excludes non-metered services
   - ❌ Not CIM-standard terminology

**Rationale:**

**CIM Standards Alignment:**
- CIM IEC 61968-9 uses "service delivery point" as core concept
- Represents physical location where utility service is delivered
- Includes physical properties (voltage, phase, capacity) AND logical properties (service category, DER capabilities)

**Semantic Clarity:**
- "ServicePoint" clearly indicates utility service connection point
- Distinguishes from "UsageProfile" which contains anonymous statistical usage data
- "Profile" suffix indicates characteristic/attribute collection

**Comprehensive Scope:**
- Covers electricity, gas, water, and other utility services
- Includes Green Button DER extensions (solar, storage, EV)
- Physical properties: connectionKind, phaseConfiguration, nominalVoltage
- Service classification: endUseCategory, premiseType, loadProfile

**Implementation Details:**

**Class Renamed:**
```turtle
# Before
urpx:UsagePointProfile a owl:Class ;
    rdfs:label "Usage Point Profile" .

# After
urpx:ServicePointProfile a owl:Class ;
    rdfs:label "Service Point Profile" ;
    rdfs:subClassOf urpx:ServiceDeliveryProfile ;
    skos:note """Represents physical and technical characteristics of utility service delivery point.
                 Combines CIM UsagePoint model (service delivery point terminology) with
                 Green Button DER extensions...""" .
```

**11 Properties Updated:**
- `billingCycleCode` - Extended domain to include ServicePointProfile
- `connectionKind` - Domain changed to ServicePointProfile
- `endUseCategory` - Domain changed to ServicePointProfile  
- `hasDistributedEnergyResource` - Domain changed to ServicePointProfile
- `hasServicePointProfile` - Property renamed from hasUsagePointProfile
- `loadProfile` - Domain changed to ServicePointProfile
- `meteringConfiguration` - Domain changed to ServicePointProfile
- `nominalVoltage` - Domain changed to ServicePointProfile
- `phaseConfiguration` - Domain changed to ServicePointProfile
- `premiseType` - Domain changed to ServicePointProfile
- `ratedPowerCapacity` - Domain changed to ServicePointProfile

**Benefits:**
- ✅ **CIM Compliance**: Direct alignment with IEC 61968-9 service delivery point concept
- ✅ **Semantic Precision**: Clear distinction from usage statistics
- ✅ **Comprehensive Coverage**: Appropriate for all utility service types
- ✅ **Standards Ready**: CIM/Green Button integration terminology
- ✅ **Future-Proof**: Supports expanding service types and characteristics

**Impact Assessment:**
- **Positive**: Enhanced CIM alignment, eliminated naming ambiguity
- **Breaking Change**: Class name and property name changes require migration
- **Migration Required**: Update all UsagePointProfile references to ServicePointProfile
- **Documentation**: Comprehensive naming rationale documented in class notes

**References:**
- CIM IEC 61968-9 (Metering) specification
- Green Button DER extensions
- Measurement Framework Design

---

<a id="decision-013"></a>
### 🔗 Decision #013: Dual-Level Currency Architecture

- **Status:** ✅ Implemented
- **Date:** 2025-10-16
- **Issue:** International utility operations and multi-currency rate analysis
- **Category:** Architecture, International Support
- **Impact:** Medium - Currency handling architectural pattern

**Context:**
Utilities operating internationally or analyzing rates across currencies needed both convenience (single currency for all charges) and precision (explicit currency per charge for analysis). Previous architecture only supported currency at Charge/ChargeSet level, making single-currency scenarios verbose.

**Decision:**
Implement dual-level currency architecture where currency can be specified at both document level (RatePlan, RatePlanVersion, URPXDocument) for convenience AND charge level for international analysis, with charge-level taking precedence.

**Alternatives Considered:**

1. **Dual-Level with Override Pattern** ⭐ **SELECTED**
   - ✅ Convenience: Set once at document level, all charges inherit
   - ✅ Precision: Explicit charge-level currency for international analysis
   - ✅ Flexibility: Supports both single and multi-currency scenarios
   - ✅ Override semantics: Charge-level currency takes precedence

2. **Charge-Level Only (Status Quo)**
   - ✅ Explicit and clear
   - ❌ Verbose for single-currency scenarios
   - ❌ Repetitive currency specification

3. **Document-Level Only**
   - ✅ Simple for single-currency
   - ❌ Cannot handle multi-currency scenarios
   - ❌ No per-charge currency for international analysis

4. **Default Currency with Exceptions**
   - ✅ Handles most cases
   - ❌ More complex to implement
   - ❌ Less explicit than dual-level pattern

**Rationale:**

**Use Case Support:**
1. **Single Currency (Convenience)**: Set currency="USD" at RatePlan level, all charges inherit
2. **Multi-Currency Comparison**: Explicit currency on each charge for cross-currency analysis
3. **International Operations**: Mix of local currency (document-level) and foreign currency charges (charge-level)
4. **Exchange Rate Analysis**: Track original currency for each charge in international portfolios

**Override Pattern:**
When both document-level and charge-level currency are present:
- Charge-level currency takes precedence (most specific wins)
- Document-level serves as default/fallback
- Clear inheritance semantics

**Implementation Details:**

**Property Domain Extended:**
```turtle
urpx:currency a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ;
        owl:unionOf ( 
            urpx:Charge 
            urpx:ChargeSet 
            urpx:RatePlan 
            urpx:RatePlanVersion 
            urpx:URPXDocument 
        ) ] ;
    rdfs:range xsd:string ;
    skos:note """Three-letter ISO 4217 code. Dual-level architecture:
                 - Document level: Convenience - all charges inherit
                 - Charge level: International analysis - explicit currency
                 - Override: Charge-level currency takes precedence
                 Enables both single-currency convenience and multi-currency analysis.""" .
```

**Example Patterns:**
```turtle
# Single currency (document-level convenience)
ex:rateSchedule urpx:currency "USD" .

# Multi-currency (charge-level explicit)
ex:charge1 urpx:currency "CAD" .
ex:charge2 urpx:currency "EUR" .

# Override pattern
ex:rateSchedule urpx:currency "USD" .  # Default
ex:charge1 urpx:currency "CAD" .       # Override for this charge
ex:charge2 urpx:amount 5.00 .          # Inherits USD from document
```

**Benefits:**
- ✅ **Convenience**: Simple single-currency scenarios (set once, inherit)
- ✅ **International Support**: Multi-currency analysis capabilities
- ✅ **Flexibility**: Both patterns supported simultaneously
- ✅ **Explicit When Needed**: Charge-level override for precision
- ✅ **Backward Compatible**: Existing charge-level usage continues to work

**Impact Assessment:**
- **Positive**: Simplified single-currency scenarios while enabling international analysis
- **No Breaking Changes**: Additive enhancement to currency property domain
- **Enhanced Capability**: Document-level currency reduces verbosity
- **International Ready**: Supports global utility rate analysis

**References:**
- ISO 4217 currency code standard
- International utility operations requirements
- Measurement Framework Design

---

<a id="decision-014"></a>
### 🔗 Decision #014: MetricSpecification Simplified Measurement Approach

- **Status:** ✅ Implemented
- **Date:** 2025-10-16
- **Issue:** Balance between simplicity and comprehensive measurement specification
- **Category:** Architecture, Measurement Framework
- **Impact:** High - Core measurement modeling pattern

**Context:**
Green Button and CIM provide comprehensive ReadingType specifications with extensive metadata for power quality and advanced measurements. However, 80% of utility billing cases need only basic measurement specification (commodity, kind, unit, flow, accumulation). Full ReadingType adds complexity for diminishing returns in common scenarios.

**Decision:**
Implement two-tier measurement approach: MetricSpecification class for common billing scenarios (80% of cases), with option to use full ReadingType specification for advanced scenarios requiring power quality measurements, harmonics, phase angles, etc.

**Alternatives Considered:**

1. **Two-Tier Approach (MetricSpecification + ReadingType)** ⭐ **SELECTED**
   - ✅ Simplified path for common billing scenarios
   - ✅ Complete Green Button/CIM coverage when needed
   - ✅ Balances simplicity and capability
   - ✅ Lower barrier to entry for developers

2. **Full ReadingType Only**
   - ✅ Complete CIM/Green Button compatibility
   - ❌ Overly complex for simple energy/demand charges
   - ❌ Higher learning curve
   - ❌ More verbose for 80% of use cases

3. **MetricSpecification Only**
   - ✅ Simple and focused
   - ❌ Cannot handle power quality scenarios
   - ❌ Incomplete Green Button/CIM coverage

4. **Scattered Properties (No Classes)**
   - ✅ Minimal structure
   - ❌ No standards alignment
   - ❌ Difficult to validate and query

**Rationale:**

**80/20 Rule:**
Most billing scenarios need:
- What commodity (electricity, gas, water)
- What kind of measurement (energy, demand, volume)
- What unit (kWh, kW, ccf)
- What flow direction (forward, reverse, net)
- How it accumulates (delta, bulk, summation)

**Advanced Scenarios:**
Power quality monitoring, harmonics analysis, phase angle measurements require:
- Full ReadingType specification
- Power quality metrics
- Interharmonic measurements
- Advanced CIM properties

**Implementation Details:**

**MetricSpecification Class:**
```turtle
urpx:MetricSpecification a owl:Class ;
    rdfs:label "Metric Specification" ;
    rdfs:comment "Simplified measurement specification for common billing scenarios" ;
    skos:note """Green Button ReadingType subset for 80% of billing cases.
                 Properties: commodity, measurementKind, unitOfMeasure, 
                            flowDirection, accumulationMethod""" .
```

**5 Properties:**
- `metricCommodity` → CommodityValue (electricity, gas, water, etc.)
- `measurementKind` → MeasurementTypeValue (energy, demand, power, volume, etc.)
- `metricUnitOfMeasure` → UnitOfMeasureValue (kWh, kW, ccf, etc.)
- `flowDirection` → FlowDirectionValue (forward, reverse, net, bidirectional)
- `accumulationMethod` → AccumulationValue (delta, bulk, instantaneous, summation)

**Usage Pattern:**
```turtle
ex:charge urpx:hasMetricSpecification [
    urpx:metricCommodity urpx:electricity ;
    urpx:measurementKind urpx:energy ;
    urpx:metricUnitOfMeasure urpx:kWh ;
    urpx:flowDirection urpx:net ;
    urpx:accumulationMethod urpx:summation
] .
```

**Benefits:**
- ✅ **Simplicity**: 5 properties cover common billing scenarios
- ✅ **Standards Aligned**: Green Button ReadingType subset
- ✅ **Type Safe**: Links to existing enumeration classes
- ✅ **Extensible**: Can add full ReadingType class later for advanced cases
- ✅ **Developer Friendly**: Lower learning curve for basic scenarios

**Impact Assessment:**
- **Positive**: Simplified measurement specification for majority of use cases
- **No Breaking Changes**: Additive class, optional usage
- **Future Path**: Full ReadingType can be added for advanced scenarios
- **Production Ready**: Handles net metering, demand charges, multi-commodity billing

**References:**
- Green Button ESPI ReadingType specification
- CIM IEC 61968-9 measurement properties
- Measurement Framework Design

---

<a id="decision-015"></a>
### 🔗 Decision #015: MeasurementTypeValue Green Button Naming Alignment

- **Status:** ✅ Implemented
- **Date:** 2025-10-16
- **Issue:** Measurement type instance naming convention
- **Category:** Standards Compliance, Naming Convention
- **Impact:** Medium - Enumeration instance naming standardization

**Context:**
Initial MeasurementTypeValue instances used "Measurement" suffix (energyMeasurement, demandMeasurement) which didn't align with Green Button naming conventions. Green Button uses direct measurement kind names without suffix. Additionally, instances were listed on single line making the enumeration difficult to read and maintain.

**Decision:**
Remove "Measurement" suffix from all MeasurementTypeValue instances to align with Green Button naming, and adopt vertical enumeration format (one value per line) for improved readability.

**Alternatives Considered:**

1. **Remove Suffix + Vertical Format** ⭐ **SELECTED**
   - ✅ Direct Green Button alignment (energy, demand, power, etc.)
   - ✅ Improved readability with vertical enumeration list
   - ✅ Easier to add new measurement types
   - ✅ Cleaner, more concise naming

2. **Keep "Measurement" Suffix**
   - ✅ More descriptive
   - ❌ Doesn't match Green Button standard
   - ❌ More verbose than necessary

3. **Use "Type" Suffix**
   - ✅ Distinguishes from properties
   - ❌ Redundant (class name already has "Type")
   - ❌ Not Green Button standard

**Rationale:**

**Green Button Standard:**
Green Button MeasurementKind enumeration uses direct names:
- energy, power, demand, voltage, current, powerFactor, frequency
- NOT: energyMeasurement, powerMeasurement, etc.

**Vertical Format Benefits:**
```turtle
# Before (horizontal - difficult to read)
owl:oneOf ( urpx:energyMeasurement urpx:demandMeasurement urpx:powerMeasurement urpx:currentMeasurement urpx:voltageMeasurement )

# After (vertical - easy to read and modify)
owl:oneOf (
    urpx:energy
    urpx:demand
    urpx:power
    urpx:current
    urpx:voltage
    urpx:frequency
    urpx:pressure
    urpx:temperature
    urpx:volumetricFlow
)
```

**Implementation Details:**

**Instance Renames (11 total):**
- `currentMeasurement` → `current`
- `demandMeasurement` → `demand`  
- `energyMeasurement` → `energy`
- `powerFactorMeasurement` → `powerFactor`
- `voltageMeasurement` → `voltage`
- Plus 6 new: `frequency`, `power`, `pressure`, `temperature`, `volume`, `volumetricFlow`

**Enumeration Format:**
- Changed from single-line to vertical format
- Each value on separate line for readability
- Consistent indentation for maintainability

**Benefits:**
- ✅ **Standards Compliance**: Direct Green Button alignment
- ✅ **Readability**: Vertical format easier to scan and modify
- ✅ **Maintainability**: Adding new types is straightforward
- ✅ **Concise**: Simpler naming without redundant suffix

**Impact Assessment:**
- **Positive**: Green Button alignment, improved file readability
- **Breaking Change**: All MeasurementTypeValue instance URIs changed
- **Migration Required**: Update references from *Measurement to direct names
- **Easy Adoption**: Cleaner names easier for developers to remember

**References:**
- Green Button MeasurementKind enumeration
- CIM IEC 61968-9 measurement types
- Measurement Framework Design

---

<a id="decision-016"></a>
### 🔗 Decision #016: Measurement Framework Enumeration Expansion

- **Status:** ✅ Implemented
- **Date:** 2025-10-16
- **Issue:** Limited measurement type coverage for comprehensive utility billing
- **Category:** Standards Compliance, Measurement Capabilities
- **Impact:** High - Measurement framework completeness

**Context:**
Original MeasurementTypeValue had only 5 types (energy, demand, current, voltage, powerFactor), insufficient for comprehensive utility billing scenarios. Gas utilities need volume/flow measurements, water utilities need pressure/temperature, and modern billing requires frequency monitoring.

**Decision:**
Expand MeasurementTypeValue from 5 to 11 types covering comprehensive utility measurement categories including energy, demand, power quality, flow, and environmental measurements. Create 4 new enumeration classes to support complete measurement metadata (flow direction, accumulation, aggregation, interval types).

**Expanded MeasurementTypeValue (11 types):**

**Existing (5):**
1. `current` - Electric current (A, mA)
2. `demand` - Power demand (kW, MW)
3. `energy` - Energy consumption (kWh, MWh)
4. `powerFactor` - Power factor (ratio, percentage)
5. `voltage` - Voltage level (V, kV)

**Added (6):**
6. `frequency` - Frequency (Hz)
7. `power` - Instantaneous power (kW, MW)
8. `pressure` - Pressure (psi, bar) - for gas/water utilities
9. `temperature` - Temperature (°F, °C, K) - for environmental monitoring
10. `volume` - Volume (gallons, cubic feet, liters) - for gas/water  
11. `volumetricFlow` - Flow rate (gallons/min, cubic feet/hour) - for water systems

**New Enumeration Classes (4):**

1. **FlowDirectionValue** (4 instances)
   - forward, reverse, net, bidirectional
   - Critical for net metering and DER scenarios

2. **AccumulationValue** (4 instances)
   - delta, bulk, instantaneous, summation
   - Green Button ReadingType accumulation alignment

3. **AggregationMethodValue** (5 instances)
   - sum, average, maximum, minimum, median
   - Statistical aggregation for interval processing

4. **MeasurementIntervalTypeValue** (8 instances)
   - realTime, fiveMinute, fifteenMinute, thirtyMinute, hourly, daily, weekly, monthly
   - Standardized utility metering intervals

**Rationale:**

**Comprehensive Coverage:**
- Electricity: energy, demand, power, current, voltage, powerFactor, frequency
- Gas: volume, volumetricFlow, pressure, temperature
- Water: volume, volumetricFlow, pressure, temperature
- Multi-commodity support with appropriate measurement types

**Net Metering Support:**
FlowDirectionValue enables:
- forward: Consumption from grid
- reverse: Generation to grid
- net: Net metering calculation
- bidirectional: Both directions tracked

**Interval Measurements:**
15-minute demand charges, hourly averages, monthly totals supported through:
- measurementIntervalDuration (ISO 8601 duration)
- measurementIntervalType (standardized interval enum)
- aggregationMethod (how to aggregate: max, avg, sum)

**Benefits:**
- ✅ **Multi-Commodity**: Electricity, gas, water coverage
- ✅ **Net Metering**: Flow direction and accumulation support
- ✅ **Time-Based**: Interval duration and aggregation support
- ✅ **Standards Aligned**: Green Button/CIM comprehensive coverage
- ✅ **Future-Proof**: Environmental monitoring (temperature, pressure)

**Impact Assessment:**
- **Positive**: Complete utility measurement coverage, multi-commodity support
- **Breaking Change**: Existing measurement type instances renamed (removed suffix)
- **Enhanced Capability**: Net metering, interval measurements, multi-commodity billing
- **Production Ready**: Handles complex billing scenarios across utility types

**References:**
- Green Button MeasurementKind enumeration
- CIM IEC 61968-9 comprehensive measurement types
- Measurement Framework Design

---

<a id="decision-017"></a>
### 🔗 Decision #017: Measurement Framework Property Consolidation

- **Status:** ✅ Implemented
- **Date:** 2025-10-20
- **Issue:** Property redundancy and measurement framework complexity
- **Category:** Architecture, Measurement Framework
- **Impact:** High - Major measurement property consolidation

**Context:**
The measurement framework had evolved with redundant property patterns creating maintenance complexity and confusion. MetricSpecification used dedicated properties (metricCommodity, metricUnitOfMeasure) while core properties (commodity, unitOfMeasure, measurementKind) existed separately. Additionally, StatementCharge/StatementDocument classes created architectural complexity without clear benefit over regular Charge/ChargeSet patterns.

**Decision:**
Consolidate measurement properties to single canonical versions with expanded domains, and deprecate StatementCharge/StatementDocument classes in favor of regular Charge class usage in TariffStatementDocument.

**Property Consolidation:**

1. **commodity property** - Single consolidated property
   - Expanded domain: MetricSpecification, Charge, ChargeSet, RatePlanVersion, RatePlanModifierVersion, Organization
   - Replaced: metricCommodity (removed)
   - Rationale: One property serves all commodity specification needs

2. **unitOfMeasure property** - Restricted for measurement specification
   - Domain: MetricSpecification, Condition
   - Replaced: metricUnitOfMeasure (removed), unit DatatypeProperty (removed, kept UnitOfMeasureValue instance)
   - Rationale: Forces Charge to use MetricSpecification for proper measurement modeling

3. **measurementKind property** - Measurement type specification
   - Domain: MetricSpecification, IntervalDataReference
   - Replaced: measurementType (removed)
   - Rationale: Aligns with Green Button terminology and patterns

**Class/Property Removals:**

1. **StatementCharge class** - Removed completely
   - Use regular Charge class instead
   - No architectural benefit over standard Charge

2. **StatementDocument class** - Removed completely
   - Use ChargeSet in TariffStatementDocument
   - Simplified document architecture

3. **Deprecated Properties Removed** (3):
   - hasStatementCharge
   - hasStatementDocument  
   - chargeDescription (use generic description property)

4. **StatementDocument-domain Properties Removed** (3):
   - referencesPublication
   - statementPeriod
   - statementType

5. **Property Domain Updates** (2):
   - unitPrice: Removed StatementCharge from domain (now just Charge)
   - hasApplicabilityGroup: Removed StatementCharge from domain (now just ChargeSet)

**Phase Code Enhancement:**

1. **Property Rename**: phaseConfiguration → phaseCodeKind
   - Expanded domain to: ServicePointProfile, MetricSpecification
   - Rationale: Measurement specifications need phase code specification

2. **Class Rename**: PhaseConfigurationValue → PhaseCodeKindValue
   - CIM IEC 61968 PhaseCodeKind alignment

3. **Complete CIM Implementation**:
   - Removed 8 old phase instances (singlePhaseAn, threePhaseAbc, etc.)
   - Added 4 category concepts (threePhaseCategory, singlePhaseCategory, etc.)
   - Added 26 CIM phase codes with complete labels, notations, and definitions
   - Alphabetical organization with hierarchical skos:broader relationships

**Alternatives Considered:**

1. **Property Consolidation** ⭐ **SELECTED**
   - ✅ Eliminates redundancy
   - ✅ Single source of truth for each concept
   - ✅ Simpler mental model
   - ✅ Easier maintenance

2. **Keep Separate Properties**
   - ✅ More explicit separation
   - ❌ Redundant property definitions
   - ❌ Maintenance overhead
   - ❌ Confusion about which to use

3. **Keep StatementCharge**
   - ✅ Explicit document-charge association
   - ❌ No architectural benefit over Charge
   - ❌ Additional class complexity

**Rationale:**

**Measurement Property Consolidation:**
- **Single Source of Truth**: One property for commodity at all levels
- **Force Best Practice**: Restricting unitOfMeasure domain forces use of MetricSpecification
- **Standards Alignment**: measurementKind matches Green Button terminology
- **Simplicity**: Fewer properties to learn and maintain

**StatementCharge Removal:**
- **No Unique Benefit**: Regular Charge class handles all statement charge needs
- **Architectural Simplicity**: One charge model for all contexts
- **Flexibility**: ChargeSet provides sufficient grouping and organization

**Phase Code CIM Alignment:**
- **Complete Standards Coverage**: All 26 IEC 61968 PhaseCodeKind codes
- **Hierarchical Organization**: Category concepts enable logical grouping
- **Measurement Support**: phaseCodeKind on MetricSpecification enables phase-specific measurements
- **User-Friendly Labels**: Complete rdfs:label, skos:notation, skos:definition for all codes

**Implementation Details:**

**Breaking Changes:**
- metricCommodity removed (use commodity)
- metricUnitOfMeasure removed (use unitOfMeasure)
- measurementType removed (use measurementKind)
- unit DatatypeProperty removed (kept UnitOfMeasureValue enum instance)
- StatementCharge/StatementDocument classes removed
- 8 properties removed (3 deprecated + 3 StatementDocument-domain + 2 domain updates)
- phaseConfiguration renamed to phaseCodeKind
- PhaseConfigurationValue renamed to PhaseCodeKindValue
- 8 old phase code instances replaced with 26 CIM codes

**Migration Pattern:**
```turtle
# Before
ex:metric urpx:metricCommodity urpx:electricity ;
           urpx:metricUnitOfMeasure urpx:kWh .

# After
ex:metric urpx:commodity urpx:electricity ;
          urpx:unitOfMeasure urpx:kWh .
```

**Benefits:**
- ✅ **Simplified Architecture**: 4 fewer properties, 2 fewer classes
- ✅ **Standards Alignment**: Complete CIM PhaseCodeKind coverage
- ✅ **Consistent Patterns**: Single property for each measurement concept
- ✅ **Better Documentation**: Complete labels and hierarchies for phase codes
- ✅ **Maintainability**: Reduced complexity, clearer purpose

**Impact Assessment:**
- **Positive**: Cleaner architecture, complete CIM alignment, reduced maintenance
- **Breaking Changes**: Property removals, class removals, phase code replacements
- **Migration Required**: Update references to use consolidated properties
- **Standards Ready**: Full IEC 61968 PhaseCodeKind implementation

**References:**
- Design Issue #014 (to be created if needed)
- CIM IEC 61968 PhaseCodeKind specification
- Green Button ReadingType patterns
- Measurement Framework Design v2.0

---

<a id="decision-018"></a>
### 🔗 Decision #018: Flat RatePlanVersion Architecture - TemporalDefinition, PricingModel, BillingModel

- **Status:** ✅ Implemented
- **Date:** 2025-10-20
- **Category:** Architecture, Temporal Structure, Pricing Model
- **Impact:** Critical - Major architectural restructuring for v0.1.1

**Context:**
The current architecture incorrectly nests TOUSchedule within SeasonalSchedule, when seasons actually apply to the entire RatePlan. This creates multiple critical problems:
- Cannot cleanly support multiple TOUSchedules per MetricSpecification
- Cannot cleanly support multiple ServiceTiers per MetricSpecification
- Charges cannot easily reference `metricSpecification + touPeriodNumber + serviceTierNumber`
- Season definitions are redundantly duplicated across schedules
- billPortion mixed at charge-level rather than metric-level organization
- Deep nesting creates maintenance and query complexity

**Decision:**
Implement flat RatePlanVersion architecture with three direct properties (no container class): hasTemporalDefinition, hasPricingModel, and hasBillingModel. Each provides clean separation of concerns without deep nesting.

**Architecture Components:**

1. **TemporalDefinition** - Centralized temporal data
   - Seasons defined once at version level
   - Holiday calendars defined centrally
   - TOUTimeBrackets reference seasons via appliesInSeason property
   
2. **PricingModel** - All pricing components defined upfront
   - MetricSpecifications (with billPortion included)
   - TOUSchedules (reference seasons, not contain them)
   - ServiceTiers
   - DynamicPricingRules

3. **BillingModel** - Billing-specific rules and patterns
   - Billing calculation rules
   - Proration patterns
   - Adjustment mechanisms

**Alternatives Considered:**

1. **Flat Structure - Three Direct Properties** ⭐ **SELECTED**
   - ✅ No deep nesting - single level from RatePlanVersion
   - ✅ Clean separation of concerns (temporal/pricing/billing)
   - ✅ Seasons defined once, referenced many times
   - ✅ Multiple TOUSchedules/ServiceTiers per MetricSpecification supported
   - ✅ Simple charge matching: metricSpec + touPeriod + serviceTier
   - ✅ Avoids Green Button "PricingStructure" terminology conflict

2. **Container Class (RateConfiguration/PricingStructure)**
   - ✅ Groups related concepts
   - ❌ Adds extra nesting level (violates user's "avoid deep nesting" requirement)
   - ❌ "PricingStructure" conflicts with Green Button terminology
   - ❌ "Rate" term too ambiguous (user feedback)

3. **Keep Current Structure (SeasonalSchedule nesting)**
   - ✅ No migration required
   - ❌ Cannot support multiple schedules per metric
   - ❌ Season redundancy problem persists
   - ❌ Complex charge matching
   - ❌ Does not scale to utility-grade complexity

4. **Separate Seasons but Keep TOUSchedule Structure**
   - ✅ Solves season redundancy
   - ❌ Doesn't address multiple schedules per metric problem
   - ❌ Partial solution only

**Rationale:**

**Flat Structure Benefits:**
- **No Deep Nesting**: RatePlanVersion → TemporalDefinition/PricingModel/BillingModel (only 1 level)
- **Clear Separation**: Temporal concerns separate from pricing concerns separate from billing
- **Maintainability**: Easier to understand and modify without navigating complex hierarchies
- **Query Efficiency**: Direct access to each concern area

**Temporal Separation:**
- Seasons apply to entire rate plan, not individual schedules
- Holiday calendars shared across all pricing rules
- TOUTimeBrackets reference seasons via appliesInSeason (URI references)
- Eliminates season definition redundancy

**Pricing Model Upfront Definition:**
- All MetricSpecifications defined upfront (with billPortion)
- All TOUSchedules defined upfront (reference seasons)
- All ServiceTiers defined upfront
- All DynamicPricingRules defined upfront
- Charges reference components via URI + integers for simple matching

**Green Button Terminology:**
- Green Button's "PricingStructure" = URPX RatePlan (+RatePlanModifier)
- Avoided naming conflict by not creating PricingStructure class
- Maintains semantic web standards compatibility

**Implementation Details:**

**Three New Classes:**
```turtle
urpx:TemporalDefinition a owl:Class ;
    rdfs:label "Temporal Definition" ;
    rdfs:comment "Centralized temporal data: seasons and holiday calendars" .

urpx:PricingModel a owl:Class ;
    rdfs:label "Pricing Model" ;
    rdfs:comment "Pricing components defined upfront: metrics, schedules, tiers, rules" .

urpx:BillingModel a owl:Class ;
    rdfs:label "Billing Model" ;
    rdfs:comment "Billing-specific rules and calculation patterns" .
```

**Three New Properties on RatePlanVersion:**
```turtle
urpx:hasTemporalDefinition
    rdfs:domain urpx:RatePlanVersion ;
    rdfs:range urpx:TemporalDefinition .

urpx:hasPricingModel
    rdfs:domain urpx:RatePlanVersion ;
    rdfs:range urpx:PricingModel .

urpx:hasBillingModel
    rdfs:domain urpx:RatePlanVersion ;
    rdfs:range urpx:BillingModel .
```

**TemporalDefinition Properties:**
```turtle
urpx:hasSeason
    rdfs:domain urpx:TemporalDefinition ;
    rdfs:range urpx:Season .

urpx:hasHolidayCalendar
    rdfs:domain urpx:TemporalDefinition ;
    rdfs:range urpx:HolidayCalendar .
```

**PricingModel Properties:**
```turtle
urpx:hasMetricSpecification
    rdfs:domain urpx:PricingModel ;
    rdfs:range urpx:MetricSpecification .

urpx:hasTOUSchedule
    rdfs:domain urpx:PricingModel ;
    rdfs:range urpx:TOUSchedule .

urpx:hasServiceTier
    rdfs:domain urpx:PricingModel ;
    rdfs:range urpx:ServiceTier .

urpx:hasDynamicPricingRule
    rdfs:domain urpx:PricingModel ;
    rdfs:range urpx:DynamicPricingRule .
```

**MetricSpecification Enhancement:**
```turtle
# Add billPortion to MetricSpecification
urpx:billPortion
    rdfs:domain [ owl:unionOf ( urpx:MetricSpecification urpx:Charge urpx:ChargeSet ) ] ;
    rdfs:range urpx:BillPortionValue .
```

**TOUTimeBracket Season Reference:**
```turtle
urpx:appliesInSeason
    rdfs:domain urpx:TOUTimeBracket ;
    rdfs:range urpx:Season ;
    rdfs:comment "Season(s) this time bracket applies to. URI references to seasons defined in TemporalDefinition." .
```

**Charge Reference Pattern:**
```turtle
# Charges reference by URI + integers
urpx:referencesMetricSpecification
    rdfs:domain urpx:Charge ;
    rdfs:range urpx:MetricSpecification ;
    rdfs:comment "URI reference to MetricSpecification defined in PricingModel" .

# touPeriodNumber and serviceTierNumber already exist as xsd:integer
```

**Breaking Changes:**
1. **TOUSchedule Structure**: Remove SeasonalSchedule nesting
2. **billPortion Property**: Move into MetricSpecification domain
3. **Season References**: Add appliesInSeason to TOUTimeBracket
4. **Charge References**: Use referencesMetricSpecification URI + integers instead of embedded objects
5. **MetricSpecification**: Remove embedded MetricSpecification from Charge, use references

**Migration Pattern:**
```turtle
# Before (nested structure)
ex:touSchedule urpx:hasSeasonalSchedule [
    urpx:hasSeason ex:summer ;
    urpx:hasTOUTier [ ... ]
] .

# After (flat with references)
ex:version urpx:hasTemporalDefinition [
    urpx:hasSeason ex:summer
] ;
urpx:hasPricingModel [
    urpx:hasMetricSpecification ex:metric1 ;
    urpx:hasTOUSchedule ex:touSchedule
] .

ex:touSchedule urpx:hasTOUTier [
    urpx:hasTOUPeriod [
        urpx:hasTOUTimeBracket [
            urpx:appliesInSeason ex:summer  # URI reference
        ]
    ]
] .
```

**Benefits:**
- ✅ **Flat Structure**: No deep nesting, single level from RatePlanVersion
- ✅ **Seasons Defined Once**: Centralized in TemporalDefinition, referenced via URI
- ✅ **Multiple Schedules**: Multiple TOUSchedules/ServiceTiers per MetricSpecification supported
- ✅ **Simple Charge Matching**: metricSpec + touPeriod + serviceTier lookup pattern
- ✅ **Upfront Definition**: All pricing components defined before charges reference them
- ✅ **billPortion Location**: At correct architectural level (metric, not charge)
- ✅ **Clean Separation**: Temporal/Pricing/Billing concerns clearly separated
- ✅ **Scalable**: Handles utility-grade complexity with clean architecture
- ✅ **No Terminology Conflicts**: Avoided Green Button "PricingStructure" naming issue
- ✅ **ApplicabilityGroup Separate**: Different architectural purpose maintained

**Impact Assessment:**
- **Positive**: Scalable architecture, clean separation, simple charge matching
- **Breaking Changes**: Major restructuring of TOUSchedule, Season, and MetricSpecification usage
- **Migration Required**: Complete restructuring of rate plan versions using nested structure
- **SHACL Updates**: New validation shapes for three new classes and updated property domains
- **Documentation**: Comprehensive migration guide and updated examples required
- **Estimated Implementation**: 11-17 hours across 7 phases

**Implementation Phases:**
1. **Phase 1**: Core Classes (2-3 hours)
2. **Phase 2**: MetricSpecification Enhancement (1 hour)  
3. **Phase 3**: TemporalDefinition Structure (2-3 hours)
4. **Phase 4**: PricingModel RuleSet (2 hours)
5. **Phase 5**: Charge Reference Pattern (1-2 hours)
6. **Phase 6**: SHACL Validation (2-3 hours)
7. **Phase 7**: Documentation (1-2 hours)

**References:**
- Green Button terminology documentation
- ApplicabilityGroup architecture (separate system)
- Measurement Framework Design v2.0

---

<a id="decision-019"></a>
## 🔗 Decision #019: PlanElements Architecture - Complete Implementation

**Date:** 2025-10-22 (Phase 6A), 2025-10-23 (Phase 6B), 2025-11-04 (Completion)  
**Status:** ✅ Implemented - COMPLETE  
**Issue:** #015 (BillingModel), Phase 6B modifier extension, SeasonalSchedule removal

### Problem
During SHACL review, noticed PricingModel was missing organizational layer for per-metric rule grouping. Current flat structure had:
- hasMetricSpecification[] - but which TOU/tiers apply to which metric?
- hasTOUSchedule[] - energy TOU vs demand TOU?
- hasServiceTier[] - energy tiers vs demand tiers?

### Decision: Unified PlanElements Architecture

**Phase 6A (2025-10-22): Core Architecture**

**Layer 1: PlanElements** (renamed from RatePlanElements)
- Consolidates temporal (seasons, holidays) and pricing in one container
- Generic naming supports both rate plans AND modifiers
- Eliminates TemporalDefinition middleman

**Layer 2: PlanElementSet** (renamed from RatePlanElementSet)
- Metric-specific pricing rule container
- Groups TOU schedules, service tiers, dynamic pricing BY METRIC
- Enables: energy rules, demand rules, gas rules in separate sets
- Clean charge matching: metric properties + touPeriod + serviceTier

**Layer 3: Concrete Rules** (TOUSchedule, ServiceTier, DynamicPricing)
- Unchanged - still define actual pricing logic

**Phase 6B (2025-10-23): Modifier Extension**

Extended architecture to RatePlanModifierVersion for modifiers with complex pricing:
- Renamed classes: RatePlanElements → PlanElements, RatePlanElementSet → PlanElementSet
- Domain extension: hasPlanElements includes both RatePlanVersion and RatePlanModifierVersion
- All related properties updated to use generic terminology
- Enables modifiers with seasons, TOU schedules, and service tiers

**Hybrid Modifier Linking Approach:**
- Simple modifiers: Use applicableToRatePlan for straightforward associations
- Complex modifiers: Use hasEligibilityRule for enrollment-based or conditional application
- Examples:
  - Simple: Fuel adjustment applying to all residential rate plans
  - Complex: Low-income discount requiring income verification and program enrollment

### Alternatives Considered

**Alternative A: Keep PricingModel + TemporalDefinition separate**
- Rejected: Two containers for related concerns = unnecessary complexity
- Rejected: "PricingModel" name doesn't reflect it also contains temporal data

**Alternative B: Flat PricingModel (current flawed design)**
- Rejected: No way to group rules by metric
- Rejected: Ambiguous which TOU/tiers apply to which metric

**Alternative C: Name it "MetricRuleSet" or "ModelInput"**
- Considered, but "PlanElementSet" clearer
- "ElementSet" indicates it's part of "Elements" container
- Naming symmetry: PlanElements contains PlanElementSets

**Alternative D: Separate modifier architecture**
- Rejected: Creates duplicate architectural patterns
- Rejected: Modifiers need same temporal/pricing structure as rate plans
- Selected unified approach reduces ontology complexity

**Alternative E: Only use eligibilityRule for all modifier linking**
- Rejected: Overly complex for simple modifiers
- Rejected: Forces enrollment-based logic where simple applicability suffices
- Selected hybrid supports both simple and complex cases

### Architectural Benefits

✅ Per-metric organization (energy separate from demand)  
✅ Scalability (add water, gas easily)  
✅ Clear charge matching pattern  
✅ Reusable across customer segments  
✅ Eliminates TemporalDefinition redundancy  
✅ Better naming ("Elements" vs "PricingModel")  
✅ Unified architecture for rate plans AND modifiers  
✅ Hybrid linking approach balances simplicity and sophistication  
✅ Modifier versioning with full temporal/pricing capabilities

### Implementation

**Cardinality:**
- RatePlanVersion OR RatePlanModifierVersion → PlanElements: 1:1 (required)
- PlanElements → PlanElementSet: 1:many (minCount 1)
- PlanElements → Season: 1:many (minCount 1, via hasSeasons plural)
- PlanElements → HolidayCalendar: 1:1 (required)

**Breaking Changes (Phase 6A):**
- PricingModel class → RatePlanElements
- TemporalDefinition class → DELETED
- hasPricingModel property → hasRatePlanElements
- hasTemporalDefinition property → DELETED
- hasSeason property → hasSeasons (plural)

**Breaking Changes (Phase 6B):**
- RatePlanElements class → PlanElements
- RatePlanElementSet class → PlanElementSet
- hasRatePlanElements property → hasPlanElements (domain extended)
- hasRatePlanElementSet property → hasPlanElementSet
- 8 property domains updated to use PlanElements/PlanElementSet terminology

**Resolution:** Complete implementation across 3 phases:
- Phase 6A (2025-10-22): RatePlanElements → PlanElements core architecture
- Phase 6B (2025-10-23): Extended to RatePlanModifierVersion, naming generalization
- Completion (2025-11-04): SeasonalSchedule removal, Season enhancement with three flexible definition approaches

**Completion Notes (2025-11-04):**
- Removed obsolete `hasSeasonalSchedule` property
- Removed obsolete `SeasonalSchedule` class  
- Updated property domains removing SeasonalSchedule references
- Enhanced Season class with three flexible definition approaches:
  1. Date-based: seasonStartDate + seasonEndDate
  2. Month range: startMonth + endMonth (ISO 8601 --MM two-digit format)
  3. Month list: applicableMonths (comma-separated, iCalendar RFC 5545 BYMONTH)
- Added three new properties: startMonth, endMonth, applicableMonths
- Standards alignment: ISO 8601, iCalendar RFC 5545, CIM SeasonDayTypeSchedule
- SHACL tracking: season-decision19-completion.csv created for bulk update process

---

<a id="decision-020"></a>
## 🔗 Decision #020: Rate Plan Terminology Standardization

- **Status:** ✅ Implemented
- **Date:** 2025-10-29
- **Issue:** Need for clear terminology explanation in v0.01 standards review documentation
- **Category:** Terminology, Documentation Standards
- **Impact:** Medium - Documentation clarity and consistency

**Context:**
Throughout URPX documentation, the term "rate plan" is used extensively, but the rationale for using this specific terminology rather than just "rate" was not explicitly documented. For standards review and adoption, clear terminology definitions ensure reviewers understand why specific terms were chosen and what semantic boundaries they represent.

**Decision:**
Standardize on "rate plan" terminology throughout URPX with explicit documentation of the semantic distinction from "rate" alone. A "rate plan" encompasses all parameters needed to calculate customer cost, ensuring completeness of data inputs and calculation methodologies.

**Terminology Definition:**

**"Rate Plan"** (Standardized Term):
- Complete package containing all parameters needed to calculate customer cost
- Includes: charges, time-of-use schedules, service tiers, seasonal variations, eligibility rules, applicability conditions
- Ensures completeness - no guessing about what data inputs are needed
- Everything contained in one semantic unit for reliable cost calculation

**"Rate"** (Ambiguous - Not Used Alone):
- Could refer to a single rate value for a single charge
- Could refer to a pricing tier within a time-of-use schedule
- Could refer to unit price ($/kWh) without context
- Lacks completeness assurance for full cost calculation

**Examples:**

**✅ CORRECT - "Rate Plan" Usage:**
- "The residential rate plan includes energy charges, demand charges, and TOU periods"
- "RatePlanVersion contains all charges and schedules for customer cost calculation"
- "Rate plan encompasses complete pricing structure including all applicable charges"

**❌ INCORRECT - "Rate" Usage:**
- "The residential rate is $0.15/kWh" (incomplete - missing time-of-use, tiers, other charges)
- "Customer is on the residential rate" (ambiguous - which version? what charges included?)

**Rationale:**

**Completeness Assurance:**
- "Rate plan" signals comprehensive cost calculation package
- Eliminates ambiguity about what data is included
- Ensures implementers don't miss required parameters
- Provides semantic boundary for data exchange

**Industry Alignment:**
- OpenEI Utility Rate Database uses "rate" (we chose more precise "rate plan")
- FERC uses "rate schedule" (we align with "schedule" meaning temporal version)
- State regulators use "tariff" or "rate schedule" (we harmonize with "rate plan" and use "tariff" for tariff book and other tariff publications)
- Term choice balances precision and familiarity

**Semantic Web Precision:**
- RatePlan class = master template across time
- RatePlanVersion class = temporal instance with specific charges
- Clear class-to-terminology mapping enhances ontology clarity

**Alternatives Considered:**

1. **"Rate Plan"** ⭐ **SELECTED**
   - ✅ Completeness assurance (all parameters included)
   - ✅ Clear semantic boundary
   - ✅ Distinguishes from single "rate" values
   - ✅ Accessible to non-technical stakeholders

2. **"Rate Schedule"**
   - ✅ Common in regulatory filings
   - ❌ "Schedule" implies temporal only (misses charge completeness)
   - ❌ Already used for RatePlanVersion temporal aspects

3. **"Tariff"**
   - ✅ Regulatory standard terminology
   - ❌ Often includes non-pricing terms and conditions
   - ❌ Can be confusing (tariff book vs rate plan vs tariff statement)

4. **"Rate"** (Generic)
   - ✅ Simple and concise
   - ❌ Ambiguous - could mean single value
   - ❌ No completeness assurance
   - ❌ Lacks semantic precision

5. **"Pricing Structure"**
   - ✅ Descriptive of contents
   - ❌ Conflicts with Green Button terminology
   - ❌ Less familiar to utility industry

**Implementation:**

**Documentation Updates Required:**
- Add terminology section to urpx-overview.md
- Include in README.md glossary or introduction
- Reference in design decisions log (this document)
- Document in update batch #016 (urpx-documentation-update-log.md)

**Consistency Check:**
- Verify "rate plan" used consistently throughout documentation
- Ensure no ambiguous "rate" usage without "plan" qualifier
- Check that rationale appears in key user-facing documentation

**Benefits:**
- ✅ **Clear Semantics**: Unambiguous term for complete pricing package
- ✅ **Completeness Signal**: Indicates all parameters present
- ✅ **Implementation Guidance**: Developers know what to expect
- ✅ **Standards Ready**: Precise terminology for W3C review

**Impact Assessment:**
- **Positive**: Enhanced documentation clarity, explicit semantic boundaries
- **No Breaking Changes**: Terminology clarification, not structural change
- **Documentation Update**: Add terminology sections to key documents
- **Reviewer Benefit**: Clear understanding of terminology choices and semantic meaning

**References:**
- OpenEI Utility Rate Database documentation
- FERC rate filing terminology  
- State regulatory commission terminology
- Green Button pricing structure documentation
- Documentation Update Log Batch #016

---

<a id="decision-021"></a>
### 🔗 Decision #021: MetricInputRuleSet Semantic Clarity Rename

- **Status:** ✅ Implemented
- **Date:** 2025-11-16
- **Issue:** Semantic confusion with PlanElementSet name alongside other plan elements
- **Category:** Naming Convention, Semantic Clarity
- **Impact:** Medium - Core pricing rule container class renamed

**Context:**
The `PlanElementSet` class existed within `PlanElements` container alongside other entities like seasons, holidays, and ProfileAlternatives, creating semantic confusion. All of these are arguably "plan elements," making the name `PlanElementSet` insufficiently descriptive of its specific purpose as a metric-specific pricing rule container.

**Decision:**
Rename `PlanElementSet` to `MetricInputRuleSet` and `hasPlanElementSet` to `hasMetricInputRuleSet` to clearly indicate the class's purpose as a metric-specific container for input rules (TOU schedules, service tiers, dynamic pricing) that charges reference.

**Rationale:**

**Semantic Clarity:**
Within PlanElements container, multiple types of entities coexist:
- Seasons (temporal elements)
- Holiday calendars (temporal elements)
- ProfileAlternatives (user selection elements)  
- MetricInputRuleSet (pricing rule container)

Using "PlanElementSet" for one specific type while all are "plan elements" created unnecessary confusion.

**Descriptive Naming:**
"MetricInputRuleSet" clearly communicates:
- **Metric**: Organized by measurement type (energy, demand, gas, water)
- **Input Rule**: Contains rules that serve as inputs for charge calculations
- **Set**: Collection/container of related pricing rules

**Architectural Purpose:**
This class groups TOU schedules, service tiers, and dynamic pricing BY METRIC:
- Energy rules in one set
- Demand rules in another set
- Gas rules in yet another set
- Enables clean charge matching: metric properties + touPeriodNumber + serviceTierNumber

**Implementation Details:**

**Class Rename:**
```turtle
# Before
urpx:PlanElementSet a owl:Class ;
    rdfs:label "Plan Element Set"@en .

# After
urpx:MetricInputRuleSet a owl:Class ;
    rdfs:label "Metric Input Rule Set"@en ;
    rdfs:comment "Metric-specific pricing rule container grouping TOU schedules, service tiers, and dynamic pricing" .
```

**Property Rename:**
```turtle
# Before  
urpx:hasPlanElementSet a owl:ObjectProperty ;
    rdfs:domain urpx:PlanElements ;
    rdfs:range urpx:PlanElementSet .

# After
urpx:hasMetricInputRuleSet a owl:ObjectProperty ;
    rdfs:domain urpx:PlanElements ;
    rdfs:range urpx:MetricInputRuleSet .
```

**Property Domain Updates (4):**
- `hasMetricSpecification` - Domain updated from PlanElementSet to MetricInputRuleSet
- `hasTOUSchedule` - Domain updated from PlanElementSet to MetricInputRuleSet  
- `hasServiceTier` - Domain updated from PlanElementSet to MetricInputRuleSet
- `hasDynamicPricingRule` - Domain updated from PlanElementSet to MetricInputRuleSet

**Documentation Updates:**
- Updated all references in comments from PlanElementSet to MetricInputRuleSet
- Enhanced architectural notes explaining per-metric organization
- Maintained Decision #018/#019 references to flat architecture pattern

**Benefits:**
- ✅ **Semantic Clarity**: No confusion with other plan elements
- ✅ **Descriptive**: Name clearly indicates purpose and organization
- ✅ **Architectural Transparency**: "Input Rule" indicates charges consume these rules
- ✅ **Metric Organization**: Name emphasizes per-metric grouping pattern
- ✅ **Maintainability**: Future developers immediately understand purpose


**Related Decisions:**
- Decision #018: Flat RatePlanVersion Architecture (established PlanElements pattern)
- Decision #019: PlanElements unified architecture for rate plans and modifiers

**References:**
- Epic 0000 architecture documentation
- Task 0002 implementation requirements
- PlanElements architecture pattern (Decision #019)

---

<a id="decision-022"></a>
### 🔗 Decision #022: Single Profile Parent Class Architecture

- **Status:** ✅ Implemented
- **Date:** 2025-11-16
- **Issue:** Missing parent classes (EligibilityProfile, ServiceDeliveryProfile) causing validation errors
- **Category:** Ontology Architecture, Class Hierarchy
- **Impact:** High - Establishes profile class hierarchy foundation

**Context:**
CustomerProfile and ServicePointProfile classes declared `rdfs:subClassOf` relationships to undefined parent classes (EligibilityProfile and ServiceDeliveryProfile), causing validation errors and broken inheritance chains. Initial review suggested adding both missing parent classes, but architectural analysis revealed a simpler, more elegant solution.

**Decision:**
Implement single `Profile` parent class with no properties for pure semantic grouping. Both CustomerProfile and ServicePointProfile become direct children of Profile, creating clean 2-level hierarchy without unnecessary intermediate layers.

**Alternatives Considered:**

1. **Single Profile Parent (No Properties)** ⭐ **SELECTED**
   - ✅ Simple 2-level hierarchy: Profile → {CustomerProfile, ServicePointProfile}
   - ✅ Pure semantic grouping enables queries for all profile types
   - ✅ No unnecessary middle layers (no EligibilityProfile, no ServiceDeliveryProfile)
   - ✅ Future-proof for additional profile types (OrganizationProfile, etc.)
   - ✅ Zero breaking changes - existing properties and architecture preserved
   - ✅ Minimal complexity - just 2 new class definitions

2. **Multiple Parent Classes (EligibilityProfile, ServiceDeliveryProfile)**
   - ✅ More granular semantic categorization
   - ❌ More complex 3-level hierarchy
   - ❌ Unclear benefit over single parent for only 2 subclasses
   - ❌ Additional maintenance overhead

3. **Common Base Profile with Shared Properties**
   - ✅ DRY principle for shared properties
   - ❌ Profiles may not share enough properties to justify
   - ❌ Property migration complexity
   - ❌ Risk of over-abstraction

4. **No Parent Class (Flatten Hierarchy)**
   - ✅ Simplest possible structure
   - ❌ Loses semantic grouping capability
   - ❌ Cannot query "all profiles"
   - ❌ Less extensible for future profile types
   - ❌ Removes existing design intent (subClassOf already declared)

**Rationale:**

**Honors Original Design:**
The `rdfs:subClassOf` declarations exist in the ontology - they represent intentional design. Completing the design by adding the parent class is more appropriate than removing the declarations.

**Semantic Web Best Practice:**
Parent classes provide semantic grouping even without properties. Enable queries like:
```sparql
SELECT ?profile WHERE {
    ?profile a/rdfs:subClassOf* urpx:Profile .
}
```

**Future Extensibility:**
Clear place for additional profile types:
- OrganizationProfile (for B2B eligibility)
- ContractProfile (for contract-based rates)
- LocationProfile (for location-specific characteristics)

**Minimal Complexity:**
Just adds 2 lightweight class definitions. No property migrations, no restructuring, no breaking changes to existing functionality.

**Implementation Details:**

**Profile Class Definition:**
```turtle
urpx:Profile a owl:Class ;
    rdfs:label "Profile"@en ;
    rdfs:comment "Abstract parent for all profile types used in rate plan eligibility and service delivery" ;
    skos:note "Pure semantic grouping enabling queries for all profile types. Subclasses define specific profile characteristics: CustomerProfile for business and social characteristics, ServicePointProfile for physical service delivery characteristics. No properties defined at this level - all properties live on concrete subclasses." .
```

**CustomerProfile Update:**
```turtle
# Before
urpx:CustomerProfile a owl:Class ;
    rdfs:subClassOf urpx:EligibilityProfile ;  # Missing class
    ...

# After
urpx:CustomerProfile a owl:Class ;
    rdfs:subClassOf urpx:Profile ;  # New parent
    ...
```

**ServicePointProfile Update:**
```turtle
# Before
urpx:ServicePointProfile a owl:Class ;
    rdfs:subClassOf urpx:ServiceDeliveryProfile ;  # Missing class
    ...

# After
urpx:ServicePointProfile a owl:Class ;
    rdfs:subClassOf urpx:Profile ;  # New parent
    ...
```

**Related Class Addition:**
CustomerProfileSet class also added to provide container for CustomerProfile instances with boolean logic (see Epic 0002 for details).

**Final Architecture:**
```
urpx:Profile (abstract base, no properties)
  ├── urpx:CustomerProfile (business/social characteristics)
  │   └── Used by: CustomerProfileSet (container with boolean logic)
  │   └── Used by: EligibilityRule (via hasCustomerProfile)
  └── urpx:ServicePointProfile (physical delivery characteristics)
      └── Used by: EligibilityRule (via hasServicePointProfile)

urpx:ProfileAlternatives (SEPARATE - charge alternatives architecture)
```

**Benefits:**
- ✅ **Semantic Grouping**: Enables profile-wide queries and reasoning
- ✅ **Extensibility**: Clear pattern for future profile types
- ✅ **Simplicity**: Minimal additions, maximum clarity
- ✅ **Standards Ready**: Clean inheritance hierarchy for W3C review
- ✅ **Zero Breaking Changes**: Everything that works keeps working

**Impact Assessment:**
- **Positive**: Completes original design intent, enables semantic queries, future-proof architecture
- **No Breaking Changes**: Additive only - adds missing parent, updates subClassOf references
- **Validation**: Resolves all missing class validation errors
- **Clean Architecture**: Simple 2-level hierarchy without over-engineering

**References:**
- Epic 0002: Missing Parent Classes
- Una's Review Notes (Critical Issue #1)
- Decision #005: EligibilityRule Parallel Properties Architecture
- W3C OWL 2 Primer class hierarchy patterns

---

<a id="decision-023"></a>
### 🔗 Decision #023: Dual IRI+Integer Reference Pattern for TOUPeriod and ServiceTier

- **Status:** ✅ Implemented
- **Date:** 2025-11-17
- **Issue:** Epic 0004 Task 0005 - Dual reference pattern requirements
- **Category:** Architecture, Reference Patterns
- **Impact:** Medium - Charge reference pattern flexibility

**Context:**
Charges need to reference TOUPeriod and ServiceTier instances, but different scenarios benefit from different reference patterns. Integer-based references (touPeriodNumber, serviceTierNumber) are compact and human-readable in data files. IRI-based references enable direct dereferencing and metadata access without context lookups. Need to support both patterns without forcing single approach.

**Decision:**
Implement dual-pattern architecture where charges can use EITHER IRI references OR integer references for TOUPeriod and ServiceTier, with bidirectional derivation support and strict mutual exclusivity validation.

**Dual Pattern Implementation:**

**TOUPeriod References:**
1. **IRI Pattern**: `referencesTouPeriod` (ObjectProperty → TOUPeriod)
   - Direct dereference for period metadata
   - No context required
   
2. **Integer Pattern**: `touPeriodNumber` (DatatypeProperty → xsd:integer)
   - Compact data representation
   - REQUIRES hasMetricSpecification for context resolution
   - Context path: hasMetricSpecification → MetricInputRuleSet → TOUSchedule → TOUPeriod

**ServiceTier References:**
1. **IRI Pattern**: `referencesServiceTier` (ObjectProperty → ServiceTier)
   - Direct dereference for tier metadata
   - No context required
   
2. **Integer Pattern**: `serviceTierNumber` (DatatypeProperty → xsd:integer)
   - Compact data representation
   - REQUIRES hasMetricSpecification for context resolution
   - Context path: hasMetricSpecification → MetricInputRuleSet → ServiceTier

**Alternatives Considered:**

1. **Dual Pattern with Mutual Exclusivity** ⭐ **SELECTED**
   - ✅ Supports both IRI and integer references
   - ✅ Flexibility for different use cases
   - ✅ Bidirectional derivation supported
   - ✅ SHACL enforces mutual exclusivity

2. **IRI-Only Pattern**
   - ✅ Direct metadata access
   - ❌ Verbose for large datasets
   - ❌ Less human-readable in CSV/JSON files

3. **Integer-Only Pattern**
   - ✅ Compact representation
   - ❌ Always requires context for resolution
   - ❌ No direct dereferencing capability

4. **Unified Property with Type Detection**
   - ✅ Single property
   - ❌ Complex validation logic
   - ❌ Ambiguous semantics

**Rationale:**

**Flexibility Benefits:**
- Small datasets: Use IRI references for simplicity
- Large datasets: Use integer references for file size efficiency
- Mixed scenarios: Use both patterns in same document (different charges)

**Context Requirement:**
- Integer references MUST have hasMetricSpecification
- Provides resolution path to correct TOUPeriod/ServiceTier instance
- SHACL enforces requirement via SPARQL validation

**Bidirectional Derivation:**
- IRI → Integer: Extract touPeriodNumber/serviceTierNumber from referenced instance
- Integer → IRI: Follow context path through MetricInputRuleSet

**Mutual Exclusivity:**
- Charge cannot use BOTH patterns simultaneously
- SHACL SPARQL validation prevents dual-pattern usage
- Clear semantics: choose one pattern per charge

**Implementation Details:**

**New Properties:**
```turtle
urpx:referencesTouPeriod a owl:ObjectProperty ;
    rdfs:domain [ owl:unionOf ( urpx:Charge urpx:ChargeSet ) ] ;
    rdfs:range urpx:TOUPeriod .

urpx:referencesServiceTier a owl:ObjectProperty ;
    rdfs:domain [ owl:unionOf ( urpx:Charge urpx:ChargeSet ) ] ;
    rdfs:range urpx:ServiceTier .
```

**Updated Properties:**
- `touPeriodNumber`: Domain expanded to include ChargeSet
- `serviceTierNumber`: Domain expanded to include ChargeSet
- `hasMetricSpecification`: Documentation updated to clarify context requirement

**SHACL Validation:**
```turtle
# Mutual exclusivity
sh:sparql [
    sh:message "Cannot use both referencesTouPeriod and touPeriodNumber" ;
    sh:select "SELECT $this WHERE { 
        $this urpx:referencesTouPeriod ?p1 ; 
              urpx:touPeriodNumber ?p2 
    }"
] .

# Context requirement for integers
sh:sparql [
    sh:message "Charges using touPeriodNumber must have hasMetricSpecification" ;
    sh:select "SELECT $this WHERE { 
        $this urpx:touPeriodNumber ?num . 
        FILTER NOT EXISTS { $this urpx:hasMetricSpecification ?spec } 
    }"
] .
```

**Benefits:**
- ✅ **Flexibility**: Both patterns supported
- ✅ **Efficiency**: Integer pattern saves space in large datasets
- ✅ **Direct Access**: IRI pattern enables dereferencing
- ✅ **Bidirectional**: Can convert between patterns
- ✅ **Validated**: SHACL enforces correct usage

**Impact Assessment:**
- **Positive**: Flexibility for different dataset sizes and use cases
- **No Breaking Changes**: Additive - new IRI properties alongside existing integer properties
- **Enhanced Capability**: IRI references for direct metadata access
- **Validated Safety**: SHACL prevents incorrect pattern combinations

**References:**
- Epic 0004 Task 0005 implementation
- Decision #024: MetricSpecification IRI reuse pattern
- SHACL mutual exclusivity patterns

---

<a id="decision-024"></a>
### 🔗 Decision #024: Dual-Pattern Architecture for MetricSpecification Reuse

- **Status:** ✅ Implemented
- **Date:** 2025-11-17
- **Issue:** Epic 0004 Task 0006 - MetricSpecification IRI reuse for large datasets
- **Category:** Architecture, DRY Principle, Efficiency
- **Impact:** High - Massive efficiency gain for large tariff datasets

**Context:**
Large tariff datasets (e.g., ConEd ex-0004 with 797 charges) have massive redundancy when each charge embeds identical MetricSpecification (e.g., "electricity-energy-kWh" repeated 500+ times). Need define-once/reference-many pattern similar to proven Season architecture (Decision #018), while maintaining simplicity for small datasets with few unique metric combinations.

**Decision:**
Implement dual-pattern architecture where MetricSpecification can be either (1) embedded as blank node within Charge, OR (2) defined once in MetricInputRuleSet with IRI and referenced by many charges. Both patterns use same `hasMetricSpecification` property with SHACL sh:or validation.

**Dual Pattern Architecture:**

**Pattern 1: EMBEDDED BLANK NODE (simple scenarios)**
```turtle
ex:charge1 urpx:hasMetricSpecification [
    urpx:commodity urpx:electricity ;
    urpx:measurementKind urpx:energy ;
    urpx:unitOfMeasure urpx:kWh
] .
```
- Use: Simple rate plans with few unique metric combinations
- No upfront definition required
- Direct inline specification

**Pattern 2: IRI REFERENCE (large datasets - DRY principle)**
```turtle
# Define once in MetricInputRuleSet
ex:metricRuleSet urpx:hasMetricSpecification ex:electricityEnergyKwh .

ex:electricityEnergyKwh a urpx:MetricSpecification ;
    urpx:commodity urpx:electricity ;
    urpx:measurementKind urpx:energy ;
    urpx:unitOfMeasure urpx:kWh .

# Reference from many charges
ex:charge1 urpx:hasMetricSpecification ex:electricityEnergyKwh .
ex:charge2 urpx:hasMetricSpecification ex:electricityEnergyKwh .
ex:charge500 urpx:hasMetricSpecification ex:electricityEnergyKwh .
```
- Use: Complex rate plans with repeated metric specifications
- Define once, reference hundreds of times
- Massive file size reduction

**Alternatives Considered:**

1. **Dual Pattern (Embedded OR IRI)** ⭐ **SELECTED**
   - ✅ Flexibility for both simple and complex scenarios
   - ✅ DRY principle for large datasets
   - ✅ Simplicity for small datasets
   - ✅ Same property for both patterns
   - ✅ Mirrors proven Season pattern

2. **IRI-Only Pattern**
   - ✅ Single pattern, no ambiguity
   - ❌ Verbose for simple scenarios
   - ❌ Requires upfront definition even for one-off metrics

3. **Embedded-Only Pattern**
   - ✅ Simple for small datasets
   - ❌ Massive redundancy in large datasets
   - ❌ No deduplication capability

4. **Separate Properties**
   - ✅ Explicit pattern distinction
   - ❌ Two properties with same semantics
   - ❌ More complex queries

**Rationale:**

**Proven Pattern:**
Mirrors Season architecture (Decision #018):
- Seasons defined once in PlanElements with IRI
- TimeBrackets reference via appliesInSeason property
- Same flexibility: embedded or IRI reference

**Efficiency Example (ConEd ex-0004):**
- 797 total charges
- ~10 unique MetricSpecification combinations
- Embedded pattern: Define 797 metric specs
- IRI pattern: Define 10 specs, reference 797 times
- **File size reduction: ~80% for metric specification sections**

**Flexibility for Different Scales:**
- 10 charges: Embedded pattern fine (minimal redundancy)
- 100 charges: IRI pattern beneficial (significant deduplication)
- 1000 charges: IRI pattern essential (massive efficiency gain)

**Critical for Integer References:**
MetricSpecification serves dual role:
1. Direct measurement specification for charge
2. Context for resolving touPeriodNumber/serviceTierNumber to IRIs (Task 0005)

**SHACL Validation:**
```turtle
sh:property [
    sh:path urpx:hasMetricSpecification ;
    sh:or (
        [ sh:class urpx:MetricSpecification ]  # IRI reference
        [ sh:nodeKind sh:BlankNode ]           # Embedded blank node
    )
] .
```

**Implementation Details:**

**Property Domain:**
```turtle
urpx:hasMetricSpecification a owl:ObjectProperty ;
    rdfs:domain [ owl:unionOf ( urpx:Charge urpx:MetricInputRuleSet ) ] ;
    rdfs:range urpx:MetricSpecification .
```

**MetricInputRuleSet Usage:**
- Defines MetricSpecification instances with IRIs
- Multiple charges reference same instance
- Central location for metric definitions

**Charge Usage:**
- Pattern 1: Embedded blank node with metric properties
- Pattern 2: IRI reference to MetricInputRuleSet instance
- SHACL validates either pattern (not both on same charge)

**Benefits:**
- ✅ **DRY Principle**: Define once, reference many
- ✅ **Simplicity**: Embed when appropriate
- ✅ **Efficiency**: 75-85% file size reduction for large datasets
- ✅ **Consistency**: Single source of truth (IRI pattern)
- ✅ **Maintainability**: Update once, affects all references
- ✅ **Proven Architecture**: Mirrors Season pattern success

**Impact Assessment:**
- **Positive**: Massive efficiency for large datasets, maintained simplicity for small ones
- **No Breaking Changes**: Additive - both patterns supported
- **Enhanced Capability**: DRY principle enablement
- **Production Ready**: Handles real-world tariff complexity

**Real-World Impact:**
- ConEd: 797 charges → ~10 unique metrics
- PG&E: Similar patterns observed
- National Grid: Complex tariffs benefit significantly
- Industry-wide: Standard pattern for large tariff datasets

**References:**
- Epic 0004 Task 0006 implementation  
- Decision #018: Season flat architecture (proven pattern)
- Decision #023: Dual IRI+Integer reference pattern
- ConEd ex-0004 dataset analysis

---

<a id="decision-025"></a>
### 🔗 Decision #025: baseQuantityUnit Scope - Infrastructure Quantities Only

- **Status:** ✅ Implemented
- **Date:** 2025-12-07
- **Issue:** Clarification needed for baseQuantityUnit vs MeasurementTypeValue usage
- **Category:** Measurement Framework, Terminology Clarification
- **Impact:** Medium - Clarifies property usage boundaries

**Context:**
The ontology has both `UnitOfMeasureValue` enumeration and `MeasurementTypeValue` for measurement types, but the scope of `baseQuantityUnit` (as a DatatypeProperty) was not explicitly documented, leading to potential confusion about when to use each.

**Decision:**
**baseQuantityUnit is for NON-energy/demand base quantities only** - specifically infrastructure-based charges like "per meter", "per connection", "per customer", "per account".

**Usage Guidelines:**

**✅ CORRECT baseQuantityUnit usage:**
- "per meter" (streetlight charges)
- "per connection" (connection fees)
- "per customer" (customer charges)
- "per account" (account fees)

**❌ INCORRECT baseQuantityUnit usage (use MeasurementTypeValue instead):**
- "energy" - use `MeasurementTypeValue.energy`
- "demand" - use `MeasurementTypeValue.demand`
- "power" - use `MeasurementTypeValue.power`
- "volume" - use `MeasurementTypeValue.volume`

**Alternatives Considered:**

1. **Separate Infrastructure Quantities** ⭐ **SELECTED**
   - ✅ Clear separation of concerns
   - ✅ Prevents overlap with MeasurementTypeValue
   - ✅ Aligns with different charge types (infrastructure vs consumption)
   - ✅ Standards alignment (CIM doesn't use "energy" as base quantity)

2. **Unified BaseQuantity for Everything**
   - ✅ Single property for all quantity types
   - ❌ Overlaps with MeasurementTypeValue
   - ❌ Confuses infrastructure charges with consumption charges
   - ❌ Violates separation of concerns

**Rationale:**
- **Separation of Concerns**: MeasurementTypeValue handles energy/utility measurements with MetricSpecification
- **Clear Purpose**: baseQuantityUnit handles infrastructure-based charges
- **Standards Alignment**: Energy measurements align with Green Button/CIM patterns via MetricSpecification
- **Prevents Overlap**: Avoids duplicate representation of the same concepts

**Implementation Pattern:**
```turtle
# CORRECT: Streetlight charge per meter
ex:streetlightCharge a urpx:Charge ;
    urpx:unitPrice 2.50 ;
    urpx:baseQuantityUnit "per meter" ;
    urpx:chargeType urpx:streetlightCharge .

# CORRECT: Energy charge (uses MetricSpecification + MeasurementTypeValue)
ex:energyCharge a urpx:Charge ;
    urpx:unitPrice 0.15 ;
    urpx:hasMetricSpecification [
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:energy ;
        urpx:unitOfMeasure urpx:kWh
    ] .
```

**Related Properties:**
- **MetricSpecification.measurementKind** → MeasurementTypeValue (energy, demand, power, etc.)
- **Charge.baseQuantityUnit** → Infrastructure quantities (per meter, per connection, etc.)
- **UnitOfMeasureValue** → Actual measurement units (kWh, kW, CCF, etc.)

**Impact Assessment:**
- **Positive**: Clear usage boundaries, prevents confusion
- **No Breaking Changes**: Clarification of existing design intent
- **Documentation**: Requires examples in tutorial and reference docs

**References:**
- Decision #014: MetricSpecification Simplified Measurement Approach
- Measurement Framework Design v2.0

---

<a id="decision-026"></a>
### 🔗 Decision #026: Charge Interval Representation - Measurement Processing on Charge

- **Status:** ✅ Implemented  
- **Date:** 2025-12-07
- **Issue:** Clarification of interval property location (Charge vs MetricSpecification)
- **Category:** Measurement Framework, Architecture Clarification
- **Impact:** High - Clarifies core measurement processing architecture

**Context:**
There was potential confusion about whether measurement intervals should be specified on MetricSpecification or on Charge classes. This decision documents the explicit design choice that intervals belong on Charge.

**Decision:**
**Measurement interval properties are on the Charge class, NOT on MetricSpecification.**

MetricSpecification defines "WHAT is measured" while Charge defines "HOW measurements are processed for billing".

**Property Locations:**

**MetricSpecification (WHAT is measured):**
- `commodity` - electricity, gas, water
- `measurementKind` - energy, demand, power, volume
- `unitOfMeasure` - kWh, kW, CCF, etc.
- `flowDirection` - forward, reverse, net, bidirectional
- `accumulationMethod` - delta, bulk, instantaneous, summation

**Charge (HOW processed for billing):**
- `measurementIntervalDuration` (xsd:duration) - ISO 8601 format
- `measurementIntervalType` (enum) - standardized interval types
- `aggregationMethod` (enum) - sum, average, maximum, minimum, median

**Alternatives Considered:**

1. **Intervals on Charge** ⭐ **SELECTED**
   - ✅ Separates "what" from "how"
   - ✅ Same MetricSpecification reusable with different intervals
   - ✅ Different aggregation methods for same metric
   - ✅ Standards alignment (Green Button/CIM pattern)

2. **Intervals on MetricSpecification**
   - ✅ Groups all measurement metadata
   - ❌ Prevents MetricSpecification reuse across different intervals
   - ❌ Forces duplication when same metric has different processing

3. **Separate IntervalSpecification Class**
   - ✅ Clear separation
   - ❌ Adds extra class complexity
   - ❌ Unnecessary indirection for simple pattern

**Rationale:**

**Reusability:**
Same MetricSpecification (e.g., "electricity demand in kW") can be used by:
- 15-minute peak demand charge (PT15M interval, maximum aggregation)
- Daily average demand charge (P1D interval, average aggregation)
- Monthly billing demand (P1M interval, maximum aggregation)

**Billing Flexibility:**
Different charges can aggregate the same metric differently based on billing requirements.

**Standards Alignment:**
Matches Green Button/CIM separation where:
- ReadingType defines the metric (what is measured)
- IntervalBlock defines processing (how measurements are collected/aggregated)

**Implementation Examples:**
```turtle
# Example: "15-minute peak demand charge"
ex:demandCharge a urpx:Charge ;
    urpx:unitPrice 12.50 ;
    urpx:hasMetricSpecification [
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:demand ;
        urpx:unitOfMeasure urpx:kW
    ] ;
    urpx:measurementIntervalDuration "PT15M"^^xsd:duration ;
    urpx:measurementIntervalType urpx:fifteenMinute ;
    urpx:aggregationMethod urpx:maximum .
```

**Impact Assessment:**
- **Positive**: Clear architectural separation, enables reusability
- **No Breaking Changes**: Clarification of existing implementation
- **Current Status**: Fully implemented as of v0.1.1

**References:**
- Design Document: `design/v0.1.1/done/measurement-framework-design.md`
- Decision #014: MetricSpecification Simplified Measurement Approach
- Green Button ReadingType vs IntervalBlock patterns

---

<a id="decision-027"></a>
### 🔗 Decision #027: ISO 8601 Two-Digit Month Format for Temporal Patterns

- **Status:** ✅ Implemented
- **Date:** 2025-12-07
- **Issue:** Month format specification for Season and Charge temporal patterns
- **Category:** Standards Compliance, Temporal Patterns
- **Impact:** High - Unified month format across ontology

**Context:**
Both Season definitions and Charge applicability patterns need month-based specifications. Multiple ISO 8601 approaches exist (xsd:gMonth with --MM prefix, integer 1-12, string "01"-"12"). Need single consistent format across the ontology.

**Decision:**
**Use ISO 8601 two-digit string format ("01" through "12") for all month specifications** across Season class and Charge applicability.

**Applies To:**
- Season class properties: `startMonth`, `endMonth`, `applicableMonths`
- Charge class property: `applicableMonth`

**Alternatives Considered:**

1. **Two-Digit String Format ("06", "09")** ⭐ **SELECTED**
   - ✅ Clear, unambiguous format
   - ✅ Aligns with ISO 8601 --MM notation concept
   - ✅ Easy to validate (pattern: ^(0[1-9]|1[0-2])$)
   - ✅ Developer-friendly
   - ✅ Consistent with utility industry practices

2. **Integer Month Numbers (1-12)**
   - ✅ Simple datatype (xsd:integer)
   - ❌ Less explicit about zero-padding
   - ❌ Doesn't align with ISO 8601 notation
   - ❌ Ambiguity about 1 vs 01

3. **ISO 8601 gMonth (--06, --09)**
   - ✅ Most explicit ISO 8601 alignment
   - ❌ More verbose (includes -- prefix)
   - ❌ Less familiar to developers
   - ❌ Requires xsd:gMonth datatype

4. **Month Names ("June", "September")**
   - ✅ Human-readable
   - ❌ Language-dependent
   - ❌ Harder to validate
   - ❌ No international standard

**Rationale:**

**ISO 8601 Alignment:**
The two-digit format aligns with ISO 8601 --MM notation for recurring annual patterns without the full gMonth overhead.

**Developer Experience:**
Format is immediately clear and familiar:
- "06" = June
- "12" = December
- No confusion about zero-padding

**Validation:**
Simple regex pattern validation:
```turtle
sh:pattern "^(0[1-9]|1[0-2])$"
```

**Industry Practice:**
Utility billing cycles commonly use two-digit month codes.

**Implementation Example:**
```turtle
# Summer season: June through September
ex:summerSeason a urpx:Season ;
    urpx:seasonName "Summer" ;
    urpx:startMonth "06" ;  # June (two-digit format)
    urpx:endMonth "09" ;    # September (two-digit format)
    urpx:yearlyRecurrence true .
```

**Property Definitions:**
```turtle
urpx:startMonth a owl:DatatypeProperty ;
    rdfs:domain urpx:Season ;
    rdfs:range xsd:string ;
    skos:note "Two-digit ISO 8601 month format (01-12, e.g., '06' for June)." .

urpx:endMonth a owl:DatatypeProperty ;
    rdfs:domain urpx:Season ;
    rdfs:range xsd:string ;
    skos:note "Two-digit ISO 8601 month format (01-12, e.g., '09' for September)." .
```

**Impact Assessment:**
- **Positive**: Clear standard, easy validation, developer-friendly
- **No Breaking Changes**: Format matches existing implementation
- **Standards Ready**: ISO 8601 aligned without unnecessary complexity

**References:**
- ISO 8601: Date and time representation standard
- iCalendar RFC 5545: BYMONTH pattern for recurring events
- Decision #019: PlanElements architecture (Season definition context)

---

<a id="decision-028"></a>
### 🔗 Decision #028: Flexible ISO 8601 Charge Applicability Properties

- **Status:** ✅ Implemented
- **Date:** 2025-12-07
- **Issue:** Charges need temporal applicability independent of Seasons
- **Category:** Architecture, Temporal Patterns
- **Impact:** High - Enables flexible charge applicability rules

**Context:**
Charges need to specify when they apply using flexible patterns: specific days of week, months, or years. This is independent of Season definitions (which define named temporal periods like "Summer"). Need simple, standards-based approach using ISO 8601 formats without verbose XSD types like gMonth.

**Decision:**
**Implement three ISO 8601-based applicability properties on Charge class:**
1. `applicableDayOfWeek` (xsd:integer) - ISO 8601 day numbers (1=Monday through 7=Sunday)
2. `applicableMonth` (xsd:string) - Two-digit month format ("01" through "12") - REUSES format from Decision #027
3. `applicableYear` (xsd:string) - Four-digit year ("2024", "2025", etc.)

**Key Design Principle:**
**REUSE existing month format** - applicableMonth uses the SAME two-digit string format established for Season properties (Decision #027). No custom datatypes, no reinventing standards.

**Alternatives Considered:**

1. **Reuse Existing Formats (xsd:integer for day, string for month/year)** ⭐ **SELECTED**
   - ✅ Reuses proven month format from Season definitions
   - ✅ Simple ISO 8601 day numbers (1-7)
   - ✅ No verbose XSD types (no gMonth, gYear)
   - ✅ Developer-friendly and easy to validate
   - ✅ Consistent across ontology

2. **Use XSD gMonth/gYear**
   - ✅ Explicit ISO 8601 datatypes
   - ❌ Too verbose (--MM prefix for gMonth)
   - ❌ User explicitly rejected this approach
   - ❌ Less developer-friendly

3. **Custom Enumeration Classes**
   - ✅ Type-safe approach
   - ❌ Overkill for simple temporal matching
   - ❌ Creates unnecessary complexity
   - ❌ Would need 12 month enum values, 7 day values

**Rationale:**

**Reuse, Don't Reinvent:**
Decision #027 already established two-digit string format ("01"-"12") for months. This decision REUSES that format for charge applicability - no new standards, no custom approaches.

**ISO 8601 Compliance:**
- Day of week: 1 (Monday) through 7 (Sunday) per ISO 8601-1:2019
- Month: Two-digit string "01" through "12" (same as Season)
- Year: Four-digit string "2024", "2025", etc.

**Flexibility:**
Supports diverse patterns:
- "Weekdays only" → applicableDayOfWeek: [1,2,3,4,5]
- "December only" → applicableMonth: ["12"]
- "2024 only" → applicableYear: ["2024"]
- "Weekday winters" → combine all three properties

**Implementation Details:**

**Property Definitions:**
```turtle
urpx:applicableDayOfWeek a owl:DatatypeProperty ;
    rdfs:domain urpx:Charge ;
    rdfs:range xsd:integer ;
    skos:note "ISO 8601 day of week (1=Monday, 7=Sunday). Can specify multiple values for recurring weekly patterns." .

urpx:applicableMonth a owl:DatatypeProperty ;
    rdfs:domain urpx:Charge ;
    rdfs:range xsd:string ;
    skos:note "ISO 8601 two-digit month format (01-12). REUSES format from Decision #027. Can specify multiple values for recurring monthly patterns." .

urpx:applicableYear a owl:DatatypeProperty ;
    rdfs:domain urpx:Charge ;
    rdfs:range xsd:string ;
    skos:note "Four-digit year format (e.g., '2024'). Can specify multiple values for multi-year applicability." .
```

**Usage Examples:**
```turtle
# Weekday-only charge
ex:weekdayCharge a urpx:Charge ;
    urpx:applicableDayOfWeek 1, 2, 3, 4, 5 ;
    urpx:unitPrice 0.15 .

# December holiday surcharge
ex:decemberSurcharge a urpx:Charge ;
    urpx:applicableMonth "12" ;
    urpx:amount 5.00 .

# 2024 promotional rate
ex:promoCharge a urpx:Charge ;
    urpx:applicableYear "2024" ;
    urpx:unitPrice 0.10 .

# Weekdays in winter months
ex:winterWeekdayCharge a urpx:Charge ;
    urpx:applicableDayOfWeek 1, 2, 3, 4, 5 ;
    urpx:applicableMonth "12", "01", "02" ;
    urpx:unitPrice 0.18 .
```

**Benefits:**
- ✅ **Reuses Standards**: Same month format as Season definitions
- ✅ **Flexible**: Supports simple and complex temporal patterns
- ✅ **Independent**: Charges don't need Seasons for basic applicability
- ✅ **Combinable**: Properties work together for sophisticated rules
- ✅ **Simple**: No verbose XSD types, developer-friendly

**Impact Assessment:**
- **Positive**: Powerful charge applicability without forcing Season usage
- **No Breaking Changes**: Additive properties on Charge class
- **Standards Aligned**: ISO 8601 throughout
- **Consistent**: Reuses existing month format decision

**References:**
- ISO 8601-1:2019: Date and time representation
- Decision #027: ISO 8601 Two-Digit Month Format (establishes reused format)
- Decision #026: Charge interval representation

---

<a id="decision-029"></a>
### 🔗 Decision #029: CalculationIntervalValue Enumeration for Time-Based Charges

- **Status:** ✅ Implemented
- **Date:** 2025-12-07
- **Issue:** Need standardized intervals for time-based charge applicability
- **Category:** Architecture, Temporal Patterns
- **Impact:** Medium - Standardizes charge calculation intervals

**Context:**
Charges that are time-based but NOT part of TOU schedules need to specify their calculation interval. Examples: "$5 per month service charge", "$0.50 per day connection fee". Need enumeration for standardized intervals.

**Decision:**
**Create CalculationIntervalValue enumeration with calculationInterval property on Charge class.**

**Enumeration Values:**
- `perBillingCycle` - Charge applies once per billing cycle
- `perDay` - Charge applies per day
- `perMonth` - Charge applies per month  
- `perYear` - Charge applies per year

**Alternatives Considered:**

1. **Simple Enumeration (4 values)** ⭐ **SELECTED**
   - ✅ Covers common utility billing patterns
   - ✅ Clear semantics for charge applicability
   - ✅ Small, focused enumeration
   - ✅ Easy to understand and validate

2. **Use ISO 8601 Duration**
   - ✅ Standards-based format
   - ❌ Too complex for simple interval specification
   - ❌ Doesn't capture "per billing cycle" semantic
   - ❌ Overkill for common patterns

3. **Reuse MeasurementIntervalTypeValue**
   - ✅ Fewer enumerations
   - ❌ Wrong semantics (measurement vs calculation)
   - ❌ Includes irrelevant values (5-minute, 15-minute, etc.)

**Rationale:**

**Clear Semantics:**
Each value has specific billing meaning:
- perBillingCycle: Depends on customer's billing cycle (monthly, bimonthly, etc.)
- perDay: Prorated daily charges
- perMonth: Monthly recurring charges
- perYear: Annual charges

**Separate from TOU:**
This is for charges OUTSIDE of time-of-use schedules. TOU periods have their own scheduling mechanism via TOUSchedule/TOUPeriod.

**Common Patterns:**
These four values cover vast majority of utility time-based charges:
- Service charges (perMonth, perBillingCycle)
- Connection fees (perDay, perMonth)
- Annual fees (perYear)

**Implementation Details:**

**Enumeration Class:**
```turtle
urpx:CalculationIntervalValue a owl:Class ;
    rdfs:label "Calculation Interval Value"@en ;
    rdfs:comment "Enumeration of intervals at which charges are calculated/applied" ;
    owl:equivalentClass [
        owl:oneOf (
            urpx:perBillingCycle
            urpx:perDay
            urpx:perMonth
            urpx:perYear
        )
    ] .
```

**Enumeration Instances:**
```turtle
urpx:perBillingCycle a urpx:CalculationIntervalValue ;
    rdfs:label "Per Billing Cycle"@en ;
    skos:definition "Charge applies once per customer billing cycle" .

urpx:perDay a urpx:CalculationIntervalValue ;
    rdfs:label "Per Day"@en ;
    skos:definition "Charge applies on a daily basis" .

urpx:perMonth a urpx:CalculationIntervalValue ;
    rdfs:label "Per Month"@en ;
    skos:definition "Charge applies on a monthly basis" .

urpx:perYear a urpx:CalculationIntervalValue ;
    rdfs:label "Per Year"@en ;
    skos:definition "Charge applies on an annual basis" .
```

**Property Definition:**
```turtle
urpx:calculationInterval a owl:ObjectProperty ;
    rdfs:domain urpx:Charge ;
    rdfs:range urpx:CalculationIntervalValue ;
    rdfs:label "Calculation Interval"@en ;
    rdfs:comment "Interval at which this charge is calculated/applied" ;
    skos:note "Specifies the time period for charges that are time-based but not part of a TOU schedule. Common values: perMonth for monthly service charges, perDay for daily connection fees, perBillingCycle for charges that align with customer's billing cycle." .
```

**Usage Examples:**
```turtle
# Monthly service charge
ex:serviceCharge a urpx:Charge ;
    urpx:amount 5.00 ;
    urpx:calculationInterval urpx:perMonth ;
    urpx:currency "USD" .

# Daily connection fee  
ex:connectionFee a urpx:Charge ;
    urpx:unitPrice 0.50 ;
    urpx:calculationInterval urpx:perDay .

# Annual meter charge
ex:annualMeterCharge a urpx:Charge ;
    urpx:amount 25.00 ;
    urpx:calculationInterval urpx:perYear .
```

**Benefits:**
- ✅ **Clear Semantics**: Explicit interval specification
- ✅ **Common Patterns**: Covers utility billing needs
- ✅ **Separate Concerns**: Distinct from TOU scheduling
- ✅ **Type Safe**: ObjectProperty with enumeration
- ✅ **Extensible**: Can add more intervals if needed

**Impact Assessment:**
- **Positive**: Standardizes time-based charge patterns
- **No Breaking Changes**: Additive enumeration and property
- **Enhanced Capability**: Explicit interval specification for recurring charges

**References:**
- Decision #026: Charge interval representation (measurement processing)
- Decision #028: Charge applicability properties

---

<a id="decision-030"></a>
### 🔗 Decision #030: CalculationMethod CIM Alignment - Future Research Task

- **Status:** 📋 Approved (Future Research)
- **Date:** 2025-12-07
- **Issue:** Potential reuse of CIM CalculationMethod in URPX
- **Category:** Standards Compliance, Future Enhancement
- **Impact:** Low - Research task, not immediate implementation

**Context:**
During review, discovered that CIM (Common Information Model) includes a `CalculationMethod` concept. URPX currently has `CalculationMethodValue` enumeration, but alignment with CIM has not been verified. Need research to determine if CIM's approach should be adopted or adapted.

**Decision:**
**Add CalculationMethod CIM alignment as future research task for task_0013.**

**Research Questions:**
1. What is CIM's CalculationMethod definition and purpose?
2. What are the CIM CalculationMethod enumeration values?
3. What is the correct domain for CalculationMethod in CIM?
4. How does CIM use CalculationMethod in billing contexts?
5. Can URPX reuse CIM CalculationMethod directly, or does it need adaptation?

**Current URPX Status:**
- Class: `urpx:CalculationMethodValue` exists
- Property: `urpx:calculationMethod` exists
- Current domain: [requires verification]
- Current enum values: [requires documentation]
- Usage patterns: [requires clarification]

**Rationale:**

**Standards Alignment:**
CIM provides proven patterns for utility industry interoperability. Investigating CIM's approach prevents reinventing the wheel and improves standards compliance.

**Avoid Duplication:**
If CIM has suitable CalculationMethod patterns, adopting them reduces custom ontology development and improves cross-system compatibility.

**Not Blocking:**
This is future research - not blocking current v0.1.1 work. Can be addressed in future ontology updates.

**Action Items for task_0013:**
1. Review CIM IEC 61968-9 specification for CalculationMethod
2. Document CIM's CalculationMethod definition and enumeration values
3. Compare with URPX's current implementation
4. Propose alignment approach if beneficial
5. Update ontology documentation with findings

**Alternatives Considered:**

1. **Future Research Task** ⭐ **SELECTED**
   - ✅ Documents need without blocking current work
   - ✅ Ensures CIM alignment eventually addressed
   - ✅ Allows proper research time for standards review

2. **Immediate Implementation**
   - ✅ Addresses alignment now
   - ❌ Delays v0.1.1 completion
   - ❌ Requires CIM specification access and analysis time

3. **Ignore CIM Alignment**
   - ✅ No additional work
   - ❌ Misses standards alignment opportunity
   - ❌ Potential future compatibility issues

**Impact Assessment:**
- **Positive**: Documents research need, establishes standards alignment goal
- **No Breaking Changes**: Future research only
- **Timeline**: Post-v0.1.1 enhancement
- **Priority**: Medium - improves alignment but not critical

**References:**
- CIM IEC 61968-9 (Metering) specification
- CIM IEC 61968-4 (Records and Asset Management) specification
- Task file: `design/v0.1.1/epics/epic_0008_final_ontology_update/task_0013.md`

---

<a id="decision-031"></a>
### 🔗 Decision #031: Shared Namespace Strategy with rdfs:isDefinedBy

- **Status:** ✅ Implemented
- **Date:** 2025-12-28
- **Issue:** Ontology verbosity and file size issues
- **Category:** Architecture, Ontology Organization
- **Impact:** High - Affects ontology modularity and file structure

**Context:**
The core ontology file has grown too large (>4,800 lines), but splitting it into multiple namespaces would increase verbosity in data files (e.g., `urpx-profile:CustomerProfile` vs `urpx:CustomerProfile`) and require prefix management for users. Users specifically requested to avoid increased verbosity.

**Decision:**
Use a shared `urpx:` namespace (`https://schema.urpx.org/`) for classes moved to new ontology modules (specifically the profile-scenario module), but use `rdfs:isDefinedBy` to explicitly link each term to its defining ontology file for provenance.

**Implementation Pattern:**
```turtle
# In urpx-profile-scenario.ttl
urpx:CustomerProfile a owl:Class ;
    rdfs:isDefinedBy <https://schema.urpx.org/profile-scenario/> ;
    rdfs:label "Customer Profile" .
```

**Alternatives Considered:**

1. **Shared Namespace + rdfs:isDefinedBy** ⭐ **SELECTED**
   - ✅ No verbosity increase in data files
   - ✅ Backward compatible
   - ✅ Provenance maintained via metadata
   - ✅ Simpler for users (single prefix for most concepts)

2. **Distinct Namespaces (e.g., urpx-profile:)**
   - ✅ Clear domain boundaries
   - ❌ More verbose data files
   - ❌ More prefixes to manage
   - ❌ Breaking change for existing data

**Rationale:**
- **User Experience**: Priority on keeping data files clean and simple.
- **Provenance**: `rdfs:isDefinedBy` satisfies the need to know "where this came from" without namespaces.
- **Maintainability**: Allows splitting files for dev/AI convenience without impacting end users.

**Impact Assessment:**
- **Positive**: Solves file size issue without complicating user experience.
- **Requirement**: Must ensure `rdfs:isDefinedBy` is added to all moved terms.

**References:**
- `plans/ontology-separation-strategy-v0.1.1-REVISED.md`
- `dev-documentation/v0.1.1/epics/epic_0010_comprehensive_completion/task_0012_ontology_separation.md`

---

<a id="decision-032"></a>
### 🔗 Decision #032: Profile-Scenario Ontology Consolidation

- **Status:** 🚧 Partially Implemented
- **Date:** 2025-12-28
- **Issue:** Ontology modularization strategy
- **Category:** Architecture, Ontology Organization
- **Impact:** Medium - Grouping of related concepts

**Context:**
Moving "Profile" classes (Customer, ServicePoint, DER) and "Scenario" classes (Scenario, MetricInput) out of core. Originally considered separate files, but they are tightly coupled (Scenarios use Profiles as inputs).

**Decision:**
Combine Profile and Scenario concepts into a single `urpx-profile-scenario.ttl` module rather than splitting them further.

**Alternatives Considered:**

1. **Combined Module (urpx-profile-scenario.ttl)** ⭐ **SELECTED**
   - ✅ Reduces file count
   - ✅ Keeps tightly coupled concepts together
   - ✅ Simpler import hierarchy

2. **Separate Modules (urpx-profile.ttl, urpx-scenario.ttl)**
   - ✅ More granular
   - ❌ Circular dependency risks (if profiles reference scenarios)
   - ❌ More files to manage
   - ❌ Over-engineering for current size

**Rationale:**
- **Coupling**: Scenarios are essentially "instances of profiles applied to a timeline", so they belong together.
- **Simplicity**: Fewer files is better for maintenance unless size dictates otherwise.

**References:**
- `plans/ontology-separation-strategy-v0.1.1-REVISED.md`

---

<a id="decision-033"></a>
### 🔗 Decision #033: Scenario Ontology Separation Strategy
 
- **Status:** ✅ Implemented (Profile portion in v0.1.1)
- **Date:** 2025-12-28, Implemented 2026-01-02
- **Issue:** Ontology modularization strategy refinement
- **Category:** Architecture, Ontology Organization
- **Impact:** High - File structure and import hierarchy
 
**Context:**
Decision #032 consolidated Profile and Scenario. However, architectural review (Senior Ontologist Perspective) indicates that Profiles (persistent characteristics of customers/sites) and Scenarios (transient calculation inputs) have fundamentally different lifecycles and reuse potential.
 
**Decision:**
Separate `urpx-profile.ttl` and `urpx-scenario.ttl` into distinct ontology modules.
- **v0.1.1**: Create `urpx-profile.ttl` with core profile classes (Customer, ServicePoint, DER, PriorRatePlan, ProgramEnrollment). ✅ **COMPLETED 2026-01-02**
- **v0.1.2**: Create `urpx-scenario.ttl` for calculation scenario inputs, importing `urpx-profile`. ⏭️ **DEFERRED**
 
**Rationale (Senior Ontologist View):**
1.  **Reuse Potential**: `urpx-profile` describes the "Utility Customer Data Model" (who the customer is, what equipment they have). This has high reuse value independent of rate calculation scenarios (e.g., for asset management or customer information systems). Coupling it with calculation scenarios limits this reuse.
2.  **Lifecycle Separation**: Profile data changes when the customer changes (persistent). Scenario data changes when the analyst asks a different question (transient). Separating them follows the "Separation of Concerns" principle.
3.  **Dependency Direction**: Scenarios depend on Profiles ("Run this scenario for Profile X"), but Profiles do not depend on Scenarios. This allows a clean `Scenario -> Profile` dependency chain without circularity.
 
**Implementation Results (v0.1.1):**
- ✅ Created `urpx-profile.ttl` with 28 classes, 46 properties, 134 enumeration instances
- ✅ Moved `CustomerProfile`, `ServicePointProfile`, `DistributedEnergyResource`, `PriorRatePlan`, `ProgramEnrollment`
- ✅ Moved 21 profile-related enumeration classes and all instances
- ✅ Core ontology reduced from 4,900 to 3,811 lines (-22% reduction)
- ✅ All ontology files validated (7,492 total triples: 3,710 + 1,436 + 808 + 1,084 + 454)
- ✅ Shared `urpx:` namespace maintained with `rdfs:isDefinedBy` for provenance
- ⏭️ Scenario separation deferred to v0.1.2

**References:**
- `processing/ontology_separation_completion_report.md`
- `plans/ontology-separation-strategy-v0.1.1-REVISED.md`
- `dev-documentation/v0.1.1/epics/epic_0010_comprehensive_completion/task_0012_ontology_separation.md`
---
---

<a id="decision-034"></a>
### 🔗 Decision #034: Schema.org Vocabulary Reuse - Core Properties Replacement

- **Status:** ✅ Implemented
- **Date:** 2026-01-03
- **Issue:** Epic 0001 Task 0001 - Vocabulary Reuse (Schema.org Integration)
- **Category:** Standards Compliance, Semantic Web Best Practices
- **Impact:** High - Core property vocabulary replacement with schema.org equivalents

**Context:**
URPX v0.1.0 defined custom properties (urpx:name, urpx:description, urpx:currency) that have well-established schema.org equivalents. Dave's standards review emphasized vocabulary reuse as a Semantic Web best practice to improve interoperability, reduce documentation burden, and align with semantic web conventions. Investigation revealed these properties were defined but unused in current ontology, making replacement straightforward without migration complexity.

**Decision:**
Replace three core URPX properties with schema.org equivalents, adding URPX-specific domain constraints to maintain architectural precision. Group all schema.org properties in dedicated "SCHEMA.ORG VOCABULARY REUSE" section for maintainability and clear external vocabulary usage.

**Property Replacements:**

1. **urpx:currency → schema:priceCurrency** (98% semantic fit)
   - ISO 4217 three-letter currency code
   - Domain: Price, PriceSet, RatePlan, RatePlanVersion, URPXDocument
   - Dual-level architecture: document-level for convenience, charge-level for international analysis
   - Schema.org designed specifically for financial transactions

2. **urpx:description → schema:description** (99% semantic fit)
   - Comprehensive explanation or detailed description
   - Range: xsd:string
   - Universal usage across all entity types
   - Direct semantic match with URPX usage

3. **urpx:name → schema:name** (99% semantic fit)
   - Human-readable name for entities
   - Range: xsd:string
   - Universal usage across all entity types
   - Direct semantic match with URPX usage

**Alternatives Considered:**

1. **Replace with Schema.org + URPX Domain Constraints** ⭐ **SELECTED**
   - ✅ Semantic Web best practice (vocabulary reuse)
   - ✅ Improved interoperability with external tools
   - ✅ Reduced documentation burden (users know schema.org)
   - ✅ Better tool support (schema.org widely supported)
   - ✅ Maintains URPX-specific domain constraints via owl:unionOf
   - ✅ Standards compliance and maturity signal

2. **Keep Custom URPX Properties**
   - ✅ Full control over semantics
   - ❌ Reinvents well-known vocabulary
   - ❌ Higher documentation burden
   - ❌ Missed opportunity for standards alignment
   - ❌ Not following Semantic Web best practices

3. **Use Dublin Core Terms**
   - ✅ W3C standard vocabulary
   - ❌ dcterms:title and dcterms:description less specific than schema.org
   - ❌ No currency property in Dublin Core
   - ❌ Schema.org more widely adopted in modern applications

4. **Mix of Standards (Schema.org + Dublin Core)**
   - ✅ Best-of-breed approach
   - ❌ Inconsistent vocabulary sourcing
   - ❌ More complex for users to understand
   - ❌ Schema.org provides all needed properties

**Rationale:**

**Semantic Web Best Practices:**
- W3C Linked Data Best Practices recommend vocabulary reuse when well-known, adequately defined, and no specialization needed
- Schema.org properties are stable, widely adopted, and semantically precise
- Reduces "not invented here" syndrome in ontology development
- Shows standards compliance and semantic web maturity

**No Specialization Needed:**
- schema:name semantics match URPX usage exactly (human-readable entity names)
- schema:description semantics match URPX usage exactly (detailed descriptions)
- schema:priceCurrency designed for financial transactions with ISO 4217 codes
- No utility-specific requirements that schema.org properties cannot express

**Interoperability Benefits:**
- External tools already understand schema.org properties
- JSON-LD contexts widely available for schema.org
- Search engines and semantic web crawlers recognize schema.org
- Reduces integration friction with other systems

**Domain Constraint Pattern:**
Schema.org properties constrained with URPX-specific domains using owl:unionOf:
```turtle
schema:priceCurrency a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ;
        owl:unionOf ( urpx:Price urpx:PriceSet urpx:RatePlan 
                      urpx:RatePlanVersion urpx:URPXDocument ) ] ;
    rdfs:range xsd:string .
```

**Implementation Details:**

**Ontology Organization:**
Created dedicated section at lines 657-690 in urpx-core-ontology.ttl:
```turtle
# ============================================
# SCHEMA.ORG VOCABULARY REUSE
# ============================================
# URPX reuses well-known schema.org properties following 
# Semantic Web best practices.
```

**Property Definitions:**
- Added URPX-specific domain constraints to schema.org properties
- Included comprehensive skos:note documentation explaining URPX usage
- Maintained rdfs:label with @en language tags
- Grouped all schema.org properties together for maintainability

**Removed Definitions:**
- Line 976-982: urpx:currency (deleted)
- Line 1045-1049: urpx:description (deleted)
- Line 1831-1835: urpx:name (deleted)

**Namespace Import:**
Schema.org namespace already imported at line 6:
```turtle
@prefix schema: <http://schema.org/> .
```

**Validation:**
- Ontology syntax validated using Python rdflib
- 3,710 triples confirmed valid
- No broken property references
- Schema.org properties properly constrained

**Comprehensive Scan Results:**
Identified 13 additional vocabulary reuse opportunities beyond the 3 core properties:
- **8 properties recommended for replacement** (Phase 2):
  - Temporal: startDate, endDate, publicationDate (→ schema:startDate, schema:endDate, schema:datePublished)
  - Document: documentUrl (→ schema:url)
  - Versioning: versionNumber (→ schema:version)
  - Location: timeZone (→ schema:timeZone)
  - Consolidation: startDateTime/endDateTime merged into schema:startDate/endDate (accept both xsd:date and xsd:dateTime)

- **1 property kept** (domain-specific clarity):
  - documentTitle (keep urpx:documentTitle - more explicit than schema:name for document context)

- **4 properties deferred** (legal precision concerns):
  - effectiveDate, effectiveDateTime, expirationDate, expirationDateTime
  - US utility regulatory terms with specific legal meaning
  - Schema.org validFrom/validThrough semantically close but may lack regulatory precision
  - Deferred to future version for legal review and stakeholder input

**CSV Tracker:**
Generated comprehensive tracker: `epic_0001_task_0001_vocab_reuse.csv`
- 16 rows documenting all property replacements
- 3 COMPLETED replacements (name, description, priceCurrency)
- 8 PLANNED replacements for Phase 2
- 1 KEEP decision (documentTitle)
- 4 DEFERRED properties (effectiveDate variants)
- Complete SHACL impact analysis for each property

**Benefits:**
- ✅ **Standards Compliance**: W3C Linked Data Best Practices alignment
- ✅ **Interoperability**: External tools recognize schema.org properties
- ✅ **Documentation Efficiency**: Users already familiar with schema.org
- ✅ **Tool Support**: Wide ecosystem support for schema.org
- ✅ **Semantic Precision**: 98-99% semantic fit for replaced properties
- ✅ **Maintainability**: Grouped organization makes external vocabulary usage explicit
- ✅ **Future-Proof**: Identified 8 additional opportunities for Phase 2

**Impact Assessment:**
- **Positive**: Enhanced standards compliance, improved interoperability, reduced documentation burden
- **Breaking Changes**: Property URIs changed (urpx:name → schema:name, etc.)
- **Migration Impact**: Low - properties were defined but unused in current ontology
- **Standards Ready**: Demonstrates semantic web best practices for W3C review
- **Phase 2 Ready**: Comprehensive scan provides roadmap for additional vocabulary reuse

**References:**
- W3C Linked Data Best Practices: https://www.w3.org/TR/ld-bp/
- Schema.org name: https://schema.org/name
- Schema.org description: https://schema.org/description
- Schema.org priceCurrency: https://schema.org/priceCurrency
- Epic 0001: Vocabulary Reuse (Schema.org Integration)
- Task 0001: Replace Core Properties & Comprehensive Scan
- Vocabulary Reuse Scan Results
- CSV Tracker

---

<a id="decision-035"></a>
### 🔗 Decision #035: Deferral of Financial and Temporal Property Replacements

- **Status:** ✅ Implemented
- **Date:** 2026-01-03
- **Issue:** Epic 0001 Task 0002 - Vocabulary Reuse (Schema.org Integration)
- **Category:** Standards Compliance, Semantic Precision
- **Impact:** Medium - Deferral of property replacements to future releases

**Context:**
During the vocabulary reuse analysis (Task 0002), several candidate properties were identified for replacement with schema.org equivalents. While replacements for `name`, `description`, `priceCurrency` (and `documentUrl` -> `schema:url`) were approved and implemented, replacements for financial properties (`amount`, `unitPrice`) and temporal properties (`effectiveDate`, `expirationDate`) were evaluated and deferred.

**Decision:**
Defer the replacement of `urpx:amount` and `urpx:unitPrice` with schema.org equivalents, and maintain custom temporal properties (`effectiveDate`, `expirationDate`) for now due to their specific regulatory and domain-specific semantics in utility rate contexts. `urpx:documentUrl` will be replaced with `schema:url`.

**Rationale:**

**Financial Properties (`amount`, `unitPrice`):**
- **Semantic Precision**: `urpx:amount` (fixed fee) and `urpx:unitPrice` (per-unit rate) have distinct meanings in utility billing that `schema:price` (generic price) does not capture with sufficient precision without complex qualification.
- **Calculation Logic**: These properties are deeply integrated into the rate calculation logic (e.g., `unitPrice * usage`), and replacing them with a generic property could obscure the calculation model.
- **Future Review**: Re-evaluate `schema:priceSpecification` or `schema:UnitPriceSpecification` in a future release if they can offer better semantic alignment without loss of precision.

**Temporal Properties (`effectiveDate`, `expirationDate`):**
- **Regulatory Context**: In utility tariffs, "Effective Date" has a specific legal meaning related to regulatory approval and implementation, which differs from generic validity periods.
- **Domain Specificity**: Maintaining these as custom properties preserves the explicit regulatory semantics familiar to industry stakeholders.
- **Future Review**: Re-evaluate mapping to `schema:validFrom` and `schema:validThrough` in a future release, potentially as sub-properties or with explicit alignment notes, but keep the core properties custom for now.

**Document URL:**
- **Replacement Approved**: `urpx:documentUrl` is a direct semantic match for `schema:url` in the context of TariffPublications, and replacement is approved to align with standard web practices.

**Impact Assessment:**
- **Positive**: Preserves semantic precision for critical billing and regulatory concepts. Avoids premature abstraction that could complicate rate modeling.
- **Negative**: Missed opportunity for full schema.org alignment in this phase.
- **Mitigation**: Clear documentation of these properties' specific semantics in the ontology.

**References:**
- Epic 0001: Vocabulary Reuse
- Task 0002: Implement Additional Vocabulary Reuse Opportunities
- Decision #034: Schema.org Vocabulary Reuse - Core Properties Replacement

---


<a id="decision-036"></a>
### 🔗 Decision #036: `ScenarioMetric` Class Definition
- **Status:** ✅ Implemented
- **Date:** 2026-01-04
- **Issue:** Need for representing non-metered inputs in cost calculations
- **Category:** Architecture, Measurement Framework
- **Impact:** High - Establishes a clear pattern for scenario-based inputs

**Context:**
The ontology required a method to represent non-metered inputs for cost calculations, such as `householdSize`, which are derived from customer or service point profiles. The initial thought was to make `ScenarioMetric` a subclass of `MetricSpecification`, but this was rejected because `ScenarioMetric` will not have the same units of measure.

**Decision:**
Create a new standalone class `ScenarioMetric` and a new property `hasScenarioMetric` with a domain of `MetricSpecification`. This approach provides a clear distinction between metered and scenario-based metrics while allowing them to be used interchangeably as inputs. It also allows for the addition of specific metadata to `ScenarioMetric` without affecting `MetricSpecification`.

**Implementation Details:**
- `ScenarioMetric` created as a new `owl:Class`.
- `hasScenarioMetric` created as a new `owl:ObjectProperty` with `MetricSpecification` as its domain and `ScenarioMetric` as its range.
- `MetricSpecification` was renamed to `MeteredMetric` to better reflect its purpose.
- The range of `hasMetricInput` was updated to include both `MeteredMetric` and `ScenarioMetric`.

**Benefits:**
- ✅ **Clear Semantics**: Explicit distinction between metered and scenario-based metrics.
- ✅ **Flexibility**: `ScenarioMetric` can have its own set of properties and metadata.
- ✅ **Reusability**: `MetricSpecification` (now `MeteredMetric`) can be reused across different scenarios.

**Impact Assessment:**
- **Positive**: Clearer architecture, more flexible and extensible measurement framework.
- **Breaking Change**: `MetricSpecification` was renamed to `MeteredMetric`.
- **Migration Required**: Update all references to `MetricSpecification` to `MeteredMetric`.
**References:**
- Epic 0010 Task 0003: New Billing Architecture Implementation

---

<a id="decision-037"></a>
### 🔗 Decision #037: Generic Utility Identifier - eiaId to utilityId Rename

- **Status:** ✅ Implemented
- **Date:** 2026-01-04
- **Issue:** Epic 0011 Task 0002 - eiaId to utilityId Renaming
- **Category:** Naming Convention, International Support
- **Impact:** Medium - Property rename for international utility identifier support

**Context:**
URPX v0.1.0 used `eiaId` property for utility identification, which was too specific to the US Energy Information Administration. URPX is intended for international use across multiple jurisdictions with different utility identifier systems (UK MPAN, EU EIC, Australian NMI, etc.). The US-specific naming limited international adoption and confused non-US users.

**Decision:**
Rename `eiaId` to `utilityId` as a generic property that can accommodate various jurisdiction-specific identifier systems. Each URPX implementation specifies which identifier system is used for that jurisdiction.

**Alternatives Considered:**

1. **Generic `utilityId` Property** ⭐ **SELECTED**
   - ✅ Supports international adoption across all jurisdictions
   - ✅ Flexible for different identifier systems (EIA, MPAN, EIC, NMI, etc.)
   - ✅ Maintains semantic clarity for utility-specific identification
   - ✅ Allows future enumeration of known ID types
   - ✅ Clear migration path from eiaId

2. **Keep `eiaId`, Add Separate Properties for Each System**
   - ✅ Explicit per-system properties
   - ❌ Property explosion (eiaId, mpanId, eicId, nmiId, etc.)
   - ❌ Maintenance overhead for each new jurisdiction
   - ❌ Doesn't scale internationally

3. **Use `schema:identifier`**
   - ✅ Standards-based generic identifier
   - ❌ Too generic - loses utility-specific semantics
   - ❌ No indication this is a utility identifier
   - ❌ Doesn't convey domain context

4. **Create `utilityIdType` Enumeration Now**
   - ✅ Explicit identifier system specification
   - ❌ Adds complexity for v0.1.1
   - ❌ Deferred to v0.1.2 for simplicity

**Rationale:**

**International Adoption:**
- Supports utility identification across multiple jurisdictions
- US: EIA ID (Energy Information Administration)
- UK: MPAN (Meter Point Administration Number)
- EU: EIC (Energy Identification Code)
- Australia: NMI (National Metering Identifier)
- Canada: Various provincial systems

**Semantic Clarity:**
- "utilityId" clearly indicates utility-specific identification
- Generic enough to accommodate any jurisdiction's system
- Maintains domain specificity (utility context)

**Flexibility:**
- Each URPX implementation documents which ID system is used
- Future versions can add `utilityIdType` enumeration for formal system specification
- Supports emerging identifier systems without ontology changes

**Implementation Details:**

**Property Definition Update:**
```turtle
# Before (v0.1.0)
urpx-org:eiaId a owl:DatatypeProperty ;
    rdfs:label "EIA ID"@en ;
    rdfs:comment "Energy Information Administration utility identifier" ;
    rdfs:domain urpx-org:OrganizationIdentifier ;
    rdfs:range xsd:string ;
    skos:note "US EIA utility identifier for regulatory reporting" .

# After (v0.1.1)
urpx-org:utilityId a owl:DatatypeProperty ;
    rdfs:label "Utility ID"@en ;
    rdfs:comment "Utility identifier as defined by the implementing jurisdiction" ;
    rdfs:domain urpx-org:OrganizationIdentifier ;
    rdfs:range xsd:string ;
    skos:note "Generic utility identifier property. Each URPX implementation specifies the identifier system used (e.g., US EIA ID, UK MPAN, EU EIC code). For standard identifier types, use identifierScheme to specify the system." ;
    skos:example "US: EIA-12345, UK: S12345678901, EU: 12X-UTILITY-A" .
```

**Files Modified:**
1. `ontology/urpx-organization.ttl` (line 380) - Property definition
2. `shacl/urpx-organization-shacl-v0.1.1-dev.ttl` (line 321) - SHACL validation
3. `test-cases/pge-e-elec-urpx-2024.jsonld` (line 110) - Test case usage
4. `data-dictionary/ARCHITECTURE.md` (line 130) - Documentation
5. `ontology/urpx-core-ontology.ttl` (line 1943) - Comment reference

**SHACL Validation Update:**
```turtle
# Updated pattern to be more generic
sh:property [
    sh:path urpx-org:utilityId ;
    sh:datatype xsd:string ;
    sh:maxCount 1 ;
    sh:minCount 0 ;
    sh:pattern "^[a-zA-Z0-9\\-_]+$" ;
    sh:message "Utility ID must be alphanumeric with hyphens/underscores if specified"@en ;
    sh:severity sh:Violation
] ;
```

**Migration Guidance:**
```jsonld
// OLD (v0.1.0):
{
  "@type": "urpx:Organization",
  "urpx:eiaId": "12345"
}

// NEW (v0.1.1):
{
  "@type": "urpx:Organization",
  "urpx:utilityId": "12345"
}
```

**Benefits:**
- ✅ **International Support**: Enables global utility identification
- ✅ **Semantic Clarity**: Clear utility-specific identifier property
- ✅ **Flexibility**: Accommodates any jurisdiction's identifier system
- ✅ **Future-Proof**: Can add formal identifier type enumeration in v0.1.2
- ✅ **Simple Migration**: Direct property rename with same value format

**Impact Assessment:**
- **Positive**: Enhanced international usability, clearer semantics, jurisdiction flexibility
- **Breaking Change**: Property name change from `eiaId` to `utilityId`
- **Migration Required**: Update all `eiaId` references to `utilityId` (simple find/replace)
- **Standards Ready**: Generic approach supports emerging international standards

**References:**
- Epic 0011: Ontology Refinements & Property Review
- Task 0002: eiaId to utilityId Renaming
- urpx-todo-new.md - Original note (line 145)
- International utility identifier systems documentation
<a id="decision-038"></a>
### 🔗 Decision #038: Season Temporal Simplification - xsd:gMonth Multi-Value Pattern

- **Status:** ✅ Implemented
- **Date:** 2026-01-04
- **Issue:** Epic 0011 Task 0003 - Season Temporal Simplification
- **Category:** Standards Compliance, Semantic Web Best Practices, Temporal Patterns
- **Impact:** High - Simplifies Season class temporal definition and fixes semantic web anti-pattern

**Context:**
URPX v0.1.0 Season class supported THREE temporal definition approaches creating confusion and maintenance complexity. Additionally, the `applicableMonths` property used a comma-separated string format requiring parsing, which violates semantic web best practices. The task file noted: "Let's definitely not do a comma separated list as a string that then needs to be parsed."

**Original Three Approaches:**
1. Date-based: `seasonStartDate` + `seasonEndDate` (year-specific)
2. Month range: `startMonth` + `endMonth` (recurring annual patterns) ← REMOVE
3. Month list: `applicableMonths` (comma-separated string) ← FIX ANTI-PATTERN

**Decision:**
Simplify Season class to TWO temporal definition approaches and replace comma-separated string with proper RDF multi-value pattern using `xsd:gMonth` datatype:

1. **Date-based**: `schema:startDate` + `schema:endDate` (year-specific seasons)
2. **Month-based**: `urpx:month` with `xsd:gMonth` (recurring annual patterns using RDF multi-value)

**Alternatives Considered:**

1. **xsd:gMonth Multi-Value Pattern** ⭐ **SELECTED**
   - ✅ Proper RDF/semantic web pattern (no string parsing)
   - ✅ ISO 8601 gMonth standard datatype (--MM format)
   - ✅ Native RDF multi-value support (multiple property values)
   - ✅ Aligns with iCalendar RFC 5545 BYMONTH pattern semantically
   - ✅ Simple property name: `month` (user suggestion)
   - ✅ Eliminates redundant month range approach

2. **Keep Comma-Separated String**
   - ✅ Single property value
   - ❌ Requires string parsing (anti-pattern)
   - ❌ Not semantic web compliant
   - ❌ Violates RDF best practices
   - ❌ User explicitly rejected this approach

3. **Create Month Enumeration**
   - ✅ Type-safe approach
   - ❌ Overkill for simple month specification
   - ❌ 12 enumeration instances for basic concept
   - ❌ More complex than xsd:gMonth standard

4. **Use Integer Month Numbers (1-12)**
   - ✅ Simple datatype
   - ❌ Less explicit than ISO 8601 gMonth
   - ❌ No standard format indication
   - ❌ Ambiguity about zero-padding

**Rationale:**

**Semantic Web Best Practices:**
- RDF natively supports multiple values for same property
- No string parsing required - each month is separate triple
- Standard XSD datatype (xsd:gMonth) with ISO 8601 format
- Proper semantic representation of temporal patterns

**ISO 8601 Compliance:**
- gMonth format: --01 through --12
- Internationally recognized standard
- Clear, unambiguous month representation
- Aligns with other ISO 8601 usage in ontology

**Simplification Benefits:**
- Reduces from 3 approaches to 2
- Eliminates redundant month range pattern
- Month range (startMonth/endMonth) can be expressed as month list
- Clearer documentation and user guidance

**Schema.org Property Reuse:**
- Replaced domain-specific `seasonStartDate`/`seasonEndDate`
- Reused existing `schema:startDate`/`schema:endDate` properties
- Reduces property proliferation
- Improves semantic web interoperability

**Implementation Details:**

**Removed Properties (5):**
```turtle
# Removed: startMonth (was lines 1987-1992)
# Removed: endMonth (was lines 1994-1999)
# Removed: applicableMonths (was lines 2001-2006)
# Removed: seasonStartDate (was lines 1971-1976)
# Removed: seasonEndDate (was lines 1978-1983)
```

**New Property:**
```turtle
urpx:month a owl:DatatypeProperty ;
    rdfs:label "Month"@en ;
    rdfs:comment "Month when this season applies (ISO 8601 gMonth format)" ;
    rdfs:domain urpx:Season ;
    rdfs:range xsd:gMonth ;
    skos:note "ISO 8601 gMonth format (--01 through --12). Use multiple property values for seasons spanning multiple months. Aligned with iCalendar RFC 5545 BYMONTH pattern. Example: Summer season with three values: --06, --07, --08." .
```

**Updated Season Class:**
```turtle
urpx:Season a owl:Class ;
    rdfs:label "Season"@en ;
    rdfs:comment "Seasonal period definition with flexible date or month-based specifications" ;
    skos:note """Defines seasonal rate periods using two approaches (use ONE):
                 
                 1. Date-based: schema:startDate + schema:endDate for year-specific seasons
                 2. Month-based: month (xsd:gMonth) for recurring annual patterns
                 
                 Standards: CIM SeasonDayTypeSchedule, ISO 8601 gMonth, iCalendar RFC 5545 BYMONTH.""" .
```

**Schema.org Property Domain Updates:**
```turtle
# Extended domain to include Season
schema:startDate rdfs:domain [ owl:unionOf ( ... urpx:Season ... ) ] .
schema:endDate rdfs:domain [ owl:unionOf ( ... urpx:Season ... ) ] .
```

**Usage Examples:**

**Month-based (RDF multi-value pattern):**
```turtle
:summerSeason a urpx:Season ;
    rdfs:label "Summer" ;
    urpx:month "--06", "--07", "--08" .  # Three separate values
```

**Date-based (year-specific):**
```turtle
:summer2025 a urpx:Season ;
    rdfs:label "Summer 2025" ;
    schema:startDate "2025-06-01"^^xsd:date ;
    schema:endDate "2025-08-31"^^xsd:date .
```

**Migration Guidance:**

**From Month Range (OLD):**
```turtle
# v0.1.0
:winterSeason urpx:startMonth "--12" ; urpx:endMonth "--02" .

# v0.1.1
:winterSeason urpx:month "--12", "--01", "--02" .
```

**From Comma-Separated String (OLD):**
```turtle
# v0.1.0
:summerSeason urpx:applicableMonths "6,7,8" .

# v0.1.1
:summerSeason urpx:month "--06", "--07", "--08" .
```

**From Domain-Specific Dates (OLD):**
```turtle
# v0.1.0
:summer2025 urpx:seasonStartDate "2025-06-01"^^xsd:date ;
            urpx:seasonEndDate "2025-08-31"^^xsd:date .

# v0.1.1
:summer2025 schema:startDate "2025-06-01"^^xsd:date ;
            schema:endDate "2025-08-31"^^xsd:date .
```

**Benefits:**
- ✅ **Semantic Web Compliance**: No string parsing, proper RDF pattern
- ✅ **Standards Alignment**: ISO 8601 gMonth, iCalendar BYMONTH semantics
- ✅ **Simplification**: 2 approaches instead of 3
- ✅ **Property Reuse**: Schema.org startDate/endDate reduces proliferation
- ✅ **Maintainability**: Clearer documentation, simpler mental model
- ✅ **Extensibility**: RDF multi-value pattern scales naturally

**Impact Assessment:**
- **Positive**: Fixes semantic web anti-pattern, simplifies architecture, improves standards compliance
- **Breaking Changes**: 5 properties removed, Season class definition updated
- **Migration Required**: Update all Season definitions using removed properties
- **Standards Ready**: Proper RDF patterns for W3C review
- **SHACL/Test Cases**: Deferred to later (per user instruction)

**Validation Results:**
- Core ontology: 3,679 triples parsed successfully
- All ontology files: 7,469 total triples validated
- Zero remaining references to removed properties
- Validation script bug fixed (charge-classification filename)

**References:**
- Epic 0011: Ontology Refinements & Property Review
- Task 0003: Season Temporal Simplification
- urpx-todo-new.md - Original note (line 130)
- Architectural Plan
- ISO 8601: Date and time representation standard
- iCalendar RFC 5545: BYMONTH pattern for recurring events
- CIM SeasonDayTypeSchedule patterns
- Decision #034: Schema.org Vocabulary Reuse (startDate/endDate)

<a id="decision-039"></a>
### 🔗 Decision #039: TOUSchedule Measurement Architecture Refinement - BillingModel Migration

- **Status:** ✅ Implemented
- **Date:** 2026-01-04
- **Issue:** Epic 0012 Task 0001 - Measurement Properties Review
- **Category:** Architecture, Measurement Framework
- **Impact:** High - TOUSchedule architectural placement and measurement reference pattern

**Context:**
During measurement properties review, discovered that `hasMeasurement` property on TOUSchedule creates redundancy with the MeteredMetric architecture introduced in v0.1.1. Additionally, `hasTOUSchedule` property has domain `MetricInputRuleSet` which is deprecated. The current architecture doesn't clearly separate measurement definition (what is measured) from billing application (when rates apply).

**Current Architecture Problem:**
- `hasMeasurement` on TOUSchedule duplicates measurement specification from MeteredMetric
- `hasTOUSchedule` domain is deprecated `MetricInputRuleSet` class
- No clear connection between TOUSchedule and the new MeteredMetric/ScenarioMetric architecture
- Measurement context unclear in billing application

**Decision:**
Migrate TOUSchedule to BillingModel and replace `hasMeasurement` with `referencesMetricInput` property that links to MeteredMetric. Remove deprecated `MetricInputRuleSet` class completely.

**Proposed Architecture:**
```
PlanElements
  ├─ hasMetricInput → MeteredMetric (defines WHAT is measured: energy, demand, etc.)
  └─ hasBillingModel → BillingModel
       └─ hasTOUSchedule → TOUSchedule (defines WHEN different rates apply)
            ├─ billPortion (delivery/supply/bundled)
            ├─ referencesMetricInput → MeteredMetric (which measurement this schedule applies to)
            └─ hasTOUTier → TOUTier
                 └─ hasTOUPeriod → TOUPeriod
```

**Alternatives Considered:**

1. **TOUSchedule in BillingModel with referencesMetricInput** ⭐ **SELECTED**
   - ✅ Clean separation: measurement definition (PlanElements) vs. billing application (BillingModel)
   - ✅ TOUSchedule co-located with billPortion in BillingModel (billing-time concerns together)
   - ✅ Eliminates redundancy - measurement referenced, not duplicated
   - ✅ Supports multiple TOUSchedules per BillingModel, each referencing different MeteredMetrics
   - ✅ Removes deprecated MetricInputRuleSet class completely

2. **Keep hasMeasurement on TOUSchedule**
   - ✅ No migration required
   - ❌ Redundant with MeteredMetric architecture
   - ❌ Duplicates measurement specification
   - ❌ Doesn't address deprecated MetricInputRuleSet domain

3. **TOUSchedule remains in MetricInputRuleSet**
   - ✅ Minimal changes
   - ❌ MetricInputRuleSet is deprecated
   - ❌ Doesn't align with v0.1.1 architecture
   - ❌ Perpetuates architectural debt

4. **Create new intermediate container class**
   - ✅ Could group related billing rules
   - ❌ Adds unnecessary complexity
   - ❌ BillingModel already serves this purpose

**Rationale:**

**Architectural Principles:**
1. **MeteredMetric** (in PlanElements) defines measurement specification (commodity, measurementKind, unitOfMeasure, flowDirection, accumulation)
2. **TOUSchedule** lives in **BillingModel** where billPortion designation already exists
3. **TOUSchedule** references MeteredMetric via `referencesMetricInput` property
4. One BillingModel can have **multiple TOUSchedules** with different billPortion values (delivery vs supply)
5. Each TOUSchedule references the appropriate MeteredMetric

**Separation of Concerns:**
- Measurement definition (PlanElements): WHAT is measured
- Billing application (BillingModel): WHEN different rates apply
- Clean architectural boundaries without duplication

**Eliminates Redundancy:**
- `hasMeasurement` duplicates information already in MeteredMetric
- Measurement context inherited from parent MeteredMetric relationship
- Single source of truth for measurement specification

**Implementation Details:**

**Changes Required:**

1. **Remove `hasMeasurement` property:**
```turtle
# REMOVE (lines 1428-1433 in urpx-core-ontology.ttl)
urpx:hasMeasurement a owl:ObjectProperty ;
    rdfs:label "Has Measurement"@en ;
    rdfs:comment "Links TOU schedule to specific measurement type" ;
    rdfs:domain urpx:TOUSchedule ;
    rdfs:range urpx:MetricSpecification .
```

2. **Update `hasTOUSchedule` domain:**
```turtle
# BEFORE
urpx:hasTOUSchedule a owl:ObjectProperty ;
    rdfs:domain urpx:MetricInputRuleSet ;  # Deprecated class
    rdfs:range urpx:TOUSchedule .

# AFTER
urpx:hasTOUSchedule a owl:ObjectProperty ;
    rdfs:domain urpx:BillingModel ;  # CHANGED
    rdfs:range urpx:TOUSchedule .
```

3. **Add `referencesMetricInput` property:**
```turtle
urpx:referencesMetricInput a owl:ObjectProperty ;
    rdfs:label "References Metric Input"@en ;
    rdfs:comment "Links TOU schedule to the metric input it applies to" ;
    rdfs:domain urpx:TOUSchedule ;
    rdfs:range urpx:MeteredMetric ;
    skos:note "Enables measurement-specific TOU schedules (e.g., separate schedules for energy vs demand). Replaces deprecated hasMeasurement property." .
```

4. **Remove `MetricInputRuleSet` class:**
```turtle
# REMOVE class definition (currently marked deprecated)
# REMOVE hasMetricInputRuleSet property
```

**Migration Pattern:**
```turtle
# OLD (v0.1.1 with deprecated architecture)
:metricRuleSet a urpx:MetricInputRuleSet ;
    urpx:hasTOUSchedule :touSchedule .

:touSchedule a urpx:TOUSchedule ;
    urpx:hasMeasurement :energyMetric .

# NEW (v0.1.2 with BillingModel)
:billingModel a urpx:BillingModel ;
    urpx:hasTOUSchedule :touSchedule ;
    urpx:billPortion urpx:deliveryPortion .

:touSchedule a urpx:TOUSchedule ;
    urpx:referencesMetricInput :energyMetric .

:energyMetric a urpx:MeteredMetric ;
    urpx:commodity urpx:electricity ;
    urpx:measurementKind urpx:energy ;
    urpx:unitOfMeasure urpx:kWh .
```

**Benefits:**
- ✅ **Eliminates Redundancy**: Single source of truth for measurement specification
- ✅ **Clean Architecture**: Measurement definition separate from billing application
- ✅ **Co-location**: TOUSchedule with billPortion in BillingModel (billing concerns together)
- ✅ **Flexibility**: Supports multiple TOUSchedules per BillingModel, each referencing different MeteredMetrics
- ✅ **Removes Deprecated Classes**: Completes migration away from MetricInputRuleSet
- ✅ **Standards Ready**: Clear architectural boundaries for W3C review

**Impact Assessment:**
- **Positive**: Cleaner architecture, eliminated redundancy, clear separation of concerns
- **Breaking Changes**:
  - `hasMeasurement` property removed
  - `hasTOUSchedule` domain changed from MetricInputRuleSet to BillingModel
  - `MetricInputRuleSet` class removed completely
  - `hasMetricInputRuleSet` property removed
- **Migration Required**: Update all TOUSchedule connections to use BillingModel architecture
- **SHACL Updates**: Update validation rules for new property domains and ranges
- **Test Cases**: Update examples using old MetricInputRuleSet architecture
- **Implementation Timeline**: Implemented in v0.1.1

**References:**
- Epic 0012: Property Investigation
- Task 0001: Measurement Properties Review
- Decision #018: Flat RatePlanVersion Architecture (established BillingModel)
- Decision #036: ScenarioMetric Class Definition (MeteredMetric/ScenarioMetric architecture)
- Task File
---

<a id="decision-040"></a>
### 🔗 Decision #040: Eligibility Properties Deprecation - Unified Condition Pattern

- **Status:** 📋 Approved
- **Date:** 2026-01-04
- **Issue:** Epic 0012 Task 0002 - Eligibility Properties Investigation
- **Category:** Architecture, Property Consolidation
- **Impact:** High - Deprecates four eligibility properties in favor of unified pattern

**Context:**
Investigation of four eligibility-related properties (`demandThreshold`, `peakDemand`, `usageThreshold`, `powerRating`) revealed they are redundant with the existing `Condition` + `MetricSpecification` pattern for eligibility rules. All four properties represent qualification thresholds that can be expressed more flexibly using the unified Condition architecture.

**Decision:**
Deprecate all four eligibility properties and migrate to the unified `Condition` + `MetricSpecification` pattern for consistency, flexibility, and architectural clarity.

**Properties to Deprecate:**

1. **demandThreshold** (urpx-profile.ttl:332)
   - Domain: CustomerProfile (incorrect - should be ServicePointProfile)
   - Range: xsd:decimal
   - Definition: "Maximum demand threshold in kW"

2. **peakDemand** (urpx-profile.ttl:513)
   - Domain: ServicePointProfile
   - Range: xsd:decimal
   - Definition: "Peak demand in kW"

3. **usageThreshold** (urpx-profile.ttl:638)
   - Domain: CustomerProfile (incorrect - should be ServicePointProfile)
   - Range: xsd:decimal
   - Definition: "Annual usage threshold in kWh"

4. **powerRating** (urpx-profile.ttl:521)
   - Domain: DistributedEnergyResource
   - Range: xsd:decimal
   - Definition: "Power rating for charging/discharging in kW"

**Alternatives Considered:**

1. **Deprecate All Four Properties** ⭐ **SELECTED**
   - ✅ Eliminates redundancy with Condition pattern
   - ✅ Provides flexibility (any operator: ≤, <, ≥, >, =, between)
   - ✅ Explicit measurement types and units via MetricSpecification
   - ✅ Consistent pattern across all eligibility limits
   - ✅ Extensible to any measurement type

2. **Retain Properties with Enhanced Documentation**
   - ✅ No migration required
   - ❌ Maintains redundancy with Condition architecture
   - ❌ Limited to single operator (≤ implied)
   - ❌ Units implicit rather than explicit
   - ❌ Domain issues persist (CustomerProfile vs ServicePointProfile)

3. **Fix Domain Issues and Keep Properties**
   - ✅ Corrects domain problems
   - ❌ Still redundant with Condition pattern
   - ❌ Doesn't address flexibility limitations
   - ❌ Perpetuates property proliferation

**Rationale:**

**Architectural Redundancy:**
All four properties represent eligibility limits that can be expressed using the existing Condition + MetricSpecification pattern:
- Condition provides operator flexibility (≤, <, ≥, >, =, between)
- MetricSpecification provides explicit measurement type and unit
- Pattern already used throughout ontology for eligibility rules

**Domain Issues:**
- `demandThreshold` and `usageThreshold` incorrectly on CustomerProfile
- These are service point characteristics, not customer characteristics
- Unified pattern places conditions in EligibilityRule (correct location)

**Flexibility Benefits:**
```turtle
# Old: Fixed property with implicit ≤ operator
:customerProfile urpx:demandThreshold 25.0 .  # Units implicit

# New: Flexible Condition with explicit operator and units
:eligibilityRule urpx:hasCondition [
    a urpx:Condition ;
    urpx:hasMetricSpecification [
        urpx:measurementKind urpx:demand ;
        urpx:unitOfMeasure urpx:kW ;
    ] ;
    urpx:operator urpx:lessThanOrEqualOperator ;
    urpx:conditionValue "25.0"^^xsd:decimal ;
] .
```

**Metric Type Distinction:**
- **peakDemand**: MeteredMetric (measured from meter data)
- **powerRating**: ScenarioMetric (from equipment specifications)
- Both can use Condition pattern with appropriate metric type

**Implementation Details:**

**Deprecation Warnings:**
```turtle
urpx:demandThreshold a owl:DatatypeProperty ;
    owl:deprecated true ;
    rdfs:comment "DEPRECATED: Use Condition with hasMetricSpecification instead" ;
    skos:note "Replaced by Condition + MetricSpecification pattern for eligibility rules." ;
    rdfs:seeAlso urpx:Condition, urpx:hasMetricSpecification .

urpx:peakDemand a owl:DatatypeProperty ;
    owl:deprecated true ;
    rdfs:comment "DEPRECATED: Use Condition with hasMetricSpecification instead" ;
    rdfs:seeAlso urpx:Condition, urpx:hasMetricSpecification .

urpx:usageThreshold a owl:DatatypeProperty ;
    owl:deprecated true ;
    rdfs:comment "DEPRECATED: Use Condition with hasMetricSpecification instead" ;
    rdfs:seeAlso urpx:Condition, urpx:hasMetricSpecification .

urpx:powerRating a owl:DatatypeProperty ;
    owl:deprecated true ;
    rdfs:comment "DEPRECATED: Use specific capacity properties or Condition for limits" ;
    skos:note "For equipment specs, use solarCapacity, storageCapacity, etc.
               For eligibility limits, use Condition + MetricSpecification pattern." ;
    rdfs:seeAlso urpx:Condition, urpx:solarCapacity, urpx:storageCapacity .
```

**Migration Examples:**

**Example 1: Demand Threshold**
```turtle
# OLD (v0.1.1)
:customerProfile a urpx:CustomerProfile ;
    urpx:demandThreshold 25.0 .  # kW assumed

# NEW (v0.1.2+)
:eligibilityRule a urpx:EligibilityRule ;
    urpx:hasCondition [
        a urpx:Condition ;
        urpx:hasMetricSpecification [
            a urpx:MeteredMetric ;
            urpx:measurementKind urpx:demand ;
            urpx:unitOfMeasure urpx:kW ;
        ] ;
        urpx:operator urpx:lessThanOrEqualOperator ;
        urpx:conditionValue "25.0"^^xsd:decimal ;
    ] .
```

**Example 2: Usage Threshold**
```turtle
# OLD (v0.1.1)
:customerProfile a urpx:CustomerProfile ;
    urpx:usageThreshold 6000.0 .  # kWh/year assumed

# NEW (v0.1.2+)
:eligibilityRule a urpx:EligibilityRule ;
    urpx:hasCondition [
        a urpx:Condition ;
        urpx:hasMetricSpecification [
            a urpx:MeteredMetric ;
            urpx:measurementKind urpx:energy ;
            urpx:unitOfMeasure urpx:kWh ;
            urpx:measurementIntervalDuration "P1Y"^^xsd:duration ;  # Annual
        ] ;
        urpx:operator urpx:lessThanOrEqualOperator ;
        urpx:conditionValue "6000.0"^^xsd:decimal ;
    ] .
```

**Example 3: DER Power Rating**
```turtle
# OLD (v0.1.1)
:der a urpx:DistributedEnergyResource ;
    urpx:powerRating 10.0 .

# NEW (v0.1.2+) - For eligibility limit
:eligibilityRule a urpx:EligibilityRule ;
    urpx:hasCondition [
        a urpx:Condition ;
        urpx:hasMetricSpecification [
            a urpx:ScenarioMetric ;  # From equipment specs
            urpx:measurementKind urpx:power ;
            urpx:unitOfMeasure urpx:kW ;
        ] ;
        urpx:operator urpx:lessThanOrEqualOperator ;
        urpx:conditionValue "25.0"^^xsd:decimal ;
    ] .

# For equipment specification (if needed separately)
:der a urpx:DistributedEnergyResource ;
    urpx:solarCapacity 10.0 .  # Use specific capacity properties
```

**Comparison Table:**

| Aspect | Old Properties | New Condition Pattern |
|--------|---------------|----------------------|
| **Flexibility** | Fixed property per limit type | Any limit with any operator |
| **Clarity** | Units implicit | Units explicit in MetricSpecification |
| **Operators** | Only ≤ implied | Any operator (≤, <, ≥, >, =, between) |
| **Extensibility** | New property per limit type | Reuse same pattern |
| **Domain** | Mixed (Customer/ServicePoint/DER) | Consistent (Condition in EligibilityRule) |
| **Measurement Type** | Implicit | Explicit (measurementKind) |

**Benefits:**
- ✅ **Consistency**: Single pattern for all eligibility limits
- ✅ **Flexibility**: Supports any operator (≤, <, ≥, >, =, between)
- ✅ **Extensibility**: Works with any MetricSpecification (demand, usage, power, etc.)
- ✅ **Clarity**: Explicit measurement types and units
- ✅ **Reusability**: Same pattern used throughout ontology
- ✅ **Correct Domains**: Conditions in EligibilityRule, not on Profile classes
- ✅ **Metric Type Support**: Distinguishes MeteredMetric vs ScenarioMetric

**Impact Assessment:**
- **Positive**: Eliminates redundancy, improves flexibility, corrects domain issues
- **Breaking Changes**: Four properties deprecated (removal planned for v0.2.0)
- **Migration Required**: Update all eligibility rules using deprecated properties
- **Timeline**:
  - v0.1.1: Deprecate properties (remove from ontology)
  - Migration: Update all examples to new Condition pattern
- **Documentation**: Migration guide included in design document

**References:**
- Epic 0012: Property Investigation
- Task 0002: Eligibility Properties Investigation
- Design Document
- Condition Class: `urpx-core-ontology.ttl:214`
- MetricSpecification: `urpx-core-ontology.ttl:1238`
- Decision #036: ScenarioMetric Class Definition

---




