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
| `urpx:` | https://urpx-org.github.io/urpx/ontology/ | Core URPX ontology |
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
- [CompletenessResultValue](#completenessresultvalue)
- [ConfidenceValue](#confidencevalue)
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
- [EvaluationKindValue](#evaluationkindvalue)
- [ExclusionReasonValue](#exclusionreasonvalue)
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
- [PhaseCategoryValue](#phasecategoryvalue)
- [PhaseCodeKindValue](#phasecodekindvalue)
- [PremiseTypeValue](#premisetypevalue)
- [PriceSourceValue](#pricesourcevalue)
- [ProgramTypeValue](#programtypevalue)
- [ReferenceInclusionValue](#referenceinclusionvalue)
- [RegulatoryScopeValue](#regulatoryscopevalue)
- [ScopeKindValue](#scopekindvalue)
- [SeasonalPatternValue](#seasonalpatternvalue)
- [ServiceRoleValue](#servicerolevalue)
- [SourcePublicationTypeValue](#sourcepublicationtypevalue)
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
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | Organization that published this pricing model, tariff filing, source publication, or URPX exchange package. |
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
A RatePlan is the stable identity of a utility rate plan, independent
of time. It carries no pricing content itself: authored pricing lives in
PricingModels, and the complete read artifact for a given window is the
derived RatePlanVersion snapshot.

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
| `urpx:hasRatePlanVersion` | Object | 0..* | [`RatePlanVersion`](#rateplanversion) | Links a rate plan to a resolved version snapshot built for it. |
| `urpx:hasServiceClass` | Object | 0..* | [`ServiceClass`](#serviceclass) | Service classes applicable to this rate plan |
| `urpx:initialEffectiveDate` | Datatype | 1..1 | `xsd:date` | Date when this rate plan was first introduced |
| `urpx:isReferencedByPricingModel` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links a rate plan or rate plan modifier to a pricing model that declares content for it. |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:offeredBy` | Object | 0..1 | [`Organization`](#organization) | Organization that offers this pricing model, rate plan, rate plan modifier, rate plan version, or rate plan modifier version to customers. |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
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
| `urpx:consolidatedFrom` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links a derived rate plan version snapshot to a pricing model whose content was consolidated into it. |
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
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasEligibilityRule` | Object | 0..* | [`EligibilityRule`](#eligibilityrule) | Customer qualification rules |
| `urpx:hasIdentifier` | Object | 0..* | [`RatePlanIdentifier`](#rateplanidentifier) | Links an organization identity, rate plan, or rate plan modifier to a typed external identifier. |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
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
| `urpx:offeredBy` | Object | 0..1 | [`Organization`](#organization) | Organization that offers this pricing model, rate plan, rate plan modifier, rate plan version, or rate plan modifier version to customers. |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:referencesGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | References a general rule applicable to this rate plan version or modifier version |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |
| `urpx:serviceRole` | Datatype | 1..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |
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
| `urpx:hasRatePlanModifierVersion` | Object | 0..* | [`RatePlanModifierVersion`](#rateplanmodifierversion) | Links a rate plan modifier to a resolved version snapshot built for it. |
| `urpx:hasServiceClass` | Object | 0..* | [`ServiceClass`](#serviceclass) | Service classes applicable to this rate plan |
| `urpx:initialEffectiveDate` | Datatype | 1..1 | `xsd:date` | Date when this rate plan was first introduced |
| `urpx:isReferencedByPricingModel` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links a rate plan or rate plan modifier to a pricing model that declares content for it. |
| `urpx:modifierUniqueIdentifier` | Datatype | 1..1 | `xsd:string` | Unique modifier identifier using alphanumeric and hyphen only |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:offeredBy` | Object | 0..1 | [`Organization`](#organization) | Organization that offers this pricing model, rate plan, rate plan modifier, rate plan version, or rate plan modifier version to customers. |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
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
| `urpx:consolidatedFrom` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links a derived rate plan version snapshot to a pricing model whose content was consolidated into it. |
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
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
| `urpx:hasEligibilityRule` | Object | 0..* | [`EligibilityRule`](#eligibilityrule) | Customer qualification rules |
| `urpx:hasIdentifier` | Object | 0..* | [`RatePlanModifierIdentifier`](#rateplanmodifieridentifier) | Links an organization identity, rate plan, or rate plan modifier to a typed external identifier. |
| `urpx:hasLocationDataSet` | Object | 0..* | [`LocationDataSet`](#locationdataset) | Links organization to versioned location auxiliary data |
| `urpx:hasPlanElements` | Object | 1..1 | [`PlanElements`](#planelements) | Centralized temporal and pricing elements for rate plan or modifier versions |
| `urpx:hasPriceDefinitionReference` | Object | 0..* | [`PriceDefinitionReference`](#pricedefinitionreference) | Attaches a PriceDefinitionReference relator to an authored model or a derived snapshot. |
| `urpx:hasPrices` | Object | 1..1 | [`Prices`](#prices) | Links a rate plan version or authored pricing model to actual price instances with amounts or unit prices |
| `urpx:hasRateCase` | Object | 0..* | [`RateCase`](#ratecase) | Links a rate plan version or pricing artifact to one or more associated rate case proceedings |
| `urpx:minimumTenure` | Datatype | 0..1 | `xsd:duration` | The minimum duration a customer must remain enrolled in a rate plan, program, or service offering. |
| `urpx:modifierCategory` | Datatype | 0..1 | — | Category of modifier for organization (Business categorization) |
| `urpx:modifierType` | Datatype | 0..1 | — | Type of rate plan modifier (utility rate plan modifiers) |
| `urpx:modifierVersionNumber` | Datatype | 1..1 | `xsd:string` | Modifier version number |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:offeredBy` | Object | 0..1 | [`Organization`](#organization) | Organization that offers this pricing model, rate plan, rate plan modifier, rate plan version, or rate plan modifier version to customers. |
| `urpx:priceCurrency` | Datatype | 0..1 | `xsd:string` | ISO 4217 three-letter currency code |
| `urpx:referencesGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | References a general rule applicable to this rate plan version or modifier version |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |
| `urpx:serviceRole` | Datatype | 1..1 | — | Service role for rate plan (distribution/retail/bundled) |
| `urpx:timezoneIdentifier` | Datatype | 0..1 | `xsd:string` | IANA timezone identifier for this location dataset |
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
| `urpx:cancelledBy` | Datatype | 0..1 | — | Marks a publication unit — a tariff filing, or a standalone pricing model — as no longer valid (voided) and links it to what cancelled it: the successor unit for a same-period correction (see urpx:replacedBy), or the publication that withdrew it when there is no successor. A cancelled unit is retained for audit but excluded from active reads. |
| `urpx:cancelledOn` | Datatype | 0..1 | `xsd:date` | Date on which a tariff filing or standalone pricing model was cancelled or voided — when its content left the active set. |
| `urpx:cancelledOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a tariff filing or standalone pricing model was cancelled or voided — when its content left the active set. Precise variant of urpx:cancelledOn. |
| `urpx:confidence` | Datatype | 1..1 | — | The epistemic confidence of the subject's pricing content. |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document, publication unit, or data was last updated |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document, publication unit, or data was last updated |
| `urpx:documentedBy` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an authored PricingModel, a TariffFiling, or a resolved reference to a DataSourceReference identifying the source evidence it models, interprets, or was derived from. |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Validity-window start for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Validity-window start, with dateTime precision, for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Forecast end: provisional end date subject to change, as with pricing effective until further notice. Distinct from the validity-window end carried by expirationDate. |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Forecast end with dateTime precision: provisional end subject to change, as with pricing effective until further notice. Distinct from the validity-window end carried by expirationDateTime. |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Validity-window end for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Validity-window end, with dateTime precision, for a pricing model that is not published within a tariff filing — for example competitive-supply, contract, or scenario pricing. When a pricing model is published within a tariff filing, its validity dates derive from that filing; where a filing and this date are both present, they describe the same window. |
| `urpx:hasGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | Links a TariffFiling or PricingModel to general rules that apply across rate plans. |
| `urpx:hasPlanElements` | Object | 0..1 | [`PlanElements`](#planelements) | Centralized temporal and pricing elements for rate plan or modifier versions |
| `urpx:hasPrices` | Object | 0..1 | [`Prices`](#prices) | Links a rate plan version or authored pricing model to actual price instances with amounts or unit prices |
| `urpx:offeredBy` | Object | 0..1 | [`Organization`](#organization) | The organization that offers the pricing this model states. |
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | The organization that published this pricing model as a unit. Present on a standalone model; a model published within a filing may leave it to the filing. |
| `urpx:pursuantTo` | Object | 0..* | [`GeneralRule`](#generalrule) | The general rule that legally grounds this PricingModel or PriceDefinition. |
| `urpx:referencesRatePlan` | Object | 0..* | [`RatePlan`](#rateplan) | Plan-specific content link (PricingModel → RatePlan); or links a PriorRatePlan record to the actual rate plan. |
| `urpx:referencesRatePlanModifier` | Object | 0..* | [`RatePlanModifier`](#rateplanmodifier) | Plan-specific content link: this PricingModel applies to this RatePlanModifier. |
| `urpx:replacedBy` | Object | 0..1 | [`PricingModel`](#pricingmodel) | Inverse of urpx:replaces: the successor publication unit (tariff filing, or standalone pricing model) that corrects and voids this one for the same effective period. |
| `urpx:replaces` | Object | 0..1 | [`PricingModel`](#pricingmodel) | Links a corrected publication unit — a tariff filing, or a standalone pricing model with no enclosing filing — to the prior one it replaces for the SAME effective period. The replaced subject is voided; the replacing one occupies the same effective window with corrected content. A filing replaces a filing; a pricing model replaces a pricing model. Use urpx:supersedes for a forward-in-time change of effective period; use urpx:replaces for an in-place correction of an existing period. |
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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasAlternative` | Object | 0..* | [`ProfileAlternative`](#profilealternative) | Links alternatives container to specific price set options |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
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
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |
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
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:currentPrice` | Datatype | 0..1 | `xsd:decimal` | Current effective price |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:endDate` | Datatype | 0..1 | `xsd:date` | End date for validity period (date only, no time component). Omit for indefinite validity. |
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:expectedEndDate` | Datatype | 0..1 | `xsd:date` | Provisional end date subject to change |
| `urpx:expectedEndDateTime` | Datatype | 0..1 | `xsd:dateTime` | Provisional end date/time subject to change |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
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
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |
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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasApplicabilityGroup` | Object | 0..* | [`ApplicabilityGroup`](#applicabilitygroup) | Links price set to applicability rules |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasCalculationMethod` | Object | 0..1 | [`CalculationMethod`](#calculationmethod) | Links price to its calculation method |
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
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
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |
| `urpx:touPeriodNumber` | Datatype | 0..1 | `xsd:integer` | Integer reference to TOU period ID for price application |

---

### PriceDefinitionReference

**URI:** `https://urpx-org.github.io/urpx/ontology/PriceDefinitionReference`  
**Parent:** `owl:Thing`

**Description:** Addressable relationship between a model or snapshot and a PriceDefinition: the place inclusion, resolution mode, source evidence, temporal scope, and resolution provenance live.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:documentedBy` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an authored PricingModel, a TariffFiling, or a resolved reference to a DataSourceReference identifying the source evidence it models, interprets, or was derived from. |
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
| `urpx:fallbackSourced` | Datatype | 0..1 | `xsd:boolean` | Derived: true iff any content in the snapshot was resolved from a declared fallback source rather than the primary one. The content is present (this is distinct from selfContained, which reports whether content is carried inline versus retrieved elsewhere); its basis is the fallback. |
| `urpx:selfContained` | Datatype | 0..1 | `xsd:boolean` | Derived: false iff any PriceDefinitionReference is referenceInclusion retrievedElsewhere. |
| `urpx:stale` | Datatype | 0..1 | `xsd:boolean` | Derived: true iff any content contributing to the snapshot is older than its source's expected publication cadence, so a newer value should exist that has not been obtained. Freshness is independent of coverage — a complete snapshot can be stale. |

---

### Evaluation

**URI:** `https://urpx-org.github.io/urpx/ontology/Evaluation`  
**Parent:** `owl:Thing`

**Description:** Portable rationale behind a snapshot or coverage verdict: which inputs were selected, excluded, or missing, and why.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:evaluatedBy` | Object | 0..1 | [`Organization`](#organization) | The organization that performed this evaluation and attests its content. |
| `urpx:evaluatedOn` | Datatype | 0..1 | `xsd:dateTime` | When this evaluation was performed. |
| `urpx:evaluationKind` | Datatype | 0..1 | — | The kind of an Evaluation. |
| `urpx:hasModelExclusion` | Object | 0..* | [`ModelExclusion`](#modelexclusion) | Links an evaluation to the record of a consolidatedFrom model that contributed no element to the snapshot. |

---

### ModelExclusion

**URI:** `https://urpx-org.github.io/urpx/ontology/ModelExclusion`  
**Parent:** `owl:Thing`

**Description:** Records, on a coverage claim's evaluation, that a pricing model listed in the version's consolidatedFrom set contributed no element to the snapshot, and why.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:excludedModel` | Object | 1..1 | [`PricingModel`](#pricingmodel) | The pricing model this exclusion record is about: listed in the version's consolidatedFrom set but contributing no element to the snapshot. |
| `urpx:exclusionReason` | Datatype | 1..1 | — | Why the excluded model contributed no element to the snapshot. |

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
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document, publication unit, or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document, publication unit, or data was last updated |
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
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | Organization that published this pricing model, tariff filing, source publication, or URPX exchange package. |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |
| `urpx:version` | Datatype | 0..1 | `xsd:string` | The version of the CreativeWork embodied by a specified resource |

---

### TariffFiling

**URI:** `https://urpx-org.github.io/urpx/ontology/TariffFiling`  
**Parent:** `owl:Thing`

**Description:** An excerpt of a SourcePublication that contains one or more PricingModels — the regulatory publication unit.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:cancelledBy` | Datatype | 0..1 | — | Marks a publication unit — a tariff filing, or a standalone pricing model — as no longer valid (voided) and links it to what cancelled it: the successor unit for a same-period correction (see urpx:replacedBy), or the publication that withdrew it when there is no successor. A cancelled unit is retained for audit but excluded from active reads. |
| `urpx:cancelledOn` | Datatype | 0..1 | `xsd:date` | Date on which a tariff filing or standalone pricing model was cancelled or voided — when its content left the active set. |
| `urpx:cancelledOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a tariff filing or standalone pricing model was cancelled or voided — when its content left the active set. Precise variant of urpx:cancelledOn. |
| `urpx:cancelsPriceDefinition` | Object | 0..* | [`PriceDefinition`](#pricedefinition) | Asserts that this tariff filing cancels the referenced price definition. |
| `urpx:containsPricingModel` | Object | 1..* | [`PricingModel`](#pricingmodel) | Links a TariffFiling to the PricingModels it contains. |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document, publication unit, or data was last updated |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document, publication unit, or data was last updated |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:documentedBy` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an authored PricingModel, a TariffFiling, or a resolved reference to a DataSourceReference identifying the source evidence it models, interprets, or was derived from. |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:hasGeneralRule` | Object | 0..* | [`GeneralRule`](#generalrule) | Links a TariffFiling or PricingModel to general rules that apply across rate plans. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:publishedBy` | Object | 0..1 | [`Organization`](#organization) | The organization that published this filing. |
| `urpx:replacedBy` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Inverse of urpx:replaces: the successor publication unit (tariff filing, or standalone pricing model) that corrects and voids this one for the same effective period. |
| `urpx:replaces` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Links a corrected publication unit — a tariff filing, or a standalone pricing model with no enclosing filing — to the prior one it replaces for the SAME effective period. The replaced subject is voided; the replacing one occupies the same effective window with corrected content. A filing replaces a filing; a pricing model replaces a pricing model. Use urpx:supersedes for a forward-in-time change of effective period; use urpx:replaces for an in-place correction of an existing period. |
| `urpx:supersedes` | Object | 0..1 | [`TariffFiling`](#tarifffiling) | Links a publication unit to the prior one it supersedes: a tariff filing to the prior filing, or an authored pricing model to the prior model in the same thread. The superseded subject's effective span ends when the superseding one begins; it remains valid history. Supersession is a forward-in-time change of effective period — it is NOT a same-period correction (urpx:replaces) nor a cancellation/withdrawal (urpx:cancelledBy). |

---

### DataSourceReference

**URI:** `https://urpx-org.github.io/urpx/ontology/DataSourceReference`  
**Parent:** `owl:Thing`

**Description:** Structured reference from an URPX fact to the external source it was interpreted from (publication, API, database, manual entry) — filename/URL, media type, and an optional sub-document selector.

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:accessURL` | Datatype | 0..1 | `xsd:anyURI` | URL from which the data was directly accessed or downloaded |
| `urpx:anchorLink` | Datatype | 0..1 | `xsd:anyURI` | URL or fragment identifier pointing to a specific location within a tariff book PDF |
| `urpx:dataSourceType` | Datatype | 0..1 | — | Type of source of the data |
| `urpx:dateApproved` | Datatype | 0..1 | `xsd:date` | Regulatory approval date |
| `urpx:dateCreated` | Datatype | 0..1 | `xsd:date` | Date the source document or data was created |
| `urpx:dateModified` | Datatype | 0..1 | `xsd:date` | Date the source document, publication unit, or data was last updated |
| `urpx:datePublished` | Datatype | 0..1 | `xsd:date` | Date of first broadcast/publication |
| `urpx:dateReceived` | Datatype | 0..1 | `xsd:date` | Date the document was received |
| `urpx:dateRetrieved` | Datatype | 0..1 | `xsd:date` | Date on which data was retrieved |
| `urpx:dateTimeApproved` | Datatype | 0..1 | `xsd:dateTime` | Regulatory approval date and time |
| `urpx:dateTimeCreated` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document or data was created |
| `urpx:dateTimeModified` | Datatype | 0..1 | `xsd:dateTime` | Date and time the source document, publication unit, or data was last updated |
| `urpx:dateTimePublished` | Datatype | 0..1 | `xsd:dateTime` | Date and time of first broadcast/publication |
| `urpx:dateTimeReceived` | Datatype | 0..1 | `xsd:dateTime` | Date and time the document was received |
| `urpx:dateTimeRetrieved` | Datatype | 0..1 | `xsd:dateTime` | Date and time on which data was retrieved |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:effectiveDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes active |
| `urpx:effectiveDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes active |
| `urpx:expirationDate` | Datatype | 0..1 | `xsd:date` | Date when entity becomes inactive |
| `urpx:expirationDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date/time when entity becomes inactive |
| `urpx:fileName` | Datatype | 0..1 | `xsd:string` | Name of document or file including filename extension if present. |
| `urpx:hasSelector` | Object | 0..* | [`Selector`](#selector) | Points into a region of the source using a Web Annotation selector (external vocabulary, used by reference). |
| `urpx:leafEnd` | Datatype | 0..1 | `xsd:string` | Last leaf number in the tariff book for the referenced content |
| `urpx:leafStart` | Datatype | 0..1 | `xsd:string` | First leaf number in the tariff book for the referenced content |
| `urpx:mediaType` | Datatype | 0..1 | — | Document media type as published by IANA. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:pageEnd` | Datatype | 0..1 | `xsd:integer` | Ending page number in the source document |
| `urpx:pageStart` | Datatype | 0..1 | `xsd:integer` | Starting page number in the source document |
| `urpx:sourcePublication` | Object | 0..1 | [`SourcePublication`](#sourcepublication) | The SourcePublication a DataSourceReference points at, when the source is a publication. |
| `urpx:tariffStatementType` | Datatype | 0..1 | — | Type of regulatory statement filing (PSC statement types) |
| `urpx:url` | Datatype | 0..1 | `xsd:anyURI` | URL of the item |

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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasBillingCycle` | Object | 0..1 | [`BillingCycle`](#billingcycle) | Links Ledger to billing cycle definitions |
| `urpx:ledgerType` | Datatype | 0..1 | — | Type of ledger for billing segregation |
| `urpx:name` | Datatype | 1..1 | `xsd:string` | The name of the item |
| `urpx:referencesMetricInput` | Object | 0..* | [`MetricInput`](#metricinput) | Links to metric inputs for measurement and profile metric input definitions |
| `urpx:settlementInterval` | Datatype | 0..1 | `xsd:duration` | Period over which ledger balances are settled |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |

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
| `urpx:endDateTime` | Datatype | 0..1 | `xsd:dateTime` | End date and time for validity period (with time component). Omit for indefinite validity. |
| `urpx:hasTemporalPeriod` | Object | 0..1 | [`TemporalPeriod`](#temporalperiod) | Links a temporal scope to the reusable named time interval its span denotes. |
| `urpx:scopeKind` | Datatype | 1..1 | — | The role of a TemporalScope. |
| `urpx:startDate` | Datatype | 0..1 | `xsd:date` | The start date and time of the item (in ISO 8601 date format) |
| `urpx:startDateTime` | Datatype | 0..1 | `xsd:dateTime` | The start date and time of the item (in ISO 8601 date format) |

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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasConditionExpression` | Object | 1..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:hasDataSourceReference` | Object | 0..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |

---

### ApplicabilityRule

**URI:** `https://urpx-org.github.io/urpx/ontology/ApplicabilityRule`  
**Parent:** `owl:Thing`

**Description:** Conditions determining when a price applies to usage

**Properties:**

| Property | Type | Cardinality | Range | Description |
|----------|------|-------------|-------|-------------|
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:hasConditionExpression` | Object | 0..1 | [`ConditionExpression`](#conditionexpression) | Links a rule to its structured condition expression |
| `urpx:month` | Datatype | 0..* | `xsd:gMonth` | Month when this season applies (ISO 8601 gMonth format) |
| `urpx:name` | Datatype | 0..1 | `xsd:string` | The name of the item |
| `urpx:sunsetOn` | Datatype | 0..1 | `xsd:date` | Date on which a plan sub-resource (price, price definition, price set, ledger, eligibility or applicability rule) is intentionally discontinued with NO expected successor. Distinguishes terminal retirement from an end date that anticipates a continuing or updated successor. |
| `urpx:sunsetOnDateTime` | Datatype | 0..1 | `xsd:dateTime` | Date and time at which a plan sub-resource is intentionally discontinued with no expected successor. Precise variant of urpx:sunsetOn. |

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
| `urpx:contributedBy` | Object | 0..* | [`PricingModel`](#pricingmodel) | Links an element of a consolidated rate plan version snapshot to the pricing model via which it entered the snapshot. Asserted at the most parent-level element the model contributed wholly. |
| `urpx:description` | Datatype | 0..1 | `xsd:string` | Detailed description of the item |
| `urpx:generalRuleID` | Datatype | 1..1 | `xsd:string` | Unique identifier for a general rule |
| `urpx:hasApplicabilityRule` | Object | 0..* | [`ApplicabilityRule`](#applicabilityrule) | Conditions for price application |
| `urpx:hasDataSourceReference` | Object | 1..* | [`DataSourceReference`](#datasourcereference) | Links an entity to a structured data source reference. |
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
| `urpx:offers` | Datatype | 0..* | — | Links an organization to the pricing models, rate plans, rate plan modifiers, and version snapshots it offers to customers. |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |

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
| `urpx:offers` | Datatype | 0..* | — | Links an organization to the pricing models, rate plans, rate plan modifiers, and version snapshots it offers to customers. |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
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
| `urpx:offers` | Datatype | 0..* | — | Links an organization to the pricing models, rate plans, rate plan modifiers, and version snapshots it offers to customers. |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |

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
| `urpx:offers` | Datatype | 0..* | — | Links an organization to the pricing models, rate plans, rate plan modifiers, and version snapshots it offers to customers. |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
| `urpx:ownershipType` | Datatype | 0..1 | — | Ownership structure of utility (EIA ownership categories) |

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
| `urpx:offers` | Datatype | 0..* | — | Links an organization to the pricing models, rate plans, rate plan modifiers, and version snapshots it offers to customers. |
| `urpx:operatesIn` | Object | 0..* | [`SystemOperator`](#systemoperator) | Links organization to ISO/RTO markets |
| `urpx:organizationType` | Datatype | 1..1 | — | Classification of organization type (organization types) |
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
| `urpx:bulk` | Bulk accumulation - cumulative total quantity |
| `urpx:delta` | Delta accumulation - difference since last reading |
| `urpx:instantaneous` | Instantaneous value - snapshot at specific moment |
| `urpx:summation` | Summation accumulation - sum over period |

### AggregationMethodValue

| Value | Description |
|-------|-------------|
| `urpx:average` | Average (mean) value over measurement interval |
| `urpx:maximum` | Maximum (peak) value over measurement interval |
| `urpx:median` | Median (middle) value over measurement interval |
| `urpx:minimum` | Minimum (lowest) value over measurement interval |
| `urpx:sum` | Sum (total) value over measurement interval |

### AnnualIncomeRangeValue

| Value | Description |
|-------|-------------|
| `urpx:highIncome` | High income range - typically above 200% of area median income |
| `urpx:lowIncome` | Low income range - typically 50-80% of area median income |
| `urpx:middleIncome` | Middle income range - typically 120-200% of area median income |
| `urpx:moderateIncome` | Moderate income range - typically 80-120% of area median income |
| `urpx:veryLowIncome` | Very low income range - typically below 50% of area median income |

### AssistanceEligibilityLevelValue

| Value | Description |
|-------|-------------|
| `urpx:notQualifiedAssistance` | Customer does not qualify for assistance program benefits |
| `urpx:provisionallyQualifiedAssistance` | Customer provisionally qualifies pending verification |
| `urpx:qualifiedAssistance` | Customer qualifies for assistance program benefits |
| `urpx:underReviewAssistance` | Customer assistance eligibility application under review |

### BillPortionValue

| Value | Description |
|-------|-------------|
| `urpx:bundledPortion` | Combined delivery and supply charges not separately stated |
| `urpx:deliveryPortion` | Charges for delivering energy to the customer |
| `urpx:supplyPortion` | Charges for energy commodity and generation |

### BooleanOperatorValue

| Value | Description |
|-------|-------------|
| `urpx:andOperator` | Represents logical conjunction in condition-expression boolean composition |
| `urpx:notOperator` | Represents logical negation in condition-expression boolean composition |
| `urpx:orOperator` | Represents logical disjunction in condition-expression boolean composition |

### ChangeReasonValue

| Value | Description |
|-------|-------------|
| `urpx:changeReasonOther` | Other change reason not specifically categorized |
| `urpx:correction` | Correction of error in previous filing |
| `urpx:fuelAdjustment` | Change due to fuel cost adjustment mechanism |
| `urpx:initial` | Initial rate plan filing - first version of a new rate |
| `urpx:rateCase` | Change resulting from formal rate case proceeding |
| `urpx:regulatoryOrder` | Change mandated by regulatory authority order or directive |
| `urpx:riderUpdate` | Change to rate rider or surcharge component |
| `urpx:seasonalChange` | Scheduled seasonal price adjustment |

### ChargeCategoryValue

| Value | Description |
|-------|-------------|
| `urpx:adjustment` | Price adjustments, true-ups, and reconciliation charges |
| `urpx:auxiliaryCharge` | Ancillary services and miscellaneous fees |
| `urpx:discount` | Discounts, rebates, and bill reductions |
| `urpx:environmental` | Environmental and renewable energy program charges |
| `urpx:infrastructure` | General infrastructure investment charge |
| `urpx:regulatory` | Regulatory compliance and mandated program charges |
| `urpx:serviceCharge` | Base service fees, customer charges, and monthly recurring charges |
| `urpx:taxes` | All tax-related charges including state, local, and utility taxes |

### ChargeTypeValue

| Value | Description |
|-------|-------------|
| `urpx:adjustmentPowerCost` | Adjustment for changes in power costs |
| `urpx:adjustmentRenewable` | Adjustment for renewable energy costs |
| `urpx:adjustmentTariff` | General tariff price adjustment |
| `urpx:ancillaryServices` | Grid ancillary services charge |
| `urpx:capacity` | General capacity-related charge |
| `urpx:capacityCharge` | Charge for reserved capacity |
| `urpx:capitalCredit` | Cooperative capital credit allocation |
| `urpx:complianceCharge` | Regulatory compliance cost charge |
| `urpx:congestionCharge` | Locational marginal pricing congestion component |
| `urpx:conservationCharge` | Energy conservation program charge |
| `urpx:contractMisc` | Miscellaneous contract-related charge |
| `urpx:creditAdministrative` | Administrative or billing credit |
| `urpx:creditEnergy` | Credit for energy charges |
| `urpx:creditGeneration` | Credit for customer generation |
| `urpx:creditInfrastructure` | Credit against infrastructure charges |
| `urpx:creditMisc` | Other credits |
| `urpx:creditPriceProtection` | Credit from price protection program |
| `urpx:creditRenewable` | Credit for renewable energy |
| `urpx:creditTariffRider` | Credit from tariff rider |
| `urpx:customerCharge` | Fixed recurring (typically monthly) charge for being a connected customer, independent of usage |
| `urpx:deliveryCharge` | Combined charge for energy delivery |
| `urpx:demandDirect` | Charge based on peak demand measurement |
| `urpx:demandIndirect` | Allocated or estimated demand charge |
| `urpx:demandSideManagement` | DSM program charge |
| `urpx:depositCredit` | Return of security deposit |
| `urpx:depositInterest` | Interest on security deposit |
| `urpx:depositRequest` | Security deposit requirement |
| `urpx:distributedGeneration` | Charge related to distributed generation |
| `urpx:distributionCharge` | Local distribution system charge |
| `urpx:donation` | Voluntary donation or contribution |
| `urpx:efficiencyFunding` | Energy efficiency program funding |
| `urpx:energyStorage` | Energy storage-related charge |
| `urpx:environmentalFunding` | Environmental program funding charge |
| `urpx:exportCredit` | Credit for energy exported to the grid under net metering or net billing |
| `urpx:facilities` | Charge for specific facilities or equipment |
| `urpx:fuelCharge` | Fuel-cost recovery / fuel adjustment, including gas purchased-gas-adjustment style cost pass-through |
| `urpx:generation` | Charge for electricity generation |
| `urpx:handling` | Administrative handling fee |
| `urpx:heapDiscount` | Home Energy Assistance Program discount |
| `urpx:initiationCharge` | One-time charge for service initiation or reconnection |
| `urpx:lateFee` | Penalty charge for late payment of a bill |
| `urpx:minimumBill` | Ensures total bill meets a minimum amount; different from minimum charge |
| `urpx:minimumCharge` | Fixed monthly minimum charge for being a customer |
| `urpx:nonBypassableCharge` | Charges that apply regardless of energy supplier choice |
| `urpx:powerFactorCharge` | Power factor correction charge or penalty |
| `urpx:publicBenefits` | Public purpose program charge |
| `urpx:reactiveDemand` | Charge based on peak reactive power demand (kVAr); the reactive analogue of demandDirect |
| `urpx:recoverySurcharge` | Surcharge for cost recovery |
| `urpx:reliabilityCharge` | Reliability-must-run contracts and capacity performance charges |
| `urpx:renewableFunding` | Charge supporting renewable energy programs |
| `urpx:rentalFee` | Equipment rental charges |
| `urpx:serviceMetered` | Service charge based on metered usage |
| `urpx:serviceNonMetered` | Fixed service charge for unmetered services |
| `urpx:standbyCharge` | Charge for standby or backup service to customers with on-site generation |
| `urpx:strandedCosts` | Recovery of stranded utility investments |
| `urpx:systemBenefitCharge` | Universal service fund and public purpose program charges |
| `urpx:tariffRider` | Additional tariff provision or adjustment |
| `urpx:taxAdjustment` | Adjustment to tax calculations |
| `urpx:taxCredit` | Credit against taxes |
| `urpx:taxMisc` | Other tax-related charges |
| `urpx:taxMunicipal` | City or local government tax |
| `urpx:taxSales` | General sales tax |
| `urpx:taxState` | State-level tax |
| `urpx:taxUtility` | Tax on utility services |
| `urpx:transitionCharge` | Market restructuring and stranded cost recovery charges |
| `urpx:transmission` | High-voltage transmission system charge |
| `urpx:usageCharge` | Volumetric energy consumption charge |
| `urpx:volumetricCharge` | Generic volumetric charge based on usage quantity |

<DiagramViewer src="../diagrams/dictionary/hierarchy-ChargeTypeValue.svg" alt="ChargeTypeValue hierarchy" />

### CollectionRoleValue

| Value | Description |
|-------|-------------|
| `urpx:adHocSet` | An informal, ad hoc grouping of PricingModels carrying no implied authority or completeness. |
| `urpx:canonicalSet` | The authoritative, canonical grouping of PricingModels for its subject. |
| `urpx:modelThread` | A chronological thread tracing one lineage of PricingModels (for example a regulatory thread) across successive RatePlans and RatePlanModifiers. |
| `urpx:scenarioSet` | A grouping of PricingModels assembled to represent or drive a scenario. |
| `urpx:submissionSet` | A grouping of PricingModels assembled for a single submission or filing. |

### CommodityValue

| Value | Description |
|-------|-------------|
| `urpx:biomass` | Biomass renewable energy source |
| `urpx:cableTv` | Cable television service |
| `urpx:chilledWater` | Chilled water cooling service |
| `urpx:coal` | Coal fuel commodity |
| `urpx:commodityOther` | Other commodity not specifically categorized |
| `urpx:compressedAir` | Compressed air utility service |
| `urpx:diesel` | Diesel fuel commodity |
| `urpx:districtCooling` | District cooling utility service |
| `urpx:districtHeating` | District heating utility service |
| `urpx:electricity` | Electric energy commodity |
| `urpx:fuelOil` | Fuel oil heating commodity |
| `urpx:gasoline` | Gasoline fuel commodity |
| `urpx:geothermal` | Geothermal energy source |
| `urpx:hotWater` | Hot water heating service |
| `urpx:hydroelectric` | Hydroelectric energy generation |
| `urpx:internet` | Internet connectivity service |
| `urpx:irrigation` | Irrigation water service |
| `urpx:naturalGas` | Natural gas commodity |
| `urpx:nonPotableWater` | Non-drinking water service |
| `urpx:nuclear` | Nuclear energy generation |
| `urpx:potableWater` | Drinking water service |
| `urpx:propane` | Propane gas fuel |
| `urpx:recycling` | Recycling utility service |
| `urpx:security` | Security monitoring service |
| `urpx:sewage` | Sewage treatment service |
| `urpx:solar` | Solar energy generation |
| `urpx:steam` | Steam heating service |
| `urpx:stormwater` | Stormwater management service |
| `urpx:telecommunications` | Telecommunications service |
| `urpx:wasteHeat` | Waste heat recovery energy |
| `urpx:wasteManagement` | Waste management utility service |
| `urpx:water` | Water utility service |
| `urpx:wind` | Wind energy generation |

### CompletenessResultValue

| Value | Description |
|-------|-------------|
| `urpx:complete` | Every element required to compute cost for the claimed scope is present in the snapshot. |
| `urpx:noCoverage` | Evaluated, and no applicable content exists for the claimed scope in any source. Distinct from pending, where content is expected later, and from unknown, where no evaluation has run. |
| `urpx:partial` | At least one known required element is missing or unresolved; what is present is usable. |
| `urpx:pending` | Required content is expected from the source but is not yet published or available at evaluation time, so the absence is anticipated rather than a gap. |
| `urpx:unknown` | The scope has not been evaluated against sources, so there is no basis to assert coverage either way. |
| `urpx:unsupported` | The source publishes content for the scope that the consuming representation cannot express, so coverage cannot be claimed although the data exists. |

### ConfidenceValue

| Value | Description |
|-------|-------------|
| `urpx:estimated` | The pricing content is derived or inferred where the authoritative source does not state it directly. |
| `urpx:projected` | The pricing content is asserted for a future period ahead of the authoritative source publishing it. |
| `urpx:verified` | The pricing content is confirmed against the authoritative published source. |

### ConnectionKindValue

| Value | Description |
|-------|-------------|
| `urpx:directConnection` | Direct service connection without transformation |
| `urpx:overheadConnection` | Overhead power line service connection |
| `urpx:padMountedConnection` | Pad-mounted transformer service connection |
| `urpx:permanentConnection` | Permanent service connection to the electrical grid |
| `urpx:temporaryConnection` | Temporary service connection for construction or events |
| `urpx:undergroundConnection` | Underground cable service connection |

### ConnectorTypeValue

| Value | Description |
|-------|-------------|
| `urpx:ccs` | CCS (Combined Charging System) connector - European/North American DC fast charging standard |
| `urpx:chademo` | CHAdeMO connector - Japanese DC fast charging standard |
| `urpx:dcFast` | DC Fast charging connector - high-power direct current charging |
| `urpx:level1` | Level 1 EV charging connector - standard 120V household outlet |
| `urpx:level2` | Level 2 EV charging connector - 240V dedicated charging station |
| `urpx:teslaSupercharger` | Tesla Supercharger connector - proprietary Tesla fast charging |

### CustomerChoiceValue

| Value | Description |
|-------|-------------|
| `urpx:mandatoryChoice` | Enrollment in this rate plan version is mandatory for qualifying customers |
| `urpx:voluntaryChoice` | Customer may opt in or out of this rate plan version |

### CustomerKindValue

| Value | Description |
|-------|-------------|
| `urpx:commercialKind` | Commercial customer - business and office service |
| `urpx:enterpriseKind` | Enterprise customer - large-scale corporate operations including subsidiaries and regional operators |
| `urpx:industrialKind` | Industrial customer - manufacturing and heavy industry service |
| `urpx:internalUseKind` | Internal use customer - utility's own facilities and operations |
| `urpx:nonResidentialKind` | Non residential customer - does not qualify as other CustomerKind |
| `urpx:residentialKind` | Residential customer - domestic household service |
| `urpx:serviceProviderKind` | Service provider customer - energy suppliers, schedulers, and wholesale market participants |

### CustomerSubKindValue

| Value | Description |
|-------|-------------|
| `urpx:commercialPumping` | Commercial pumping service - water pumping and irrigation operations |
| `urpx:commercialStandard` | Standard commercial service - general business, retail, and office operations |
| `urpx:commercialStreetlight` | Commercial streetlight service - municipal and private street lighting |
| `urpx:energyScheduler` | Energy scheduler service - wholesale market schedulers and aggregators |
| `urpx:energySupplier` | Energy supplier service - retail energy providers and competitive suppliers |
| `urpx:industrialLargeLoad` | Industrial large load service - high-demand manufacturing and processing facilities |
| `urpx:industrialStandard` | Standard industrial service - manufacturing and production facilities |
| `urpx:regionalOperator` | Regional operator service - large-scale regional facility operations |
| `urpx:religiousInstitution` | Service for religious institutions |
| `urpx:residentialFarm` | Residential farm service - agricultural operations with residential characteristics |
| `urpx:residentialMultiUnit` | Residential multi-unit service - apartments, condominiums, and multi-family dwellings |
| `urpx:residentialStandard` | Standard residential service - single-family homes and standard household service |
| `urpx:subsidiary` | Subsidiary service - corporate subsidiary operations |
| `urpx:windMachine` | Wind machine service - renewable energy generation facilities |

### DERTypeValue

| Value | Description |
|-------|-------------|
| `urpx:evChargingDER` | Electric vehicle charging station |
| `urpx:generatorDER` | Backup generator or combined heat and power system |
| `urpx:geothermalDER` | Geothermal heat pump or generation system |
| `urpx:hydroDER` | Hydroelectric power generation system |
| `urpx:nuclearDER` | Nuclear power generation system |
| `urpx:solarDER` | Solar photovoltaic generation system |
| `urpx:storageDER` | Battery energy storage system |
| `urpx:wasteDigestionDER` | Waste digestion or biogas generation system |
| `urpx:windDER` | Small-scale wind turbine generation |

### DataSourceTypeValue

| Value | Description |
|-------|-------------|
| `urpx:apiSource` | Data sourced from a web API or REST/GraphQL endpoint |
| `urpx:databaseSource` | Data sourced directly from a relational or non-relational database |
| `urpx:manualSource` | Data entered manually by a human operator |
| `urpx:regulatoryWebsiteSource` | Data sourced from a regulatory agency's official website or database |
| `urpx:utilityWebsiteSource` | Data sourced from a utility's official website or customer portal |

### DayTypeValue

| Value | Description |
|-------|-------------|
| `urpx:allDays` | All days of the week |
| `urpx:customDays` | Custom day selection pattern |
| `urpx:weekdayDays` | Monday through Friday (ISO 8601 weekdays) |
| `urpx:weekendDays` | Saturday and Sunday (ISO 8601 weekend) |

### DynamicPricingTypeValue

| Value | Description |
|-------|-------------|
| `urpx:criticalPeakPricing` | Special pricing during critical peak demand periods |
| `urpx:demandResponsePricing` | Pricing for demand response programs and events |
| `urpx:eventDrivenPricing` | Pricing triggered by specific events or conditions |
| `urpx:indexBasedPricing` | Pricing based on external market indices |
| `urpx:realTimePricing` | Real-time pricing based on current market conditions |
| `urpx:timeVaryingPricing` | Pricing that varies over time based on predetermined schedules |

### EndUseValue

| Value | Description |
|-------|-------------|
| `urpx:agriculturalEndUse` | Agricultural service for farming operations |
| `urpx:cookingEndUse` | Cooking electric service - ranges, ovens, and cooking appliances |
| `urpx:dataCenterEndUse` | Data center electric service - high-density computing and server operations |
| `urpx:dryingEndUse` | Drying electric service - clothes dryers |
| `urpx:heatingEndUse` | Electric heating service - space heating, water heating, and other thermal applications |
| `urpx:lightingEndUse` | Lighting electric service - interior and exterior lighting |
| `urpx:municipalEndUse` | Municipal service for government facilities |
| `urpx:nonheatingEndUse` | General electric service excluding heating - lighting, appliances, motors, and other non-thermal applications |
| `urpx:otherEndUse` | Other end use not specifically categorized |
| `urpx:refrigerationEndUse` | Refrigeration electric service - refrigerators, freezers, and cold storage |
| `urpx:spaceCoolingEndUse` | Space cooling electric service - air conditioning and building cooling |
| `urpx:spaceHeatingEndUse` | Space heating electric service - building interior heating |
| `urpx:streetLightingEndUse` | Street lighting service for public lighting |
| `urpx:waterHeatingEndUse` | Water heating electric service - domestic hot water |

### EnrollmentStatusValue

| Value | Description |
|-------|-------------|
| `urpx:activeStatus` | Active enrollment status - currently participating in rate plan or program |
| `urpx:expiredStatus` | Expired enrollment status - enrollment period has ended |
| `urpx:inactiveStatus` | Inactive enrollment status - not currently participating |
| `urpx:pendingStatus` | Pending enrollment status - enrollment request awaiting approval or processing |
| `urpx:suspendedStatus` | Suspended enrollment status - temporarily paused participation |
| `urpx:terminatedStatus` | Terminated enrollment status - participation ended before normal completion |

### EntityTypeValue

| Value | Description |
|-------|-------------|
| `urpx:corporationEntity` | Corporate legal entity (C-Corp, S-Corp) |
| `urpx:entityOther` | Other legal entity type not specifically categorized |
| `urpx:governmentEntity` | Government agency or department legal entity |
| `urpx:individualEntity` | Individual person legal entity |
| `urpx:llcEntity` | Limited Liability Company legal entity |
| `urpx:nonprofitEntity` | Nonprofit organization legal entity |
| `urpx:partnershipEntity` | Partnership legal entity (general or limited partnership) |
| `urpx:trustEntity` | Trust legal entity |

### EvaluationKindValue

| Value | Description |
|-------|-------------|
| `urpx:benchmark` | Scores a rate plan or a resolved snapshot against a reference set. |
| `urpx:comparison` | Contrasts two or more rate plans, rate plan versions, or resolved snapshots against each other. |
| `urpx:consolidation` | Explains how a resolved snapshot was assembled from its contributing pricing models: what was selected, what was excluded, and what was missing. |
| `urpx:coverageEvaluation` | Establishes a coverage claim's completeness verdict for its claimed scope by assessing the snapshot against its sources. |
| `urpx:validation` | Checks a snapshot or a coverage claim against its sources or shapes, independently of the party that produced it. |

### ExclusionReasonValue

| Value | Description |
|-------|-------------|
| `urpx:fullySuperseded` | Every element the model could contribute is superseded by a later model within the snapshot's window |
| `urpx:outOfScope` | The model's content falls outside the snapshot's claimed scope |
| `urpx:pruned` | The model's content was considered during consolidation and dropped in favor of other contributions |
| `urpx:voided` | The model was cancelled or replaced and is excluded from active reads |

### FlowDirectionValue

| Value | Description |
|-------|-------------|
| `urpx:bidirectional` | Bidirectional energy flow - both import and export |
| `urpx:forward` | Forward energy flow - consumption/import from grid |
| `urpx:net` | Net energy flow - net of consumption and generation |
| `urpx:reverse` | Reverse energy flow - generation/export to grid |

### GeographicScopeValue

| Value | Description |
|-------|-------------|
| `urpx:countyScope` | County-level geographic scope for applicability rules |
| `urpx:customScope` | Custom geographic scope with non-standard boundaries |
| `urpx:municipalityScope` | Municipality-level geographic scope for local applicability rules |
| `urpx:serviceTerritoryScope` | Service territory geographic scope for utility-specific applicability |
| `urpx:statewideScope` | State-level geographic scope for broad applicability rules |

### GeographicZoneValue

| Value | Description |
|-------|-------------|
| `urpx:coastalZone` | Coastal geographic zone - areas near oceans, lakes, or major waterways |
| `urpx:desertZone` | Desert geographic zone - arid and semi-arid regions |
| `urpx:geographicZoneOther` | Other geographic zone not specifically categorized |
| `urpx:industrialZone` | Industrial geographic zone - manufacturing and heavy industry areas |
| `urpx:mountainZone` | Mountain geographic zone - elevated terrain and mountainous regions |
| `urpx:ruralZone` | Rural geographic zone - countryside and agricultural areas |
| `urpx:suburbanZone` | Suburban geographic zone - residential areas outside city centers |
| `urpx:urbanZone` | Urban geographic zone - densely populated city areas |

### HVACKindValue

| Value | Description |
|-------|-------------|
| `urpx:airConditioner` | Standard air conditioning system |
| `urpx:airSourceHeatPump` | Air source heat pump system for heating and cooling |
| `urpx:districtHeatingConnection` | Connection to a district heating network |
| `urpx:groundSourceHeatPump` | Ground source (geothermal) heat pump system |
| `urpx:spaceHeater` | Individual space heating unit |

### IdentifierSchemeValue

| Value | Description |
|-------|-------------|
| `urpx:companyNumberScheme` | Company number identifier scheme - government-issued company registration number |
| `urpx:dunsScheme` | DUNS identifier scheme - Dun & Bradstreet Universal Numbering System |
| `urpx:eiaScheme` | EIA identifier scheme - US Energy Information Administration utility identifier |
| `urpx:gleifScheme` | GLEIF identifier scheme - Global Legal Entity Identifier Foundation system |
| `urpx:gridScheme` | GRID identifier scheme - Global Research Identifier Database for organizations |
| `urpx:isinScheme` | ISIN identifier scheme - International Securities Identification Number |
| `urpx:leiScheme` | LEI identifier scheme - Legal Entity Identifier for financial market participants |
| `urpx:localRegulatorScheme` | Local regulator identifier scheme - jurisdiction-specific regulatory identifier |
| `urpx:vatScheme` | VAT identifier scheme - Value Added Tax registration number |

### InterconnectionStatusValue

| Value | Description |
|-------|-------------|
| `urpx:disconnectedStatus` | DER is physically installed but not connected to grid |
| `urpx:interconnectedStatus` | DER is connected and operational on the grid |
| `urpx:notApplicableInterconnection` | Interconnection status not applicable to this resource type |
| `urpx:pendingInterconnection` | DER interconnection application is pending utility approval |

### IntervalAlignmentValue

| Value | Description |
|-------|-------------|
| `urpx:billingPeriodAligned` | Interval is aligned to the utility's billing cycle period (e.g., Bill Cycle 1, Trip 2). |
| `urpx:calendarAligned` | Interval is aligned to calendar boundaries (e.g., calendar month, calendar year). |
| `urpx:fixedAligned` | Interval is defined by fixed start/end dates independent of billing cycle or current date. |
| `urpx:rollingAligned` | Interval is aligned to the current evaluation date (e.g., past 365 days from today). |

### IntervalSelectionValue

| Value | Description |
|-------|-------------|
| `urpx:consecutivePeriodsSelection` | Selection based on a contiguous sequence of discrete periods meeting a criteria (e.g., 3 consecutive months of peak demand > X). |
| `urpx:fixedWindowSelection` | Selection based on a fixed time window defined by specific start/end dates (e.g., calendar year 2024). |
| `urpx:rollingWindowSelection` | Selection using a continuous time window of fixed duration that moves forward in time relative to a defined alignment (e.g., rolling 12 months). |

### IntervalTypeValue

| Value | Description |
|-------|-------------|
| `urpx:annualInterval` | Annual time interval (P1Y or P12M equivalent) |
| `urpx:customInterval` | Custom or non-standard time interval, must use intervalDuration property |
| `urpx:dailyInterval` | Daily time interval (P1D equivalent) |
| `urpx:fifteenMinuteInterval` | Fifteen-minute time interval (PT15M equivalent) |
| `urpx:fiveMinuteInterval` | Five-minute time interval (PT5M equivalent) |
| `urpx:hourlyInterval` | Hourly time interval (PT1H equivalent) |
| `urpx:monthlyInterval` | Monthly time interval (P1M equivalent) |
| `urpx:quarterlyInterval` | Quarterly time interval (P3M equivalent) |
| `urpx:realTimeInterval` | Real-time or continuous interval |
| `urpx:thirtyMinuteInterval` | Thirty-minute time interval (PT30M equivalent) |
| `urpx:weeklyInterval` | Weekly time interval (P7D equivalent) |

### InverterTypeValue

| Value | Description |
|-------|-------------|
| `urpx:centralInverter` | Central inverter - large-scale inverter for commercial installations |
| `urpx:hybridInverter` | Hybrid inverter - combined solar and battery storage inverter |
| `urpx:microInverter` | Micro inverter - individual inverter for each solar panel |
| `urpx:powerOptimizer` | Power optimizer - panel-level optimization with centralized inverter |
| `urpx:stringInverter` | String inverter - centralized inverter for multiple solar panels |

### LedgerTypeValue

| Value | Description |
|-------|-------------|
| `urpx:bundledLedger` | Ledger for bundled supply and delivery charges |
| `urpx:calculatedLedger` | Ledger for charges calculated based on charges in other ledgers under this BillingModel |
| `urpx:deliveryLedger` | Ledger for transmission and distribution charges |
| `urpx:distributionLedger` | Ledger specifically for distribution charges |
| `urpx:measuredLedger` | Ledger containing charges dependent on measured usage data |
| `urpx:profileMetricLedger` | Ledger containing charges dependent on static profile characteristics |
| `urpx:supplyLedger` | Ledger for energy supply and generation charges |
| `urpx:transmissionLedger` | Ledger specifically for transmission charges |

### LoadProfileValue

| Value | Description |
|-------|-------------|
| `urpx:baseload` | Baseload profile - consistent usage with minimal variation |
| `urpx:intermittent` | Intermittent profile - sporadic or occasional usage |
| `urpx:loadProfileOther` | Other load profile not specifically categorized |
| `urpx:peaking` | Peaking profile - high demand during specific periods |
| `urpx:seasonal` | Seasonal profile - usage varies by season |
| `urpx:variable` | Variable profile - irregular usage patterns |

### MeasurementTypeValue

| Value | Description |
|-------|-------------|
| `urpx:apparentPower` | Apparent power / apparent demand measurement (kVA, VA, MVA) |
| `urpx:current` | Electric current measurement (A, mA, etc.) |
| `urpx:demand` | Power demand measurement (kW, MW, etc.) |
| `urpx:energy` | Energy consumption measurement (kWh, MWh, etc.) |
| `urpx:frequency` | Frequency measurement (Hz) |
| `urpx:power` | Instantaneous power measurement (kW, MW, etc.) |
| `urpx:powerFactor` | Power factor measurement (ratio, percentage) |
| `urpx:pressure` | Pressure measurement (psi, bar, etc.) |
| `urpx:reactiveEnergy` | Reactive energy measurement (kVArh, VArh) |
| `urpx:reactivePower` | Reactive power / reactive demand measurement (kVAr, VAr) |
| `urpx:temperature` | Temperature measurement (°F, °C, K) |
| `urpx:voltage` | Voltage level measurement (V, kV, etc.) |
| `urpx:volume` | Volume measurement (gallons, cubic feet, liters, etc.) |
| `urpx:volumetricFlow` | Volumetric flow rate measurement (gallons/min, cubic feet/hour, etc.) |

### MediaTypeValue

| Value | Description |
|-------|-------------|
| `urpx:applicationJson` | application/json media type |
| `urpx:applicationPdf` | application/pdf media type |
| `urpx:applicationVndMsExcel` | application/vnd.ms-excel media type |
| `urpx:applicationVndOasisOpendocumentSpreadsheet` | application/vnd.oasis.opendocument.spreadsheet media type |
| `urpx:applicationVndOasisOpendocumentText` | application/vnd.oasis.opendocument.text media type |
| `urpx:applicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet` | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet media type |
| `urpx:imageGif` | image/gif media type |
| `urpx:imageJpeg` | image/jpeg media type |
| `urpx:imagePng` | image/png media type |
| `urpx:textCsv` | text/csv media type |
| `urpx:textHtml` | text/html media type |
| `urpx:textPlain` | text/plain media type |
| `urpx:textRtf` | text/rtf media type |
| `urpx:textXml` | text/xml media type |

### MeteringConfigurationValue

| Value | Description |
|-------|-------------|
| `urpx:ami` | Advanced Metering Infrastructure (AMI) configuration - smart meter with remote communication |
| `urpx:demandConfiguration` | Demand metering configuration - peak demand tracking |
| `urpx:interval` | Interval metering configuration - interval meter reading |
| `urpx:manual` | Manual metering configuration - manual meter reading |
| `urpx:netMetering` | Net metering configuration - bidirectional meter for DER net metering |
| `urpx:prepaid` | Prepaid metering configuration - prepayment billing system |

### MetricInputTypeValue

| Value | Description |
|-------|-------------|
| `urpx:aggregatedMetricInput` | Metric input with an aggregated metric |
| `urpx:calculatedMetricInput` | Metric input with a calculated metric |
| `urpx:measuredMetricInput` | Metric input with measured metrics |
| `urpx:profileMetricInput` | Metric input from customer/service point profile characteristics |
| `urpx:virtualMetricInput` | Metric input for virtual net metering |

### ModifierCategoryValue

| Value | Description |
|-------|-------------|
| `urpx:billingCategory` | Billing category modifier for payment and billing process changes |
| `urpx:customerServiceCategory` | Customer service category modifier for service enhancement programs |
| `urpx:demandManagementCategory` | Demand management category modifier for load control and peak shaving |
| `urpx:environmentalCategory` | Environmental category modifier for sustainability and green energy programs |
| `urpx:modifierCategoryOther` | Other modifier category not specifically categorized |
| `urpx:promotionalCategory` | Promotional category modifier for marketing and incentive programs |
| `urpx:regulatoryCategory` | Regulatory category modifier for compliance and mandate-driven changes |

### ModifierTypeValue

| Value | Description |
|-------|-------------|
| `urpx:addOn` | Add-on modifier that extends base rate plan with additional services |
| `urpx:adjustment` | Price adjustments, true-ups, and reconciliation charges |
| `urpx:credit` | Credit modifier providing bill reductions or rebates |
| `urpx:demandResponse` | Demand response modifier for load management programs |
| `urpx:evCharging` | Electric vehicle charging modifier for EV-specific rate plans |
| `urpx:greenEnergy` | Green energy modifier for renewable energy programs |
| `urpx:modifierTypeOther` | Other rate plan modifier type not specifically categorized |
| `urpx:optIn` | Opt-in modifier for voluntary customer-selected services |
| `urpx:optOut` | Opt-out modifier for services customers can decline |
| `urpx:rider` | Rider modifier for regulatory surcharges or adjustments |

### NameTypeValue

| Value | Description |
|-------|-------------|
| `urpx:abbreviationName` | Abbreviation name - shortened form of organization name |
| `urpx:acronymName` | Acronym name - initials forming pronounceable word from organization name |
| `urpx:brandName` | Brand name - marketing or customer-facing brand identity |
| `urpx:commonName` | Common name - widely recognized informal name used in practice |
| `urpx:dbaName` | DBA name - 'Doing Business As' name for business operations |
| `urpx:formerName` | Former name - previous legal or operational name before change |
| `urpx:legalName` | Official legal name of the organization |
| `urpx:tradeName` | Trade name - commercial trading name used in business transactions |

### ObservanceRuleValue

| Value | Description |
|-------|-------------|
| `urpx:actualDateObservance` | Holiday observed on the actual calendar date regardless of day of week |
| `urpx:fridayIfWeekendObservance` | Holiday observed on preceding Friday if it falls on weekend |
| `urpx:mondayIfWeekendObservance` | Holiday observed on following Monday if it falls on weekend |
| `urpx:nearestWeekdayObservance` | Holiday observed on nearest weekday (Friday if Saturday, Monday if Sunday) |

### OperatorValue

| Value | Description |
|-------|-------------|
| `urpx:addOperator` | Represents addition in condition expressions |
| `urpx:andOperator` | Represents logical conjunction in condition-expression boolean composition |
| `urpx:betweenOperator` | Range comparison operator (BETWEEN) |
| `urpx:containsOperator` | String contains comparison operator (LIKE, CONTAINS) |
| `urpx:divideOperator` | Represents division in condition expressions |
| `urpx:equalsOperator` | Equality comparison operator (==, =) |
| `urpx:greaterThanOperator` | Greater than comparison operator (>) |
| `urpx:greaterThanOrEqualOperator` | Greater than or equal comparison operator (>=) |
| `urpx:inOperator` | Set membership operator (IN) |
| `urpx:lessThanOperator` | Less than comparison operator (<) |
| `urpx:lessThanOrEqualOperator` | Less than or equal comparison operator (<=) |
| `urpx:multiplyOperator` | Represents multiplication in condition expressions |
| `urpx:notEqualsOperator` | Inequality comparison operator (!=, <>) |
| `urpx:notInOperator` | Set exclusion operator (NOT IN) |
| `urpx:notOperator` | Represents logical negation in condition-expression boolean composition |
| `urpx:orOperator` | Represents logical disjunction in condition-expression boolean composition |
| `urpx:subtractOperator` | Represents subtraction in condition expressions |

### OrganizationTypeValue

| Value | Description |
|-------|-------------|
| `urpx:aggregatorOrganization` | Energy aggregator organization - combines customer loads for wholesale market participation |
| `urpx:cooperativeOrganization` | Cooperative organization - member-owned utility or energy service entity |
| `urpx:espOrganization` | Energy Service Provider organization - competitive retail energy supplier |
| `urpx:ippOrganization` | Independent Power Producer organization - wholesale electricity generation entity |
| `urpx:isoRtoOrganization` | Independent System Operator or Regional Transmission Organization - grid management entity |
| `urpx:municipalOrganization` | Municipal organization - government-owned utility or energy entity |
| `urpx:parentOrganization` | Parent organization - holding company or corporate parent entity |
| `urpx:regulatorOrganization` | Regulatory organization - government entity with rate-setting or oversight authority |
| `urpx:utilityOrganization` | Utility organization - traditional regulated utility providing electric, gas, or water service |

### OwnershipTypeValue

| Value | Description |
|-------|-------------|
| `urpx:cooperativeOwnership` | Cooperative ownership - member-owned utility operated for members' benefit |
| `urpx:federalOwnership` | Federal government ownership - federally-owned utility or power authority |
| `urpx:investorOwned` | Investor-owned utility - private company owned by shareholders for profit |
| `urpx:municipalOwnership` | Municipal ownership - city or local government-owned utility |
| `urpx:privateOwnership` | Private ownership - privately-owned utility not publicly traded |
| `urpx:stateOwnership` | State government ownership - state-owned utility or power authority |
| `urpx:tribalOwnership` | Tribal ownership - Native American tribal nation-owned utility |

### PanelOrientationValue

| Value | Description |
|-------|-------------|
| `urpx:east` | East-facing panel orientation - morning generation peak |
| `urpx:multipleOrientations` | Solar installations with panels in multiple orientations |
| `urpx:north` | North-facing panel orientation - suboptimal for Northern Hemisphere |
| `urpx:northeast` | Northeast-facing panel orientation |
| `urpx:northwest` | Northwest-facing panel orientation |
| `urpx:south` | South-facing panel orientation - optimal for Northern Hemisphere |
| `urpx:southeast` | Southeast-facing panel orientation |
| `urpx:southwest` | Southwest-facing panel orientation |
| `urpx:tracking` | Solar tracking system - follows sun movement for optimal generation |
| `urpx:west` | West-facing panel orientation - afternoon generation peak |

### PhaseCategoryValue

| Value | Description |
|-------|-------------|
| `urpx:measurementCategory` | Phase codes identifying a measurement reference rather than a service configuration |
| `urpx:singlePhaseCategory` | Phase codes describing a single energized phase, alone or referenced to neutral |
| `urpx:splitPhaseCategory` | Phase codes describing a split secondary service, where two half-voltage legs share a neutral |
| `urpx:threePhaseCategory` | Phase codes describing two or three energized phases of a three-phase service, alone or referenced to neutral |

### PhaseCodeKindValue

| Value | Description |
|-------|-------------|
| `urpx:A` | Phase A |
| `urpx:AB` | Phases A to B |
| `urpx:ABC` | Involving All Phases |
| `urpx:ABCN` | Three-phase ABC to Neutral configuration |
| `urpx:ABN` | AB to Neutral |
| `urpx:AC` | Phases A to C |
| `urpx:ACN` | AC to Neutral |
| `urpx:AN` | Phase A to Neutral |
| `urpx:AtoAv` | Phase A Current Relative to Phase A Voltage |
| `urpx:B` | Phase B |
| `urpx:BAv` | Phase B Current or Voltage Relative to Phase A Voltage |
| `urpx:BC` | Phases B to C |
| `urpx:BCN` | BC to Neutral |
| `urpx:BN` | Phase B to Neutral |
| `urpx:C` | Phase C |
| `urpx:CAv` | Phase C Current or Voltage Relative to Phase A Voltage |
| `urpx:CN` | Phase C to Neutral |
| `urpx:N` | Neutral |
| `urpx:NG` | Neutral to Ground |
| `urpx:S1` | Phase S1 |
| `urpx:S12` | Phase S1 to S2 |
| `urpx:S12N` | Phase S1, S2 to Neutral |
| `urpx:S1N` | Phase S1 to Neutral |
| `urpx:S2` | Phase S2 |
| `urpx:S2N` | Phase S2 to Neutral |

<DiagramViewer src="../diagrams/dictionary/hierarchy-PhaseCodeKindValue.svg" alt="PhaseCodeKindValue hierarchy" />

### PremiseTypeValue

| Value | Description |
|-------|-------------|
| `urpx:hospital` | Hospital or medical facility |
| `urpx:manufacturing` | Manufacturing or industrial production facility |
| `urpx:multiFamily` | Multi-family residential building (apartments, condominiums) |
| `urpx:office` | Office or commercial business premises |
| `urpx:premiseTypeOther` | Other premise type not specifically categorized |
| `urpx:retailStore` | Retail store or commercial shopping premises |
| `urpx:school` | Educational facility or school |
| `urpx:singleFamily` | Single-family residential dwelling |
| `urpx:warehouse` | Warehouse or storage facility |

### PriceSourceValue

| Value | Description |
|-------|-------------|
| `urpx:algorithmicSource` | Pricing calculated by proprietary algorithms |
| `urpx:capacityAuctionSource` | Pricing from capacity auction markets |
| `urpx:demandForecastSource` | Pricing based on demand forecasting models |
| `urpx:gasIndexSource` | Pricing based on natural gas index prices |
| `urpx:manualOverrideSource` | Manually set pricing overriding automated sources |
| `urpx:renewableForecastSource` | Pricing based on renewable energy generation forecasts |
| `urpx:wholesaleMarketSource` | Pricing from wholesale electricity markets (ISO/RTO markets) |

### ProgramTypeValue

| Value | Description |
|-------|-------------|
| `urpx:communityChoiceAggregation` | Enrollment in a Community Choice Aggregation program |
| `urpx:communitySolar` | Participation in a community solar project or program |
| `urpx:demandResponseProgram` | Demand response program for load management and peak reduction |
| `urpx:energyEfficiencyProgram` | Energy efficiency program for conservation and efficiency improvement |
| `urpx:greenEnergyProgram` | Green energy program for renewable energy participation |
| `urpx:lowIncomeProgram` | Low income assistance program for customer financial support |
| `urpx:moderateIncomeProgram` | Moderate income assistance program for customer financial support |
| `urpx:timeOfUseProgram` | Time-of-use program for time-based pricing participation |

### ReferenceInclusionValue

| Value | Description |
|-------|-------------|
| `urpx:includedHere` | The referenced price definition is present inline within this plan or publication. |
| `urpx:retrievedElsewhere` | The referenced price definition is not included here and must be retrieved from an external source. |

### RegulatoryScopeValue

| Value | Description |
|-------|-------------|
| `urpx:distributionRegulation` | Distribution regulation - oversight of local power distribution systems and customer service |
| `urpx:environmentalRegulation` | Environmental regulation - oversight of environmental compliance and renewable energy standards |
| `urpx:marketRegulation` | Market regulation - oversight of wholesale and retail energy market competition and pricing |
| `urpx:ratesRegulation` | Rates regulation - oversight of utility rate setting and tariff approval processes |
| `urpx:safetyRegulation` | Safety regulation - oversight of utility safety standards and operational reliability |
| `urpx:transmissionRegulation` | Transmission regulation - oversight of high-voltage transmission systems and grid reliability |

### ScopeKindValue

| Value | Description |
|-------|-------------|
| `urpx:applicability` | Applicability time: when the scoped facts take effect and apply. |
| `urpx:coverage` | Coverage time: the span of time the scoped facts cover. |
| `urpx:observation` | Observation time: when the scoped facts were observed or measured. |
| `urpx:publication` | Publication time: when the scoped facts were published or issued. |
| `urpx:sourceLifecycle` | Source-lifecycle time: the validity span of the originating source publication. |

### SeasonalPatternValue

| Value | Description |
|-------|-------------|
| `urpx:flatPattern` | Flat seasonal usage pattern - consistent usage throughout the year |
| `urpx:summerPeakPattern` | Summer peak usage pattern - highest usage during summer months |
| `urpx:variablePattern` | Variable seasonal usage pattern - irregular usage variations throughout the year |
| `urpx:winterPeakPattern` | Winter peak usage pattern - highest usage during winter months |

### ServiceRoleValue

| Value | Description |
|-------|-------------|
| `urpx:aggregationRole` | Aggregation service role - combining customer loads for wholesale market participation and demand response |
| `urpx:bundledServiceRole` | Bundled service role - utility provides both delivery and supply services |
| `urpx:communitySolarServiceRole` | Community solar service role  |
| `urpx:demandResponseRole` | Demand response service role - managing customer load reduction programs and grid flexibility services |
| `urpx:distributionServiceRole` | Distribution service role - utility provides delivery infrastructure only |
| `urpx:energyEfficiencyRole` | Energy efficiency service role - providing energy conservation programs and efficiency solutions |
| `urpx:retailSupplyRole` | Retail supply service role - competitive retail energy supplier serving end-use customers |
| `urpx:solarInstallationRole` | Solar installation service role - distributed solar energy system installation and maintenance services |

### SourcePublicationTypeValue

| Value | Description |
|-------|-------------|
| `urpx:derExports` | Publication of compensation values for distributed energy resource exports |
| `urpx:highlyDynamicPrices` | Publication of prices that change at sub-daily granularity, such as hourly or real-time prices |
| `urpx:marketPriceFeed` | Machine-readable feed of market-determined prices published on a recurring schedule |
| `urpx:supplyCharges` | Publication of commodity supply charges, typically issued on a recurring schedule |
| `urpx:tariffAddendum` | Addendum attached to a tariff publication carrying additional terms or corrections |
| `urpx:tariffBook` | Complete tariff book document containing all rate schedules and terms |
| `urpx:tariffStatement` | PSC tariff statement filing containing price adjustments and prices |
| `urpx:tariffSupplement` | Supplement to a tariff book adding or revising content without republishing the full book |

### SpecialNeedsStatusValue

| Value | Description |
|-------|-------------|
| `urpx:disabilityAccommodation` | Customer requires disability accommodation - accessible services and communications |
| `urpx:lifeSupport` | Customer depends on life support equipment - critical uninterrupted power requirement |
| `urpx:medicalEquipment` | Customer requires medical equipment - special consideration for uninterrupted service |
| `urpx:noSpecialNeeds` | No special needs designation |
| `urpx:vulnerableCustomer` | Vulnerable customer status - elderly, health concerns, or other vulnerability factors |

### TOUTierStandardNameValue

| Value | Description |
|-------|-------------|
| `urpx:criticalPeakTier` | Critical peak pricing tier - emergency demand response period |
| `urpx:midPeakTier` | Mid peak pricing tier - moderate demand period |
| `urpx:offPeakTier` | Off peak pricing tier - low demand period |
| `urpx:peakTier` | Peak pricing tier - high demand period |
| `urpx:shoulderTier` | Shoulder pricing tier - transition period between peak and off-peak |
| `urpx:superOffPeakTier` | Super off peak pricing tier - lowest cost period |
| `urpx:superPeakTier` | Super peak pricing tier - highest cost period |

### TariffStatementTypeValue

| Value | Description |
|-------|-------------|
| `urpx:distributionStatement` | Distribution-related statement filing type for PSC tariff documentation |
| `urpx:fuelAdjustmentStatement` | Fuel adjustment-related statement filing type for PSC tariff documentation |
| `urpx:purchasedPowerStatement` | Purchased power-related statement filing type for PSC tariff documentation |
| `urpx:statementTypeOther` | Other or unclassified statement filing type for PSC tariff documentation |
| `urpx:transmissionStatement` | Transmission-related statement filing type for PSC tariff documentation |

### TaxExemptStatusValue

| Value | Description |
|-------|-------------|
| `urpx:exempt` | Fully tax-exempt status - qualified for full tax exemption |
| `urpx:nonExempt` | Non-exempt tax status - standard taxation applies |
| `urpx:partialExempt` | Partially tax-exempt status - qualified for partial tax exemption |
| `urpx:pendingVerification` | Tax exemption status pending verification - application under review |

### UnitOfMeasureValue

| Value | Description |
|-------|-------------|
| `urpx:GW` | Gigawatt - unit of power demand |
| `urpx:GWh` | Gigawatt hour - unit of energy |
| `urpx:Gbps` | Gigabits per second - unit of data transfer rate |
| `urpx:MVA` | Megavolt-ampere - unit of apparent power |
| `urpx:MVAh` | Megavolt-ampere hour - unit of reactive energy |
| `urpx:MW` | Megawatt - unit of power demand |
| `urpx:MWh` | Megawatt hour - unit of energy |
| `urpx:Mbps` | Megabits per second - unit of data transfer rate |
| `urpx:VA` | Volt-ampere - unit of apparent power |
| `urpx:VAh` | Volt-ampere hour - unit of reactive energy |
| `urpx:VAr` | Volt-ampere reactive - unit of reactive energy |
| `urpx:VArh` | Volt-ampere reactive hour - unit of reactive energy |
| `urpx:W` | Watt - unit of power demand |
| `urpx:Wh` | Watt hour - unit of energy |
| `urpx:acre` | Acre - unit of area |
| `urpx:barrel` | Barrel - unit of oil volume |
| `urpx:bcf` | Billion cubic feet - unit of gas volume |
| `urpx:bit` | Bit - unit of digital information |
| `urpx:btu` | British thermal unit - unit of energy |
| `urpx:byte` | Byte - unit of digital information (8 bits) |
| `urpx:ccf` | Hundred cubic feet - unit of gas volume |
| `urpx:cord` | Cord - unit of wood volume |
| `urpx:count` | Generic count unit (dimensionless) |
| `urpx:cubicFoot` | Cubic foot - unit of volume |
| `urpx:cubicMeter` | Cubic meter - unit of volume |
| `urpx:decatherm` | Decatherm - unit of heat energy (10 therms) |
| `urpx:gallon` | Gallon - unit of liquid volume |
| `urpx:hectare` | Hectare - unit of area |
| `urpx:hertz` | Hertz - unit of frequency |
| `urpx:item` | Discrete item count (e.g., trash bin, bag, device) |
| `urpx:kVA` | Kilovolt-ampere - unit of apparent power |
| `urpx:kVAh` | Kilovolt-ampere hour - unit of reactive energy |
| `urpx:kVAr` | Kilovolt-ampere reactive - unit of reactive energy |
| `urpx:kVArh` | Kilovolt-ampere reactive hour - unit of reactive energy |
| `urpx:kW` | Kilowatt - unit of power demand |
| `urpx:kWh` | Kilowatt hour - unit of energy |
| `urpx:kilogallon` | Kilogallon - unit of liquid volume |
| `urpx:kilogram` | Kilogram - unit of weight |
| `urpx:kilometer` | Kilometer - unit of distance |
| `urpx:liter` | Liter - unit of liquid volume |
| `urpx:mcf` | Thousand cubic feet - unit of gas volume |
| `urpx:metricTon` | Metric ton - unit of weight |
| `urpx:mile` | Mile - unit of distance |
| `urpx:mmbtu` | Million British thermal units - unit of energy |
| `urpx:mmcf` | Million cubic feet - unit of gas volume |
| `urpx:percent` | Percent - percentage unit |
| `urpx:pound` | Pound - unit of weight |
| `urpx:ratio` | Ratio - proportional unit |
| `urpx:squareFoot` | Square foot - unit of area |
| `urpx:squareMeter` | Square meter - unit of area |
| `urpx:tcf` | Trillion cubic feet - unit of gas volume |
| `urpx:therm` | Therm - unit of natural gas energy content |
| `urpx:ton` | Ton - unit of weight (US) |
| `urpx:unitOther` | Other unit of measure not specifically categorized |
| `urpx:year` | Year - unit of time |

### UpdateFrequencyValue

| Value | Description |
|-------|-------------|
| `urpx:continuousUpdates` | Continuous real-time price updates |
| `urpx:dailyUpdates` | Price updates daily (P1D) |
| `urpx:eventTriggeredUpdates` | Price updates triggered by specific market or grid events |
| `urpx:every15Minutes` | Price updates every 15 minutes (PT15M) |
| `urpx:every5Minutes` | Price updates every 5 minutes (PT5M) |
| `urpx:hourlyUpdates` | Price updates every hour (PT1H) |
| `urpx:monthlyUpdates` | Price updates monthly (P1M) |
| `urpx:onDemandUpdates` | Price updates triggered on demand by external events |
| `urpx:weeklyUpdates` | Price updates weekly (P1W) |

### VoltageLevelValue

| Value | Description |
|-------|-------------|
| `urpx:distributionVoltage` | Distribution voltage level - general distribution system voltage |
| `urpx:primaryVoltage` | Primary voltage level - typically 2.4kV-34.5kV distribution voltage |
| `urpx:secondaryVoltage` | Secondary voltage level - typically 120-600V residential and small commercial service |
| `urpx:subTransmissionVoltage` | Sub-transmission voltage level - typically 34.5kV-115kV for regional distribution |
| `urpx:transmissionVoltage` | Transmission voltage level - typically 115kV and above for bulk power transmission |

---

*Generated by `generate-data-dictionary.py` from URPX ontology v0.3.0 on 2026-05-13.*