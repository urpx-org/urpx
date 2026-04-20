<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX Quality Assurance Guidelines

**Version**: 0.2.0 (Pre-draft)
**Last Updated**: 2026-04-13 
**Status**: Active

**Validation and quality standards for URPX v0.1.1 rate plan data**

[← Back to Index](../index.md)

---

## Table of Contents

1. [Overview](#overview)
2. [Ontology Validation](#ontology-validation)
3. [SHACL Constraint Validation](#shacl-constraint-validation)
4. [Rate Plan Data Quality](#rate-plan-data-quality)
5. [Documentation Quality](#documentation-quality)
6. [Terminology Standards](#terminology-standards)

---

## Overview

URPX v0.1.1 maintains rigorous quality standards to ensure rate plan data accuracy, semantic consistency, and standards compliance. This guide covers validation requirements and quality assurance processes.

### Quality Principles

1. **Ontology Compliance** - All data must validate against v0.1.1 ontology
2. **SHACL Validation** - Business rules enforced through SHACL constraints
3. **Semantic Consistency** - Proper use of properties, classes, and enumerations
4. **Data Completeness** - Required fields populated with valid values

---

## Ontology Validation

### Required Ontology Files

URPX v0.1.1 uses a core ontology file:

- `../../ontology/urpx-ontology.ttl` - Complete URPX ontology with all classes and properties

### Common Validation Errors

| Error | Cause | Solution |
|-------|-------|----------|
| Undefined property | Using property not in ontology | Check ontology definition |
| Wrong enum value | Incorrect enumeration instance | Use exact ontology enum values |
| Missing required property | Omitted mandatory field | Add required property |
| Type mismatch | Wrong datatype or object reference | Correct to ontology range |

---

## SHACL Constraint Validation

### SHACL Validation Files

- [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl) - Unified SHACL validation shapes (~3,500 lines, draft). Contains comprehensive shapes for all major URPX classes.

### Critical SHACL Constraints

**RatePlan Requirements:**
- Must have at least one RatePlanVersion
- Must have ratePlanIdentifier
- Must specify serviceRole (from ServiceRoleValue enumeration)

**Price Requirements:**
- chargeCategory is optional (0..1)
- chargeType is optional (0..*)
- Must have one pricing field (amount, unitPrice, basedOnPrice, currentPrice, or basePrice)
- Must have start and end dates when available (startDate, startDateTime, endDate, endDateTime)

**Condition Rule Requirements:**
- If an `EligibilityRule` or `ApplicabilityRule` uses `hasCondition`, it MUST also provide `hasConditionLogic`
- `ConditionLogic` and `BooleanOperationNode` MUST use `conditionOperands`
- `ConditionLogic` and `BooleanOperationNode` MUST NOT use `leftOperand` or `rightOperand`
- `OperationNode` is used only for ordered arithmetic or comparison subexpressions inside `Condition`
- `DatatypeTerminalNode` and `CustomTerminalNode` MUST include `literalType`
- Datatype-bearing terminal nodes MUST carry exactly one matching datatype-specific value property
- `conditionValue`, `conditionType`, and `logicExpression` are deprecated and MUST NOT appear in new examples or test data

**PriceDefinition Requirements:**
- `BillingModel` owns `hasPriceDefinition`
- `Ledger` MUST NOT carry `hasPriceDefinition`
- Every `PriceDefinition` MUST include exactly one `referencesLedger`
- Either `Price` and `PriceSet` MUST use `referencesPriceDefinition` to link to structural price definitions so that each `Price` references a price definition either through direct use of `referencesPriceDefinition` or through inheritance of `referencesPriceDefinition` from a parent `PriceSet`

**RateCase Requirements:**
- Every `RateCase` MUST include `caseNumber`
- Every `RateCase` MUST include `url`
- `priority`, if present, MUST be an integer greater than or equal to 1
- `hasRateCase` MAY appear on `RatePlanVersion`, `RatePlanModifierVersion`, `PriceDefinition`, `Price`, `PriceSet`, and `PriceSetAlternative`
- `changeReason` classifies the change category; `hasRateCase` identifies the actual proceeding

**Temporal Requirements:**
- Time zone must be specified with `timeZoneIdentifier` on LocationDataSet, URPXDocument, RatePlan, or RatePlanModifier
- Versions must not overlap temporally
- expirationDate or expirationDateTime must be after effectiveDate or effectiveDateTime

---

## Rate Plan Data Quality

### Required Properties

**Every RatePlan must have:**
- ratePlanIdentifier (alphanumeric + hyphen only)
- name (human-readable)
- serviceRole (from ServiceRoleValue enumeration)
- hasRatePlanVersion (at least one)

**Every RatePlanVersion must have:**
- version (semantic versioning)
- effectiveDateTime or effectiveDate
- changeReason (from ChangeReasonValue enumeration)
- publishedBy (Organization reference)
- hasPrices (Prices container)

**Every Price must have:**
- One pricing field (amount, unitPrice, basedOnPrice, currentPrice, or basePrice)
- startDate or startDateTime and endDate or endDateTime when available

**Every Price may have:**
- chargeType (from ChargeTypeValue) — optional, recommended
- chargeCategory (from ChargeCategoryValue) — optional, recommended
- billPortion (from BillPortionValue) — optional
- referencesPriceDefinition (link to PriceDefinition) — optional, recommended

**Every rule using structured conditions must have:**
- `hasCondition` for the condition resources used by the rule
- `hasConditionLogic` for the authoritative boolean structure

**Every datatype-bearing terminal node must have:**
- `literalType`
- exactly one matching value property such as `booleanValue`, `dateValue`, `dateTimeValue`, `decimalValue`, `durationValue`, `gMonthValue`, `integerValue`, `stringValue`, or `timeValue`

**Every PriceDefinition must have:**
- `referencesLedger` (exactly one)

**Every RateCase must have:**
- `caseNumber` (exactly one)
- `url` (exactly one)

### Enumeration Value Validation

**ChargeTypeValue** - Must use exact instance names:
- `urpx:minimumCharge` (not "MinimumCharge" or "minimum")
- `urpx:usageCharge` (not "UsageCharge" or "usage")
- `urpx:demandDirect` (not "DemandCharge" or "demand")
- `urpx:taxState` (not "TaxState" or "state_tax")

**BillPortionValue** - Must use exact values:
- `urpx:bundledPortion` (not "bundled" or "Bundled")
- `urpx:deliveryPortion` (not "delivery" or "Delivery")
- `urpx:supplyPortion` (not "supply" or "Supply")

**ChargeCategoryValue** - Must use exact instances:
- `urpx:adjustment`
- `urpx:auxiliaryCharge`
- `urpx:discount`
- `urpx:environmental`
- `urpx:infrastructure`
- `urpx:regulatory`
- `urpx:serviceCharge`
- `urpx:taxes`

### JSON-LD Pattern Requirements

**Correct enum reference:**
```json
{
  "urpx:chargeType": {"@id": "urpx:minimumCharge"},
  "urpx:chargeCategory": {"@id": "urpx:serviceCharge"},
  "urpx:billPortion": {"@id": "urpx:bundledPortion"}
}
```

**Incorrect (will fail validation):**
```json
{
  "urpx:chargeType": "minimumCharge",
  "urpx:chargeCategory": "serviceCharge",
  "urpx:billPortion": "bundledPortion"
}
```

**Invalid condition pattern (deprecated):**
```json
{
  "@type": "urpx:Condition",
  "urpx:conditionValue": 500
}
```

**Valid condition pattern:**
```json
{
  "@type": "Condition",
  "urpx:operator": { "@id": "urpx:greaterThanOperator" },
  "urpx:leftOperand": {
    "@type": "urpx:DatatypeTerminalNode",
    "urpx:conditionProperty": { "@id": "urpx:averageMonthlyUsage" },
    "urpx:literalType": { "@id": "urpx:integerDatatype" }
  },
  "urpx:rightOperand": {
    "@type": "urpx:DatatypeTerminalNode",
    "urpx:literalType": { "@id": "urpx:integerDatatype" },
    "urpx:integerValue": 500
  }
}
```

**Valid rate case traceability pattern:**
```json
{
  "@type": "urpx:RatePlanVersion",
  "urpx:changeReason": { "@id": "urpx:rateCase" },
  "urpx:hasRateCase": [
    {
      "@type": "urpx:RateCase",
      "urpx:caseNumber": "2026-001-E",
      "urpx:url": "https://example.org/regulator/dockets/2026-001-e"
    }
  ]
}
```

### Turtle Pattern Requirements

**Correct:**
```turtle
ex:price1 a urpx:Price ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge .
```

**Incorrect:**
```turtle
ex:price1 a urpx:Price ;
    urpx:chargeType "minimumCharge" ;
    urpx:chargeCategory "serviceCharge" .
```

---

## Documentation Quality

### Code Example Requirements

**All examples must:**
- Use correct v0.1.1 property names
- Reference actual ontology enum values
- Include proper @context in JSON-LD
- Validate against SHACL constraints
- Use timezone-aware dateTime values

---

## Terminology Standards

### Rate Plan Terminology

**CRITICAL REQUIREMENT**: Always use "rate plan" - never "rate" alone.

**Rationale**: A "rate plan" is a complete package (prices + schedules + rules + eligibility) while a "rate" is just a single price value. Using "rate plan" consistently distinguishes the complete semantic structure from incomplete price references.

**Correct Usage:**
- "rate plan data"
- "rate plan structure"
- "residential rate plan"
- "rate plan examples"
- "rate plan information"

**Incorrect Usage:**
- "rate data" ❌
- "rate structure" ❌
- "residential rate" ❌
- "rate examples" ❌
- "rate information" ❌

### Enumeration Value Standards

**Use ontology-defined instances exactly:**

From `urpx-ontology.ttl`:
- Charge types: `minimumCharge`, `usageCharge`, `demandDirect`, `taxState`
- Charge categories: `serviceCharge`, `auxiliaryCharge`, `infrastructure`, `taxes`
- Bill portions: `bundledPortion`, `deliveryPortion`, `supplyPortion`
- Customer kinds: `residentialKind`, `commercialKind`, `industrialKind`
- Measurement types: `energy`, `demand`, `power`, `voltage`
- Units: `kWh`, `kW`, `therm`, `ccf`

**Always:**
- Use camelCase for enum instances: `minimumCharge`, not `MinimumCharge`
- Reference enumerations with @id wrapper in JSON-LD: `{"@id": "urpx:value"}`

**Never use:**
- String values without @id wrapper
- PascalCase variants (MinimumCharge)
- Abbreviated forms (res, comm, dist)
- Custom/invented values not in ontology

---

## Validation Workflow

### Step-by-Step Quality Process

**1. Create Rate Plan Data**
- Use v0.1.1 ontology as reference
- Include all required properties

**2. Syntax Validation**
- Validate JSON-LD syntax
- Validate Turtle syntax

**3. SHACL Validation**
- Perform SHACL validation using [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl) 

**4. Business Logic Verification**
- Verify price classification combinations make sense
- Check temporal consistency
- Validate geographic applicability
- Confirm eligibility rules are complete

---

## Quality Metrics

### Data Quality Indicators

**Completeness**:
- All required properties present
- No null values for mandatory fields
- Complete metadata and descriptions

**Consistency**:
- Enum values match ontology exactly
- Property usage follows ontology domains/ranges
- Cross-references resolve correctly

**Accuracy**:
- Price values match source tariff documents
- Temporal periods align correctly
- Geographic boundaries are precise

**Standards Compliance**:
- ISO 8601 datetime formats with timezones
- ISO 4217 currency codes
- W3C RDF/OWL patterns
- SHACL validation passing

---

## Best Practices

### Development Workflow

1. **Reference ontology first** - Check urpx-ontology.ttl for all classes and properties
2. **Validate early** - Run SHACL validation during development
3. **Test with real data** - Verify with actual utility tariff information
4. **Document sources** - Include tariff book references and filing numbers

### Common Pitfalls to Avoid

**Property Name Errors:**
- Using properties that don't exist in ontology
- Misspelling property names
- Using wrong casing (camelCase vs PascalCase)

**Enum Value Errors:**
- Using string values instead of IRI references
- Wrong enum instance names
- Invented values not in ontology

**Structural Errors:**
- Missing required containers (Prices, PlanElements)
- Incorrect nesting of classes
- Missing @type declarations

---

## Support

- **Validation Tools**: See `test-cases/` directory for examples
- **Issue Reporting**: [GitHub Issues](https://github.com/urpx-org/urpx/issues)
- **Questions**: [GitHub Discussions](https://github.com/urpx-org/urpx/discussions)

---

*Quality assurance guidelines for URPX v0.1.1. For latest updates, visit the [URPX GitHub repository](https://github.com/urpx-org/urpx).*

[← Back to Index](../index.md)
