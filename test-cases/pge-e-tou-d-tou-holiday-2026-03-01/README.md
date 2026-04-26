# Test case: PG&E E-TOU-D TOU Schedule with Holiday Handling

**Effective:** 2026-03-01
**Source:** PG&E *Electric Schedule E-TOU-D — Residential Time-Of-Use Peak Pricing 5–8 p.m. Non-Holiday Weekdays*, Cal. P.U.C. Sheet Nos. 61134-E and 61137-E (sheets 1, 2, 4)
**PDF:** <https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-TOU-D.pdf>

## Purpose

Pattern-demonstration test case for the URPX modeling of TOU schedules whose
peak window is "weekday EXCLUDING holidays." This is the dominant TOU pattern
across post-2018 California IOU residential and commercial schedules
(E-TOU-D, EV2, the various General Service TOU schedules, and analogous
schedules at SCE / SDG&E).

Models only the TOU schedule + total energy rates from sheets 2 and 4. The
full E-TOU-D conversion (income tiers, baseline credit, vintage PCIA,
unbundled rates) lives in `urpx-tariffs` (issue URPXT-mdk).

## Pattern: existing vocabulary already handles the case

URPX-166 was filed as a vocabulary gap — "dayType cannot express weekday AND
NOT holiday." That framing missed two existing properties:

- **`urpx:includeHolidays`** (`xsd:boolean`, optional) on `urpx:TimeBracket`
  (ontology lines 2009–2014, SHACL lines 4515–4520)
- **`urpx:includeNonHolidays`** (`xsd:boolean`, optional) on `urpx:TimeBracket`
  (ontology lines 2016–2021, SHACL lines 4521–4526)

The four combinations express:

| `includeHolidays` | `includeNonHolidays` | Bracket applies on… |
|:--:|:--:|---|
| (omitted) | (omitted) | both holidays and non-holidays *(implicit default)* |
| `true` | `true` | both |
| `false` | `true` | non-holidays only ← *peak window for E-TOU-D-style tariffs* |
| `true` | `false` | holidays only ← *holiday "off-peak override" of the peak window* |
| `false` | `false` | never *(degenerate)* |

This works without any ontology or SHACL changes.

## What this test case shows

Tariff text (sheet 4):

> Summer Peak: 5:00 p.m. to 8:00 p.m. Monday through Friday
> Summer Off-Peak: All other times **including Holidays**.
> Winter Peak: 5:00 p.m. to 8:00 p.m. Monday through Friday
> Winter Off-Peak: All other times **including Holidays**.
> Holidays: New Year's Day, President's Day, Memorial Day, Independence
> Day, Labor Day, Veterans Day, Thanksgiving Day, Christmas Day. The dates
> will be those on which the holidays are legally observed.

Modeled as **2 TOUTiers** (peak, off-peak) with **per-season TOUPeriods** and
**5 distinct TimeBracket shapes** repeated per season:

| Period | TimeBracket(s) | `dayType` | `startTime` – `endTime` | `includeHolidays` | `includeNonHolidays` |
|---|---|---|---|:--:|:--:|
| Summer Peak | summer-peak | `weekdayDays` | 17:00 – 20:00 | `false` | `true` |
| Summer Off-Peak | summer-offpeak-weekday-morning | `weekdayDays` | 00:00 – 17:00 | (omitted) | (omitted) |
| Summer Off-Peak | summer-offpeak-weekday-evening | `weekdayDays` | 20:00 – 23:59:59 | (omitted) | (omitted) |
| Summer Off-Peak | summer-offpeak-weekday-holiday-peak-window | `weekdayDays` | 17:00 – 20:00 | `true` | `false` |
| Summer Off-Peak | summer-offpeak-weekend | `weekendDays` | 00:00 – 23:59:59 | (omitted) | (omitted) |
| Winter Peak | winter-peak | `weekdayDays` | 17:00 – 20:00 | `false` | `true` |
| Winter Off-Peak | (same 4-bracket pattern as summer off-peak) | … | … | … | … |

The fourth bracket (the "weekday-holiday peak-window override") is what
ensures full coverage: when a holiday falls on a weekday, the 17:00–20:00
window is off-peak, not peak.

The `TOUSchedule` references the `HolidayCalendar` (`pge:holidays-e-tou-d`)
via `urpx:hasCalendar`. The calendar lists the eight holidays with
`urpx:holidayName` + `urpx:holidayRule` (no fixed `urpx:holidayDate` because
the rule definitions are sufficient and the legally-observed-date convention
applies).

## Pattern decision

See [`/proposals/pattern-003-tou-bracket-with-holidays.md`](../../proposals/pattern-003-tou-bracket-with-holidays.md)
for the full convention and rationale.

## Files

- `data/urpx-rate-plan_pge_e-tou-d-tou-holiday_2026-03-01.jsonld`
- `assets/` — local source materials (PDF retrieval is up to the consumer)

## Tariff text quoted in this test case

From sheet 4 (Time Periods, item 1):

> TIME PERIODS: Times of the year and times of the day are defined as
> follows:
>
> Summer (service from June 1 through September 30):
>   Peak:     5:00 p.m. to 8:00 p.m.   Monday through Friday
>   Off-Peak: All other times including Holidays.
>
> Winter (service from October 1 through May 31):
>   Peak:     5:00 p.m. to 8:00 p.m.   Monday through Friday
>   Off-Peak: All other times including Holidays.
>
> Holidays: "Holidays" for the purposes of this rate schedule are New Year's
> Day, President's Day, Memorial Day, Independence Day, Labor Day, Veterans
> Day, Thanksgiving Day, and Christmas Day. The dates will be those on which
> the holidays are legally observed.

## Known limitations of this test case

- **Only the TOU schedule + total energy rates are modeled.** Income tiers,
  baseline credit, vintage PCIA, and unbundled rates are out of scope here
  — they're tracked in URPXT-mdk and are well-covered by other test cases.
- **`urpx:includeHolidays` defaults are not formally specified in URPX**
  today — what does it mean to omit both? The natural reading is "applies on
  both" (defaulting to `true`), which this test case relies on. Filed
  upstream as a docs-clarification ask
  ([urpx-org/urpx#13](https://github.com/urpx-org/urpx/issues/13)).
- **`endTime: 23:59:59`** is used to mean "until midnight" because the
  E-ELEC test case in this repo uses `00:00:00` for the same purpose
  ambiguously (could read as midnight-start or midnight-end). Either
  convention works; the URPX docs do not specify an end-of-day idiom.
