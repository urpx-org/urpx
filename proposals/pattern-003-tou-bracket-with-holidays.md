# Pattern decision 003: TOU bracket with holiday handling

**Status:** proposed
**Scope:** URPX-layer (modeling pattern using existing vocabulary)
**Drives:** URPX-166 (dayType cannot express weekday-AND-NOT-holiday — resolved as discoverability gap, not vocabulary gap)
**Test case:** [`test-cases/pge-e-tou-d-tou-holiday-2026-03-01/`](../test-cases/pge-e-tou-d-tou-holiday-2026-03-01/)
**Related upstream issue:** [urpx-org/urpx#13 — Documentation clarification: TimeBracket holiday handling](https://github.com/urpx-org/urpx/issues/13) ([local draft](004-tou-bracket-holiday-docs-clarification.md))

## Question

How should URPX express a TOU peak window that applies on weekdays
**excluding** holidays, with off-peak covering everything else (weekend +
weekday non-peak hours + weekday-holiday peak window)?

The dominant TOU pattern in California IOU residential and commercial
schedules post-2018:

> Peak: 5:00 p.m. to 8:00 p.m. Monday through Friday
> Off-Peak: All other times **including Holidays**

(PG&E E-TOU-D sheet 4, verbatim. Same shape on PG&E EV2, SCE TOU-D and TOU-D-PRIME, etc.)

## Decision

**Use the existing `urpx:includeHolidays` and `urpx:includeNonHolidays`
boolean properties on `urpx:TimeBracket`.** No ontology or SHACL changes
required. The full case is already expressible.

## Mechanism

Two existing optional boolean properties on `urpx:TimeBracket` (ontology
lines 2009–2021, SHACL `TimeBracketShape` lines 4515–4526):

- `urpx:includeHolidays` — bracket applies on holidays
- `urpx:includeNonHolidays` — bracket applies on non-holidays

The four combinations:

| `includeHolidays` | `includeNonHolidays` | Bracket applies on… |
|:--:|:--:|---|
| (omitted) | (omitted) | both *(implicit default)* |
| `true` | `true` | both |
| `false` | `true` | non-holidays only ← *peak window* |
| `true` | `false` | holidays only ← *holiday peak-window override* |
| `false` | `false` | never *(degenerate)* |

The `urpx:TOUSchedule` references the applicable `urpx:HolidayCalendar` via
`urpx:hasCalendar`; the consumer evaluates "is this date a holiday" against
that calendar.

## Recipe for "weekday peak excludes holidays, off-peak includes them"

For each season, **5 TimeBrackets** suffice:

```turtle
# Peak window (weekday non-holiday)
:tb-peak a urpx:TimeBracket ;
    urpx:appliesInSeason :season-summer ;
    urpx:startTime "17:00:00" ; urpx:endTime "20:00:00" ;
    urpx:dayType urpx:weekdayDays ;
    urpx:includeHolidays false ;
    urpx:includeNonHolidays true .

# Off-peak: weekday morning (00:00–17:00)
:tb-offpeak-weekday-am a urpx:TimeBracket ;
    urpx:appliesInSeason :season-summer ;
    urpx:startTime "00:00:00" ; urpx:endTime "17:00:00" ;
    urpx:dayType urpx:weekdayDays .   # both booleans default true

# Off-peak: weekday evening (20:00–24:00)
:tb-offpeak-weekday-pm a urpx:TimeBracket ;
    urpx:appliesInSeason :season-summer ;
    urpx:startTime "20:00:00" ; urpx:endTime "23:59:59" ;
    urpx:dayType urpx:weekdayDays .

# Off-peak: weekday-holiday peak-window override (5–8 p.m.)
:tb-offpeak-weekday-holiday a urpx:TimeBracket ;
    urpx:appliesInSeason :season-summer ;
    urpx:startTime "17:00:00" ; urpx:endTime "20:00:00" ;
    urpx:dayType urpx:weekdayDays ;
    urpx:includeHolidays true ;
    urpx:includeNonHolidays false .

# Off-peak: weekend (all hours)
:tb-offpeak-weekend a urpx:TimeBracket ;
    urpx:appliesInSeason :season-summer ;
    urpx:startTime "00:00:00" ; urpx:endTime "23:59:59" ;
    urpx:dayType urpx:weekendDays .
```

The 4th bracket (the "weekday-holiday peak-window override") is the load-
bearing one: when a holiday falls on a weekday, the 17:00–20:00 window must
still be off-peak per the tariff. Without this bracket, that hour would have
no covering bracket.

For tariffs with both summer and winter seasons, repeat the 5-bracket pattern
per season (the `appliesInSeason` reference is the only difference). Many
post-2018 CA TOU tariffs use the same time windows in both seasons, so the
brackets are paired identically.

## What this pattern does NOT require

- New URPX classes, properties, or `dayType` enum values.
- New SHACL shapes.

## What this pattern would benefit from (out of scope here)

A docs-clarification at urpx-org/urpx:

1. The implicit default of `includeHolidays` / `includeNonHolidays` when both
   are omitted (= "applies on both"). The ontology comments today are silent
   on this.
2. A worked example in the tutorial / data dictionary showing the 5-bracket
   recipe above. The current docs do not surface the holiday-aware bracket
   pattern; the URPX-166 author searched for it in the `dayType` enum and
   missed the boolean properties.
3. An end-of-day idiom convention (`23:59:59` vs `00:00:00`). Existing test
   cases in this repo use both ambiguously.

These are filed as a single docs-clarification issue at urpx-org/urpx. They
do not block the pattern's use today — it works as-is.

## Consequences

- The PG&E E-TOU-D conversion (URPXT-mdk) and PG&E EV2 conversion
  (URPXT-kc5) can proceed using this pattern.
- Existing PG&E E-ELEC test case in this repo uses `dayType: urpx:allDays`
  for its peak brackets, which is correct because E-ELEC's peak applies
  every day including holidays. No revision needed.

## Note on `clj-urpx`

The `clj-urpx` library currently uses `"urpx:weekday"`, `"urpx:weekend"`,
and `"urpx:holiday"` strings in its `dayType` matching logic
(`src/urpx/price.clj`). None of these are members of the URPX
`DayTypeValue` enum (which contains `urpx:allDays`, `urpx:customDays`,
`urpx:weekdayDays`, `urpx:weekendDays`). This is a clj-urpx bug, not a URPX
gap, and is tracked separately in clj-urpx's own issue tracker. URPX-conformant
test data must use the enum values.
