---
id: specurpxont048greenbuttonprogramidcodebook
title: "SPEC-URPX-ONT-048 — Green Button ProgramIdMappings as a reading-code codebook"
desc: "Frames the design question for aligning NAESB ESPI V4's ProgramIdMappings extension to URPX. Its discriminator values (tou / cpp / consumptiontier) are the reading-code families ESPI also carries as numeric fields on ReadingType and IntervalReading — a utility-local codebook, not program enrollment. The closed ProgramEnrollmentShape cannot express a ProgramEnrollment alignment. States the candidate SKOS code-list route and what evidence settles it; does not author the scheme."
updated: 1788134400000
created: 1788134400000
---

# SPEC-URPX-ONT-048 — Green Button `ProgramIdMappings` as a reading-code codebook

| Field | Value |
|-------|-------|
| **Status** | Draft — unratified. Frames the design question; does not settle it. Not yet the delivery bundle a mint carries. |
| **Assignee** | Unassigned — open for any working-group member to pick up |
| **Target release** | Post-v0.4.0; not launch-gating |
| **Targets (candidate, none authored here)** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl`, `skos/standards-integration/urpx-green-button-mappings.ttl` |
| **Design-pass task** | [backlog.task.urpx.ont.2026-08-30.green-button-programid-codebook.md](../tasks/backlog.task.urpx.ont.2026-08-30.green-button-programid-codebook.md) |
| **Source** | NAESB ESPI V4 `ProgramIdMappings` / `programIdMapping` extension (`espi_v4.xsd`) |

## 1. Problem

`ProgramIdMappings` (`espi_v4.xsd`, global element at `:5391`, type at `:976`) is a list of `programIdMapping` entries. Each entry carries a discriminator `tOUorCPPorConsumptionTier` (`:5292`, members `tou` / `cpp` / `consumptiontier`), a numeric `code`, a `name`, and an optional `note`.

The discriminator values are not program types. They are the same three reading-code families ESPI carries as numeric fields on `ReadingType` (`consumptionTier` at `:404`, `tou` at `:455`, `cpp` at `:465`) and on `IntervalReading` (`:1048`). `ProgramIdMappings` is a utility-local codebook: it names the reading codes a utility uses and gives each a local integer. The ESPI schema does not connect this resource to a customer, an enrollment, or an enrollment status.

An earlier reading aligned this to `urpx:ProgramEnrollment` (with `urpx:programName` and `urpx:programType`). That alignment cannot be expressed and would misstate the source: `ProgramEnrollmentShape` is `sh:closed true` and admits only `enrollmentEndDate`, `enrollmentStartDate`, `enrollmentStatus`, `minimumTenure`, `programName`, `programType`, and `url` (verified against `shacl/urpx-shacl.ttl`, `ProgramEnrollmentShape`). It admits no `code` and no `note`. There is no `urpx:note` property in the vocabulary, and `urpx:description` excludes `ProgramEnrollment` from its domain. So the utility-local code has no home on the enrollment surface, and the resource it comes from is a reading-code axis, not customer participation.

## 2. What the live vocabulary carries (grounded this pass)

Checked directly against `ontology/urpx-ontology.ttl` and `shacl/urpx-shacl.ttl`:

- **No first-class SKOS code-list container exists yet.** `skos:notation` is already used on enumeration members (for example the sector-value individuals carry `HEAT` / `NONHEAT` / `DATACENTER` notations), but there is no `skos:ConceptScheme`, `skos:inScheme`, or free-standing `a skos:Concept` anywhere in the ontology. A codebook rendered as a SKOS scheme would introduce container machinery URPX does not use today — that is the reuse question this spec frames, not a settled route.
- **The tier and time-of-use surfaces the discriminator points at all exist:** `urpx:ServiceTier` with `urpx:serviceTierNumber`; `urpx:TOUPeriod` with `urpx:touPeriodNumber`; `urpx:TOUTier`. These are structure terms — the correct axis for a reading-code family — not the program enum.
- **A nodal / critical-peak charge term exists but is not a code family:** `urpx:congestionCharge` (a `ChargeTypeValue` member) carries locational-marginal-pricing and nodal-market annotations. It is named here only so a design pass does not repeat the false claim that URPX holds nothing in this area; it is a charge type, not a reading code, and not this spec's target.

## 3. Candidate reuse routes (the ladder, framed not settled)

1. **Reuse as-is** — no. There is no existing scheme container to hang the codebook on, and the enrollment surface rejects the `code` and `note` fields.
2. **Reuse by extension** — the codebook's *meaning* reuses the structure surfaces once the discriminator is read as a code-family selector:
   - `consumptiontier` reuses `urpx:ServiceTier` plus `urpx:serviceTierNumber` and `urpx:name`.
   - `tou` reuses the time-of-use surface — `urpx:TOUPeriod` / `urpx:touPeriodNumber`, and possibly `urpx:TOUTier`, depending on whether the payload means a period or a tier.
   - `cpp` is a critical-peak bucket. Whether it denotes a period or a tier is not decidable from the discriminator alone.
3. **Reuse by widening** — not obviously the instrument; nothing here asks to widen an existing property's domain.
4. **Mint (last resort)** — a code-list rendering via generic SKOS (`skos:ConceptScheme` holding concepts with `skos:notation`, `skos:prefLabel`, `skos:note`, branching by discriminator to the surfaces above) is the route the record already names. It is more than a mapping triple, which is why it is carried here rather than emitted into the mapping file. This spec does not author it.

## 4. What a design pass must settle

- **Scheme identity.** Does URPX define a first-class code-list container, or reuse generic SKOS scheme machinery inline? URPX has no `ConceptScheme` precedent today, so this is a genuine choice with maintenance consequences, not a mechanical rendering.
- **Notation form.** The `code` element is documented as numeric but has no XSD `type` declaration (`espi_v4.xsd:994`). A transform must validate integer coercion before writing an integer-valued property; the notation may need to stay a string.
- **The discriminator branching.** `cpp` needs producer examples or a Green Button Alliance clarification to choose between a period surface, a tier surface, or another critical-peak surface. There is also an internal inconsistency in the schema to resolve from payload evidence: the enum gloss reads "Consumption Peak Period" (`espi_v4.xsd:5302`) while the reading-field glosses read "Critical peak period." The discriminator alone does not justify aligning `cpp` to `urpx:DynamicPricingTypeValue`.

## 5. Evidence that settles the forks

Real producer payloads that show what each discriminator value actually indexes (a period, a tier, or a bucket), and a Green Button Alliance clarification on the `cpp` semantics and the enum-versus-reading-field gloss discrepancy. Absent that evidence, the conservative result is to leave the leaf targets open.

## 6. What this spec does not do

It authors no scheme, mints no term, and rules no branching. When the design pass runs, it produces the full delivery bundle the repository's specification convention requires — the edit set with before-and-after Turtle, an implementation task, and validating synthetic samples — of which this framing spec is the precursor.
