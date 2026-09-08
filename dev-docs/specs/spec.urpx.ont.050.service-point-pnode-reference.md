---
id: specurpxont050servicepointpnodereference
title: "SPEC-URPX-ONT-050 — Service-point reference to a pricing node"
desc: "Frames the reuse question for letting a URPX service point refer to a pricing node the way Green Button does, beginning from urpx:ServicePointProfile (the analogue of ESPI's UsagePoint) rather than the Scenario surface, and considers Green Button's ServiceLocation as a related surface. Distinct from the wholesale PnodeRef retail-mapping question, which is out of scope for the retail mapping. States the candidate route and what evidence settles it; does not author the reference."
updated: 1788134400000
created: 1788134400000
---

# SPEC-URPX-ONT-050 — Service-point reference to a pricing node

| Field | Value |
|-------|-------|
| **Status** | Draft — unratified. Frames the reuse question; does not author the reference surface. Not yet the delivery bundle a mint or an extension carries. |
| **Assignee** | Unassigned — open for any working-group member to pick up |
| **Target release** | Post-v0.4.0; not launch-gating |
| **Targets (candidate, none authored here)** | `ontology/urpx-ontology.ttl`, `shacl/urpx-shacl.ttl` |
| **Design-pass task** | [backlog.task.urpx.ont.2026-08-31.green-button-pnoderef-mapping-question.md](../tasks/backlog.task.urpx.ont.2026-08-31.green-button-pnoderef-mapping-question.md) — the existing open-question task this design pass resolves (see §6) |
| **Source** | NAESB ESPI V4 `PnodeRef` / `PnodeRefs` on `UsagePoint`, and `ServiceLocation` (`espi_v4.xsd`, `customer_v4.xsd`) |

## 1. Problem

A service point should be able to refer to a pricing node the way Green Button does. Green Button carries `PnodeRef` (`espi_v4.xsd:1544`: `apnodeType`, `ref`, and start/end effective dates) reached through `PnodeRefs` (`:1500`) from `UsagePoint.pnodeRefs` (`:603`). ESPI's `UsagePoint` is a metering point.

URPX's analogue of a metering point is `urpx:ServicePointProfile` — "the physical and technical characteristics of a utility service delivery point" — which `urpx:Scenario` already composes via `urpx:hasServicePointProfile`. The reuse pass therefore begins from `urpx:ServicePointProfile`, not from `urpx:Scenario` or `urpx:ScenarioCostModel` directly: hanging a pricing-node input on the Scenario itself would duplicate a service-point fact that belongs on the profile the Scenario already references.

This is the service-point reference surface. It is **not** a revival of the retail Green Button mapping's wholesale pricing-node question, which is separately out of scope for the retail mapping; the retail-mapping disposition is unchanged and is tracked in its own task.

## 2. What the live vocabulary carries (grounded this pass)

Checked directly against `ontology/urpx-ontology.ttl` and `shacl/urpx-shacl.ttl`:

- `urpx:ServicePointProfile` exists (a subclass of `urpx:Profile`) and is composed into `urpx:Scenario` through `urpx:hasServicePointProfile`.
- No URPX term today represents a pricing-node identity or a time-bounded assignment to one: a sweep for pnode, service-location, apnode, and locational-reference terms returns nothing.
- **A nodal / locational-marginal-pricing term does exist, and it is not a node reference:** `urpx:congestionCharge` (a `ChargeTypeValue` member) carries "Locational marginal pricing congestion component" and "Applies in nodal pricing markets." It is a charge type, not a pricing-node identity. A design pass must not repeat the earlier, incorrect claim that URPX holds no nodal or LMP language; the correct statement is that URPX has no pricing-node *reference*, which this term is not.
- `ServicePointProfileShape` is `sh:closed true`; admitting a pricing-node reference would require extending it.

On the Green Button side: `PnodeRef` carries `apnodeType`, `ref` (a `String256`, "Reference to a Pnode"), and `startEffectiveDate` / `endEffectiveDate` that explicitly bound the pricing-node *assignment*. An adjacent reachability path, `AggregateNodeRef` (`espi_v4.xsd:1575`), also references a node. `ServiceLocation` (`customer_v4.xsd:334`) is a distinct surface — a premises ("a real estate location, commonly referred to as premises") that owns the usage points delivering service to it; it is the location around the metering point, not the metering point itself.

## 3. Candidate reuse routes (the ladder, framed not settled)

1. **Reuse as-is** — no existing term carries a pricing-node reference.
2. **Reuse by extension** — begin from `urpx:ServicePointProfile`. Model the changing service-point-to-node association as a *temporally scoped reference* to an externally owned node IRI: a reference property carrying `urpx:hasTemporalScope` on a `urpx:TemporalScope` (`startDateTime` / `endDateTime` matching the ESPI assignment dates), with the closed `ServicePointProfileShape` extended to admit it. This keeps `urpx:Scenario` reusing the profile it already references rather than gaining a parallel input.
3. **Reuse by widening** — not the primary instrument; the profile gains a reference, it does not widen an existing property into wholesale settlement.
4. **Mint (last resort)** — run the reuse ladder against *external* node identifiers before minting anything. The design should not default to a locally minted node-identity class or a bare literal value; a pricing node is owned by an external market operator, so a reference to an external IRI is the reuse-first shape.

## 4. The related-surface question: Green Button `ServiceLocation`

Whether URPX should also represent Green Button's `ServiceLocation` (a premises owning usage points) is part of this reuse pass. Candidates to check before minting: the existing geographic surfaces (`urpx:ServiceTerritory` and the geographic-applicability idiom) and `urpx:ServicePointProfile` itself. This connects to the geographic-applicability work already tracked separately; that spec's idiom should be consulted before any premises term is proposed here.

## 5. What a design pass must settle, and the evidence that settles it

- **Scope.** Admitting a pricing-node reference expands URPX from retail rate-plan evaluation inputs toward wholesale-settlement location. Whether that expansion is in scope is a still-open governance fork the design pass surfaces for a ruling; it is not decided here.
- **Reference shape.** External node IRI plus a temporal scope, versus any alternative; and whether the reference sits on `urpx:ServicePointProfile` alone.
- **`ServiceLocation`.** Whether it reuses existing geography terms or warrants a distinct premises surface.
- **Evidence.** Real producer payloads showing how a service point carries its pricing-node assignment, and the scope ruling above.

## 6. Relationship to the existing open-question task

The open question of whether and where a Green Button pricing-node reference belongs in URPX already has a home: [backlog.task.urpx.ont.2026-08-31.green-button-pnoderef-mapping-question.md](../tasks/backlog.task.urpx.ont.2026-08-31.green-button-pnoderef-mapping-question.md). Its candidate approach — referencing a pricing node from `urpx:ServicePointProfile` as a time-scoped assignment — is the route this spec frames. Rather than open a second, near-identical task, this spec reuses that one as its design-pass home. Two updates to that task would align it with the ruling this spec records — a service point *should* refer to a pricing node (settled for the service-point surface, distinct from the retail-mapping omission), and Green Button's `ServiceLocation` is a related surface to consider — but those edits belong to whoever owns that file.

## 7. What this spec does not do

It authors no reference property, mints no node class, extends no shape, and rules no scope fork. When the design pass runs, it produces the full delivery bundle the repository's specification convention requires — the edit set with before-and-after Turtle, an implementation task, and validating synthetic samples.
