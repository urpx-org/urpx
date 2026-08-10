---
id: taskurpxontcontainernames
title: "Holiday calendar and location data set names"
desc: "Backlog: let a HolidayCalendar and a LocationDataSet carry a human-readable name by adding both to the urpx:name domain union and admitting the path on their closed shapes, with validated instances as evidence."
updated: 1785888000000
created: 1785888000000
---

# Holiday calendar and location data set names

| Field | Value |
|-------|-------|
| **Status** | Backlog — post-release; additive, no existing data becomes invalid |
| **Assignee** | Unassigned — open for any working group member to pick up |
| **Surface** | `ontology/urpx-ontology.ttl` (`urpx:name` domain), `shacl/urpx-shacl.ttl` (`HolidayCalendarShape`, `LocationDataSetShape`), validated instances, data dictionary regeneration, changelog entry |
| **Written against** | v0.3.0, commit `f3adf6aa` |

## Problem

Two container classes carry no human-readable name, and both are referenced by identifier alone.

**`urpx:HolidayCalendar`.** A calendar can be referenced independently by a rate plan or through a `LocationDataSet`, so a consumer that resolves the reference has nothing but the IRI to display in an interface, a log line, or a validation message. Its peer containers each name themselves: `TOUSchedule` uses the universal `urpx:name`, `Season` uses `urpx:seasonName`, and an individual `Holiday` uses `urpx:holidayName`. A set of holidays can therefore name every holiday it contains while the calendar collecting them stays anonymous.

**`urpx:LocationDataSet`.** `hasLocationDataSet` links one from an organization, a rate plan, a rate plan modifier, or either version snapshot, and nine shapes admit it. More than one can be held at a time, since versions accumulate as holiday dates and timezone rules change. Nothing on the class distinguishes one version from another to a reader: the timezone identifier and the DST rules describe what it contains rather than which one it is.

Both shapes are `sh:closed`. `HolidayCalendarShape` admits `hasHoliday` and the four lifecycle dates; `LocationDataSetShape` admits `daylightSavingRules`, `expectedEndDate`, `expectedEndDateTime`, `hasHolidayCalendar`, and `timezoneIdentifier`. A `urpx:name` on either therefore raises a `sh:ClosedConstraintComponent` violation, and neither class is in the `urpx:name` domain union.

## Approach

Widen the existing universal naming property rather than add class-specific ones. `urpx:name` already serves thirty classes, `TOUSchedule` among them — the peer container in the same `PlanElements` bundle. A `urpx:calendarName` would make a third naming convention across four sibling containers for no gain in expressiveness.

### 1. Ontology — admit both classes into the `urpx:name` domain

Before:

```turtle
urpx:name a owl:DatatypeProperty ;
    rdfs:label "Name"@en ;
    rdfs:comment "The name of the item" ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:GeneralRule urpx:RatePlan urpx:RatePlanVersion urpx:RatePlanModifier urpx:RatePlanModifierVersion urpx:Price urpx:PriceSet urpx:PriceSetAlternatives urpx:PriceDefinition urpx:PriceSummary urpx:SourcePublication urpx:TOUPeriod urpx:URPXPackage urpx:CalculationMethod urpx:MetricInput urpx:Ledger urpx:OrganizationName urpx:ProfileAlternatives urpx:ProfileAlternative urpx:DataSourceReference urpx:EligibilityRule urpx:TOUSchedule urpx:ServiceTier urpx:ServiceTiers urpx:ApplicabilityRule urpx:ApplicabilityGroup urpx:PriceUpdateRule urpx:ConditionExpression urpx:ComparisonNode urpx:RateCase ) ] ;
    rdfs:range xsd:string ;
    skos:note "Human-readable name for entities. Keep concise for display purposes (max 255 chars recommended). Universal naming property used across all entity types." .
```

After — both added directly after `urpx:TOUSchedule`, so the containers that share the `urpx:name` pattern sit together in the union:

```turtle
urpx:name a owl:DatatypeProperty ;
    rdfs:label "Name"@en ;
    rdfs:comment "The name of the item" ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:GeneralRule urpx:RatePlan urpx:RatePlanVersion urpx:RatePlanModifier urpx:RatePlanModifierVersion urpx:Price urpx:PriceSet urpx:PriceSetAlternatives urpx:PriceDefinition urpx:PriceSummary urpx:SourcePublication urpx:TOUPeriod urpx:URPXPackage urpx:CalculationMethod urpx:MetricInput urpx:Ledger urpx:OrganizationName urpx:ProfileAlternatives urpx:ProfileAlternative urpx:DataSourceReference urpx:EligibilityRule urpx:TOUSchedule urpx:HolidayCalendar urpx:LocationDataSet urpx:ServiceTier urpx:ServiceTiers urpx:ApplicabilityRule urpx:ApplicabilityGroup urpx:PriceUpdateRule urpx:ConditionExpression urpx:ComparisonNode urpx:RateCase ) ] ;
    rdfs:range xsd:string ;
    skos:note "Human-readable name for entities. Keep concise for display purposes (max 255 chars recommended). Universal naming property used across all entity types." .
```

The `skos:note` needs no change; it already states the property is the universal naming property used across entity types.

### 2. SHACL — admit `urpx:name` on `HolidayCalendarShape`

Before:

```turtle
urpx-shacl:HolidayCalendarShape
    a sh:NodeShape ;
    rdfs:label "HolidayCalendar Shape"@en ;
    sh:targetClass urpx:HolidayCalendar ;
    sh:closed true ;
    sh:ignoredProperties ( rdf:type urpx:hasTemporalScope ) ;
    sh:property [
        sh:path urpx:hasHoliday ;
        sh:class urpx:Holiday ;
        sh:minCount 1 ;
    ] ;
```

After — the name is optional and at most one, matching how `TOUScheduleShape` and `SeasonShape` admit their naming property:

```turtle
urpx-shacl:HolidayCalendarShape
    a sh:NodeShape ;
    rdfs:label "HolidayCalendar Shape"@en ;
    sh:targetClass urpx:HolidayCalendar ;
    sh:closed true ;
    sh:ignoredProperties ( rdf:type urpx:hasTemporalScope ) ;
    sh:property [
        sh:path urpx:name ;
        sh:datatype xsd:string ;
        sh:minCount 0 ;
        sh:maxCount 1 ;
    ] ;
    sh:property [
        sh:path urpx:hasHoliday ;
        sh:class urpx:Holiday ;
        sh:minCount 1 ;
    ] ;
```

The four lifecycle date constraints that follow are unchanged.

### 3. SHACL — admit `urpx:name` on `LocationDataSetShape`

Before:

```turtle
urpx-shacl:LocationDataSetShape
    a sh:NodeShape ;
    rdfs:label "LocationDataSet Shape"@en ;
    sh:targetClass urpx:LocationDataSet ;
    sh:closed true ;
    sh:ignoredProperties ( rdf:type urpx:hasTemporalScope ) ;
    sh:property [
        sh:path urpx:daylightSavingRules ;
        sh:datatype xsd:string ;
        sh:minCount 0 ;
        sh:maxCount 1 ;
    ] ;
```

After:

```turtle
urpx-shacl:LocationDataSetShape
    a sh:NodeShape ;
    rdfs:label "LocationDataSet Shape"@en ;
    sh:targetClass urpx:LocationDataSet ;
    sh:closed true ;
    sh:ignoredProperties ( rdf:type urpx:hasTemporalScope ) ;
    sh:property [
        sh:path urpx:name ;
        sh:datatype xsd:string ;
        sh:minCount 0 ;
        sh:maxCount 1 ;
    ] ;
    sh:property [
        sh:path urpx:daylightSavingRules ;
        sh:datatype xsd:string ;
        sh:minCount 0 ;
        sh:maxCount 1 ;
    ] ;
```

The remaining four constraints are unchanged.

### 4. Validation evidence

Neither class has an instance in `test-cases/` today, so this edit carries its own. **Write a fresh worked sample under `dev-docs/samples/`** as part of executing this task, sized to verify the acceptance criteria below and nothing more: a named `LocationDataSet` holding a named `HolidayCalendar`, the calendar holding at least one `Holiday`.

A development sample is the right home rather than an addition to `test-cases/`. Test cases carry per-price citations to their source documents, so attaching holidays to a published rate plan's schedule would mean sourcing real holiday observances for that utility — work this vocabulary change does not need and should not be gated on.

The sample must exercise every acceptance criterion, including the negative ones: an instance of each class with a name, an instance of each without, and an instance of each carrying two names to prove the cardinality bound fires.

### 5. Data dictionary

Regenerate so the `HolidayCalendar` and `LocationDataSet` sections each list the `urpx:name` row. No class is added, so the dictionary section configuration needs no new entry.

### 6. Changelog

An `Added` entry recording that a holiday calendar and a location data set may each carry `urpx:name`, optional and at most one, and that both shapes admit it.

## Acceptance

1. A `HolidayCalendar` carrying `urpx:name` validates against the shapes, and one carrying two names fails on cardinality.
2. A `LocationDataSet` carrying `urpx:name` validates, and one carrying two names fails on cardinality.
3. An instance of either class carrying no name still validates.
4. Every existing test case still passes.
5. The regenerated data dictionary shows `urpx:name` on both sections.
6. The changelog carries the entry.
