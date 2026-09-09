<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: W3C-20150513 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20150513 -->
<!-- Comment: Transitioned to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

---
site_category: advanced-topics
site_id: design-decisions-081-120
site_title: "Design Decisions 081–120"
site_label: "Decisions 081–120"
site_position: 5
---

# URPX (Utility Rate Plan Exchange) Design Decisions Log (#081-#120)

**Version:** 1.0
**Created:** 2026-04-07
**Last Updated:** 2026-05-07

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
- For decisions #001-#040, see [`urpx-design-decisions-001-040.md`](urpx-design-decisions-001-040.md)
- For decisions #041-#080, see [`urpx-design-decisions-041-080.md`](urpx-design-decisions-041-080.md)

---

## Purpose

This document logs design decisions #081-#120 made during URPX ontology development with rationale, alternatives considered, and impact assessment. Provides audit trail for architectural choices and standards alignment decisions.

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

- ✅ Decision #081: DataSourceTypeValue Provenance Refactor
- ✅ Decision #082: Enrollment Status Made Optional on ProgramEnrollment and PriorRatePlan
- ✅ Decision #083: Human-Readable Metadata Coverage Expansion and Core Name Requirements
- ✅ Decision #084: RatePlanVersion Modifier Options Relationship
- ✅ Decision #085: Closed SHACL Node Shape Hardening
- ✅ Decision #086: Organization, Authority, and System Operator Validation Expansion
- ✅ Decision #087: ServiceTiers Container Architecture
- ✅ Decision #088: DataSourceReference Provenance Metadata Expansion
- ✅ Decision #089: TariffBookReference and TariffStatementReference Nested Citation Classes
- ✅ Decision #090: Add Version-Level Modifier Reference Properties
- ✅ Decision #091: Date Property Normalization and Provenance Domain Expansion
- ✅ Decision #092: TariffStatementTypeValue Enum Instance Materialization
- ✅ Decision #093: BillingModel-Owned PriceDefinition with referencesLedger
- 📚 Decision #094: Condition Logic Modeling
- ✅ Decision #095: RateCase Traceability for Regulated Proceeding Links
- ✅ Decision #096: Parallel dateTime Provenance Properties for Core date Fields
- ✅ Decision #097: ConditionExpression Wrapper and Rooted Rule Graph
- ✅ Decision #098: Operand Node Specialization and Typed Value Properties for Condition Expressions
- ✅ Decision #099: GeneralRule Tariff-Book Shared Rule Architecture
- ✅ Decision #100: RatePlanVersion Enrollment Choice and Default Selection Semantics
- ✅ Decision #101: Compatibility Relationship Domain Expansion for Rate Plans and Versions
- ✅ Decision #102: Profile Count Terminology Normalization and Threshold Cleanup
- ✅ Decision #103: Unique Identifier Normalization and Required Document Target Version Metadata
- ✅ Decision #104: Structured ConditionExpression Consolidation and Scenario-Owned Eligibility Inputs
- ✅ Decision #105: SHACL Enforcement of Structured Eligibility and Minimum Scenario Inputs
- ✅ Decision #106: PriorRatePlan ServiceRole Coverage
- ✅ Decision #107: AlternativeDimension Fallback Custom Property Identifier
- ✅ Decision #108: Moderate Income Program Type Enumeration Expansion
- ✅ Decision #109: Applicability Selectors Consolidated onto Profile Properties
- ✅ Decision #110: Seasonal ServiceTiers and Flexible Open-Ended Tier Bounds
- ✅ Decision #111: ServiceBracket Boundary Model for Contextual Tier Variants

---

## How to Add New Decisions

1. Use the Decision Template at the beginning of this document
2. Assign the next sequential decision number (starting from #081)
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

<a id="decision-081"></a>
### 🔗 Decision #081: DataSourceTypeValue Provenance Refactor

- **Status:** ✅ Implemented
- **Date:** 2026-03-18
- **Issue:** Data source provenance classification ambiguity
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change; redefines source type around provenance origin instead of file format

**Context:**
`DataSourceTypeValue` originally mixed provenance concepts (`apiSource`, `databaseSource`, `manualSource`) with file-format concepts (`csvSource`, `jsonSource`, `pdfSource`, `spreadsheetSource`, `xmlSource`). Once media format was elevated into its own controlled property (Decision #080), the remaining file-type values no longer represented the purpose of `dataSourceType`.

**Decision:**
Refactor `DataSourceTypeValue` to capture source origin rather than file format. Remove file-format values and replace them with origin-oriented website provenance values.

**Alternatives Considered:**

1. **Origin-Based Provenance Classification** ⭐ **SELECTED**
   - ✅ Keeps `dataSourceType` focused on where data came from
   - ✅ Works cleanly with the new `mediaType` controlled vocabulary
   - ✅ Produces more meaningful provenance metadata for audits and citations
   - ✅ Preserves the existing object-property enumeration pattern

2. **Retain File-Format-Based Values**
   - ✅ Avoids data migration
   - ❌ Confuses source origin with serialization format
   - ❌ Duplicates information now captured by `mediaType`
   - ❌ Reduces the value of provenance queries and validation

**Rationale:**
- Provenance origin and media format are different modeling concerns
- URPX source metadata is more useful when it distinguishes APIs, databases, manual entry, utility websites, and regulatory websites
- Keeping `dataSourceType` focused on origin makes validation and downstream interpretation clearer
- The refactor avoids maintaining two overlapping ways to say "this came from a PDF" or "this was JSON"

**Implementation Details:**
- Removed `urpx:csvSource`, `urpx:jsonSource`, `urpx:pdfSource`, `urpx:spreadsheetSource`, and `urpx:xmlSource` from `urpx:DataSourceTypeValue`
- Added `urpx:utilityWebsiteSource` and `urpx:regulatoryWebsiteSource`
- Updated the `owl:oneOf` definition for `urpx:DataSourceTypeValue` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Updated `urpx-shacl:DataSourceTypeValueShape` in `shacl/urpx-shacl.ttl` to enforce the revised enumeration

**Impact Assessment:**
- **Positive**: Cleaner provenance semantics, less duplication with media type, clearer querying and validation
- **Breaking Change**: Yes - datasets using legacy file-format source values must migrate to the new origin-based values
- **Requirements**: Producers should populate `mediaType` alongside `dataSourceType` when format information still matters

**References:**
- Commit: `d86f096`
- Related Decision: #080 (Controlled Media Type Vocabulary for Data Sources)

---

<a id="decision-082"></a>
### 🔗 Decision #082: Enrollment Status Made Optional on ProgramEnrollment and PriorRatePlan

- **Status:** ✅ Implemented
- **Date:** 2026-03-18
- **Issue:** Historical and partial enrollment records could not validate without a status value
- **Category:** Validation
- **Impact:** Low - Non-breaking relaxation of SHACL requirements

**Context:**
`ProgramEnrollmentShape` and `PriorRatePlanShape` required `enrollmentStatus`, even when the data was being used to represent available or applicable programs and prior rate plan relationships on a `RatePlan` or `RatePlanModifier`, not a customer-specific scenario. In those contexts, a present-tense enrollment status is not knowable or appropriate, because status only becomes meaningful within a customer scenario model.

**Decision:**
Make `urpx:enrollmentStatus` optional on both `ProgramEnrollmentShape` and `PriorRatePlanShape`.

**Alternatives Considered:**

1. **Make `enrollmentStatus` Optional** ⭐ **SELECTED**
   - ✅ Accepts partial but still useful enrollment records
   - ✅ Supports historical and transition data imports
   - ✅ Avoids forcing guessed status values

2. **Keep `enrollmentStatus` Required**
   - ✅ Preserves a stricter validation contract
   - ❌ Rejects otherwise valid enrollment history
   - ❌ Encourages placeholder or inaccurate status values

**Rationale:**
- Missing status is often a data availability issue, not a modeling error
- `enrollmentStatus` can only be meaningfully required in a customer scenario model
- Available or applicable programs and prior-rate plan references on a rate artifact should not be forced to imply a customer's current status
- Prior-plan references are still useful without a normalized enrollment status
- Relaxing the constraint improves interoperability with real-world utility source data
- Optional status is more honest than requiring synthetic default values

**Implementation Details:**
- Changed `sh:minCount` from `1` to `0` for `urpx:enrollmentStatus` on `urpx-shacl:ProgramEnrollmentShape`
- Changed `sh:minCount` from `1` to `0` for `urpx:enrollmentStatus` on `urpx-shacl:PriorRatePlanShape`
- Left the ontology property definition unchanged, since the decision is about validation cardinality rather than ontology semantics

**Impact Assessment:**
- **Positive**: Better support for incomplete, historical, and migrated enrollment data
- **Breaking Change**: None - validation is relaxed rather than tightened
- **Requirements**: Producers should still include `enrollmentStatus` whenever authoritative status data is available

**References:**
- Commit: `d86f096`

---

<a id="decision-083"></a>
### 🔗 Decision #083: Human-Readable Metadata Coverage Expansion and Core Name Requirements

- **Status:** ✅ Implemented
- **Date:** 2026-03-23
- **Issue:** User-facing entities lacked consistent naming and descriptive metadata
- **Category:** Naming Convention, Validation
- **Impact:** Medium - Mixed additive and breaking changes; expands metadata domains and requires names on core entities

**Context:**
Several URPX classes had become user-facing or documentation-facing without being covered by the shared metadata properties already used elsewhere in the ontology. `PriceSummary`, `DataSourceReference`, `EligibilityRule`, `TOUSchedule`, `ServiceTier`, `ApplicabilityRule`, `ApplicabilityGroup`, and `PriceUpdateRule` all benefit from human-readable names. `DataSourceReference` and `PriceUpdateRule` also needed descriptive text, and `ProgramEnrollment` needed URL support. At the same time, core published entities like `RatePlan`, `RatePlanModifier`, `TariffPublication`, and `TOUPeriod` still allowed missing names in SHACL.

**Decision:**
Expand shared metadata property domains and align SHACL cardinalities so that user-facing classes can carry `name`, `description`, and `url`, while requiring `name` on core rate plan publication entities.

**Alternatives Considered:**

1. **Extend Shared Metadata Properties and Tighten Core Name Requirements** ⭐ **SELECTED**
   - ✅ Reuses existing URPX metadata properties instead of creating one-off labels
   - ✅ Gives user-facing entities standardized display fields
   - ✅ Ensures core published entities always have human-readable names
   - ✅ Keeps metadata conventions consistent across the graph

2. **Create Class-Specific Label and Description Properties**
   - ✅ Allows fine-grained tailoring by class
   - ❌ Proliferates redundant metadata properties
   - ❌ Makes tooling and UI logic more complex
   - ❌ Breaks the existing shared-property pattern

**Rationale:**
- `name`, `description`, and `url` are already the established URPX metadata primitives
- Shared metadata properties simplify UI generation, documentation, and generic tooling
- Requiring names on core top-level entities avoids unlabeled rate plans and publications
- Optional metadata on supporting entities preserves flexibility while still standardizing the field names

**Implementation Details:**
- Extended the domain of `urpx:name` to include `PriceSummary`, `DataSourceReference`, `EligibilityRule`, `TOUSchedule`, `ServiceTier`, `ApplicabilityRule`, `ApplicabilityGroup`, and `PriceUpdateRule`
- Extended the domain of `urpx:description` to include `DataSourceReference` and `PriceUpdateRule`
- Extended the domain of `urpx:url` to include `ProgramEnrollment`
- Added or expanded `name` property blocks in supporting shapes such as `DataSourceReferenceShape`, `EligibilityRuleShape`, `TOUScheduleShape`, `ServiceTierShape`, `ApplicabilityRuleShape`, `ApplicabilityGroupShape`, `PriceSummaryShape`, and `PriceUpdateRuleShape`
- Changed `name` to required (`sh:minCount 1`) on `RatePlanShape`, `RatePlanModifierShape`, `TariffPublicationShape`, and `TOUPeriodShape`

**Impact Assessment:**
- **Positive**: Better display metadata, clearer documentation support, and stronger guarantees that core published entities are named
- **Breaking Change**: Yes - core entities without `name` values now fail SHACL validation
- **Requirements**: Producers should populate `name` on all top-level rate plan and publication entities, and may now add optional names/descriptions/URLs to the newly covered classes

**References:**
- Commits: `d86f096`, `4589ca5`, `57e2608`
- Related Decision: #078 (name Property Extended to ProfileAlternative and ProfileAlternatives; Made Required on Key Entities)

---

<a id="decision-084"></a>
### 🔗 Decision #084: RatePlanVersion Modifier Options Relationship

- **Status:** ✅ Implemented
- **Date:** 2026-03-20
- **Issue:** Rate plan versions lacked an explicit link to optional modifier choices
- **Category:** Architecture
- **Impact:** Low - Additive ontology and SHACL enhancement for modifier discovery

**Context:**
URPX already modeled `RatePlanModifier` and `RatePlanModifierVersion`, but there was no direct relationship from `RatePlanVersion` to the modifier options available for that version. Consumers could infer the relationship indirectly in some cases, but not through a single explicit, queryable property.

**Decision:**
Add `urpx:hasModifierOptions` as an object property linking `RatePlanVersion` to `RatePlanModifier`, and validate it on `RatePlanVersionShape`.

**Alternatives Considered:**

1. **Add Explicit Modifier-Options Relationship** ⭐ **SELECTED**
   - ✅ Makes modifier discovery straightforward for clients and queries
   - ✅ Distinguishes available options from other modifier relationships
   - ✅ Fits the URPX `has*` object-property naming pattern

2. **Rely on Existing Indirect Relationships**
   - ✅ Avoids a new property
   - ❌ Requires inference or application-specific logic
   - ❌ Makes version-level option discovery harder

**Rationale:**
- Version-specific optional modifiers are a first-class concept in the rate plan model
- Explicit graph edges are easier to query, validate, and explain than inferred relationships
- The new property improves discoverability without changing existing modifier semantics

**Implementation Details:**
- Added `urpx:hasModifierOptions` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl) with domain `RatePlanVersion` and range `RatePlanModifier`
- Added an optional `hasModifierOptions` property block to `urpx-shacl:RatePlanVersionShape`
- Left existing `hasRatePlanModifier` and version containment relationships intact

**Impact Assessment:**
- **Positive**: Clearer modifier discovery and cleaner version-level querying
- **Breaking Change**: None - the change is additive
- **Requirements**: Producers should populate `hasModifierOptions` when a rate plan version exposes optional modifiers

**References:**
- Commit: `4589ca5`

---

<a id="decision-085"></a>
### 🔗 Decision #085: Closed SHACL Node Shape Hardening

- **Status:** ✅ Implemented
- **Date:** 2026-03-20
- **Issue:** Open SHACL shapes allowed undeclared properties and silent typo drift
- **Category:** Validation
- **Impact:** High - Tightens validation across the data model by rejecting undeclared properties

**Context:**
Many SHACL node shapes in URPX were open, which meant data could include misspelled or unintended properties and still pass validation as long as required fields were present. That weakened SHACL's role as a strict conformance contract for real URPX instance data.

**Decision:**
Add `sh:closed true` and `sh:ignoredProperties ( rdf:type )` broadly across the existing SHACL node-shape set, so each shape explicitly enumerates its allowed properties while still permitting `rdf:type`.

**Alternatives Considered:**

1. **Close Existing Node Shapes and Ignore `rdf:type`** ⭐ **SELECTED**
   - ✅ Rejects typos and undeclared extensions early
   - ✅ Forces each shape to document its permitted surface area
   - ✅ Keeps `rdf:type` triples valid without extra noise

2. **Leave Shapes Open by Default**
   - ✅ More permissive for ad hoc extensions
   - ❌ Misses common data-quality errors
   - ❌ Makes the validation contract less precise
   - ❌ Undercuts URPX's value as a single central exchange model by normalizing schema drift through ad hoc extensions

**Rationale:**
- SHACL is most valuable when it clearly defines the allowed shape of data
- Closed shapes make accidental schema drift visible immediately
- Ignoring `rdf:type` is the standard way to keep closed shapes practical in RDF graphs
- URPX is intended to be a single central model for exchange, not a loose base schema that encourages ad hoc local extensions
- The stricter contract supports higher-confidence test fixtures and downstream integrations

**Implementation Details:**
- Added `sh:closed true` and `sh:ignoredProperties ( rdf:type )` broadly across existing node shapes
- Applied the pattern across account, applicability, billing, customer/profile, pricing, rule, and temporal shapes
- Updated each closed shape to enumerate all allowed properties explicitly in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: Stronger data quality enforcement and clearer validation contracts
- **Breaking Change**: Yes - undeclared properties that previously slipped through validation now produce SHACL violations
- **Requirements**: Producers must remove or formally model any custom properties before validating against the canonical URPX SHACL file

**References:**
- Commit: `4589ca5`
- Related Decision: #060 (SHACL Validation Shapes Introduction)

---

<a id="decision-086"></a>
### 🔗 Decision #086: Organization, Authority, and System Operator Validation Expansion

- **Status:** ✅ Implemented
- **Date:** 2026-03-20
- **Issue:** Organization subtype validation was too sparse for service providers, authorities, and operators
- **Category:** Validation
- **Impact:** Medium - Strengthens organization-related validation and introduces subtype-specific coverage

**Context:**
`EnergyServiceProviderShape` previously validated little beyond `serviceRole`, leaving most organization metadata unvalidated. `RegulatoryAuthorityShape` was similarly narrow, and `SystemOperator` lacked a dedicated SHACL shape. At the same time, `OrganizationNameShape` needed to validate the existing `nameType` property added in an earlier ontology decision.

**Decision:**
Expand organization-subtype validation so that energy service providers, regulatory authorities, and system operators all validate the richer metadata already supported by the ontology, and align `OrganizationNameShape` with the existing `nameType` property.

**Alternatives Considered:**

1. **Add Richer Subtype-Specific Validation** ⭐ **SELECTED**
   - ✅ Validates organization metadata that already exists in the ontology
   - ✅ Improves consistency across provider, authority, and operator shapes
   - ✅ Makes organization records more useful for discovery and publication workflows

2. **Keep Minimal Organization Subtype Shapes**
   - ✅ Smaller validation surface
   - ❌ Leaves important organization metadata effectively unchecked
   - ❌ Produces inconsistent validation depth across related organization classes

**Rationale:**
- Energy providers, regulators, and operators are central entities in the URPX ecosystem
- Their metadata should be validated with the same seriousness as rate and pricing entities
- Dedicated subtype shapes provide clearer guidance than relying on generic organization assumptions
- Aligning SHACL with the existing `nameType` ontology property removes a validation gap

**Implementation Details:**
- Expanded `urpx-shacl:EnergyServiceProviderShape` to validate `alternateName`, `commodity`, `hasIdentity`, `hasLocationDataSet`, `legalName`, `operatesIn`, `organizationType`, `publishes`, and `serviceRole`
- Expanded `urpx-shacl:RegulatoryAuthorityShape` to validate broader organization metadata and publication/jurisdiction relationships
- Added `urpx-shacl:SystemOperatorShape` as a dedicated node shape
- Added `nameType` validation to `urpx-shacl:OrganizationNameShape`

**Impact Assessment:**
- **Positive**: Richer organization records, more complete authority/operator validation, and better alignment with ontology capabilities
- **Breaking Change**: Yes - stricter organization-shape validation may surface previously unvalidated data issues
- **Requirements**: Producers should populate `organizationType` consistently and add subtype metadata where available

**References:**
- Commit: `4589ca5`
- Related Decision: #070 (nameType Property Creation for Organization Name Classification)

---

<a id="decision-087"></a>
### 🔗 Decision #087: ServiceTiers Container Architecture

- **Status:** ✅ Implemented
- **Date:** 2026-03-24
- **Issue:** Flat service-tier modeling could not express multiple tier groups tied to different metric inputs within one billing model
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change; inserts a new structural layer between `BillingModel` and `ServiceTier`

**Context:**
URPX originally linked `BillingModel` directly to `ServiceTier` through `hasServiceTier`, while the `ServiceTier` instance itself carried `referencesMetricInput` and `referencesProfileAlternative`. That flat structure worked for simple tiered rates but could not represent a billing model containing multiple independent groups of tiers, each tied to a different metric input or profile alternative.

**Decision:**
Introduce `urpx:ServiceTiers` as a container class between `BillingModel` and individual `ServiceTier` instances, and move tier-group-level references onto the new container.

**Alternatives Considered:**

1. **Add `ServiceTiers` Container Layer** ⭐ **SELECTED**
   - ✅ Supports multiple independent tier groups within one billing model
   - ✅ Places metric/profile references at the correct grouping level
   - ✅ Preserves individual `ServiceTier` instances as simple numeric bounds
   - ✅ Aligns SHACL with the new hierarchy

2. **Keep Flat `BillingModel` -> `ServiceTier` Structure**
   - ✅ Simpler graph shape for basic cases
   - ❌ Cannot represent multiple metric-specific tier groups cleanly
   - ❌ Forces grouping semantics onto individual tiers
   - ❌ Makes complex tiered pricing hard to validate

**Rationale:**
- Tier-group metadata belongs to the group, not to each individual tier row
- The extra container enables richer pricing models without duplicating billing models
- Separating grouping semantics from tier boundaries improves clarity and reuse
- The architecture matches how consumers naturally reason about tier sets

**Implementation Details:**
- Added `urpx:ServiceTiers` and `urpx:hasServiceTiers` to [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Changed the domain of `urpx:hasServiceTier` from `BillingModel` to `ServiceTiers`
- Moved the domains of `urpx:referencesMetricInput` and `urpx:referencesProfileAlternative` from `ServiceTier` to `ServiceTiers`
- Added `urpx-shacl:ServiceTiersShape` and updated `BillingModelShape`, `ServiceTierShape`, and related pricing shapes in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: Supports complex tiered pricing patterns and cleaner grouping semantics
- **Breaking Change**: Yes - existing data must nest tier rows under `ServiceTiers` containers instead of attaching them directly to `BillingModel`
- **Requirements**: Producers must move metric/profile references from individual `ServiceTier` instances onto the containing `ServiceTiers` node

**References:**
- Commits: `4589ca5`, `73f810b`
- Related Decision: #079 (referencesProfileAlternative Domain Extended to TOUSchedule and ServiceTier)

---

<a id="decision-088"></a>
### 🔗 Decision #088: DataSourceReference Provenance Metadata Expansion

- **Status:** ✅ Implemented
- **Date:** 2026-04-06
- **Issue:** `DataSourceReference` lacked sufficient provenance, access, and pagination metadata
- **Category:** Architecture, Validation
- **Impact:** Medium - Additive provenance model expansion for source documentation

**Context:**
`DataSourceReference` captured only a limited subset of source metadata. That made it difficult to record where data was actually retrieved from, when it was accessed, when the source last changed, and which pages within a document were relevant. It also limited provenance fidelity for alternative-specific price data.

**Decision:**
Expand `DataSourceReference` so it can carry retrieval provenance, publication/effective metadata, and document page spans directly, while allowing `PriceSetAlternative` to attach its own source references.

**Alternatives Considered:**

1. **Expand `DataSourceReference` Directly** ⭐ **SELECTED**
   - ✅ Keeps provenance metadata close to the citation it describes
   - ✅ Avoids introducing another indirection layer for common source fields
   - ✅ Preserves the existing `DataSourceReference` architecture while making it more useful

2. **Create a Separate Provenance Companion Class**
   - ✅ More modular provenance modeling
   - ❌ Adds extra traversal for every common citation
   - ❌ Increases complexity for routine source documentation
   - ❌ Splits closely related citation metadata across nodes

**Rationale:**
- Provenance metadata is most valuable when attached directly to the cited source record
- Distinguishing canonical URL from retrieval URL is important for auditability
- Page numbers belong on the general source reference, while tariff leaf numbers belong on specialized nested references
- Alternative-specific price structures need the same citation capabilities as base price sets

**Implementation Details:**
- Added `urpx:accessURL`, `urpx:dateRetrieved`, `urpx:dateModified`, `urpx:pageStart`, and `urpx:pageEnd` to [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Extended `approvalDate`, `datePublished`, `effectiveDate`, `effectiveDateTime`, `expirationDate`, and `expirationDateTime` to include `DataSourceReference` in their domains
- Extended the domain of `urpx:hasDataSourceReference` to include `PriceSetAlternative`
- Expanded `urpx-shacl:DataSourceReferenceShape` in `shacl/urpx-shacl.ttl` to validate the new provenance and pagination fields

**Impact Assessment:**
- **Positive**: Richer provenance, better audit trails, and more precise document citations
- **Breaking Change**: None - the changes are additive
- **Requirements**: Producers should distinguish canonical `url` from `accessURL`, and use `pageStart`/`pageEnd` only for document page numbers

**References:**
- Note: [`ontology/2026-04-06-ontology-updates.md`](../../ontology/2026-04-06-ontology-updates.md)
- Related Decision: #052 (Structured Data Source Reference Architecture)

---

<a id="decision-089"></a>
### 🔗 Decision #089: TariffBookReference and TariffStatementReference Nested Citation Classes

- **Status:** ✅ Implemented (superseded by Decision #128, 2026-07-25)
- **Date:** 2026-04-06
- **Issue:** Tariff book and tariff statement citations were modeled as opaque strings without structured location metadata
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change; replaces direct string references with nested citation objects

**Context:**
`urpx:tariffBookReference` and `urpx:tariffStatementReference` were modeled as datatype properties on pricing classes. That string-based pattern could not capture structured PDF anchors, tariff leaf numbers, or statement-type classification, and it duplicated provenance fields that belong on `DataSourceReference`.

**Decision:**
Promote tariff book and tariff statement references to dedicated nested classes under `DataSourceReference` via `urpx:hasTariffBookReference` and `urpx:hasTariffStatementReference`.

**Alternatives Considered:**

1. **Use Nested Tariff Reference Nodes** ⭐ **SELECTED**
   - ✅ Supports structured anchors, leaf numbering, and statement-type classification
   - ✅ Keeps provenance metadata on `DataSourceReference` while modeling citation specifics separately
   - ✅ Enables SHACL validation of citation structure for both reference types

2. **Keep Tariff References as Strings**
   - ✅ Simpler to author manually
   - ❌ Cannot validate internal structure
   - ❌ Blends document provenance with in-document location details
   - ❌ Makes citations hard to query or reuse

**Rationale:**
- Tariff book and tariff statement citations have internal structure that should be modeled explicitly
- Page-level provenance and tariff-leaf location are related but not identical concerns
- Nested reference nodes make URPX citations more queryable and auditable
- Structured citations are easier to extend than opaque strings

**Implementation Details:**
- Added `urpx:TariffBookReference` and `urpx:hasTariffBookReference` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:TariffStatementReference` and `urpx:hasTariffStatementReference` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:anchorLink`, `urpx:leafStart`, and `urpx:leafEnd` for structured tariff book positioning
- Extended the domains of `urpx:anchorLink`, `urpx:leafStart`, and `urpx:leafEnd` to include `TariffStatementReference`
- Extended the domain of `urpx:description` to include `TariffBookReference`
- Extended the domain of `urpx:tariffStatementType` to include `TariffStatementReference`
- Removed the old `urpx:tariffBookReference` datatype property
- Removed the old `urpx:tariffStatementReference` datatype property
- Added `urpx-shacl:TariffBookReferenceShape` and `urpx-shacl:TariffStatementReferenceShape`
- Added `hasTariffStatementReference` to `DataSourceReferenceShape`
- Removed direct `tariffBookReference` and `tariffStatementReference` string constraints from `PriceShape`, `PriceDefinitionShape`, `PriceSetShape`, and `PriceSetAlternativeShape`

**Impact Assessment:**
- **Positive**: Structured tariff citations, better provenance separation, cleaner filing classification, and improved validation
- **Breaking Change**: Yes - direct string-valued `tariffBookReference` and `tariffStatementReference` data must migrate to nested reference nodes
- **Requirements**: Producers should place canonical and retrieval metadata on `DataSourceReference`, and use nested tariff reference nodes only for in-document citation details

**References:**
- Note: [`ontology/2026-04-06-ontology-updates.md`](../../ontology/2026-04-06-ontology-updates.md)
- Related Decision: #088 (DataSourceReference Provenance Metadata Expansion)

---

<a id="decision-090"></a>
### 🔗 Decision #090: Add Version-Level Modifier Reference Properties

- **Status:** ✅ Implemented
- **Date:** 2026-04-07
- **Issue:** Version-scoped modifier compatibility could not be expressed precisely
- **Category:** Architecture, Validation
- **Impact:** Low - Additive, non-breaking enhancement for version-level compatibility modeling

**Context:**
The ontology already supported modifier relationships at the document level:
- `urpx:hasModifierOptions` links `RatePlanVersion` to `RatePlanModifier`
- `urpx:applicableToRatePlan` links `RatePlanModifierVersion` to `RatePlan`

Those relationships do not allow precise scoping at the version level. As URPX models temporal versioning more explicitly, there is a need to express compatibility and applicability between specific `RatePlanVersion` and `RatePlanModifierVersion` instances, not just between their parent documents.

**Decision:**
Add two new object properties for version-scoped modifier relationships:

1. `urpx:hasModifierVersionOptions`
   - Domain: `urpx:RatePlanVersion`
   - Range: `urpx:RatePlanModifierVersion`
   - Semantics: Defines which modifier versions are valid options for a given rate plan version

2. `urpx:applicableToRatePlanVersion`
   - Domain: `urpx:RatePlanModifierVersion`
   - Range: `urpx:RatePlanVersion`
   - Semantics: Defines which rate plan versions a modifier version may be applied to

These properties mirror the structure and cardinality of their document-level counterparts.

**Alternatives Considered:**

1. **Add Parallel Version-Level Properties** ⭐ **SELECTED**
   - ✅ Enables precise version-to-version compatibility modeling
   - ✅ Preserves the existing document-level properties for document-scoped relationships
   - ✅ Follows established URPX design patterns by introducing parallel version-level properties
   - ✅ Supports temporal evaluation and future compute workflows where version alignment matters

2. **Reuse Existing Document-Level Properties for Version-Level Semantics**
   - ✅ Avoids adding new properties
   - ❌ Overloads document-level relationships with version-level meaning
   - ❌ Creates ambiguity about whether compatibility applies to the whole document or a specific version
   - ❌ Makes temporal and scenario evaluation less precise

**Rationale:**
- Precise version-to-version compatibility is required for temporal accuracy and correct evaluation of rate plans
- Parallel version-level properties are more consistent than overloading document-level ones with additional implied semantics
- Future compute graph execution and scenario evaluation depend on aligning specific rate plan versions with specific modifier versions
- The new properties avoid ambiguity where a modifier document is broadly applicable but only certain modifier versions are valid for a particular rate plan version

**Implementation Details:**
- Added `urpx:hasModifierVersionOptions` with domain `RatePlanVersion` and range `RatePlanModifierVersion` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:applicableToRatePlanVersion` with domain `RatePlanModifierVersion` and range `RatePlanVersion` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Extended `urpx-shacl:RatePlanVersionShape` with an optional `hasModifierVersionOptions` property block in `shacl/urpx-shacl.ttl`
- Extended `urpx-shacl:RatePlanModifierVersionShape` with an optional `applicableToRatePlanVersion` property block in `shacl/urpx-shacl.ttl`
- Kept the SHACL cardinality pattern aligned with the document-level counterparts by using optional repeatable compatibility links

**Impact Assessment:**
- **Positive**: More precise version compatibility, clearer temporal semantics, and better support for future evaluation workflows
- **Breaking Change**: None - this is an additive enhancement
- **Requirements**: Producers may continue using document-level relationships, but should use the new version-level properties when compatibility depends on specific `RatePlanVersion` and `RatePlanModifierVersion` pairings

**References:**
- File: [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- File: `shacl/urpx-shacl.ttl`
- Related Decision: #084 (RatePlanVersion Modifier Options Relationship)

---

<a id="decision-091"></a>
### 🔗 Decision #091: Date Property Normalization and Provenance Domain Expansion

- **Status:** ✅ Implemented
- **Date:** 2026-04-10
- **Issue:** Date property naming inconsistency; provenance metadata gaps across reference and version classes
- **Category:** Naming Convention, Architecture
- **Impact:** Medium - Renames one property (breaking), adds two new properties, expands domains for five existing properties

**Context:**
The ontology had an inconsistent naming pattern: most date properties used a `date`-prefixed convention (`datePublished`, `dateModified`, `dateRetrieved`) while `approvalDate` used the reverse pattern. Additionally, several provenance-related properties (`anchorLink`, `pageStart`, `pageEnd`, `dateModified`, `datePublished`) had narrower domains than needed — nested citation classes like `TariffBookReference` and `TariffStatementReference` lacked direct access to pagination and date metadata, and rate plan document classes lacked publication dates.

Two common date concepts — creation date and receipt date — had no dedicated properties, forcing producers to overload `datePublished` or `dateModified` for these distinct semantics.

**Decision:**
1. Rename `approvalDate` → `dateApproved` for naming consistency.
2. Add `dateCreated` (xsd:date) and `dateReceived` (xsd:date) as new properties with appropriate domains.
3. Expand domains of `dateModified`, `datePublished`, `anchorLink`, `pageStart`, `pageEnd`, and `hasDataSourceReference` to cover the full set of classes that logically carry this metadata.

**Alternatives Considered:**

1. **Normalize Naming + Expand Domains Together** ⭐ **SELECTED**
   - ✅ Single coherent change that addresses naming and coverage in one pass
   - ✅ Consistent `date`-prefixed convention across all temporal properties
   - ✅ Eliminates semantic overloading of existing date properties
   - ❌ Breaking rename of `approvalDate`

2. **Keep `approvalDate`, Only Add New Properties**
   - ✅ Non-breaking for existing producers
   - ❌ Perpetuates naming inconsistency
   - ❌ Harder to document and remember which properties use which convention

3. **Deprecate `approvalDate` Instead of Removing**
   - ✅ Backwards compatible
   - ❌ Two properties meaning the same thing creates ambiguity
   - ❌ URPX is pre-1.0; clean renames are expected

**Rationale:**
- Pre-1.0 ontology allows breaking renames without deprecation ceremony
- Consistent `date`-prefixed naming reduces cognitive load for producers and consumers
- Separate `dateCreated` and `dateReceived` properties eliminate ambiguity vs. `datePublished`
- Expanding provenance domains to nested citation classes supports page-level and section-level citation metadata without routing through the parent `DataSourceReference`

**Implementation Details:**
- Removed `urpx:approvalDate`; added `urpx:dateApproved` with expanded domain in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:dateCreated` and `urpx:dateReceived` with broad provenance-oriented domains
- Extended `dateModified` domain to `TariffBookReference`, `TariffStatementReference`, `TariffPublication`
- Extended `datePublished` domain to `RatePlan`, `RatePlanModifier`, `RatePlanVersion`, `RatePlanModifierVersion`, `TariffBookReference`, `TariffStatementReference`
- Extended `anchorLink` domain to include `DataSourceReference`
- Extended `pageStart`/`pageEnd` domains to `TariffBookReference`, `TariffStatementReference`
- Extended `hasDataSourceReference` domain to `TariffPublication`, `TariffStatementDocument`
- SHACL shapes updated to match all domain changes

**Impact Assessment:**
- **Positive**: Consistent naming, comprehensive provenance metadata, elimination of semantic overloading
- **Breaking Change**: `approvalDate` → `dateApproved` rename requires producer/consumer updates
- **Requirements**: Existing data using `approvalDate` must be migrated to `dateApproved`

**References:**
- File: [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- File: `shacl/urpx-shacl.ttl`
- Related Decision: #088 (DataSourceReference Provenance Metadata Expansion)
- Related Decision: #089 (TariffBookReference and TariffStatementReference Nested Citation Classes)

---

<a id="decision-092"></a>
### 🔗 Decision #092: TariffStatementTypeValue Enum Instance Materialization

- **Status:** ✅ Implemented
- **Date:** 2026-04-10
- **Issue:** `TariffStatementTypeValue` class defined enum members in `owl:oneOf` but lacked individual instance definitions
- **Category:** Validation, Architecture
- **Impact:** Low - Additive, non-breaking; brings enum into alignment with all other Value classes

**Context:**
All other enumeration classes in the ontology (e.g., `TaxExemptStatusValue`, `SpecialNeedsStatusValue`, `DataSourceTypeValue`) had both an `owl:oneOf` declaration on the class and individual instance triples with `rdf:type`, `rdfs:label`, `skos:definition`, and `skos:prefLabel`. `TariffStatementTypeValue` had the class declaration but was missing the individual definitions. This meant SHACL validation via `sh:in` worked (matching IRIs), but consumers lacked human-readable labels and definitions for these enum values.

**Decision:**
Materialize individual instance definitions for all `TariffStatementTypeValue` members following the established enum pattern: `rdf:type`, `rdfs:label`, `skos:definition`, `skos:prefLabel`.

**Alternatives Considered:**

1. **Add Individual Definitions Following Existing Pattern** ⭐ **SELECTED**
   - ✅ Consistent with all other 58 enum value classes
   - ✅ Provides human-readable labels and definitions for tooling and documentation
   - ✅ No impact on existing SHACL validation

2. **Leave as IRI-Only Enum Members**
   - ✅ No changes needed
   - ❌ Inconsistent with every other enum in the ontology
   - ❌ Consumers cannot discover labels or definitions via standard SPARQL

**Rationale:**
- Consistency across all enum value classes is a core URPX design principle
- Human-readable metadata on enum instances supports documentation generation and UI tooling
- The SHACL `TariffStatementTypeValueShape` already expected these IRIs to exist

**Implementation Details:**
- Added individual definitions for `distributionStatement`, `fuelAdjustmentStatement`, `purchasedPowerStatement`, `statementTypeOther`, and `transmissionStatement` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Each individual follows the pattern: `rdf:type urpx:TariffStatementTypeValue`, `rdfs:label`, `skos:definition`, `skos:prefLabel`
- Placed in a dedicated `# --- Tariff Statement Type Property (TariffStatementTypeValue) ---` section, alphabetically between SpecialNeedsStatusValue and TaxExemptStatusValue

**Impact Assessment:**
- **Positive**: Complete enum coverage, consistent with all other Value classes
- **Breaking Change**: None — additive only
- **Requirements**: None

**References:**
- File: [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Related Decision: #089 (TariffBookReference and TariffStatementReference Nested Citation Classes)

---

<a id="decision-093"></a>
### 🔗 Decision #093: BillingModel-Owned PriceDefinition with referencesLedger

- **Status:** ✅ Implemented
- **Date:** 2026-04-13
- **Issue:** Restructure `PriceDefinition` ownership and make ledger association explicit
- **Category:** Architecture
- **Impact:** High - Breaking change for billing and price-definition attachment structure

**Context:**
`PriceDefinition` was previously attached to `Ledger` via `hasPriceDefinition`. That containment pattern made structural price definitions harder to manage at the `BillingModel` level and left ledger association implicit in the containment hierarchy.

**Decision:**
Move `hasPriceDefinition` ownership to `BillingModel` and require every `PriceDefinition` to declare its ledger association explicitly through `referencesLedger`.

**Alternatives Considered:**

1. **BillingModel owns PriceDefinition + explicit referencesLedger** ⭐ **SELECTED**
   - ✅ Flattens the graph
   - ✅ Makes ledger association explicit
   - ✅ Supports shared structural management at the billing-model level

2. **Keep Ledger-owned PriceDefinition**
   - ✅ No migration required
   - ❌ Ledger association remains implicit
   - ❌ Harder to manage structural price definitions independently from ledger containment

**Rationale:**
- `PriceDefinition` is structural metadata, not ledger containment
- `BillingModel` is the correct ownership level for structural billing configuration
- `referencesLedger` makes the ledger relationship explicit, queryable, and SHACL-validatable
- The change aligns documentation and data modeling around a flatter, clearer price-definition architecture

**Implementation Details:**
- Changed `hasPriceDefinition` domain from `Ledger` to `BillingModel`
- Added `referencesLedger` on `PriceDefinition` with required cardinality
- Updated SHACL to remove `hasPriceDefinition` from `LedgerShape`, add it to `BillingModelShape`, and require `referencesLedger` on `PriceDefinitionShape`
- Updated `referencesPriceDefinition` documentation to reflect billing-model ownership

**Impact Assessment:**
- **Positive**: Clearer ownership, explicit ledger association, better queryability, better documentation structure
- **Breaking Change**: Yes — existing data must move `hasPriceDefinition` triples and add `referencesLedger`
- **Requirements**: Existing producers, examples, and generated documentation must be updated

**References:**
- Related Decision: #045 (PriceDefinition Architecture Clarification)
- Related Decision: #059 (referencesPriceDefinition Object Property Creation)

---

<a id="decision-094"></a>
### 🔗 Decision #094: Condition Logic Modeling

- **Status:** 📚 Superseded
- **Date:** 2026-04-13
- **Issue:** Replace generic condition-value handling with structured rule logic
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change for condition modeling and rule execution structure
- **Superseded Note:** Superseded by Decisions #097 and #098, which replaced the original condition graph with a rooted `ConditionExpression` wrapper and specialized operand-node model.

**Context:**
The existing condition architecture relied on generic `conditionValue` and `conditionType`, string-oriented `logicExpression`, and a mixed-value modeling pattern that was difficult to validate. The model also needed a clear distinction between atomic predicates and executable boolean rule composition.

**Decision:**
Adopt the new condition architecture based on atomic `Condition` resources plus explicit `ConditionLogic`, `BooleanOperationNode`, `OperationNode`, terminal-node specialization, mandatory `literalType` on datatype-bearing terminal nodes, and datatype-specific value properties.

**Alternatives Considered:**

1. **Adopt new condition architecture** ⭐ **SELECTED**
   - ✅ Separates atomic predicates from boolean rule composition
   - ✅ Supports strong SHACL validation
   - ✅ Supports JSON-LD datatype coercion with explicit value properties
   - ✅ Eliminates ambiguity from generic mixed-type values

2. **Keep generic `conditionValue` and string-based rule logic**
   - ✅ Smaller immediate change
   - ❌ Weak validation
   - ❌ Ambiguous datatype handling
   - ❌ Inconsistent executable rule structure

**Rationale:**
- `Condition` remains the atomic logical unit
- `ConditionLogic` becomes the authoritative executable rule structure
- `BooleanOperationNode` cleanly separates nested boolean composition from arithmetic or ordered comparison structure
- `literalType` plus datatype-specific value properties make intended datatypes explicit and machine-validatable
- `CustomTerminalNode` remains available only as a fallback path

**Implementation Details:**
- Added `ConditionLogic`, `BooleanOperationNode`, `OperationNode`, `DatatypeTerminalNode`, `ObjectTerminalNode`, `CustomTerminalNode`, and `LiteralTypeValue`
- Added `conditionOperands`, `hasConditionLogic`, `referencesValue`, `literalType`, and datatype-specific value properties
- Deprecated `conditionValue`, `conditionType`, and `logicExpression`
- Updated SHACL so rules using conditions also require explicit `ConditionLogic`

**Impact Assessment:**
- **Positive**: Clear executable semantics, stronger validation, cleaner JSON-LD authoring, better documentation opportunities
- **Breaking Change**: Yes — existing rule data using `conditionValue`, `conditionType`, or `logicExpression` must migrate
- **Requirements**: Producers and examples must adopt `hasConditionLogic`, terminal-node specialization, and datatype-specific value properties

**References:**
- Related Decision: #040 (Eligibility Properties Deprecation - Unified Condition Pattern)
- Related Decision: #068 (conditionType and conditionValue Domain Removal from Rule Classes)

---

<a id="decision-095"></a>
### 🔗 Decision #095: RateCase Traceability for Regulated Proceeding Links

- **Status:** ✅ Implemented
- **Date:** 2026-04-13
- **Issue:** URPX lacked a first-class resource for formal rate proceedings affecting versions and pricing artifacts
- **Category:** Architecture, Validation
- **Impact:** Medium - Additive regulatory-traceability model with new optional links from rate artifacts

**Context:**
URPX already captured high-level change categorization through `changeReason` and date metadata such as `dateApproved`, but it did not provide a structured way to identify the actual proceeding that established or revised a rate plan version, modifier version, price definition, price, price set, or price set alternative. Producers had to rely on prose, filing references, or repeated citation text instead of a reusable proceeding object.

**Decision:**
Add `RateCase` as a first-class class, require `caseNumber` and `url` on each `RateCase`, and allow affected rate artifacts to link to one or more rate cases through `hasRateCase`.

**Alternatives Considered:**

1. **Add a reusable `RateCase` resource and `hasRateCase` links** ⭐ **SELECTED**
   - ✅ Separates categorical change reason from the actual proceeding record
   - ✅ Makes regulatory provenance queryable across versions and pricing artifacts
   - ✅ Avoids duplicating case metadata on every affected node

2. **Use `changeReason` and free-form citation text only**
   - ✅ No new class required
   - ❌ Cannot identify the actual proceeding as a reusable node
   - ❌ Makes cross-artifact regulatory traceability difficult

3. **Store proceeding details only in `DataSourceReference`**
   - ✅ Reuses existing citation structures
   - ❌ Blends source-document provenance with proceeding identity
   - ❌ Does not create a shared domain object that multiple artifacts can reference

**Rationale:**
- `changeReason` and `RateCase` serve different roles: one categorizes a change, the other identifies the proceeding
- A reusable `RateCase` object supports traceability when one proceeding affects multiple artifacts
- The model stays additive and lightweight while giving regulated-utility workflows a concrete anchor point
- Reusing `name`, `description`, `priority`, and `url` on `RateCase` keeps the model aligned with existing URPX patterns

**Implementation Details:**
- Added `urpx:RateCase`, `urpx:caseNumber`, and `urpx:hasRateCase`
- Expanded the domains of `urpx:name`, `urpx:description`, `urpx:priority`, and `urpx:url` to include `RateCase`
- Added `urpx-shacl:RateCaseShape` with required `caseNumber` and `url`
- Extended `RatePlanVersion`, `RatePlanModifierVersion`, `PriceDefinition`, `Price`, `PriceSet`, and `PriceSetAlternative` shapes to allow `hasRateCase`

**Impact Assessment:**
- **Positive**: Explicit proceeding traceability, reusable regulatory metadata, better API and documentation examples
- **Breaking Change**: None — additive only
- **Requirements**: Documentation and examples using `changeReason` of `rateCase` should also show `hasRateCase` when a specific proceeding is known

**References:**
- Related Decision: #091 (Date Property Normalization and Provenance Domain Expansion)
- Related Decision: #093 (BillingModel-Owned PriceDefinition with referencesLedger)

---

<a id="decision-096"></a>
### 🔗 Decision #096: Parallel dateTime Provenance Properties for Core date Fields

- **Status:** ✅ Implemented
- **Date:** 2026-04-13
- **Issue:** URPX needed timestamp-capable provenance fields without overloading existing date-only properties
- **Category:** Architecture, Validation, Provenance
- **Impact:** Medium - Additive provenance expansion affecting ontology, SHACL, and documentation guidance

**Context:**
URPX already used `dateApproved`, `dateCreated`, `dateModified`, `datePublished`, `dateReceived`, and `dateRetrieved` to capture provenance metadata. Those properties work well when only a calendar date is known, but they are too coarse when source systems, APIs, filings, or ingestion workflows provide full timestamps. Replacing the existing date properties outright would have broken current data patterns and removed support for date-only values.

**Decision:**
Keep the existing date-only provenance properties and add parallel `xsd:dateTime` companions for the same concepts:

- `dateTimeApproved`
- `dateTimeCreated`
- `dateTimeModified`
- `dateTimePublished`
- `dateTimeReceived`
- `dateTimeRetrieved`

**Alternatives Considered:**

1. **Add parallel `dateTime*` properties while retaining existing `date*` properties** ⭐ **SELECTED**
   - ✅ Preserves compatibility with existing date-only data
   - ✅ Supports full timestamp fidelity when available
   - ✅ Keeps semantic intent explicit instead of overloading one field
   - ✅ Allows documentation and APIs to describe both coarse and precise provenance

2. **Replace existing `date*` properties with `dateTime` only**
   - ✅ Reduces property count
   - ❌ Breaks existing patterns and examples
   - ❌ Forces timestamp semantics where only a date may be known

3. **Change existing `date*` properties to accept both `xsd:date` and `xsd:dateTime`**
   - ✅ Avoids adding new property names
   - ❌ Weakens validation clarity
   - ❌ Makes data typing less explicit in RDF and SHACL
   - ❌ Creates ambiguity in JSON-LD authoring and downstream consumers

**Rationale:**
- Provenance data often exists at mixed precision levels depending on the source
- Parallel properties keep the model explicit and easy to validate
- Existing date-only properties remain useful for publisher metadata that is known only to the day
- New datetime properties support richer API payloads, ingestion records, and filing metadata when precise times are available

**Implementation Details:**
- Added `dateTimeApproved`, `dateTimeCreated`, `dateTimeModified`, `dateTimePublished`, `dateTimeReceived`, and `dateTimeRetrieved` to the ontology
- Added corresponding SHACL property constraints to the relevant shapes
- Preserved the existing `dateApproved`, `dateCreated`, `dateModified`, `datePublished`, `dateReceived`, and `dateRetrieved` properties
- Documentation and examples should distinguish date-only provenance from timestamp-level provenance rather than implying one property serves both roles

**Impact Assessment:**
- **Positive**: Better provenance fidelity, clearer validation, improved compatibility with timestamped source systems
- **Breaking Change**: None - additive only
- **Requirements**: Documentation, examples, and generated dictionary output should explain when to use the date-only property versus the datetime companion

**References:**
- Related Decision: #091 (Date Property Normalization and Provenance Domain Expansion)
- Related Decision: #095 (RateCase Traceability for Regulated Proceeding Links)

---

<a id="decision-097"></a>
### 🔗 Decision #097: ConditionExpression Wrapper and Rooted Rule Graph

- **Status:** ✅ Implemented
- **Date:** 2026-04-16
- **Issue:** Rule conditions needed a single attachable expression resource with a consistent internal graph structure
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change for rule modeling, validation, and example data

**Context:**
URPX condition logic had been split across separate rule-linked resources for atomic predicates and boolean composition. That pattern made rule attachments harder to reason about, required SHACL to coordinate sibling structures, and did not provide a single resource representing the full condition expression. The model also needed a clearer boundary between rule attachment and the internal executable logic graph.

**Decision:**
Adopt a rooted condition-expression architecture in which rules link to a single `ConditionExpression` through `hasConditionExpression`. Each `ConditionExpression` has exactly one `rootNode`, and that root is a `ComparisonNode` or `BooleanOperationNode`. `ComparisonNode` represents an atomic predicate, while `BooleanOperationNode` represents boolean composition over one or more condition nodes.

**Alternatives Considered:**

1. **Adopt a single `ConditionExpression` wrapper with a rooted node graph** ⭐ **SELECTED**
   - ✅ Gives each rule one clear entry point for condition evaluation
   - ✅ Simplifies SHACL validation by anchoring the full expression at one resource
   - ✅ Supports expression-level metadata such as `name` and `description`
   - ✅ Separates rule attachment from internal logical composition

2. **Keep separate rule links for predicate resources and boolean logic resources**
   - ✅ Smaller immediate change
   - ❌ Splits one expression across multiple top-level resources
   - ❌ Makes validation and documentation harder to follow
   - ❌ Preserves ambiguity about the authoritative expression entry point

3. **Embed boolean logic directly on rules without an intermediate wrapper**
   - ✅ Reduces one level of nesting
   - ❌ Prevents a reusable named expression resource
   - ❌ Couples rule ownership too tightly to expression internals
   - ❌ Makes future expression-level metadata harder to model

**Rationale:**
- A single `ConditionExpression` gives each rule one authoritative condition attachment point
- `rootNode` makes the structure explicit and machine-traversable
- `ComparisonNode` and `BooleanOperationNode` clearly separate atomic evaluation from boolean composition
- The wrapper resource supports metadata and future extensibility without overloading rule classes
- SHACL becomes easier to understand because validation starts from one expression root

**Implementation Details:**
- Added `urpx:ConditionExpression`, `urpx:ConditionNode`, and `urpx:ComparisonNode`
- Added `urpx:hasConditionExpression` and `urpx:rootNode`
- Updated `urpx:BooleanOperationNode` to use `urpx:logicExpression` and `urpx:operandNodes`
- Updated rule shapes to reference `hasConditionExpression`
- Added `ConditionExpressionShape` and `ComparisonNodeShape`
- Updated `BooleanOperationNodeShape` to validate boolean operand cardinality through the rooted graph structure

**Impact Assessment:**
- **Positive**: Clearer expression ownership, stronger validation, cleaner documentation, more explicit rule graph semantics
- **Breaking Change**: Yes - data using parallel rule links for condition resources and boolean logic resources must migrate
- **Requirements**: Examples, test cases, and documentation must use `hasConditionExpression` and the rooted node graph pattern

**References:**
- Supersedes Decision: #094 (Condition Logic Modeling)
- Related Decision: #040 (Eligibility Properties Deprecation - Unified Condition Pattern)
- Related Decision: #068 (conditionType and conditionValue Domain Removal from Rule Classes)

---

<a id="decision-098"></a>
### 🔗 Decision #098: Operand Node Specialization and Typed Value Properties for Condition Expressions

- **Status:** ✅ Implemented
- **Date:** 2026-04-16
- **Issue:** Condition operands needed clearer semantics and validation without a separate datatype-declaration layer
- **Category:** Architecture, Validation
- **Impact:** High - Breaking change for operand modeling, property domains/ranges, and literal-value authoring

**Context:**
URPX condition expressions needed a consistent way to represent property-based operands, referenced-value operands, and custom literal operands. The prior approach required separate terminal-node naming and explicit datatype declarations alongside datatype-specific value properties. That duplicated meaning, increased authoring overhead, and made operand validation more complex than necessary.

**Decision:**
Use specialized operand-node classes for condition expressions:
- `DatatypeOperandNode`
- `ObjectOperandNode`
- `CustomOperandNode`

Represent literal operand types through the specific value property in use, such as `booleanValue`, `dateValue`, `decimalValue`, `integerValue`, `stringValue`, or `timeValue`, rather than through a separate `literalType` property and supporting datatype enum resources.

**Alternatives Considered:**

1. **Use specialized operand nodes with datatype-specific value properties** ⭐ **SELECTED**
   - ✅ Makes operand intent explicit through class and property choice
   - ✅ Removes redundant datatype declarations
   - ✅ Simplifies JSON-LD authoring
   - ✅ Produces cleaner SHACL constraints and ontology ranges

2. **Keep explicit datatype declarations alongside datatype-specific value properties**
   - ✅ Preserves a separate declared datatype field
   - ❌ Duplicates information already conveyed by the value property
   - ❌ Adds avoidable authoring and validation complexity
   - ❌ Requires maintaining extra enum resources

3. **Use one generic mixed-value operand pattern**
   - ✅ Minimizes class count
   - ❌ Weakens validation
   - ❌ Obscures whether a value is object-backed, property-backed, or literal-backed
   - ❌ Makes downstream processing less predictable

**Rationale:**
- Operand specialization communicates purpose directly: property lookup, object reference, or custom literal value
- Datatype-specific value properties already provide the needed type signal
- Removing separate datatype declarations reduces redundancy and opportunities for mismatch
- Updated domains and ranges make operand usage more discoverable and more strongly constrained
- The model stays expressive while becoming easier to author and validate

**Implementation Details:**
- Added `urpx:DatatypeOperandNode`, `urpx:ObjectOperandNode`, and `urpx:CustomOperandNode`
- Removed legacy terminal-node classes and `urpx:LiteralTypeValue`
- Removed `urpx:literalType` and supporting datatype enum instances used for operand typing
- Updated `urpx:leftOperand` and `urpx:rightOperand` to target operand-node classes
- Updated `urpx:conditionProperty`, `urpx:customConditionProperty`, `urpx:referencesValue`, and datatype-specific value properties to align with operand-node domains
- Added `DatatypeOperandNodeShape`, `ObjectOperandNodeShape`, and `CustomOperandNodeShape`
- Updated `OperationNodeShape` to accept operand nodes and nested operations

**Impact Assessment:**
- **Positive**: Less redundancy, simpler operand authoring, stronger validation, clearer property semantics
- **Breaking Change**: Yes - data using terminal-node classes, `literalType`, or datatype enum instances must migrate
- **Requirements**: Producers and examples must express literal operand typing through operand-node class selection and datatype-specific value properties

**References:**
- Related Decision: #097 (ConditionExpression Wrapper and Rooted Rule Graph)
- Related Decision: #068 (conditionType and conditionValue Domain Removal from Rule Classes)

---

<a id="decision-099"></a>
### 🔗 Decision #099: GeneralRule Tariff-Book Shared Rule Architecture

- **Status:** ✅ Implemented
- **Date:** 2026-04-24
- **Issue:** Tariff-book-level rules needed a reusable resource instead of duplication across rate plan versions and modifier versions
- **Category:** Architecture, Validation
- **Impact:** Medium - Additive shared-rule layer with new ontology and SHACL resources

**Context:**
URPX already modeled rules specific to a single rate plan, such as `EligibilityRule` and `ApplicabilityRule`, but tariff books also contain general rules and statements that apply across multiple rate plans or modifier versions. Without a shared rule resource, producers had to duplicate the same rule text and provenance metadata on each versioned artifact, weakening reuse and traceability.

**Decision:**
Add a first-class `urpx:GeneralRule` resource for reusable rules at the tariff book level. A `TariffBookDocument` may publish general rules through `urpx:hasGeneralRule`, and `RatePlanVersion` / `RatePlanModifierVersion` may reference applicable rules through `urpx:referencesGeneralRule`. Each `GeneralRule` carries its own identifier, optional human-readable metadata, provenance, and optional `ApplicabilityRule` attachments.

**Alternatives Considered:**

1. **Add a reusable `GeneralRule` class with tariff book ownership and version references** ⭐ **SELECTED**
   - ✅ Eliminates duplication of shared rule content across versions
   - ✅ Gives rules at the tariff book level stable IRIs and identifiers
   - ✅ Preserves provenance and applicability metadata on the shared rule itself
   - ✅ Makes shared-rule discovery queryable from both document and version layers

2. **Duplicate general-rule text and provenance on each `RatePlanVersion` / `RatePlanModifierVersion`**
   - ✅ Avoids adding new classes and properties
   - ❌ Repeats the same rule content across multiple resources
   - ❌ Increases drift risk when a shared rule changes or is corrected
   - ❌ Weakens the tariff book layer as the canonical source of shared statements

3. **Attach free-text general rules only to `TariffBookDocument` without a reusable resource**
   - ✅ Keeps shared rules at the tariff book level
   - ❌ Does not support version-level references to specific rules
   - ❌ Makes provenance, applicability, and rule identity harder to manage
   - ❌ Limits downstream reuse in APIs and graph queries

**Rationale:**
- General rules are conceptually distinct from plan-specific eligibility or applicability rules
- Shared tariff book statements need stable IRIs so multiple versions can point to the same authoritative source
- Provenance and optional applicability metadata belong on the shared rule resource, not repeated per consumer
- A dedicated resource keeps the tariff book layer expressive without overloading version objects

**Implementation Details:**
- Added `urpx:GeneralRule` and `urpx:generalRuleID` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:hasGeneralRule` from `TariffBookDocument` to `GeneralRule`
- Added `urpx:referencesGeneralRule` from `RatePlanVersion` and `RatePlanModifierVersion` to `GeneralRule`
- Extended `urpx:name`, `urpx:description`, `urpx:hasDataSourceReference`, and `urpx:hasApplicabilityRule` domains to include `GeneralRule`
- Added `urpx-shacl:GeneralRuleShape`
- Extended `TariffBookDocumentShape`, `RatePlanVersionShape`, and `RatePlanModifierVersionShape` to validate the new shared-rule links

**Impact Assessment:**
- **Positive**: Cleaner shared-rule reuse, stronger provenance, less duplication, and more accurate tariff book modeling
- **Breaking Change**: None - the change is additive
- **Requirements**: Producers should model reusable rules that apply across the whole tariff book as `GeneralRule` resources rather than duplicating the same text across versions

**References:**
- Related Decision: #089 (TariffBookReference and TariffStatementReference Nested Citation Classes)
- Related Decision: #091 (Date Property Normalization and Provenance Domain Expansion)

---

<a id="decision-100"></a>
### 🔗 Decision #100: RatePlanVersion Enrollment Choice and Default Selection Semantics

- **Status:** ✅ Implemented
- **Date:** 2026-04-24
- **Issue:** `isOptional` on `RatePlanModifier` conflated modifier availability with enrollment semantics of base rate plan versions
- **Category:** Architecture, Naming Convention, Validation
- **Impact:** High - Breaking change for modifier optionality modeling and rate plan version enrollment metadata

**Context:**
The prior `urpx:isOptional` property lived on `RatePlanModifier`, which suggested that optionality was an intrinsic property of the modifier document itself. In practice, optionality is contextual: a modifier is available or not available relative to a specific rate plan version, while the base rate plan version itself may be voluntary or mandatory for qualifying customers and may or may not be the default enrollment. The model needed to separate these concerns more cleanly.

**Decision:**
Move customer-facing enrollment semantics to `RatePlanVersion` by:

1. Adding `urpx:customerChoice` with range `urpx:CustomerChoiceValue` (`urpx:voluntaryChoice`, `urpx:mandatoryChoice`)
2. Renaming the old `urpx:isOptional` concept to `urpx:isDefault` on `RatePlanVersion`
3. Removing `urpx:isOptional` from `RatePlanModifier` and its SHACL shape

Modifier availability remains contextual through version-to-modifier relationships such as `hasModifierOptions`, rather than through a document-level boolean on the modifier itself.

**Alternatives Considered:**

1. **Model enrollment choice and default status on `RatePlanVersion`, not on `RatePlanModifier`** ⭐ **SELECTED**
   - ✅ Separates base-plan enrollment semantics from modifier availability
   - ✅ Makes voluntary vs mandatory enrollment explicit through a controlled vocabulary
   - ✅ Gives default rate plan selection a dedicated property with clear semantics
   - ✅ Aligns optional modifier availability with version-scoped compatibility relationships

2. **Keep `isOptional` on `RatePlanModifier` and add version-level enrollment properties separately**
   - ✅ Minimizes migration for modifier data
   - ❌ Leaves the misleading implication that modifier optionality is intrinsic and global
   - ❌ Preserves two different places where "optional" style semantics can drift apart
   - ❌ Blurs document-level metadata and version-scoped availability

3. **Express all enrollment and modifier availability semantics through free text or external business logic**
   - ✅ Avoids ontology changes
   - ❌ Loses machine-readable enrollment semantics
   - ❌ Weakens validation and queryability
   - ❌ Pushes core interchange meaning into application-specific interpretation

**Rationale:**
- Customer enrollment choice is a property of a rate plan version, not a modifier document
- Default enrollment is distinct from voluntary vs mandatory choice and deserves its own explicit signal
- Optional modifier availability already has a better home in version-to-modifier relationship modeling
- Controlled vocabulary values for customer choice are easier to validate and explain than overloaded booleans

**Implementation Details:**
- Added `urpx:CustomerChoiceValue` with instances `urpx:voluntaryChoice` and `urpx:mandatoryChoice`
- Added `urpx:customerChoice` on `RatePlanVersion`
- Replaced `urpx:isOptional` with `urpx:isDefault` on `RatePlanVersion`
- Added `CustomerChoiceValueShape`
- Extended `RatePlanVersionShape` with optional `customerChoice` and `isDefault`
- Removed `isOptional` validation from `RatePlanModifierShape`

**Impact Assessment:**
- **Positive**: Cleaner enrollment semantics, clearer default selection modeling, and less ambiguity about modifier optionality
- **Breaking Change**: Yes - data using `urpx:isOptional` on `RatePlanModifier` must migrate
- **Requirements**: Producers should use `customerChoice` and `isDefault` for rate plan version enrollment semantics and use modifier-option relationships to express contextual modifier availability

**References:**
- Related Decision: #084 (RatePlanVersion Modifier Options Relationship)
- Related Decision: #090 (Add Version-Level Modifier Reference Properties)

---

<a id="decision-101"></a>
### 🔗 Decision #101: Compatibility Relationship Domain Expansion for Rate Plans and Versions

- **Status:** ✅ Implemented
- **Date:** 2026-04-24
- **Issue:** Compatibility properties had narrower ontology domains than the semantics implied by document-level and version-level usage
- **Category:** Architecture
- **Impact:** Low - Additive ontology-domain expansion for compatibility relationships

**Context:**
URPX already used `applicableToRatePlan` and `applicableToRatePlanVersion` to express compatibility between rate plans and modifiers. However, the ontology domains were narrower than the broader compatibility semantics the model was moving toward. In particular, document-level plan resources and reciprocal version-level assertions needed a cleaner semantic footing without inventing a separate parallel property family for every direction of assertion.

**Decision:**
Broaden the ontology domains of existing compatibility properties rather than introducing new inverse-style properties:

1. Expand `urpx:applicableToRatePlan` to allow `urpx:RatePlan` in addition to `urpx:RatePlanVersion` and `urpx:RatePlanModifierVersion`
2. Expand `urpx:applicableToRatePlanVersion` from `urpx:RatePlanModifierVersion` to a union of `urpx:RatePlanModifierVersion` and `urpx:RatePlanVersion`

The ranges remain unchanged. This keeps the property vocabulary compact while allowing compatibility assertions to be attached to the rate plan side when needed.

**Alternatives Considered:**

1. **Broaden the existing compatibility-property domains** ⭐ **SELECTED**
   - ✅ Preserves the current property vocabulary
   - ✅ Supports a more symmetric compatibility model without introducing more near-duplicate predicates
   - ✅ Aligns better with document-level and version-level compatibility semantics
   - ✅ Keeps query patterns simpler for clients

2. **Add separate inverse properties for each compatibility direction**
   - ✅ Makes directionality explicit in predicate names
   - ❌ Increases vocabulary size and maintenance burden
   - ❌ Creates parallel properties with overlapping meaning
   - ❌ Makes compatibility querying more fragmented

3. **Keep modifier-side domains only and rely on inference or application logic**
   - ✅ Avoids ontology changes
   - ❌ Leaves the intended compatibility semantics under-modeled
   - ❌ Makes some authoring patterns look invalid even when they are conceptually sound
   - ❌ Pushes more burden onto application-specific interpretation

**Rationale:**
- Compatibility is conceptually a relationship between artifacts, not a fact owned only by modifier versions
- Domain broadening is lighter-weight and cleaner than minting a second family of inverse predicates
- The model already has both document-level and version-level compatibility concepts; the ontology should support assertions from either side
- This change keeps the vocabulary expressive while avoiding predicate proliferation

**Implementation Details:**
- Added `urpx:RatePlan` to the domain union of `urpx:applicableToRatePlan`
- Expanded the domain of `urpx:applicableToRatePlanVersion` to a union of `RatePlanModifierVersion` and `RatePlanVersion`
- Left the property ranges unchanged
- Kept the existing SHACL authoring surface for compatibility links intact rather than duplicating property blocks broadly across additional shapes in this change set

**Impact Assessment:**
- **Positive**: Cleaner semantics for compatibility assertions and less pressure to introduce redundant inverse properties
- **Breaking Change**: None - this is an additive domain expansion
- **Requirements**: Future SHACL expansion should remain aligned with this broader semantic intent when additional authoring surfaces are exposed

**References:**
- Related Decision: #084 (RatePlanVersion Modifier Options Relationship)
- Related Decision: #090 (Add Version-Level Modifier Reference Properties)

---

<a id="decision-102"></a>
### 🔗 Decision #102: Profile Count Terminology Normalization and Threshold Cleanup

- **Status:** ✅ Implemented
- **Date:** 2026-04-24
- **Issue:** Profile count properties used inconsistent naming, and deprecated threshold properties required deprecation
- **Category:** Naming Convention, Architecture, Validation
- **Impact:** High - Breaking change for profile-property names and legacy threshold usage

**Context:**
The consolidated ontology still used verbose count-property names such as `numberOfMeters` and `numberOfOccupants`, while related properties already followed a more consistent noun-plus-count style such as `householdCount`. The profile-metric notes and examples also still referenced the older names. At the same time, `demandThreshold` remained in the unified ontology and SHACL even though earlier architecture work had already concluded that threshold-style eligibility properties should be removed in favor of the rule and metric-input pattern.

**Decision:**
Normalize the profile count property names and complete the threshold cleanup:

1. Rename `urpx:numberOfMeters` to `urpx:meterCount`
2. Rename `urpx:numberOfOccupants` to `urpx:occupancyCount`
3. Remove `urpx:demandThreshold` from the consolidated ontology and SHACL
4. Update related explanatory notes so profile-metric examples reference the normalized property names

**Alternatives Considered:**

1. **Rename the count properties and remove the deprecated threshold property** ⭐ **SELECTED**
   - ✅ Produces shorter, more consistent property names
   - ✅ Aligns profile count naming with existing patterns like `householdCount`
   - ✅ Removes lingering threshold-model redundancy
   - ✅ Clarifies `profileMetricProperty` examples and documentation

2. **Keep legacy names and add aliases**
   - ✅ Reduces immediate migration pressure
   - ❌ Preserves duplicate names for the same concepts
   - ❌ Increases documentation and validation burden
   - ❌ Encourages long-term schema drift

3. **Rename the count properties but keep `demandThreshold` for convenience**
   - ✅ Smaller immediate cleanup
   - ❌ Leaves an already-deprecated modeling pattern in place
   - ❌ Continues to blur profile facts and eligibility-threshold rules
   - ❌ Undercuts earlier deprecation work

**Rationale:**
- `meterCount` and `occupancyCount` are clearer and more consistent with the surrounding vocabulary
- Shorter normalized names reduce noise in `profileMetricProperty` references and examples
- Removing `demandThreshold` completes a previously approved move away from property-specific eligibility thresholds
- Updating the surrounding notes prevents stale property names from lingering in author guidance

**Implementation Details:**
- Added `urpx:meterCount` and removed `urpx:numberOfMeters`
- Added `urpx:occupancyCount` and removed `urpx:numberOfOccupants`
- Removed `urpx:demandThreshold` from [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl) and `shacl/urpx-shacl.ttl`
- Updated `CustomerProfileShape` and `ServicePointProfileShape` to validate the normalized property names
- Updated notes on `householdCount`, `profileMetricProperty`, and `profileMetricInput` examples to use `meterCount` and `occupancyCount`

**Impact Assessment:**
- **Positive**: More consistent profile-property naming, cleaner metric-property references, and better alignment with prior eligibility cleanup work
- **Breaking Change**: Yes - data using `numberOfMeters`, `numberOfOccupants`, or `demandThreshold` must migrate
- **Requirements**: Producers should use `meterCount` and `occupancyCount`, and express eligibility thresholds through rule / metric patterns rather than `demandThreshold`

**References:**
- Related Decision: #040 (Eligibility Properties Deprecation - Unified Condition Pattern)
- Related Decision: #048 (ProfileMetric Architecture)
- Related Decision: #050 (householdCount and baseQuantity Properties)

---

<a id="decision-103"></a>
### 🔗 Decision #103: Unique Identifier Normalization and Required Document Target Version Metadata

- **Status:** ✅ Implemented
- **Date:** 2026-04-28
- **Issue:** Identifier properties and document metadata did not clearly distinguish stable artifact identity from version-specific data, and URPX documents lacked an explicit target-version signal for validation
- **Category:** Naming Convention, Architecture, Validation
- **Impact:** High - Breaking identifier rename plus required URPXDocument target-version metadata

**Context:**
`urpx:ratePlanIdentifier` and `urpx:modifierIdentifier` were ambiguous about whether they described stable document identity or version-specific state. The modifier identifier also lived on `RatePlanModifierVersion`, even though the identifier is intended to identify the modifier itself. At the same time, v0.2.0 introduced enough schema churn that URPX documents needed an explicit machine-readable signal for the ontology version they target.

**Decision:**
Normalize the identifier vocabulary around stable uniqueness and require document-level version targeting metadata:

1. Rename `urpx:ratePlanIdentifier` to `urpx:ratePlanUniqueIdentifier` on `urpx:RatePlan`
2. Rename `urpx:modifierIdentifier` to `urpx:modifierUniqueIdentifier` and move it to `urpx:RatePlanModifier`
3. Require `urpx:targetURPXVersion` on every `urpx:URPXDocument`

**Alternatives Considered:**

1. **Rename the properties, move modifier identity to `RatePlanModifier`, and require target-version metadata** ⭐ **SELECTED**
   - ✅ Makes stable identifiers explicit
   - ✅ Aligns modifier identity with the modifier resource rather than its versions
   - ✅ Supports version-aware parsing and validation

2. **Keep the legacy names and rely on documentation alone**
   - ✅ Avoids migration
   - ❌ Leaves ownership and uniqueness semantics ambiguous
   - ❌ Makes version-aware validation harder as the ontology evolves

3. **Add aliases while leaving target-version metadata optional**
   - ✅ Softens migration pressure
   - ❌ Preserves duplicate names for the same concepts
   - ❌ Weakens interoperability because consumers cannot rely on a required target-version signal

**Rationale:**
- Stable identifiers should read as stable identifiers in the ontology itself
- Modifier identity belongs to the modifier resource, not to each modifier version
- Required target-version metadata gives validators and downstream tools an explicit compatibility hook
- A single canonical property name per identifier avoids long-term alias drift

**Implementation Details:**
- Renamed `urpx:ratePlanIdentifier` to `urpx:ratePlanUniqueIdentifier`
- Renamed `urpx:modifierIdentifier` to `urpx:modifierUniqueIdentifier`
- Moved `modifierUniqueIdentifier` from `RatePlanModifierVersion` to `RatePlanModifier`
- Added required `urpx:targetURPXVersion` to [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl) and `URPXDocumentShape` in `shacl/urpx-shacl.ttl`
- Updated `RatePlanShape`, `RatePlanModifierShape`, and `RatePlanModifierVersionShape` to validate the renamed ownership model

**Impact Assessment:**
- **Positive**: Clearer identity semantics, cleaner modifier ownership, and better version-aware interoperability
- **Breaking Change**: Yes - datasets using `ratePlanIdentifier` or `modifierIdentifier`, or omitting `targetURPXVersion`, must migrate
- **Requirements**: Producers should populate the renamed identifier properties and include the raw tagged `ontology/urpx-ontology.ttl` URL in `targetURPXVersion`

**References:**
- Commit: `4d83cd5`

---

<a id="decision-104"></a>
### 🔗 Decision #104: Structured ConditionExpression Consolidation and Scenario-Owned Eligibility Inputs

- **Status:** ✅ Implemented
- **Date:** 2026-04-28
- **Issue:** Eligibility and applicability modeling still mixed profile inputs, structured condition logic, and separate constraint patterns
- **Category:** Architecture, Validation
- **Impact:** High - Breaking move to Scenario-backed eligibility inputs and removal of less specific constraint structures

**Context:**
Decisions #097 and #098 established `ConditionExpression` as the structured rule graph for condition logic, but the surrounding authoring surface was still fragmented. `EligibilityRule` directly owned customer and service-point profiles, `ApplicabilityGroup` used separate inclusion and exclusion constraint resources, and `ProfileAlternative` used reified dimension-value pairs. That fragmentation meant equivalent rule intent could still be modeled through several competing structures.

**Decision:**
Consolidate structured evaluation around `ConditionExpression` and separate evaluation inputs from rule logic:

1. Add `urpx:Scenario` as the owner of `urpx:hasCustomerProfile` and `urpx:hasServicePointProfile` for eligibility queries
2. Expand `urpx:hasConditionExpression` domain so it can also be used on `urpx:ApplicabilityGroup` and `urpx:ProfileAlternative`
3. Remove `ApplicabilityConstraint` and `DimensionValuePair` patterns and their related properties and shapes

**Alternatives Considered:**

1. **Use `Scenario` plus expanded `ConditionExpression` coverage and retire the older constraint models** ⭐ **SELECTED**
   - ✅ Separates evaluation inputs from rule logic
   - ✅ Gives eligibility, applicability, and profile-alternative contexts one structured condition pattern
   - ✅ Removes duplicate ways to express similar constraint intent

2. **Keep direct profile attachment on `EligibilityRule` and preserve the older constraint models**
   - ✅ Reduces migration work
   - ❌ Leaves multiple competing modeling patterns in place
   - ❌ Keeps rule logic tightly coupled to a specific input container

3. **Add new wrapper resources without retiring the older ones**
   - ✅ Minimizes immediate breakage
   - ❌ Expands vocabulary surface area without reducing ambiguity
   - ❌ Makes validation and guidance harder to keep consistent

**Rationale:**
- Scenario inputs and rule logic are different concerns and should not share the same owning node
- One structured condition pattern is easier to teach, validate, and query than several partially overlapping ones
- Removing the older ad hoc constraint constructs reduces ambiguity about the canonical URPX authoring path
- Expanded `ConditionExpression` coverage keeps applicability and profile-alternative logic aligned with eligibility logic

**Implementation Details:**
- Added `urpx:Scenario` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Moved `hasCustomerProfile` and `hasServicePointProfile` domains from `EligibilityRule` to `Scenario`
- Expanded the domain of `hasConditionExpression` to include `ApplicabilityGroup` and `ProfileAlternative`
- Removed `ApplicabilityConstraint`, `DimensionValuePair`, `constraintProperty`, `constraintValue`, `forDimension`, `hasDimensionValue`, `hasInclusionConstraint`, `hasExclusionConstraint`, and `valueIRI`
- Added `ScenarioShape`, updated applicability/profile-alternative shapes, and added [`documentation/pages/urpx-condition-modeling.md`](urpx-condition-modeling.md)

**Impact Assessment:**
- **Positive**: Cleaner separation of concerns, fewer competing constraint models, and clearer guidance for producers
- **Breaking Change**: Yes - data using direct eligibility-rule profile links or the retired applicability / dimension-value constructs must migrate
- **Requirements**: Producers should attach profile inputs through `Scenario` and express structured rule logic through `hasConditionExpression`

**References:**
- Commit: `5ea3adc`
- Related Decision: #097 (ConditionExpression Wrapper and Rooted Rule Graph)
- Related Decision: #098 (Operand Node Specialization and Typed Value Properties for Condition Expressions)

---

<a id="decision-105"></a>
### 🔗 Decision #105: SHACL Enforcement of Structured Eligibility and Minimum Scenario Inputs

- **Status:** ✅ Implemented
- **Date:** 2026-04-28
- **Issue:** After the Scenario and ConditionExpression refactor, SHACL still allowed incomplete eligibility graphs that did not reflect the intended authoring model
- **Category:** Validation
- **Impact:** Medium - Breaking validation tightening for eligibility and scenario resources

**Context:**
The architecture introduced in Decision #104 made `ConditionExpression` the canonical path for structured eligibility logic and moved profile inputs into `Scenario`. However, the initial SHACL pass still allowed `EligibilityRule` instances without `hasConditionExpression`, and it allowed empty `Scenario` instances with neither a customer profile nor a service-point profile. Those gaps made it possible to author graphs that technically validated but could not be evaluated meaningfully.

**Decision:**
Tighten SHACL so the intended model is enforceable:

1. Require `urpx:hasConditionExpression` on `EligibilityRule`
2. Require each `Scenario` to include at least one of `urpx:hasCustomerProfile` or `urpx:hasServicePointProfile`
3. Expand the condition-model documentation with a full end-to-end example of the required graph pattern

**Alternatives Considered:**

1. **Enforce the stricter SHACL contract now** ⭐ **SELECTED**
   - ✅ Prevents structurally incomplete eligibility graphs
   - ✅ Aligns validation with the intended architecture immediately
   - ✅ Gives producers a concrete example to follow

2. **Leave the properties optional and rely on application logic**
   - ✅ Avoids short-term validation failures
   - ❌ Permits graphs that cannot be evaluated consistently
   - ❌ Pushes core structural requirements out of the shared contract

**Rationale:**
- Eligibility rules should not validate unless they carry the structured logic they are meant to express
- A scenario without any profile input does not provide usable evaluation context
- SHACL should encode the minimum structure that downstream tools can rely on
- A full example lowers migration friction when validation gets stricter

**Implementation Details:**
- Changed `EligibilityRuleShape` so `hasConditionExpression` has `sh:minCount 1`
- Added a `sh:or` requirement to `ScenarioShape` so at least one of `hasCustomerProfile` or `hasServicePointProfile` must be present
- Expanded [`documentation/pages/urpx-condition-modeling.md`](urpx-condition-modeling.md) with a full JSON-LD graph and Mermaid diagram

**Impact Assessment:**
- **Positive**: Stronger validation, fewer incomplete graphs, and clearer producer guidance
- **Breaking Change**: Yes - eligibility rules without condition expressions and empty scenarios no longer validate
- **Requirements**: Producers should provide structured condition graphs for eligibility rules and ensure each scenario includes at least one relevant profile

**References:**
- Commit: `7abaa39`
- Related Decision: #104 (Structured ConditionExpression Consolidation and Scenario-Owned Eligibility Inputs)

---

<a id="decision-106"></a>
### 🔗 Decision #106: PriorRatePlan ServiceRole Coverage

- **Status:** ✅ Implemented
- **Date:** 2026-04-29
- **Issue:** Prior-rate plan relationships needed service-role context, but the ontology and SHACL exposed `serviceRole` only on versions and providers
- **Category:** Architecture, Validation
- **Impact:** Low - Additive domain and shape expansion for prior-rate plan context

**Context:**
`urpx:serviceRole` already provides the controlled vocabulary needed to distinguish bundled, distribution, and retail roles on rate plan versions and energy service providers. Prior-rate plan references can carry the same distinction when documenting migration or compatibility context, but `PriorRatePlan` was not included in the ontology domain or SHACL surface.

**Decision:**
Extend the existing `serviceRole` property rather than inventing a prior-plan-specific variant:

1. Add `urpx:PriorRatePlan` to the domain of `urpx:serviceRole`
2. Add optional `serviceRole` validation to `PriorRatePlanShape`

**Alternatives Considered:**

1. **Reuse `serviceRole` on `PriorRatePlan`** ⭐ **SELECTED**
   - ✅ Reuses an existing controlled vocabulary and query surface
   - ✅ Avoids introducing a near-duplicate prior-plan-specific property
   - ✅ Keeps prior-plan context aligned with rate plan and provider modeling

2. **Infer prior-plan role from the referenced plan or leave it in free text**
   - ✅ Avoids ontology changes
   - ❌ Loses explicit role context when the prior plan reference stands on its own
   - ❌ Weakens validation and makes downstream interpretation less consistent

**Rationale:**
- Prior-rate plan context uses the same role semantics already captured by `serviceRole`
- Reusing the existing property is lighter-weight than minting a parallel property family
- Optional validation keeps the change additive while allowing more expressive historical context

**Implementation Details:**
- Expanded the `serviceRole` domain union in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl) to include `PriorRatePlan`
- Added optional `serviceRole` validation to `PriorRatePlanShape` in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: More expressive prior-plan context with no new vocabulary family
- **Breaking Change**: None - the change is additive
- **Requirements**: Producers may populate `serviceRole` on `PriorRatePlan` when the historical or compatibility context needs it

**References:**
- Implemented in the 2026-04-29 ontology and SHACL update

---

<a id="decision-107"></a>
### 🔗 Decision #107: AlternativeDimension Fallback Custom Property Identifier

- **Status:** ✅ Implemented
- **Date:** 2026-05-04
- **Issue:** [urpx-org/urpx#30](https://github.com/urpx-org/urpx/issues/30)
- **Category:** Architecture, Validation
- **Impact:** Medium - Additive ontology and SHACL expansion for alternative dimensions outside the current URPX vocabulary

**Context:**
`AlternativeDimension` originally required `dimensionProperty` to point to a URI for an existing URPX property. That worked for dimensions already modeled in the ontology, but it blocked alternative dimensions that still needed a stable identifier even when no suitable URPX property existed yet.

**Decision:**
Add a fallback string identifier while preserving the URI-based pattern when it is available:

1. Add `urpx:customDimensionProperty` on `AlternativeDimension`
2. Allow `dimensionProperty` or `customDimensionProperty`
3. Require exactly one of the two in SHACL

**Alternatives Considered:**

1. **Add an explicit fallback property** ⭐ **SELECTED**
   - ✅ Preserves the URI-based path for modeled dimensions
   - ✅ Supports dimensions that are not yet first-class URPX properties
   - ✅ Keeps fallback usage explicit and machine-readable

2. **Require only `dimensionProperty`**
   - ✅ Keeps a single representation
   - ❌ Blocks legitimate alternative dimensions that lack a suitable URPX term
   - ❌ Pushes producers toward ad hoc workarounds outside the shared model

**Rationale:**
- Some alternative dimensions need stable identifiers before the ontology grows a canonical property for them
- A dedicated fallback property is clearer than overloading the URI field with non-URI content
- SHACL should ensure producers choose one representation per dimension rather than mixing both

**Implementation Details:**
- Added `urpx:customDimensionProperty` to [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Updated `AlternativeDimensionShape` in `shacl/urpx-shacl.ttl` so exactly one of `dimensionProperty` or `customDimensionProperty` must be present

**Impact Assessment:**
- **Positive**: Alternative dimensions can now be modeled even when the ontology does not yet have a canonical property
- **Breaking Change**: None - existing URI-based dimensions remain valid
- **Requirements**: Producers should use `dimensionProperty` when a suitable URPX property exists and reserve `customDimensionProperty` for fallback cases

**References:**
- Commit: `c9d974f`
- Issue: [urpx-org/urpx#30](https://github.com/urpx-org/urpx/issues/30)

---

<a id="decision-108"></a>
### 🔗 Decision #108: Moderate Income Program Type Enumeration Expansion

- **Status:** ✅ Implemented
- **Date:** 2026-05-04
- **Issue:** [urpx-org/urpx#10](https://github.com/urpx-org/urpx/issues/10)
- **Category:** Standards Compliance, Validation
- **Impact:** Low - Additive controlled-vocabulary expansion for program categorization

**Context:**
`ProgramTypeValue` included `lowIncomeProgram` but did not provide a separate value for moderate-income assistance programs. That forced producers either to collapse distinct program types together or to omit the distinction entirely.

**Decision:**
Add `urpx:moderateIncomeProgram` as a first-class `ProgramTypeValue` and allow it in SHACL validation.

**Alternatives Considered:**

1. **Add a dedicated moderate-income value** ⭐ **SELECTED**
   - ✅ Preserves the distinction between low-income and moderate-income assistance programs
   - ✅ Keeps producers within the shared controlled vocabulary
   - ✅ Requires only an additive enum update

2. **Reuse `lowIncomeProgram` for both cases**
   - ✅ Avoids vocabulary expansion
   - ❌ Loses a meaningful program-classification distinction
   - ❌ Makes downstream filtering and analysis less accurate

**Rationale:**
- Moderate-income assistance is a distinct program category in real utility program catalogs
- A controlled vocabulary is more useful when it captures operationally meaningful distinctions
- The change is additive and straightforward for producers and validators

**Implementation Details:**
- Added `urpx:moderateIncomeProgram` to the `ProgramTypeValue` enumeration in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Added `urpx:moderateIncomeProgram` to `ProgramTypeValueShape` in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: Better fidelity for assistance-program categorization
- **Breaking Change**: None - existing values remain valid
- **Requirements**: Producers may use `moderateIncomeProgram` where a program targets moderate-income customers specifically

**References:**
- Commit: `c9d974f`
- Issue: [urpx-org/urpx#10](https://github.com/urpx-org/urpx/issues/10)

---

<a id="decision-109"></a>
### 🔗 Decision #109: Applicability Selectors Consolidated onto Profile Properties

- **Status:** ✅ Implemented
- **Date:** 2026-05-05
- **Issue:** Applicability selectors were split between rule nodes and profile nodes, creating duplicate ways to model the same facts
- **Category:** Architecture, Validation
- **Impact:** High - Breaking removal of direct `ApplicabilityGroup` selector properties in favor of profile-based condition inputs

**Context:**
After the condition-model consolidation work, URPX still exposed two overlapping ways to express many applicability facts. Geographic, end-use, service-class, and voltage selectors could be attached directly to `ApplicabilityGroup`, but lacked the flexibility ConditionExpression provides.

**Decision:**
Use profile properties as the canonical selector surface and retire the direct applicability-group selectors:

1. Remove direct selector properties from `ApplicabilityGroup`
2. Express applicability through `ConditionExpression` against `CustomerProfile` and `ServicePointProfile` properties
3. Add service-point geography properties where no reusable profile property already existed

**Alternatives Considered:**

1. **Consolidate selectors onto profile properties** ⭐ **SELECTED**
   - ✅ Gives applicability and eligibility one shared property surface
   - ✅ Reduces duplicated vocabulary and guidance
   - ✅ Aligns alternative-dimension references with real profile properties

2. **Keep direct `ApplicabilityGroup` selectors alongside profile properties**
   - ✅ Avoids migration work
   - ❌ Preserves duplicate modeling paths for the same facts
   - ❌ Makes validation and examples harder to keep consistent

**Rationale:**
- Applicability selectors should reuse the same profile facts that eligibility logic already evaluates
- One property surface is easier to document, validate, and query than overlapping rule-local variants
- Adding a few missing service-point geography properties is lighter than maintaining a parallel applicability-only vocabulary

**Implementation Details:**
- Removed direct applicability selector properties such as `appliesInCounty`, `appliesInMunicipality`, `appliesInServiceTerritory`, `appliesInState`, and `appliesInGeographicZone`
- Added `hasCounty`, `hasMunicipality`, `hasServiceTerritory`, and `hasState` on `ServicePointProfile`
- Moved `geographicScope`, `geographicZone`, `endUse`, `serviceClassPattern`, and `voltageLevel` onto the profile-based surface and updated `ApplicabilityGroupShape` / `ServicePointProfileShape` in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: Cleaner applicability modeling, fewer duplicate selectors, and better alignment with the condition-expression architecture
- **Breaking Change**: Yes - data using the retired direct `ApplicabilityGroup` selector properties must migrate
- **Requirements**: Producers should express applicability through condition expressions over `CustomerProfile` and `ServicePointProfile` properties rather than direct `ApplicabilityGroup` selectors

**References:**
- Commit: `b682d31`
- Related Decision: #104 (Structured ConditionExpression Consolidation and Scenario-Owned Eligibility Inputs)

---

<a id="decision-110"></a>
### 🔗 Decision #110: Seasonal ServiceTiers and Flexible Open-Ended Tier Bounds

- **Status:** ✅ Implemented
- **Date:** 2026-05-05
- **Issue:** Tier groups needed seasonal qualifiers, and some service tiers needed to be open-ended on only one side
- **Category:** Architecture, Validation
- **Impact:** Medium - Additive seasonal scoping plus looser tier-bound validation

**Context:**
`ServiceTiers` could not previously carry season qualifiers, which made seasonal tier groups awkward to model. At the same time, `ServiceTierShape` required both lower and upper bounds, preventing open-ended first or last tiers even though those patterns are common in tiered pricing.

**Decision:**
Broaden the tier model to support seasonal grouping and open-ended tiers:

1. Allow `urpx:appliesInSeason` on `ServiceTiers`
2. Let a `ServiceTier` carry a lower bound only, an upper bound only, or both bound/operator pairs

**Alternatives Considered:**

1. **Support seasonal tier groups and open-ended tiers directly** ⭐ **SELECTED**
   - ✅ Matches real tariff structures more closely
   - ✅ Avoids forcing artificial bounds into first or last tiers
   - ✅ Keeps seasonal scoping on the tier group rather than duplicating it elsewhere

2. **Require both bounds and keep seasonal scoping off `ServiceTiers`**
   - ✅ Simpler validation shape
   - ❌ Cannot model common open-ended tier patterns cleanly
   - ❌ Forces seasonal logic into adjacent structures instead of the tier group itself

**Rationale:**
- Tier groups often vary by season, so the container should be able to carry that qualifier directly
- Open-ended tiers are common enough that SHACL should validate them without placeholder bounds
- The change improves expressiveness without introducing a new vocabulary family

**Implementation Details:**
- Expanded the domain of `urpx:appliesInSeason` to include `ServiceTiers`
- Updated `ServiceTierShape` with a `sh:or` pattern permitting lower-only, upper-only, or fully bounded tiers
- Added optional `appliesInSeason` validation to `ServiceTiersShape`

**Impact Assessment:**
- **Positive**: Better coverage for seasonal tier groups and first/last open-ended tiers
- **Breaking Change**: None - previously valid fully bounded tiers remain valid
- **Requirements**: Producers may use `appliesInSeason` on `ServiceTiers` and may omit one side of the bound pair when the tier is intentionally open-ended

**References:**
- Commit: `0994aec`
- Related Decision: #087 (ServiceTiers Container Architecture)

---

<a id="decision-111"></a>
### 🔗 Decision #111: ServiceBracket Boundary Model for Contextual Tier Variants

- **Status:** ✅ Implemented
- **Date:** 2026-05-07
- **Issue:** Service tiers needed stable logical identities while still supporting season-specific or profile-specific boundary variants
- **Category:** Architecture, Validation
- **Impact:** High - Breaking move of tier bounds from `ServiceTier` to a new `ServiceBracket` layer

**Context:**
Decision #110 made `ServiceTier` validation flexible enough for open-ended tiers, but the bounds still lived directly on the tier itself. That made it difficult to preserve one stable tier identity while varying the actual boundary set by season or profile alternative. Reifying each variant as a separate `ServiceTier` would duplicate tier numbers and weaken tier identity.

**Decision:**
Separate logical tier identity from contextual bracket definitions:

1. Introduce `urpx:ServiceBracket` as the bound-bearing child of `urpx:ServiceTier`
2. Move `lowerBound`, `lowerBoundOperator`, `upperBound`, and `upperBoundOperator` onto `ServiceBracket`
3. Allow `ServiceBracket` to carry optional `appliesInSeason` and `referencesProfileAlternative`
4. Add optional `referencesServiceBracket` from price resources while retaining logical references via `serviceTierNumber` and `referencesServiceTier`

**Alternatives Considered:**

1. **Add `ServiceBracket` beneath `ServiceTier`** ⭐ **SELECTED**
   - ✅ Preserves one logical tier identity and number across contextual variants
   - ✅ Supports season-specific and profile-specific bracket definitions cleanly
   - ✅ Avoids duplicating whole `ServiceTier` nodes for each variant

2. **Keep bounds directly on `ServiceTier` and duplicate tiers for each variant**
   - ✅ Avoids a new class
   - ❌ Duplicates tier identity and numbering
   - ❌ Makes price references and tier documentation less stable

**Rationale:**
- Logical tier identity and contextual boundary variants are related but distinct modeling concerns
- Prices often need to refer to a tier generally, while some use cases benefit from an exact bracket reference
- Moving bounds to `ServiceBracket` keeps the model extensible without losing simple logical tier references

**Implementation Details:**
- Added `urpx:ServiceBracket`, `urpx:hasServiceBracket`, and `urpx:referencesServiceBracket` in [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- Moved bound properties onto `ServiceBracket` and expanded `referencesProfileAlternative`, `referencesServiceTier`, `serviceTierNumber`, and `appliesInSeason` for the new tier model where needed
- Added `ServiceBracketShape`, updated `ServiceTierShape` to require brackets, added optional `referencesServiceBracket` validation to pricing shapes, and allowed optional `name` / `description` on `ServiceTiersShape` in `shacl/urpx-shacl.ttl`

**Impact Assessment:**
- **Positive**: Stable tier identities, cleaner contextual bracket modeling, and optional exact bracket references from pricing resources
- **Breaking Change**: Yes - bound data must move from `ServiceTier` onto one or more `ServiceBracket` nodes
- **Requirements**: Producers should model each logical tier with `ServiceTier`, attach one or more bound-bearing `ServiceBracket` instances, and use `referencesServiceBracket` only when an exact bracket reference is needed

**References:**
- Based on the current unstaged ontology and SHACL changes as of 2026-05-07
- Related Decision: #087 (ServiceTiers Container Architecture)
- Related Decision: #110 (Seasonal ServiceTiers and Flexible Open-Ended Tier Bounds)
