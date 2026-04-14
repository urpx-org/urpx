# Diagrams for LF Energy Transfer

**Version:** 0.2.0 (Pre-draft) 
**Date:** January 26, 2026  
**Purpose:** Documentation diagrams for URPX working group review

---

## Diagrams Used in Documentation Pages

### Core Architecture

1. **urpx-core-schema-diagram.mmd + .svg**
   - **Used in:** urpx-overview.md
   - **Shows:** Complete URPX architecture with document hierarchy, rate plan structure, charges container, plan elements, eligibility rules, and standards alignment
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

2. **urpx-price-structure-diagram.mmd + .svg**
   - **Used in:** urpx-data-dictionary.md (planned)
   - **Shows:** Prices → PriceSet → Price hierarchy with properties and examples
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

3. **urpx-tou-structure-diagram.mmd + .svg**
   - **Used in:** urpx-data-dictionary.md (planned)
   - **Shows:** TOUSchedule → TOUTier → TOUPeriod → TimeBracket hierarchy
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

### Temporal & Versioning

4. **urpx-temporal-versioning-diagram.mmd + .svg**
   - **Used in:** urpx-overview.md
   - **Shows:** Rate plan version timeline, version properties, change events, and regulatory tracking
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

### Rules & Eligibility

5. **urpx-rules-eligibility-diagram.mmd + .svg**
   - **Used in:** urpx-overview.md
   - **Shows:** Eligibility patterns with customer and service point profiles
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

6. **urpx-charge-types-diagram.mmd + .svg**
   - **Used in:** urpx-overview.md
   - **Shows:** Charge type taxonomy, commodities, units of measure, and standards compliance
   - **Format:** Mermaid + SVG export
   - **Colors:** Paul Tol 2.7 Light scheme

### Educational (Mermaid only - no SVG needed)

7. **urpx-rate-plan-graph.mmd**
   - **Used in:** urpx-semantic-web-guide.md
   - **Shows:** Knowledge graph representation of rate plan data
   - **Format:** Mermaid only

8. **urpx-rdf-triple-example.mmd**
   - **Used in:** urpx-semantic-web-guide.md
   - **Shows:** RDF triple basics and structure
   - **Format:** Mermaid only

9. **urpx-sparql-query-visual.mmd**
   - **Used in:** urpx-semantic-web-guide.md
   - **Shows:** SPARQL query patterns and examples
   - **Format:** Mermaid only

---

## SVG Export Instructions

For diagrams 1-6, export SVGs using:

```bash
# Using Mermaid CLI (if available)
mmdc -i <diagram>.mmd -o <diagram>.svg -t dark -b transparent

# Or use online tool: https://mermaid.live/
# Copy .mmd content, render, and export as SVG
```

---

## Color Scheme

All diagrams use **Paul Tol 2.7 Light** color palette for consistency and accessibility:

- **Light Blue** `#77AADD` - Primary classes, documents
- **Cyan** `#99DDFF` - Secondary elements, components
- **Teal** `#44BB99` - Containers, active elements
- **Yellow** `#EEDD88` - Data, details
- **Peach** `#EE8866` - Specialized, standards
- **Pink** `#FFAABB` - Core content, profiles

---

## Total Diagram Count

- **9 diagrams total**
- **6 with SVG exports** (diagrams 1-6)
- **3 Mermaid-only** (diagrams 7-9)

---

*Last Updated: January 26, 2026*
