# URPX to MIDAS transform — worked example

The PG&E Net Billing Tariff export compensation series ([`../pge-nbt-export-series/`](../pge-nbt-export-series/)) transformed to a California Energy Commission MIDAS v2.0 upload payload, demonstrating the field mapping in [`spec.urpx.ont.044.urpx-to-midas-transform.md`](../../specs/spec.urpx.ont.044.urpx-to-midas-transform.md).

**Synthetic test data — not for production use.** The RIN `USCA-PGPG-NBTG-0000` is fictitious for illustration; it is not registered in MIDAS. Do not upload this payload.

## File

| File | Purpose |
|---|---|
| `pge-nbt-ecr-midas-upload.json` | One rate block with 168 hourly `ValueInformation` entries — the MIDAS upload form of the one-week export compensation series. |

## Header derivation

| MIDAS field | Value here | Source |
|---|---|---|
| `RIN` | `USCA-PGPG-NBTG-0000` | Fictitious RIN in the standard structure; in a real transform, the rate plan's `ca-midas-rin` identifier. |
| `RateName` | `TEST NBT Export Compensation Generation` | Rate plan name. |
| `RateType` | `TOU` | The export compensation schedule is time-differentiated without event machinery, so it types as time-of-use. |
| `Sector` | `Res` | The Net Billing Tariff applies over a residential otherwise applicable rate plan (E-ELEC); machine-derivation from a modeled eligibility rule is pending authoritative sourcing. |
| `RatePlan_Url` | tariff PDF link | Rate plan `url`. |
| `API_Url`, `AltRateName*`, `SignupCloseDate` | null | No URPX source in this example. |

## Value derivation

Each URPX `PriceObservation` becomes one MIDAS `ValueData` entry:

- `DateStart`/`DateEnd` and `TimeStart`/`TimeEnd` come from the observation's UTC `intervalStart`; `TimeEnd` is the inclusive `HH:59:59`.
- **Sign flip.** URPX carries export compensation as negative credits; MIDAS publishes `export $/kWh` as positive payments to the customer. The transform negates each value, so URPX `-0.03000` becomes MIDAS `0.03`.
- `Unit` is `export $/kWh`, derived from the price definition's `exportCredit` charge type.
- `DayStart`/`DayEnd` are the **local** day type (Monday = 1 … Sunday = 7) of the interval under `America/Los_Angeles`, while all wire times are UTC. In winter the local day flips at `08:00:00Z`, so the first entry of 2026-01-05 is `TimeStart 08:00:00`, `DayStart 1` (Monday).
- `ValueName` reflects the day type (`winter weekday export` / `winter weekend export`).

The payload has 168 gap-free hourly entries: 120 weekday (Monday–Friday) and 48 weekend (Saturday–Sunday). The weekend block begins at entry 121 (`2026-01-10T08:00:00Z`).

## Constraints checked

- Interval is hourly, an allowed MIDAS resolution.
- The stream is gap-free with one entry per interval.
- Currency is USD (MIDAS embeds currency in the unit code; no currency field).

## Information not carried to MIDAS

`priceStatus` (all `final` here) and the series `supersedes` lifecycle have no MIDAS equivalent and are dropped; they remain on the URPX side. See spec 044 §5.

## Note on this draft

This payload was derived by hand to illustrate the mapping. The reference transform (the companion implementation task) will regenerate it mechanically from the URPX series and validate it against the published MIDAS upload schema.
