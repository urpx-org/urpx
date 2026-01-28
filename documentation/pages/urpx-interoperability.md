# URPX Interoperability & Standards Integration

> **PRE-DRAFT DOCUMENT - WORKING GROUP REVIEW ONLY**
>
> **Status**: Draft in Progress
> **Audience**: URPX Working Group Members
> **Warning**: This document is under active development and subject to significant changes. Content may be incomplete, inaccurate, or outdated.
>
> **Purpose**: Internal working group review and discussion to establish standards integration and mapping methodology.

**Comprehensive guide to URPX interoperability, multi-standard integration, and semantic mapping.**

[← Back to Index](../index.md)

---

## Table of Contents

1. [Overview](#overview)
2. [Standards Ecosystem](#standards-ecosystem)
3. [Mapping Methodology](#mapping-methodology)
4. [SKOS Semantic Approach](#skos-semantic-approach)
5. [Supported Standards & Integrations](#supported-standards--integrations)
    - [Green Button Alliance](#green-button-alliance)
    - [LF Energy CDS](#lf-energy-cds)
    - [Common Information Model (CIM)](#common-information-model-cim)
    - [OpenADR](#openadr)
    - [Smart Home & IoT (Matter, Zigbee)](#smart-home--iot-matter-zigbee)
6. [Mapping Profile Publication](#mapping-profile-publication)
7. [Integration Patterns](#integration-patterns)

---

## Overview

URPX follows a **complementary architecture** approach, integrating with existing utility data standards to provide comprehensive rate plan information within the broader energy data ecosystem. Rather than creating isolated formats, URPX provides formal mappings that preserve semantics across system boundaries.

### Why Multi-Standard Integration Matters

Utility rate plan data does not exist in isolation. It must integrate with:
- **Customer data systems** (Green Button, LF Energy CDS)
- **Demand response** (OpenADR, IEEE 2030.5)
- **Smart home/IoT** (Zigbee, Matter, Thread)
- **Grid operations** (CIM, IEC standards)

URPX mappings enable bidirectional data exchange while preserving meaning and ensuring data quality across all these ecosystems.

---

## Standards Ecosystem

### URPX Standards Integration Architecture

```mermaid
graph TB
    %% Define styles with Paul Tol 2.7 Light colors
    classDef urpxClass fill:#EEDD88,stroke:#000,color:#000
    classDef gbClass fill:#77AADD,stroke:#000,color:#000
    classDef cdsClass fill:#99DDFF,stroke:#000,color:#000
    classDef cimClass fill:#44BB99,stroke:#000,color:#000
    classDef otherClass fill:#DDDDDD,stroke:#000,color:#000
    
    %% URPX Core
    URPX[URPX<br/>Rate Plan Standard]:::urpxClass
    
    %% Direct Integrations
    GB[Green Button<br/>Connect My Data]:::gbClass
    CDS[LF Energy<br/>Customer Data Spec]:::cdsClass
    CIM[CIM<br/>IEC 61968/61970]:::cimClass
    
    %% Related Standards
    OpenEI[OpenEI<br/>Rate Database]:::otherClass
    OpenADR[OpenADR 3.0<br/>Demand Response]:::otherClass
    IEEE[IEEE 2030.5<br/>Smart Energy Profile]:::otherClass
    
    %% Connections
    URPX <-->|Usage Data<br/>Integration| GB
    URPX <-->|Customer Account<br/>References| CDS
    URPX <-->|Property<br/>Alignment| CIM
    URPX -->|Rate Plan<br/>Enhancement| OpenEI
    URPX -->|Dynamic Pricing<br/>Events| OpenADR
    URPX -->|DER Rate<br/>Signaling| IEEE
    
    GB -->|Usage<br/>Measurements| CDS
    CIM -->|Model<br/>Foundation| CDS
    CIM -->|Measurement<br/>Definitions| GB
```

### Integration Principles

**Data Separation**
- URPX: Public rate plan structures, pricing, eligibility rules
- CDS: Customer accounts, service agreements, personal information
- Green Button: Interval usage data, consumption measurements

**Reference Architecture**
- URPX references CDS and Green Button entities via URIs
- No data duplication across standards
- Clear privacy boundaries maintained

---

## Mapping Methodology

URPX uses formal RDF mappings to connect with other standards. Each mapping profile includes:

**1. Vocabulary Alignment**
- Class mappings (URPX classes ↔ Standard classes)
- Property mappings (URPX properties ↔ Standard properties)
- Value set mappings (Enumerations and controlled vocabularies)

**2. Transformation Rules**
- Data type conversions
- Unit transformations
- Temporal format alignment
- Structural reorganization patterns

**3. Bidirectional Fidelity**
- Round-trip conversion verification
- Loss-less transformation where possible
- Extension fields for standard-specific data

---

## SKOS Semantic Approach

To map URPX to existing standards without creating hard technical dependencies or IP risks, we use **SKOS (Simple Knowledge Organization System)**. SKOS is a W3C standard designed for linking controlled vocabularies and taxonomies across different domains.

**Mapping Logic used in URPX:**

* **`skos:exactMatch`**: Used for concepts that are semantically identical (e.g., `urpx:unitPrice` to a specific API field).  
* **`skos:broadMatch`**: Used when URPX provides a more generalized concept (e.g., URPX supports Water/Gas while the target is Energy-only).  
* **`skos:relatedMatch`**: Used for functional links where structures differ but the purpose is shared (e.g., linking a Rate Plan to an IoT Pricing Signal).

---

## Supported Standards & Integrations

### Green Button Alliance

**Purpose**: Customer usage data exchange standard.

#### Integration Logic
Green Button provides interval usage measurements that align with URPX TOU periods for accurate cost calculation.

**Cost Calculation Flow**:
1. URPX provides TOU schedule and charge structure
2. Green Button provides interval usage data
3. System maps usage to applicable TOU periods
4. Charges applied based on matched periods
5. Total cost calculated

#### Mapping Example
```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix urpx: <https://schema.urpx.org/> .
@prefix gb: <http://naesb.org/espi#> .

# Core Structural Alignment
urpx:RatePlan skos:relatedMatch gb:PricingStructure ;
    skos:note "The RatePlan URL maps to the PricingStructure URI in ESPI UsagePoint." .

urpx:Price skos:broadMatch gb:LineItem ;
    skos:note "URPX procedural prices map to static ESPI bill line items." .

# Charge Category Mapping
gb:KindCategory_Access a skos:Concept ;
    skos:exactMatch urpx:minimumCharge ;
    skos:note "Green Button Access charge maps to URPX minimumCharge." .
```

### LF Energy CDS

**Purpose**: Customer Data Specification for accounts and billing.

#### Integration Logic
URPX maintains privacy boundaries through reference-only integration. URPX billing cycles align with CDS billing periods.

**URPX ServiceAccount**:
```json
{
  "@type": "ServiceAccount",
  "serviceAccountReference": "cds:customer:uuid-550e8400-e29b-41d4-a716-446655440000",
  "accountServiceType": {"@id": "urpx:electricService"}
}
```

#### Mapping Example
```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix urpx: <https://schema.urpx.org/> .
@prefix lfe: <https://lfenergy.org/cds/> .

# Charge Type Mapping
lfe:BaseCharge a skos:Concept ;
    skos:exactMatch urpx:minimumCharge ;
    skos:note "LF Energy BaseCharge maps to URPX minimumCharge." .

lfe:ConsumptionCharge a skos:Concept ;
    skos:exactMatch urpx:usageCharge ;
    skos:note "LF Energy ConsumptionCharge maps to URPX usageCharge." .
```

### Common Information Model (CIM)

**Purpose**: Enterprise utility system integration (IEC 61968/61970).

#### Integration Logic
URPX reuses CIM properties for industry alignment, particularly for measurement definitions.

- `measurementKind` ↔ CIM ReadingType
- `unitOfMeasure` ↔ CIM UnitSymbol
- `phaseCodeKind` ↔ CIM PhaseCode

#### Mapping Example
```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix urpx: <https://schema.urpx.org/> .
@prefix cim: <http://iec.ch/TC57/CIM-generic#> .

# Class Alignment
urpx:TOUPeriod skos:broadMatch cim:TimeTariffInterval ;
    skos:note "Generalized for multi-utility use; CIM equivalent is energy-specific." .

urpx:Price skos:exactMatch cim:Price .
```

### OpenADR

**Purpose**: Demand response and grid signal communication.

**Mapping Scope**:
- OpenADR event signals ↔ URPX dynamic pricing events
- OpenADR programs ↔ URPX rate plan modifiers

#### Mapping Example
```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix urpx: <https://schema.urpx.org/> .
@prefix oadr: <http://openadr.org/oadr#> .

# Event Mapping
urpx:DynamicPricing skos:relatedMatch oadr:EiEvent ;
    skos:note "URPX defines the rate boundaries; OpenADR signals real-time values." .

urpx:currentPrice skos:relatedMatch oadr:oadrPayload ;
    skos:note "Maps to the price signal value within an OpenADR message." .
```

### Smart Home & IoT (Matter, Zigbee)

**Purpose**: Device interoperability and home automation.

#### Matter Integration
Bridges utility rate structures to residential Energy Management Clusters in the Matter 1.4+ standard.

```turtle
@prefix matter: <http://csa-iot.org/matter#> .

urpx:TOUTierStandardNameValue skos:relatedMatch matter:EnergyManagementCluster ;
    skos:note "Maps Peak/Off-Peak tier names to Matter device power-shifting states." .
```

#### Zigbee Integration
Maps rate information to the legacy and modern HAN (Home Area Network) clusters.

```turtle
@prefix zigbee: <http://zigbee.org/sep#> .

urpx:Price skos:relatedMatch zigbee:PriceCluster ;
    skos:note "Maps URPX Price instances to Zigbee cost attributes." .
```

---

## Mapping Profile Publication

Each published mapping profile includes header metadata, vocabulary declarations, and bidirectional mapping rules.

**Directory**: `documentation/specifications/standards-integration/`

**Naming Convention**: `urpx-{standard-name}-mappings.ttl`

**Versioning**: Mapping files are versioned independently from URPX core (Major.Minor.Patch).

---

## Integration Patterns

### Pattern 1: Bill Calculation

**Use Case**: Calculate monthly bill using rate plan + usage data

```mermaid
sequenceDiagram
    participant System as Billing System
    participant URPX as URPX API
    participant GB as Green Button API
    participant CDS as CDS API
    
    System->>CDS: GET /customer/{id}/billing-period
    CDS->>System: Billing period details
    
    System->>URPX: GET /rate-plans/{id}/versions/current
    URPX->>System: Rate plan version with charges
    
    System->>GB: GET /customer/{id}/usage?period={month}
    GB->>System: Interval usage data
    
    System->>System: Map usage to TOU periods<br/>Apply charges<br/>Calculate total
    
    System->>CDS: POST /bills (bill record)
```

### Pattern 2: Conditional Mapping

**Use When**: Mapping depends on context or additional properties. In SKOS, this is handled via `skos:closeMatch` or `skos:broadMatch` with explanatory notes, as SKOS does not natively support computational conditions.

**Example**: Green Button KindCategory → URPX chargeCategory + chargeType
```turtle
gb:KindCategory_Energy a skos:Concept ;
    skos:exactMatch urpx:usageCharge ;
    skos:note "Maps to usageCharge when unit is energy (kWh). May map to generation credits if flow direction is reverse." .
```

---

[← Back to Index](../index.md) | [Semantic Web Guide](urpx-semantic-web-guide.md)
