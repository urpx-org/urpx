# 🔗 URPX Overview

## Understanding the Utility Rate Plan Exchange Standard

[← Back to Index](../index.md)

### Introduction

The Utility Rate Plan Exchange (URPX) standard addresses a fundamental challenge in the energy industry: the lack of a common structure and exchange method for sharing utility rate plan information. With thousands of utilities each publishing rates in their own formats, comparing prices, analyzing trends, and building energy applications has been unnecessarily complex.

URPX provides a solution through a comprehensive, standards-based approach to rate plan representation.

### The Challenge

Utility rate plans are surprisingly complex. A single rate plan might include:

- **Multiple charge types** - Energy charges, demand charges, customer charges, and various fees
- **Time-varying prices** - Different prices for peak vs. off-peak hours
- **Seasonal variations** - Summer and winter pricing schedules
- **Tiered structures** - Prices that change based on usage levels
- **Eligibility requirements** - Restrictions based on customer type, location, or usage patterns
- **Regulatory metadata** - Approval dates, filing references, and legal citations

Without a standard format, each system must custom-build parsers for every utility's rate plan structure - a massive duplication of effort that slows innovation and limits data accessibility.

### The URPX Solution

URPX provides a complete framework for rate plan representation using semantic web technologies:

#### 1. Ontology-Based Design
Built on RDF and OWL standards, URPX defines a rich vocabulary for describing every aspect of utility rates. This semantic approach ensures data is both machine-readable and human-understandable.

#### 2. Modular Architecture

![URPX Core Schema](../diagrams/urpx-core-schema-diagram.svg)

URPX is built on a core ontology ([`urpx-ontology.ttl`](../../ontology/urpx-ontology.ttl)) that includes:

**Core Rate Plan Structure:**
- Rate plans and versions
- Prices and price sets
- TOU schedules and pricing rules

**Charge Classification:**
- Charge types (minimumCharge, usageCharge, demandDirect, etc.)
- Charge categories (serviceCharge, auxiliaryCharge, infrastructure, taxes)
- Bill portions (delivery, supply, bundled)

**Geography:**
- Service territories
- States, counties, municipalities
- Geographic zones and boundaries

**Organization:**
- Utility operators
- Regulatory authorities
- Corporate structures

**Profiles:**
- Customer and service point profiles

#### 3. Core Features

**Comprehensive Rate Plan Modeling**
- Complete price structures (energy, demand, service, taxes)
- Time-of-use schedules with seasonal variations
- Customer eligibility and profile requirements
- Geographic applicability rules
- Temporal versioning with regulatory tracking

**Semantic Web Foundation**
- RDF/OWL ontology for formal semantics
- SHACL validation for data quality
- SPARQL queries for powerful analysis
- JSON-LD for developer-friendly format
- Standards-based interoperability

**Document Types**
- Rate Plan - Complete rate plan modeling including eligibility, prices, and calculation methodology
- Rate Plan Modifier - Rate plan modifier including eligibility, prices, and calculation methodology that can be added on to a rate plan
- Tariff Book Documents - Complete rate plan collections
- Tariff Statement Documents - PSC periodic filings
- Supply Prices Documents - Competitive market pricing
- Real-Time Prices Documents - Dynamic pricing structures
- DER Exports Document - Prices for DER Exports

#### 4. Validation Framework
SHACL (Shapes Constraint Language) rules ensure data quality and consistency:

```turtle
# Example: Every rate plan must have at least one version
urpx-shacl:RatePlanShape a sh:NodeShape ;
    sh:targetClass urpx:RatePlan ;
    sh:property [
        sh:path urpx:hasRatePlanVersion ;
        sh:minCount 1 ;
        sh:message "Rate plan must have at least one version"
    ] .
```

### Core Concepts

#### Rate Plans

A rate plan contains complete pricing information including prices, schedules, eligibility rules, and applicability conditions. Rate plans have temporal versions, each effective during specific time periods.

#### Rate Plan Modifiers

Rate plan modifiers also contain complete pricing information including prices, schedules, eligibility rules, and applicability conditions. Rate plan modifiers  have temporal versions, each effective during specific time periods. A rate plan modifier can be added on to an existing rate plan and a customer will not be billed on a rate plan modifier without an existing rate plan.

#### Prices

Individual pricing components with specific charge types, categories, and bill portions. Every price must have:
- chargeType (implementation: minimumCharge, usageCharge, etc.)
- chargeCategory (purpose: serviceCharge, auxiliaryCharge, etc.)
- hasMetricSpecification with billPortion (delivery, supply, bundled)

#### Time-of-Use

Rate plans can vary pricing by time of day, day of week, and season. TOU structures include:
- Seasons (Summer, Winter, or custom periods)
- TOUTiers (Peak, Mid-Peak, Off-Peak)
- TOUPeriods with specific time brackets
- Holiday calendar integration

#### Customer Profiles

Eligibility and applicability determined by:
- CustomerProfile (business and social characteristics)
- ServicePointProfile (physical service delivery characteristics)

#### Rate Plan Structure

A rate plan in URPX follows a hierarchical structure:

```
URPXDocument
  └── RatePlan (master template)
      └── RatePlanVersion (temporal instance)
        └── EligibilityRule (customer requirements)
        │   ├── CustomerProfile
        │   └── ServicePointProfile
        └── Plan Elements 
        │   └──Billing Model   
        │        ├── TOUSchedule (time-of-use rules)
        │           └── TOUTier (price level)
        │               └── TOUPeriod (time window)
        └── Prices (container for all prices)
            ├── PriceSet (logical grouping)
                └── Price (individual price component)
```

#### Temporal Versioning

Rate plans evolve over time. URPX captures this through versioning:

![Temporal Versioning](../diagrams/urpx-temporal-versioning-diagram.svg)

- **RatePlan** - The permanent identifier for a rate plan
- **RatePlanVersion** - A specific version effective during a time period
- **Version Transitions** - Tracked with reasons and regulatory approvals

#### Charge Types

URPX supports the full spectrum of utility charges:

![Charge Types](../diagrams/urpx-charge-types-diagram.svg)

**Energy Prices**
- Usage-based pricing ($/kWh)
- Tiered structures with thresholds
- Time-of-use differentiation

**Demand Prices**
- Peak demand pricing ($/kW)
- Ratchet provisions
- Coincident peak adjustments

**Fixed Prices**
- Customer charges
- Meter charges
- Service fees

**Credits & Adjustments**
- Renewable energy credits
- Low-income discounts
- Fuel cost adjustments

### Statement Prices Integration

A major enhancement in URPX is support for regulatory statement prices:

```turtle
# Statement document from PSC filing
ex:PSC-Filing-2025-001 a urpx:StatementDocument ;
    urpx:statementType "psc_filing" ;
    urpx:filingNumber "2025-EL-0123" ;
    urpx:filingDate "2025-01-15"^^xsd:date ;
    urpx:contains ex:TransmissionCharge-001 .

# Individual statement price with flexible pricing
ex:TransmissionCharge-001 a urpx:Price ;
    urpx:name "Transmission Service Price" ;
    urpx:chargeType "transmission" ;
    urpx:unitPrice 0.0234 ;  # $/kWh
    urpx:commodity "electricity" ;
    urpx:unit "kWh" ;
    urpx:hasApplicability ex:StateWideApplicability .
```

### Geographic Applicability

Prices apply within specific geographic boundaries. URPX provides hierarchical scoping:

```turtle
# Applicability group with geographic hierarchy
ex:NorthernRegionApplicability a urpx:ApplicabilityGroup ;
    urpx:applicabilityType "geographic" ;
    urpx:appliesInState ex:California ;
    urpx:appliesInCounty ex:AlamedaCounty, ex:ContraCostaCounty ;
    urpx:appliesInServiceTerritory ex:PGE-NorthernTerritory .
```

### Customer Eligibility

Complex eligibility rules determine who can enroll in specific rate plans:

![Eligibility Rules](../diagrams/urpx-rules-eligibility-diagram.svg)

**Prior Rate Plan Requirements**
```turtle
ex:EVRateEligibility a urpx:PriorRatePlan ;
    urpx:name "Standard Residential Rate Plan" ;
    urpx:minimumTenure "P12M"^^xsd:duration ;  # 12 months
    urpx:isActive true .
```

**Program Enrollment Requirements**
```turtle
ex:DemandResponseProgram a urpx:ProgramEnrollment ;
    urpx:programName "SmartAC Program" ;
    urpx:programType "demand_response" ;
    urpx:enrollmentStatus "required" ;
```

### Standards Alignment

URPX aligns with industry standards for maximum interoperability:

#### CIM (Common Information Model)
- Measurement kinds and units
- Reading types and qualities
- Geographic region concepts

#### Green Button
- Customer usage data formats
- Interval reading structures
- Authorization frameworks

#### OpenEI
- Utility identifiers
- Rate structure patterns
- Geographic coverage

#### Regulatory Standards
- EIA utility codes
- FERC account classifications
- State PSC filing formats

#### LF Energy Standards
- Customer Data Specification (CDS) Customer Data and Power Systems Data Specifications
- OpenADR 2.0b and OpenADR 3.0
- OpenSynth

### Data Quality & Validation

URPX includes comprehensive validation rules organized into modular SHACL files:

**Core Validation** (`urpx-shacl.ttl`)
- Rate plan structure integrity
- Price consistency rules
- Temporal constraint validation

**Organization Validation** (`urpx-organization-shacl.ttl`)
- Identity tracking consistency
- Corporate relationship rules
- Regulatory jurisdiction validation

**Geography Validation** (`urpx-geography-shacl.ttl`)
- Territory coverage rules
- Hierarchical boundary consistency
- Coordinate range validation

### Benefits of URPX

#### For Utilities
- **Standardized Publishing** - One format for all consumers
- **Regulatory Compliance** - Built-in support for filing requirements
- **Version Management** - Track price changes over time
- **Reduced Support** - Self-documenting data format

#### For Developers
- **Consistent API** - Same structure across all utilities
- **Rich Semantics** - Machine-understandable relationships
- **Validation Tools** - Ensure data quality
- **Query Capabilities** - SPARQL for complex analysis

#### For Customers
- **Rate Plan Comparison** - Apples-to-apples comparisons
- **Bill Transparency** - Understand price components
- **Optimization Tools** - Find best prices for usage patterns
- **Historical Analysis** - Track price changes over time

#### For Researchers
- **Comprehensive Data** - All rate plan components captured
- **Standards-Based** - Integration with other datasets
- **Temporal Analysis** - Study rate plan evolution
- **Geographic Analysis** - Regional pricing patterns

### Use Cases

**Utility Operations:**
- Publishing rate plans in standardized format
- Regulatory filing compliance
- Customer service support

**Software Development:**
- Rate plan comparison applications
- Bill calculation engines
- Energy management systems
- Customer portals

**Analysis & Research:**
- Rate plan structure analysis
- Regional pricing comparisons
- Policy impact studies
- Market trend analysis

### Next Steps

Ready to work with URPX data? Here are your next steps:

1. **[Read the Tutorial](urpx-tutorial.md)** - Learn by building a simple rate plan
2. **[Explore Examples](urpx-examples.md)** - See real-world implementations
3. **[Review the Data Dictionary](urpx-data-dictionary.md)** - Understand all classes and properties

### Summary

URPX transforms utility rate plan data from isolated silos into an interconnected, semantic web of pricing information. By providing a comprehensive standard for rate representation, URPX enables innovation in energy applications while ensuring data quality and regulatory compliance.

The modular design, industry alignment, and robust validation framework make URPX suitable for everything from simple residential rate plans to complex industrial rate plans with real-time pricing.

---

[← Back to Index](../index.md) | [Next: Tutorial →](urpx-tutorial.md)
