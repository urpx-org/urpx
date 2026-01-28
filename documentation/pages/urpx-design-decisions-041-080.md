# URPX (Utility Rate Plan Exchange) Design Decisions Log (#041-#080)

**Version:** 1.0
**Created:** 2026-01-05
**Last Updated:** 2026-01-28

> **Note:** Design decisions reference the original modular ontology files (urpx-core-ontology.ttl, urpx-profile.ttl, urpx-organization.ttl, urpx-geography.ttl, urpx-charge-classification.ttl). As of v0.1.1, these files have been consolidated into a single `ontology/urpx-ontology.ttl` file. See [urpx-changelog.md](../../urpx-changelog.md) for consolidation details.

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

- ✅ [Decision #041: Ontology Syntax Validation and Duplicate Property Resolution](#decision-041)
- ✅ [Decision #042: Profile Ontology Enumeration Completeness](#decision-042)
- ✅ [Decision #043: Property Domain Migration to Profile Ontology](#decision-043)
- 📚 [Decision #044: CalculationMethod Class Removal](#decision-044)
- ✅ [Decision #045: PriceDefinition Architecture Clarification](#decision-045)
- ✅ [Decision #046: hasPrices Range Specification](#decision-046)
- ✅ [Decision #047: minimumTenure Property Addition](#decision-047)
- ✅ [Decision #048: ProfileMetric Architecture](#decision-048)
- ✅ [Decision #049: ProfileAlternative Architecture and Naming](#decision-049)
- ✅ [Decision #050: householdCount and baseQuantity Properties](#decision-050)
- ✅ [Decision #051: Time Interval Property Consolidation](#decision-051)
- ✅ [Decision #052: Structured Data Source Reference Architecture](#decision-052)
- 📋 [Decision #053: Removal of Misplaced Cardinality Constraints from Property Definitions](#decision-053)
- ✅ [Decision #054: Data Dictionary MECE Restructuring and Repetition Elimination](#decision-054)
 
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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)
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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)
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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)

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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)
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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)

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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)

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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)

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
- Epic: [`EPIC_0015.md`](v0.1.1/epics/epic_0015_profile_metric_architecture/EPIC_0015.md)
- Task: [`task_0001_core_ontology_updates.md`](v0.1.1/epics/epic_0015_profile_metric_architecture/task_0001_core_ontology_updates.md)
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
- `forProfileAlternative`: PriceSetAlternative → ProfileAlternative
- `forProfileAlternatives`: PriceSetAlternatives → ProfileAlternatives

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
- Task: [`task_0003_calculation_method_architecture.md`](v0.1.1/epics/epic_0015_profile_metric_architecture/task_0003_calculation_method_architecture.md)
- Epic: [`EPIC_0015.md`](v0.1.1/epics/epic_0015_profile_metric_architecture/EPIC_0015.md)
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
- Task: [`task_0005_household_count_base_quantity.md`](v0.1.1/epics/epic_0015_profile_metric_architecture/task_0005_household_count_base_quantity.md)
- Plan: [`plans/household-count-per-metric-architecture.md`](../../plans/household-count-per-metric-architecture.md)
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
- Task: [`task_0004_ontology_updates_from_review.md`](v0.1.1/epics/epic_0014_final_qa_release/task_0004_ontology_updates_from_review.md)

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
- Task: [`task_0002_refactor_data_source.md`](v0.1.1/epics/epic_0016_cleanup_and_consolidation/task_0002_refactor_data_source.md)
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
### 🔗 Decision #081: Data Dictionary MECE Restructuring and Repetition Elimination

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
- Epic: [`epic_0016_cleanup_and_consolidation/task_0004_documentation_updates_consolidated.md`](../../v0.1.1/epics/epic_0016_cleanup_and_consolidation/task_0004_documentation_updates_consolidated.md)
- Internal Planning Docs: [`plans/data-dictionary-mece-consolidation-plan.md`](../../plans/data-dictionary-mece-consolidation-plan.md)



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

<a id="decision-082"></a>
### 🔗 Decision #082: Embed Mermaid Diagrams in Documentation

- **Status:** ✅ Implemented
- **Date:** 2026-01-26
- **Issue:** Epic 0016 Task 0008 - Final Documentation Scan and Cleanup
- **Category:** Architecture (Documentation)
- **Impact:** Medium - Improves maintainability and reduces file clutter.

**Context:**
The previous documentation strategy relied on exporting Mermaid diagrams to external SVG files (`.svg`) and referencing them as images in Markdown pages. This created synchronization issues where the SVG would become out of date with the source `.mmd` file. Additionally, exporting SVGs required external CLI tools (mermaid-cli) which were not consistently available in the dev environment.

**Decision:**
Embed Mermaid diagram code directly into Markdown documentation pages using ` ```mermaid ` code blocks.

**Alternatives Considered:**

1.  **Embed Mermaid Code (Selected)** ⭐ **SELECTED**
    -   ✅ Single source of truth (the code is the diagram).
    -   ✅ Renders natively in GitHub and modern Markdown editors (VS Code).
    -   ✅ Eliminates build step (no need to run `mmdc`).
    -   ✅ Easier to edit and version control (text diffs vs binary/generated image diffs).

2.  **Keep External SVGs**
    -   ❌ Requires manual export step or CI/CD pipeline.
    -   ❌ SVGs can get out of sync with source.
    -   ❌ Requires separate file management.

**Rationale:**
Simplifying the documentation toolchain reduces friction for maintainers and contributors. Direct embedding ensures that what you see is always the current version of the diagram logic.

**Implementation Details:**
-   Updated `documentation/pages/urpx-diagram-index.md` to use embedded Mermaid blocks for active diagrams.
-   Removed references to external `.svg` files for these diagrams.
-   Draft/WIP diagrams were moved to `dev-documentation` and references kept as text pointers for future work.

**Impact Assessment:**
-   **Positive**: Reduced maintenance overhead, guaranteed consistency.
-   **Breaking Change**: None.
-   **Requirements**: Viewers must use a Markdown reader with Mermaid support (standard in GitHub/VS Code).

**References:**
-   Task: [`task_0008_final_documentation_scan.md`](../../dev-documentation/v0.1.1/epics/epic_0016_cleanup_and_consolidation/task_0008_final_documentation_scan.md)
