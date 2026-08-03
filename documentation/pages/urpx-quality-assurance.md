<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX Quality Assurance Guidelines

**Version**: 0.3.0 (Pre-draft)
**Last Updated**: 2026-07-07
**Status**: Active

**Validation and quality standards for URPX v0.3.0 rate plan data**

[← Back to Index](/docs/getting-started/overview)

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

URPX v0.3.0 maintains quality standards for ontology alignment, SHACL conformance, and semantic consistency. This guide summarizes the current validation expectations for rate plans, versions, prices, and structured rule logic.

### Quality Principles

1. **Ontology Compliance** - Data must use current v0.3.0 classes and properties
2. **SHACL Validation** - Business rules are enforced through the unified SHACL file
3. **Semantic Consistency** - Property usage, enumerations, and cross-references must align with the ontology
4. **Data Completeness** - Required identifiers, version metadata, and pricing structure must be present

---

## Ontology Validation

### Required Ontology Files

URPX v0.3.0 uses a core ontology file:

- `../../ontology/urpx-ontology.ttl` - Complete URPX ontology with classes, properties, enumerations, and notes

### Common Validation Errors

| Error | Cause | Solution |
|-------|-------|----------|
| Undefined property | Using a property no longer present in v0.3.0 | Check the ontology and rename to the current property |
| Wrong enum value | Incorrect or invented enumeration instance | Use the exact URPX enumeration IRI |
| Missing required property | Omitted mandatory identifier, version field, or container | Add the required property before SHACL validation |
| Type mismatch | Literal used where an object reference is required, or vice versa | Correct to the ontology range |

---

## SHACL Constraint Validation

### SHACL Validation Files

- [`shacl/urpx-shacl.ttl`](/ontology/urpx-shacl.ttl) - Unified SHACL validation shapes for the current draft ontology

### Critical SHACL Constraints

**URPXPackage Requirements:**
- Must include `targetURPXVersion` exactly once
- May include `timezoneIdentifier`
- `targetURPXVersion` should point to the ontology version IRI used for authoring and validation

**RatePlan Requirements:**
- Must have `name`
- Must have `initialEffectiveDate`
- Must have `ratePlanUniqueIdentifier`
- Carries no pricing content and no list of versions: versions point back to the plan

**RatePlanVersion Requirements:**
- Must have `forRatePlan` (the link back to the plan identity)
- Must have `hasCoverageClaim`
- Must have `changeReason`
- Must have `serviceRole`
- Must have `hasPlanElements`
- Must have `hasPrices`
- Must have `effectiveDate` or `effectiveDateTime`
- May have `offeredBy` naming the organization that offers the plan

**CoverageClaim Requirements:**
- Must have `completenessResult` (`complete`, `incomplete`, or `pending`)
- Should state `selfContained` and carry an explaining `Evaluation` via `explainedBy`

**Price Requirements:**
- Must have exactly one pricing field: `amount`, `unitPrice`, `basedOnPrice`, `currentPrice`, or `basePrice`
- `chargeType`, `chargeCategory`, and `billPortion` are optional classification metadata
- Must have temporal boundaries when the source tariff provides them

**Structured Rule Requirements:**
- Every `EligibilityRule` MUST include exactly one `hasConditionExpression`
- Every `ProfileAlternative` MUST include exactly one `hasConditionExpression`
- `ApplicabilityRule` and `ApplicabilityGroup` MAY include at most one `hasConditionExpression`
- Every `ConditionExpression` MUST include exactly one `rootNode`
- `BooleanOperationNode` MUST use `operandNodes` and not `leftOperand` / `rightOperand`
- `ComparisonNode` MUST use `leftOperand` and `rightOperand`
- Literal-bearing `DatatypeOperandNode` and `CustomOperandNode` branches MUST carry exactly one matching datatype-specific value property
- `referencesMetricInput` is allowed on literal-bearing datatype/custom operand branches, but not on their property-reference branches

**Scenario Requirements:**
- A `Scenario` MUST include `hasCustomerProfile`, `hasServicePointProfile`, or both
- Eligibility evaluation inputs should be modeled through `Scenario`, not by attaching profiles directly to `EligibilityRule`

**PriceDefinition and RateCase Requirements:**
- Every `PriceDefinition` MUST include exactly one `referencesLedger`
- Every `RateCase` MUST include `caseNumber`
- Every `RateCase` MUST include `url`
- `hasRateCase` may be used on `RatePlanVersion`, `RatePlanModifierVersion`, `PriceDefinition`, `Price`, `PriceSet`, and `PriceSetAlternative`

**Temporal Requirements:**
- Use `timezoneIdentifier` where timezone metadata is needed
- Versions must not overlap temporally
- `expirationDate` / `expirationDateTime` must be later than `effectiveDate` / `effectiveDateTime`

---

## Rate Plan Data Quality

### Required Properties

**Every URPXPackage must have:**
- `targetURPXVersion`

**Every RatePlan must have:**
- `ratePlanUniqueIdentifier`
- `name`
- `initialEffectiveDate`

**Every RatePlanVersion must have:**
- `forRatePlan`
- `hasCoverageClaim`
- `effectiveDate` or `effectiveDateTime`
- `changeReason`
- `serviceRole`
- `hasPlanElements`
- `hasPrices`

**Every CoverageClaim must have:**
- `completenessResult`

**Every RatePlanVersion should include when version labeling is used:**
- `version`

**Every Price must have:**
- Exactly one pricing field
- Temporal boundaries when the source tariff provides them

**Every EligibilityRule must have:**
- `hasConditionExpression`

**Every ProfileAlternative must have:**
- `hasConditionExpression`

**Every ConditionExpression must have:**
- `rootNode`

**Every Scenario must have at least one of:**
- `hasCustomerProfile`
- `hasServicePointProfile`

**Every PriceDefinition must have:**
- `referencesLedger`

**Every RateCase must have:**
- `caseNumber`
- `url`

### Enumeration Value Validation

**ChargeTypeValue** - Use exact instance names:
- `urpx:minimumCharge`
- `urpx:usageCharge`
- `urpx:demandDirect`
- `urpx:taxState`

**BillPortionValue** - Use exact instance names:
- `urpx:bundledPortion`
- `urpx:deliveryPortion`
- `urpx:supplyPortion`

**ChargeCategoryValue** - Use exact instance names:
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
  "urpx:chargeType": { "@id": "urpx:minimumCharge" },
  "urpx:chargeCategory": { "@id": "urpx:serviceCharge" },
  "urpx:billPortion": { "@id": "urpx:bundledPortion" }
}
```

**Incorrect legacy identifier pattern:**
```json
{
  "@type": "urpx:RatePlan",
  "urpx:ratePlanIdentifier": "LEGACY-001"
}
```

**Valid structured condition pattern:**
```json
{
  "@type": "urpx:EligibilityRule",
  "urpx:hasConditionExpression": {
    "@type": "urpx:ConditionExpression",
    "urpx:rootNode": {
      "@type": "urpx:ComparisonNode",
      "urpx:operator": { "@id": "urpx:greaterThanOperator" },
      "urpx:leftOperand": {
        "@type": "urpx:DatatypeOperandNode",
        "urpx:conditionProperty": { "@id": "urpx:averageMonthlyUsage" }
      },
      "urpx:rightOperand": {
        "@type": "urpx:DatatypeOperandNode",
        "urpx:integerValue": 500,
        "urpx:referencesMetricInput": { "@id": "ex:mi-average-monthly-usage" }
      }
    }
  }
}
```

**Valid scenario pattern:**
```json
{
  "@type": "urpx:Scenario",
  "urpx:hasCustomerProfile": {
    "@type": "urpx:CustomerProfile",
    "urpx:hasCustomerKind": { "@id": "urpx:residentialKind" }
  },
  "urpx:hasServicePointProfile": {
    "@type": "urpx:ServicePointProfile",
    "urpx:voltageLevel": { "@id": "urpx:secondaryVoltage" }
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

---

## Documentation Quality

### Code Example Requirements

**All examples must:**
- Use current v0.3.0 property names
- Use `ratePlanUniqueIdentifier`, not `ratePlanIdentifier`
- Use `timezoneIdentifier`, not `timeZoneIdentifier`
- Use `hasConditionExpression`, not `hasCondition` / `hasConditionLogic`
- Include `targetURPXVersion` when the example includes a `URPXPackage`
- Include proper `@context` in JSON-LD examples
- Validate against the current SHACL file

---

## Terminology Standards

### Rate Plan Terminology

**CRITICAL REQUIREMENT**: Never use the bare word "rate" in URPX data, annotations, or documentation. Pick the unambiguous term for what is meant:

- **"rate plan"** for the complete package (`RatePlan`)
- **"price"** for a single value (`Price`): "the summer energy price", not "the summer rate"
- **"rate group"** for a utility's named grouping within a service class (`RateGroup`): e.g. *Rate I* within *SC 1*

**Correct Usage:**
- "rate plan data"
- "rate plan structure"
- "residential rate plan"
- "rate plan information"
- "price calculations", "rate plan eligibility"

**Incorrect Usage:**
- "rate data"
- "rate structure"
- "residential rate"
- "rate information"
- "rate calculations", "rate eligibility"

**Exceptions**: established terms of art and published names are kept as-is: "rate case" (`RateCase`), "rate-setting", "rate regulation", "flat-rate billing", and utilities' own published names such as "Rate I". Quoted utility source material is never rewritten. See the [FAQ Terminology section](urpx-faq.md#terminology) for the full explanation.

### Article Before "URPX"

URPX documentation, annotations, and data write **"an URPX"**, never "a URPX": "an URPX package", "an URPX rate plan", "an URPX fact", "an URPX-native property".

### Validation Workflow

1. **Reference the ontology first** - Confirm current classes and properties in `urpx-ontology.ttl`
2. **Validate syntax** - Check JSON-LD or Turtle syntax before semantic review
3. **Validate with SHACL** - Use `shacl/urpx-shacl.ttl`
4. **Check business logic** - Verify price structure, time coverage, and rule intent against the source tariff

### Edge-Case Coverage

The repository maintains an edge-case register at [`test-cases/urpx-edge-cases.csv`](../../test-cases/urpx-edge-cases.csv): a catalog of difficult real-world tariff features, each with the publishing utility, a source link, and the exact source language. Use it to steer test-case coverage, and add a row when a published tariff shows a hard pattern the register does not yet contain.

### Common Pitfalls to Avoid

**Property Name Errors:**
- Using `ratePlanIdentifier` instead of `ratePlanUniqueIdentifier`
- Using `timeZoneIdentifier` instead of `timezoneIdentifier`
- Using retired condition-model properties from earlier drafts

**Enum Value Errors:**
- Using string literals instead of `@id` references where IRIs are required
- Inventing values not defined in the ontology

**Structural Errors:**
- Omitting `targetURPXVersion` on `URPXPackage`
- Omitting `forRatePlan` or `hasCoverageClaim` on `RatePlanVersion`
- Nesting versions under the plan instead of linking top-level version nodes back via `forRatePlan`
- Omitting `hasConditionExpression` on `EligibilityRule`
- Omitting `hasConditionExpression` on `ProfileAlternative`
- Modeling eligibility inputs outside a `Scenario`

---

## Support

- **Validation Tools**: See `test-cases/` for current example datasets
- **Issue Reporting**: [GitHub Issues](https://github.com/urpx-org/urpx/issues)
- **Questions**: [GitHub Discussions](https://github.com/urpx-org/urpx/discussions)

---

*Quality assurance guidelines for URPX v0.3.0. For latest updates, visit the [URPX GitHub repository](https://github.com/urpx-org/urpx).*

[← Back to Index](/docs/getting-started/overview)
