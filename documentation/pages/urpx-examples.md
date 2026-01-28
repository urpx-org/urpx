# URPX Examples

**Version:** 0.1.1  
**Last Updated:** 2025-11-23

[← Back to Index](../index.md) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md) | [Tutorial](urpx-tutorial.md)

---

## Introduction

This collection demonstrates real-world utility rate plan structures using URPX v0.1.1. Each example shows a common rate plan type with complete ontology-compliant implementations in Turtle/RDF format. 

**Note on Format**: While URPX documents are created and exchanged as JSON-LD, these examples use RDF/Turtle to clearly illustrate the semantic relationships and ontology structure. Turtle's compact syntax makes it easier to understand how rate plan components connect and how SHACL validation works. For implementation-ready JSON-LD examples, see [[urpx-tutorial.md]].

### Enhanced Test Cases

For production-ready implementations with comprehensive TOU schedules and structured tariff references:

- **Test Cases 0003-0007**: Complete ConEd SC-2 rate plans (`test-data/urpx-jsonld/rate-plans/`)
- **Property Optimization**: Example 0004 demonstrates efficient consolidation (797 prices)
- **Market Supply Integration**: Complete time series with billing cycle alternatives

---

## Table of Contents

1. [Basic Residential Flat Rate Plan](#basic-residential-flat-rate-plan)
2. [Residential Time-of-Use Rate Plan](#residential-time-of-use-rate-plan)
3. [Commercial Demand Rate Plan](#commercial-demand-rate-plan)
4. [Electric Vehicle Charging Rate Plan](#electric-vehicle-charging-rate-plan)
5. [Low-Income Assistance Rate Plan](#low-income-assistance-rate-plan)

---

## Basic Residential Flat Rate Plan

### Business Context
Simple residential rate plan structure with fixed monthly price plus tiered usage pricing. No time-of-use differentiation, suitable for customers without smart meters.

### Key Features
- Fixed monthly service price
- Two-tier usage pricing that increases with consumption
- Simple billing without complex schedules
- Standard tax application

### URPX Implementation

```turtle
@prefix urpx: <https://schema.urpx.org/> .
@prefix urpx-org: <https://schema.urpx.org/organization/> .
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <https://example.org/res-flat/> .

# Document Container
ex:doc-res-flat-2025 a urpx:TariffBookDocument ;
    urpx:identifier "DOC-RES-FLAT-2025" ;
    urpx:version "0.1.1" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
    urpx:name "Basic Residential Flat Rate Plan 2025" ;
    urpx:description "Standard residential rate plan with tiered usage pricing" ;
    urpx:timeZone "America/New_York" ;
    schema:priceCurrency "USD" ;
    urpx:hasRatePlan ex:rateplan-res-flat .

# Utility Organization
ex:utility-example a urpx-org:Organization ;
    urpx-org:organizationIdentifier "UTIL-EXAMPLE-001" ;
    urpx:name "Example Power Company" .

# Rate Plan
ex:rateplan-res-flat a urpx:RatePlan ;
    urpx:ratePlanIdentifier "RES-FLAT-001" ;
    urpx:name "Residential Service - Schedule R" ;
    urpx:description "Basic residential rate plan with tiered pricing" ;
    urpx:initialEffectiveDate "2025-01-01"^^xsd:date ;
    urpx:serviceRole urpx:bundled ;
    urpx:hasRatePlanVersion ex:version-res-flat-2025 .

# Rate Plan Version
ex:version-res-flat-2025 a urpx:RatePlanVersion ;
    urpx:versionNumber "1.0" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
    urpx:changeReason urpx:initial ;
    urpx:publishedBy ex:utility-example ;
    urpx:hasPlanElements ex:plan-elements-res-flat .
    
    # Plan Elements
    ex:plan-elements-res-flat a urpx:PlanElements ;
        urpx:hasMetricInput ex:metric-input-supply, ex:metric-input-delivery .
    
    ex:grid-kwh-import a urpx:MetricInput ;
        urpx:name "Energy Supply Measurement" ;
        urpx:metricInputType urpx:measuredMetricInput ;
        urpx:hasMetricSpecification [
            a urpx:MetricSpecification ;
            urpx:commodity urpx:electricity ;
            urpx:measurementKind urpx:energy ;
            urpx:unitOfMeasure urpx:kWh
        ] .

# Prices Container
 urpx:hasPrices ex:prices-res-flat ;
ex:prices-res-flat a urpx:Prices ;
    urpx:hasPriceSet ex:Priceset-res-flat .

# Price Set
ex:priceset-res-flat a urpx:PriceSet ;
    urpx:name "Residential Flat Rate Plan Prices" ;
    urpx:hasPrice ex:price-service ,
                   ex:price-tier1-supply ,
                   ex:price-tier2-supply ,
                   ex:price-tier1-delivery ,
                   ex:price-tier2-delivery ,
                   ex:price-tax .

# Fixed Service Price
ex:Price-service a urpx:Price ;
    urpx:name "Customer Service Price" ;
    urpx:description "Monthly service and meter Price" ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:amount 12.50 ;
    urpx:billPortion urpx:bundled;
    urpx:hasMetricSpecification [ a urpx:MetricSpecification ; urpx:intervalDuration "P1M" ] .

# Tier 1 Energy Supply Price (0-500 kWh)
ex:price-tier1 a urpx:Price ;
    urpx:name "Energy Price - Tier 1" ;
    urpx:description "First 500 kWh per month" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.095 ;
    urpx:serviceTierNumber 1 ;
    urpx:billPortion urpx:supply;
    urpx:referencesMetricInput ex:grid-kwh-import .

# Tier 2 Energy Supply Price (Over 500 kWh)
ex:price-tier2 a urpx:Price ;
    urpx:name "Energy Price - Tier 2" ;
    urpx:description "All usage over 500 kWh per month" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.135 ;
    urpx:serviceTierNumber 2 ;
    urpx:billPortion urpx:supply;
    urpx:referencesMetricInput ex:grid-kwh-import .

# Tier 1 Energy Delivery Price (0-500 kWh)
ex:price-tier1 a urpx:Price ;
    urpx:name "Energy Price - Tier 1" ;
    urpx:description "First 500 kWh per month" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.065 ;
    urpx:serviceTierNumber 1 ;
    urpx:referencesMetricInput ex:grid-kwh-import .

# Tier 2 Energy Delivery Price (Over 500 kWh)
ex:price-tier2 a urpx:Price ;
    urpx:name "Energy Price - Tier 2" ;
    urpx:description "All usage over 500 kWh per month" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.115 ;
    urpx:serviceTierNumber 2 ;
    urpx:referencesMetricInput ex:grid-kwh-import .


# State Sales Tax
ex:price-tax a urpx:Price ;
    urpx:name "State Sales Tax" ;
    urpx:description "8.25% state sales tax" ;
    urpx:chargeType urpx:taxState ;
    urpx:chargeCategory urpx:taxes ;
    urpx:multiplier 0.0825 ;
    urpx:basedOnPrice ex:price-tier1-supply, ex:price-tier2-supply, ex:price-tier1-delivery, ex:price-tier2-delivery .
```

---

## Residential Time-of-Use Rate Plan

### Business Context
Time-of-use rate plans encourage customers to shift usage to off-peak hours, reducing grid strain during high-demand periods. Includes seasonal variations and holiday considerations.

### Key Features
- Peak, mid-peak, and off-peak periods
- Summer seasonal rate plan structure
- Holiday calendar integration
- Weekday/weekend differentiation

### URPX Implementation

```turtle
@prefix urpx: <https://schema.urpx.org/> .
@prefix urpx-org: <https://schema.urpx.org/organization/> .
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <https://example.org/res-tou/> .

# Document
ex:doc-res-tou-2025 a urpx:TariffBookDocument ;
    urpx:identifier "DOC-RES-TOU-2025" ;
    urpx:version "0.1.1" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
    urpx:name "Residential Time-of-Use Rate Plan 2025" ;
    urpx:timeZone "America/New_York" ;
    schema:priceCurrency "USD" ;
    urpx:hasRatePlan ex:rateplan-res-tou .

# Rate Plan
ex:rateplan-res-tou a urpx:RatePlan ;
    urpx:ratePlanIdentifier "RES-TOU-001" ;
    urpx:name "Residential Time-of-Use - Schedule R-TOU" ;
    urpx:description "Time-varying residential rate plan with seasonal schedules" ;
    urpx:initialEffectiveDate "2025-01-01"^^xsd:date ;
    urpx:serviceRole urpx:bundled ;
    urpx:hasRatePlanVersion ex:version-res-tou-summer .

# Summer Version
ex:version-res-tou-summer a urpx:RatePlanVersion ;
    urpx:versionNumber "1.0" ;
    urpx:effectiveDateTime "2025-06-01T00:00:00-04:00"^^xsd:dateTime ;
    urpx:expirationDateTime "2025-09-30T23:59:59-04:00"^^xsd:dateTime ;
    urpx:changeReason urpx:seasonalChange ;
    urpx:publishedBy ex:utility-example ;
    urpx:hasPlanElements ex:plan-elements-summer ;
    urpx:hasPrices ex:prices-tou-summer .

# Plan Elements
ex:plan-elements-summer a urpx:PlanElements ;
    urpx:hasSeasons ex:season-summer ;
    urpx:hasHolidayCalendar ex:calendar-federal ;
    urpx:referencesMetricInput ex:metric-spec-energy .

ex:season-summer a urpx:Season ;
    urpx:seasonName "Summer" ;
    urpx:month "--06"^^xsd:gMonth ;
    urpx:month "--07"^^xsd:gMonth ;
    urpx:month "--08"^^xsd:gMonth ;
    urpx:month "--09"^^xsd:gMonth .

ex:calendar-federal a urpx:HolidayCalendar ;
    urpx:name "US Federal Holidays 2025" ;
    urpx:timeZone "America/New_York" ;
    urpx:hasHoliday ex:holiday-independence ,
                    ex:holiday-labor-day .

ex:holiday-independence a urpx:Holiday ;
    urpx:holidayName "Independence Day" ;
    urpx:holidayDate "2025-07-04"^^xsd:date ;
    urpx:observanceRule urpx:nearestWeekdayObservance .

ex:holiday-labor-day a urpx:Holiday ;
    urpx:holidayName "Labor Day" ;
    urpx:holidayDate "2025-09-01"^^xsd:date ;
    urpx:observanceRule urpx:actualDateObservance .

# Metric Rules
ex:metric-spec-energy a urpx:MetricInput ;
    urpx:name "TOU Energy Measurement" ;
    urpx:metricInputType urpx:measuredMetricInput ;
    urpx:hasMetricSpecification [
        a urpx:MetricSpecification ;
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:energy ;
        urpx:unitOfMeasure urpx:kWh ;
    ] ;
    urpx:hasTOUSchedule ex:tou-schedule-summer .


# TOU Schedule
ex:tou-schedule-summer a urpx:TOUSchedule ;
    urpx:name "Summer TOU Schedule" ;
    urpx:timeZone "America/New_York" ;
    urpx:hasTOUTier ex:tier-peak ,
                    ex:tier-midpeak ,
                    ex:tier-offpeak .

ex:tier-peak a urpx:TOUTier ;
    urpx:touTierNumber 1 ;
    urpx:touTierStandardName urpx:peakTier ;
    urpx:tierSourceName "Peak Period" ;
    urpx:hasTOUPeriod ex:period-peak .

ex:period-peak a urpx:TOUPeriod ;
    urpx:touPeriodNumber 1 ;
    urpx:periodName "Summer Peak" ;
    urpx:hasTimeBracket [
        a urpx:TimeBracket ;
        urpx:startTime "14:00:00"^^xsd:time ;
        urpx:endTime "19:00:00"^^xsd:time ;
        urpx:dayType urpx:weekdayDays ;
        urpx:includeHolidays false ;
        urpx:includeNonHolidays true
    ] .

ex:tier-midpeak a urpx:TOUTier ;
    urpx:touTierNumber 2 ;
    urpx:touTierStandardName urpx:midPeakTier ;
    urpx:tierSourceName "Mid-Peak Period" ;
    urpx:hasTOUPeriod ex:period-midpeak .

ex:period-midpeak a urpx:TOUPeriod ;
    urpx:touPeriodNumber 2 ;
    urpx:periodName "Mid-Peak" ;
    urpx:hasTimeBracket [
        a urpx:TimeBracket ;
        urpx:startTime "10:00:00"^^xsd:time ;
        urpx:endTime "14:00:00"^^xsd:time ;
        urpx:dayType urpx:weekdayDays ;
        urpx:includeHolidays false ;
        urpx:includeNonHolidays true
    ] .

ex:tier-offpeak a urpx:TOUTier ;
    urpx:touTierNumber 3 ;
    urpx:touTierStandardName urpx:offPeakTier ;
    urpx:tierSourceName "Off-Peak Period" ;
    urpx:hasTOUPeriod ex:period-offpeak .

ex:period-offpeak a urpx:TOUPeriod ;
    urpx:touPeriodNumber 3 ;
    urpx:periodName "Off-Peak" ;
    urpx:description "All other hours including weekends and holidays" ;
    urpx:hasTimeBracket [
        a urpx:TimeBracket ;
        urpx:startTime "00:00:00"^^xsd:time ;
        urpx:endTime "23:59:59"^^xsd:time ;
        urpx:dayType urpx:allDays ;
        urpx:includeHolidays true ;
        urpx:includeNonHolidays true
    ] .

# Prices
ex:prices-tou-summer a urpx:Prices ;
    urpx:hasPriceSet ex:priceset-tou-summer .

ex:priceset-tou-summer a urpx:PriceSet ;
    urpx:name "Summer TOU Rate Plan Prices" ;
    schema:priceCurrency "USD" ;
    urpx:hasPrice ex:price-tou-service ,
                   ex:price-peak ,
                   ex:price-midpeak ,
                   ex:price-offpeak .

ex:price-tou-service a urpx:Price ;
    urpx:name "TOU Service Price" ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:amount 15.00 ;
    urpx:hasMetricSpecification [ a urpx:MetricSpecification ; urpx:intervalDuration "P1M" ] .

ex:price-peak a urpx:Price ;
    urpx:name "Peak Energy" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:supply ;
    urpx:unitPrice 0.285 ;
    urpx:touPeriodNumber 1 ;
    urpx:referencesMetricInput ex:metric-spec-energy .

ex:price-midpeak a urpx:Price ;
    urpx:name "Mid-Peak Energy" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:supply ;
    urpx:unitPrice 0.165 ;
    urpx:touPeriodNumber 2 ;
    urpx:referencesMetricInput ex:metric-spec-energy .

ex:price-offpeak a urpx:Price ;
    urpx:name "Off-Peak Energy" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:supply ;
    urpx:unitPrice 0.075 ;
    urpx:touPeriodNumber 3 ;
    urpx:referencesMetricInput ex:metric-spec-energy .
```

---

## Commercial Demand Rate Plan

### Business Context
Commercial rate plans include both energy consumption and peak demand prices, incentivizing load management and efficient operations.

### Key Features
- Monthly demand prices based on peak usage
- Energy consumption prices
- Distribution and supply prices separated
- Advanced metering with 15-minute intervals

### URPX Implementation

```turtle
@prefix urpx: <https://schema.urpx.org/> .
@prefix urpx-org: <https://schema.urpx.org/organization/> .
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <https://example.org/comm-demand/> .

# Document
ex:doc-comm-demand-2025 a urpx:TariffBookDocument ;
    urpx:identifier "DOC-COMM-DEMAND-2025" ;
    urpx:version "0.1.1" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
    urpx:name "Commercial Demand Rate Plan 2025" ;
    urpx:timeZone "America/New_York" ;
    schema:priceCurrency "USD" ;
    urpx:hasRatePlan ex:rateplan-comm-demand .

# Rate Plan
ex:rateplan-comm-demand a urpx:RatePlan ;
    urpx:ratePlanIdentifier "COMM-DEMAND-001" ;
    urpx:name "General Service Demand - Schedule GS-2" ;
    urpx:description "Commercial rate plan with demand and energy prices" ;
    urpx:initialEffectiveDate "2025-01-01"^^xsd:date ;
    urpx:serviceRole urpx:bundled ;
    urpx:hasRatePlanVersion ex:version-comm-demand .

# Rate Plan Version
ex:version-comm-demand a urpx:RatePlanVersion ;
    urpx:versionNumber "1.0" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-05:00"^^xsd:dateTime ;
    urpx:changeReason urpx:initial ;
    urpx:publishedBy ex:utility-example ;
    urpx:hasPrices ex:prices-comm-demand ;
    urpx:hasPlanElements ex:plan-elements-comm-demand .

# Plan Elements
ex:plan-elements-comm-demand a urpx:PlanElements ;
    urpx:hasMetricInput ex:metric-input-comm-energy, ex:metric-input-comm-demand .

ex:metric-input-comm-energy a urpx:MetricInput ;
    urpx:name "Commercial Energy Measurement" ;
    urpx:metricInputType urpx:measuredMetricInput ;
    urpx:hasMetricSpecification [
        a urpx:MetricSpecification ;
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:energy ;
        urpx:unitOfMeasure urpx:kWh
    ] .

ex:metric-input-comm-demand a urpx:MetricInput ;
    urpx:name "Commercial Demand Measurement" ;
    urpx:metricInputType urpx:measuredMetricInput ;
    urpx:hasMetricSpecification [
        a urpx:MetricSpecification ;
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:demand ;
        urpx:unitOfMeasure urpx:kW
    ] .

# Prices
ex:prices-comm-demand a urpx:Prices ;
    urpx:hasPriceSet ex:priceset-comm-demand .

ex:priceset-comm-demand a urpx:PriceSet ;
    urpx:name "Commercial Demand Rate Plan Prices" ;
    urpx:hasPrice ex:price-comm-service ,
                   ex:price-comm-energy ,
                   ex:price-comm-demand ,
                   ex:price-comm-distribution .

# Service Price
ex:price-comm-service a urpx:Price ;
    urpx:name "Commercial Service Price" ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:amount 125.00 ;
    urpx:hasMetricSpecification [ a urpx:MetricSpecification ; urpx:intervalDuration "P1M" ] .

# Energy Price
ex:price-comm-energy a urpx:Price ;
    urpx:name "Commercial Energy Price" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:supply ;
    urpx:unitPrice 0.085 ;
    urpx:referencesMetricInput ex:metric-input-comm-energy .

# Demand Price
ex:price-comm-demand a urpx:Price ;
    urpx:name "Monthly Demand Price" ;
    urpx:description "Price per kW of monthly peak demand" ;
    urpx:chargeType urpx:demandDirect ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:delivery ;
    urpx:unitPrice 18.50 ;
    urpx:aggregationMethod urpx:maximum ;
    urpx:measurementIntervalDuration "PT15M" ;
    urpx:referencesMetricInput ex:metric-input-comm-demand .

# Distribution Price
ex:price-comm-distribution a urpx:Price ;
    urpx:name "Distribution Price" ;
    urpx:chargeType urpx:distribution ;
    urpx:chargeCategory urpx:infrastructure ;
    urpx:billPortion urpx:delivery ;
    urpx:unitPrice 0.042 ;
    urpx:referencesMetricInput ex:metric-input-comm-energy .
```

---

## Electric Vehicle Charging Rate Plan

### Business Context
Special rate plans designed to encourage EV adoption while managing grid impacts through super-off-peak charging incentives.

### Key Features
- Super-off-peak overnight charging rates
- Separate EV meter option
- Peak and super-off-peak differentiation
- Minimal service price for dedicated EV meters

### URPX Implementation

```turtle
@prefix urpx: <https://schema.urpx.org/> .
@prefix urpx-org: <https://schema.urpx.org/organization/> .
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <https://example.org/ev-rate/> .

# Document
ex:doc-ev-rate-2025 a urpx:TariffBookDocument ;
    urpx:identifier "DOC-EV-RATE-2025" ;
    urpx:version "0.1.1" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-08:00"^^xsd:dateTime ;
    urpx:name "Electric Vehicle Charging Rate Plan 2025" ;
    urpx:timeZone "America/Los_Angeles" ;
    schema:priceCurrency "USD" ;
    urpx:hasRatePlan ex:rateplan-ev .

# Rate Plan
ex:rateplan-ev a urpx:RatePlan ;
    urpx:ratePlanIdentifier "EV-TOU-001" ;
    urpx:name "Electric Vehicle Time-of-Use Rate Plan" ;
    urpx:description "Special TOU rate plan for EV charging" ;
    urpx:initialEffectiveDate "2025-01-01"^^xsd:date ;
    urpx:serviceRole urpx:bundled ;
    urpx:hasRatePlanVersion ex:version-ev .

# Rate Plan Version
ex:version-ev a urpx:RatePlanVersion ;
    urpx:versionNumber "1.0" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-08:00"^^xsd:dateTime ;
    urpx:changeReason urpx:initial ;
    urpx:publishedBy ex:utility-example ;
    urpx:hasPlanElements ex:plan-elements-ev ;
    urpx:hasPrices ex:prices-ev .

# Plan Elements
ex:plan-elements-ev a urpx:PlanElements ;
    urpx:referencesMetricInput ex:metric-spec-ev .

ex:metric-spec-ev a urpx:MetricInput ;
    urpx:name "EV Energy Measurement" ;
    urpx:metricInputType urpx:measuredMetricInput ;
    urpx:hasMetricSpecification [
        a urpx:MetricSpecification ;
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:energy ;
        urpx:unitOfMeasure urpx:kWh ;
    ] ;
    urpx:hasTOUSchedule ex:tou-schedule-ev .

# TOU Schedule
ex:tou-schedule-ev a urpx:TOUSchedule ;
    urpx:name "EV TOU Schedule" ;
    urpx:timeZone "America/Los_Angeles" ;
    urpx:hasTOUTier ex:tier-ev-peak ,
                    ex:tier-ev-superoffpeak .

ex:tier-ev-peak a urpx:TOUTier ;
    urpx:touTierNumber 1 ;
    urpx:touTierStandardName urpx:peakTier ;
    urpx:tierSourceName "Peak Hours" ;
    urpx:hasTOUPeriod ex:period-ev-peak .

ex:period-ev-peak a urpx:TOUPeriod ;
    urpx:touPeriodNumber 1 ;
    urpx:periodName "Peak Hours" ;
    urpx:hasTimeBracket [
        a urpx:TimeBracket ;
        urpx:startTime "16:00:00"^^xsd:time ;
        urpx:endTime "21:00:00"^^xsd:time ;
        urpx:dayType urpx:allDays ;
        urpx:includeHolidays true ;
        urpx:includeNonHolidays true
    ] .

ex:tier-ev-superoffpeak a urpx:TOUTier ;
    urpx:touTierNumber 2 ;
    urpx:touTierStandardName urpx:superOffPeakTier ;
    urpx:tierSourceName "EV Charging Window" ;
    urpx:hasTOUPeriod ex:period-ev-superoffpeak .

ex:period-ev-superoffpeak a urpx:TOUPeriod ;
    urpx:touPeriodNumber 2 ;
    urpx:periodName "Super Off-Peak EV Charging" ;
    urpx:description "Overnight EV charging window" ;
    urpx:hasTimeBracket [
        a urpx:TimeBracket ;
        urpx:startTime "23:00:00"^^xsd:time ;
        urpx:endTime "06:00:00"^^xsd:time ;
        urpx:dayType urpx:allDays ;
        urpx:includeHolidays true ;
        urpx:includeNonHolidays true
    ] .

# Prices
ex:prices-ev a urpx:Prices ;
    urpx:hasPriceSet ex:priceset-ev .

ex:priceset-ev a urpx:PriceSet ;
    urpx:name "EV TOU Rate Plan Prices" ;
    urpx:hasPrice ex:price-ev-service ,
                   ex:price-ev-peak ,
                   ex:price-ev-superoffpeak .

ex:price-ev-service a urpx:Price ;
    urpx:name "EV Meter Price" ;
    urpx:description "Separate EV meter monthly price" ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:amount 8.00 ;
    urpx:billPortion urpx:bundled
    urpx:hasMetricSpecification [ a urpx:MetricSpecification ; urpx:intervalDuration "P1M" ] .

ex:price-ev-peak a urpx:Price ;
    urpx:name "Peak Energy" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.45 ;
    urpx:touPeriodNumber 1 ;
    urpx:billPortion urpx:delivery
    urpx:referencesMetricInput ex:metric-spec-ev .

ex:price-ev-superoffpeak a urpx:Price ;
    urpx:name "Super Off-Peak EV Charging" ;
    urpx:description "Discounted overnight EV charging" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:unitPrice 0.05 ;
    urpx:touPeriodNumber 2 ;
    urpx:billPortion urpx:delivery
    urpx:referencesMetricInput ex:metric-spec-ev .
```

---

## Low-Income Assistance Rate Plan

### Business Context
Low-income assistance rate plans provide discounted rates for qualifying customers to ensure energy affordability.

### Key Features
- Income-based eligibility through CustomerProfile
- Percentage discount on standard prices
- HEAP assistance program integration
- Privacy-preserving income range classification

### URPX Implementation

```turtle
@prefix urpx: <https://schema.urpx.org/> .
@prefix urpx-org: <https://schema.urpx.org/organization/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <https://example.org/care/> .

# Document
ex:doc-care-2025 a urpx:TariffBookDocument ;
    urpx:identifier "DOC-CARE-2025" ;
    urpx:version "0.1.1" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-08:00"^^xsd:dateTime ;
    urpx:name "CARE Low-Income Discount Rate Plan 2025" ;
    urpx:timeZone "America/Los_Angeles" ;
    schema:priceCurrency "USD" ;
    urpx:hasRatePlan ex:rateplan-care .

# Rate Plan
ex:rateplan-care a urpx:RatePlan ;
    urpx:ratePlanIdentifier "CARE-001" ;
    urpx:name "California Alternate Rates for Energy" ;
    urpx:description "Low-income assistance rate plan with discounted prices" ;
    urpx:initialEffectiveDate "2025-01-01"^^xsd:date ;
    urpx:serviceRole urpx:bundled ;
    urpx:hasCustomerProfileSet ex:profile-set-care ;
    urpx:hasRatePlanVersion ex:version-care .

# Customer Profile Set with Eligibility
ex:profile-set-care a urpx:CustomerProfileSet ;
    urpx:customerProfileRuleExpression "care-low-income OR care-very-low-income" ;
    urpx:hasCustomerProfile ex:profile-care-low ,
                           ex:profile-care-verylow .

ex:profile-care-low a urpx:CustomerProfile ;
    urpx:profileId "care-low-income" ;
    urpx:name "CARE Low Income" ;
    urpx:hasCustomerKind urpx:residentialKind ;
    urpx:annualIncomeRange urpx:lowIncome ;
    urpx:householdSize 4 ;
    urpx:assistanceEligibilityLevel urpx:qualifiedAssistance .

ex:profile-care-verylow a urpx:CustomerProfile ;
    urpx:profileId "care-very-low-income" ;
    urpx:name "CARE Very Low Income" ;
    urpx:hasCustomerKind urpx:residentialKind ;
    urpx:annualIncomeRange urpx:veryLowIncome ;
    urpx:householdSize 4 ;
    urpx:assistanceEligibilityLevel urpx:qualifiedAssistance .

# Rate Plan Version
ex:version-care a urpx:RatePlanVersion ;
    urpx:versionNumber "1.0" ;
    urpx:effectiveDateTime "2025-01-01T00:00:00-08:00"^^xsd:dateTime ;
    urpx:changeReason urpx:initial ;
    urpx:publishedBy ex:utility-example ;
    urpx:hasPrices ex:prices-care ;
    urpx:hasPlanElements ex:plan-elements-care .

# Plan Elements
ex:plan-elements-care a urpx:PlanElements ;
    urpx:hasMetricInput ex:metric-input-care-energy .

ex:metric-input-care-energy a urpx:MetricInput ;
    urpx:name "CARE Energy Measurement" ;
    urpx:metricInputType urpx:measuredMetricInput ;
    urpx:hasMetricSpecification [
        a urpx:MetricSpecification ;
        urpx:commodity urpx:electricity ;
        urpx:measurementKind urpx:energy ;
        urpx:unitOfMeasure urpx:kWh
    ] .

# Prices
ex:prices-care a urpx:Prices ;
    urpx:hasPriceSet ex:priceset-care .

ex:priceset-care a urpx:PriceSet ;
    urpx:name "CARE Discounted Rate Plan Prices" ;
    urpx:hasPrice ex:price-care-service ,
                   ex:price-care-energy .

ex:price-care-service a urpx:Price ;
    urpx:name "CARE Service Price" ;
    urpx:description "Discounted monthly service price (50% discount)" ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:amount 6.25 ;
    urpx:hasMetricSpecification [ a urpx:MetricSpecification ; urpx:intervalDuration "P1M" ] .

ex:price-care-energy a urpx:Price ;
    urpx:name "CARE Energy Price" ;
    urpx:description "Discounted energy price (30% discount)" ;
    urpx:chargeType urpx:usageCharge ;
    urpx:chargeCategory urpx:auxiliaryCharge ;
    urpx:billPortion urpx:supply ;
    urpx:unitPrice 0.067 ;
    urpx:referencesMetricInput ex:metric-input-care-energy .
```

---

## Additional Resources

- [Tutorial](urpx-tutorial.md) - Step-by-step guide to creating URPX documents
- [Data Dictionary](urpx-data-dictionary.md) - Complete property reference
- [URPX Interoperability & Standards Integration](urpx-interoperability.md) - Comprehensive guide to URPX interoperability
- [Semantic Web Guide](urpx-semantic-web-guide.md) - RDF and semantic web concepts

---

*Examples based on URPX v0.1.1 ontology. For latest updates, visit the [URPX GitHub repository](https://github.com/urpx-org/urpx).*

[← Back to Index](../index.md) | [Overview](urpx-overview.md) | [Data Dictionary](urpx-data-dictionary.md) | [Tutorial](urpx-tutorial.md)
