# URPX Ontology Gap Analysis: Highly Dynamic Pricing & OpenADR Alignment

**Date:** 2026-03-17 (updated 2026-03-20 with discussion outcomes)
**Author:** Klaartje (with Claude analysis)
**Reviewer:** Bruce Nordman
**Purpose:** URPX v0.1.1 ontology assessment against requirements for representing highly dynamic prices, real-time pricing APIs, and alignment with OpenADR 3.0 and related standards
**Status:** Post-discussion — gaps confirmed, new gaps identified, open for Bruce's detailed review

---

## 1. Executive Summary

The URPX ontology has strong foundational support for dynamic pricing through the `DynamicPricing`, `HighlyDynamicPricesDocument`, and `PriceUpdateRule` classes, plus well-defined enumerations for pricing types, sources, and update frequencies. The existing `Price` and `PriceSet` model with temporal fields (`startDate`, optional `endDate`) can represent intervalized price sequences today.

The core issue is not missing expressiveness but **operational scale**: the current model becomes heavy for ingestion, query, and version management at HDP frequencies (hourly: 8,760 points/year; 5-minute: 105,120 points/year). Additional gaps exist in **API/data feed endpoint representation**, **wholesale market node references**, and **protocol-level interoperability** with OpenADR and IEEE 2030.5.

Priority should focus on a compact ingestion and exchange pattern that maps cleanly into existing `Price`/`PriceSet` semantics, rather than introducing new core concepts.

---

## 2. What URPX Currently Has (Strengths)

### 2.1 Dynamic Pricing Infrastructure
| Feature | Ontology Element | Status |
|---------|-----------------|--------|
| Dynamic pricing container | `urpx:DynamicPricing` class | Present |
| Document type for HDP | `urpx:HighlyDynamicPricesDocument` | Present |
| Pricing type classification | `urpx:DynamicPricingTypeValue` enum: `realTimePricing`, `criticalPeakPricing`, `indexBasedPricing`, `demandResponsePricing`, `eventDrivenPricing`, `timeVaryingPricing` | Present |
| Price data sources | `urpx:PriceSourceValue` enum: `wholesaleMarketSource`, `demandForecastSource`, `renewableForecastSource`, `algorithmicSource`, `capacityAuctionSource`, `gasIndexSource`, `manualOverrideSource` | Present |
| Update frequency | `urpx:UpdateFrequencyValue` enum: `hourlyUpdates`, `every5Minutes`, `every15Minutes`, `continuousUpdates`, `dailyUpdates`, `eventTriggeredUpdates`, etc. | Present |
| Price floor/ceiling | `urpx:priceFloor`, `urpx:priceCeiling` on DynamicPricing | Present |
| Price update rules | `urpx:PriceUpdateRule` class with `hasPriceUpdateRule` | Present |
| Current dynamic price | `urpx:currentPrice` on `urpx:Price` | Present (single scalar) |
| Interval types | `urpx:IntervalTypeValue`: `realTimeInterval`, `fiveMinuteInterval`, `hourlyInterval`, etc. | Present |
| ISO/RTO market reference | `urpx:SystemOperator`, `urpx:participatesInMarket` | Present |

### 2.2 Existing Rate Plan Structure
- Full `RatePlan → RatePlanVersion → PlanElements → BillingModel → Ledger → PriceDefinition` hierarchy
- `Prices → PriceSet → Price` with `startDate`, `unitPrice`, and `referencesPriceDefinition`
- Seasonal definitions, TOU schedules, eligibility rules
- `CalculationMethod` with `intervalDuration` and `calculationFormula`

---

## 3. Identified Gaps

### GAP-1: No Compact HDP Ingestion Pattern (CRITICAL)

**Problem:** Repeated `Price`/`PriceSet` records can represent price sequences, but there is no standardized compact ingestion pattern for HDP volumes. For hourly pricing (ComEd RRTP): 8,760 points/year; for 5-minute pricing: 105,120 points/year. At those volumes, instance size, ingestion complexity, and query costs become a primary blocker.

**What's needed:**
- A `PriceTimeSeries` or `PriceObservation` class that contains an ordered set of timestamped price values
- Each observation: `{timestamp, price, intervalDuration, status}` where status could be `preliminary`, `final`, `revised`
- Linking from `Price` (which has `hasDynamicPricing`) to a time series
- Support for both **historical** (settled) and **forecast/projected** (day-ahead, week-ahead) price series
- Temporal validity: which series is "current", which is superseded

**OpenADR parallel:** OpenADR 3.0 `Event` objects contain `Interval` arrays with `{id, payloads[{type, values}], intervalPeriod{start, duration}}`. This is essentially a time-series of signal values.

**IEEE 2030.5 parallel:** SEP2 `DERProgram` → `DefaultDERControl` with scheduled price/control intervals.

**Suggested classes:**
```
urpx:PriceTimeSeries
  - urpx:timeSeriesType (historical | dayAheadForecast | weekAheadForecast | realTime)
  - urpx:publishedDateTime
  - urpx:intervalDuration (PT1H, PT5M, etc.)
  - urpx:hasPriceObservation → urpx:PriceObservation[]

urpx:PriceObservation
  - urpx:observationDateTime
  - urpx:observedPrice (xsd:decimal)
  - urpx:observationStatus (preliminary | final | revised)
```

### GAP-2: No API / Data Feed Endpoint Representation (HIGH)

**Problem:** ComEd publishes live prices via a REST API (`https://hourlypricing.comed.com/api?type=5minutefeed`). URPX has `DataSourceReference` with `url` and `mediaType`, but no concept of a **live data feed endpoint** with parameters, authentication, polling intervals, or response format schemas.

**What's needed:**
- Distinguish between **static document references** (PDFs) and **dynamic API endpoints**
- Capture API endpoint URL, method, parameters, response format (JSON, XML, RSS)
- Link dynamic pricing configuration to its authoritative data feed
- Specify polling/push semantics (does the consumer poll, or does the provider push?)

**ComEd API example:**
- Endpoint: `https://hourlypricing.comed.com/api`
- Parameters: `type=5minutefeed`, `datestart`, `dateend`, `format=json|text|rss`
- Response: `[{"millisUTC":"...", "price":"..."}]`

**Suggested additions:**
```
urpx:DynamicPriceEndpoint (new class)
  - urpx:endpointUrl (xsd:anyURI)
  - urpx:endpointMethod (GET, POST, WebSocket)
  - urpx:responseFormat (application/json, text/xml, etc.)
  - urpx:authenticationRequired (xsd:boolean)
  - urpx:pollInterval (xsd:duration)
  - urpx:endpointDescription (xsd:string)
```

**OR** extend `DataSourceReference` with a `dataSourceType` enum (`staticDocument` vs `liveDataFeed` vs `apiEndpoint`).

### GAP-3: No Wholesale Market Node / Pricing Zone Reference (HIGH)

**Problem:** ComEd RRTP prices are based on the **PJM day-ahead LMP for the ComEd pricing zone**. URPX has `SystemOperator` and `participatesInMarket`, but no way to specify the **exact pricing node or zone** within an ISO/RTO market.

**What's needed:**
- A `WholesaleMarketNode` or `PricingNode` concept
- Node identifier (e.g., "COMED" zone in PJM, or specific pNode like "AEP_DAYTON_HUB")
- Node type: zone, hub, pNode, aggregate
- Link from `DynamicPricing` or `PriceUpdateRule` to the market node

**Suggested:**
```
urpx:PricingNode (new class)
  - urpx:nodeIdentifier (xsd:string) — e.g., "COMED", "SP15", "NP15"
  - urpx:nodeType (zone | hub | pNode | aggregate | loadZone)
  - urpx:operatedBy → urpx:SystemOperator
  - urpx:lmpType (totalLMP | energyLMP | congestionLMP | lossLMP)
```

### GAP-4: No Event / Signal Model for Critical Peak and Demand Response (MEDIUM-HIGH)

**Problem:** PG&E Peak Day Pricing calls event days with day-ahead notice. URPX has `eventTriggeredUpdates` and `criticalPeakPricing` enums, but no structure to represent **actual events** — when they were called, their duration, the trigger conditions, or the notification timeline.

**What's needed:**
- A `DynamicPricingEvent` class: event ID, call time, start time, end time, event status
- Maximum events per season/year (PG&E PDP: max 15 events/year, May-October)
- Notification lead time requirements
- Event trigger conditions (temperature threshold, CAISO grid stress)

**OpenADR parallel:** This maps directly to OpenADR `Event` objects with `intervals`, `signalName`, `signalType`, and `currentValue`. OpenADR 3.0 simplified this to `Event {intervals[], programID, targets[]}`.

**Suggested:**
```
urpx:DynamicPricingEvent (new class)
  - urpx:eventIdentifier
  - urpx:eventCallDateTime (when announced)
  - urpx:eventStartDateTime
  - urpx:eventEndDateTime
  - urpx:eventStatus (scheduled | active | completed | cancelled)
  - urpx:triggerCondition (xsd:string)

urpx:DynamicPricingEventConstraints (on DynamicPricing or PriceUpdateRule)
  - urpx:maxEventsPerYear (xsd:integer)
  - urpx:eventSeasonStart (xsd:gMonth)
  - urpx:eventSeasonEnd (xsd:gMonth)
  - urpx:minimumNoticeHours (xsd:decimal)
```

### GAP-5: No Protocol / Standards Alignment Metadata (MEDIUM)

**Problem:** Dynamic pricing data needs to flow between systems. URPX should declare alignment with specific communication protocols so implementers know what interoperability is expected.

**Standards to consider:**
| Standard | Purpose | Relevance |
|----------|---------|-----------|
| OpenADR 2.0b | DR signaling, price signals | Direct: event/price signal structure |
| OpenADR 3.0/3.1 | Simplified DR, dynamic pricing, capacity | Direct: price intervals, programs |
| IEEE 2030.5 (SEP2) | Smart inverter/DER control, pricing | Direct: DERProgram price schedules |
| CTA-2045 | Appliance-level DR interface | Indirect: consumer device signals |
| CSIP (CA Rule 21) | CA smart inverter comms | Indirect: DER pricing context |
| Matter (CSA) | Smart home device connectivity, intra-building comms | Direct: device-level price signal delivery within buildings |
| MIDAS (CEC) | Market Informed Demand Automation Server — CEC-hosted DB of time-varying rates, flex alerts, and marginal GHG data | Direct: California rate schedule API, dynamic price data source |

**What's needed:**
- Protocol alignment metadata on `HighlyDynamicPricesDocument` or `DynamicPricing`
- Signal mapping references (e.g., "this DynamicPricing maps to OpenADR signalName=ELECTRICITY_PRICE")
- Support for describing the URPX-to-protocol translation layer

### GAP-6: Price Adder/Multiplier Decomposition for Dynamic Prices (MEDIUM)

**Problem:** ComEd RRTP total price = `hourly LMP + retail adder + capacity obligation + transmission`. The ontology has `basedOnPrice` and `multiplier`/`adder` properties on `Price`, but no explicit concept of a **dynamic price component decomposition** showing which parts are variable vs fixed.

**What's needed:**
- Way to express: "this price = (external dynamic component) + (fixed adder) + (seasonal capacity component)"
- Component type: `externalMarketComponent`, `retailAdder`, `capacityComponent`, `ancillaryComponent`
- Link each component to its source (market API vs tariff schedule)

### GAP-7: HighlyDynamicPricesDocument ↔ RatePlan Relationship Ambiguity (MEDIUM)

**Problem:** The relationship between `HighlyDynamicPricesDocument` and the rate plans it contains is underspecified. Questions:
- Can one HDP document serve multiple rate plans? (ComEd hourly prices apply to all RRTP customers regardless of specific delivery charges)
- Is the HDP document the *supply portion only*, with delivery described in a separate `TariffBookDocument`?
- How does versioning work for an HDP document that changes hourly?

**What's needed:**
- Clearer documentation on intended use of `HighlyDynamicPricesDocument`
- Possibly: separation between the *rate plan structure* (static, in TariffBookDocument) and the *dynamic price stream* (in HighlyDynamicPricesDocument)
- Document-level property indicating which portion of the bill this document covers

### GAP-8: No Concept of Price Vintage / Settlement Status (LOW-MEDIUM)

**Problem:** Wholesale prices go through settlement stages: day-ahead (forecast) → real-time (preliminary) → settlement (final, may be revised). URPX has no way to track this lifecycle.

**What's needed:**
- Price vintage/status: `dayAhead`, `realTime`, `preliminary`, `final`, `revised`
- Settlement date reference
- Supersedes/supersededBy relationships between price versions

---

## 4. Mapping to OpenADR 3.0 Concepts

| OpenADR 3.0 Concept | URPX Equivalent | Gap? |
|---------------------|-----------------|------|
| Program | RatePlan + DynamicPricing config | Partial — no program enrollment |
| Event | (missing) | **GAP-4**: No event model |
| Event.intervals[] | (missing) | **GAP-1**: No time series |
| Interval.payloads[].values | currentPrice (single scalar) | **GAP-1**: Need array of observations |
| Report | (missing) | No reporting model |
| Subscription (VEN→VTN) | (missing) | **GAP-2**: No API/feed model |
| signalName=ELECTRICITY_PRICE | dynamicPricingType=realTimePricing | Close mapping |
| signalType=PRICE | chargeType=usageCharge | Different granularity |
| targets (venID, groupID) | EligibilityRule, CustomerProfile | Good mapping |

---

## 5. Mapping to ComEd RRTP API

| ComEd API Concept | URPX Equivalent | Gap? |
|-------------------|-----------------|------|
| 5-minute feed endpoint | DataSourceReference.url | **GAP-2**: No API semantics |
| `[{millisUTC, price}]` response | (missing) | **GAP-1**: No time series model |
| Day-ahead prices | (missing) | **GAP-1**: No forecast concept |
| Current hour average | currentPrice | Close but limited to one value |
| Historical data (year view, CSV export) | (missing) | **GAP-1**: No historical archive |
| PJM ComEd zone LMP | SystemOperator exists but no node | **GAP-3**: No pricing node |

---

## 6. Priority Ranking

| Priority | Gap | Impact | Effort | Status |
|----------|-----|--------|--------|--------|
| P0 | GAP-1: Compact HDP Ingestion | Blocks all dynamic pricing use cases | High | Confirmed |
| P1 | GAP-4: Event/Signal Model | Blocks CPP/DR event representation | Medium | Confirmed — align with OpenADR3 |
| P1 | GAP-9: Structured Computation Rules | Blocks machine-readable price calc | Medium | New — from discussion |
| P1 | GAP-5: Protocol Alignment (OpenADR3) | Blocks interop story | Medium | Confirmed — OpenADR3 + Matter |
| P1 | GAP-3: Wholesale Market Nodes | Blocks accurate market price sourcing | Low | Confirmed |
| P2 | GAP-10: Split Metrics / End-Use | Limits local price optimization | Medium | New — from discussion |
| P2 | GAP-6: Price Component Decomposition | Limits transparency of dynamic prices | Medium | Confirmed |
| P2 | GAP-7: HDP↔RatePlan Relationship | Causes modeling confusion | Low | Confirmed — tariff vs program |
| P2 | GAP-8: Settlement Status | Needed for wholesale market accuracy | Low | Confirmed |
| P2 | GAP-2: API/Data Feed Endpoints | Blocks integration with live pricing | Medium | Confirmed |
| P3 | GAP-11: Profile Alternatives Guidance | Documentation gap | Low | New — from discussion |

---

## 7. Discussion Outcomes (2026-03-17)

### Confirmed Positions

1. **HDP document separate from rate plan structure.** Tariffs (mandatory rate structures) should be distinct from programs (optional overlays like RRTP). The `HighlyDynamicPricesDocument` should contain the dynamic price stream separately from the static rate plan in `TariffBookDocument`.

2. **Fixed charges excluded from automation.** Only the dynamic part is relevant for device automation: import price, export price, and non-financial factors. Fixed charges (customer charge, minimum bill) stay in the rate plan but are not streamed to devices.

3. **OpenADR 3.0 for wide-area communication.** Bruce recommends OpenADR3 for utility-to-building communication and either OpenADR3 or Matter for intra-building device communication.

4. **Location as part of rate plan identifier.** Keep location simple — use utility-provided names and suffixes (e.g., AA, AB, AC for different circuits) rather than complex geographic zone hierarchies.

5. **Denmark model as reference.** Retail price = sum of five components (wholesale generation, transmission, DSO charges, retailer markup, taxes). Good reference for price decomposition modeling.

6. **PG&E advanced subscription should not be accommodated.** Bruce considers it fundamentally flawed — too complex for customers, negates load-shifting savings. Not worth modeling in URPX.

### New Gaps Identified in Discussion

**GAP-9: Structured Computation Rules (HIGH)**
The current `CalculationMethod.calculationFormula` is a string. Dynamic price computation needs structured rules that define how inputs (wholesale LMP, adders, capacity) combine into output prices. This should be machine-readable, not a human-readable formula string.

**GAP-10: Split Metric Inputs and End-Use Categories (MEDIUM-HIGH)**
URPX needs to represent how usage is split by end-use (heating vs non-heating, EV charging, etc.) for local price optimization. Bruce described how local price servers within customer sites combine import and export prices for optimized device operation. This requires end-use category definitions and split metering representation.

**GAP-11: Profile Alternatives Manageability Guidance (LOW)**
When profile alternatives (voltage levels, end-use categories, geographic zones) multiply, rate plans can become unmanageable. URPX should document guidance on practical limits, even if not enforced programmatically.

### Open Items for Bruce's Review

- **Event representation detail level:** How much event structure beyond constraints (max events, notice period, season)?
- **Settlement status granularity:** Is day-ahead / real-time / final sufficient, or are intermediate stages needed?
- **Slim serialization:** What compact format for streaming price time series via API? Align with OpenADR3 interval structure?
- **Price component decomposition:** Should each component be a separate `Price` with `basedOnPrice` linking, or a dedicated `PriceComponent` model?

---

## 8. Source Documents & References

### Tariff Documents (Real URLs)
- **ComEd Rate BESH / Rider RRTP**: https://www.comed.com/MyAccount/MyBillUsage/Pages/CurrentRatesTariffs.aspx
- **ComEd RRTP ICC Filing**: https://icc.illinois.gov/docket/P2012-0365/documents/186510/files/328312.pdf
- **ComEd RRTP Annual Report (2023)**: https://www.icc.illinois.gov/docket/P2022-0486/documents/352019/files/615966.pdf
- **PG&E Schedule B-6**: https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-6.pdf
- **PG&E Peak Day Pricing**: https://www.pge.com/en/account/rate-plans/peak-day-pricing.html
- **PG&E Hourly Flex Pricing**: https://www.pge.com/en/account/rate-plans/hourly-flex-pricing.html

### Live Pricing APIs
- **ComEd Hourly Pricing API**: https://hourlypricing.comed.com/hp-api/
  - 5-minute feed: `https://hourlypricing.comed.com/api?type=5minutefeed`
  - Current hour average: `https://hourlypricing.comed.com/api?type=currenthouraverage`
  - Custom date range: `&datestart=YYYYMMDDhhmm&dateend=YYYYMMDDhhmm`
  - Formats: `json` (default), `text`, `rss`
  - Response: `[{"millisUTC":"...", "price":"..."}]`
- **ComEd Live Prices Dashboard**: https://hourlypricing.comed.com/live-prices/
- **ComEd Day-Ahead Prices**: https://hourlypricing.comed.com/live-prices/day-ahead-prices/
- **ComEd Historical Year View**: https://hourlypricing.comed.com/live-prices/year/

### Standards
- **OpenADR 2.0 Program Guide**: https://www.openadr.org/openadr-2-0-program-guide
- **OpenADR 3.0 Specification**: https://www.openadr.org/specification-download
- **OpenADR 3.1.0 Overview**: https://www.openadr.org/index.php?option=com_dailyplanetblog&view=entry&year=2025&month=09&day=17&id=100
- **IEEE 2030.5 (SEP2)**: https://standards.ieee.org/ieee/2030.5/11216/
- **OpenADR 3.0 & Demand Flexibility (LBNL)**: https://calflexhub.lbl.gov/wp-content/uploads/sites/41/2024/08/Transforming-demand-response-using-OpenADR-3.0.pdf

### Test Cases (Included in This Package)
- **ComEd RRTP**: `instances/URPX-HDP-COMED-RRTP-RTP-001.jsonld`
- **PG&E B-6 PDP**: `instances/URPX-HDP-PGE-B6-CPP-001.jsonld`
