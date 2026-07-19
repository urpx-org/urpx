---
id: data-dictionary
title: "Data Dictionary"
sidebar_label: "Data Dictionary"
sidebar_position: 1
---

import DictTopNav from '@site/src/components/DictTopNav';
import DiagramViewer from '@site/src/components/DiagramViewer';

# URPX Data Dictionary

<DictTopNav />

<!-- AUTO-GENERATED on 2026-05-13 from urpx-ontology.ttl and urpx-shacl.ttl -->
<!-- Do not edit directly. Regenerate with: generate-dictionary.sh -->

**Version:** 0.3.0  
**Last Updated:** 2026-05-13  
**Ontology Source:** [`urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)

---

## Introduction

The Utility Rate Plan Exchange (URPX) Data Dictionary provides comprehensive documentation of all classes, properties, and enumerations within the URPX v0.3.0 ontology. This reference guide serves as the authoritative source for understanding the semantic structure and constraints that govern URPX.

**Important:** This is a pre-draft version for working group review. All definitions are based on `urpx-ontology.ttl`.

### Namespace Prefixes

| Prefix | Namespace URI | Description |
|--------|--------------|-------------|
| `urpx:` | https://schema.urpx.org/ | Core URPX ontology |
| `xsd:` | http://www.w3.org/2001/XMLSchema# | XML Schema datatypes |
| `owl:` | http://www.w3.org/2002/07/owl# | OWL ontology language |
| `rdfs:` | http://www.w3.org/2000/01/rdf-schema# | RDF Schema |
| `skos:` | http://www.w3.org/2004/02/skos/core# | SKOS vocabulary |

---

## Table of Contents

### Classes (Entities)
- [Core Rate Plan Entities](#core-rate-plan-entities)
- [Pricing & Alternatives Entities](#pricing--alternatives-entities)
- [Coverage & Evaluation Entities](#coverage--evaluation-entities)
- [Source & Publication Entities](#source--publication-entities)
- [Metric & Measurement Entities](#metric--measurement-entities)
- [Plan Elements & Billing Entities](#plan-elements--billing-entities)
- [Temporal & Scheduling Entities](#temporal--scheduling-entities)
- [Condition Modeling](#condition-modeling)
- [Customer & Service Profile Entities](#customer--service-profile-entities)
- [Scenario & Cost Entities](#scenario--cost-entities)
- [Regulatory Entities](#regulatory-entities)
- [Organization Entities](#organization-entities)
- [Geographic Entities](#geographic-entities)

### Enumerations (Controlled Vocabularies)
- [AccumulationValue](#accumulationvalue)
- [AggregationMethodValue](#aggregationmethodvalue)
- [AnnualIncomeRangeValue](#annualincomerangevalue)
- [AssistanceEligibilityLevelValue](#assistanceeligibilitylevelvalue)
- [BillPortionValue](#billportionvalue)
- [BooleanOperatorValue](#booleanoperatorvalue)
- [ChangeReasonValue](#changereasonvalue)
- [ChargeCategoryValue](#chargecategoryvalue)
- [ChargeTypeValue](#chargetypevalue)
- [CollectionRoleValue](#collectionrolevalue)
- [CommodityValue](#commodityvalue)
- [ConnectionKindValue](#connectionkindvalue)
- [ConnectorTypeValue](#connectortypevalue)
- [CustomerChoiceValue](#customerchoicevalue)
- [CustomerKindValue](#customerkindvalue)
- [CustomerSubKindValue](#customersubkindvalue)
- [DERTypeValue](#dertypevalue)
- [DataSourceTypeValue](#datasourcetypevalue)
- [DayTypeValue](#daytypevalue)
- [DynamicPricingTypeValue](#dynamicpricingtypevalue)
- [EndUseValue](#endusevalue)
- [EnrollmentStatusValue](#enrollmentstatusvalue)
- [EntityTypeValue](#entitytypevalue)
- [FlowDirectionValue](#flowdirectionvalue)
- [GeographicScopeValue](#geographicscopevalue)
- [GeographicZoneValue](#geographiczonevalue)
- [HVACKindValue](#hvackindvalue)
- [IdentifierSchemeValue](#identifierschemevalue)
- [InterconnectionStatusValue](#interconnectionstatusvalue)
- [IntervalAlignmentValue](#intervalalignmentvalue)
- [IntervalSelectionValue](#intervalselectionvalue)
- [IntervalTypeValue](#intervaltypevalue)
- [InverterTypeValue](#invertertypevalue)
- [LedgerTypeValue](#ledgertypevalue)
- [LoadProfileValue](#loadprofilevalue)
- [MeasurementTypeValue](#measurementtypevalue)
- [MediaTypeValue](#mediatypevalue)
- [MeteringConfigurationValue](#meteringconfigurationvalue)
- [MetricInputTypeValue](#metricinputtypevalue)
- [ModifierCategoryValue](#modifiercategoryvalue)
- [ModifierTypeValue](#modifiertypevalue)
- [NameTypeValue](#nametypevalue)
- [ObservanceRuleValue](#observancerulevalue)
- [OperatorValue](#operatorvalue)
- [OrganizationTypeValue](#organizationtypevalue)
- [OwnershipTypeValue](#ownershiptypevalue)
- [PanelOrientationValue](#panelorientationvalue)
- [PhaseCodeKindValue](#phasecodekindvalue)
- [PremiseTypeValue](#premisetypevalue)
- [PriceSourceValue](#pricesourcevalue)
- [ProgramTypeValue](#programtypevalue)
- [PublicationTypeValue](#publicationtypevalue)
- [ReferenceInclusionValue](#referenceinclusionvalue)
- [RegulatoryScopeValue](#regulatoryscopevalue)
- [ScopeKindValue](#scopekindvalue)
- [SeasonalPatternValue](#seasonalpatternvalue)
- [ServiceRoleValue](#servicerolevalue)
- [SpecialNeedsStatusValue](#specialneedsstatusvalue)
- [TOUTierStandardNameValue](#toutierstandardnamevalue)
- [TariffStatementTypeValue](#tariffstatementtypevalue)
- [TaxExemptStatusValue](#taxexemptstatusvalue)
- [UnitOfMeasureValue](#unitofmeasurevalue)
- [UpdateFrequencyValue](#updatefrequencyvalue)
- [VoltageLevelValue](#voltagelevelvalue)

---

## Core Rate Plan Entities

<DiagramViewer src="../diagrams/dictionary/core-rate-plan-entities.svg" alt="Core Rate Plan Entities diagram" />

### URPXPackage

**URI:** `https://urpx-org.github.io/urpx/ontology/URPXPackage`  
**Parent:** `owl:Thing`

**Description:** URPX's exchange package: a package of URPX content for exchange between systems.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeReceived` | Datatype | 0..1 | `xsd:dateTime` | Date and time the document was received |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Links document to rate plans |
| `urpx:hasRatePlanModifier` | Object | 0..* | [`RatePlanModifier`](#rateplanmodifier) | Rate plan modifiers available in this document |
| `urpx:hasTariffPublication` | Object | 0..* | [`SourcePublication`](#sourcepublication) | References to formal tariff publications |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:targetURPXVersion` | Datatype | 1..1 | `xsd:anyURI` | The URPX ontology version this document was authored against. |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### RatePlan

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlan`  
**Parent:** `owl:Thing`

**Description:** Stable identity of a utility rate plan, independent of time.

**Semantic Context:**  
A RatePlan represents the regulatory-approved pricing structure that
persists across time, containing multiple versions as rates change
due to regulatory orders, fuel adjustments, or seasonal variations.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:applicableToRateGroup` | Object | 0..* | [`RateGroup`](#rategroup) | Rate groups this modifier or rate plan can apply to |
| `urpx:applicableToRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Rate plans this modifier or supply plan can be applied to |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasIdentifier` | Object | 0..* | [`RatePlanIdentifier`](#rateplanidentifier) | Links an organization identity, rate plan, or rate plan modifier to a typed external identifier. |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:hasRateGroup` | Object | 0..* | [`RateGroup`](#rategroup) | Links rate plan to specific rate group |
| `urpx:hasServiceClass` | Object | 0..* | [`ServiceClass`](#serviceclass) | Service classes applicable to this rate plan |
| `urpx:initialEffectiveDate` | Datatype | 1..1 | `xsd:date` | Date when this rate plan was first introduced |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version |
| `urpx:ratePlanUniqueIdentifier` | Datatype | 1..1 | `xsd:string` | Unique rate plan identifier using alphanumeric and hyphen only |
| `urpx:serviceRole` | Datatype | 0..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### RatePlanIdentifier

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlanIdentifier`  
**Parent:** `owl:Thing`

**Description:** A typed, URI-addressable identifier for a RatePlan (e.g., CA MIDAS RIN, utility tariff code).

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:notation` | Datatype | 1..1 | `xsd:string` | — |
| `urpx:scheme` | Datatype | 1..1 | — | URI identifying the identifier scheme or naming authority for a RatePlanIdentifier or RatePlanModifierIdentifier. |

---

### RatePlanVersion

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlanVersion`  
**Parent:** `owl:Thing`

**Description:** Derived, materialized complete snapshot of the resolved rate plan facts for a temporal window — the read artifact.

**Semantic Context:**  
Each RatePlanVersion represents the actual rates customers pay during
a specific time period. Versions transition seamlessly to ensure
continuous pricing coverage.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:applicableToRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Rate plans this modifier or supply plan can be applied to |
| `urpx:applicableToRatePlanVersion` | Object | 0..* | [`RatePlanVersion`](#rateplanversion) | Rate plan versions this modifier can be applied to |
| `urpx:changeDescription` | Datatype | 0..1 | `xsd:string` | Detailed explanation of changes |
| `urpx:changeReason` | Datatype | 1..1 | — | Reason for version change (regulatory filing categories) |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:customerChoice` | Datatype | 0..1 | — | Indicates whether enrollment in this rate plan version is voluntary or mandatory |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Materialization timestamp: when this derived snapshot was generated. Not an authored lifecycle date. |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Materialization timestamp with dateTime precision: when this derived snapshot was generated. Not an authored lifecycle date. |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:forRatePlan` | Object | 1..1 | [`RatePlan`](#rateplan) | Links a derived RatePlanVersion snapshot back to the RatePlan identity it was built for. |
| `urpx:hasCoverageClaim` | Object | 1..1 | [`CoverageClaim`](#coverageclaim) | Attaches a CoverageClaim to a derived snapshot or a scenario cost model. |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasEligibilityRule` | Object | 0..* | [`EligibilityRule`](#eligibilityrule) | Customer qualification rules |
| `urpx:hasModifierOptions` | Object | 0..* | [`RatePlanModifier`](#rateplanmodifier) | Links rate plan version to its available modifier options |
| `urpx:hasModifierVersionOptions` | Object | 0..* | [`RatePlanModifierVersion`](#rateplanmodifierversion) | Modifier versions available as options for this rate plan version |
| `urpx:hasPlanElements` | Object | 1..1 | [`PlanElements`](#planelements) | Centralized temporal and pricing elements for rate plan or modifier versions |
| `urpx:hasPriceDefinitionReference` | Object | 0..* | [`PriceDefinitionReference`](#pricedefinitionreference) | Attaches a PriceDefinitionReference relator to an authored model or a derived snapshot. |
| `urpx:hasPrices` | Object | 1..1 | [`Prices`](#prices) | Links a rate plan version or authored pricing model to actual price instances with amounts or unit prices |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:isDefault` | Datatype | 0..1 | `xsd:boolean` | Indicates this rate plan version is the default selection |
| `urpx:minimumTenure` | Datatype | 0..1 | `xsd:duration` | The minimum duration a customer must remain enrolled in a rate plan, program, or service offering. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:observesHoliday` | Object | 0..* | [`Holiday`](#holiday) | Specific holidays observed by this rate plan version |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:publishedBy` | Object | 1..1 | [`Organization`](#organization) | Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version |
| `urpx:referencesGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | References a general rule applicable to this rate plan version or modifier version |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |
| `urpx:serviceRole` | Datatype | 1..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### RatePlanModifier

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlanModifier`  
**Parent:** `owl:Thing`

**Description:** Stable identity of a rate plan modifier, independent of time.

**Semantic Context:**  
A RatePlanModifier represents an optional add-on or rider that can
modify the base rate plan. Examples include low-income discounts,
demand response programs, and renewable energy riders.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:applicableToRateGroup` | Object | 0..* | [`RateGroup`](#rategroup) | Rate groups this modifier or rate plan can apply to |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasIdentifier` | Object | 0..* | [`RatePlanModifierIdentifier`](#rateplanmodifieridentifier) | Links an organization identity, rate plan, or rate plan modifier to a typed external identifier. |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:hasServiceClass` | Object | 0..* | [`ServiceClass`](#serviceclass) | Service classes applicable to this rate plan |
| `urpx:initialEffectiveDate` | Datatype | 1..1 | `xsd:date` | Date when this rate plan was first introduced |
| `urpx:modifierUniqueIdentifier` | Datatype | 1..1 | `xsd:string` | Unique modifier identifier using alphanumeric and hyphen only |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version |
| `urpx:serviceRole` | Datatype | 0..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### RatePlanModifierIdentifier

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlanModifierIdentifier`  
**Parent:** `owl:Thing`

**Description:** A typed, URI-addressable identifier for a RatePlanModifier (e.g., CA MIDAS RIN, utility tariff code).

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:notation` | Datatype | 1..1 | `xsd:string` | — |
| `urpx:scheme` | Datatype | 1..1 | — | URI identifying the identifier scheme or naming authority for a RatePlanIdentifier or RatePlanModifierIdentifier. |

---

### RatePlanModifierVersion

**URI:** `https://urpx-org.github.io/urpx/ontology/RatePlanModifierVersion`  
**Parent:** `owl:Thing`

**Description:** Derived, materialized snapshot of the resolved rate plan modifier facts for a temporal window.

**Semantic Context:**  
A time-bound instance of a modifier, analogous to RatePlanVersion.
Modifier versions track changes to rider rates and conditions over time.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:applicableToRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Rate plans this modifier or supply plan can be applied to |
| `urpx:applicableToRatePlanVersion` | Object | 0..* | [`RatePlanVersion`](#rateplanversion) | Rate plan versions this modifier can be applied to |
| `urpx:changeDescription` | Datatype | 0..1 | `xsd:string` | Detailed explanation of changes |
| `urpx:changeReason` | Datatype | 1..1 | — | Reason for version change (regulatory filing categories) |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:forRatePlanModifier` | Object | 1..1 | [`RatePlanModifier`](#rateplanmodifier) | Links a derived RatePlanModifierVersion snapshot back to the RatePlanModifier identity it was built for. |
| `urpx:hasCoverageClaim` | Object | 1..1 | [`CoverageClaim`](#coverageclaim) | Attaches a CoverageClaim to a derived snapshot or a scenario cost model. |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasEligibilityRule` | Object | 0..* | [`EligibilityRule`](#eligibilityrule) | Customer qualification rules |
| `urpx:hasPlanElements` | Object | 1..1 | [`PlanElements`](#planelements) | Centralized temporal and pricing elements for rate plan or modifier versions |
| `urpx:hasPriceDefinitionReference` | Object | 0..* | [`PriceDefinitionReference`](#pricedefinitionreference) | Attaches a PriceDefinitionReference relator to an authored model or a derived snapshot. |
| `urpx:hasPrices` | Object | 1..1 | [`Prices`](#prices) | Links a rate plan version or authored pricing model to actual price instances with amounts or unit prices |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:minimumTenure` | Datatype | 0..1 | `xsd:duration` | The minimum duration a customer must remain enrolled in a rate plan, program, or service offering. |
| `urpx:modifierCategory` | Datatype | 0..1 | — | Category of modifier for organization (Business categorization) |
| `urpx:modifierType` | Datatype | 0..1 | — | Type of rate plan modifier (utility rate plan modifiers) |
| `urpx:modifierVersionNumber` | Datatype | 1..1 | `xsd:string` | Modifier version number |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:publishedBy` | Object | 1..1 | [`Organization`](#organization) | Organization that publishes this rate plan, rate plan modifier, rate plan version, or rate plan modifier version |
| `urpx:referencesGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | References a general rule applicable to this rate plan version or modifier version |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |
| `urpx:serviceRole` | Datatype | 1..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### AccountServiceAgreement

**URI:** `https://urpx-org.github.io/urpx/ontology/AccountServiceAgreement`  
**Parent:** `owl:Thing`

**Description:** Links rate plan contracts to service delivery terms

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:contractEffectiveDate` | Datatype | 1..1 | `xsd:dateTime` | Effective date and time of service agreement contract |
| `urpx:contractExpirationDate` | Datatype | 0..1 | `xsd:dateTime` | Expiration date and time of service agreement contract |

---

## Pricing & Alternatives Entities

<DiagramViewer src="../diagrams/dictionary/pricing-alternatives-entities.svg" alt="Pricing & Alternatives Entities diagram" />

### PricingModel

**URI:** `https://urpx-org.github.io/urpx/ontology/PricingModel`  
**Parent:** `owl:Thing`

**Description:** Authored, citable, possibly-partial statement of pricing for a rate plan — the unit a publication actually carries.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:confidence` | Datatype | 1..1 | — | The epistemic confidence of the subject's pricing content. |
| `urpx:documentedBy` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an authored PricingModel (or a resolved reference) to a SourceReference identifying the source evidence it models, interprets, or was derived from. |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Validity-window start for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Validity-window start, with dateTime precision, for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Forecast end: provisional end date subject to change, as with pricing effective until further notice. Distinct from the validity-window end carried by expirationDate. |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Forecast end with dateTime precision: provisional end subject to change, as with pricing effective until further notice. Distinct from the validity-window end carried by expirationDateTime. |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Validity-window end for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Validity-window end, with dateTime precision, for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:hasGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | Links a TariffFiling or PricingModel to general rules that apply across rate plans. |
| `urpx:hasPlanElements` | Object | 0..1 | [`PlanElements`](#planelements) | Centralized temporal and pricing elements for rate plan or modifier versions |
| `urpx:hasPrices` | Object | 0..1 | [`Prices`](#prices) | Links a rate plan version or authored pricing model to actual price instances with amounts or unit prices |
| `urpx:pursuantTo` | Object | 0..* | [`GeneralRule`](#generalrule) | The general rule that legally grounds this PricingModel or PriceDefinition. |
| `urpx:referencesRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Plan-specific content link (PricingModel → RatePlan); or links a PriorRatePlan record to the actual rate plan. |
| `urpx:referencesRatePlanModifier` | Object | 0..* | [`RatePlanModifier`](#rateplanmodifier) | Plan-specific content link: this PricingModel applies to this RatePlanModifier. |
| `urpx:supersedes` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links a publication unit to the prior one it supersedes: a tariff filing to the prior filing, or an authored pricing model to the prior model in the same thread. The superseded subject's effective span ends when the superseding one begins; it remains valid history. Supersession is a forward-in-time change of effective period — it is NOT a same-period correction (urpx:replaces) nor a cancellation/withdrawal (urpx:cancelledBy). |
| `urpx:withinPublication` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Inverse of containsPricingModel: the TariffFiling this PricingModel was published within. |

---

### ModelCollection

**URI:** `https://urpx-org.github.io/urpx/ontology/ModelCollection`  
**Parent:** `owl:Thing`

**Description:** Authored grouping of PricingModels under a persisting, citable URI, with machine-readable role/kind.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:collectionRole` | Datatype | 0..1 | — | The role/kind of a ModelCollection. |
| `urpx:collectsPricingModel` | Object | 0..* | [`PricingModel`](#pricingmodel) | Reference-set membership: a ModelCollection collects PricingModels (members appended over time). |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |

---

### Prices

**URI:** `https://urpx-org.github.io/urpx/ontology/Prices`  
**Parent:** `owl:Thing`

**Description:** Centralized container for all price-related content within a rate plan version. Consolidates base price sets and alternative price sets, providing single point of access for all prices. Each RatePlanVersion has exactly one Prices container.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasPrice` | Object | 0..* | [`Price`](#price) | Links price set to individual prices |
| `urpx:hasPriceSet` | Object | 0..* | [`PriceSet`](#priceset) | Links Prices container to base/default price sets |
| `urpx:hasPriceSetAlternatives` | Object | 0..* | [`PriceSetAlternatives`](#pricesetalternatives) | Links Prices container directly to PriceSetAlternatives instances for mutually exclusive price set options. |

---

### PriceSet

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceSet`  
**Parent:** `owl:Thing`

**Description:** Logical grouping of related prices for organization and calculation

**Semantic Context:**  
PriceSets organize prices into meaningful groups (e.g., "Summer Energy
Prices", "Demand Prices") that simplify rate understanding and bill
presentation.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:adder` | Datatype | 0..1 | `xsd:decimal` | Fixed amount added to calculated price |
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:baseQuantity` | Datatype | 0..1 | `xsd:decimal` | Base quantity for per-unit pricing (e.g., 'per 2 households') |
| `urpx:billPortion` | Datatype | 0..1 | — | Identifies which portion of the bill this charge, metric, or price set belongs to |
| `urpx:billingCycleCode` | Datatype | 0..1 | `xsd:string` | Billing cycle identifier aligned with utility billing periods |
| `urpx:chargeCategory` | Datatype | 0..1 | — | Business purpose classification of a charge |
| `urpx:chargeType` | Datatype | 0..* | — | Specific implementation type of a charge |
| `urpx:commodity` | Datatype | 0..1 | — | Industry-standard commodity type specification |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasAlternative` | Object | 0..* | [`ProfileAlternative`](#profilealternative) | Links alternatives container to specific price set options |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasMetricSpecification` | Object | 0..1 | [`MetricSpecification`](#metricspecification) | Defines measurement specifications for prices or pricing model components |
| `urpx:hasPrice` | Object | 1..* | [`Price`](#price) | Links price set to individual prices |
| `urpx:hasPriceSummary` | Object | 0..* | [`PriceSummary`](#pricesummary) | Links price set to summary totals |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:multiplier` | Datatype | 0..1 | `xsd:decimal` | Multiplication factor for price calculations |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:priceMatchingKey` | Datatype | 0..1 | `xsd:string` | Key for identifying equivalent prices across alternatives |
| `urpx:primaryChargeType` | Datatype | 0..1 | — | The primary charge type when multiple types apply |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesPriceDefinition` | Object | 0..1 | [`PriceDefinition`](#pricedefinition) | IRI reference linking a Price, PriceSet, or PriceSetAlternative instance to its PriceDefinition |
| `urpx:referencesServiceBracket` | Object | 0..1 | [`ServiceBracket`](#servicebracket) | IRI reference to an exact service bracket for price application |
| `urpx:referencesServiceTier` | Object | 0..1 | [`ServiceTier`](#servicetier) | IRI reference to a logical service tier for price application |
| `urpx:referencesTouPeriod` | Object | 0..1 | [`TOUPeriod`](#touperiod) | IRI reference to TOU period for price application |
| `urpx:serviceTierNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to the logical service tier |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:touPeriodNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to TOU period ID for price application |

---

### PriceSetAlternative

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceSetAlternative`  
**Parent:** `PriceSet`

**Description:** Price set that represents one alternative in a mutually exclusive set of options. Subclass of PriceSet with required reference to applicable ProfileAlternative. Lives in Prices container alongside base price sets, but distinguished by its connection to dimension-based alternatives.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:adder` | Datatype | 0..1 | `xsd:decimal` | Fixed amount added to calculated price |
| `urpx:alternativeLabel` | Datatype | 0..1 | `xsd:string` | Human-readable label describing this alternative's profile |
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:baseQuantity` | Datatype | 0..1 | `xsd:decimal` | Base quantity for per-unit pricing (e.g., 'per 2 households') |
| `urpx:billPortion` | Datatype | 0..1 | — | Identifies which portion of the bill this charge, metric, or price set belongs to |
| `urpx:billingCycleCode` | Datatype | 0..1 | `xsd:string` | Billing cycle identifier aligned with utility billing periods |
| `urpx:chargeCategory` | Datatype | 0..1 | — | Business purpose classification of a charge |
| `urpx:chargeType` | Datatype | 0..* | — | Specific implementation type of a charge |
| `urpx:commodity` | Datatype | 0..1 | — | Industry-standard commodity type specification |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasAlternative` | Object | 0..* | [`ProfileAlternative`](#profilealternative) | Links alternatives container to specific price set options |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasMetricSpecification` | Object | 0..1 | [`MetricSpecification`](#metricspecification) | Defines measurement specifications for prices or pricing model components |
| `urpx:hasPrice` | Object | 1..* | [`Price`](#price) | Links price set to individual prices |
| `urpx:hasPriceSummary` | Object | 0..* | [`PriceSummary`](#pricesummary) | Links price set to summary totals |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:multiplier` | Datatype | 0..1 | `xsd:decimal` | Multiplication factor for price calculations |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:priceMatchingKey` | Datatype | 0..1 | `xsd:string` | Key for identifying equivalent prices across alternatives |
| `urpx:primaryChargeType` | Datatype | 0..1 | — | The primary charge type when multiple types apply |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesPriceDefinition` | Object | 0..1 | [`PriceDefinition`](#pricedefinition) | IRI reference linking a Price, PriceSet, or PriceSetAlternative instance to its PriceDefinition |
| `urpx:referencesProfileAlternative` | Object | 1..1 | [`ProfileAlternative`](#profilealternative) | IRI reference linking pricing, schedule, or tier resources to their applicable ProfileAlternative. |
| `urpx:referencesServiceBracket` | Object | 0..1 | [`ServiceBracket`](#servicebracket) | IRI reference to an exact service bracket for price application |
| `urpx:referencesServiceTier` | Object | 0..1 | [`ServiceTier`](#servicetier) | IRI reference to a logical service tier for price application |
| `urpx:referencesTouPeriod` | Object | 0..1 | [`TOUPeriod`](#touperiod) | IRI reference to TOU period for price application |
| `urpx:serviceTierNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to the logical service tier |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:touPeriodNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to TOU period ID for price application |

---

### PriceSetAlternatives

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceSetAlternatives`  
**Parent:** `owl:Thing`

**Description:** Set of price sets that represents a set of alternatives in a mutually exclusive set of options.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasPriceSetAlternative` | Object | 1..* | [`PriceSetAlternative`](#pricesetalternative) | Links PriceSetAlternatives container to individual PriceSetAlternative instances. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceMatchingKey` | Datatype | 0..1 | `xsd:string` | Key for identifying equivalent prices across alternatives |
| `urpx:referencesProfileAlternatives` | Object | 1..1 | [`ProfileAlternatives`](#profilealternatives) | Links price set alternatives or price definition container to the profile alternatives definition. |

---

### Price

**URI:** `https://urpx-org.github.io/urpx/ontology/Price`  
**Parent:** `owl:Thing`

**Description:** Individual pricing component with an amount and applicability rules

**Semantic Context:**  
Prices are the atomic units of utility pricing. Each price represents
a specific cost element with its own calculation method, applicability
rules, and pricing parameters.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:adder` | Datatype | 0..1 | `xsd:decimal` | Fixed amount added to calculated price |
| `urpx:amount` | Datatype | 0..1 | `xsd:decimal` | Fixed amount for prices not based on consumption |
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:basePrice` | Datatype | 0..1 | `xsd:decimal` | Base price before adjustments |
| `urpx:baseQuantity` | Datatype | 0..1 | `xsd:decimal` | Base quantity for per-unit pricing (e.g., 'per 2 households') |
| `urpx:basedOnPrice` | Datatype | 0..* | — | References another price or price summary that this price depends on for calculation |
| `urpx:billPortion` | Datatype | 0..1 | — | Identifies which portion of the bill this charge, metric, or price set belongs to |
| `urpx:billingCycleCode` | Datatype | 0..1 | `xsd:string` | Billing cycle identifier aligned with utility billing periods |
| `urpx:chargeCategory` | Datatype | 0..1 | — | Business purpose classification of a charge |
| `urpx:chargeType` | Datatype | 0..* | — | Specific implementation type of a charge |
| `urpx:commodity` | Datatype | 0..1 | — | Industry-standard commodity type specification |
| `urpx:currentPrice` | Datatype | 0..1 | `xsd:decimal` | Current effective price |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasDynamicPricing` | Object | 0..1 | [`DynamicPricing`](#dynamicpricing) | Links price to dynamic pricing configuration |
| `urpx:hasMetricSpecification` | Object | 0..1 | [`MetricSpecification`](#metricspecification) | Defines measurement specifications for prices or pricing model components |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:multiplier` | Datatype | 0..1 | `xsd:decimal` | Multiplication factor for price calculations |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:priceMatchingKey` | Datatype | 0..1 | `xsd:string` | Key for identifying equivalent prices across alternatives |
| `urpx:primaryChargeType` | Datatype | 0..1 | — | The primary charge type when multiple types apply |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesPriceDefinition` | Object | 0..1 | [`PriceDefinition`](#pricedefinition) | IRI reference linking a Price, PriceSet, or PriceSetAlternative instance to its PriceDefinition |
| `urpx:referencesServiceBracket` | Object | 0..1 | [`ServiceBracket`](#servicebracket) | IRI reference to an exact service bracket for price application |
| `urpx:referencesServiceTier` | Object | 0..1 | [`ServiceTier`](#servicetier) | IRI reference to a logical service tier for price application |
| `urpx:referencesTouPeriod` | Object | 0..1 | [`TOUPeriod`](#touperiod) | IRI reference to TOU period for price application |
| `urpx:serviceTierNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to the logical service tier |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:touPeriodNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to TOU period ID for price application |
| `urpx:unitPrice` | Datatype | 0..1 | `xsd:decimal` | Price per unit of consumption |

---

### PriceDefinition

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceDefinition`  
**Parent:** `owl:Thing`

**Description:** A structural definition of a price, excluding instance-specific details like start/end dates, amount, and unit price.

**Semantic Context:**  
A PriceDefinition provides structural price information that can be
shared across multiple prices, reducing redundancy in rate plan
specifications.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:baseQuantity` | Datatype | 0..1 | `xsd:decimal` | Base quantity for per-unit pricing (e.g., 'per 2 households') |
| `urpx:basedOnPrice` | Datatype | 0..* | — | References another price or price summary that this price depends on for calculation |
| `urpx:billPortion` | Datatype | 0..1 | — | Identifies which portion of the bill this charge, metric, or price set belongs to |
| `urpx:billingCycleCode` | Datatype | 0..1 | `xsd:string` | Billing cycle identifier aligned with utility billing periods |
| `urpx:chargeCategory` | Datatype | 0..1 | — | Business purpose classification of a charge |
| `urpx:chargeType` | Datatype | 0..* | — | Specific implementation type of a charge |
| `urpx:commodity` | Datatype | 0..1 | — | Industry-standard commodity type specification |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasMetricSpecification` | Object | 0..1 | [`MetricSpecification`](#metricspecification) | Defines measurement specifications for prices or pricing model components |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:priceMatchingKey` | Datatype | 0..1 | `xsd:string` | Key for identifying equivalent prices across alternatives |
| `urpx:primaryChargeType` | Datatype | 0..1 | — | The primary charge type when multiple types apply |
| `urpx:pursuantTo` | Object | 0..* | [`GeneralRule`](#generalrule) | The general rule that legally grounds this PricingModel or PriceDefinition. |
| `urpx:referencesLedger` | Object | 1..1 | [`Ledger`](#ledger) | Links a PriceDefinition to its associated Ledger. |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesProfileAlternative` | Object | 0..* | [`ProfileAlternative`](#profilealternative) | IRI reference linking pricing, schedule, or tier resources to their applicable ProfileAlternative. |
| `urpx:referencesProfileAlternatives` | Object | 0..1 | [`ProfileAlternatives`](#profilealternatives) | Links price set alternatives or price definition container to the profile alternatives definition. |
| `urpx:referencesServiceBracket` | Object | 0..1 | [`ServiceBracket`](#servicebracket) | IRI reference to an exact service bracket for price application |
| `urpx:referencesServiceTier` | Object | 0..1 | [`ServiceTier`](#servicetier) | IRI reference to a logical service tier for price application |
| `urpx:referencesTouPeriod` | Object | 0..1 | [`TOUPeriod`](#touperiod) | IRI reference to TOU period for price application |
| `urpx:serviceTierNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to the logical service tier |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:touPeriodNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to TOU period ID for price application |

---

### PriceDefinitionReference

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceDefinitionReference`  
**Parent:** `owl:Thing`

**Description:** Addressable relationship between a model or snapshot and a PriceDefinition: the place inclusion, resolution mode, source evidence, temporal scope, and resolution provenance live.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:documentedBy` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an authored PricingModel (or a resolved reference) to a SourceReference identifying the source evidence it models, interprets, or was derived from. |
| `urpx:referenceInclusion` | Datatype | 1..1 | — | Whether a referenced price definition is included in the plan or retrieved from elsewhere. |
| `urpx:referencesPriceDefinition` | Object | 0..1 | [`PriceDefinition`](#pricedefinition) | IRI reference linking a Price, PriceSet, or PriceSetAlternative instance to its PriceDefinition |
| `urpx:resolvedFrom` | Object | 0..* | [`ModelCollection`](#modelcollection) | Traceability path for retrievedElsewhere references: the ModelCollection thread the reference resolves against. |

---

### PriceSummary

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceSummary`  
**Parent:** `owl:Thing`

**Description:** Total or subtotal aggregating multiple price line items

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:includesPrice` | Object | 2..* | [`Price`](#price) | Prices included in this summary for aggregation |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:summaryAmount` | Datatype | 0..1 | `xsd:decimal` | Calculated total value for this summary |

---

### PriceUpdateRule

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceUpdateRule`  
**Parent:** `owl:Thing`

**Description:** Rule defining when and how dynamic prices are calculated

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priority` | Datatype | 0..1 | `xsd:integer` | Priority for overlapping entities |

---

## Coverage & Evaluation Entities

<DiagramViewer src="../diagrams/dictionary/coverage-evaluation-entities.svg" alt="Coverage & Evaluation Entities diagram" />

### CoverageClaim

**URI:** `https://urpx-org.github.io/urpx/ontology/CoverageClaim`  
**Parent:** `owl:Thing`

**Description:** A scoped, computed verdict on what can be answered from a snapshot or cost model under stated conditions.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:completenessResult` | Datatype | 1..1 | — | The completeness verdict of a CoverageClaim. |
| `urpx:confidence` | Datatype | 0..1 | — | The epistemic confidence of the subject's pricing content. |
| `urpx:explainedBy` | Object | 0..* | [`Evaluation`](#evaluation) | Links a CoverageClaim (verdict) to the Evaluation (rationale) behind it. |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |

---

### Evaluation

**URI:** `https://urpx-org.github.io/urpx/ontology/Evaluation`  
**Parent:** `owl:Thing`

**Description:** Portable rationale behind a snapshot or coverage verdict: which inputs were selected, excluded, or missing, and why.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:evaluationKind` | Datatype | 0..1 | — | The kind of an Evaluation. |

---

## Source & Publication Entities

<DiagramViewer src="../diagrams/dictionary/source-publication-entities.svg" alt="Source & Publication Entities diagram" />

### SourcePublication

**URI:** `https://urpx-org.github.io/urpx/ontology/SourcePublication`  
**Parent:** `owl:Thing`

**Description:** An external, third-party published artifact (regulatory filing, PSC statement, supplier price sheet, notice, contract) cited as source evidence by URPX facts.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was last updated |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:dateTimeReceived` | Datatype | 0..1 | `xsd:dateTime` | Date and time the document was received |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:filingNumber` | Datatype | 0..1 | `xsd:string` | Official regulatory filing or docket number |
| `urpx:issuingAuthority` | Datatype | 0..1 | `xsd:string` | Organization that issued or approved the publication |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:pageReference` | Datatype | 0..1 | `xsd:string` | Page numbers or sections where rate plan information appears |
| `urpx:publicationType` | Datatype | 0..1 | — | The kind of external source publication. |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### SourcePublicationType

**URI:** `https://urpx-org.github.io/urpx/ontology/SourcePublicationType`  
**Parent:** `owl:Thing`

---

### TariffFiling

**URI:** `https://urpx-org.github.io/urpx/ontology/TariffFiling`  
**Parent:** `owl:Thing`

**Description:** An excerpt of a SourcePublication that contains one or more PricingModels — the regulatory publication unit.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:cancelledBy` | Datatype | 0..1 | — | Marks a tariff filing as no longer valid (voided) and links it to what cancelled it: the successor filing for a same-period correction (see urpx:replacedBy), or the publication that withdrew it when there is no successor. A cancelled filing is retained for audit but excluded from active reads. |
| `urpx:cancelledOn` | Datatype | 0..1 | `xsd:date` | Date on which a tariff filing was cancelled or voided — when its content left the active set. |
| `urpx:cancelsPriceDefinition` | Object | 0..* | [`PriceDefinition`](#pricedefinition) | Asserts that this tariff filing cancels the referenced price definition. |
| `urpx:containsPricingModel` | Object | 1..* | [`PricingModel`](#pricingmodel) | Links a TariffFiling to the PricingModels it contains. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:documentedBy` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an authored PricingModel (or a resolved reference) to a SourceReference identifying the source evidence it models, interprets, or was derived from. |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | Links a TariffFiling or PricingModel to general rules that apply across rate plans. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:replacedBy` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Inverse of urpx:replaces: the successor filing that corrects and voids this one for the same effective period. |
| `urpx:replaces` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Links a corrected tariff filing to the prior filing it replaces for the SAME effective period. The replaced filing is voided; the replacing filing occupies the same effective window with corrected content. Use urpx:supersedes for a forward-in-time change of effective period; use urpx:replaces for an in-place correction of an existing period. |
| `urpx:supersedes` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Links a publication unit to the prior one it supersedes: a tariff filing to the prior filing, or an authored pricing model to the prior model in the same thread. The superseded subject's effective span ends when the superseding one begins; it remains valid history. Supersession is a forward-in-time change of effective period — it is NOT a same-period correction (urpx:replaces) nor a cancellation/withdrawal (urpx:cancelledBy). |

---

### SourceReference

**URI:** `https://urpx-org.github.io/urpx/ontology/SourceReference`  
**Parent:** `owl:Thing`

**Description:** Structured reference from a URPX fact to the external source it was interpreted from (publication, API, database, manual entry) — filename/URL, media type, and an optional sub-document selector.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:accessURL` | Datatype | 0..1 | `xsd:anyURI` | URL from which the data was directly accessed or downloaded |
| `urpx:anchorLink` | Datatype | 0..1 | `xsd:anyURI` | URL or fragment identifier pointing to a specific location within a tariff book PDF |
| `urpx:dataSourceType` | Datatype | 0..1 | — | Type of source of the data |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateRetrieved` | Datatype | 0..1 | `xsd:date` | Date on which data was retrieved |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was last updated |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:dateTimeRetrieved` | Datatype | 0..1 | `xsd:dateTime` | Date and time on which data was retrieved |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:fileName` | Datatype | 0..1 | `xsd:string` | Name of document or file including filename extension if present. |
| `urpx:hasSelector` | Object | 0..* | [`Selector`](#selector) | Points into a region of the source using a Web Annotation selector (external vocabulary, used by reference). |
| `urpx:hasTariffBookReference` | Object | 0..* | [`TariffBookReference`](#tariffbookreference) | Links a SourceReference to tariff book sections |
| `urpx:hasTariffStatementReference` | Object | 0..* | [`TariffStatementReference`](#tariffstatementreference) | Links a SourceReference to a structured tariff statement filing reference |
| `urpx:mediaType` | Datatype | 0..1 | — | Document media type as published by IANA. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:pageEnd` | Datatype | 0..1 | `xsd:integer` | Ending page number in the source document |
| `urpx:pageStart` | Datatype | 0..1 | `xsd:integer` | Starting page number in the source document |
| `urpx:sourcePublication` | Object | 0..1 | [`SourcePublication`](#sourcepublication) | The SourcePublication a SourceReference points at, when the source is a publication. |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |

---

### TariffBookReference

**URI:** `https://urpx-org.github.io/urpx/ontology/TariffBookReference`  
**Parent:** `owl:Thing`

**Description:** Structured reference to a specific location within a tariff book PDF

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:anchorLink` | Datatype | 0..1 | `xsd:anyURI` | URL or fragment identifier pointing to a specific location within a tariff book PDF |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was last updated |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:dateTimeReceived` | Datatype | 0..1 | `xsd:dateTime` | Date and time the document was received |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:leafEnd` | Datatype | 0..1 | `xsd:string` | Last leaf number in the tariff book for the referenced content |
| `urpx:leafStart` | Datatype | 0..1 | `xsd:string` | First leaf number in the tariff book for the referenced content |
| `urpx:pageEnd` | Datatype | 0..1 | `xsd:integer` | Ending page number in the source document |
| `urpx:pageStart` | Datatype | 0..1 | `xsd:integer` | Starting page number in the source document |

---

### TariffStatementReference

**URI:** `https://urpx-org.github.io/urpx/ontology/TariffStatementReference`  
**Parent:** `owl:Thing`

**Description:** Structured reference to a PSC statement filing PDF with provenance and statement type

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:anchorLink` | Datatype | 0..1 | `xsd:anyURI` | URL or fragment identifier pointing to a specific location within a tariff book PDF |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was last updated |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:dateTimeReceived` | Datatype | 0..1 | `xsd:dateTime` | Date and time the document was received |
| `urpx:leafEnd` | Datatype | 0..1 | `xsd:string` | Last leaf number in the tariff book for the referenced content |
| `urpx:leafStart` | Datatype | 0..1 | `xsd:string` | First leaf number in the tariff book for the referenced content |
| `urpx:pageEnd` | Datatype | 0..1 | `xsd:integer` | Ending page number in the source document |
| `urpx:pageStart` | Datatype | 0..1 | `xsd:integer` | Starting page number in the source document |
| `urpx:tariffStatementType` | Datatype | 0..1 | — | Type of regulatory statement filing (PSC statement types) |

---

## Metric & Measurement Entities

<DiagramViewer src="../diagrams/dictionary/metric-measurement-entities.svg" alt="Metric & Measurement Entities diagram" />

### MetricInput

**URI:** `https://urpx-org.github.io/urpx/ontology/MetricInput`  
**Parent:** `owl:Thing`

**Description:** Organizational unit for pricing rules supporting measured MetricInputs (raw meter data), profile MetricInputs (profile properties), and calculated MetricInputs (derived metrics)

**Semantic Context:**  
MetricInput is the organizational unit for pricing rules. It supports
measured inputs (raw meter data), calculated inputs (derived metrics),
aggregated inputs (sum of other inputs), and profile inputs (based on
customer/service point attributes). Prices and ledgers reference
MetricInputs rather than defining measurements inline.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:calculationRule` | Datatype | 0..1 | — | Calculation rule for derived MetricInputs |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasMetricSpecification` | Object | 0..* | [`MetricSpecification`](#metricspecification) | Defines measurement specifications for prices or pricing model components |
| `urpx:metricInputType` | Datatype | 1..1 | — | Type of MetricInput for measurement organization |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:profileMetricProperty` | Datatype | 0..1 | — | IRI reference to the profile property this metric uses |

---

### MetricSpecification

**URI:** `https://urpx-org.github.io/urpx/ontology/MetricSpecification`  
**Parent:** `owl:Thing`

**Description:** Measurement specification for common billing scenarios

**Semantic Context:**  
MetricSpecification defines the technical details of what is being
measured — commodity, measurement kind, unit of measure, and interval.
Multiple MetricSpecifications can compose a single MetricInput.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:accumulationMethod` | Datatype | 0..1 | — | How measurement values accumulate over time |
| `urpx:commodity` | Datatype | 0..1 | — | Industry-standard commodity type specification |
| `urpx:flowDirection` | Datatype | 0..1 | — | Direction of energy flow for measurement |
| `urpx:intervalAlignment` | Datatype | 0..1 | — | Defines how the interval time window is anchored (e.g., rolling-to-date, billing-cycle-aligned, calendar-aligned). |
| `urpx:intervalDuration` | Datatype | 0..1 | `xsd:duration` | ISO 8601 duration for the interval. Primary specification for the time window length. |
| `urpx:intervalSelection` | Datatype | 0..1 | — | Defines how the time window data is selected or aggregated for the interval (e.g., rolling, consecutive periods, fixed period). |
| `urpx:intervalType` | Datatype | 0..1 | — | Semantic type label for the interval (optional) |
| `urpx:measurementKind` | Datatype | 0..1 | — | Kind of measurement being performed |
| `urpx:phaseCodeKind` | Datatype | 0..1 | — | Phase code classification |
| `urpx:unitOfMeasure` | Datatype | 0..1 | — | Industry-standard unit of measure specification |

---

### CalculationMethod

**URI:** `https://urpx-org.github.io/urpx/ontology/CalculationMethod`  
**Parent:** `owl:Thing`

**Description:** Defines how prices are calculated over billing intervals

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:aggregationMethod` | Datatype | 0..1 | — | Statistical method for aggregating interval measurements |
| `urpx:calculationFormula` | Datatype | 0..1 | `xsd:string` | Formula defining calculation logic for complex scenarios |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:intervalAlignment` | Datatype | 0..1 | — | Defines how the interval time window is anchored (e.g., rolling-to-date, billing-cycle-aligned, calendar-aligned). |
| `urpx:intervalDuration` | Datatype | 0..1 | `xsd:duration` | ISO 8601 duration for the interval. Primary specification for the time window length. |
| `urpx:intervalSelection` | Datatype | 0..1 | — | Defines how the time window data is selected or aggregated for the interval (e.g., rolling, consecutive periods, fixed period). |
| `urpx:intervalType` | Datatype | 0..1 | — | Semantic type label for the interval (optional) |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |

---

## Plan Elements & Billing Entities

<DiagramViewer src="../diagrams/dictionary/plan-elements-billing-entities.svg" alt="Plan Elements & Billing Entities diagram" />

<DiagramViewer src="../diagrams/dictionary/plan-elements-billing-entities-billing-model-detail.svg" alt="BillingModel — Pricing References" />

### PlanElements

**URI:** `https://urpx-org.github.io/urpx/ontology/PlanElements`  
**Parent:** `owl:Thing`

**Description:** Centralized container for temporal and pricing elements of rate plan or modifier versions

**Semantic Context:**  
PlanElements is the centralized container for all non-price components
of a rate plan version: temporal schedules, metric definitions, billing
models, and profile alternatives. This separation keeps the Prices
container focused on pricing data alone.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasBillingModel` | Object | 1..1 | [`BillingModel`](#billingmodel) | Billing rules and calculation patterns for rate plan version |
| `urpx:hasHolidayCalendar` | Object | 0..* | [`HolidayCalendar`](#holidaycalendar) | Holiday calendar reference for TOU calculations, versioned location data, or centralized temporal definitions |
| `urpx:hasMetricInput` | Object | 1..* | [`MetricInput`](#metricinput) | Links plan elements to metric inputs for measurement organization |
| `urpx:hasProfileAlternatives` | Object | 0..1 | [`ProfileAlternatives`](#profilealternatives) | Links plan elements to profile alternatives requiring user selection of mutually exclusive options |
| `urpx:hasSeasons` | Object | 0..* | [`Season`](#season) | Seasonal definitions for rate plan or modifier version |

---

### BillingModel

**URI:** `https://urpx-org.github.io/urpx/ontology/BillingModel`  
**Parent:** `owl:Thing`

**Description:** Billing-specific rules and calculation patterns for rate plan version with ledger-based organization

**Semantic Context:**  
A BillingModel defines the billing structure for a rate plan version,
including TOU schedules, billing cycles, and ledger configuration.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasLedger` | Object | 0..* | [`Ledger`](#ledger) | Links plan elements to ledgers for billing segregation |
| `urpx:hasPriceDefinition` | Object | 1..* | [`PriceDefinition`](#pricedefinition) | Links a billing model to its price definitions. |
| `urpx:hasServiceTiers` | Object | 0..* | [`ServiceTiers`](#servicetiers) | Container for multiple service tier definitions |
| `urpx:hasTOUSchedule` | Object | 0..* | [`TOUSchedule`](#touschedule) | Defines time-of-use pricing schedules |
| `urpx:prorationMethod` | Datatype | 0..1 | `xsd:string` | Method for prorating prices during partial billing periods |

---

### BillingCycle

**URI:** `https://urpx-org.github.io/urpx/ontology/BillingCycle`  
**Parent:** `owl:Thing`

**Description:** Standardized billing period definitions

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:cycleStartDay` | Datatype | 0..1 | `xsd:integer` | Day of month when billing cycle starts |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:intervalAlignment` | Datatype | 0..1 | — | Defines how the interval time window is anchored (e.g., rolling-to-date, billing-cycle-aligned, calendar-aligned). |
| `urpx:intervalDuration` | Datatype | 0..1 | `xsd:duration` | ISO 8601 duration for the interval. Primary specification for the time window length. |
| `urpx:intervalSelection` | Datatype | 0..1 | — | Defines how the time window data is selected or aggregated for the interval (e.g., rolling, consecutive periods, fixed period). |
| `urpx:intervalType` | Datatype | 0..1 | — | Semantic type label for the interval (optional) |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |

---

### Ledger

**URI:** `https://urpx-org.github.io/urpx/ontology/Ledger`  
**Parent:** `owl:Thing`

**Description:** Enables multiple ledgers for separation of supply vs delivery charges or other billing segregations

**Semantic Context:**  
A Ledger groups prices by measurement context within a billing model.
Each ledger references a MetricInput and contains the prices that
apply to that measurement.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasBillingCycle` | Object | 0..1 | [`BillingCycle`](#billingcycle) | Links Ledger to billing cycle definitions |
| `urpx:ledgerType` | Datatype | 0..1 | — | Type of ledger for billing segregation |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:settlementInterval` | Datatype | 0..1 | `xsd:duration` | Period over which ledger balances are settled |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |

---

### ServiceTier

**URI:** `https://urpx-org.github.io/urpx/ontology/ServiceTier`  
**Parent:** `owl:Thing`

**Description:** Logical tier identity for tiered pricing

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasServiceBracket` | Object | 1..* | [`ServiceBracket`](#servicebracket) | Contextual boundary variants attached to a service tier |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:serviceTierNumber` | Datatype | 1..1 | `xsd:integer` | Integer reference to the logical service tier |

---

### ServiceTiers

**URI:** `https://urpx-org.github.io/urpx/ontology/ServiceTiers`  
**Parent:** `owl:Thing`

**Description:** Container for multiple service tiers within a billing model

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasServiceTier` | Object | 1..* | [`ServiceTier`](#servicetier) | Logical service tier definitions for tiered pricing structures |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesProfileAlternative` | Object | 0..1 | [`ProfileAlternative`](#profilealternative) | IRI reference linking pricing, schedule, or tier resources to their applicable ProfileAlternative. |

---

### ServiceBracket

**URI:** `https://urpx-org.github.io/urpx/ontology/ServiceBracket`  
**Parent:** `owl:Thing`

**Description:** Contextual boundary definition for a service tier

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:lowerBound` | Datatype | 0..1 | `xsd:decimal` | Lower threshold value for bracket applicability |
| `urpx:lowerBoundOperator` | Datatype | 0..1 | — | Comparison operator for lower bound evaluation |
| `urpx:referencesProfileAlternative` | Object | 0..1 | [`ProfileAlternative`](#profilealternative) | IRI reference linking pricing, schedule, or tier resources to their applicable ProfileAlternative. |
| `urpx:upperBound` | Datatype | 0..1 | `xsd:decimal` | Upper threshold value for bracket applicability |
| `urpx:upperBoundOperator` | Datatype | 0..1 | — | Comparison operator for upper bound evaluation |

---

## Temporal & Scheduling Entities

<DiagramViewer src="../diagrams/dictionary/temporal-scheduling-entities.svg" alt="Temporal & Scheduling Entities diagram" />

### Season

**URI:** `https://urpx-org.github.io/urpx/ontology/Season`  
**Parent:** `owl:Thing`

**Description:** Seasonal period definition with flexible date or month-based specifications

**Semantic Context:**  
Seasons define temporal periods that affect pricing. Utilities typically
define summer/winter seasons with different rate plan structures for each.
Seasons recur yearly and are referenced by TimeBrackets.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:month` | Datatype | 0..* | `xsd:gMonth` | Month when this season applies (ISO 8601 gMonth format) |
| `urpx:seasonName` | Datatype | 1..1 | `xsd:string` | Name for this season |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:yearlyRecurrence` | Datatype | 0..1 | `xsd:boolean` | Whether this season recurs yearly |

---

### TOUSchedule

**URI:** `https://urpx-org.github.io/urpx/ontology/TOUSchedule`  
**Parent:** `owl:Thing`

**Description:** Container for time-based pricing tiers and periods with optional holiday calendar

**Semantic Context:**  
A TOUSchedule organizes time-of-use tiers into a complete schedule.
Each schedule contains tiers (Peak, Off-Peak, etc.) which contain
periods with specific time brackets.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasCalendar` | Object | 0..1 | [`HolidayCalendar`](#holidaycalendar) | References holiday calendar for this TOU schedule |
| `urpx:hasTOUTier` | Object | 1..* | [`TOUTier`](#toutier) | Links TOU schedule to pricing tiers (peak, mid-peak, off-peak) |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:referencesMetricInput` | Object | 1..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesProfileAlternative` | Object | 0..1 | [`ProfileAlternative`](#profilealternative) | IRI reference linking pricing, schedule, or tier resources to their applicable ProfileAlternative. |

---

### TOUTier

**URI:** `https://urpx-org.github.io/urpx/ontology/TOUTier`  
**Parent:** `owl:Thing`

**Description:** Price tier grouping TOU periods of similar pricing level (peak, mid-peak, off-peak)

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasTOUPeriod` | Object | 1..* | [`TOUPeriod`](#touperiod) | Links TOU tier to specific time periods |
| `urpx:tierSourceName` | Datatype | 0..1 | `xsd:string` | Utility's original name for this tier |
| `urpx:touTierNumber` | Datatype | 1..1 | `xsd:integer` | Tier number in descending price order (1=highest price) |
| `urpx:touTierStandardName` | Datatype | 0..1 | — | Standard TOU tier type name for time-of-use pricing tiers |

---

### TOUPeriod

**URI:** `https://urpx-org.github.io/urpx/ontology/TOUPeriod`  
**Parent:** `owl:Thing`

**Description:** Specific time period with unique ID for linking to prices

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasTimeBracket` | Object | 1..* | [`TimeBracket`](#timebracket) | Defines when TOU period applies |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:priority` | Datatype | 0..1 | `xsd:integer` | Priority for overlapping entities |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:touPeriodNumber` | Datatype | 1..1 | `xsd:integer` | Integer reference to TOU period ID for price application |

---

### TimeBracket

**URI:** `https://urpx-org.github.io/urpx/ontology/TimeBracket`  
**Parent:** `owl:Thing`

**Description:** Time window definition with day type and holiday handling

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:appliesInSeason` | Object | 0..* | [`Season`](#season) | Season(s) this resource applies to |
| `urpx:dayType` | Datatype | 1..1 | — | Type of days this time bracket applies to (ISO 8601 aligned) |
| `urpx:endTime` | Datatype | 1..1 | `xsd:time` | End time for this bracket |
| `urpx:includeHolidays` | Datatype | 0..1 | `xsd:boolean` | Whether this bracket applies on holidays |
| `urpx:includeNonHolidays` | Datatype | 0..1 | `xsd:boolean` | Whether this bracket applies on non-holidays |
| `urpx:startTime` | Datatype | 1..1 | `xsd:time` | Start time for this bracket |

---

### HolidayCalendar

**URI:** `https://urpx-org.github.io/urpx/ontology/HolidayCalendar`  
**Parent:** `owl:Thing`

**Description:** Collection of holidays affecting TOU period application with versioning support

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasHoliday` | Object | 1..* | [`Holiday`](#holiday) | Individual holidays in the calendar |

---

### Holiday

**URI:** `https://urpx-org.github.io/urpx/ontology/Holiday`  
**Parent:** `owl:Thing`

**Description:** Single holiday definition with date or calculation rule

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:holidayDate` | Datatype | 0..1 | `xsd:date` | Specific date for fixed holidays |
| `urpx:holidayName` | Datatype | 1..1 | `xsd:string` | Name of the holiday |
| `urpx:holidayRule` | Datatype | 0..1 | `xsd:string` | Rule for calculating holiday date |
| `urpx:observanceRule` | Datatype | 0..1 | — | How the holiday is observed when it falls on weekends (government holiday standards) |

---

### LocationDataSet

**URI:** `https://urpx-org.github.io/urpx/ontology/LocationDataSet`  
**Parent:** `owl:Thing`

**Description:** Versioned auxiliary location data including holiday calendars, timezone, and DST rules

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:daylightSavingRules` | Datatype | 0..1 | `xsd:string` | Daylight saving time rules for this location |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasHolidayCalendar` | Object | 0..* | [`HolidayCalendar`](#holidaycalendar) | Holiday calendar reference for TOU calculations, versioned location data, or centralized temporal definitions |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |

---

### DynamicPricing

**URI:** `https://urpx-org.github.io/urpx/ontology/DynamicPricing`  
**Parent:** `owl:Thing`

**Description:** Configuration for real-time or event-based variable pricing

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:dynamicPricingType` | Datatype | 1..1 | — | Type of dynamic pricing (FERC market terminology) |
| `urpx:hasPriceUpdateRule` | Object | 0..* | [`PriceUpdateRule`](#priceupdaterule) | Rules governing price updates |
| `urpx:priceCeiling` | Datatype | 0..1 | `xsd:decimal` | Maximum allowed price |
| `urpx:priceFloor` | Datatype | 0..1 | `xsd:decimal` | Minimum allowed price |
| `urpx:priceSource` | Datatype | 0..* | — | Source of dynamic price information (FERC market sources) |
| `urpx:updateFrequency` | Datatype | 0..1 | — | How frequently dynamic prices are updated (ISO 8601 intervals) |

---

### TemporalScope

**URI:** `https://urpx-org.github.io/urpx/ontology/TemporalScope`  
**Parent:** `owl:Thing`

**Description:** A role-tagged time span: which clock a date range refers to.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:scopeKind` | Datatype | 1..1 | — | The role of a TemporalScope. |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |

---

### TemporalPeriod

**URI:** `https://urpx-org.github.io/urpx/ontology/TemporalPeriod`  
**Parent:** `owl:Thing`

**Description:** A reusable named time interval (e.g. 'Q1 2026').

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:label` | Datatype | 0..1 | `xsd:string` | — |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |

---

## Condition Modeling

<DiagramViewer src="../diagrams/dictionary/condition-modeling.svg" alt="Condition Modeling diagram" />

### EligibilityRule

**URI:** `https://urpx-org.github.io/urpx/ontology/EligibilityRule`  
**Parent:** `owl:Thing`

**Description:** Conditions determining customer and service point qualification

**Semantic Context:**  
Eligibility rules encode complex business logic that determines which
customers can access specific rates, ensuring regulatory compliance
and proper rate application.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasConditionExpression` | Object | 1..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:hasDataSourceReference` | Object | 0..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |

---

### ApplicabilityRule

**URI:** `https://urpx-org.github.io/urpx/ontology/ApplicabilityRule`  
**Parent:** `owl:Thing`

**Description:** Conditions determining when a price applies to usage

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasConditionExpression` | Object | 0..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:month` | Datatype | 0..* | `xsd:gMonth` | Month when this season applies (ISO 8601 gMonth format) |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |

---

### ApplicabilityGroup

**URI:** `https://urpx-org.github.io/urpx/ontology/ApplicabilityGroup`  
**Parent:** `owl:Thing`

**Description:** Geographic and service class applicability rules for statement prices

**Semantic Context:**  
Applicability groups enable complex conditional logic for price
application, supporting sophisticated rate designs that vary by
location, customer type, or usage patterns.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:applicabilityLogic` | Datatype | 0..1 | `xsd:string` | Boolean logic for complex applicability rules |
| `urpx:hasConditionExpression` | Object | 0..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |

---

### ConditionExpression

**URI:** `https://urpx-org.github.io/urpx/ontology/ConditionExpression`  
**Parent:** `owl:Thing`

**Description:** Rule-level wrapper for structured condition applicability used in EligibilityRule, ApplicabilityRule, ApplicabilityGroup, ProfileAlternative

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:rootNode` | Datatype | 1..1 | — | Points from a ConditionExpression to its single root ConditionNode |

---

### ConditionNode

**URI:** `https://urpx-org.github.io/urpx/ontology/ConditionNode`  
**Parent:** `owl:Thing`

**Description:** Abstract superclass for nodes that may appear in a ConditionExpression tree

---

### BooleanOperationNode

**URI:** `https://urpx-org.github.io/urpx/ontology/BooleanOperationNode`  
**Parent:** `ConditionNode`

**Description:** Boolean combinator node in a condition expression tree

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:logicExpression` | Datatype | 0..1 | `xsd:string` | Optional textual expression attached to a comparison or boolean operation node |
| `urpx:operandNodes` | Datatype | 1..* | — | Child condition nodes used by a BooleanOperationNode |
| `urpx:operator` | Datatype | 1..1 | — | References the operator used by a comparison boolean-operation or nested operation node |

---

### ComparisonNode

**URI:** `https://urpx-org.github.io/urpx/ontology/ComparisonNode`  
**Parent:** `ConditionNode`

**Description:** Atomic comparison predicate in a condition expression

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:leftOperand` | Datatype | 1..1 | — | Left operand for ordered comparison or nested operation evaluation |
| `urpx:logicExpression` | Datatype | 0..1 | `xsd:string` | Optional textual expression attached to a comparison or boolean operation node |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:operator` | Datatype | 1..1 | — | References the operator used by a comparison boolean-operation or nested operation node |
| `urpx:rightOperand` | Datatype | 1..1 | — | Right operand for ordered comparison or nested operation evaluation |

---

### OperationNode

**URI:** `https://urpx-org.github.io/urpx/ontology/OperationNode`  
**Parent:** `owl:Thing`

**Description:** Expression node for nested arithmetic or derived comparison preparation

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:leftOperand` | Datatype | 1..1 | — | Left operand for ordered comparison or nested operation evaluation |
| `urpx:operator` | Datatype | 1..1 | — | References the operator used by a comparison boolean-operation or nested operation node |
| `urpx:rightOperand` | Datatype | 1..1 | — | Right operand for ordered comparison or nested operation evaluation |

---

### CustomOperandNode

**URI:** `https://urpx-org.github.io/urpx/ontology/CustomOperandNode`  
**Parent:** `owl:Thing`

**Description:** Fallback operand node for custom condition properties and custom literal values

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:booleanValue` | Datatype | 0..1 | `xsd:boolean` | Boolean literal value used in a condition operand node |
| `urpx:customConditionProperty` | Datatype | 0..1 | `xsd:string` | Fallback custom property identifier for custom operand nodes in human-readable language |
| `urpx:dateTimeValue` | Datatype | 0..1 | `xsd:dateTime` | DateTime literal value used in a condition operand node |
| `urpx:dateValue` | Datatype | 0..1 | `xsd:date` | Date literal value used in a condition operand node |
| `urpx:decimalValue` | Datatype | 0..1 | `xsd:decimal` | Decimal literal value used in a condition operand node |
| `urpx:durationValue` | Datatype | 0..1 | `xsd:duration` | Duration literal value used in a condition operand node |
| `urpx:gMonthValue` | Datatype | 0..1 | `xsd:gMonth` | gMonth literal value used in a condition operand node |
| `urpx:gYearValue` | Datatype | 0..1 | `xsd:gYear` | gYear literal value used in a condition operand node |
| `urpx:integerValue` | Datatype | 0..1 | `xsd:integer` | Integer literal value used in a condition operand node |
| `urpx:referencesMetricInput` | Datatype | 0..1 | — | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:stringValue` | Datatype | 0..1 | `xsd:string` | String literal value used in a condition operand node |
| `urpx:timeValue` | Datatype | 0..1 | `xsd:time` | Time literal value used in a condition operand node |

---

### DatatypeOperandNode

**URI:** `https://urpx-org.github.io/urpx/ontology/DatatypeOperandNode`  
**Parent:** `owl:Thing`

**Description:** Operand node for datatype-valued condition properties and datatype literal values

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:booleanValue` | Datatype | 0..1 | `xsd:boolean` | Boolean literal value used in a condition operand node |
| `urpx:conditionProperty` | Datatype | 0..1 | — | IRI reference to the ontology property evaluated by an operand node |
| `urpx:dateTimeValue` | Datatype | 0..1 | `xsd:dateTime` | DateTime literal value used in a condition operand node |
| `urpx:dateValue` | Datatype | 0..1 | `xsd:date` | Date literal value used in a condition operand node |
| `urpx:decimalValue` | Datatype | 0..1 | `xsd:decimal` | Decimal literal value used in a condition operand node |
| `urpx:durationValue` | Datatype | 0..1 | `xsd:duration` | Duration literal value used in a condition operand node |
| `urpx:gMonthValue` | Datatype | 0..1 | `xsd:gMonth` | gMonth literal value used in a condition operand node |
| `urpx:gYearValue` | Datatype | 0..1 | `xsd:gYear` | gYear literal value used in a condition operand node |
| `urpx:integerValue` | Datatype | 0..1 | `xsd:integer` | Integer literal value used in a condition operand node |
| `urpx:referencesMetricInput` | Datatype | 0..1 | — | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:stringValue` | Datatype | 0..1 | `xsd:string` | String literal value used in a condition operand node |
| `urpx:timeValue` | Datatype | 0..1 | `xsd:time` | Time literal value used in a condition operand node |

---

### ObjectOperandNode

**URI:** `https://urpx-org.github.io/urpx/ontology/ObjectOperandNode`  
**Parent:** `owl:Thing`

**Description:** Operand node for object-valued condition properties and object references

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:conditionProperty` | Datatype | 0..1 | — | IRI reference to the ontology property evaluated by an operand node |
| `urpx:referencesMetricInput` | Datatype | 0..1 | — | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:referencesValue` | Datatype | 0..1 | — | IRI reference to an object or enumeration value used by an object operand node |

---

### GeneralRule

**URI:** `https://urpx-org.github.io/urpx/ontology/GeneralRule`  
**Parent:** `owl:Thing`

**Description:** A rule or statement that applies across rate plans and rate plan versions, not tied to a single billing context

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:generalRuleID` | Datatype | 1..1 | `xsd:string` | Unique identifier for a general rule |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasDataSourceReference` | Object | 1..* | [`SourceReference`](#sourcereference) | Links an entity to a structured data source reference. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |

---

## Customer & Service Profile Entities

<DiagramViewer src="../diagrams/dictionary/customer-service-profile-entities.svg" alt="Customer & Service Profile Entities diagram" />

### Profile

**URI:** `https://urpx-org.github.io/urpx/ontology/Profile`  
**Parent:** `owl:Thing`

**Description:** Abstract parent for all profile types used in rate plan eligibility and service delivery evaluation

---

### CustomerProfile

**URI:** `https://urpx-org.github.io/urpx/ontology/CustomerProfile`  
**Parent:** `Profile`

**Description:** Customer business and social characteristics for rate plan eligibility and program participation evaluation

**Semantic Context:**  
Customer profiles enable sophisticated rate targeting based on usage
patterns, demand characteristics, and customer attributes without
exposing individual customer data.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:annualIncomeRange` | Datatype | 0..* | — | Annual income range bracket (HEAP eligibility) |
| `urpx:assistanceEligibilityLevel` | Datatype | 0..* | — | Assistance program eligibility level |
| `urpx:billingCycleCode` | Datatype | 0..* | `xsd:string` | Billing cycle identifier aligned with utility billing periods |
| `urpx:creditRating` | Datatype | 0..* | `xsd:string` | Reference to external credit rating classification |
| `urpx:entityType` | Datatype | 0..* | — | Legal entity type |
| `urpx:hasCustomerKind` | Datatype | 0..* | — | Primary customer classification |
| `urpx:hasCustomerSubKind` | Datatype | 0..* | — | Detailed customer classification |
| `urpx:hasPriorRatePlan` | Object | 0..* | [`PriorRatePlan`](#priorrateplan) | Links customer profile to previous rate plan enrollment |
| `urpx:hasProgramEnrollment` | Object | 0..* | [`ProgramEnrollment`](#programenrollment) | Links customer profile to program enrollments |
| `urpx:householdCount` | Datatype | 0..* | `xsd:integer` | Number of households served by this customer account |
| `urpx:householdSize` | Datatype | 0..* | `xsd:integer` | Number of people in household (HEAP eligibility) |
| `urpx:isCCACustomer` | Datatype | 0..* | `xsd:boolean` | Whether the customer is served by a Community Choice Aggregator |
| `urpx:isCommunitySolarCustomer` | Datatype | 0..* | `xsd:boolean` | Whether the customer participates in a community solar program |
| `urpx:occupancyCount` | Datatype | 0..1 | `xsd:integer` | Number of occupants at premises |
| `urpx:specialNeedsStatus` | Datatype | 0..* | — | Special needs classification |
| `urpx:taxExemptStatus` | Datatype | 0..* | — | Tax exemption status |

---

### ServicePointProfile

**URI:** `https://urpx-org.github.io/urpx/ontology/ServicePointProfile`  
**Parent:** `Profile`

**Description:** Service delivery point characteristics for rate plan eligibility and service configuration evaluation

**Semantic Context:**  
Service point profiles describe the physical characteristics of the
service delivery point — voltage level, metering configuration, DER
installations, and connection type.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:billedDemand` | Datatype | 0..1 | `xsd:decimal` | Utility-estimated demand for billing in kW |
| `urpx:buildingSquareFootage` | Datatype | 0..1 | `xsd:decimal` | Building size in square feet |
| `urpx:connectionKind` | Datatype | 0..1 | — | Type of connection at service point |
| `urpx:endUse` | Datatype | 0..1 | — | End use classification for electric service (heating vs non-heating) |
| `urpx:geographicScope` | Datatype | 0..1 | — | Geographic scope of applicability or eligibility (ISO 3166 admin levels) |
| `urpx:geographicZone` | Datatype | 0..* | — | Geographic classification (Census geographic types) |
| `urpx:hasCounty` | Object | 0..* | [`County`](#county) | Links service point profile to county-level geographic scope |
| `urpx:hasDistributedEnergyResource` | Object | 0..* | [`DistributedEnergyResource`](#distributedenergyresource) | Distributed energy resources associated with this service point |
| `urpx:hasHVAC` | Datatype | 0..* | — | HVAC equipment associated with this service point |
| `urpx:hasMeteringConfiguration` | Datatype | 0..1 | — | Metering configuration type |
| `urpx:hasMunicipality` | Object | 0..* | [`Municipality`](#municipality) | Links service point profile to municipality-level geographic scope |
| `urpx:hasServiceTerritory` | Object | 0..* | [`ServiceTerritory`](#serviceterritory) | Links service point profile to service territory geographic scope |
| `urpx:hasState` | Object | 0..* | [`State`](#state) | Links service point profile to state-level geographic scope |
| `urpx:loadProfile` | Datatype | 0..1 | — | Load profile classification |
| `urpx:meterCount` | Datatype | 0..1 | `xsd:integer` | Count of meters at service point |
| `urpx:nominalVoltage` | Datatype | 0..1 | `xsd:decimal` | Nominal service voltage in volts |
| `urpx:phaseCodeKind` | Datatype | 0..1 | — | Phase code classification |
| `urpx:premiseType` | Datatype | 0..1 | — | Type of premise served |
| `urpx:ratedPowerCapacity` | Datatype | 0..1 | `xsd:decimal` | Rated power capacity in kW |
| `urpx:seasonalPattern` | Datatype | 0..1 | — | Seasonal usage pattern classification |
| `urpx:serviceClassPattern` | Datatype | 0..1 | `xsd:string` | Service class pattern for applicability and eligibility matching |
| `urpx:voltageLevel` | Datatype | 0..1 | — | Service voltage level classification for service point profiles |

---

### ProfileAlternative

**URI:** `https://urpx-org.github.io/urpx/ontology/ProfileAlternative`  
**Parent:** `owl:Thing`

**Description:** One alternative configuration among mutually exclusive options, selected by evaluating its condition expression against customer or service point characteristics.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:defaultSelectionLogic` | Datatype | 0..1 | `xsd:string` | Logic for auto-selecting default alternative |
| `urpx:hasConditionExpression` | Object | 1..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |

---

### ProfileAlternatives

**URI:** `https://urpx-org.github.io/urpx/ontology/ProfileAlternatives`  
**Parent:** `owl:Thing`

**Description:** Container for alternative dimension structures requiring user selection. Provides the bridge between customer profile characteristics and mutually exclusive alternative choices. Each ProfileAlternatives instance groups related alternative dimension sets that define the available options for a specific selection context.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasAlternativeDimensions` | Object | 1..1 | [`AlternativeDimensions`](#alternativedimensions) | Links ProfileAlternatives to its AlternativeDimensions container, which wraps the alternative dimension sets and their metadata |
| `urpx:hasProfileAlternative` | Object | 2..* | [`ProfileAlternative`](#profilealternative) | Links ProfileAlternatives container to individual ProfileAlternative instances, each representing one mutually exclusive alternative choice configuration |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |

---

### AlternativeDimension

**URI:** `https://urpx-org.github.io/urpx/ontology/AlternativeDimension`  
**Parent:** `owl:Thing`

**Description:** Dimension along which price set alternatives differ using ontology properties

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:customDimensionProperty` | Datatype | 0..1 | `xsd:string` | Fallback custom property identifier for alternative dimensions in human-readable form |
| `urpx:dimensionDisplayName` | Datatype | 1..1 | `xsd:string` | Human-readable name for UI display |
| `urpx:dimensionProperty` | Datatype | 0..1 | `xsd:anyURI` | URI of the ontology property this dimension represents |
| `urpx:hasPossibleValues` | Datatype | 1..* | — | List of possible values |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |

---

### AlternativeDimensions

**URI:** `https://urpx-org.github.io/urpx/ontology/AlternativeDimensions`  
**Parent:** `owl:Thing`

**Description:** Dimensions defining the set of profileAlternatives. 

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasAlternativeDimension` | Object | 1..* | [`AlternativeDimension`](#alternativedimension) | Dimensions along which alternatives differ |

---

### ServiceClass

**URI:** `https://urpx-org.github.io/urpx/ontology/ServiceClass`  
**Parent:** `owl:Thing`

**Description:** Region-specific rate plan classification with raw and cleaned identifiers

**Semantic Context:**  
Service classes bridge the gap between utility-specific terminology
and standardized classifications, enabling cross-utility comparisons
while preserving original designations.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasRateGroup` | Object | 0..* | [`RateGroup`](#rategroup) | Links rate plan to specific rate group |
| `urpx:serviceClassCleaned` | Datatype | 0..1 | `xsd:string` | Cleaned alphanumeric service class identifier |
| `urpx:serviceClassName` | Datatype | 1..1 | `xsd:string` | Human-readable service class name |
| `urpx:serviceClassRaw` | Datatype | 1..1 | `xsd:string` | Raw service class identifier as published in tariff |

---

### RateGroup

**URI:** `https://urpx-org.github.io/urpx/ontology/RateGroup`  
**Parent:** `owl:Thing`

**Description:** Specific rate grouping within a service class (e.g., Rate I, Rate II)

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:parentServiceClass` | Object | 0..1 | [`ServiceClass`](#serviceclass) | Parent service class for this rate group |
| `urpx:rateGroupIdentifier` | Datatype | 1..1 | `xsd:string` | Unique identifier for the rate group |
| `urpx:rateGroupName` | Datatype | 1..1 | `xsd:string` | Human-readable name for the rate group |

---

### ProgramEnrollment

**URI:** `https://urpx-org.github.io/urpx/ontology/ProgramEnrollment`  
**Parent:** `owl:Thing`

**Description:** Customer enrollment in utility programs for eligibility determination

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:enrollmentEndDate` | Datatype | 0..1 | `xsd:date` | End date of enrollment |
| `urpx:enrollmentStartDate` | Datatype | 0..1 | `xsd:date` | Start date of enrollment |
| `urpx:enrollmentStatus` | Datatype | 0..1 | — | Current enrollment status (lifecycle states) |
| `urpx:minimumTenure` | Datatype | 0..1 | `xsd:duration` | The minimum duration a customer must remain enrolled in a rate plan, program, or service offering. |
| `urpx:programName` | Datatype | 1..1 | `xsd:string` | Name of the utility program |
| `urpx:programType` | Datatype | 0..1 | — | Category of utility program |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |

---

### PriorRatePlan

**URI:** `https://urpx-org.github.io/urpx/ontology/PriorRatePlan`  
**Parent:** `owl:Thing`

**Description:** Reference to customer's previous rate plan for eligibility determination

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:enrollmentEndDate` | Datatype | 0..1 | `xsd:date` | End date of enrollment |
| `urpx:enrollmentStartDate` | Datatype | 0..1 | `xsd:date` | Start date of enrollment |
| `urpx:enrollmentStatus` | Datatype | 0..1 | — | Current enrollment status (lifecycle states) |
| `urpx:minimumTenure` | Datatype | 0..1 | `xsd:duration` | The minimum duration a customer must remain enrolled in a rate plan, program, or service offering. |
| `urpx:referencesRatePlan` | Object | 0..1 | [`RatePlan`](#rateplan) | Plan-specific content link (PricingModel → RatePlan); or links a PriorRatePlan record to the actual rate plan. |
| `urpx:serviceRole` | Datatype | 0..1 | — | Service role for rate plan (distribution/retail/bundled) |

---

### DistributedEnergyResource

**URI:** `https://urpx-org.github.io/urpx/ontology/DistributedEnergyResource`  
**Parent:** `owl:Thing`

**Description:** On-site generation and storage capabilities

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:connectorType` | Datatype | 0..1 | — | EV connector type |
| `urpx:derType` | Datatype | 1..1 | — | Type of distributed energy resource |
| `urpx:evChargingCapacity` | Datatype | 0..1 | `xsd:decimal` | EV charging capacity in kW |
| `urpx:interconnectionStatus` | Datatype | 1..1 | — | Grid interconnection status |
| `urpx:inverterType` | Datatype | 0..1 | — | Solar inverter type |
| `urpx:panelOrientation` | Datatype | 0..1 | — | Solar panel orientation |
| `urpx:powerRating` | Datatype | 0..1 | `xsd:decimal` | Power rating for charging/discharging in kW |
| `urpx:roundTripEfficiency` | Datatype | 0..1 | `xsd:decimal` | Round trip efficiency as percentage |
| `urpx:smartChargingEnabled` | Datatype | 0..1 | `xsd:boolean` | Smart charging capability enabled |
| `urpx:solarCapacity` | Datatype | 0..1 | `xsd:decimal` | Solar generation capacity in kW |
| `urpx:storageCapacity` | Datatype | 0..1 | `xsd:decimal` | Energy storage capacity in kWh |
| `urpx:windCapacity` | Datatype | 0..1 | `xsd:decimal` | Wind generation capacity in kW |

---

## Scenario & Cost Entities

<DiagramViewer src="../diagrams/dictionary/scenario-cost-entities.svg" alt="Scenario & Cost Entities diagram" />

### Scenario

**URI:** `https://urpx-org.github.io/urpx/ontology/Scenario`  
**Parent:** `owl:Thing`

**Description:** Input container grouping customer and service point profiles for broad rate plan eligibility evaluation.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasCustomerProfile` | Object | 0..1 | [`CustomerProfile`](#customerprofile) | Links scenario to customer profile for business/social characteristics |
| `urpx:hasServicePointProfile` | Object | 0..1 | [`ServicePointProfile`](#servicepointprofile) | Links scenario to service point profile for physical service delivery characteristics |

---

### ScenarioCostModel

**URI:** `https://urpx-org.github.io/urpx/ontology/ScenarioCostModel`  
**Parent:** `owl:Thing`

**Description:** The cost-computation contract for a scenario: the bound inputs (which agreements, plans, modifiers, usage, profile) and the output schema needed to compute and explain a cost.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:consumesVersion` | Object | 0..* | [`RatePlanVersion`](#rateplanversion) | The RatePlanVersion a ScenarioCostModel consumes for a prospect quote (future-window cost computation). |
| `urpx:forScenario` | Object | 0..1 | [`Scenario`](#scenario) | The Scenario a ScenarioCostModel computes for. |
| `urpx:hasCoverageClaim` | Object | 0..* | [`CoverageClaim`](#coverageclaim) | Optional by design: a scenario cost model may pre-date any coverage evaluation. Distinct from the derived snapshots, where a coverage claim is required. |
| `urpx:producesResult` | Object | 0..1 | [`ScenarioCostResult`](#scenariocostresult) | Links a ScenarioCostModel to the ScenarioCostResult it produces. |

---

### ScenarioCostResult

**URI:** `https://urpx-org.github.io/urpx/ontology/ScenarioCostResult`  
**Parent:** `owl:Thing`

**Description:** The computed output of a ScenarioCostModel for a scenario: the cost result, with line items and a CoverageClaim.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasCoverageClaim` | Object | 0..1 | [`CoverageClaim`](#coverageclaim) | Attaches a CoverageClaim to a derived snapshot or a scenario cost model. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |

---

## Regulatory Entities

<DiagramViewer src="../diagrams/dictionary/regulatory-entities.svg" alt="Regulatory Entities diagram" />

### RateCase

**URI:** `https://urpx-org.github.io/urpx/ontology/RateCase`  
**Parent:** `owl:Thing`

**Description:** Public service commission proceeding concerning rate plan or price changes for cost-of-service regulated utilities

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:caseNumber` | Datatype | 1..1 | `xsd:string` | Jurisdiction-specific identifier assigned to a rate case proceeding |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:priority` | Datatype | 0..1 | `xsd:integer` | Priority for overlapping entities |
| `urpx:url` | Datatype | 1..1 | `xsd:anyURI` | URL of the item |

---

## Organization Entities

<DiagramViewer src="../diagrams/dictionary/organization-entities.svg" alt="Organization Entities diagram" />

### Organization

**URI:** `https://urpx-org.github.io/urpx/ontology/Organization`  
**Parent:** `owl:Thing`

**Description:** Any entity participating in energy markets or rate regulation

**Semantic Context:**  
Organizations represent the entities involved in utility rate
administration — utilities, regulators, system operators, and
energy service providers.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:alternateName` | Datatype | 0..1 | `xsd:string` | An alias for the item |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:hasIdentity` | Object | 0..* | [`OrganizationIdentity`](#organizationidentity) | Links organization to temporal identity records |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:legalName` | Datatype | 0..1 | `xsd:string` | Official legal name of the organization |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:publishes` | Object | 0..* | [`RatePlan`](#rateplan) | Links organization to rate plans it publishes |

---

### RegulatoryAuthority

**URI:** `https://urpx-org.github.io/urpx/ontology/RegulatoryAuthority`  
**Parent:** `Organization`

**Description:** Entity with jurisdiction to approve and regulate utility rates

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:alternateName` | Datatype | 0..1 | `xsd:string` | An alias for the item |
| `urpx:approves` | Object | 0..* | [`RatePlan`](#rateplan) | Links regulator to approved rate plans |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:hasIdentity` | Object | 0..* | [`OrganizationIdentity`](#organizationidentity) | Links organization to temporal identity records |
| `urpx:hasJurisdictionOver` | Object | 0..* | [`Organization`](#organization) | Links regulator to regulated entities |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:legalName` | Datatype | 0..1 | `xsd:string` | Official legal name of the organization |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:publishes` | Object | 0..* | [`RatePlan`](#rateplan) | Links organization to rate plans it publishes |
| `urpx:regulatoryScope` | Datatype | 1..1 | — | Scope of regulatory oversight (regulatory functions) |

---

### SystemOperator

**URI:** `https://urpx-org.github.io/urpx/ontology/SystemOperator`  
**Parent:** `Organization`

**Description:** ISO, RTO, or transmission system operator managing grid operations

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:alternateName` | Datatype | 0..1 | `xsd:string` | An alias for the item |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:hasIdentity` | Object | 0..* | [`OrganizationIdentity`](#organizationidentity) | Links organization to temporal identity records |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:legalName` | Datatype | 0..1 | `xsd:string` | Official legal name of the organization |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:publishes` | Object | 0..* | [`RatePlan`](#rateplan) | Links organization to rate plans it publishes |

---

### UtilityOperator

**URI:** `https://urpx-org.github.io/urpx/ontology/UtilityOperator`  
**Parent:** `Organization`

**Description:** Entity providing utility services and publishing rate plans

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:alternateName` | Datatype | 0..1 | `xsd:string` | An alias for the item |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:hasIdentity` | Object | 0..* | [`OrganizationIdentity`](#organizationidentity) | Links organization to temporal identity records |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:legalName` | Datatype | 0..1 | `xsd:string` | Official legal name of the organization |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:ownershipType` | Datatype | 0..1 | — | Ownership structure of utility (EIA ownership categories) |
| `urpx:publishes` | Object | 0..* | [`RatePlan`](#rateplan) | Links organization to rate plans it publishes |

---

### EnergyServiceProvider

**URI:** `https://urpx-org.github.io/urpx/ontology/EnergyServiceProvider`  
**Parent:** `Organization`

**Description:** Retail energy provider, aggregator, or energy service company

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:alternateName` | Datatype | 0..1 | `xsd:string` | An alias for the item |
| `urpx:commodity` | Datatype | 0..* | — | Industry-standard commodity type specification |
| `urpx:hasIdentity` | Object | 0..* | [`OrganizationIdentity`](#organizationidentity) | Links organization to temporal identity records |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:legalName` | Datatype | 0..1 | `xsd:string` | Official legal name of the organization |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:publishes` | Object | 0..* | [`RatePlan`](#rateplan) | Links organization to rate plans it publishes |
| `urpx:serviceRole` | Datatype | 1..1 | — | Service role for rate plan (distribution/retail/bundled) |

---

### OrganizationEvent

**URI:** `https://urpx-org.github.io/urpx/ontology/OrganizationEvent`  
**Parent:** `owl:Thing`

**Description:** Corporate transition event affecting organization structure or identity

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:regulatoryApproval` | Datatype | 0..1 | `xsd:string` | Reference to regulatory approval document |

---

### OrganizationIdentity

**URI:** `https://urpx-org.github.io/urpx/ontology/OrganizationIdentity`  
**Parent:** `owl:Thing`

**Description:** Temporal identity record tracking names and identifiers over time

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:hasIdentifier` | Object | 0..* | [`OrganizationIdentifier`](#organizationidentifier) | Links an organization identity, rate plan, or rate plan modifier to a typed external identifier. |
| `urpx:hasName` | Object | 1..1 | [`OrganizationName`](#organizationname) | Links identity to organization names |
| `urpx:identityValidFrom` | Datatype | 0..1 | `xsd:dateTime` | Start date for this identity record |
| `urpx:identityValidTo` | Datatype | 0..1 | `xsd:dateTime` | End date for this identity record |

---

### OrganizationIdentifier

**URI:** `https://urpx-org.github.io/urpx/ontology/OrganizationIdentifier`  
**Parent:** `owl:Thing`

**Description:** External identifier from regulatory or financial systems

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:identifierJurisdiction` | Datatype | 0..1 | `xsd:string` | Jurisdiction where identifier is valid |
| `urpx:identifierScheme` | Datatype | 0..1 | — | Identification scheme or system (Standard ID systems) |
| `urpx:utilityId` | Datatype | 0..1 | `xsd:string` | Utility identifier as defined by the implementing jurisdiction |

---

### OrganizationName

**URI:** `https://urpx-org.github.io/urpx/ontology/OrganizationName`  
**Parent:** `owl:Thing`

**Description:** Name variant with type, language, and canonical/preferred status

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:abbreviation` | Datatype | 0..1 | `xsd:string` | Short form or abbreviation of name |
| `urpx:isCanonical` | Datatype | 0..1 | `xsd:boolean` | Whether this is the official/canonical name |
| `urpx:isPreferred` | Datatype | 0..1 | `xsd:boolean` | Whether this name is preferred for display |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:nameType` | Datatype | 0..1 | — | Classification of name usage (entity naming) |

---

### OrganizationTransition

**URI:** `https://urpx-org.github.io/urpx/ontology/OrganizationTransition`  
**Parent:** `owl:Thing`

**Description:** N-ary relator for complex organization transitions

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:regulatoryApproval` | Datatype | 0..1 | `xsd:string` | Reference to regulatory approval document |

---

## Geographic Entities

<DiagramViewer src="../diagrams/dictionary/geographic-entities.svg" alt="Geographic Entities diagram" />

### AdministrativeBoundary

**URI:** `https://urpx-org.github.io/urpx/ontology/AdministrativeBoundary`  
**Parent:** `owl:Thing`

**Description:** Government-defined geographic boundary for administrative purposes

**Semantic Context:**  
Administrative boundaries define the geographic jurisdictions
relevant to utility regulation — states, counties, and municipalities.

---

### State

**URI:** `https://urpx-org.github.io/urpx/ontology/State`  
**Parent:** `AdministrativeBoundary`

**Description:** State, province, or equivalent first-level administrative division

---

### County

**URI:** `https://urpx-org.github.io/urpx/ontology/County`  
**Parent:** `AdministrativeBoundary`

**Description:** County or equivalent second-level administrative division

---

### Municipality

**URI:** `https://urpx-org.github.io/urpx/ontology/Municipality`  
**Parent:** `AdministrativeBoundary`

**Description:** City, town, or incorporated municipal area

---

### ServiceTerritory

**URI:** `https://urpx-org.github.io/urpx/ontology/ServiceTerritory`  
**Parent:** `owl:Thing`

**Description:** Geographic area where a utility provides service to customers

**Semantic Context:**  
A service territory defines the geographic area served by a utility,
potentially spanning multiple administrative boundaries.

---

## Enumerations

### AccumulationValue

| Value | Description |
|-------|-------------|
| `urpx:bulk` | — |
| `urpx:delta` | — |
| `urpx:instantaneous` | — |
| `urpx:summation` | — |

### AggregationMethodValue

| Value | Description |
|-------|-------------|
| `urpx:average` | — |
| `urpx:maximum` | — |
| `urpx:median` | — |
| `urpx:minimum` | — |
| `urpx:sum` | — |

### AnnualIncomeRangeValue

| Value | Description |
|-------|-------------|
| `urpx:highIncome` | — |
| `urpx:lowIncome` | — |
| `urpx:middleIncome` | — |
| `urpx:moderateIncome` | — |
| `urpx:veryLowIncome` | — |

### AssistanceEligibilityLevelValue

| Value | Description |
|-------|-------------|
| `urpx:notQualifiedAssistance` | — |
| `urpx:provisionallyQualifiedAssistance` | — |
| `urpx:qualifiedAssistance` | — |
| `urpx:underReviewAssistance` | — |

### BillPortionValue

| Value | Description |
|-------|-------------|
| `urpx:bundledPortion` | — |
| `urpx:deliveryPortion` | — |
| `urpx:supplyPortion` | — |

### BooleanOperatorValue

| Value | Description |
|-------|-------------|
| `urpx:andOperator` | Represents logical conjunction in condition-expression boolean composition |
| `urpx:notOperator` | Represents logical negation in condition-expression boolean composition |
| `urpx:orOperator` | Represents logical disjunction in condition-expression boolean composition |

### ChangeReasonValue

| Value | Description |
|-------|-------------|
| `urpx:changeReasonOther` | — |
| `urpx:correction` | — |
| `urpx:fuelAdjustment` | — |
| `urpx:initial` | — |
| `urpx:rateCase` | — |
| `urpx:regulatoryOrder` | — |
| `urpx:riderUpdate` | — |
| `urpx:seasonalChange` | — |

### ChargeCategoryValue

| Value | Description |
|-------|-------------|
| `urpx:adjustment` | — |
| `urpx:auxiliaryCharge` | — |
| `urpx:discount` | — |
| `urpx:environmental` | — |
| `urpx:infrastructure` | — |
| `urpx:regulatory` | — |
| `urpx:serviceCharge` | — |
| `urpx:taxes` | — |

### ChargeTypeValue

| Value | Description |
|-------|-------------|
| `urpx:adjustmentPowerCost` | — |
| `urpx:adjustmentRenewable` | — |
| `urpx:adjustmentTariff` | — |
| `urpx:ancillaryServices` | — |
| `urpx:capacity` | — |
| `urpx:capacityCharge` | — |
| `urpx:capitalCredit` | — |
| `urpx:complianceCharge` | — |
| `urpx:congestionCharge` | — |
| `urpx:conservationCharge` | — |
| `urpx:contractMisc` | — |
| `urpx:creditAdministrative` | — |
| `urpx:creditEnergy` | — |
| `urpx:creditGeneration` | — |
| `urpx:creditInfrastructure` | — |
| `urpx:creditMisc` | — |
| `urpx:creditPriceProtection` | — |
| `urpx:creditRenewable` | — |
| `urpx:creditTariffRider` | — |
| `urpx:customerCharge` | — |
| `urpx:deliveryCharge` | — |
| `urpx:demandDirect` | — |
| `urpx:demandIndirect` | — |
| `urpx:demandSideManagement` | — |
| `urpx:depositCredit` | — |
| `urpx:depositInterest` | — |
| `urpx:depositRequest` | — |
| `urpx:distributedGeneration` | — |
| `urpx:distributionCharge` | — |
| `urpx:donation` | — |
| `urpx:efficiencyFunding` | — |
| `urpx:energyStorage` | — |
| `urpx:environmentalFunding` | — |
| `urpx:exportCredit` | — |
| `urpx:facilities` | — |
| `urpx:fuelCharge` | — |
| `urpx:generation` | — |
| `urpx:handling` | — |
| `urpx:heapDiscount` | — |
| `urpx:initiationCharge` | — |
| `urpx:lateFee` | — |
| `urpx:minimumBill` | — |
| `urpx:minimumCharge` | — |
| `urpx:nonBypassableCharge` | — |
| `urpx:powerFactorCharge` | — |
| `urpx:publicBenefits` | — |
| `urpx:reactiveDemand` | — |
| `urpx:recoverySurcharge` | — |
| `urpx:reliabilityCharge` | — |
| `urpx:renewableFunding` | — |
| `urpx:rentalFee` | — |
| `urpx:serviceMetered` | — |
| `urpx:serviceNonMetered` | — |
| `urpx:standbyCharge` | — |
| `urpx:strandedCosts` | — |
| `urpx:systemBenefitCharge` | — |
| `urpx:tariffRider` | — |
| `urpx:taxAdjustment` | — |
| `urpx:taxCredit` | — |
| `urpx:taxMisc` | — |
| `urpx:taxMunicipal` | — |
| `urpx:taxSales` | — |
| `urpx:taxState` | — |
| `urpx:taxUtility` | — |
| `urpx:transitionCharge` | — |
| `urpx:transmission` | — |
| `urpx:usageCharge` | — |
| `urpx:volumetricCharge` | — |

<DiagramViewer src="../diagrams/dictionary/hierarchy-ChargeTypeValue.svg" alt="ChargeTypeValue hierarchy" />

### CollectionRoleValue

| Value | Description |
|-------|-------------|
| `urpx:adHocSet` | — |
| `urpx:canonicalSet` | — |
| `urpx:modelThread` | — |
| `urpx:scenarioSet` | — |
| `urpx:submissionSet` | — |

### CommodityValue

| Value | Description |
|-------|-------------|
| `urpx:biomass` | — |
| `urpx:cableTv` | — |
| `urpx:chilledWater` | — |
| `urpx:coal` | — |
| `urpx:commodityOther` | — |
| `urpx:compressedAir` | — |
| `urpx:diesel` | — |
| `urpx:districtCooling` | — |
| `urpx:districtHeating` | — |
| `urpx:electricity` | — |
| `urpx:fuelOil` | — |
| `urpx:gasoline` | — |
| `urpx:geothermal` | — |
| `urpx:hotWater` | — |
| `urpx:hydroelectric` | — |
| `urpx:internet` | — |
| `urpx:irrigation` | — |
| `urpx:naturalGas` | — |
| `urpx:nonPotableWater` | — |
| `urpx:nuclear` | — |
| `urpx:potableWater` | — |
| `urpx:propane` | — |
| `urpx:recycling` | — |
| `urpx:security` | — |
| `urpx:sewage` | — |
| `urpx:solar` | — |
| `urpx:steam` | — |
| `urpx:stormwater` | — |
| `urpx:telecommunications` | — |
| `urpx:wasteHeat` | — |
| `urpx:wasteManagement` | — |
| `urpx:water` | — |
| `urpx:wind` | — |

### ConnectionKindValue

| Value | Description |
|-------|-------------|
| `urpx:directConnection` | — |
| `urpx:overheadConnection` | — |
| `urpx:padMountedConnection` | — |
| `urpx:permanentConnection` | — |
| `urpx:temporaryConnection` | — |
| `urpx:undergroundConnection` | — |

### ConnectorTypeValue

| Value | Description |
|-------|-------------|
| `urpx:ccs` | — |
| `urpx:chademo` | — |
| `urpx:dcFast` | — |
| `urpx:level1` | — |
| `urpx:level2` | — |
| `urpx:teslaSupercharger` | — |

### CustomerChoiceValue

| Value | Description |
|-------|-------------|
| `urpx:mandatoryChoice` | — |
| `urpx:voluntaryChoice` | — |

### CustomerKindValue

| Value | Description |
|-------|-------------|
| `urpx:commercialKind` | — |
| `urpx:enterpriseKind` | — |
| `urpx:industrialKind` | — |
| `urpx:internalUseKind` | — |
| `urpx:nonResidentialKind` | — |
| `urpx:residentialKind` | — |
| `urpx:serviceProviderKind` | — |

### CustomerSubKindValue

| Value | Description |
|-------|-------------|
| `urpx:commercialPumping` | — |
| `urpx:commercialStandard` | — |
| `urpx:commercialStreetlight` | — |
| `urpx:energyScheduler` | — |
| `urpx:energySupplier` | — |
| `urpx:industrialLargeLoad` | — |
| `urpx:industrialStandard` | — |
| `urpx:regionalOperator` | — |
| `urpx:religiousInstitution` | — |
| `urpx:residentialFarm` | — |
| `urpx:residentialMultiUnit` | — |
| `urpx:residentialStandard` | — |
| `urpx:subsidiary` | — |
| `urpx:windMachine` | — |

### DERTypeValue

| Value | Description |
|-------|-------------|
| `urpx:evChargingDER` | — |
| `urpx:generatorDER` | — |
| `urpx:geothermalDER` | — |
| `urpx:hydroDER` | — |
| `urpx:nuclearDER` | — |
| `urpx:solarDER` | — |
| `urpx:storageDER` | — |
| `urpx:wasteDigestionDER` | — |
| `urpx:windDER` | — |

### DataSourceTypeValue

| Value | Description |
|-------|-------------|
| `urpx:apiSource` | — |
| `urpx:databaseSource` | — |
| `urpx:manualSource` | — |
| `urpx:regulatoryWebsiteSource` | — |
| `urpx:utilityWebsiteSource` | — |

### DayTypeValue

| Value | Description |
|-------|-------------|
| `urpx:allDays` | — |
| `urpx:customDays` | — |
| `urpx:weekdayDays` | — |
| `urpx:weekendDays` | — |

### DynamicPricingTypeValue

| Value | Description |
|-------|-------------|
| `urpx:criticalPeakPricing` | — |
| `urpx:demandResponsePricing` | — |
| `urpx:eventDrivenPricing` | — |
| `urpx:indexBasedPricing` | — |
| `urpx:realTimePricing` | — |
| `urpx:timeVaryingPricing` | — |

### EndUseValue

| Value | Description |
|-------|-------------|
| `urpx:agriculturalEndUse` | — |
| `urpx:cookingEndUse` | — |
| `urpx:dataCenterEndUse` | — |
| `urpx:dryingEndUse` | — |
| `urpx:heatingEndUse` | — |
| `urpx:lightingEndUse` | — |
| `urpx:municipalEndUse` | — |
| `urpx:nonheatingEndUse` | — |
| `urpx:otherEndUse` | — |
| `urpx:refrigerationEndUse` | — |
| `urpx:spaceCoolingEndUse` | — |
| `urpx:spaceHeatingEndUse` | — |
| `urpx:streetLightingEndUse` | — |
| `urpx:waterHeatingEndUse` | — |

### EnrollmentStatusValue

| Value | Description |
|-------|-------------|
| `urpx:activeStatus` | — |
| `urpx:expiredStatus` | — |
| `urpx:inactiveStatus` | — |
| `urpx:pendingStatus` | — |
| `urpx:suspendedStatus` | — |
| `urpx:terminatedStatus` | — |

### EntityTypeValue

| Value | Description |
|-------|-------------|
| `urpx:corporationEntity` | — |
| `urpx:entityOther` | — |
| `urpx:governmentEntity` | — |
| `urpx:individualEntity` | — |
| `urpx:llcEntity` | — |
| `urpx:nonprofitEntity` | — |
| `urpx:partnershipEntity` | — |
| `urpx:trustEntity` | — |

### FlowDirectionValue

| Value | Description |
|-------|-------------|
| `urpx:bidirectional` | — |
| `urpx:forward` | — |
| `urpx:net` | — |
| `urpx:reverse` | — |

### GeographicScopeValue

| Value | Description |
|-------|-------------|
| `urpx:countyScope` | — |
| `urpx:customScope` | — |
| `urpx:municipalityScope` | — |
| `urpx:serviceTerritoryScope` | — |
| `urpx:statewideScope` | — |

### GeographicZoneValue

| Value | Description |
|-------|-------------|
| `urpx:coastalZone` | — |
| `urpx:desertZone` | — |
| `urpx:geographicZoneOther` | — |
| `urpx:industrialZone` | — |
| `urpx:mountainZone` | — |
| `urpx:ruralZone` | — |
| `urpx:suburbanZone` | — |
| `urpx:urbanZone` | — |

### HVACKindValue

| Value | Description |
|-------|-------------|
| `urpx:airConditioner` | — |
| `urpx:airSourceHeatPump` | — |
| `urpx:districtHeatingConnection` | — |
| `urpx:groundSourceHeatPump` | — |
| `urpx:spaceHeater` | — |

### IdentifierSchemeValue

| Value | Description |
|-------|-------------|
| `urpx:companyNumberScheme` | — |
| `urpx:dunsScheme` | — |
| `urpx:eiaScheme` | — |
| `urpx:gleifScheme` | — |
| `urpx:gridScheme` | — |
| `urpx:isinScheme` | — |
| `urpx:leiScheme` | — |
| `urpx:localRegulatorScheme` | — |
| `urpx:vatScheme` | — |

### InterconnectionStatusValue

| Value | Description |
|-------|-------------|
| `urpx:disconnectedStatus` | — |
| `urpx:interconnectedStatus` | — |
| `urpx:notApplicableInterconnection` | — |
| `urpx:pendingInterconnection` | — |

### IntervalAlignmentValue

| Value | Description |
|-------|-------------|
| `urpx:billingPeriodAligned` | — |
| `urpx:calendarAligned` | — |
| `urpx:fixedAligned` | — |
| `urpx:rollingAligned` | — |

### IntervalSelectionValue

| Value | Description |
|-------|-------------|
| `urpx:consecutivePeriodsSelection` | — |
| `urpx:fixedWindowSelection` | — |
| `urpx:rollingWindowSelection` | — |

### IntervalTypeValue

| Value | Description |
|-------|-------------|
| `urpx:annualInterval` | — |
| `urpx:customInterval` | — |
| `urpx:dailyInterval` | — |
| `urpx:fifteenMinuteInterval` | — |
| `urpx:fiveMinuteInterval` | — |
| `urpx:hourlyInterval` | — |
| `urpx:monthlyInterval` | — |
| `urpx:quarterlyInterval` | — |
| `urpx:realTimeInterval` | — |
| `urpx:thirtyMinuteInterval` | — |
| `urpx:weeklyInterval` | — |

### InverterTypeValue

| Value | Description |
|-------|-------------|
| `urpx:centralInverter` | — |
| `urpx:hybridInverter` | — |
| `urpx:microInverter` | — |
| `urpx:powerOptimizer` | — |
| `urpx:stringInverter` | — |

### LedgerTypeValue

| Value | Description |
|-------|-------------|
| `urpx:bundledLedger` | — |
| `urpx:calculatedLedger` | — |
| `urpx:deliveryLedger` | — |
| `urpx:distributionLedger` | — |
| `urpx:measuredLedger` | — |
| `urpx:profileMetricLedger` | — |
| `urpx:supplyLedger` | — |
| `urpx:transmissionLedger` | — |

### LoadProfileValue

| Value | Description |
|-------|-------------|
| `urpx:baseload` | — |
| `urpx:intermittent` | — |
| `urpx:loadProfileOther` | — |
| `urpx:peaking` | — |
| `urpx:seasonal` | — |
| `urpx:variable` | — |

### MeasurementTypeValue

| Value | Description |
|-------|-------------|
| `urpx:apparentPower` | — |
| `urpx:current` | — |
| `urpx:demand` | — |
| `urpx:energy` | — |
| `urpx:frequency` | — |
| `urpx:power` | — |
| `urpx:powerFactor` | — |
| `urpx:pressure` | — |
| `urpx:reactiveEnergy` | — |
| `urpx:reactivePower` | — |
| `urpx:temperature` | — |
| `urpx:voltage` | — |
| `urpx:volume` | — |
| `urpx:volumetricFlow` | — |

### MediaTypeValue

| Value | Description |
|-------|-------------|
| `urpx:applicationJson` | — |
| `urpx:applicationPdf` | — |
| `urpx:applicationVndMsExcel` | — |
| `urpx:applicationVndOasisOpendocumentSpreadsheet` | — |
| `urpx:applicationVndOasisOpendocumentText` | — |
| `urpx:applicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet` | — |
| `urpx:imageGif` | — |
| `urpx:imageJpeg` | — |
| `urpx:imagePng` | — |
| `urpx:textCsv` | — |
| `urpx:textHtml` | — |
| `urpx:textPlain` | — |
| `urpx:textRtf` | — |
| `urpx:textXml` | — |

### MeteringConfigurationValue

| Value | Description |
|-------|-------------|
| `urpx:ami` | — |
| `urpx:demandConfiguration` | — |
| `urpx:interval` | — |
| `urpx:manual` | — |
| `urpx:netMetering` | — |
| `urpx:prepaid` | — |

### MetricInputTypeValue

| Value | Description |
|-------|-------------|
| `urpx:aggregatedMetricInput` | — |
| `urpx:calculatedMetricInput` | — |
| `urpx:measuredMetricInput` | — |
| `urpx:profileMetricInput` | — |
| `urpx:virtualMetricInput` | — |

### ModifierCategoryValue

| Value | Description |
|-------|-------------|
| `urpx:billingCategory` | — |
| `urpx:customerServiceCategory` | — |
| `urpx:demandManagementCategory` | — |
| `urpx:environmentalCategory` | — |
| `urpx:modifierCategoryOther` | — |
| `urpx:promotionalCategory` | — |
| `urpx:regulatoryCategory` | — |

### ModifierTypeValue

| Value | Description |
|-------|-------------|
| `urpx:addOn` | — |
| `urpx:adjustment` | — |
| `urpx:credit` | — |
| `urpx:demandResponse` | — |
| `urpx:evCharging` | — |
| `urpx:greenEnergy` | — |
| `urpx:modifierTypeOther` | — |
| `urpx:optIn` | — |
| `urpx:optOut` | — |
| `urpx:rider` | — |

### NameTypeValue

| Value | Description |
|-------|-------------|
| `urpx:abbreviationName` | — |
| `urpx:acronymName` | — |
| `urpx:brandName` | — |
| `urpx:commonName` | — |
| `urpx:dbaName` | — |
| `urpx:formerName` | — |
| `urpx:legalName` | Official legal name of the organization |
| `urpx:tradeName` | — |

### ObservanceRuleValue

| Value | Description |
|-------|-------------|
| `urpx:actualDateObservance` | — |
| `urpx:fridayIfWeekendObservance` | — |
| `urpx:mondayIfWeekendObservance` | — |
| `urpx:nearestWeekdayObservance` | — |

### OperatorValue

| Value | Description |
|-------|-------------|
| `urpx:addOperator` | Represents addition in condition expressions |
| `urpx:andOperator` | Represents logical conjunction in condition-expression boolean composition |
| `urpx:betweenOperator` | — |
| `urpx:containsOperator` | — |
| `urpx:divideOperator` | Represents division in condition expressions |
| `urpx:equalsOperator` | — |
| `urpx:greaterThanOperator` | — |
| `urpx:greaterThanOrEqualOperator` | — |
| `urpx:inOperator` | — |
| `urpx:lessThanOperator` | — |
| `urpx:lessThanOrEqualOperator` | — |
| `urpx:multiplyOperator` | Represents multiplication in condition expressions |
| `urpx:notEqualsOperator` | — |
| `urpx:notInOperator` | — |
| `urpx:notOperator` | Represents logical negation in condition-expression boolean composition |
| `urpx:orOperator` | Represents logical disjunction in condition-expression boolean composition |
| `urpx:subtractOperator` | Represents subtraction in condition expressions |

### OrganizationTypeValue

| Value | Description |
|-------|-------------|
| `urpx:aggregatorOrganization` | — |
| `urpx:cooperativeOrganization` | — |
| `urpx:espOrganization` | — |
| `urpx:ippOrganization` | — |
| `urpx:isoRtoOrganization` | — |
| `urpx:municipalOrganization` | — |
| `urpx:parentOrganization` | — |
| `urpx:regulatorOrganization` | — |
| `urpx:utilityOrganization` | — |

### OwnershipTypeValue

| Value | Description |
|-------|-------------|
| `urpx:cooperativeOwnership` | — |
| `urpx:federalOwnership` | — |
| `urpx:investorOwned` | — |
| `urpx:municipalOwnership` | — |
| `urpx:privateOwnership` | — |
| `urpx:stateOwnership` | — |
| `urpx:tribalOwnership` | — |

### PanelOrientationValue

| Value | Description |
|-------|-------------|
| `urpx:east` | — |
| `urpx:multipleOrientations` | — |
| `urpx:north` | — |
| `urpx:northeast` | — |
| `urpx:northwest` | — |
| `urpx:south` | — |
| `urpx:southeast` | — |
| `urpx:southwest` | — |
| `urpx:tracking` | — |
| `urpx:west` | — |

### PhaseCodeKindValue

| Value | Description |
|-------|-------------|
| `urpx:A` | — |
| `urpx:AB` | — |
| `urpx:ABC` | — |
| `urpx:ABCN` | — |
| `urpx:ABN` | — |
| `urpx:AC` | — |
| `urpx:ACN` | — |
| `urpx:AN` | — |
| `urpx:AtoAv` | — |
| `urpx:B` | — |
| `urpx:BAv` | — |
| `urpx:BC` | — |
| `urpx:BCN` | — |
| `urpx:BN` | — |
| `urpx:C` | — |
| `urpx:CAv` | — |
| `urpx:CN` | — |
| `urpx:N` | — |
| `urpx:NG` | — |
| `urpx:S1` | — |
| `urpx:S12` | — |
| `urpx:S12N` | — |
| `urpx:S1N` | — |
| `urpx:S2` | — |
| `urpx:S2N` | — |

### PremiseTypeValue

| Value | Description |
|-------|-------------|
| `urpx:hospital` | — |
| `urpx:manufacturing` | — |
| `urpx:multiFamily` | — |
| `urpx:office` | — |
| `urpx:premiseTypeOther` | — |
| `urpx:retailStore` | — |
| `urpx:school` | — |
| `urpx:singleFamily` | — |
| `urpx:warehouse` | — |

### PriceSourceValue

| Value | Description |
|-------|-------------|
| `urpx:algorithmicSource` | — |
| `urpx:capacityAuctionSource` | — |
| `urpx:demandForecastSource` | — |
| `urpx:gasIndexSource` | — |
| `urpx:manualOverrideSource` | — |
| `urpx:renewableForecastSource` | — |
| `urpx:wholesaleMarketSource` | — |

### ProgramTypeValue

| Value | Description |
|-------|-------------|
| `urpx:communityChoiceAggregation` | — |
| `urpx:communitySolar` | — |
| `urpx:demandResponseProgram` | — |
| `urpx:energyEfficiencyProgram` | — |
| `urpx:greenEnergyProgram` | — |
| `urpx:lowIncomeProgram` | — |
| `urpx:moderateIncomeProgram` | — |
| `urpx:timeOfUseProgram` | — |

### PublicationTypeValue

| Value | Description |
|-------|-------------|
| `urpx:amendment` | — |
| `urpx:notice` | — |
| `urpx:order` | — |
| `urpx:ratePlanModifierPublication` | — |
| `urpx:ratePlanPublication` | — |
| `urpx:regulatoryFiling` | — |
| `urpx:supplement` | — |
| `urpx:tariffBook` | — |
| `urpx:tariffBookLeaves` | — |
| `urpx:tariffStatement` | — |

### ReferenceInclusionValue

| Value | Description |
|-------|-------------|
| `urpx:includedHere` | — |
| `urpx:retrievedElsewhere` | — |

### RegulatoryScopeValue

| Value | Description |
|-------|-------------|
| `urpx:distributionRegulation` | — |
| `urpx:environmentalRegulation` | — |
| `urpx:marketRegulation` | — |
| `urpx:ratesRegulation` | — |
| `urpx:safetyRegulation` | — |
| `urpx:transmissionRegulation` | — |

### ScopeKindValue

| Value | Description |
|-------|-------------|
| `urpx:applicability` | — |
| `urpx:coverage` | — |
| `urpx:observation` | — |
| `urpx:publication` | — |
| `urpx:sourceLifecycle` | — |

### SeasonalPatternValue

| Value | Description |
|-------|-------------|
| `urpx:flatPattern` | — |
| `urpx:summerPeakPattern` | — |
| `urpx:variablePattern` | — |
| `urpx:winterPeakPattern` | — |

### ServiceRoleValue

| Value | Description |
|-------|-------------|
| `urpx:aggregationRole` | — |
| `urpx:bundledServiceRole` | — |
| `urpx:communitySolarServiceRole` | — |
| `urpx:demandResponseRole` | — |
| `urpx:distributionServiceRole` | — |
| `urpx:energyEfficiencyRole` | — |
| `urpx:retailSupplyRole` | — |
| `urpx:solarInstallationRole` | — |

### SpecialNeedsStatusValue

| Value | Description |
|-------|-------------|
| `urpx:disabilityAccommodation` | — |
| `urpx:lifeSupport` | — |
| `urpx:medicalEquipment` | — |
| `urpx:noSpecialNeeds` | — |
| `urpx:vulnerableCustomer` | — |

### TOUTierStandardNameValue

| Value | Description |
|-------|-------------|
| `urpx:criticalPeakTier` | — |
| `urpx:midPeakTier` | — |
| `urpx:offPeakTier` | — |
| `urpx:peakTier` | — |
| `urpx:shoulderTier` | — |
| `urpx:superOffPeakTier` | — |
| `urpx:superPeakTier` | — |

### TariffStatementTypeValue

| Value | Description |
|-------|-------------|
| `urpx:distributionStatement` | — |
| `urpx:fuelAdjustmentStatement` | — |
| `urpx:purchasedPowerStatement` | — |
| `urpx:statementTypeOther` | — |
| `urpx:transmissionStatement` | — |

### TaxExemptStatusValue

| Value | Description |
|-------|-------------|
| `urpx:exempt` | — |
| `urpx:nonExempt` | — |
| `urpx:partialExempt` | — |
| `urpx:pendingVerification` | — |

### UnitOfMeasureValue

| Value | Description |
|-------|-------------|
| `urpx:GW` | — |
| `urpx:GWh` | — |
| `urpx:Gbps` | — |
| `urpx:MVA` | — |
| `urpx:MVAh` | — |
| `urpx:MW` | — |
| `urpx:MWh` | — |
| `urpx:Mbps` | — |
| `urpx:VA` | — |
| `urpx:VAh` | — |
| `urpx:VAr` | — |
| `urpx:VArh` | — |
| `urpx:W` | — |
| `urpx:Wh` | — |
| `urpx:acre` | — |
| `urpx:barrel` | — |
| `urpx:bcf` | — |
| `urpx:bit` | — |
| `urpx:btu` | — |
| `urpx:byte` | — |
| `urpx:ccf` | — |
| `urpx:cord` | — |
| `urpx:count` | — |
| `urpx:cubicFoot` | — |
| `urpx:cubicMeter` | — |
| `urpx:decatherm` | — |
| `urpx:gallon` | — |
| `urpx:hectare` | — |
| `urpx:hertz` | — |
| `urpx:item` | — |
| `urpx:kVA` | — |
| `urpx:kVAh` | — |
| `urpx:kVAr` | — |
| `urpx:kVArh` | — |
| `urpx:kW` | — |
| `urpx:kWh` | — |
| `urpx:kilogallon` | — |
| `urpx:kilogram` | — |
| `urpx:kilometer` | — |
| `urpx:liter` | — |
| `urpx:mcf` | — |
| `urpx:metricTon` | — |
| `urpx:mile` | — |
| `urpx:mmbtu` | — |
| `urpx:mmcf` | — |
| `urpx:percent` | — |
| `urpx:pound` | — |
| `urpx:ratio` | — |
| `urpx:squareFoot` | — |
| `urpx:squareMeter` | — |
| `urpx:tcf` | — |
| `urpx:therm` | — |
| `urpx:ton` | — |
| `urpx:unitOther` | — |
| `urpx:year` | — |

### UpdateFrequencyValue

| Value | Description |
|-------|-------------|
| `urpx:continuousUpdates` | — |
| `urpx:dailyUpdates` | — |
| `urpx:eventTriggeredUpdates` | — |
| `urpx:every15Minutes` | — |
| `urpx:every5Minutes` | — |
| `urpx:hourlyUpdates` | — |
| `urpx:monthlyUpdates` | — |
| `urpx:onDemandUpdates` | — |
| `urpx:weeklyUpdates` | — |

### VoltageLevelValue

| Value | Description |
|-------|-------------|
| `urpx:distributionVoltage` | — |
| `urpx:primaryVoltage` | — |
| `urpx:secondaryVoltage` | — |
| `urpx:subTransmissionVoltage` | — |
| `urpx:transmissionVoltage` | — |

---

*Generated by `generate-data-dictionary.py` from URPX ontology v0.3.0 on 2026-05-13.*