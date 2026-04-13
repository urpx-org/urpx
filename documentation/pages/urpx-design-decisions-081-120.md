# URPX (Utility Rate Plan Exchange) Design Decisions Log (#081-#120)

**Version:** 1.0
**Created:** 2026-04-07
**Last Updated:** 2026-04-07

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

- ✅ [Decision #081: DataSourceTypeValue Provenance Refactor](#decision-081)
- ✅ [Decision #082: Enrollment Status Made Optional on ProgramEnrollment and PriorRatePlan](#decision-082)
- ✅ [Decision #083: Human-Readable Metadata Coverage Expansion and Core Name Requirements](#decision-083)
- ✅ [Decision #084: RatePlanVersion Modifier Options Relationship](#decision-084)
- ✅ [Decision #085: Closed SHACL Node Shape Hardening](#decision-085)
- ✅ [Decision #086: Organization, Authority, and System Operator Validation Expansion](#decision-086)
- ✅ [Decision #087: ServiceTiers Container Architecture](#decision-087)
- ✅ [Decision #088: DataSourceReference Provenance Metadata Expansion](#decision-088)
- ✅ [Decision #089: TariffBookReference and TariffStatementReference Nested Citation Classes](#decision-089)
- ✅ [Decision #090: Add Version-Level Modifier Reference Properties](#decision-090)
- ✅ [Decision #091: Date Property Normalization and Provenance Domain Expansion](#decision-091)
- ✅ [Decision #092: TariffStatementTypeValue Enum Instance Materialization](#decision-092)

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
- Updated `urpx-shacl:DataSourceTypeValueShape` in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl) to enforce the revised enumeration

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
`ProgramEnrollmentShape` and `PriorRatePlanShape` required `enrollmentStatus`, even when the data was being used to represent available or applicable programs and prior rate-plan relationships on a `RatePlan` or `RatePlanModifier`, not a customer-specific scenario. In those contexts, a present-tense enrollment status is not knowable or appropriate, because status only becomes meaningful within a customer scenario model.

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
- Available or applicable programs and prior-rate-plan references on a rate artifact should not be forced to imply a customer's current status
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
Expand shared metadata property domains and align SHACL cardinalities so that user-facing classes can carry `name`, `description`, and `url`, while requiring `name` on core rate-plan publication entities.

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
- **Requirements**: Producers should populate `name` on all top-level rate-plan and publication entities, and may now add optional names/descriptions/URLs to the newly covered classes

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
- Version-specific optional modifiers are a first-class concept in the rate-plan model
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
- Updated each closed shape to enumerate all allowed properties explicitly in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)

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
- Added `urpx-shacl:ServiceTiersShape` and updated `BillingModelShape`, `ServiceTierShape`, and related pricing shapes in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)

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
- Expanded `urpx-shacl:DataSourceReferenceShape` in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl) to validate the new provenance and pagination fields

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

- **Status:** ✅ Implemented
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
- Added `urpx:anchorLink`, `urpx:leafStart`, and `urpx:leafEnd` for structured tariff-book positioning
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
- Extended `urpx-shacl:RatePlanVersionShape` with an optional `hasModifierVersionOptions` property block in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)
- Extended `urpx-shacl:RatePlanModifierVersionShape` with an optional `applicableToRatePlanVersion` property block in [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)
- Kept the SHACL cardinality pattern aligned with the document-level counterparts by using optional repeatable compatibility links

**Impact Assessment:**
- **Positive**: More precise version compatibility, clearer temporal semantics, and better support for future evaluation workflows
- **Breaking Change**: None - this is an additive enhancement
- **Requirements**: Producers may continue using document-level relationships, but should use the new version-level properties when compatibility depends on specific `RatePlanVersion` and `RatePlanModifierVersion` pairings

**References:**
- File: [`ontology/urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)
- File: [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)
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
- File: [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl)
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
