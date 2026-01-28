# Modeling Complex Eligibility & Applicability Conditions in URPX

**Date:** 2026-01-25
**Status:** FINALIZING

## 1. Executive Summary

This document outlines the architectural patterns for modeling complex, structured eligibility and applicability conditions in the URPX ontology. It addresses how to combine "tag-based" categorical constraints (e.g., customer type) with numeric, time-based constraints (e.g., historical usage) using boolean logic.

This design clarifies the distinct roles of the `urpx:ApplicabilityConstraint` and `urpx:EligibilityRule` classes and leverages the power of the `urpx:MetricInput` and `urpx:MetricSpecification` architecture for all numeric and temporal evaluations.

## 2. Core Architectural Principles

1.  **Separation of Concerns:**
    *   **Eligibility (`urpx:EligibilityRule`):** Determines *who* can qualify for a `RatePlanVersion` or `RatePlanModifierVersion`. These are often complex, involving customer history, usage patterns, and profile data.
    *   **Applicability (`urpx:ApplicabilityConstraint` & `urpx:ApplicabilityRule`):** Determines *when* a specific `Price` or `PriceSet` applies during a billing calculation for a customer who is already on the plan. These are typically simpler "tag-based" filters.

2.  **Unified Metric Evaluation:** All numeric constraints, especially those involving time-windows (e.g., "peak demand over the last 12 months"), are modeled through `urpx:Condition` -> `urpx:hasMetricInput` -> `urpx:MetricSpecification`. This reuses the same powerful architecture for both pricing and rule evaluation, eliminating redundancy.

3.  **Structured Boolean Logic:** Complex boolean expressions (`AND`, `OR`, `NOT`) are handled within `urpx:EligibilityRule` using the `logicExpression` property, which references nested `urpx:Condition` instances.

## 3. The Roles of `ApplicabilityConstraint` vs. `EligibilityRule`

You asked how `constraintProperty` and `constraintValue` on `ApplicabilityConstraint` fit into the new design. They remain as-is, but their role is now clarified:

-   **`urpx:ApplicabilityConstraint`**: This is a lightweight pattern for simple, direct property matching. It is best used for filtering **prices** within an `ApplicabilityGroup`.
    -   **Use Case**: A `PriceSet` applies only to customers in `urpx-geo:Zone-J`.
    -   **How it Works**:
        -   `constraintProperty`: `urpx:appliesInZone`
        -   `constraintValue`: `urpx-geo:Zone-J` (as an IRI)
    -   **Limitation**: It is not designed for complex logic, numeric comparisons (`>`, `<`), or time-based analysis. It is a simple "tag-matching" mechanism.

-   **`urpx:EligibilityRule`**: This is the robust structure for defining the complex conditions required for a customer to **qualify for the entire rate plan**. 
## 4. Modeling Complex Structured Conditions

Let's break down your examples to demonstrate the pattern.

### Example 1: Residential High-Demand Customer

> "Residential customers with maximum 500 kW demand for at least 3 consecutive months within the most recent rolling 12 months"

This is a single `EligibilityRule` with two `Condition`s joined by an `AND`.

```turtle
# Defined within a RatePlanVersion
:myRatePlanVersion a urpx:RatePlanVersion;
    urpx:hasEligibilityRule :eligibilityRule1 .

# The main eligibility rule container
:eligibilityRule1 a urpx:EligibilityRule;
    rdfs:label "Residential High-Demand Eligibility";
    urpx:logicExpression "cond1 AND cond2"; # Boolean logic
    urpx:hasCondition :condition1_CustomerType, :condition2_PeakDemand .

# Condition 1: "Tag-based" constraint on Customer Profile
:condition1_CustomerType a urpx:Condition;
    rdfs:label "Customer is Residential";
    # The 'property' to check is implied by the domain of the value
    urpx:operator urpx:equalsOperator;
    # Points to an instance of CustomerProfile that has the desired characteristic
    urpx:hasCustomerProfile [ a urpx:CustomerProfile; urpx:hasCustomerKind urpx:residentialKind ] .

# Condition 2: Numeric, time-based constraint via MetricInput
:condition2_PeakDemand a urpx:Condition;
    rdfs:label "Max demand <= 500 kW for 3 consecutive months in last 12";
    urpx:operator urpx:lessThanOrEqualOperator;
    urpx:conditionValue "500"^^xsd:decimal;
    urpx:hasMetricInput :metricInput_PeakDemandHistory .

# The MetricInput defines WHAT is being measured
:metricInput_PeakDemandHistory a urpx:MetricInput;
    rdfs:label "Historical Peak Demand";
    urpx:metricInputType urpx:calculatedMetricInput;
    urpx:hasMetricSpecification :metricSpec_PeakDemandHistory .

# The MetricSpecification defines HOW it's measured
:metricSpec_PeakDemandHistory a urpx:MetricSpecification;
    rdfs:label "Max Peak Demand over 3 consecutive months in a rolling 12-month window";
    urpx:measurementKind urpx:demand;
    urpx:unitOfMeasure urpx:kW;
    urpx:aggregationMethod urpx:maximum; # We care about the max demand
    # Defines the outer rolling window
    urpx:intervalDuration "P12M"^^xsd:duration;
    urpx:intervalAlignment urpx:rollingAligned;
    # Defines the inner consecutive period requirement
    urpx:intervalSelection [
        a urpx:IntervalSelectionValue;
        rdfs:label "3 consecutive months";
        urpx:intervalDuration "P3M"^^xsd:duration;
        urpx:intervalSelection urpx:consecutivePeriodsSelection
    ] .
```

### Example 2: Complex Commercial Customer

> "Small commercial customers who are currently on a service class 2 rate plan AND who have had retail supply for at least one year WITH minimum 200 AND maximum 400 kW demand for at least 3 consecutive weeks within the most recent rolling 3 months"

This is a more complex `EligibilityRule` combining profile data, rate plan history, and a complex metric.

```turtle
# The main eligibility rule container
:eligibilityRule2 a urpx:EligibilityRule;
    rdfs:label "Complex Commercial Eligibility";
    urpx:logicExpression "condA AND condB AND condC";
    urpx:hasCondition :condA_CustomerType, :condB_RateHistory, :condC_DemandHistory .

# Condition A: Customer is Small Commercial
:condA_CustomerType a urpx:Condition;
    rdfs:label "Customer is Small Commercial";
    urpx:operator urpx:equalsOperator;
    urpx:hasCustomerProfile [ a urpx:CustomerProfile; urpx:hasCustomerSubKind urpx:commercialStandard ] . # Assuming 'commercialStandard' maps to 'Small Commercial'

# Condition B: Rate Plan & Supply History
:condB_RateHistory a urpx:Condition;
    rdfs:label "On SC2 plan and has 1yr+ retail supply";
    urpx:operator urpx:equalsOperator; # Operator is less relevant for this kind of structural check
    urpx:hasCustomerProfile [
        a urpx:CustomerProfile;
        # Check current rate plan's service class
        urpx:hasPriorRatePlan [
            a urpx:PriorRatePlan;
            urpx:referencesRatePlan [ urpx:hasServiceClass [ urpx:serviceClassCleaned "SC2" ] ];
            urpx:enrollmentStatus urpx:activeStatus
        ];
        # Check for at least one year of retail supply service
        urpx:hasProgramEnrollment [
            a urpx:ProgramEnrollment;
            urpx:programType urpx:retailSupplyRole; # Assuming retail supply is modeled as a program type
            urpx:enrollmentStartDate "..." ; # Logic would check if (now - startDate) >= 1 year
            urpx:minimumTenure "P1Y"^^xsd:duration
        ]
    ] .

# Condition C: Complex Demand History (two conditions in one)
:condC_DemandHistory a urpx:Condition;
    rdfs:label "Demand between 200-400kW for 3 consecutive weeks in last 3 months";
    urpx:operator urpx:betweenOperator;
    urpx:conditionValue "200"^^xsd:decimal, "400"^^xsd:decimal; # 'between' takes two values
    urpx:hasMetricInput :metricInput_ComplexDemand .

# The MetricInput and MetricSpecification
:metricInput_ComplexDemand a urpx:MetricInput;
    rdfs:label "Recent Historical Demand";
    urpx:metricInputType urpx:calculatedMetricInput;
    urpx:hasMetricSpecification :metricSpec_ComplexDemand .

:metricSpec_ComplexDemand a urpx:MetricSpecification;
    rdfs:label "Demand over 3 consecutive weeks in rolling 3-month window";
    urpx:measurementKind urpx:demand;
    urpx:unitOfMeasure urpx:kW;
    # Outer rolling window
    urpx:intervalDuration "P3M"^^xsd:duration;
    urpx:intervalAlignment urpx:rollingAligned;
    # Inner consecutive period
    urpx:intervalSelection [
        a urpx:IntervalSelectionValue;
        rdfs:label "3 consecutive weeks";
        urpx:intervalDuration "P3W"^^xsd:duration;
        urpx:intervalSelection urpx:consecutivePeriodsSelection
    ] .
```

## 5. Conclusion and Final Architecture

The constraint modeling architecture is now finalized under Decision #055, adopting a clear separation of concerns:

-   **Eligibility Rules ([`urpx:EligibilityRule`](../../ontology/urpx-ontology.ttl:118)):** Handles all complex, numerical, or temporal logic. This universally relies on the unified model: [`Condition`](../../ontology/urpx-ontology.ttl:81) -> [`MetricInput`](../../ontology/urpx-ontology.ttl:144) -> [`MetricSpecification`](../../ontology/urpx-ontology.ttl:154).
-   **Applicability Constraints ([`urpx:ApplicabilityConstraint`](../../ontology/urpx-ontology.ttl:51)):** Preserved exclusively for simple, direct property/tag-matching for fine-grained price filtering (e.g., [`urpx:appliesInZone`](../../ontology/urpx-ontology.ttl:914)).
-   **Profile Properties**: Direct profile attributes, including retained properties like [`urpx:usageVariability`](../../ontology/urpx-ontology.ttl:2705) and [`urpx:billedDemand`](../../ontology/urpx-ontology.ttl:1011), are accessed for rule evaluation using the [`urpx:profileMetricProperty`](../../ontology/urpx-ontology.ttl:2324) mechanism within a [`urpx:MetricInput`](../../ontology/urpx-ontology.ttl:144) instance. This ensures all eligibility checks operate consistently via the metric architecture.
