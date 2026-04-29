<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

# URPX Tutorial: Building Your First Rate Plan

**Version**: 0.2.0 (Pre-draft)
**Last Updated**: 2026-04-29
**Status**: Active

**Learn the basics of creating and validating utility rate plan data using the URPX v0.2.0 ontology**

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Understanding URPX Basics](#understanding-urpx-basics)
3. [Creating a Simple Rate Plan](#creating-a-simple-rate-plan)
4. [Adding Complex Prices](#adding-complex-prices)
5. [Time-of-Use Pricing](#time-of-use-pricing)
6. [Validation and Best Practices](#validation-and-best-practices)
7. [Next Steps](#next-steps)

---

## Prerequisites

Before starting this tutorial, ensure you have:

- Basic understanding of JSON-LD or Turtle/RDF
- Familiarity with utility billing concepts
- Access to the URPX ontology files

### Required Files
- `../../ontology/urpx-ontology.ttl` - URPX ontology file.

> **Note:** Draft SHACL validation shapes are available at [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl). A reference validation script is under development for inclusion in the repository.

---

## Understanding URPX Basics

### Terminology

**Rate Plan vs Rate vs Tariff**

Understanding these distinctions is critical for working with URPX. For a more detailed explanation, please see the [URPX FAQ](urpx-faq.md).

- **Tariff**: A regulatory document (tariff book) containing one or more rate plans. Published by utilities and approved by regulatory authorities.
- **Rate Plan**: A complete package with all parameters needed to calculate customer cost - prices, TOU schedules, service tiers, seasonal variations, eligibility rules, and applicability conditions.
- **Rate**: A single price value (e.g., $0.12/kWh) - incomplete without the full rate plan context.

**In URPX**: We model rate plans (complete pricing structures), not individual rates. Tariff documents are containers that may include multiple rate plans plus regulatory metadata.

### Core Concepts

**Rate Plan**: A complete pricing structure offered by a utility
- Contains temporal versions with specific effective dates
- Valid for specific time periods

**Rate Plan Version**: Time-bound instance of a rate plan
- Contains actual prices and pricing structures
- Has specific effectiveDateTime and optional expirationDateTime
- Has eligibility criteria for customer qualification
- Applies to specific customer classes and service types
- Links to centralized PlanElements for seasons, holidays, and pricing rules including time-of-use schedules
- Contains Prices container with PriceSet instances

**Price**: An individual component of a bill
- May have a **chargeType** (specific implementation like `minimumCharge`, `usageCharge`)
- May have a **chargeCategory** (business purpose like `serviceCharge`, `auxiliaryCharge`)
- May reference a **MetricInput** to define what is being measured for pricing.
- May reference a **PriceDefinition** for structural price information through `referencesPriceDefinition`.

**MetricInput & MetricSpecification**:
- **MetricSpecification**: Defines the technical details of *what* is being measured (e.g., energy, kWh, supply-side).
- **MetricInput**: Organizational unit for pricing rules supporting measured MetricInputs (raw meter data), calculated MetricInputs (derived metrics), aggregated MetricInputs (sum of MetricInputs), and profile MetricInputs (based on Customer and Service Point Profile properties) that may contain one or more `MetricSpecification` objects. It acts as a centralized, reusable definition that Ledger, PriceDefinition, Price, ServiceTier, and TOUSchedule objects can reference.

### Key Terminology

| Term | Definition | Example |
|------|------------|---------|
| **minimumCharge** | Fixed monthly customer charge | $18.75/month |
| **usageCharge** | Per-unit energy consumption | $0.12/kWh |
| **demandDirect** | Peak demand measurement | $8.50/kW |
| **taxState** | State-level tax | 8.25% sales tax |

### Bill Portion Values

Every price may belong to one billPortion:

- **deliveryPortion** - Distribution, transmission, and delivery infrastructure prices
- **supplyPortion** - Generation, energy commodity, and capacity prices  
- **bundledPortion** - Combined prices not separately stated, taxes, and service fees

---

## Creating a Simple Rate Plan

Let's build a basic residential rate plan step by step using JSON-LD.

### Step 1: Document and Context

```json
{
  "@context": {
    "@vocab": "https://schema.urpx.org/",
    "urpx": "https://schema.urpx.org/",
    "urpx-org": "https://schema.urpx.org/organization/",
    "schema": "https://schema.org/",
    "ex": "https://example.org/tutorial/",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "ex:doc-tutorial-basic",
  "@type": "URPXDocument",
  "version": "0.2.0",
  "targetURPXVersion": "https://github.com/urpx-org/urpx/raw/v0.2.0/ontology/urpx-ontology.ttl",
  "name": "Tutorial Basic Residential Rate Plan",
  "description": "Simple residential rate plan with minimum price and energy price",
  "effectiveDateTime": {
    "@type": "xsd:dateTime",
    "@value": "2025-01-01T00:00:00-05:00"
  },
  "timezoneIdentifier": "America/New_York"
}
```

### Step 2: Rate Plan and Version

```json
{
  "hasRatePlan": {
    "@id": "ex:rateplan-basic-res",
    "@type": "RatePlan",
    "ratePlanUniqueIdentifier": "TUTORIAL-BASIC-RES-001",
    "name": "Residential Service - Basic Rate Plan",
    "description": "Simple residential rate plan with fixed and usage prices",
    "initialEffectiveDate": {
      "@type": "xsd:date",
      "@value": "2025-01-01"
    },
    "hasRatePlanVersion": {
      "@id": "ex:version-basic-res-v1",
      "@type": "RatePlanVersion",
      "version": "1.0",
      "priceCurrency": "USD",
      "effectiveDateTime": {
        "@type": "xsd:dateTime",
        "@value": "2025-01-01T00:00:00-05:00"
      },
      "changeReason": {"@id": "urpx:initial"},
      "publishedBy": {
        "@id": "ex:tutorial-utility",
        "@type": "urpx-org:Organization",
        "name": "Tutorial Electric Company"
      },
      "serviceRole": {"@id": "urpx:bundledServiceRole"},
      "hasPlanElements": {
        "@id": "ex:plan-elements-basic",
        "@type": "PlanElements",
        "hasMetricInput": {
          "@id": "ex:metric-input-energy",
          "@type": "MetricInput",
          "name": "Standard Energy Measurement",
          "metricInputType": { "@id": "urpx:measuredMetricInput" },
          "hasMetricSpecification": {
            "@id": "ex:metric-spec-energy-supply",
            "@type": "MetricSpecification",
            "commodity": {"@id": "urpx:electricity"},
            "measurementKind": {"@id": "urpx:energy"},
            "unitOfMeasure": {"@id": "urpx:kWh"}
          }
        }
      }
    }
  }
}
```

### Step 3: Prices Container and PriceSet

```json
{
  "hasPrices": {
    "@type": "Prices",
    "hasPriceSet": {
      "@id": "ex:priceset-basic",
      "@type": "PriceSet",
      "name": "Basic Residential Prices",
    }
  }
}
```

### Step 4: Add Minimum Price

```json
{
  "hasPrice": [
    {
      "@id": "ex:price-minimum",
      "@type": "Price",
      "name": "Monthly Minimum Price",
      "description": "Fixed monthly service price",
      "chargeType": {"@id": "urpx:minimumCharge"},
      "chargeCategory": {"@id": "urpx:serviceCharge"},
      "amount": 18.75,
      "hasMetricSpecification": {
        "@type": "MetricSpecification",
        "intervalDuration": "P1M"
      }
    }
  ]
}
```

### Step 5: Add Energy Usage Price

```json
{
  "@id": "ex:price-energy",
  "@type": "Price",
  "name": "Energy Price",
  "description": "Per-kWh energy consumption price",
  "chargeType": {"@id": "urpx:usageCharge"},
  "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "unitPrice": 0.12,
  "referencesMetricInput": { "@id": "ex:metric-input-energy" }
}
```

### Step 6: Add State Sales Tax

```json
{
  "@id": "ex:price-tax",
  "@type": "Price",
  "name": "State Sales Tax",
  "description": "8.25% state sales tax on energy prices",
  "chargeType": {"@id": "urpx:taxState"},
  "chargeCategory": {"@id": "urpx:taxes"},
  "multiplier": 0.0825,
  "basedOnPrice": { "@id": "ex:price-energy" }
}
```

---

## Adding Complex Prices

### Defining Additional MetricInputs

Before adding complex prices, define the MetricInputs they will reference. These are typically defined in the PlanElements container:

```json
{
  "hasPlanElements": {
    "@type": "PlanElements",
    "hasMetricInput": [
      {
        "@id": "ex:metric-input-energy",
        "@type": "MetricInput",
        "name": "Energy Consumption",
        "metricInputType": {"@id": "urpx:measuredMetricInput"},
        "hasMetricSpecification": {
          "@type": "MetricSpecification",
          "commodity": {"@id": "urpx:electricity"},
          "measurementKind": {"@id": "urpx:energy"},
          "unitOfMeasure": {"@id": "urpx:kWh"}
        }
      },
      {
        "@id": "ex:metric-input-demand",
        "@type": "MetricInput",
        "name": "Peak Demand",
        "metricInputType": {"@id": "urpx:measuredMetricInput"},
        "hasMetricSpecification": {
          "@type": "MetricSpecification",
          "commodity": {"@id": "urpx:electricity"},
          "measurementKind": {"@id": "urpx:demand"},
          "unitOfMeasure": {"@id": "urpx:kW"},
          "intervalDuration": "PT15M",
          "aggregationMethod": {"@id": "urpx:maximum"}
        }
      }
    ]
  }
}
```

### Demand Price

Commercial and industrial rates often include demand prices based on peak power consumption. The price references the MetricInput defined above.

```json
{
  "@id": "ex:price-demand",
  "@type": "Price",
  "name": "Peak Demand Price",
  "description": "Monthly peak demand price based on 15-minute intervals",
  "chargeType": {"@id": "urpx:demandDirect"},
  "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "billPortion": {"@id": "urpx:deliveryPortion"},
  "startDate": {
    "@type": "xsd:date",
    "@value": "2025-01-01"
  },
  "endDate": {
    "@type": "xsd:date",
    "@value": "2026-01-01"
  },
  "unitPrice": 8.50,
  "priceCurrency": "USD",
  "referencesMetricInput": {"@id": "ex:metric-input-demand"}
}
```

### Power Cost Adjustment

Fuel adjustment mechanisms that vary monthly based on generation costs.

```json
{
  "@id": "ex:price-pca",
  "@type": "Price",
  "name": "Power Cost Adjustment",
  "description": "Monthly fuel cost adjustment per kWh",
  "chargeType": {"@id": "urpx:adjustmentPowerCost"},
  "chargeCategory": {"@id": "urpx:adjustment"},
  "billPortion": {"@id": "urpx:supplyPortion"},
  "startDate": {
    "@type": "xsd:date",
    "@value": "2025-01-01"
  },
  "endDate": {
    "@type": "xsd:date",
    "@value": "2026-01-01"
  },
  "unitPrice": 0.025,
  "priceCurrency": "USD",
  "referencesMetricInput": {"@id": "ex:metric-input-energy"}
}
```

### Distribution Infrastructure Price

Delivery system prices separated from generation costs.

```json
{
  "@id": "ex:price-distribution",
  "@type": "Price",
  "name": "Distribution Price",
  "description": "Local distribution system delivery price",
  "chargeType": {"@id": "urpx:distributionCharge"},
  "chargeCategory": {"@id": "urpx:infrastructure"},
  "billPortion": {"@id": "urpx:deliveryPortion"},
  "startDate": {
    "@type": "xsd:date",
    "@value": "2025-01-01"
  },
  "endDate": {
    "@type": "xsd:date",
    "@value": "2026-01-01"
  },
  "unitPrice": 0.058,
  "priceCurrency": "USD",
  "referencesMetricInput": {"@id": "ex:metric-input-energy"}
}
```

---

## Time-of-Use Pricing

Time-of-use rates vary pricing based on time of day, day of week, and season.

### Complete TOU Structure

```json
{
  "@id": "ex:version-tou",
  "@type": "RatePlanVersion",
  "version": "1.0",
  "effectiveDateTime": {
    "@type": "xsd:dateTime",
    "@value": "2025-06-01T00:00:00-04:00"
  },
  "hasPlanElements": {
    "@type": "PlanElements",
    "hasSeasons": {
      "@id": "ex:season-summer",
      "@type": "Season",
      "seasonName": "Summer",
      "startDate": {
        "@type": "xsd:date",
        "@value": "2025-06-01"
      },
      "endDate": {
        "@type": "xsd:date",
        "@value": "2025-09-01"
      },
      "yearlyRecurrence": true
    },
    "hasHolidayCalendar": {
      "@id": "ex:calendar-federal",
      "@type": "HolidayCalendar",
      "name": "US Federal Holidays",
      "timezoneIdentifier": "America/New_York",
      "hasHoliday": [
        {
          "@type": "Holiday",
          "holidayName": "Independence Day",
          "holidayDate": {
            "@type": "xsd:date",
            "@value": "2025-07-04"
          },
          "observanceRule": {"@id": "urpx:nearestWeekdayObservance"}
        }
      ]
    },
    "hasBillingModel": {
      "@id": "ex-example-billing-model",
      "@type": "BillingModel",
      "hasTOUSchedule": {
        "@id": "ex:tou-schedule-summer",
        "@type": "TOUSchedule",
        "name": "Summer TOU Schedule",
        "timezoneIdentifier": "America/New_York",
        "referencesMetricInput": { "@id": "ex:metric-input-energy" },
        "hasTOUTier": [
          {
            "@id": "ex:tier-peak",
            "@type": "TOUTier",
            "touTierNumber": 1,
            "touTierStandardName": {"@id": "urpx:peakTier"},
            "tierSourceName": "Peak Period",
            "hasTOUPeriod": {
              "@id": "ex:period-peak",
              "@type": "TOUPeriod",
              "touPeriodNumber": 1,
              "periodName": "Summer Peak",
              "hasTimeBracket": {
                "@type": "TimeBracket",
                "startTime": {
                  "@type": "xsd:time",
                  "@value": "14:00:00"
                },
                "endTime": {
                  "@type": "xsd:time",
                  "@value": "19:00:00"
                },
                "appliesInSeason": {"@id": "ex:season-summer"},
                "dayType": {"@id": "urpx:weekdayDays"},
                "includeHolidays": false,
                "includeNonHolidays": true
              }
            }
          },
          {
            "@id": "ex:tier-offpeak",
            "@type": "TOUTier",
            "touTierNumber": 2,
            "touTierStandardName": {"@id": "urpx:offPeakTier"},
            "tierSourceName": "Off-Peak Period",
            "hasTOUPeriod": {
              "@id": "ex:period-offpeak",
              "@type": "TOUPeriod",
              "touPeriodNumber": 2,
              "periodName": "Summer Off-Peak",
              "hasTimeBracket": {
                "@type": "TimeBracket",
                "startTime": {
                  "@type": "xsd:time",
                  "@value": "00:00:00"
                },
                "endTime": {
                  "@type": "xsd:time",
                  "@value": "23:59:59"
                },
                "dayType": {"@id": "urpx:weekdayDays"},
                "appliesInSeason": {"@id": "ex:season-summer"},
                "includeHolidays": true,
                "includeNonHolidays": true,
                "description": "All non-peak hours including weekends and holidays"
              }
            }
          }
        ]
      }
    }
  }
}
```

### TOU Prices Referencing Periods

```json
{
  "hasPrices": {
    "@type": "Prices",
    "hasPriceSet": {
      "@type": "PriceSet",
      "name": "Summer TOU Prices",
      "priceCurrency": "USD",
      "hasPrice": [
        {
          "@id": "ex:price-peak",
          "@type": "Price",
          "name": "Peak Energy",
          "chargeType": {"@id": "urpx:usageCharge"},
          "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
          "startDate": {
            "@type": "xsd:date",
            "@value": "2025-06-01"
          },
          "endDate": {
            "@type": "xsd:date",
            "@value": "2026-01-01"
          },
          "unitPrice": 0.285,
          "touPeriodNumber": 1,
          "referencesMetricInput": { "@id": "ex:metric-input-energy" }
        },
        {
          "@id": "ex:price-offpeak",
          "@type": "Price",
          "name": "Off-Peak Energy",
          "chargeType": {"@id": "urpx:usageCharge"},
          "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
          "startDate": {
            "@type": "xsd:date",
            "@value": "2025-06-01"
          },
          "endDate": {
            "@type": "xsd:date",
            "@value": "2026-01-01"
          },
          "unitPrice": 0.075,
          "touPeriodNumber": 2,
          "referencesMetricInput": { "@id": "ex:metric-input-energy" }
        }
      ]
    }
  }
}
```

---

## Validation and Best Practices

### Required Properties

Every Price must have:

1. **amount, unitPrice, basedOnPrice, basePrice, or currentPrice** - Exactly one
2. **startDate or startDateTime** - Either directly on the Price object or on a parent PriceSet. Also include endDate or endDateTime on Price or parent PriceSet when available.
3. **Measurement Definition** - Each `Price` that depends on a measured quantity MUST connect to a `MetricInput` either directly via `referencesMetricInput` or indirectly through `referencesPriceDefinition` -> `PriceDefinition` -> `referencesLedger` -> `Ledger` -> `referencesMetricInput`. Each `PriceDefinition` MUST declare exactly one `referencesLedger` value. Each `Price` that depends on a non-measured quantity must reference a profile-based or scenario-based metric input pattern appropriate to the modeled charge either directly or indirectly. Prices with a fixed `amount` (like `minimumCharge`) only require interval definition in `MetricSpecification`.

### Structured Rule Logic

URPX models rule logic with `ConditionExpression`. Every `EligibilityRule` carries exactly one expression, and that expression points to a single root node for evaluation.

```json
{
  "@id": "ex:eligibility-rule-usage-threshold",
  "@type": "urpx:EligibilityRule",
  "urpx:description": "Average monthly usage must be greater than 500.",
  "urpx:hasConditionExpression": {
    "@id": "ex:eligibility-expression-usage-threshold",
    "@type": "urpx:ConditionExpression",
    "urpx:rootNode": {
      "@id": "ex:condition-usage-threshold",
      "@type": "urpx:ComparisonNode",
      "urpx:operator": { "@id": "urpx:greaterThanOperator" },
      "urpx:leftOperand": {
        "@type": "urpx:DatatypeOperandNode",
        "urpx:conditionProperty": { "@id": "urpx:averageMonthlyUsage" }
      },
      "urpx:rightOperand": {
        "@type": "urpx:DatatypeOperandNode",
        "urpx:integerValue": 500,
        "urpx:referencesMetricInput": { "@id": "ex:metric-input-energy" }
      }
    }
  }
}
```

Even a single-predicate rule uses the `ConditionExpression` wrapper. When a rule combines multiple predicates, use a `BooleanOperationNode` under `rootNode` and connect child nodes with `operandNodes`.

### Regulatory Traceability with `RateCase`

Use `changeReason` to classify why a version changed, and use `hasRateCase` to identify the formal proceeding behind the change.

```json
{
  "@id": "ex:version-basic-res-v2",
  "@type": "urpx:RatePlanVersion",
  "urpx:version": "2.0",
  "urpx:effectiveDateTime": "2026-01-01T00:00:00-05:00",
  "urpx:changeReason": { "@id": "urpx:rateCase" },
  "urpx:hasRateCase": [
    {
      "@id": "ex:ratecase-2026-001",
      "@type": "urpx:RateCase",
      "urpx:caseNumber": "2026-001-E",
      "urpx:name": "Residential rate adjustment proceeding",
      "urpx:url": "https://example.org/regulator/dockets/2026-001-e"
    }
  ]
}
```

`changeReason` categorizes the change. `hasRateCase` provides the reusable proceeding record and may also be used on `PriceDefinition`, `PriceSet`, `PriceSetAlternative`, or `Price` when only part of a pricing structure is affected.

### Sample Valid Charge Type Values

Extracted from the full list of possible values in `urpx-ontology.ttl`:

**Service Prices:**
- `urpx:minimumCharge` - Fixed monthly minimum
- `urpx:minimumBill` - Ensures total bill meets a minimum amount

**Usage Prices:**
- `urpx:usageCharge` - Volumetric energy consumption
- `urpx:demandDirect` - Peak demand measurement
- `urpx:capacityCharge` - Reserved capacity

**Infrastructure:**
- `urpx:distributionCharge` - Local distribution
- `urpx:transmission` - High-voltage transmission
- `urpx:deliveryCharge` - Combined delivery

**Taxes:**
- `urpx:taxState` - State tax
- `urpx:taxMunicipal` - Local tax
- `urpx:taxSales` - Sales tax

**Adjustments:**
- `urpx:adjustmentPowerCost` - Fuel adjustment
- `urpx:adjustmentTariff` - General tariff rider

### Valid Charge Category Values

- `urpx:serviceCharge` - Service fees and customer prices
- `urpx:auxiliaryCharge` - Energy, demand, capacity
- `urpx:infrastructure` - Distribution, transmission
- `urpx:discount` - Discounts, rebates, and bill reductions
- `urpx:adjustment` - Riders, true-ups, adjustments
- `urpx:taxes` - All tax-related prices
- `urpx:regulatory` - Compliance and mandated programs
- `urpx:environmental` - Renewable and conservation programs

### Valid Bill Portion Values

- `urpx:deliveryPortion` - Distribution and transmission prices
- `urpx:supplyPortion` - Generation and energy prices
- `urpx:bundledPortion` - Combined prices, taxes, service fees

### Common Patterns

**Fixed Service Price:**
```json
{
  "chargeType": {"@id": "urpx:minimumCharge"},
  "chargeCategory": {"@id": "urpx:serviceCharge"},
  "amount": 18.75
}
```

**Per-kWh Energy Price:**
```json
{
  "chargeType": {"@id": "urpx:usageCharge"},
  "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "unitPrice": 0.12,
  "referencesMetricInput": { "@id": "ex:metric-input-energy" }
}
```

**Demand Price:**
```json
{
  "chargeType": {"@id": "urpx:demandDirect"},
  "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "unitPrice": 8.50,
  "referencesMetricInput": { "@id": "ex:metric-input-demand" }
}
```

### Validation Workflow

1. **Validate JSON-LD syntax** - Ensure well-formed JSON
2. **Check property existence** - All properties must exist in ontology
3. **Validate enum values** - All enum instances must exist in ontology
4. **SHACL validation** - Validate against draft SHACL shapes at [`shacl/urpx-shacl.ttl`](../../shacl/urpx-shacl.ttl). A reference validation script is under development.
5. **Verify business logic** - Price combinations make sense

---

## Next Steps

### Further Learning

1. [Data Dictionary](urpx-data-dictionary.md) - Complete property reference
2. [URPX Interoperability & Standards Integration](urpx-interoperability.md) - Comprehensive guide to URPX interoperability
3. [Semantic Web Guide](urpx-semantic-web-guide.md) - RDF and semantic web concepts

### Advanced Topics

1. **Multi-Alternative Rate Plans** - Geographic or service variations
2. **Customer Profiles** - Complex eligibility rules
3. **Rate Plan Modifiers** - Optional add-ons and riders
4. **Dynamic Pricing** - Real-time and event-based pricing

### Production Examples

For complete current examples with tariff-linked test data:
- See the `test-cases/` directory

---

## Support

- **Issues**: [Report on GitHub](https://github.com/urpx-org/urpx/issues)
- **Questions**: [GitHub Discussions](https://github.com/urpx-org/urpx/discussions)
- **Documentation**: [Full Documentation](../index.md)

---

*Tutorial based on URPX v0.2.0 ontology. For latest updates, visit the [URPX GitHub repository](https://github.com/urpx-org/urpx).*
