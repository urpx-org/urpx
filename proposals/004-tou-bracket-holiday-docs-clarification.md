# Proposal: Documentation clarification — `TimeBracket` holiday handling

**Status:** filed as <https://github.com/urpx-org/urpx/issues/13>
**Type:** documentation / discoverability

## Problem

The URPX vocabulary already supports the dominant California IOU TOU pattern
of "peak window applies on weekdays **excluding** holidays." Two existing
optional `xsd:boolean` properties on `urpx:TimeBracket` express it:

- **`urpx:includeHolidays`** (ontology lines 2009–2014, SHACL
  `TimeBracketShape` lines 4515–4520)
- **`urpx:includeNonHolidays`** (ontology lines 2016–2021, SHACL lines
  4521–4526)

Combined with `urpx:dayType` (`weekdayDays` / `weekendDays` / `allDays` /
`customDays`), the four boolean combinations express:

| `includeHolidays` | `includeNonHolidays` | Bracket applies on… |
|:--:|:--:|---|
| (omitted) | (omitted) | both *(implicit default)* |
| `true` | `true` | both |
| `false` | `true` | non-holidays only |
| `true` | `false` | holidays only |
| `false` | `false` | never *(degenerate)* |

So the case that drove this issue — "weekday-non-holiday peak window with
off-peak covering everything else including weekday-holiday peak hours" — is
fully expressible.

**However**, the existing documentation does not surface the pattern, and the
ontology comments leave three things unspecified:

## Three gaps to close

### 1. Default semantics when both booleans are omitted

The ontology comments on `urpx:includeHolidays` and `urpx:includeNonHolidays`
read:

> "Whether this bracket applies on holidays" / "True if bracket applies on
> holidays, false otherwise."

This is silent on what omitting the property means. Two reasonable readings:

- **(a) Default true (most permissive)**: omitting both means "applies on
  both holidays and non-holidays". A bracket that doesn't care about holidays
  works without setting the booleans.
- **(b) Default false (most restrictive)**: omitting either means "does not
  apply." Then virtually every bracket needs to set both booleans
  explicitly to be useful, since omitting is the failure mode.

Reading (a) is what the issue's pattern decision relies on, and is the only
reading that makes the existing E-ELEC test case in this repo work without
modification. Recommend the spec **document (a) explicitly** in the ontology
comments and in the data dictionary.

### 2. Worked example in the tutorial / data dictionary

The bug that prompted this issue (URPX-166 in the `urpx` repo) was filed
because a converter searched for "weekday excluding holidays" support in the
`urpx:DayTypeValue` enum and didn't find anything matching. They missed
`includeHolidays` / `includeNonHolidays` because the boolean properties are
in a different part of the SHACL shape and the existing docs don't show them
in use anywhere.

Recommend: add a worked example to
`documentation/pages/urpx-tutorial.md` (and / or
`urpx-data-dictionary.md`) showing the 5-bracket recipe for the dominant
California TOU pattern. A copy-pastable example will short-circuit the same
discovery problem for future converters.

A complete, SHACL-conformant worked example is at
[`test-cases/pge-e-tou-d-tou-holiday-2026-03-01/`](https://github.com/urpx-org/urpx/tree/main/test-cases/pge-e-tou-d-tou-holiday-2026-03-01)
in the URPX repo.

### 3. End-of-day time idiom

The existing E-ELEC test case in this repo uses `urpx:endTime "00:00:00"` to
mean "until midnight" (e.g. `21:00:00` to `00:00:00` for the late-night
off-peak window). This is ambiguous — it could be read as `endTime` is
*before* `startTime`, which doesn't validate as a temporal range.

Recommend: pick and document one convention. Either:

- **(a) `endTime "23:59:59"`** for "until end-of-day, exclusive of next day"
  (used in the test case for this issue), or
- **(b) `endTime "24:00:00"`** if that's accepted as a valid `xsd:time`
  literal (it's not standard but some serializations accept it), or
- **(c) Half-open ranges with explicit `endTime "00:00:00"` documented as
  exclusive midnight-of-next-day.**

Whatever the choice, document it in the data dictionary so consumers don't
have to infer.

## Concrete tariff example

PG&E *Electric Schedule E-TOU-D — Residential Time-Of-Use Peak Pricing 5–8
p.m. Non-Holiday Weekdays*, effective 2026-03-01.

Source PDF: <https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-TOU-D.pdf>
(Cal. P.U.C. Sheet No. 61137-E, sheet 4)

> TIME PERIODS:
>
> Summer (service from June 1 through September 30):
>   Peak:     5:00 p.m. to 8:00 p.m.   Monday through Friday
>   Off-Peak: All other times **including Holidays**.
>
> Winter (service from October 1 through May 31):
>   Peak:     5:00 p.m. to 8:00 p.m.   Monday through Friday
>   Off-Peak: All other times **including Holidays**.
>
> Holidays: "Holidays" for the purposes of this rate schedule are New Year's
> Day, President's Day, Memorial Day, Independence Day, Labor Day, Veterans
> Day, Thanksgiving Day, and Christmas Day. The dates will be those on which
> the holidays are legally observed.

This shape recurs across most California IOU residential TOU schedules
post-2018 (PG&E E-TOU-D, EV2; SCE TOU-D, TOU-D-PRIME; SDG&E DR-TOU; many
commercial schedules). A worked example in the URPX docs would help every
converter who hits it.

## Acceptance / definition-of-done (suggested)

- [ ] Update `urpx:includeHolidays` and `urpx:includeNonHolidays` ontology
      comments to specify the omission default (recommend "default true,
      i.e. applies on both unless explicitly excluded")
- [ ] Add a worked example to `documentation/pages/urpx-tutorial.md` or
      `urpx-data-dictionary.md` showing the 5-bracket weekday-non-holiday
      peak recipe (PG&E E-TOU-D is a natural source)
- [ ] Pick and document an end-of-day `endTime` convention; revise the
      existing E-ELEC test case to match if it differs
- [ ] (Optional) Add a SHACL message or convention discouraging the
      `false`/`false` combination as degenerate

## Out of scope

- Adding new `urpx:DayTypeValue` enum members. The existing four values plus
  the boolean filters cover the cases observed in CA IOU tariffs.
- Changing the SHACL `TimeBracketShape` constraints on the boolean properties.
