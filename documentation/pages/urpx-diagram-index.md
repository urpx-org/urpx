# URPX Diagram Index

**Version:** 0.2.0 (Pre-draft)
**Last Updated:** January 26, 2026

[← Back to Index](../index.md)

---

## Overview

This index catalogs all diagrams used in URPX documentation pages. All diagrams use the Paul Tol 2.7 Light color scheme for consistency and accessibility.

---

## Core Architecture Diagrams

### URPX Core Schema Diagram

> **Status:** Work in Progress (Moved to Drafts)

**File:** `dev-documentation/documentation-drafts/diagrams-drafts/urpx-core-schema-diagram.mmd`  
**Used in:** [Overview](urpx-overview.md)  
**Shows:** Complete URPX architecture including document hierarchy, rate plan structure, charges container, plan elements, eligibility rules, and standards alignment

---

### Price Structure Diagram

```mermaid
%% URPX Price Structure Diagram
%% Shows: Prices → PriceSet → Price hierarchy
%% Created: January 26, 2026
%% Paul Tol 2.7 Light color scheme

%%{init: {'theme':'dark', 'themeVariables': { 'darkMode':'true', 'background':'#000000', 'primaryColor':'#77AADD', 'primaryTextColor':'#ffffff', 'primaryBorderColor':'#5588BB', 'lineColor':'#ffffff', 'secondaryColor':'#44BB99', 'tertiaryColor':'#EE8866', 'textColor':'#ffffff', 'nodeTextColor':'#ffffff'}}}%%

graph TB
    
    RPVersion[RatePlanVersion]
    
    %% Prices Container
    subgraph PricesContainer["Prices Container (1..1)"]
        direction TB
        Prices[Prices<br/>Centralized price storage]
        
        PriceSet1[PriceSet<br/>Logical grouping<br/>e.g., 'Summer Prices']
        PriceSet2[PriceSet<br/>e.g., 'Winter Prices']
        
        Prices -->|hasPriceSet<br/>1..*| PriceSet1
        Prices -->|hasPriceSet| PriceSet2
    end
    
    %% Price Components
    subgraph PriceComponents["Price Components"]
        direction TB
        
        Price1[Price<br/>Individual price component]
        Price2[Price<br/>Another price]
        Price3[Price<br/>Another price]
        
        PriceSet1 -->|hasPrice<br/>1..*| Price1
        PriceSet1 -->|hasPrice| Price2
        PriceSet1 -->|hasPrice| Price3
    end
    
    %% Price Properties
    subgraph PriceProps["Price Properties (Required)"]
        direction TB
        
        ChargeType[chargeType<br/>ObjectProperty<br/>minimumCharge, usageCharge,<br/>demandDirect, etc.]
        
        ChargeCategory[chargeCategory<br/>ObjectProperty<br/>serviceCharge, auxiliaryCharge,<br/>infrastructure, taxes, etc.]
        
        BillPortion[billPortion<br/>ObjectProperty<br/>delivery, supply, bundled]
        
        Amount[amount or unitPrice<br/>Numeric value<br/>Fixed or per-unit]
    end
    
    %% Price Types Examples
    subgraph PriceExamples["Common Price Types"]
        direction LR
        
        Ex1[Fixed Service Price<br/>chargeType: minimumCharge<br/>chargeCategory: serviceCharge<br/>amount: $18.75/month]
        
        Ex2[Energy Usage Price<br/>chargeType: usageCharge<br/>chargeCategory: auxiliaryCharge<br/>unitPrice: $0.12/kWh]
        
        Ex3[Demand Price<br/>chargeType: demandDirect<br/>chargeCategory: auxiliaryCharge<br/>unitPrice: $8.50/kW]
        
        Ex4[State Tax<br/>chargeType: taxState<br/>chargeCategory: taxes<br/>multiplier: 0.0825]
    end
    
    %% Connections
    RPVersion -->|hasPrices<br/>1..1| Prices
    
    Price1 -.->|has properties| ChargeType
    Price1 -.->|has properties| ChargeCategory
    Price1 -.->|has properties| BillPortion
    Price1 -.->|has properties| Amount
    
    PriceProps -.->|examples| PriceExamples
    
    %% Styling - Paul Tol 2.7 Light colors
    classDef versionClass fill:#77AADD,stroke:#5588BB,stroke-width:3px,color:#fff
    classDef containerClass fill:#44BB99,stroke:#228877,stroke-width:3px,color:#fff
    classDef priceSetClass fill:#99DDFF,stroke:#77BBDD,stroke-width:2px,color:#333
    classDef priceClass fill:#EEDD88,stroke:#CCBB66,stroke-width:2px,color:#333
    classDef propClass fill:#FFAABB,stroke:#DD8899,stroke-width:2px,color:#333
    classDef exampleClass fill:#EE8866,stroke:#CC6644,stroke-width:2px,color:#fff
    
    class RPVersion versionClass
    class Prices containerClass
    class PriceSet1,PriceSet2 priceSetClass
    class Price1,Price2,Price3 priceClass
    class ChargeType,ChargeCategory,BillPortion,Amount propClass
    class Ex1,Ex2,Ex3,Ex4 exampleClass
```

**File:** `documentation/diagrams/urpx-price-structure-diagram.mmd`  
**Used in:** Data Dictionary (planned)  
**Shows:** Prices → PriceSet → Price hierarchy with required properties and common examples

---

### TOU Structure Diagram

```mermaid
%% URPX TOU Structure Diagram
%% Shows: TOUSchedule → TOUTier → TOUPeriod → TimeBracket hierarchy
%% Created: January 26, 2026
%% Paul Tol 2.7 Light color scheme

%%{init: {'theme':'dark', 'themeVariables': { 'darkMode':'true', 'background':'#000000', 'primaryColor':'#77AADD', 'primaryTextColor':'#ffffff', 'primaryBorderColor':'#5588BB', 'lineColor':'#ffffff', 'secondaryColor':'#44BB99', 'tertiaryColor':'#EE8866', 'textColor':'#ffffff', 'nodeTextColor':'#ffffff'}}}%%

graph TB
    
    TOUSchedule[TOUSchedule]
    
    %% TOU Tiers
    Tier1[TOUTier<br/>touTierNumber: 1<br/>Peak Tier]
    Tier2[TOUTier<br/>touTierNumber: 2<br/>Off-Peak Tier]
    
    %% TOU Periods
    Period1[TOUPeriod<br/>touPeriodNumber: 1<br/>Peak Period]
    Period2[TOUPeriod<br/>touPeriodNumber: 2<br/>Off-Peak Period]
    
    %% Time Brackets
    TB1[TimeBracket<br/>14:00-19:00<br/>Weekdays only]
    TB2[TimeBracket<br/>All other hours]
    
    %% Price References
    Price1[Price<br/>Peak: $0.285/kWh<br/>touPeriodNumber: 1]
    Price2[Price<br/>Off-Peak: $0.075/kWh<br/>touPeriodNumber: 2]
    
    %% Connections
    TOUSchedule -->|hasTOUTier| Tier1
    TOUSchedule -->|hasTOUTier| Tier2
    
    Tier1 -->|hasTOUPeriod| Period1
    Tier2 -->|hasTOUPeriod| Period2
    
    Period1 -->|hasTimeBracket| TB1
    Period2 -->|hasTimeBracket| TB2
    
    Price1 -.->|references| Period1
    Price2 -.->|references| Period2
    
    %% Styling - Paul Tol 2.7 Light colors
    classDef scheduleClass fill:#77AADD,stroke:#5588BB,stroke-width:3px,color:#fff
    classDef tierClass fill:#44BB99,stroke:#228877,stroke-width:2px,color:#fff
    classDef periodClass fill:#EEDD88,stroke:#CCBB66,stroke-width:2px,color:#333
    classDef bracketClass fill:#99DDFF,stroke:#77BBDD,stroke-width:2px,color:#333
    classDef priceClass fill:#EE8866,stroke:#CC6644,stroke-width:2px,color:#fff
    
    class TOUSchedule scheduleClass
    class Tier1,Tier2 tierClass
    class Period1,Period2 periodClass
    class TB1,TB2 bracketClass
    class Price1,Price2 priceClass
```

**File:** `documentation/diagrams/urpx-tou-structure-diagram.mmd`  
**Used in:** Data Dictionary (planned)  
**Shows:** TOUSchedule → TOUTier → TOUPeriod → TimeBracket hierarchy with price references

---

## Temporal & Versioning

### Temporal Versioning Diagram

> **Status:** Work in Progress (Moved to Drafts)

**File:** `dev-documentation/documentation-drafts/diagrams-drafts/urpx-temporal-versioning-diagram.mmd`  
**Used in:** [Overview](urpx-overview.md)  
**Shows:** Rate plan version timeline, version properties, change events, and regulatory tracking

---

## Rules & Eligibility


### Charge Types Diagram

> **Status:** Work in Progress (Moved to Drafts)

**File:** `dev-documentation/documentation-drafts/diagrams-drafts/urpx-charge-types-diagram.mmd`  
**Used in:** [Overview](urpx-overview.md)  
**Shows:** Charge type taxonomy, commodities, units of measure, and standards compliance

---

## Educational Diagrams

### Rate Plan Knowledge Graph

> **Status:** Work in Progress (Moved to Drafts)

**File:** `dev-documentation/documentation-drafts/diagrams-drafts/urpx-rate-plan-graph.mmd`  
**Used in:** [Semantic Web Guide](urpx-semantic-web-guide.md)  
**Shows:** Knowledge graph representation of rate plan data

---

### RDF Triple Example

> **Status:** Work in Progress (Moved to Drafts)

**File:** `dev-documentation/documentation-drafts/diagrams-drafts/urpx-rdf-triple-example.mmd`  
**Used in:** [Semantic Web Guide](urpx-semantic-web-guide.md)  
**Shows:** RDF triple basics and structure

---

### SPARQL Query Visual

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#77AADD', 'primaryTextColor':'#000', 'primaryBorderColor':'#000', 'lineColor':'#000', 'secondaryColor':'#EEDD88', 'tertiaryColor':'#FFAABB', 'background':'transparent'}}}%%
graph LR
    subgraph "SPARQL Query"
        Q["SELECT ?price ?name ?price<br/>WHERE {<br/>  ?ratePlan urpx:identifier 'RES-TOU-2025' ;<br/>    hasRatePlanVersion/hasPrices/<br/>    hasPriceSet/hasPrice ?Price .<br/>  ?Price urpx:name ?name ;<br/>    urpx:unitPrice ?price .<br/>}"]
    end
    
    subgraph "Graph Traversal"
        RP[RatePlan<br/>RES-TOU-2025]
        RPV[RatePlanVersion]
        PRC[Prices]
        PS[PriceSet]
        P1[Price 1]
        P2[Price 2]
        P3[Price 3]
        
        RP -->|hasRatePlanVersion| RPV
        RPV -->|hasPrices| PRC
        PRC -->|hasPriceSet| PS
        PS -->|hasPrice| P1
        PS -->|hasPrice| P2
        PS -->|hasPrice| P3
    end
    
    subgraph "Results"
        R1["Peak Energy, $0.28/kWh"]
        R2["Off-Peak Energy, $0.09/kWh"]
        R3["Service Charge, $15.00/month"]
    end
    
    Q -.->|navigates| RP
    P1 -.->|binds| R1
    P2 -.->|binds| R2
    P3 -.->|binds| R3
    
    style Q fill:#EEDD88,stroke:#000,stroke-width:2px,color:#000
    style RP fill:#77AADD,stroke:#000,stroke-width:2px,color:#000
    style RPV fill:#99DDFF,stroke:#000,stroke-width:2px,color:#000
    style PRC fill:#BBCC33,stroke:#000,stroke-width:2px,color:#000
    style PS fill:#EEDD88,stroke:#000,stroke-width:2px,color:#000
    style P1 fill:#FFAABB,stroke:#000,stroke-width:2px,color:#000
    style P2 fill:#FFAABB,stroke:#000,stroke-width:2px,color:#000
    style P3 fill:#FFAABB,stroke:#000,stroke-width:2px,color:#000
    style R1 fill:#44BB99,stroke:#000,stroke-width:2px,color:#000
    style R2 fill:#44BB99,stroke:#000,stroke-width:2px,color:#000
    style R3 fill:#44BB99,stroke:#000,stroke-width:2px,color:#000
```

**File:** `documentation/diagrams/urpx-sparql-query-visual.mmd`  
**Used in:** [Semantic Web Guide](urpx-semantic-web-guide.md)  
**Shows:** SPARQL query patterns and examples

---

## Color Scheme

All diagrams use the **Paul Tol 2.7 Light** color palette:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Light Blue | `#77AADD` | Primary classes, documents |
| Cyan | `#99DDFF` | Secondary elements, components |
| Teal | `#44BB99` | Containers, active elements |
| Yellow | `#EEDD88` | Data, details |
| Peach | `#EE8866` | Specialized, standards |
| Pink | `#FFAABB` | Core content, profiles |

---

## Diagram Files

All diagram source files are located in `documentation/diagrams/`:

- **Mermaid files** (`.mmd`) - Source diagrams
- **SVG exports** (`.svg`) - Rendered diagrams for documentation

For the complete diagram catalog including development diagrams, see `dev-documentation/documentation-drafts/diagrams-drafts/`.

---

[← Back to Index](../index.md)
