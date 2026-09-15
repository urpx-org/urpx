<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20150513 -->

---
site_category: advanced-topics
site_id: design-decisions-041-080
site_title: "Design Decisions 041–080"
site_label: "Decisions 041–080"
site_position: 4
---

# URPX (Utility Rate Plan Exchange) Design Decisions Log (#041-#080)

**Version:** 1.0
**Created:** 2026-01-05
**Last Updated:** 2026-04-07

> **Note:** Design decisions reference the original modular ontology files (urpx-core-ontology.ttl, urpx-profile.ttl, urpx-organization.ttl, urpx-geography.ttl, urpx-charge-classification.ttl). As of v0.1.1, these files have been consolidated into a single `ontology/urpx-ontology.ttl` file.

## Welcome!

This document is the architectural memory of the URPX project - a continuation of the design decisions log that captures every significant design decision made during development. Whether you're a contributor looking to understand why things work the way they do, a reviewer evaluating our standards compliance, or a future maintainer picking up where we left off, this log provides the context and rationale behind our choices.

Each decision includes the alternatives we considered, the reasoning behind our selection, implementation details, and impact assessment. We believe in transparent, well-documented design that stands up to scrutiny and evolves thoughtfully over time.

**How to use this document:**
- Browse the [Decision Index](#decision-index) below for quick navigation
- Each decision has a 🔗 link emoji for easy sharing
- Follow the template when adding new decisions
- Challenge our thinking - good design decisions should be defensible!

**Previous Decisions:**
- For decisions #001-#040, see [`urpx-design-decisions.md`](urpx-design-decisions.md)

---

## Purpose

This document logs design decisions #041-#080 made during URPX ontology development with rationale, alternatives considered, and impact assessment. Provides audit trail for architectural choices and standards alignment decisions.

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

- ✅ Decision #041: Ontology Syntax Validation and Duplicate Property Resolution
- ✅ Decision #042: Profile Ontology Enumeration Completeness
- ✅ Decision #043: Property Domain Migration to Profile Ontology
- 📚 Decision #044: CalculationMethod Class Removal
- ✅ Decision #045: PriceDefinition Architecture Clarification
- ✅ Decision #046: hasPrices Range Specification
- ✅ Decision #047: minimumTenure Property Addition
- ✅ Decision #048: ProfileMetric Architecture
- ✅ Decision #049: ProfileAlternative Architecture and Naming
- ✅ Decision #050: householdCount and baseQuantity Properties
- ✅ Decision #051: Time Interval Property Consolidation
- ✅ Decision #052: Structured Data Source Reference Architecture
- 📋 Decision #053: Removal of Misplaced Cardinality Constraints from Property Definitions
- ✅ Decision #054: Data Dictionary MECE Restructuring and Repetition Elimination
- ✅ Decision #055: Constraint Architecture Refactoring and Simplification
- 📋 Decision #056: Enhancement Log for Inverse Properties
- ✅ Decision #057: Removal of isCredit Property
- ✅ Decision #058: Removal of priceId Property and @id Standardization
- ✅ Decision #059: referencesPriceDefinition Object Property Creation
- ✅ Decision #060: SHACL Validation Shapes Introduction
- ✅ Decision #061: chargeType/chargeCategory Made Optional on Price
- ✅ Decision #062: PriceDefinition Removed from Temporal Property Domains
- ✅ Decision #063: Removal of alternativesType Property and AlternativesTypeValue
- ✅ Decision #064: Removal of timeZone Property (timezoneIdentifier Standardization)
- ✅ Decision #065: Rename StatementTypeValue to TariffStatementTypeValue
- ✅ Decision #066: Addition of tariffStatementType Property
- ✅ Decision #067: appliesInZone Renamed to appliesInGeographicZone
- ✅ Decision #068: conditionType and conditionValue Domain Removal from Rule Classes
- ✅ Decision #069: hasLocationDataSet Domain Extension to RatePlan and RatePlanModifier
- ✅ Decision #070: nameType Property Creation for Organization Name Classification
- ✅ Decision #071: profileId Property Removal and @id Standardization
- ✅ Decision #072: Additional Properties in Price Shape xone Constraint
- ✅ Decision #073: referencesPriceDefinition Made Optional on Price Shape
- ✅ Decision #074: Removal of urpx:month, urpx:hour, and urpx:day from UnitOfMeasureValue
- ✅ Decision #075: geographicZone Domain Update from CustomerProfile to ServicePointProfile
- ✅ Decision #076: hasPrice Minimum Cardinality Reduced to 1 on PriceSet Shape
- ✅ Decision #077: hasMetricInput Domain Narrowed to PlanElements Only
- ✅ Decision #078: name Property Extended to ProfileAlternative and ProfileAlternatives; Made Required on Key Entities
- ✅ Decision #079: referencesProfileAlternative Domain Extended to TOUSchedule and ServiceTier
- ✅ Decision #080: Controlled Media Type Vocabulary for Data Sources

---

## How to Add New Decisions

1. Use the Decision Template at the beginning of this document
2. Assign the next sequential decision number (starting from #041)
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

---

## Decisions Registry

<a id="decision-041"></a>
### 🔗 Decision #041: Ontology Syntax Validation and Duplicate Property Resolution

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Medium - Ensures ontology validity and eliminates duplicate definitions

**Context:**
During comprehensive ontology review for v0.1.1 release, syntax validation revealed two duplicate property definitions in [`urpx-core-ontology.ttl`](../../ontology/urpx-core-ontology.ttl):
1. `urpx:hasDimensionValue` defined twice (lines 769 and 775)
2. `urpx:referencesMetricInput` defined twice with different domains/ranges (lines 1709 and 1716)

These duplicates would cause RDF parsing issues and semantic ambiguity in property usage.

**Decision:**
1. Remove duplicate `hasDimensionValue` definition, keeping single canonical definition
2. Merge duplicate `referencesMetricInput` definitions into single property with union domain covering all use cases
3. Enhance merged property with `urpx:ServiceTier` domain addition for service tier metric references

**Alternatives Considered:**

1. **Merge Duplicates with Union Domains** ⭐ **SELECTED**
   - ✅ Preserves all intended functionality from both definitions
   - ✅ Creates single source of truth for property semantics
   - ✅ Enables comprehensive domain coverage (Ledger, TOUSchedule, ServiceTier)
   - ✅ Maintains backward compatibility with existing usage patterns
   - ✅ Follows RDF best practices for property definition

2. **Keep Separate Properties with Different Names**
   - ✅ Avoids domain union complexity
   - ❌ Creates semantic confusion (two properties for same concept)
   - ❌ Violates DRY principle
   - ❌ Increases maintenance burden

3. **Remove One Definition Arbitrarily**
   - ✅ Simple quick fix
   - ❌ Loses functionality from removed definition
   - ❌ May break existing usage patterns
   - ❌ Doesn't address architectural need for multiple domains

**Rationale:**
- Single property definition eliminates RDF parsing ambiguity
- Union domain pattern is standard RDF practice for multi-context properties
- ServiceTier addition enables service tiers to reference their applicable metrics
- Maintains all intended functionality while improving semantic clarity
- Follows established patterns in URPX ontology (many properties use union domains)

**Implementation Details:**

1. **Removed Duplicate `hasDimensionValue`** (line 775-779):
   ```turtle
   # Kept single definition at line 769
   urpx:hasDimensionValue a owl:ObjectProperty ;
       rdfs:label "Has Dimension Value"@en ;
       rdfs:domain urpx:AlternativeDimensionSet ;
       rdfs:comment "Structured value pairing a dimension with its value IRI..." ;
       skos:note "Cardinality: 1..* - each AlternativeDimensionSet must have at least one dimension-value pair..." .
   ```

2. **Merged `referencesMetricInput` Definitions** (lines 1709-1720):
   ```turtle
   # Original Definition 1: Ledger → MetricInput
   # Original Definition 2: TOUSchedule → MeteredMetric
   # Merged with ServiceTier addition:
   
   urpx:referencesMetricInput a owl:ObjectProperty ;
       rdfs:label "References Metric Input"@en ;
       rdfs:comment "Links ledger or TOU schedule to metric inputs for measurement data" ;
       rdfs:domain [ a owl:Class ;
               owl:unionOf ( urpx:Ledger urpx:TOUSchedule urpx:ServiceTier ) ] ;
       rdfs:range urpx:MetricInput ;
       skos:note "Many-to-many relationship between ledgers/TOU schedules/service tiers and MetricInputs..." .
   ```

3. **Validation Performed**:
   - Comprehensive Turtle syntax validation using Python validation script
   - Checked balanced brackets and parentheses
   - Verified no remaining duplicate property definitions
   - Confirmed valid prefix declarations (including hyphenated prefixes)
   - Validated both core and profile ontology files

**Impact Assessment:**

- **Positive**:
  - Eliminates RDF parsing errors from duplicate definitions
  - Creates single source of truth for property semantics
  - Enables ServiceTier to reference applicable MetricInputs
  - Improves ontology maintainability and clarity
  - Both ontology files now production-ready with valid Turtle syntax

- **Breaking Change**: None - merging preserves all functionality

- **Requirements**:
  - SHACL validation rules may need updates for expanded domains
  - Test cases should verify ServiceTier metric references work correctly

**References:**
- Task: `task_0004_ontology_updates_from_review.md`
- Validation Report: Section 16 in task file
- Files Modified: [`ontology/urpx-core-ontology.ttl`](../../ontology/urpx-core-ontology.ttl)

---

<a id="decision-042"></a>
### 🔗 Decision #042: Profile Ontology Enumeration Completeness

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Standards Compliance
- **Impact:** Medium - Fills enumeration gaps for complete profile classification

**Context:**
Review notes identified missing enumeration values in profile ontology that prevented complete classification of customer types and DER installations.

**Decision:**
Add missing enumeration values to profile ontology:
1. `urpx:nonResidentialKind` to CustomerKindValue
2. `urpx:religiousInstitution` to CustomerSubKindValue
3. `urpx:hydroGeneration` and `urpx:nuclearGeneration` to DERTypeValue

**Alternatives Considered:**

1. **Add Missing Enumerations** ⭐ **SELECTED**
   - ✅ Completes classification coverage
   - ✅ Enables accurate customer and DER categorization
   - ✅ Aligns with industry standards
   - ✅ No breaking changes

2. **Use "Other" Category**
   - ✅ Simpler short-term solution
   - ❌ Loses semantic precision
   - ❌ Reduces data quality
   - ❌ Doesn't align with standards

**Rationale:**
- Complete enumeration coverage essential for accurate classification
- Missing values identified through real-world usage review
- Standards alignment requires comprehensive enumeration sets

**Implementation Details:**
- Added `nonResidentialKind` with proper label and definition
- Added `religiousInstitution` with `skos:broader` link to `nonResidentialKind`
- Added `hydroGeneration` and `nuclearGeneration` to DER types
- All additions include complete metadata (labels, definitions, notations)

**Impact Assessment:**
- **Positive**: Complete classification coverage, improved data quality
- **Breaking Change**: None - additive only
- **Requirements**: Test cases should verify new enumeration values

**References:**
- Task: `task_0004_ontology_updates_from_review.md`
- Profile Ontology: [`ontology/urpx-profile.ttl`](../../ontology/urpx-profile.ttl)

---

<a id="decision-043"></a>
### 🔗 Decision #043: Property Domain Migration to Profile Ontology

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Medium - Improves ontology separation and semantic clarity

**Context:**
Two properties (`billingCycleCode` and `phaseCodeKind`) were located in core ontology but their primary usage is in profile contexts (CustomerProfile, ServicePointProfile).

**Decision:**
Migrate `billingCycleCode` and `phaseCodeKind` from core ontology to profile ontology with appropriate domain specifications.

**Alternatives Considered:**

1. **Migrate to Profile Ontology** ⭐ **SELECTED**
   - ✅ Improves ontology separation
   - ✅ Properties located with primary usage context
   - ✅ Cleaner core ontology scope
   - ✅ Better semantic organization

2. **Keep in Core Ontology**
   - ✅ No migration effort required
   - ❌ Blurs ontology boundaries
   - ❌ Properties not in optimal location
   - ❌ Reduces ontology clarity

**Rationale:**
- Properties primarily used in profile contexts should live in profile ontology
- Improves separation of concerns between core and profile ontologies
- Aligns with ontology modularization principles

**Implementation Details:**
- Moved `billingCycleCode` to profile ontology
- Moved `phaseCodeKind` and all phase code enumerations to profile ontology
- Updated `rdfs:isDefinedBy` to point to profile ontology
- Verified no broken references in core ontology

**Impact Assessment:**
- **Positive**: Clearer ontology boundaries, better organization
- **Breaking Change**: None - properties remain accessible
- **Requirements**: Update imports if applications directly reference property locations

**References:**
- Task: `task_0004_ontology_updates_from_review.md`

---

<a id="decision-044"></a>
### 🔗 Decision #044: CalculationMethod Class Removal

- **Status:** 📚 Superseded
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Medium - Resolves class/property redundancy
- **Superseded Note:** The `urpx:CalculationMethod` class was reinstated in Epic 0015 to serve as a container for advanced time-interval and calculation properties (`urpx:intervalDuration`, `urpx:intervalSelection`, etc.), maintaining the intended architectural pattern.

**Context:**
`urpx:CalculationMethod` appeared as both a class (line 118) and a property (line 942) in core ontology, creating semantic ambiguity.

**Decision:**
Remove `urpx:CalculationMethod` class and retain `urpx:calculationMethod` property with proper domain specification.

**Alternatives Considered:**

1. **Remove Class, Keep Property** ⭐ **SELECTED**
   - ✅ Property pattern more appropriate for calculation method references
   - ✅ Eliminates redundancy
   - ✅ Clearer semantic intent
   - ✅ Aligns with usage patterns

2. **Remove Property, Keep Class**
   - ✅ Class-based approach
   - ❌ More complex for simple method references
   - ❌ Doesn't match actual usage patterns
   - ❌ Requires more extensive refactoring

3. **Keep Both**
   - ✅ No changes required
   - ❌ Maintains semantic ambiguity
   - ❌ Violates single responsibility principle
   - ❌ Confuses ontology users

**Rationale:**
- Property pattern better suits calculation method references
- Eliminates semantic confusion
- Matches actual usage patterns in ontology
- Simpler and clearer architecture

**Implementation Details:**
- Removed `urpx:CalculationMethod` class definition
- Retained `urpx:calculationMethod` property
- Removed `urpx:BillingCalculationReference` from property domain (non-existent class)
- Updated property documentation for clarity

**Impact Assessment:**
- **Positive**: Eliminates redundancy, improves clarity
- **Breaking Change**: Minimal - class was not widely used
- **Requirements**: Update any code referencing CalculationMethod class

**References:**
- Task: `task_0004_ontology_updates_from_review.md`
- Decision #030: CalculationMethod CIM Alignment (previous decisions log)

---

<a id="decision-045"></a>
### 🔗 Decision #045: PriceDefinition Architecture Clarification

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Medium - Clarifies price architecture pattern

**Context:**
`urpx:priceDefinition` appeared as both a property and a class, creating confusion about the two-tier price architecture.

**Decision:**
Remove `urpx:priceDefinition` property and retain `urpx:PriceDefinition` class for two-tier price architecture.

**Alternatives Considered:**

1. **Remove Property, Keep Class** ⭐ **SELECTED**
   - ✅ Class-based architecture clearer for two-tier pattern
   - ✅ Enables proper price definition/instance separation
   - ✅ Better supports complex pricing structures
   - ✅ Aligns with architectural intent

2. **Remove Class, Keep Property**
   - ✅ Simpler property-based approach
   - ❌ Loses two-tier architecture benefits
   - ❌ Doesn't support complex pricing patterns
   - ❌ Reduces architectural flexibility

**Rationale:**
- Two-tier architecture (definitions vs instances) essential for complex pricing
- Class-based approach better supports this pattern
- Enables clear separation between price structure and actual values
- Supports reusable price definitions

**Implementation Details:**
- Removed `urpx:priceDefinition` property
- Retained `urpx:PriceDefinition` class
- Updated `hasPriceDefinition` property to reference class
- Clarified two-tier architecture in documentation

**Impact Assessment:**
- **Positive**: Clearer price architecture, better pattern support
- **Breaking Change**: Minimal - property usage was limited
- **Requirements**: Use `hasPriceDefinition` property to link to PriceDefinition class

**References:**
- Task: `task_0004_ontology_updates_from_review.md`

---

<a id="decision-046"></a>
### 🔗 Decision #046: hasPrices Range Specification

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Low - Clarifies container pattern usage

**Context:**
Property `urpx:hasPrices` had range of `urpx:Price` (individual) but architectural intent was to reference `urpx:Prices` (container class).

**Decision:**
Change range of `urpx:hasPrices` from `urpx:Price` to `urpx:Prices` to match container pattern.

**Alternatives Considered:**

1. **Use Prices Container** ⭐ **SELECTED**
   - ✅ Matches architectural intent
   - ✅ Consistent with container pattern
   - ✅ Better organization of multiple prices
   - ✅ Clearer semantic structure

2. **Use Individual Price**
   - ✅ Simpler direct reference
   - ❌ Doesn't match container pattern
   - ❌ Less organized for multiple prices
   - ❌ Inconsistent with architecture

**Rationale:**
- Container pattern provides better organization
- Matches architectural intent of RatePlanVersion.hasPrices.Prices hierarchy
- Consistent with other container patterns in ontology
- Enables better grouping and management of prices

**Implementation Details:**
- Changed `urpx:hasPrices` range from `urpx:Price` to `urpx:Prices`
- Updated property documentation to clarify container usage
- Verified consistency with architectural patterns

**Impact Assessment:**
- **Positive**: Clearer architecture, better organization
- **Breaking Change**: None - usage pattern remains same
- **Requirements**: Use Prices container when referencing multiple prices

**References:**
- Task: `task_0004_ontology_updates_from_review.md`

---

<a id="decision-047"></a>
### 🔗 Decision #047: minimumTenure Property Addition

- **Status:** ✅ Implemented
- **Date:** 2026-01-15
- **Issue:** Task 0004 - Ontology Updates from Review Notes
- **Category:** Architecture
- **Impact:** Medium - Enables contract duration modeling

**Context:**
Ontology lacked property to specify minimum enrollment duration for rate plans, modifiers, and programs - a common utility industry requirement.

**Decision:**
Add `urpx:minimumTenure` property with domain covering RatePlanVersion, RatePlanModifierVersion, PriorRatePlan, and ProgramEnrollment.

**Alternatives Considered:**

1. **Add minimumTenure Property** ⭐ **SELECTED**
   - ✅ Enables contract duration modeling
   - ✅ Supports common utility business rules
   - ✅ Uses standard xsd:duration datatype
   - ✅ Flexible domain covers all use cases

2. **Use Generic Duration Property**
   - ✅ More generic approach
   - ❌ Loses semantic specificity
   - ❌ Ambiguous intent
   - ❌ Doesn't convey "minimum" constraint

3. **Don't Add Property**
   - ✅ No changes required
   - ❌ Can't model contract durations
   - ❌ Missing common business requirement
   - ❌ Reduces ontology completeness

**Rationale:**
- Contract duration is common utility industry requirement
- Property name clearly conveys minimum constraint
- xsd:duration provides standard ISO 8601 format
- Domain covers all relevant contexts (rate plans, modifiers, programs)

**Implementation Details:**
```turtle
urpx:minimumTenure a owl:DatatypeProperty ;
    rdfs:label "Minimum tenure"@en ;
    rdfs:comment "The minimum duration a customer must remain enrolled in a rate plan, program, or service offering."@en ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:RatePlanVersion urpx:RatePlanModifierVersion urpx:PriorRatePlan urpx:ProgramEnrollment ) ] ;
    rdfs:range xsd:duration ;
    skos:definition "Specifies the minimum contract period or commitment duration required for a rate plan, rate plan modifier, or program, expressed as an ISO 8601 duration (e.g., 'P12M' for 12 months)."@en ;
    skos:example "P12M (12 months), P1Y (1 year), P6M (6 months)"@en .
```

**Impact Assessment:**
- **Positive**: Enables contract duration modeling, supports business rules
- **Breaking Change**: None - additive only
- **Requirements**: Use ISO 8601 duration format (e.g., P12M for 12 months)

**References:**
- Task: `task_0004_ontology_updates_from_review.md`

---

<a id="decision-048"></a>
### 🔗 Decision #048: ProfileMetric Architecture

- **Status:** ✅ Implemented
- **Date:** 2026-01-19
- **Issue:** Epic 0015 - ProfileMetric Architecture Completion
- **Category:** Architecture
- **Impact:** High - Establishes the architecture for using profile characteristics in rate calculations.

**Context:**
The ontology had an incomplete `ScenarioMetric` class that was never fully implemented. A clear pattern was needed to allow rate plans to use profile characteristics (e.g., number of meters, building square footage) for calculations. These characteristics are distinct from measured meter data and calculated metrics derived from meter data.

**Decision:**
1.  **MetricInput as Central Hub:** All calculation contexts (e.g., `ServiceTier`, `TOUSchedule`, `Ledger`) will reference `urpx:MetricInput`. `MetricInput` will be the central hub for all calculation-related specifications.
2.  **New `profileMetricInput` Enumeration:** A new enumeration value, `urpx:profileMetricInput`, will be added to `urpx:MetricInputTypeValue` to specifically identify metric inputs that are based on profile characteristics.
3.  **New `profileMetricProperty`:** A new object property, `urpx:profileMetricProperty`, will be added to `urpx:MetricInput`. This property will hold an IRI reference to the specific profile property being used (e.g., `urpx:numberOfMeters`).
4.  **Removal of `ScenarioMetric` and `hasScenarioMetric`:** The `urpx:ScenarioMetric` class and the `urpx:hasScenarioMetric` property will be removed from the ontology.
5.  **Removal of Shoehorned Units:** The non-measurement units (`meter`, `customer`, `account`, `connection`, `each`, `unit`) will be removed from `urpx:UnitOfMeasureValue`.
6.  **`MeteredMetric` Renamed to `MetricSpecification`:** The class `urpx:MeteredMetric` will be renamed back to `urpx:MetricSpecification` to better reflect its purpose as a general specification for what is being measured.

**Alternatives Considered:**

1.  **Use `MetricInput` as Central Hub** ⭐ **SELECTED**
    *   ✅ Centralizes calculation logic.
    *   ✅ Provides a clear and consistent pattern.
    *   ✅ Reuses existing classes and properties where possible.
    *   ✅ Avoids unnecessary class proliferation.

2.  **Create a New `ProfileMetric` Class**
    *   ✅ Explicitly separates profile metrics from other metric types.
    *   ❌ Adds unnecessary complexity to the ontology.
    *   ❌ Would require duplicating or creating new properties for the new class.

**Rationale:**
- Using `MetricInput` as the central hub for all calculation-related specifications provides a clear, consistent, and extensible architecture.
- The `profileMetricInput` enumeration value allows for easy identification of profile-based metrics, while the `profileMetricProperty` provides a direct link to the specific profile characteristic being used.
- Removing the unused `ScenarioMetric` class and `hasScenarioMetric` property simplifies the ontology.
- Removing the shoehorned units from `UnitOfMeasureValue` improves the accuracy of the ontology.
- Renaming `MeteredMetric` to `MetricSpecification` clarifies its role as a general-purpose specification.

**Implementation Details:**
- Added `urpx:profileMetricInput` to `urpx:MetricInputTypeValue`.
- Added `urpx:profileMetricProperty` to `urpx:MetricInput`.
- Removed `urpx:meter`, `urpx:customer`, `urpx:account`, `urpx:connection`, `urpx:each`, `urpx:unit` from `urpx:UnitOfMeasureValue` and their instance definitions.
- Updated the range of `urpx:hasMetricInput` to `urpx:MetricInput`.
- Removed the `urpx:ScenarioMetric` class.
- Removed the `urpx:hasScenarioMetric` property.
- Renamed `urpx:MeteredMetric` to `urpx:MetricSpecification`.
- Added four new profile properties to `urpx-profile.ttl`: `numberOfMeters`, `buildingSquareFootage`, `billedDemand`, and `numberOfOccupants`.

**Impact Assessment:**
- **Positive**: Establishes a clear and consistent architecture for using profile characteristics in rate calculations. Simplifies the ontology by removing unused and inaccurate elements.
- **Breaking Change**: The removal of `ScenarioMetric` and `hasScenarioMetric` is a breaking change, but these were not in use.
- **Requirements**: SHACL rules and test cases need to be updated to reflect the new architecture.

**References:**
- Epic: `EPIC_0015.md`
- Task: `task_0001_core_ontology_updates.md`
- Related Decisions: #041, #044

---

<a id="decision-049"></a>
### 🔗 Decision #049: ProfileAlternative Architecture and Naming

- **Status:** ✅ Implemented
- **Date:** 2026-01-19
- **Issue:** Epic 0015 Task 0003 - CalculationMethod Architecture Review
- **Category:** Architecture
- **Impact:** Medium - Improves clarity of alternatives architecture

**Context:**
During Epic 0015 implementation, the alternatives architecture needed clarification. The class `AlternativeDimensionSet` was confusing because:
1. The name suggested it was a "set of dimensions" when it actually represented one specific alternative (a combination of dimension values)
2. Its relationship to `AlternativeDimensions` was unclear
3. The term "DimensionSet" conflicted with the concept of "ProfileAlternatives" as the container

**Decision:**
1. **Rename `AlternativeDimensionSet` to `ProfileAlternative`**
   - Better conveys that it represents one alternative choice
   - Aligns with naming pattern: ProfileAlternatives (container) → ProfileAlternative (instance)
   - Avoids confusion with "set of dimensions"

2. **Establish Sibling Architecture**
   - `ProfileAlternative` and `AlternativeDimensions` are siblings under `ProfileAlternatives`
   - `AlternativeDimensions` defines which dimensions are relevant (wrapper for dimension definitions)
   - `ProfileAlternative` defines specific combinations of dimension values (alternative instances)
   - Both are children of `ProfileAlternatives` container

**Alternatives Considered:**

1. **Rename to ProfileAlternative with Sibling Architecture** ⭐ **SELECTED**
   - ✅ Clear naming: ProfileAlternatives → ProfileAlternative
   - ✅ Sibling relationship clarifies distinct roles
   - ✅ AlternativeDimensions wraps dimension definitions
   - ✅ ProfileAlternative contains dimension-value pairs
   - ✅ Organizational benefit of "multiples" container for dimensions

2. **Keep AlternativeDimensionSet Name**
   - ✅ No renaming effort required
   - ❌ Confusing name (suggests "set of dimensions" not "one alternative")
   - ❌ Doesn't align with ProfileAlternatives naming pattern
   - ❌ Unclear relationship to other classes

3. **Nest ProfileAlternative Under AlternativeDimensions**
   - ✅ Hierarchical organization
   - ❌ Implies ProfileAlternative is a type of AlternativeDimensions
   - ❌ Doesn't reflect actual relationship (both are organizational structures)
   - ❌ Less flexible for multiple dimensions

**Rationale:**
- **Naming Clarity**: "ProfileAlternative" clearly indicates it represents one alternative choice
- **Consistent Pattern**: Matches ProfileAlternatives (container) → ProfileAlternative (instance) pattern
- **Sibling Benefits**:
  - AlternativeDimensions defines WHICH dimensions are relevant
  - ProfileAlternative defines WHAT combinations of values exist
  - Both serve distinct organizational purposes
- **Wrapper Value**: AlternativeDimensions as a wrapper for multiple dimensions provides organizational clarity when one ProfileAlternatives has multiple dimensions of variation

**Implementation Details:**

**Architecture Structure:**
```
ProfileAlternatives (container)
  ├─ hasAlternativeDimensions → AlternativeDimensions (dimension definitions wrapper)
  │    └─ hasAlternativeDimension → AlternativeDimension (individual dimensions)
  └─ hasProfileAlternative → ProfileAlternative (alternative instances - SIBLING)
        └─ hasDimensionValue (dimension-value pairs)
```

**Property Relationships:**
- `hasProfileAlternatives`: PlanElements → ProfileAlternatives
- `hasAlternativeDimensions`: ProfileAlternatives → AlternativeDimensions
- `hasProfileAlternative`: ProfileAlternatives → ProfileAlternative (domain updated by user)
- `referencesProfileAlternative`: PriceSetAlternative, PriceDefinition → ProfileAlternative
- `referencesProfileAlternatives`: PriceSetAlternatives, PriceDefinition → ProfileAlternatives

**Renaming:**
- Class: `AlternativeDimensionSet` → `ProfileAlternative`
- All property references updated in urpx-core-ontology.ttl
- One remaining reference in urpx-profile.ttl line 588 needs updating

**Impact Assessment:**

- **Positive**:
  - Clearer naming aligns with ProfileAlternatives pattern
  - Sibling architecture clarifies distinct roles
  - Better semantic understanding for implementers
  - Organizational wrapper (AlternativeDimensions) provides structure for multiple dimensions

- **Breaking Change**:
  - Class rename from `AlternativeDimensionSet` to `ProfileAlternative`
  - Existing data using old class name needs migration

- **Requirements**:
  - Update remaining reference in urpx-profile.ttl line 588
  - Update SHACL validation rules for new class name
  - Update test cases and examples
  - Migration guide for existing implementations

**References:**
- Task: `task_0003_calculation_method_architecture.md`
- Epic: `EPIC_0015.md`
- Core Ontology: [`ontology/urpx-core-ontology.ttl`](../../ontology/urpx-core-ontology.ttl) (lines 169-172, 378-386)

---

<a id="decision-050"></a>
### 🔗 Decision #050: householdCount and baseQuantity Properties

- **Status:** ✅ Implemented
- **Date:** 2026-01-19
- **Issue:** Epic 0015 Task 0005 - Add householdCount and baseQuantity Properties
- **Category:** Architecture
- **Impact:** Medium - Enables per-household pricing semantics for California Climate Credit and similar use cases

**Context:**
California E-Elec Climate Credit requires "$50 per household" pricing semantics. The ontology needed:
1. A way to specify the number of households served by a customer account
2. A way to express "per X households" pricing (e.g., "per 2 households")

Without these properties, per-household pricing could not be accurately modeled, particularly for multi-unit buildings with master-metered service or community solar arrangements.

**Decision:**
Add two new properties to support per-household pricing:

1. **`householdCount` property** (CustomerProfile domain)
   - Specifies number of households served by customer account
   - Typically 1 for single-family residential
   - Can be >1 for multi-unit buildings with master-metered service
   - Distinct from `householdSize` (people in household) and `numberOfOccupants` (people at premises)

2. **`baseQuantity` property** (Price domain)
   - Specifies base quantity for per-unit pricing
   - Default is 1 if not specified
   - Enables "per X units" pricing (e.g., baseQuantity=2 means "per 2 households")
   - Calculation: Total = amount × (metricValue / baseQuantity)

**Alternatives Considered:**

1. **Add householdCount and baseQuantity Properties** ⭐ **SELECTED**
   - ✅ Enables accurate per-household pricing
   - ✅ Supports California Climate Credit use case
   - ✅ Extends to other "per X" scenarios (per meter, per occupant, per square foot)
   - ✅ Clean calculation formula
   - ✅ No breaking changes (both properties optional)

2. **Use Existing numberOfOccupants Property**
   - ✅ No new properties needed
   - ❌ Semantically incorrect (occupants ≠ households)
   - ❌ Doesn't support multi-household scenarios
   - ❌ Confuses people count with household count

3. **Use Multiplier Property Only**
   - ✅ Simpler approach
   - ❌ Doesn't capture "per X households" semantics
   - ❌ Requires manual calculation of multiplier
   - ❌ Less clear for rate plan authors

**Rationale:**
- **Semantic Clarity**: `householdCount` clearly distinguishes households from people
- **Calculation Flexibility**: `baseQuantity` enables "per X units" pricing patterns
- **Real-World Use Case**: California Climate Credit requires this exact pattern
- **Extensibility**: Pattern extends to other per-unit pricing scenarios
- **Property Distinctions**:
  - `householdSize`: Number of **people** in household (HEAP eligibility)
  - `numberOfOccupants`: Number of people at premises (per-capita rates)
  - `householdCount`: Number of **households** served (per-household pricing)

**Implementation Details:**

**1. householdCount Property** (urpx-profile.ttl, after line 493):
```turtle
urpx:householdCount a owl:DatatypeProperty ;
    rdfs:label "Household Count"@en ;
    rdfs:comment "Number of households served by this customer account" ;
    rdfs:domain urpx:CustomerProfile ;
    rdfs:range xsd:integer ;
    rdfs:isDefinedBy <https://schema.urpx.org/profile/> ;
    skos:note "Used for per-household rate calculations and credits like California Climate Credit. Typically 1 for single-family residential, but can be >1 for multi-unit buildings with master-metered service or community solar arrangements. Distinct from householdSize (number of people in household) and numberOfOccupants (people at premises)." .
```

**2. baseQuantity Property** (urpx-core-ontology.ttl, around line 850):
```turtle
urpx:baseQuantity a owl:DatatypeProperty ;
    rdfs:label "Base Quantity"@en ;
    rdfs:comment "Base quantity for per-unit pricing (e.g., 'per 2 households')" ;
    rdfs:domain urpx:Price ;
    rdfs:range xsd:decimal ;
    skos:note "Specifies the base quantity when price is expressed as 'per X units'. For example, baseQuantity=2 with householdCount metric means 'per 2 households'. Default is 1 if not specified. Used in calculation: Total = amount × (metricValue / baseQuantity)." ;
    skos:example "baseQuantity=2 for '$100 per 2 households' means each household pays $50" .
```

**Usage Pattern:**
```turtle
# Profile property
urpx:householdCount a owl:DatatypeProperty ;
    rdfs:domain urpx:CustomerProfile ;
    rdfs:range xsd:integer .

# Metric input
ex:householdMetric a urpx:MetricInput ;
    urpx:metricInputType urpx:profileMetricInput ;
    urpx:profileMetricProperty urpx:householdCount .

# Price
ex:climateCredit a urpx:Price ;
    urpx:amount -50.00 ;
    urpx:baseQuantity 1 ;
    urpx:hasMetricInput ex:householdMetric .
```

**Calculation Examples:**

| Scenario | householdCount | amount | baseQuantity | Calculation | Result |
|----------|----------------|--------|--------------|-------------|--------|
| Single-family | 1 | -$50 | 1 | -$50 × (1/1) | -$50 |
| 4-unit building | 4 | -$50 | 1 | -$50 × (4/1) | -$200 |
| Per 2 households | 4 | -$100 | 2 | -$100 × (4/2) | -$200 |

**Impact Assessment:**

- **Positive**:
  - Enables accurate per-household pricing for California Climate Credit
  - Supports multi-unit buildings with master-metered service
  - Extends to other "per X" pricing scenarios
  - Clear semantic distinction from similar properties
  - Documented calculation formula for implementers

- **Breaking Change**: None - both properties are optional additions

- **Requirements**:
  - Test cases should verify per-household pricing calculations
  - Documentation should clarify property distinctions
  - SHACL validation may need rules for baseQuantity defaults

**References:**
- Task: `task_0005_household_count_base_quantity.md`
- Plan: `plans/household-count-per-metric-architecture.md`
- Profile Ontology: [`ontology/urpx-profile.ttl`](../../ontology/urpx-profile.ttl) (line 495-501)
- Core Ontology: [`ontology/urpx-core-ontology.ttl`](../../ontology/urpx-core-ontology.ttl) (line 860-866)
- Related Decision: #048 (ProfileMetric Architecture)

---

<a id="decision-051"></a>
### 🔗 Decision #051: Time Interval Property Consolidation

- **Status:** ✅ Implemented
- **Date:** 2026-01-20
- **Issue:** Task 0004 - Time Interval Property Consolidation
- **Category:** Architecture
- **Impact:** High - BREAKING changes to interval properties; simplifies ontology

**Context:**
Multiple overlapping interval-related properties and enumerations created redundancy and potential inconsistency. Specifically:
1. `urpx:BillingIntervalTypeValue` (CalculationMethod)
2. `urpx:MeasurementIntervalTypeValue` (CalculationMethod)
3. `urpx:CycleTypeValue` (BillingCycle)
These redundant enumerations co-existed with `xsd:duration` properties, leading to an unclear and overly complex pattern for specifying time intervals.

**Decision:**
Consolidate to a duration-first pattern with a single, optional semantic type label.
1. Create a single enumeration: `urpx:IntervalTypeValue` (e.g., `monthlyInterval`, `annualInterval`, `customInterval`).
2. Create two canonical properties: `urpx:intervalDuration` (required, `xsd:duration`) and `urpx:intervalType` (optional, references `urpx:IntervalTypeValue`).
3. Replace all existing interval properties (`cycleDuration`, `measurementIntervalDuration`, `cycleType`, `billingIntervalType`, `measurementIntervalType`) with the canonical properties where semantically appropriate.

**Alternatives Considered:**

1. **Duration-First with Semantic Types** ⭐ **SELECTED**
   - ✅ `xsd:duration` provides precise, unambiguous interval specification
   - ✅ Semantic types provide human-readable labels for common cases
   - ✅ "Custom" type clearly indicates non-standard intervals
   - ✅ Single enumeration eliminates redundancy

2. **Enumeration-First with Duration Override**
   - ❌ Requires complex logic to handle "which takes precedence?"
   - ❌ More complex validation
   - ❌ Less consistent primary pattern

3. **Duration-Only without Semantic Types**
   - ❌ Loses semantic clarity for common intervals (e.g., monthly vs. quarterly)

**Rationale:**
- The primary source of truth for an interval should be the precise `xsd:duration` (ISO 8601).
- The semantic type (`urpx:IntervalTypeValue`) serves as a helpful label/hint for common intervals, not the source of truth.
- This pattern is highly extensible for future interval types and clarifies the role of the existing `xsd:duration` properties.

**Implementation Details:**
- Defined `urpx:IntervalTypeValue` enumeration (11 values).
- Defined two canonical properties: `urpx:intervalDuration` (xsd:duration) and `urpx:intervalType` (ObjectProperty).
- **Advanced Temporal Properties Added**:
    - `urpx:IntervalSelectionValue` (for rollingWindow, consecutivePeriods, fixedWindow selection).
    - `urpx:IntervalAlignmentValue` (for calendarAligned, billingPeriodAligned, rollingAligned anchoring).
    - `urpx:intervalSelection` (ObjectProperty, domain: MetricSpecification).
    - `urpx:intervalAlignment` (ObjectProperty, domain: MetricSpecification).
- Updated domains of `urpx:intervalDuration` and `urpx:intervalType` to include `urpx:MetricSpecification` for eligibility constraint contexts.
- Removed old enumerations: `CycleTypeValue`, `BillingIntervalTypeValue`, `MeasurementIntervalTypeValue`.
- Removed old properties: `cycleDuration`, `cycleType`, `billingIntervalType`, `measurementIntervalDuration`, `measurementIntervalType`.
- Updated domains of `BillingCycle` and `CalculationMethod` to use the new canonical properties.

**Impact Assessment:**
- **Positive**: Simplifies interval modeling, eliminates triple redundancy, improves maintainability.
- **Breaking Change**:
  - Removes `CycleTypeValue`, `BillingIntervalTypeValue`, `MeasurementIntervalTypeValue` enumerations.
  - Renames/consolidates interval-related properties (e.g., `cycleDuration`, `cycleType` replaced).
- **Requirements**: Migration required for existing data instances. Update SHACL and documentation.

**References:**
- Task: `task_0004_ontology_updates_from_review.md`

---

<a id="decision-052"></a>
### 🔗 Decision #052: Structured Data Source Reference Architecture

- **Status:** ✅ Implemented
- **Date:** 2026-01-20
- **Issue:** Task 0002 - Refactor dataSourceReference to a Class
- **Category:** Architecture
- **Impact:** Medium - Improves traceability with structured metadata

**Context:**
The original `urpx:dataSourceReference` was a simple datatype property (string). However, regulatory traceability and data management require more structured information, such as the actual filename, the source URL, and the IANA media type. A string-based property was insufficient for these metadata requirements.

**Decision:**
Refactor the data source reference into a structured object:
1.  **New Class**: Create `urpx:DataSourceReference` to hold source metadata.
2.  **Object Property**: Rename `urpx:dataSourceReference` to `urpx:hasDataSourceReference` and change its range to the new class.
3.  **Structured Properties**:
    *   `urpx:fileName`: Name of the file/document (xsd:string).
    *   `schema:url`: Direct link to the source (reused from schema.org).
    *   `urpx:mediaType`: IANA media type (xsd:string).

**Alternatives Considered:**

1.  **Structured Class (DataSourceReference)** ⭐ **SELECTED**
    *   ✅ Follows URPX Object-Property architectural pattern.
    *   ✅ Allows multiple metadata points (file, URL, type) to be grouped.
    *   ✅ Aligns with patterns in other energy standards (e.g., Green Button).
    *   ✅ Supports future extension without breaking the property schema.

2.  **Complex String Pattern**
    *   ❌ Difficult to parse reliably.
    *   ❌ Poor semantic clarity.
    *   ❌ Hard to validate via SHACL.

**Rationale:**
- Converting to a class allows for clean, structured metadata that is easy to validate and query.
- Reusing `schema:url` maintains consistency with how URLs are handled elsewhere in the ontology.
- The ObjectProperty naming convention (`hasDataSourceReference`) follows the established project standard.

**Implementation Details:**
- Defined `urpx:DataSourceReference` as an `owl:Class`.
- Updated `schema:url` domain to include the new class.
- Added `urpx:fileName` and `urpx:mediaType` as `owl:DatatypeProperty`.
- Renamed and converted `urpx:dataSourceReference` to `urpx:hasDataSourceReference` (ObjectProperty).
- Maintained existing domains (Price, PriceSet, etc.) for the refactored property.

**Impact Assessment:**
- **Positive**: Enables robust traceability and automated source processing.
- **Breaking Change**: Property rename and range change (xsd:string → urpx:DataSourceReference).
- **Requirements**: Existing data using the string property must be migrated to the new class structure.

**References:**
- Task: `task_0002_refactor_data_source.md`
- Green Button Standard (StatementRef pattern reference)

---

<a id="decision-053"></a>
### 🔗 Decision #053: Removal of Misplaced Cardinality Constraints from Property Definitions

- **Status:** 📋 Approved
- **Date:** 2026-01-21
- **Issue:** Technical Review Note (Dave)
- **Category:** Standards Compliance
- **Impact:** Medium - Corrects OWL compliance error; no functional loss as constraints were not enforced.

**Context:**
A technical review noted that cardinality constraints (`owl:cardinality`, `owl:minCardinality`, `owl:maxCardinality`) were being incorrectly applied directly to `owl:ObjectProperty` or `owl:DatatypeProperty` definitions (e.g., `urpx:alternativesType`, `urpx:annualIncomeRange`).

In OWL 2 DL, these axioms only have semantic effect when used within an `owl:Restriction` defined on a class (`rdfs:subClassOf`). As currently written on the properties themselves, they are ignored by standard reasoners and do not enforce the intended constraint.

Approximately 44 instances of these misplaced axioms exist across the ontology.

**Decision:**
Remove all instances of `owl:cardinality`, `owl:minCardinality`, and `owl:maxCardinality` that are defined directly on an `owl:ObjectProperty` or `owl:DatatypeProperty` declaration.

**Alternatives Considered:**

1. **Remove Constraints (Selected)** ⭐ **SELECTED**
   - ✅ Corrects OWL compliance issue.
   - ✅ No loss of intended function, as these were not being enforced by reasoners anyway.
   - ✅ Cleans up non-functional metadata.

2. **Migrate Constraints to owl:Restriction**
   - ❌ Requires extensive refactoring (44+ locations) to identify every class the property is used on and insert new `owl:Restriction` blocks.
   - ❌ Too high effort for the current task scope, as most constraints are descriptive (1..1 on enumerations) and could be better modeled via SHACL if true enforcement is needed.

**Rationale:**
- The current usage is technically incorrect OWL and has no semantic effect.
- Removal simplifies the ontology and moves toward proper OWL structure.
- Enforcement of these constraints should be handled through SHACL validation, which is the established mechanism for validation in this project.

**Implementation Details:**
- **To be Implemented in Code Mode:** Delete the following lines (and associated trailing semi-colons/periods) from `ontology/urpx-ontology.ttl`:
  - Line 1092: `owl:cardinality 1 ;` (`urpx:alternativesType`)
  - Line 1107: `owl:cardinality 1 ;` (`urpx:annualIncomeRange`)
  - Line 1208: `owl:cardinality 1 ;` (`urpx:assistanceEligibilityLevel`)
  - Line 1258: `owl:cardinality 1 ;` (`urpx:billPortion`)
  - Line 1306: `owl:cardinality 1 ;` (`urpx:changeReason`)
  - Line 1315: `owl:cardinality 1 .` (`urpx:chargeCategory`)
  - Line 1324: `owl:minCardinality 0 .` (`urpx:chargeType`)
  - Line 1331: `owl:cardinality 1 ;` (`urpx:connectionKind`)
  - Line 1339: `owl:cardinality 1 ;` (`urpx:connectorType`)
  - Line 1425: `owl:cardinality 1 ;` (`urpx:dayType`)
  - Line 1454: `owl:cardinality 1 ;` (`urpx:derType`)
  - Line 1476: `owl:cardinality 1 ;` (`urpx:dynamicPricingType`)
  - Line 1510: `owl:cardinality 1 ;` (`urpx:endUse`)
  - Line 1535: `owl:cardinality 1 ;` (`urpx:enrollmentStatus`)
  - Line 1543: `owl:cardinality 1 ;` (`urpx:entityType`)
  - Line 1627: `owl:cardinality 1 ;` (`urpx:geographicScope`)
  - Line 1635: `owl:cardinality 1 ;` (`urpx:geographicZone`)
  - Line 1709: `owl:cardinality 1 ;` (`urpx:hasCustomerProfile`)
  - Line 2122: `owl:cardinality 1 ;` (`urpx:identifierScheme`)
  - Line 2175: `owl:cardinality 1 ;` (`urpx:interconnectionStatus`)
  - Line 2183: `owl:cardinality 1 ;` (`urpx:inverterType`)
  - Line 2270: `owl:cardinality 1 ;` (`urpx:loadProfile`)
  - Line 2315: `owl:cardinality 1 ;` (`urpx:meteringConfiguration`)
  - Line 2339: `owl:cardinality 1 ;` (`urpx:modifierCategory`)
  - Line 2354: `owl:cardinality 1 ;` (`urpx:modifierType`)
  - Line 2406: `owl:cardinality 1 ;` (`urpx:observanceRule`)
  - Line 2429: `owl:cardinality 1 ;` (`urpx:operator`)
  - Line 2438: `owl:cardinality 1 ;` (`urpx:organizationType`)
  - Line 2446: `owl:cardinality 1 ;` (`urpx:ownershipType`)
  - Line 2461: `owl:cardinality 1 ;` (`urpx:panelOrientation`)
  - Line 2485: `owl:cardinality 1 ;` (`urpx:phaseCodeKind`)
  - Line 2500: `owl:cardinality 1 ;` (`urpx:premiseType`)
  - Line 2536: `owl:cardinality 1 ;` (`urpx:priceSource`)
  - Line 2546: `owl:maxCardinality 0 .` (`urpx:primaryChargeType`)
  - Line 2589: `owl:cardinality 1 ;` (`urpx:programType`)
  - Line 2598: `owl:cardinality 1 ;` (`urpx:publicationType`)
  - Line 2690: `owl:cardinality 1 ;` (`urpx:regulatoryScope`)
  - Line 2706: `owl:cardinality 1 ;` (`urpx:seasonalPattern`)
  - Line 2750: `owl:cardinality 1 ;` (`urpx:serviceRole`)
  - Line 2787: `owl:cardinality 1 ;` (`urpx:specialNeedsStatus`)
  - Line 2841: `owl:cardinality 1 ;` (`urpx:taxExemptStatus`)
  - Line 2885: `owl:cardinality 1 ;` (`urpx:touTierStandardName`)
  - Line 2908: `owl:cardinality 1 ;` (`urpx:updateFrequency`)
  - Line 2960: `owl:cardinality 1 ;` (`urpx:voltageLevel`)

**Impact Assessment:**
- **Positive**: Corrects OWL compliance, simplifies ontology, defers enforcement to SHACL where appropriate.
- **Breaking Change**: None, as the axioms were non-functional.
- **Requirements**: SHACL validation should be used for critical constraints (e.g., minimum 1 required properties).

**References:**
- Technical Review Note (Dave)
- OWL 2 Primer, Section 4.3 (Property Restrictions)

---
<a id="decision-054"></a>
### 🔗 Decision #054: Data Dictionary MECE Restructuring and Repetition Elimination

- **Status:** ✅ Implemented
- **Date:** 2026-01-21
- **Issue:** Epic 0016 Task 0004 - Documentation Updates Consolidated
- **Category:** Architecture, Naming Convention
- **Impact:** High - Eliminates redundancy and establishes v0.1.1 documentation structure.

**Context:**
The initial draft of the `urpx-data-dictionary.md` contained widespread repetition, with core properties defined multiple times across class definitions and the central Properties Reference section. Furthermore, multiple enumerations covered the same values, and new v0.1.1 architectural elements (MetricInput, BillingModel, ProfileAlternatives) were missing documentation.

**Decision:**
1.  **Adopt MECE (Mutually Exclusive, Collectively Exhaustive) Structure:** Reorganize the data dictionary into strict sections (Classes, Properties, Enumerations, Validation) where each concept is defined only once.
2.  **Repetition Elimination:** Replace redundant property tables in class descriptions with cross-referenced summary tables. Consolidate overlapping enumeration lists.
3.  **Entity Consolidation:** Remove deprecated Relator Classes and incorporate new architectural classes (MetricInput, Prices, PlanElements, BillingModel, Ledger, ProfileAlternatives, PriceSetAlternatives, HVACKindValue, EndUseValue, ProgramTypeValue).
4.  **Property Cleanup:** Remove deprecated properties (`demandThreshold`, `usageThreshold`, `urpx-rel` namespace refs) and align remaining properties with the consolidated ontology's naming (`effectiveDateTime`, `expirationDateTime`).

**Alternatives Considered:**

1.  **Iterative Manual Cleanup:**
    - ✅ Low initial effort.
    - ❌ High risk of reintroducing redundancy.
    - ❌ Fails to establish a rigid MECE structure.
2.  **Full MECE Restructure (Selected)** ⭐ **SELECTED**
    - ✅ Eliminates all identified redundancies.
    - ✅ Ensures complete documentation of all v0.1.1 entities.
    - ✅ Improves long-term maintainability and discoverability.
    - ✅ Establishes clear semantic boundaries between sections.

**Rationale:**
The goal of a *pre-draft* for the working group is to present a clean, authoritative source. The previous repetition was unacceptable. The full MECE restructure guarantees consistency and prevents future documentation sprawl.

**Implementation Details:**
- **Completed**: TOC updated, Core Class properties simplified, Temporal and Pricing Properties sections rewritten, Customer and Profile Enumerations section rewritten and enriched with new entities.
- **In Progress**: Full class structural reorganization and remaining enumeration sections.

**Impact Assessment:**
- **Positive**: Documentation is now a single source of truth, aligned with v0.1.1 ontology. New architecture is clearly documented.
- **Breaking Change**: No breaking changes to the ontology, but the data dictionary documentation URL anchors have changed due to reorganization.
- **Requirements**: Continue implementation to complete all sections.

**References:**
- Epic: `epic_0016_cleanup_and_consolidation/task_0004_documentation_updates_consolidated.md`
- Internal Planning Docs: `plans/data-dictionary-mece-consolidation-plan.md`



<a id="decision-055"></a>
### 🔗 Decision #055: Constraint Architecture Refactoring and Simplification

- **Status:** ✅ Implemented
- **Date:** 2026-01-24
- **Issue:** Task 0004 - Structural Inconsistencies Fix
- **Category:** Architecture
- **Impact:** High - Simplifies eligibility rule modeling by removing redundant classes.

**Context:**
The ontology contained a `urpx:ConstraintValueTypeValue` class with enumeration instances like `urpx:peakDemand` and `urpx:usageVariability`. These instances created several issues:
1.  **Name Collisions:** `urpx:peakDemand` was defined as both a Property and an Enumeration Instance (punning), causing confusion.
2.  **Redundancy:** The concept of "what is being constrained" duplicates the responsibility of `urpx:MetricInput` and `urpx:MetricSpecification`.
3.  **Inflexibility:** Using a fixed enum list restricts constraints to a predefined set, whereas referencing `MetricInput` allows constraints on any calculable metric.

**Decision:**
1.  **Retire `ConstraintValueTypeValue`:** Remove the class and its instances.
2.  **Retire Property-Punning:** Remove duplicate properties. **NOTE:** `urpx:usageVariability` and `urpx:peakDemand` were retained as properties to be used within the `profileMetricProperty` pattern (Decision #048), rather than being deleted entirely.
3.  **Direct Metric Reference:** Update `urpx:hasMetricInput` domain to include `urpx:Condition`, allowing eligibility rules to directly reference the metric they evaluate.

**Alternatives Considered:**

1.  **Direct Metric Reference (Selected)** ⭐ **SELECTED**
    - ✅ Eliminates name collisions and punning.
    - ✅ Leverages the robust `MetricInput` architecture for all values (measured or profile).
    - ✅ Simplifies the ontology by removing a redundant classification layer.
    - ✅ Unified pattern for both pricing and eligibility logic.

2.  **Keep Enum and Rename Properties**
    - ✅ Resolves name collisions.
    - ❌ Maintains a redundant "list of things that can be constrained" separate from "things that can be measured".
    - ❌ Less flexible for new types of constraints.

**Rationale:**
A "Peak Demand > 50" condition is semantically identical to evaluating a `MetricInput` (Calculated Peak Demand) against a threshold. Creating a separate enum for "Peak Demand" introduces unnecessary complexity. By allowing `Condition` to point to `MetricInput`, we unify the model.

**Implementation Details:**
- Remove `urpx:ConstraintValueTypeValue` class and instances.
- Remove `urpx:constraintValueType` property.
- Update `urpx:hasMetricInput` domain to include `urpx:Condition`.
- **Note**: `urpx:peakDemand` and `urpx:usageVariability` were kept as properties to serve as targets for `profileMetricProperty` pointers.

**Impact Assessment:**
- **Positive**: Cleaner ontology, less ambiguity, unified metric handling.
- **Breaking Change**: Existing data using `constraintValueType` must migrate to `hasMetricInput`.

**References:**
- Related Decision: #048 (ProfileMetric Architecture)

---

<a id="decision-056"></a>
### 🔗 Decision #056: Enhancement Log for Inverse Properties

- **Status:** 📋 Approved
- **Date:** 2026-01-26
- **Issue:** Future Enhancement - Ontology Navigability
- **Category:** Standards Compliance
- **Impact:** Low - Improves graph traversal and reasoning capabilities.

**Context:**
The current ontology lacks explicit inverse properties for several key relationships (e.g., `hasRatePlan` vs `isRatePlanOf`, `hasPrice` vs `isPriceOf`). While not strictly required for validation, inverse properties significantly improve graph navigability, reasoning capabilities, and query simplicity.

**Decision:**
Create a dedicated enhancement log to track and implement inverse properties in a future release (v0.2.0+). This ensures these enhancements are not lost but acknowledges they are out of scope for the immediate v0.1.1 consolidation release.

**Alternatives Considered:**

1.  **Log for Future Release (Selected)** ⭐ **SELECTED**
    - ✅ Maintains focus on v0.1.1 consolidation stability.
    - ✅ Ensures requirement is captured for next development cycle.
    - ✅ Avoids last-minute ontology changes that could introduce regression risks.

2.  **Implement Immediately**
    - ✅ Provides immediate benefit.
    - ❌ Increases risk of errors during final v0.1.1 stabilization.
    - ❌ Adds validation overhead right before release.

**Rationale:**
The v0.1.1 release is focused on consolidation and cleanup. Adding new properties now introduces unnecessary risk. Logging them as a formal enhancement ensures they are prioritized for the next iteration.

**Implementation Details:**
- Created entry in `dev-documentation/urpx-todo.md` (or equivalent backlog file) tracking "Inverse Property Implementation".
- Documented key relationships needing inverses:
    - `urpx:hasRatePlan` <-> `urpx:isRatePlanOf` (suggested)
    - `urpx:hasPrice` <-> `urpx:isPriceOf` (suggested)
    - `urpx:hasCondition` <-> `urpx:isConditionOf` (suggested)

**Impact Assessment:**
- **Positive**: Clear roadmap for future graph enrichment.
- **Breaking Change**: None.

**References:**
- N/A

---

<a id="decision-057"></a>
### 🔗 Decision #057: Removal of isCredit Property

- **Status:** ✅ Implemented
- **Date:** 2026-02-18
- **Issue:** Ontology property review
- **Category:** Architecture, Data Integrity
- **Impact:** High - Breaking change; eliminates data ambiguity for credit handling

**Context:**
The `urpx:isCredit` boolean property was added on 2026-01-27 to explicitly flag credits for accounting system integration. However, with negative `unitPrice`/`amount` values already serving as the primary mathematical indicator for credits, the boolean created multiple valid representations for the same concept:
1. A negative `unitPrice`/`amount` value (mathematical indicator)
2. `isCredit: true` with a positive value (boolean indicator)
3. Both simultaneously (redundant)

This ambiguity made enforcement impossible at scale — there was no way to guarantee that optional boolean flags would be used consistently across large datasets.

**Decision:**
Remove `urpx:isCredit` entirely. Use negative values in `unitPrice`/`amount` combined with credit-specific `chargeType` enumerations as the single source of truth for credit semantics.

**Alternatives Considered:**

1. **Remove isCredit, rely on negative values + chargeType** ⭐ **SELECTED**
   - ✅ Single unambiguous representation for credits
   - ✅ Negative values are mathematically self-consistent (summation works without special logic)
   - ✅ Credit-specific `chargeType` enumerations provide semantic richness
   - ✅ Eliminates enforcement burden of optional boolean

2. **Keep isCredit as supplementary metadata**
   - ✅ Provides explicit flag for accounting systems
   - ❌ Ambiguity persists — two representations for the same concept
   - ❌ Cannot enforce consistency of optional boolean across large datasets
   - ❌ Risk of contradictory data (positive value + `isCredit: true` vs negative value + `isCredit: false`)

3. **Replace with creditType ObjectProperty (controlled vocabulary)**
   - ✅ Richer semantics than boolean
   - ✅ Avoids boolean ambiguity
   - ❌ Premature — requires working group consensus on vocabulary
   - ❌ Deferred as potential future enhancement

**Rationale:**
- Single representation eliminates ambiguity and simplifies validation
- Credit `chargeType` enumerations (`creditEnergy`, `capitalCredit`, `creditGeneration`, etc.) already provide semantic classification
- Negative values are the standard mathematical convention for credits in financial systems
- Open to revisiting credit tagging in the future with a less ambiguous mechanism (see working group agenda)

**Implementation Details:**
- Removed `urpx:isCredit` property definition from `ontology/urpx-ontology.ttl`
- Removed `isCredit` constraints from `shacl/urpx-shacl.ttl`
- Removed `isCredit` instances from test data (`test-cases/pge-e-elec/`)

**Impact Assessment:**
- **Positive**: Eliminates data ambiguity, simplifies validation, reduces property count
- **Breaking Change**: Yes — implementations using `isCredit` must remove all instances. Credits should be represented via negative values only.
- **Requirements**: Working group discussion on credit representation strategy (scheduled for meeting #004)

**References:**
- Commit: `54d1c9f`
- Working Group Agenda: Meeting #004, Item 3 (isCredit removal and credit representation)

---

<a id="decision-058"></a>
### 🔗 Decision #058: Removal of priceId Property and @id Standardization

- **Status:** ✅ Implemented
- **Date:** 2026-02-18
- **Issue:** Ontology property review
- **Category:** Architecture, Identification
- **Impact:** High - Breaking change; standardizes identification pattern

**Context:**
The `urpx:priceId` datatype property provided a string-based identifier for Price instances. However, JSON-LD's `@id` mechanism already provides a standards-based, globally unique identifier for any resource. Maintaining a separate `priceId` property created redundancy and potential confusion about which identifier to use.

**Decision:**
Remove `urpx:priceId`. Use JSON-LD `@id` exclusively for Price identification.

**Alternatives Considered:**

1. **Use @id only** ⭐ **SELECTED**
   - ✅ Leverages standard JSON-LD identification mechanism
   - ✅ Eliminates redundant property
   - ✅ Globally unique by definition (IRIs)
   - ✅ Consistent with how other URPX classes are identified

2. **Keep priceId as human-readable alias**
   - ✅ May be easier for non-RDF consumers
   - ❌ Redundant with @id
   - ❌ Creates two identification systems for the same resource
   - ❌ Adds maintenance burden

**Rationale:**
- `@id` is the standard JSON-LD mechanism for resource identification
- Eliminating `priceId` reduces property count and removes ambiguity
- Aligns Price identification with how all other URPX classes use `@id`

**Implementation Details:**
- Removed `urpx:priceId` property definition from `ontology/urpx-ontology.ttl`
- Replaced all `urpx:priceId` values with `@id` declarations in test data

**Impact Assessment:**
- **Positive**: Cleaner identification, reduced property count, consistent patterns
- **Breaking Change**: Yes — replace all `priceId` with `@id` in data
- **Requirements**: Migration guide for implementations relying on `priceId`

**References:**
- Commit: `54d1c9f`

---

<a id="decision-059"></a>
### 🔗 Decision #059: referencesPriceDefinition Object Property Creation

- **Status:** ✅ Implemented
- **Date:** 2026-02-18
- **Issue:** Price architecture refinement
- **Category:** Architecture
- **Impact:** Medium - New property; non-breaking addition

**Context:**
The two-tier price architecture (Decision #045) separates `PriceDefinition` (structural/descriptive information) from `Price` (temporal/numerical instances). However, there was no explicit property linking a `Price` instance back to its associated `PriceDefinition`. This link is needed to support scenarios like dynamic pricing where multiple temporal `Price` instances reference the same structural `PriceDefinition`.

**Decision:**
Create `urpx:referencesPriceDefinition` as an ObjectProperty linking `Price` and `PriceSet` instances to their `PriceDefinition`.

**Alternatives Considered:**

1. **Explicit ObjectProperty (referencesPriceDefinition)** ⭐ **SELECTED**
   - ✅ Clear, named relationship between Price and PriceDefinition
   - ✅ Supports n:1 relationship (multiple Prices referencing one PriceDefinition)
   - ✅ Queryable via SPARQL
   - ✅ Follows URPX Object-Property naming convention

2. **Implicit relationship via containment**
   - ✅ No new property needed
   - ❌ Ambiguous relationship
   - ❌ Cannot support n:1 patterns
   - ❌ Difficult to query

**Rationale:**
- Enables explicit linking between temporal price instances and their structural definitions
- Supports dynamic pricing scenarios where multiple temporal instances share one definition
- Follows established URPX naming conventions (`references` prefix for cross-referencing properties)

**Implementation Details:**
```turtle
urpx:referencesPriceDefinition a owl:ObjectProperty ;
    rdfs:label "References Price Definition"@en ;
    rdfs:comment "Links a Price instance to its associated PriceDefinition." ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:Price urpx:PriceSet ) ] ;
    rdfs:range urpx:PriceDefinition .
```
- Added to test data: each `Price` object now includes `urpx:referencesPriceDefinition` linking to its `PriceDefinition`

**Impact Assessment:**
- **Positive**: Enables explicit price-to-definition linking, supports dynamic pricing patterns
- **Breaking Change**: None — additive only
- **Requirements**: Existing data should add `referencesPriceDefinition` links for completeness

**References:**
- Commit: `54d1c9f`
- Related Decision: #045 (PriceDefinition Architecture Clarification)

---

<a id="decision-060"></a>
### 🔗 Decision #060: SHACL Validation Shapes Introduction

- **Status:** ✅ Implemented
- **Date:** 2026-02-06
- **Issue:** Ontology validation capability
- **Category:** Validation
- **Impact:** High - Major quality assurance addition

**Context:**
URPX lacked machine-readable validation constraints beyond OWL axioms. OWL reasoning validates class consistency and inference but cannot enforce instance-level constraints like required properties, value ranges, or cardinality on specific shapes. SHACL (Shapes Constraint Language) fills this gap by providing data validation at the instance level.

**Decision:**
Introduce `shacl/urpx-shacl.ttl` as a unified SHACL validation file containing comprehensive shapes for all major URPX classes.

**Alternatives Considered:**

1. **Unified SHACL file** ⭐ **SELECTED**
   - ✅ Single file for all validation shapes (~3,635 lines)
   - ✅ Consistent with unified ontology approach (single `urpx-ontology.ttl`)
   - ✅ Simpler tooling and validation workflow
   - ✅ Easier to maintain and distribute

2. **Modular SHACL files (per domain)**
   - ✅ Smaller individual files
   - ❌ Increases file management complexity
   - ❌ Inconsistent with unified ontology decision
   - ❌ Harder to validate comprehensively

**Rationale:**
- SHACL enables data validation at instance level, catching constraint violations OWL reasoning cannot
- Unified file mirrors the unified ontology approach for consistency
- Provides immediate value for data quality assurance in working group review

**Implementation Details:**
- Created `shacl/urpx-shacl.ttl` (~3,635 lines) with shapes for:
  - RatePlan, RatePlanVersion, RatePlanModifier, RatePlanModifierVersion
  - Price, PriceSet, PriceDefinition, PriceSetAlternative
  - BillingModel, Ledger, ServiceTier, BillingCycle
  - TOUSchedule, TOUTier, TOUPeriod, Season, Holiday
  - EligibilityRule, Condition, CustomerProfile, ServicePointProfile
  - Organization, ServiceTerritory, and more
- Updated PG&E test case data for SHACL compliance
- Status: Draft — constraints may be refined based on working group feedback

**Impact Assessment:**
- **Positive**: Machine-readable validation, improved data quality, standardized constraint enforcement
- **Breaking Change**: None — additive only (validation is opt-in)
- **Requirements**: Viewers should use SHACL-aware tools (e.g., Apache Jena, TopBraid) for validation

**References:**
- Commit: `8de0ce9`
- File: `shacl/urpx-shacl.ttl`

---

<a id="decision-061"></a>
### 🔗 Decision #061: chargeType/chargeCategory Made Optional on Price

- **Status:** ✅ Implemented
- **Date:** 2026-02-18
- **Issue:** SHACL constraint refinement
- **Category:** Validation
- **Impact:** Medium - Relaxes previous requirements

**Context:**
The initial SHACL shapes defined `urpx:chargeType` and `urpx:chargeCategory` as required properties on Price shapes (minCount 1). Similarly, `urpx:billPortion` was required on PriceDefinition. However, these are charge classification/mapping categorizations that:
1. May not always be available from source tariff documents
2. Are not essential for mathematical rate calculation
3. May be applied during a later enrichment step rather than at initial data creation

**Decision:**
Make `chargeType`, `chargeCategory`, and `billPortion` optional (minCount 0) in SHACL shapes.

**Alternatives Considered:**

1. **Make optional (minCount 0)** ⭐ **SELECTED**
   - ✅ Allows valid data to pass validation without artificial classification
   - ✅ Supports incremental data enrichment workflows
   - ✅ More realistic for initial data ingestion from diverse sources
   - ✅ Classification can still be encouraged via documentation

2. **Keep required (minCount 1)**
   - ✅ Ensures complete charge classification
   - ❌ Rejects valid data that lacks charge classification
   - ❌ Forces artificial classification for data sources that don't provide it
   - ❌ Barriers to adoption for data providers

**Rationale:**
- Not all data sources provide charge classification upfront
- Making these optional lowers barriers for initial data submission
- Classification remains strongly recommended in documentation and examples
- SHACL severity levels can flag missing classification as warnings rather than errors

**Implementation Details:**
- Updated `shacl/urpx-shacl.ttl`: `chargeType` and `chargeCategory` minCount changed from 1 to 0 on Price shape
- Updated `shacl/urpx-shacl.ttl`: `billPortion` minCount changed from 1 to 0 on PriceDefinition shape

**Impact Assessment:**
- **Positive**: More flexible validation, better adoption support
- **Breaking Change**: None — relaxation, not restriction
- **Requirements**: Documentation should still recommend providing these properties

**References:**
- Commit: `54d1c9f`

---

<a id="decision-062"></a>
### 🔗 Decision #062: PriceDefinition Removed from Temporal Property Domains

- **Status:** ✅ Implemented
- **Date:** 2026-02-18
- **Issue:** Domain architecture refinement
- **Category:** Architecture
- **Impact:** Medium - Breaking change for implementations using temporal properties on PriceDefinition

**Context:**
`urpx:PriceDefinition` was included in the domain of temporal properties (`startDate`, `startDateTime`, `endDate`, `endDateTime`, `expectedEndDate`, `expectedEndDateTime`). However, PriceDefinition holds structural and descriptive price information (charge classification, applicability rules, calculation methods) that is not temporal in nature. Temporal information (when a price is effective) belongs on `Price` instances, which contain the actual numerical and temporal data.

**Decision:**
Remove `urpx:PriceDefinition` from the domain of all temporal properties. Temporal information is expressed exclusively on `Price` instances.

**Alternatives Considered:**

1. **Remove PriceDefinition from temporal domains** ⭐ **SELECTED**
   - ✅ Clean separation: PriceDefinition = structural, Price = temporal + numerical
   - ✅ Prevents confusion about where temporal data lives
   - ✅ Aligns with two-tier architecture intent (Decision #045)
   - ✅ Simplifies validation

2. **Keep PriceDefinition in temporal domains**
   - ✅ No migration needed
   - ❌ Blurs the structural/temporal boundary
   - ❌ Contradicts two-tier architecture intent
   - ❌ Creates ambiguity about whether dates on PriceDefinition or Price take precedence

**Rationale:**
- Two-tier architecture (Decision #045) establishes PriceDefinition as structural and Price as temporal
- Temporal properties on PriceDefinition contradicted this separation
- Clean domain boundaries improve data modeling clarity

**Implementation Details:**
- Removed `urpx:PriceDefinition` from `rdfs:domain` union of:
  - `urpx:startDate`
  - `urpx:startDateTime`
  - `urpx:endDate`
  - `urpx:endDateTime`
  - `urpx:expectedEndDate`
  - `urpx:expectedEndDateTime`

**Impact Assessment:**
- **Positive**: Clean architectural separation, reduced ambiguity
- **Breaking Change**: Yes — data using temporal properties on PriceDefinition must migrate these to Price instances
- **Requirements**: Migration guide for existing implementations

**References:**
- Commit: `54d1c9f`
- Related Decision: #045 (PriceDefinition Architecture Clarification), #059 (referencesPriceDefinition)

---

<a id="decision-063"></a>
### 🔗 Decision #063: Removal of alternativesType Property and AlternativesTypeValue

- **Status:** ✅ Implemented
- **Date:** 2026-02-25
- **Issue:** Redundant classification mechanism
- **Category:** Architecture / Simplification
- **Impact:** Medium - Breaking change for implementations using `alternativesType`

**Context:**
`urpx:alternativesType` was an ObjectProperty on `ProfileAlternative` with range `AlternativesTypeValue`, an enumeration class with values like `billingCycleAlternatives`, `customerProfileAlternatives`, `geographicAlternatives`, `serviceClassAlternatives`, and `temporalAlternatives`. This property classified what dimension an alternative represented. However, this classification is already expressed structurally through the `AlternativeDimension` and `DimensionValuePair` architecture — the dimension type is inherent in the dimension values themselves, making the explicit type property redundant.

**Decision:**
Remove `urpx:alternativesType` ObjectProperty, `AlternativesTypeValue` class, and all enumeration instances. Alternative dimension classification is expressed through the existing structural mechanism.

**Alternatives Considered:**

1. **Remove alternativesType and AlternativesTypeValue entirely** ⭐ **SELECTED**
   - ✅ Eliminates redundant classification mechanism
   - ✅ Reduces potential for inconsistency between type label and actual dimension values
   - ✅ Simplifies ProfileAlternative model
   - ❌ Removes a convenience shorthand for querying by alternative type

2. **Keep alternativesType as optional metadata**
   - ✅ Provides quick filtering without inspecting dimension values
   - ❌ Redundant with structural information
   - ❌ Risk of inconsistency between type and actual dimension content
   - ❌ Additional maintenance burden for enumeration values

**Rationale:**
- The `AlternativeDimension` → `DimensionValuePair` structure already encodes the type of alternative
- Redundant classification properties create consistency risks at scale
- Simplification aligns with the principle of single source of truth

**Implementation Details:**
- Removed `urpx:alternativesType` ObjectProperty definition from ontology
- Removed `urpx:AlternativesTypeValue` class and all instances (`billingCycleAlternatives`, `customerProfileAlternatives`, `geographicAlternatives`, `serviceClassAlternatives`, `temporalAlternatives`)
- Removed from SHACL: `alternativesType` constraint on `ProfileAlternativeShape`, `AlternativesTypeValueShape`
- Removed from data dictionary: property entry on ProfileAlternative, AlternativesTypeValue enumeration section

**Impact Assessment:**
- **Positive**: Simplified model, reduced redundancy, eliminated consistency risk
- **Breaking Change**: Yes — remove all `alternativesType` triples from data
- **Requirements**: None — alternative type information is already expressed via dimensions

---

<a id="decision-064"></a>
### 🔗 Decision #064: Removal of timeZone Property (timezoneIdentifier Standardization)

- **Status:** ✅ Implemented
- **Date:** 2026-02-25
- **Issue:** Duplicate timezone representation
- **Category:** Architecture / Simplification
- **Impact:** Medium - Breaking change for implementations using `timeZone`

**Context:**
The ontology contained two timezone-related properties: `urpx:timeZone` (a general timezone string) and `urpx:timezoneIdentifier` (an IANA timezone identifier with pattern validation `^[A-Za-z]+(/[A-Za-z0-9_+-]+)+$`). Both served the same purpose — identifying the timezone for a rate plan or modifier. Having two properties created ambiguity about which to use and risked inconsistent timezone representation.

**Decision:**
Remove `urpx:timeZone` and standardize on `urpx:timezoneIdentifier` as the single timezone property, using IANA timezone identifiers (e.g., `America/New_York`, `Europe/London`).

**Alternatives Considered:**

1. **Remove timeZone, keep timezoneIdentifier** ⭐ **SELECTED**
   - ✅ Single source of truth for timezone
   - ✅ IANA identifiers are the industry standard
   - ✅ Pattern validation ensures well-formed values
   - ✅ Unambiguous machine-readable format

2. **Keep both properties with different semantics**
   - ✅ Flexibility for display names vs machine identifiers
   - ❌ Ambiguity about which property to populate
   - ❌ Potential inconsistency between the two values
   - ❌ Increased validation complexity

**Rationale:**
- IANA timezone identifiers are the unambiguous standard for timezone representation
- Duplicate properties violate the single source of truth principle
- Display-friendly timezone names can be derived from IANA identifiers at the application layer

**Implementation Details:**
- Removed `urpx:timeZone` DatatypeProperty definition from ontology
- Updated SHACL shapes: removed `timeZone` from `RatePlanShape` and `RatePlanModifierShape`
- Updated data dictionary: removed `timeZone` from RatePlan properties, retained `timezoneIdentifier`

**Impact Assessment:**
- **Positive**: Unambiguous timezone representation, simplified model
- **Breaking Change**: Yes — migrate `timeZone` values to `timezoneIdentifier` using IANA format
- **Requirements**: Implementations must use IANA timezone identifiers

---

<a id="decision-065"></a>
### 🔗 Decision #065: Rename StatementTypeValue to TariffStatementTypeValue

- **Status:** ✅ Implemented
- **Date:** 2026-03-02
- **Issue:** Naming consistency
- **Category:** Naming Convention
- **Impact:** Low - No breaking changes

**Context:**
The enumeration class `urpx:StatementTypeValue` provides controlled vocabulary for PSC statement filing types. The name `StatementTypeValue` was insufficiently specific — "statement" is a broad term used in many contexts, and the class specifically enumerates tariff statement types. Renaming to `TariffStatementTypeValue` aligns the class name with its domain (`TariffStatementDocument`) and with the URPX naming convention of prefixing tariff-related classes with `Tariff`.

**Decision:**
Rename `urpx:StatementTypeValue` to `urpx:TariffStatementTypeValue`.

**Alternatives Considered:**

1. **Rename to TariffStatementTypeValue** ⭐ **SELECTED**
   - ✅ Unambiguously scoped to tariff statements
   - ✅ Consistent with `TariffStatementDocument` naming
   - ✅ Reduces risk of name collision with other statement types in future

2. **Keep StatementTypeValue**
   - ✅ No migration required
   - ❌ Name is too generic — does not convey tariff context
   - ❌ Inconsistent with `TariffStatementDocument` naming

**Rationale:**
- Naming consistency: the range class should mirror the domain class (`TariffStatementDocument` → `TariffStatementTypeValue`)
- Reduces ambiguity for implementers and working group reviewers
- Aligns with the URPX pattern of prefixing related terms consistently

**Implementation Details:**
- Renamed class declaration in `ontology/urpx-ontology.ttl`: `urpx:StatementTypeValue` → `urpx:TariffStatementTypeValue`
- Updated `skos:note` capitalisation fix ("standardized" → "Standardized")
- Range of `urpx:tariffStatementType` set to `urpx:TariffStatementTypeValue`
- Renamed `StateemntTypeValue` in SHACL to `TariffStatementTypeValue` 

**Impact Assessment:**
- **Positive**: Clearer, more specific class name consistent with domain class naming
- **Breaking Change**: No, not yet in use

---

<a id="decision-066"></a>
### 🔗 Decision #066: Addition of tariffStatementType Property

- **Status:** ✅ Implemented
- **Date:** 2026-03-02
- **Issue:** Missing classification property on TariffStatementDocument
- **Category:** Architecture
- **Impact:** Low - Non-breaking addition

**Context:**
`TariffStatementDocument` represents PSC statement filings with prices and modifiers. The ontology lacked a property to classify which *kind* of statement a document represents (e.g., fuel adjustment, rate statement, transmission). The `TariffStatementTypeValue` enumeration class existed to provide this vocabulary but had no corresponding property linking it to the document class.

**Decision:**
Add `urpx:tariffStatementType` as an ObjectProperty with domain `TariffStatementDocument` and range `TariffStatementTypeValue`.

**Alternatives Considered:**

1. **Add tariffStatementType ObjectProperty** ⭐ **SELECTED**
   - ✅ Enables classification of statement documents by regulatory type
   - ✅ Connects the existing `TariffStatementTypeValue` enumeration to its intended domain
   - ✅ Follows URPX naming convention for enumeration-backed classification properties
   - ✅ Non-breaking addition

2. **Use a generic `documentType` property**
   - ✅ Reusable across document types
   - ❌ Less semantically precise
   - ❌ Would require a broader enumeration covering all document types

**Rationale:**
- The `TariffStatementTypeValue` enumeration was defined without a corresponding property — this decision closes that gap
- Domain-specific property name (`tariffStatementType`) is unambiguous and consistent with existing patterns (e.g., `urpx:publicationType` on `TariffPublication`)

**Implementation Details:**
```turtle
urpx:tariffStatementType a owl:ObjectProperty ;
    rdfs:label "Tariff Statement Type"@en ;
    rdfs:comment "Type of regulatory statement filing (PSC statement types)" ;
    rdfs:domain urpx:TariffStatementDocument ;
    rdfs:range urpx:TariffStatementTypeValue ;
    skos:note "PSC statement types enumeration for regulatory statement categorization. with standardized statement type definitions." .
```

**Impact Assessment:**
- **Positive**: Enables statement document classification; connects existing enumeration to its domain
- **Breaking Change**: None — additive only
- **Additional implementation**: SHACL `TariffStatementDocumentShape` was updated to include `tariffStatementType` as an optional property constraint

---

<a id="decision-067"></a>
### 🔗 Decision #067: appliesInZone Renamed to appliesInGeographicZone

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Property naming specificity
- **Category:** Naming Convention
- **Impact:** Low - Breaking rename; improves semantic clarity

**Context:**
`urpx:appliesInZone` was a property on `ApplicabilityRule` or `ApplicabilityGroup` indicating the geographic zone in which a rule applies. The name `appliesInZone` was insufficiently specific — "zone" is a broad term that could refer to service zones, pricing zones, tariff zones, or other zone concepts. The property exclusively refers to geographic zones, and its name should unambiguously reflect this.

**Decision:**
Rename `urpx:appliesInZone` to `urpx:appliesInGeographicZone`.

**Alternatives Considered:**

1. **Rename to appliesInGeographicZone** ⭐ **SELECTED**
   - ✅ Unambiguously identifies the geographic nature of the zone reference
   - ✅ Consistent with `urpx:geographicZone` and `urpx:geographicScope` naming patterns
   - ✅ Reduces risk of confusion with other zone-related concepts

2. **Keep appliesInZone**
   - ✅ No migration required
   - ❌ Name is too generic — does not convey geographic specificity
   - ❌ Inconsistent with the existing `geographicZone` property naming pattern

**Rationale:**
- Naming consistency: the property should align with the `geographicZone` naming convention used elsewhere in the ontology
- Reduces ambiguity for implementers and working group reviewers
- The `Geographic` qualifier clarifies the nature of the zone without loss of conciseness

**Implementation Details:**
- Renamed `urpx:appliesInZone` → `urpx:appliesInGeographicZone` in `ontology/urpx-ontology.ttl`
- Updated SHACL shapes referencing the property
- Updated data dictionary entries for affected classes

**Impact Assessment:**
- **Positive**: Clearer, more specific property name consistent with geographic naming conventions
- **Breaking Change**: Yes — rename requires migration of all `appliesInZone` triples to `appliesInGeographicZone`

---

<a id="decision-068"></a>
### 🔗 Decision #068: conditionType and conditionValue Domain Removal from Rule Classes

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Domain architecture refinement
- **Category:** Architecture
- **Impact:** Medium - Breaking change for implementations placing conditionType/conditionValue directly on rule objects

**Context:**
`urpx:conditionType` and `urpx:conditionValue` had domains that included `urpx:EligibilityRule` and `urpx:ApplicabilityRule` in addition to `urpx:Condition`. This allowed these properties to be placed directly on rule objects, bypassing the intended structured `Condition` architecture. The correct pattern is:

```
EligibilityRule / ApplicabilityRule
  └─ hasCondition → Condition
        ├─ conditionType → [ConditionTypeValue]
        └─ conditionValue → [value]
```

Allowing `conditionType`/`conditionValue` directly on rule objects created ambiguity about where condition data should live and undermined the structured `Condition` intermediate object.

**Decision:**
Remove `urpx:EligibilityRule` and `urpx:ApplicabilityRule` from the domain of `urpx:conditionType` and `urpx:conditionValue`. These properties now apply exclusively to `urpx:Condition` objects.

**Alternatives Considered:**

1. **Remove rule classes from domain** ⭐ **SELECTED**
   - ✅ Enforces the structured Condition architecture
   - ✅ Single location for condition data (on Condition object)
   - ✅ Consistent with the intended EligibilityRule → hasCondition → Condition pattern
   - ✅ Eliminates ambiguity about where to place condition properties

2. **Keep rule classes in domain**
   - ✅ No migration required
   - ❌ Permits rule objects to bypass the Condition structure
   - ❌ Creates two valid representations for the same data (on rule vs. on condition)
   - ❌ Makes validation and querying more complex

**Rationale:**
- The `Condition` object is the correct semantic location for condition type and value data
- Rule classes (`EligibilityRule`, `ApplicabilityRule`) are containers for conditions, not conditions themselves
- Enforcing this boundary through domain restrictions ensures consistent data modeling
- Aligns with the architectural pattern established for all structured sub-object relationships in URPX

**Implementation Details:**
- Removed `urpx:EligibilityRule` and `urpx:ApplicabilityRule` from the `rdfs:domain` union of `urpx:conditionType`
- Removed `urpx:EligibilityRule` and `urpx:ApplicabilityRule` from the `rdfs:domain` union of `urpx:conditionValue`
- Domain for both properties is now exclusively `urpx:Condition`

**Impact Assessment:**
- **Positive**: Enforces correct condition architecture, eliminates ambiguity, simplifies validation
- **Breaking Change**: Yes — data placing `conditionType`/`conditionValue` directly on `EligibilityRule` or `ApplicabilityRule` must migrate these properties to the associated `Condition` object

---

<a id="decision-069"></a>
### 🔗 Decision #069: hasLocationDataSet Domain Extension to RatePlan and RatePlanModifier

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Domain coverage for location data
- **Category:** Architecture
- **Impact:** Low - Non-breaking addition

**Context:**
`urpx:hasLocationDataSet` links a resource to a set of location data (e.g., territory, zone, service area). The property's domain did not include `urpx:RatePlan` or `urpx:RatePlanModifier`, preventing these top-level rate plan objects from directly referencing their applicable location datasets. Rate plans and modifiers often apply to specific service territories or geographic areas, making a direct `hasLocationDataSet` reference on these objects necessary for complete geographic applicability modeling.

**Decision:**
Extend the domain of `urpx:hasLocationDataSet` to include `urpx:RatePlan` and `urpx:RatePlanModifier`.

**Alternatives Considered:**

1. **Extend domain to RatePlan and RatePlanModifier** ⭐ **SELECTED**
   - ✅ Enables direct geographic applicability on rate plan objects
   - ✅ Consistent with the parallel extension of `urpx:timezoneIdentifier` to the same classes
   - ✅ Non-breaking addition
   - ✅ Supports geographic applicability at the rate plan level without requiring intermediate objects

2. **Keep current domain (no extension)**
   - ✅ No changes required
   - ❌ Prevents rate plans from directly referencing location datasets
   - ❌ Requires workarounds via `RatePlanVersion` or applicability rules for location data

**Rationale:**
- Rate plans frequently have geographic applicability (e.g., applies only within a specific service territory)
- The parallel extension of `timezoneIdentifier` to these same classes established the pattern; `hasLocationDataSet` should follow
- Non-breaking addition with no risk to existing implementations

**Implementation Details:**
- Extended `rdfs:domain` union of `urpx:hasLocationDataSet` to include `urpx:RatePlan` and `urpx:RatePlanModifier`
- Updated SHACL shapes: added `urpx:hasLocationDataSet` as optional constraint on `RatePlanShape` and `RatePlanModifierShape`

**Impact Assessment:**
- **Positive**: Enables rate plan-level geographic applicability modeling
- **Breaking Change**: None — additive only

---

<a id="decision-070"></a>
### 🔗 Decision #070: nameType Property Creation for Organization Name Classification

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Organization name classification gap
- **Category:** Architecture
- **Impact:** Low - Non-breaking addition

**Context:**
`urpx:OrganizationName` represents a named instance of an organization's name (e.g., legal name, trade name, doing-business-as name). Without a classification property, there was no structured way to distinguish between different name types on the same organization. Organizations frequently have multiple names for different contexts (legal filings, customer-facing branding, regulatory references), requiring a controlled vocabulary property to classify each `OrganizationName` instance.

**Decision:**
Add `urpx:nameType` as an ObjectProperty with domain `urpx:OrganizationName` and range `urpx:NameTypeValue`, providing controlled vocabulary classification for organization name types. 

**Alternatives Considered:**

1. **Add nameType ObjectProperty with NameTypeValue enumeration** ⭐ **SELECTED**
   - ✅ Structured classification via controlled vocabulary
   - ✅ Enables filtering and querying by name type
   - ✅ Consistent with URPX pattern of pairing ObjectProperties with `*Value` enumeration ranges
   - ✅ Non-breaking addition

2. **Use a free-text nameType DatatypeProperty**
   - ✅ More flexible for custom name types
   - ❌ No controlled vocabulary — poor interoperability
   - ❌ Inconsistent with URPX enumeration-backed classification pattern

**Rationale:**
- Controlled vocabulary classification enables consistent, queryable name type data
- Follows the established URPX pattern of ObjectProperty + `*Value` enumeration range
- Addresses the real-world requirement of distinguishing legal, trade, and operating names on a single organization

**Implementation Details:**
```turtle
urpx:nameType a owl:ObjectProperty ;
    rdfs:label "Name Type"@en ;
    rdfs:comment "Classification type for an organization name (e.g., legal, trade, doing-business-as)" ;
    rdfs:domain urpx:OrganizationName ;
    rdfs:range urpx:NameTypeValue .
```

- `NameTypeValue` enumeration provides controlled vocabulary for name type classification

**Impact Assessment:**
- **Positive**: Enables structured classification of organization names, supports multi-name organizations
- **Breaking Change**: None — additive only

---

<a id="decision-071"></a>
### 🔗 Decision #071: profileId Property Removal and @id Standardization

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Ontology property redundancy
- **Category:** Architecture, Identification
- **Impact:** Medium - Breaking change; standardizes profile identification pattern

**Context:**
`urpx:profileId` was a datatype property providing a string-based identifier for `CustomerProfile` and/or `ServicePointProfile` instances. JSON-LD's `@id` mechanism already provides a standards-based, globally unique IRI identifier for any resource. Maintaining a separate `profileId` property created redundancy and potential confusion about which identifier to use without beinga. structured ID for IRI reference — the same situation that led to the removal of `urpx:priceId` (Decision #058).

**Decision:**
Remove `urpx:profileId`. Use JSON-LD `@id` exclusively for profile identification.

**Alternatives Considered:**

1. **Use @id only** ⭐ **SELECTED**
   - ✅ Leverages standard JSON-LD identification mechanism
   - ✅ Eliminates redundant property
   - ✅ IRIs are globally unique by definition
   - ✅ Consistent with the pattern established by Decision #058 (priceId removal)
   - ✅ Profile instances become directly referenceable by IRI

2. **Keep profileId as human-readable alias**
   - ✅ May be easier for non-RDF consumers
   - ❌ Redundant with `@id`
   - ❌ Creates two identification systems for the same resource
   - ❌ Inconsistent with how other URPX classes are identified (cf. Decision #058)

**Rationale:**
- `@id` is the standard JSON-LD mechanism for resource identification
- Eliminating `profileId` reduces property count and removes ambiguity
- Aligns profile identification with how all other URPX classes (including Price after Decision #058) use `@id`
- Profile instances referenced by `@id` become referenceable from other objects without a dedicated identifier property

**Implementation Details:**
- Removed `urpx:profileId` property definition from `ontology/urpx-ontology.ttl`
- Updated SHACL shapes to remove `profileId` constraints
- Implementations should assign an `@id` to each `CustomerProfile` and `ServicePointProfile` instance

**Impact Assessment:**
- **Positive**: Cleaner identification, reduced property count, consistent patterns across all URPX classes
- **Breaking Change**: Yes — replace all `profileId` values with `@id` declarations
- **Requirements**: Migration guide for implementations relying on `profileId`

**References:**
- Related Decision: #058 (Removal of priceId Property and @id Standardization)

---

<a id="decision-072"></a>
### 🔗 Decision #072: Additional Properties in Price Shape xone Constraint

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** SHACL constraint completeness for Price shape
- **Category:** Validation
- **Impact:** Low - Non-breaking addition; expands valid pricing patterns

**Context:**
The `PriceShape` in `shacl/urpx-shacl.ttl` used an `sh:xone` constraint to enforce that exactly one pricing value property is present on a `Price` instance. The initial constraint included only `urpx:amount` and `urpx:unitPrice`. As the ontology evolved, additional pricing properties were introduced — `urpx:basedOnPrice`, `urpx:basePrice`, and `urpx:currentPrice` — to support reference pricing patterns (e.g., a price derived from another price, a base tariff price, a current effective price). These were not included in the `xone` constraint, leaving them unvalidated.

**Decision:**
Add `urpx:basedOnPrice`, `urpx:basePrice`, and `urpx:currentPrice` to the `sh:xone` constraint on `PriceShape`, resulting in five mutually exclusive pricing value options: `amount`, `unitPrice`, `basedOnPrice`, `basePrice`, `currentPrice`.

**Alternatives Considered:**

1. **Add all three properties to xone constraint** ⭐ **SELECTED**
   - ✅ Complete validation coverage for all price value patterns
   - ✅ Enforces mutual exclusivity across all pricing property options
   - ✅ Non-breaking — adds valid options without restricting existing ones

2. **Leave xone unchanged, document new properties separately**
   - ✅ No SHACL changes required
   - ❌ New pricing properties are unvalidated
   - ❌ Allows a Price to have multiple pricing value properties simultaneously

**Rationale:**
- The `sh:xone` pattern enforces that a `Price` uses exactly one pricing value mechanism
- As new pricing value properties are added to the ontology, they must be included in the constraint to maintain validation completeness
- Adding them as options (not requirements) is non-breaking

**Implementation Details:**
- Updated `PriceShape` in `shacl/urpx-shacl.ttl`: added `urpx:basedOnPrice`, `urpx:basePrice`, `urpx:currentPrice` as additional branches in the `sh:xone` constraint
- Full `sh:xone` options: `amount`, `unitPrice`, `basedOnPrice`, `basePrice`, `currentPrice`

**Impact Assessment:**
- **Positive**: Complete SHACL validation for all price value properties, consistent enforcement
- **Breaking Change**: None — additive only

---

<a id="decision-073"></a>
### 🔗 Decision #073: referencesPriceDefinition Made Optional on Price Shape

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** SHACL cardinality refinement for Price shape
- **Category:** Validation
- **Impact:** Low - Relaxes cardinality; non-breaking

**Context:**
`urpx:referencesPriceDefinition` was introduced in Decision #059 to link `Price` instances to their associated `PriceDefinition`. The initial SHACL constraint for this property on `PriceShape` required a minimum cardinality of 1 (required). However, not every `Price` instance requires an explicit link to a `PriceDefinition` — particularly for simple pricing data, dynamic prices, or data ingested from sources where the structural definition has not yet been created.

**Decision:**
Update the cardinality of `urpx:referencesPriceDefinition` on `PriceShape` to optional (`minCount 0`).

**Alternatives Considered:**

1. **Make optional (minCount 0)** ⭐ **SELECTED**
   - ✅ Allows valid Price data without requiring a PriceDefinition link
   - ✅ Supports incremental data enrichment workflows
   - ✅ Consistent with the pattern of making structural/descriptive properties optional (cf. Decision #061)
   - ✅ Non-breaking relaxation

2. **Keep required (minCount 1)**
   - ✅ Ensures Price-to-PriceDefinition links are always present
   - ❌ Rejects valid Price data that lacks a PriceDefinition reference
   - ❌ Forces artificial PriceDefinition creation for simple pricing data
   - ❌ Barrier to adoption for data providers working incrementally

**Rationale:**
- Not all data sources or use cases require the two-tier Price/PriceDefinition architecture to be fully populated
- Making the link optional lowers barriers for initial data submission while still supporting the full two-tier pattern when needed
- Consistent with the broader principle of making structural enrichment properties optional

**Implementation Details:**
- Updated `PriceShape` in `shacl/urpx-shacl.ttl`: `referencesPriceDefinition` constraint changed from `minCount 1` to `minCount 0`

**Impact Assessment:**
- **Positive**: More flexible validation, better adoption support
- **Breaking Change**: None — relaxation, not restriction

**References:**
- Related Decision: #059 (referencesPriceDefinition Object Property Creation)

---

<a id="decision-074"></a>
### 🔗 Decision #074: Removal of urpx:month, urpx:hour, and urpx:day from UnitOfMeasureValue

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Time unit representation alignment
- **Category:** Architecture / Simplification
- **Impact:** Medium - Breaking change for implementations using time-based unit-of-measure values

**Context:**
`urpx:UnitOfMeasureValue` contained time-based enumeration instances: `urpx:month`, `urpx:hour`, and `urpx:day`. These were used to express time-period units in measurement contexts. However, the introduction of structured interval metric specifications (Decision #051) established `urpx:intervalDuration` (ISO 8601 `xsd:duration`) as the canonical way to express time intervals. Retaining `month`, `hour`, and `day` as `UnitOfMeasureValue` instances creates redundancy and ambiguity — the same concept (a monthly interval, an hourly interval) could be expressed in two incompatible ways.

Additionally, `UnitOfMeasureValue` is semantically intended for physical measurement units (kWh, kW, therm, etc.), not for time interval categorization. Time-based "units" are more accurately expressed as interval durations in structured metric specifications.

**Decision:**
Remove `urpx:month`, `urpx:hour`, and `urpx:day` from `urpx:UnitOfMeasureValue`. Time-based intervals are expressed via `urpx:intervalDuration` using ISO 8601 duration values.

**Alternatives Considered:**

1. **Remove time-based values from UnitOfMeasureValue** ⭐ **SELECTED**
   - ✅ Eliminates redundancy with the structured interval approach (Decision #051)
   - ✅ Preserves semantic purity of `UnitOfMeasureValue` as a physical measurement unit enumeration
   - ✅ Single mechanism for expressing time intervals (`intervalDuration`)
   - ✅ Consistent with the removal of shoehorned non-physical units (Decision #048)

2. **Keep time-based values as convenience aliases**
   - ✅ No migration required
   - ❌ Creates two valid representations for the same concept
   - ❌ Blurs the semantic boundary of `UnitOfMeasureValue`
   - ❌ Inconsistent with the structured interval architecture

**Rationale:**
- `UnitOfMeasureValue` should represent physical measurement units, not time interval labels
- The structured interval approach (`intervalDuration` + optional `intervalType` + `intervalAlignment`) provides a richer and more precise representation of time intervals
- Removing these values eliminates an ambiguity that could lead to inconsistent data modeling choices
- Consistent with the broader clean-up of shoehorned enumeration values (cf. Decision #048 removal of non-measurement units)

**Implementation Details:**
- Removed `urpx:month`, `urpx:hour`, and `urpx:day` individual declarations and `owl:oneOf` references from `urpx:UnitOfMeasureValue` in `ontology/urpx-ontology.ttl`
- Time intervals should use `urpx:intervalDuration` with ISO 8601 values (e.g., `"P1M"^^xsd:duration` for monthly, `"PT1H"^^xsd:duration` for hourly, `"P1D"^^xsd:duration` for daily)

**Impact Assessment:**
- **Positive**: Cleaner enumeration semantics, single mechanism for time interval expression
- **Breaking Change**: Yes — data using `urpx:month`, `urpx:hour`, or `urpx:day` as unit-of-measure values must migrate to `urpx:intervalDuration` specifications

**References:**
- Related Decision: #048 (ProfileMetric Architecture — removal of shoehorned units)
- Related Decision: #051 (Time Interval Property Consolidation)

---

<a id="decision-075"></a>
### 🔗 Decision #075: geographicZone Domain Update from CustomerProfile to ServicePointProfile

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Geographic property domain alignment
- **Category:** Architecture
- **Impact:** Medium - Breaking change for implementations placing geographicZone on CustomerProfile

**Context:**
`urpx:geographicZone` had a domain that included `urpx:CustomerProfile`. However, geographic zones describe the physical location of a service point, not characteristics of the customer as a person or account. The `urpx:ServicePointProfile` class represents the location-centric profile (premise, service point, geographic context), while `urpx:CustomerProfile` represents the customer-centric profile (demographics, eligibility, account status). All geographic properties should consistently live on `ServicePointProfile` rather than being split between the two profile types.

**Decision:**
Remove `urpx:CustomerProfile` from the domain of `urpx:geographicZone` and ensure `urpx:ServicePointProfile` is included. All geographic properties are now consolidated under `ServicePointProfile`.

**Alternatives Considered:**

1. **Move geographicZone domain to ServicePointProfile only** ⭐ **SELECTED**
   - ✅ All geographic properties consistently live on ServicePointProfile
   - ✅ Clear semantic boundary: CustomerProfile = customer data, ServicePointProfile = location data
   - ✅ Consistent with other geographic properties (geographicScope, etc.) on ServicePointProfile
   - ✅ Aligns with the architectural principle of privacy by design (geographic data is location data, not customer data)

2. **Keep geographicZone on CustomerProfile**
   - ✅ No migration required
   - ❌ Blurs the semantic boundary between customer and location profiles
   - ❌ Geographic data on CustomerProfile risks conflating location with customer identity
   - ❌ Inconsistent with where other geographic properties live

**Rationale:**
- Geographic zones describe where service is provided, not who the customer is — this is inherently `ServicePointProfile` data
- Consolidating all geographic properties on `ServicePointProfile` creates a single, consistent location for geographic data
- Aligns with the privacy-by-design principle of clear separation between customer and location data
- Consistent with the broader pattern of `ServicePointProfile` as the authoritative location context

**Implementation Details:**
- Removed `urpx:CustomerProfile` from the `rdfs:domain` union of `urpx:geographicZone`
- Verified `urpx:ServicePointProfile` is in the domain of `urpx:geographicZone`
- Updated data dictionary to reflect `geographicZone` under `ServicePointProfile` only

**Impact Assessment:**
- **Positive**: Cleaner architectural separation, all geographic data on ServicePointProfile
- **Breaking Change**: Yes — data placing `geographicZone` on `CustomerProfile` instances must migrate this property to the associated `ServicePointProfile`

---

<a id="decision-076"></a>
### 🔗 Decision #076: hasPrice Minimum Cardinality Reduced to 1 on PriceSet Shape

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** SHACL cardinality refinement for PriceSet shape
- **Category:** Validation
- **Impact:** Low - Relaxes cardinality; non-breaking

**Context:**
The `PriceSetShape` in `shacl/urpx-shacl.ttl` required a minimum of 2 `urpx:hasPrice` values (minCount 2). This constraint was intended to reflect that a `PriceSet` typically contains multiple price objects. However, the `urpx:PriceSetAlternative` subclass represents a single alternative within a set of alternatives — each `PriceSetAlternative` may contain only one `Price` (the price applicable for that alternative). Requiring at least 2 prices prevented valid `PriceSetAlternative` instances from passing SHACL validation.

**Decision:**
Reduce the minimum cardinality of `urpx:hasPrice` on `PriceSetShape` from 2 to 1.

**Alternatives Considered:**

1. **Reduce minCount to 1** ⭐ **SELECTED**
   - ✅ Allows valid PriceSet instances with a single Price (e.g., PriceSetAlternative)
   - ✅ More flexible modeling for diverse pricing structures
   - ✅ Non-breaking relaxation
   - ✅ A PriceSet with one Price is semantically valid (a set with one member)

2. **Keep minCount 2**
   - ✅ Enforces that a PriceSet always contains multiple prices
   - ❌ Rejects valid PriceSetAlternative instances with a single price
   - ❌ Prevents use of PriceSet subclass patterns for alternative pricing
   - ❌ Over-constrains the model beyond semantic necessity

3. **Create separate shape for PriceSetAlternative with minCount 1**
   - ✅ Preserves stricter constraint on base PriceSet
   - ❌ Shape hierarchy complexity
   - ❌ Two shapes for the same cardinality concept is over-engineering

**Rationale:**
- `PriceSetAlternative` is a valid subclass that may contain a single `Price` — the parent shape's constraint must accommodate subclass use cases
- A `PriceSet` with one price is semantically valid (requiring at least one price ensures the set is non-empty)
- Consistent with the principle of making validation constraints reflect the minimum semantic requirements, not assumed usage patterns

**Implementation Details:**
- Updated `PriceSetShape` in `shacl/urpx-shacl.ttl`: `urpx:hasPrice` constraint changed from `sh:minCount 2` to `sh:minCount 1`

**Impact Assessment:**
- **Positive**: Flexible PriceSet modeling, supports PriceSetAlternative subclass pattern
- **Breaking Change**: None — relaxation, not restriction

**References:**
- Related Decision: #059 (referencesPriceDefinition Object Property Creation)
- Related Decision: #060 (SHACL Validation Shapes Introduction)

---

<a id="decision-077"></a>
### 🔗 Decision #077: hasMetricInput Domain Narrowed to PlanElements Only

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** `hasMetricInput` domain included Price, PriceSet, and Condition alongside PlanElements
- **Category:** Ontology / Validation
- **Impact:** Medium - Breaking change; narrows domain and removes SHACL constraints

**Context:**
The `urpx:hasMetricInput` property had a union domain of `(urpx:PlanElements, urpx:Price, urpx:PriceSet, urpx:Condition)`, allowing metric inputs to be attached at multiple levels of the rate plan hierarchy. In practice, metric input *definitions* belong at the `PlanElements` level as centralized configuration, while individual `Price`, `PriceSet`, and `Condition` objects can reference specific `MetricInput` objects via IRI through `urpx:referencesMetricInput`. Having `hasMetricInput` available on all four classes blurred the distinction between defining a metric input and referencing one.

**Decision:**
Narrow the domain of `urpx:hasMetricInput` to `urpx:PlanElements` only. Remove the corresponding SHACL property constraints from `ConditionShape`, `PriceShape`, and `PriceSetShape`.

**Alternatives Considered:**

1. **Narrow domain to PlanElements only** ⭐ **SELECTED**
   - ✅ Clear separation: PlanElements *defines* metric inputs, other objects *reference* them via hasMetricSpecification
   - ✅ Single authoritative location for metric input definitions
   - ✅ Removes ambiguity about where metric inputs should be declared

2. **Keep union domain across all four classes**
   - ✅ No migration required
   - ❌ Blurs the define-vs-reference distinction
   - ❌ Allows metric input definitions to be scattered across the rate plan hierarchy

**Rationale:**
- Metric input definitions are configuration-level concerns that belong in `PlanElements`, not on individual pricing or condition objects
- Centralizing metric input definitions in `PlanElements` creates a single source of truth

**Implementation Details:**
- Ontology: Replaced union domain `(PlanElements, Price, PriceSet, Condition)` with single domain `urpx:PlanElements`
- Ontology: Simplified `skos:note` to remove reference to Condition usage
- SHACL: Removed `hasMetricInput` property constraint from `ConditionShape`
- SHACL: Removed `hasMetricInput` property constraint from `PriceShape`
- SHACL: Removed `hasMetricInput` property constraint from `PriceSetShape`

**Impact Assessment:**
- **Positive**: Cleaner architecture, single authoritative location for metric input definitions
- **Breaking Change**: Yes — data placing `hasMetricInput` on `Price`, `PriceSet`, or `Condition` instances must migrate to `PlanElements` or use `hasMetricSpecification` instead

**References:**
- Related Decision: #060 (SHACL Validation Shapes Introduction)

---

<a id="decision-078"></a>
### 🔗 Decision #078: name Property Extended to ProfileAlternative and ProfileAlternatives; Made Required on Key Entities

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** ProfileAlternative and ProfileAlternatives lacked human-readable names; Ledger and PriceDefinition names were optional
- **Category:** Ontology / Validation
- **Impact:** Medium - Breaking change; adds required name constraints

**Context:**
`ProfileAlternative` and `ProfileAlternatives` instances represent user-facing selection options (e.g., choosing between zone configurations or service levels). Without a `name` property, these instances had no standardized human-readable label for display in UIs or documents. Additionally, `Ledger` and `PriceDefinition` had `name` as optional (`sh:minCount 0`) in their SHACL shapes, despite being entities that require identification in billing and pricing contexts.

**Decision:**
1. Extend the ontology domain of `urpx:name` to include `urpx:ProfileAlternatives` and `urpx:ProfileAlternative`.
2. Add required `name` property constraints (`sh:minCount 1`, `sh:maxCount 1`) to `ProfileAlternativeShape` and `ProfileAlternativesShape`.
3. Change `name` from optional to required on `LedgerShape` and `PriceDefinitionShape`.

**Alternatives Considered:**

1. **Extend name to ProfileAlternative/ProfileAlternatives and require it on key entities** ⭐ **SELECTED**
   - ✅ All user-facing selection entities have human-readable labels
   - ✅ Consistent naming requirement across key billing/pricing entities
   - ✅ Improves UI/document generation — every alternative and ledger has a display name
   - ✅ Uses the existing `name` property rather than introducing new properties

2. **Add name to ontology domain but keep optional in SHACL**
   - ✅ Non-breaking change
   - ❌ No guarantee that instances will have names for display
   - ❌ UIs and reports would need fallback logic for missing names

3. **Introduce separate label properties (e.g., alternativeLabel)**
   - ✅ No impact on existing name property
   - ❌ Proliferates naming properties unnecessarily
   - ❌ Inconsistent with the established `name` pattern used across the ontology

**Rationale:**
- `ProfileAlternative` and `ProfileAlternatives` are user-selection constructs — a name is essential for presenting choices
- `Ledger` and `PriceDefinition` are core billing/pricing entities that appear in reports and UIs — requiring a name ensures they are always identifiable
- The `name` property is the established pattern for human-readable labels across URPX; extending it is consistent with existing design

**Implementation Details:**
- Ontology: Added `urpx:ProfileAlternatives` and `urpx:ProfileAlternative` to the `owl:unionOf` domain of `urpx:name`
- SHACL: Added `name` property constraint (`sh:minCount 1`, `sh:maxCount 1`) to `ProfileAlternativeShape`
- SHACL: Added `name` property constraint (`sh:minCount 1`, `sh:maxCount 1`) to `ProfileAlternativesShape`
- SHACL: Changed `name` from `sh:minCount 0` to `sh:minCount 1` on `LedgerShape`
- SHACL: Changed `name` from `sh:minCount 0` to `sh:minCount 1` on `PriceDefinitionShape`

**Impact Assessment:**
- **Positive**: All key user-facing and billing entities guaranteed to have human-readable names
- **Breaking Change**: Yes — existing `Ledger`, `PriceDefinition`, `ProfileAlternative`, and `ProfileAlternatives` instances without a `name` value will fail SHACL validation

**References:**
- Related Decision: #049 (ProfileAlternative Architecture and Naming)
- Related Decision: #060 (SHACL Validation Shapes Introduction)

---

<a id="decision-079"></a>
### 🔗 Decision #079: referencesProfileAlternative Domain Extended to TOUSchedule and ServiceTier

- **Status:** ✅ Implemented
- **Date:** 2026-03-03
- **Issue:** Profile alternatives could only differentiate price sets and price definitions, not TOU schedules or service tiers
- **Category:** Ontology / Validation
- **Impact:** Low - Non-breaking domain extension and SHACL additions

**Context:**
The `urpx:referencesProfileAlternative` property had a domain restricted to `(urpx:PriceSetAlternative, urpx:PriceDefinition)`, meaning profile-based differentiation could only be applied to price structures. In practice, rate plans may offer alternative TOU schedules or service tier configurations based on the same profile dimensions (e.g., different TOU periods for different zone selections, or different tier structures for different service levels). Without extending the domain, these variations had to be modeled indirectly or duplicated across price sets.

Similarly, `PriceDefinition` needed the ability to reference a `ProfileAlternatives` container (the parent grouping), not just individual `ProfileAlternative` instances.

**Decision:**
1. Extend the ontology domain of `urpx:referencesProfileAlternative` to include `urpx:TOUSchedule` and `urpx:ServiceTier`.
2. Add optional `referencesProfileAlternative` SHACL constraints to `TOUScheduleShape` and `ServiceTierShape`.
3. Add optional `referencesProfileAlternatives` SHACL constraint to `PriceDefinitionShape`.

**Alternatives Considered:**

1. **Extend referencesProfileAlternative to TOUSchedule and ServiceTier** ⭐ **SELECTED**
   - ✅ Profile-based differentiation applies uniformly across the rate plan structure
   - ✅ TOU schedules and service tiers can vary by the same profile dimensions as prices
   - ✅ Non-breaking — optional property addition on existing shapes
   - ✅ Consistent with the architectural pattern of profile alternatives as a cross-cutting concern

2. **Keep domain restricted to PriceSetAlternative and PriceDefinition**
   - ✅ No changes required
   - ❌ Forces TOU and tier variations to be modeled through duplicated price sets
   - ❌ Profile alternatives cannot express that TOU schedules differ by zone or service level
   - ❌ Inconsistent — profiles influence prices but not the schedules and tiers that underpin them

3. **Create separate properties (e.g., touScheduleAlternative, serviceTierAlternative)**
   - ✅ Domain-specific naming
   - ❌ Proliferates properties for the same semantic concept
   - ❌ Breaks the unified profile alternatives pattern

**Rationale:**
- Profile alternatives represent customer-facing choices that can affect multiple aspects of a rate plan — not just prices, but also when rates apply (TOU) and how tiers are structured
- Extending the existing `referencesProfileAlternative` property maintains the unified pattern where a single `ProfileAlternatives` definition drives differentiation across all rate plan components
- Adding `referencesProfileAlternatives` on `PriceDefinitionShape` allows the price definition container to declare which alternatives group it participates in

**Implementation Details:**
- Ontology: Added `urpx:TOUSchedule` and `urpx:ServiceTier` to the `owl:unionOf` domain of `urpx:referencesProfileAlternative`
- SHACL: Added optional `referencesProfileAlternative` property constraint (`sh:minCount 0`, `sh:maxCount 1`) to `TOUScheduleShape`
- SHACL: Added optional `referencesProfileAlternative` property constraint (`sh:minCount 0`, `sh:maxCount 1`) to `ServiceTierShape`
- SHACL: Added optional `referencesProfileAlternatives` property constraint (`sh:minCount 0`, `sh:maxCount 1`) to `PriceDefinitionShape`

**Impact Assessment:**
- **Positive**: Unified profile-based differentiation across prices, TOU schedules, and service tiers
- **Breaking Change**: None — all additions are optional extensions

**References:**
- Related Decision: #049 (ProfileAlternative Architecture and Naming)
- Related Decision: #078 (name Property Extended to ProfileAlternative and ProfileAlternatives)

---

<a id="decision-080"></a>
### 🔗 Decision #080: Controlled Media Type Vocabulary for Data Sources

- **Status:** ✅ Implemented
- **Date:** 2026-03-18
- **Issue:** Data source media metadata normalization
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change; replaces free-text media types with controlled IRIs

**Context:**
`urpx:mediaType` was modeled as a free-text `xsd:string` on `DataSourceReference`. That made media types difficult to validate consistently and duplicated concerns already implicit in file-format-style `DataSourceTypeValue` instances. As URPX data source modeling became more explicit, media format needed to be represented as a controlled value separate from provenance origin.

**Decision:**
Convert `urpx:mediaType` from a datatype property to an object property with range `urpx:MediaTypeValue`, and define a controlled `MediaTypeValue` enumeration covering the supported IANA-aligned media types used by URPX data sources.

**Alternatives Considered:**

1. **Controlled `MediaTypeValue` Enumeration** ⭐ **SELECTED**
   - ✅ Enforces machine-validatable media type values
   - ✅ Separates file format from provenance/origin classification
   - ✅ Aligns ontology and SHACL validation semantics
   - ✅ Improves interoperability for JSON-LD and RDF consumers

2. **Keep `mediaType` as Free-Text String**
   - ✅ Simpler for manual authoring
   - ❌ Allows spelling drift and inconsistent casing
   - ❌ Cannot be constrained cleanly in SHACL
   - ❌ Overlaps with other source classification properties

**Rationale:**
- Media type is a bounded vocabulary problem, not an open-text field
- URPX already uses object-property enumerations for controlled values
- Separating media type from source origin makes both properties more precise
- Enumerated values support consistent citations, tooling, and downstream transformations

**Implementation Details:**
- Added `urpx:MediaTypeValue` as an enumeration class in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added 14 supported media type instances across `application/*`, `image/*`, and `text/*`
- Changed `urpx:mediaType` from `owl:DatatypeProperty` with `xsd:string` range to `owl:ObjectProperty` with `urpx:MediaTypeValue` range
- Added `urpx-shacl:MediaTypeValueShape` in `shacl/urpx-shacl.ttl`
- Updated `urpx-shacl:DataSourceReferenceShape` to validate `mediaType` with `sh:node` instead of `sh:datatype`

**Impact Assessment:**
- **Positive**: Consistent media type semantics, stronger validation, clearer separation of format vs. provenance
- **Breaking Change**: Yes - existing string literals for `mediaType` must migrate to `urpx:MediaTypeValue` IRIs
- **Requirements**: Data producers should map legacy string values to the new enumeration before validation

**References:**
- Commit: `d86f096`
- Related Decision: #052 (Structured Data Source Reference Architecture)
