# CPAU Rate Plans — URPX Test Cases

## Overview

Three City of Palo Alto Utilities (CPAU) tariffs modeled as URPX test cases, expanding coverage beyond PG&E E-ELEC to a municipal utility with different rate structures.

**Branch:** `cpau-rate-plans` (2 commits, ready to push)

## Test Cases Added

### TC002 — E-1: Residential Electric Service
- **File:** `test-cases/cpau-e-1-2025-07-01/data/urpx-rate-plan_cpau_e-1_2025-07-01.jsonld`
- **Effective:** 2025-07-01
- **Structure:** Tiered (non-TOU), unbundled into commodity/distribution/public benefits
- **What's new for URPX:** First use of `ServiceTier` with upper/lower bounds and per-day baseline (15 kWh/day prorated by billing days)

| Component | Tier 1 (≤15 kWh/day) | Tier 2 (>15 kWh/day) |
|---|---|---|
| Commodity | $0.10373 | $0.13372 |
| Distribution | $0.09593 | $0.08968 |
| Public Benefits | $0.00604 | $0.00604 |
| **Total** | **$0.20570** | **$0.22944** |
| Customer Charge | $5.15/mo | — |

### TC003 — E-EEC-1: Export Electricity Compensation
- **File:** `test-cases/cpau-e-eec-1-2025-09-01/data/urpx-rate-plan-modifier_cpau_e-eec-1_2025-09-01.jsonld`
- **Effective:** 2025-09-01
- **Structure:** Single buyback rate for customer-generators, applied as add-on to base schedule
- **What's new for URPX:** First use of `RatePlanModifier` / `RatePlanModifierVersion` with `applicableToRatePlan` linking to E-1; reverse flow `MetricInput` for export energy
- **Rate:** -$0.1206/kWh (credit)

### TC004 — E-1 TOU: Residential Electric Time of Use Service
- **File:** `test-cases/cpau-e-1-tou-2026-01-01/data/urpx-rate-plan_cpau_e-1-tou_2026-01-01.jsonld`
- **Effective:** 2026-01-01
- **Structure:** 3 TOU tiers (peak/off-peak/super off-peak) × 2 seasons, voluntary, requires AMI meter
- **Interesting contrast with PG&E:** Only commodity varies by TOU period; distribution ($0.09351) and public benefits ($0.00604) are flat

| Period | Summer Commodity | Winter Commodity | Distribution | Public Benefits |
|---|---|---|---|---|
| Peak (4–9pm) | $0.23354 | $0.16705 | $0.09351 | $0.00604 |
| Off-Peak (9pm–9am, 3–4pm) | $0.08249 | $0.11033 | $0.09351 | $0.00604 |
| Super Off-Peak (9am–3pm) | $0.06690 | $0.07835 | $0.09351 | $0.00604 |
| Customer Charge | $5.15/mo | | | |

## URPX Modeling Firsts

| Feature | Test Case | Notes |
|---|---|---|
| `ServiceTier` with bounds | E-1 | Usage tiers (non-TOU) with daily baseline |
| `RatePlanModifier` | E-EEC-1 | Add-on modifier linked to base plan |
| `reverse` flow direction | E-EEC-1 | Export/generation metering |
| `superOffPeakTier` | E-1 TOU | Third TOU tier level |
| Municipal utility (`municipalOrganization`) | All three | First non-IOU test cases |
| Flat distribution across TOU periods | E-1 TOU | Single PriceDefinition, no `touPeriodNumber` |

## Source Documents

All tariff PDFs are included in each test case's `assets/` directory, sourced from official CPAU rate schedules.
