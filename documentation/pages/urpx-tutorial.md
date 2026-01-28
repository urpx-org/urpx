# URPX Tutorial: Building Your First Rate Plan

**Learn the basics of creating and validating utility rate plan data using the URPX v0.1.1 ontology**

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
- `../../shacl/urpx-core-shacl.ttl` - The primary SHACL file with basic validation rules.

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
- Has eligibility criteria for customer qualification
- Applies to specific customer classes and service types
- Valid for specific time periods

**Rate Plan Version**: Time-bound instance of a rate plan
- Contains actual prices and pricing structures
- Has specific effectiveDateTime and optional expirationDateTime
- Links to centralized PlanElements for seasons, holidays, and pricing rules ncluding time-of--use schedules
- Contains Prices container with PriceSet instances

**Price**: An individual component of a bill
- Has a **chargeType** (specific implementation like `minimumCharge`, `usageCharge`)
- Has a **chargeCategory** (business purpose like `serviceCharge`, `auxiliaryCharge`)
- References a **MetricInput** to define what is being measured for pricing.

**MetricInput & MetricSpecification**:
- **MetricSpecification**: Defines the technical details of *what* is being measured (e.g., energy, kWh, supply-side).
- **MetricInput**: A container for one or more `MetricSpecification`s. It acts as a centralized, reusable definition that Ledgers, Prices, Service Tiers, and TOU Schedules can reference. This prevents repetition and ensures consistency.

### Key Terminology

| Term | Definition | Example |
|------|------------|---------|
| **minimumCharge** | Fixed monthly customer charge | $18.75/month |
| **usageCharge** | Per-unit energy consumption | $0.12/kWh |
| **demandDirect** | Peak demand measurement | $8.50/kW |
| **taxState** | State-level tax | 8.25% sales tax |

### Bill Portion Values

Every price must belong to one billPortion:

- **delivery** - Distribution, transmission, and delivery infrastructure prices
- **supply** - Generation, energy commodity, and capacity prices  
- **bundled** - Combined prices not separately stated, taxes, and service fees

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
  "identifier": "DOC-TUTORIAL-BASIC-001",
  "version": "0.1.1",
  "name": "Tutorial Basic Residential Rate Plan",
  "description": "Simple residential rate plan with minimum price and energy price",
  "effectiveDateTime": {
    "@type": "xsd:dateTime",
    "@value": "2025-01-01T00:00:00-05:00"
  },
  "timeZone": "America/New_York"
}
```

### Step 2: Rate Plan and Version

```json
{
  "hasRatePlan": {
    "@id": "ex:rateplan-basic-res",
    "@type": "RatePlan",
    "ratePlanIdentifier": "TUTORIAL-BASIC-RES-001",
    "name": "Residential Service - Basic Rate Plan",
    "description": "Simple residential rate plan with fixed and usage prices",
    "initialEffectiveDate": {
      "@type": "xsd:date",
      "@value": "2025-01-01"
    },
    "serviceRole": {"@id": "urpx:bundled"},
    "hasRatePlanVersion": {
      "@id": "ex:version-basic-res-v1",
      "@type": "RatePlanVersion",
      "versionNumber": "1.0",
      "schema:priceCurrency": "USD",
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
            "unitOfMeasure": {"@id": "urpx:kWh"},
            "billPortion": {"@id": "urpx:supply"}
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
  "billPortion": {"@id": "urpx:delivery"},
  "unitPrice": 8.50,
  "schema:priceCurrency": "USD",
  "referencesMetricInput": {"@id": "ex:metric-input-demand"},
  "calculationMethod": "Maximum 15-minute demand during billing period"
}
```

**Note**: The `calculationMethod` property is a string that describes the calculation logic in human-readable form. The technical measurement details (interval duration, aggregation method) are defined in the referenced MetricInput's MetricSpecification.

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
  "billPortion": {"@id": "urpx:supply"},
  "unitPrice": 0.025,
  "schema:priceCurrency": "USD",
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
  "chargeType": {"@id": "urpx:distribution"},
  "chargeCategory": {"@id": "urpx:infrastructure"},
  "billPortion": {"@id": "urpx:delivery"},
  "unitPrice": 0.058,
  "schema:priceCurrency": "USD",
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
  "versionNumber": "1.0",
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
      "startMonth": "06",
      "endMonth": "09",
      "yearlyRecurrence": true
    },
    "hasHolidayCalendar": {
      "@id": "ex:calendar-federal",
      "@type": "HolidayCalendar",
      "name": "US Federal Holidays",
      "timeZone": "America/New_York",
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
    "referencesMetricInput": { "@id": "ex:metric-input-energy" },
    "hasTOUSchedule": {
        "@id": "ex:tou-schedule-summer",
        "@type": "TOUSchedule",
        "name": "Summer TOU Schedule",
        "timeZone": "America/New_York",
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
      "schema:priceCurrency": "USD",
      "hasPrice": [
        {
          "@id": "ex:price-peak",
          "@type": "Price",
          "name": "Peak Energy",
          "chargeType": {"@id": "urpx:usageCharge"},
          "chargeCategory": {"@id": "urpx:auxiliaryCharge"},
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

1. **chargeType** - At least one (e.g., `{"@id": "urpx:minimumCharge"}`)
2. **chargeCategory** - Exactly one (e.g., `{"@id": "urpx:serviceCharge"}`)
3. **Measurement Definition** - Each `Price` that depends on a measured quantity must reference a `MetricInput` via `referencesMetricInput`. Each `Price` that depends on a non-measured quantity must reference a `MetricInput` with `ProfileMetricProperty` via `referencesMetricInput`. Prices with a fixed `amount` (like `minimumCharge`) only require interval definition in `MetricSpecification`.

### Sample Valid Charge Type Values

Extracted from the full list of possible values in `urpx-ontology.ttl`:

**Service Prices:**
- `urpx:minimumCharge` - Fixed monthly minimum
- `urpx:serviceCharge` - General service fee (also valid as category)

**Usage Prices:**
- `urpx:usageCharge` - Volumetric energy consumption
- `urpx:demandDirect` - Peak demand measurement
- `urpx:capacityCharge` - Reserved capacity

**Infrastructure:**
- `urpx:distribution` - Local distribution
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

- `urpx:delivery` - Distribution and transmission prices
- `urpx:supply` - Generation and energy prices
- `urpx:bundled` - Combined prices, taxes, service fees

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
4. **Run SHACL validation** - Use a SHACL validation tool against the relevant SHACL files. The URPX repository includes multiple SHACL files for different validation contexts (e.g., `urpx-core-shacl.ttl`, `urpx-tariff-book-shacl.ttl`).
5. **Verify business logic** - Price combinations make sense

---

## Next Steps

### Further Learning

1. [URPX Examples](urpx-examples.md) - Real-world rate plan examples
2. [Data Dictionary](urpx-data-dictionary.md) - Complete property reference
3. [URPX Interoperability & Standards Integration](urpx-interoperability.md) - Comprehensive guide to URPX interoperability
4. [Semantic Web Guide](urpx-semantic-web-guide.md) - RDF and semantic web concepts

### Advanced Topics

1. **Multi-Alternative Rate Plans** - Geographic or service variations
2. **Customer Profiles** - Complex eligibility rules
3. **Rate Plan Modifiers** - Optional add-ons and riders
4. **Dynamic Pricing** - Real-time and event-based pricing

### Production Examples

For complete production-ready examples with full TOU schedules and tariff references:
- See `test-data/urpx-jsonld/rate-plans/` directory
- Examples 0003-0007 show ConEd SC-2 implementations
- Example 0004 demonstrates efficient property consolidation

---

## Support

- **Issues**: [Report on GitHub](https://github.com/Flux-Tailor/urpx/issues)
- **Questions**: [GitHub Discussions](https://github.com/Flux-Tailor/urpx/discussions)
- **Documentation**: [Full Documentation](../index.md)

---

*Tutorial based on URPX v0.1.1 ontology. For latest updates, visit the [URPX GitHub repository](https://github.com/urpx-org/urpx).*
