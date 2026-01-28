# URPX Quality Assurance Guidelines

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
5. **Standards Alignment** - Integration with Green Button, LF Energy CDS, CIM

---

## Ontology Validation

### Required Ontology Files

URPX v0.1.1 uses a core ontology file:

- `../../ontology/urpx-ontology.ttl` - Complete URPX ontology with all classes and properties

### Validation Commands

```bash
# Validate Turtle syntax
jena.riot --validate ontology/urpx-ontology.ttl

# Check OWL consistency
pellet consistency ontology/urpx-ontology.ttl

# Verify imports resolve
jena.infer --rdfs ontology/urpx-ontology.ttl
```

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

- `shacl/urpx-core-shacl.ttl` - Core constraints
- `shacl/urpx-charge-classification-shacl.ttl` - Price classification validation
- `shacl/urpx-geography-shacl.ttl` - Geographic constraints
- `shacl/urpx-organization-shacl.ttl` - Organization validation

### Running SHACL Validation

```bash
# Validate rate plan document
jena.shacl --shapes shacl/urpx-core-shacl.ttl \
          --data my-rate-plan.ttl

# Validate with all constraint files
jena.shacl --shapes shacl/ --data my-rate-plan.ttl
```

### Critical SHACL Constraints

**RatePlan Requirements:**
- Must have at least one RatePlanVersion
- Must have ratePlanIdentifier
- Must specify serviceRole (distribution, retail, or bundled)

**Price Requirements:**
- Must have exactly one chargeCategory
- Must have at least one chargeType
- Must have hasMetricSpecification with billPortion
- Must have one pricing field (amount, unitPrice, or basePrice)

**Temporal Requirements:**
- effectiveDateTime must include timezone
- Versions must not overlap temporally
- expirationDateTime must be after effectiveDateTime

---

## Rate Plan Data Quality

### Required Properties

**Every RatePlan must have:**
- ratePlanIdentifier (alphanumeric + hyphen only)
- name (human-readable)
- serviceRole (delivery, supply, or bundled)
- hasRatePlanVersion (at least one)

**Every RatePlanVersion must have:**
- versionNumber (semantic versioning)
- effectiveDateTime (with timezone)
- changeReason (from ChangeReasonValue enumeration)
- publishedBy (Organization reference)
- hasPrices (Prices container)

**Every Price must have:**
- chargeType (at least one from ChargeTypeValue)
- chargeCategory (exactly one from ChargeCategoryValue)
- hasMetricSpecification with billPortion
- One pricing field (amount, unitPrice, or basePrice)
- currency (ISO 4217 code)

### Enumeration Value Validation

**ChargeTypeValue** - Must use exact instance names:
- `urpx:minimumCharge` (not "MinimumCharge" or "minimum")
- `urpx:usageCharge` (not "UsageCharge" or "usage")
- `urpx:demandDirect` (not "DemandCharge" or "demand")
- `urpx:taxState` (not "TaxState" or "state_tax")

**BillPortionValue** - Must use exact values:
- `urpx:delivery` (not "Delivery" or "deliveryCharge")
- `urpx:supply` (not "Supply" or "supplyCharge")
- `urpx:bundled` (not "Bundled" or "bundledCharge")

**ChargeCategoryValue** - Must use exact instances:
- `urpx:serviceCharge`
- `urpx:auxiliaryCharge`
- `urpx:infrastructure`
- `urpx:adjustment`
- `urpx:taxes`
- `urpx:regulatory`
- `urpx:environmental`

### JSON-LD Pattern Requirements

**Correct enum reference:**
```json
{
  "chargeType": {"@id": "urpx:minimumCharge"},
  "chargeCategory": {"@id": "urpx:serviceCharge"},
  "billPortion": {"@id": "urpx:bundled"}
}
```

**Incorrect (will fail validation):**
```json
{
  "chargeType": "minimumCharge",
  "chargeCategory": "serviceCharge",
  "billPortion": "bundled"
}
```

### Turtle Pattern Requirements

**Correct:**
```turtle
ex:price1 a urpx:Price ;
    urpx:chargeType urpx:minimumCharge ;
    urpx:chargeCategory urpx:serviceCharge ;
    urpx:hasMetricSpecification [
        urpx:billPortion urpx:bundled
    ] .
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
- Bill portions: `delivery`, `supply`, `bundled`
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
- Follow examples from urpx-examples.md
- Include all required properties

**2. Syntax Validation**
```bash
# Validate JSON-LD syntax
jsonld validate my-rate-plan.jsonld

# Validate Turtle syntax  
jena.riot --validate my-rate-plan.ttl
```

**3. SHACL Validation**
```bash
# Run all constraint checks
jena.shacl --shapes shacl/ --data my-rate-plan.ttl
```

**4. Business Logic Verification**
- Verify price classification combinations make sense
- Check temporal consistency
- Validate geographic applicability
- Confirm eligibility rules are complete

**5. Standards Alignment Check**
- Verify Green Button mapping compatibility
- Check LF Energy CDS alignment
- Validate CIM property usage
- Confirm timezone compliance (ISO 8601)

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
2. **Use complete examples** - Start from urpx-examples.md templates
3. **Validate early** - Run SHACL validation during development
4. **Test with real data** - Verify with actual utility tariff information
5. **Document sources** - Include tariff book references and filing numbers

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
