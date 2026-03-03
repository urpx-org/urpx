### Frequently Asked Questions

**Q: What is a semantic web standard?**

A semantic web standard uses RDF (Resource Description Framework) to express data as interconnected graphs rather than flat tables or documents. This enables machines to understand relationships and context, not just data values.

**Q: Do I need to learn RDF to use URPX?**

No. URPX uses JSON-LD, which looks like regular JSON. The ontology and SHACL do use RDF. RDF semantics are well documented and handled by standard libraries. While manual parsing is possible, libraries automate semantic processing for optimal performance. Developers work with familiar JSON; semantic interoperability happens through library integration.

**Q: How does URPX relate to OpenEI's URDB?**

URPX builds on [OpenEI's](https://openei.org) pioneering work in utility rate plan data accessibility. While OpenEI provides an excellent JSON format and comprehensive rate plan database, URPX adds:
- Formal ontology (machine-readable definitions)
- SHACL validation (automatic quality checks)
- SPARQL queries (powerful data analysis)
- Standards alignment (works with Green Button, CIM, etc.)

Both projects share the goal of making rate plan data more accessible. URPX can consume summary OpenEI charges data and align it with detailed URPX charges and rich semantic metadata.

**Q: What's the difference between a tariff, rate plan, and rate?**

- **Tariff**: A regulatory document (tariff book) that may contain multiple rate plans
- **Rate Plan**: A complete package with all parameters needed to calculate customer cost (charges, schedules, eligibility rules)
- **Rate**: A single price value (e.g., $0.12/kWh) - incomplete without the full rate plan context

Rate plan data comes from multiple sources: tariff books (primary), tariff statements, supplements, and addenda. URPX captures all these document types with specific classes (TariffBookDocument, TariffStatementDocument, etc.).

**Q: Can URPX work with my existing systems?**

Yes. URPX will provide mapping templates for major standards (Green Button, OpenADR, CIM). You can also create custom mappings for proprietary formats.

**Q: What tools do I need to work with URPX?**

- JSON-LD processor (many languages)
- SHACL validator (for data quality)
- SPARQL endpoint (optional, for queries)
- Standard development tools (your IDE, version control)

**Q: What is the current status of URPX?**

URPX v0.1.1 is currently in draft review stage. The working group is actively refining the ontology and validation rules. You can follow progress and contribute at the [urpx-org GitHub organization](https://github.com/urpx-org), where all repositories are publicly available:
- **urpx** - Core ontology and specifications
- **urpx-wg-admin** - Working group administration
- **urpx-tools** - Validation and transformation utilities

**Q: How can I participate in URPX development?**

Join the working group via [urpx-org on GitHub](https://github.com/urpx-org). You can contribute through:
- Reviewing and commenting on ontology designs
- Testing with real-world rate plan data
- Creating mappings for additional standards
- Improving documentation and examples

### Terminology

#### Rate Plan vs. Rate vs. Tariff

Throughout URPX documentation and the ontology, the term **"rate plan"** is used as the standardized terminology rather than just "rate". This distinction is deliberate and important:

**Rate Plan** (URPX Standardized Term):
- A complete package containing **all parameters** needed to calculate customer cost
- Includes: prices, time-of-use schedules, service tiers, seasonal variations, eligibility rules, and applicability conditions
- Ensures **completeness** - no guessing about what data inputs are required for cost calculation
- Everything contained in one semantic unit for reliable billing and analysis

**Rate** (Ambiguous - Avoided):
- Could refer to a single rate value for a single price (e.g., $0.15/kWh)
- Could refer to a pricing tier within a time-of-use schedule
- Could refer to unit price without complete context
- Lacks completeness assurance for full cost calculation

**Examples:**

✅ **Correct Usage:** "The residential rate plan includes energy prices, demand prices, and time-of-use periods"

❌ **Ambiguous Usage:** "The residential rate is $0.15/kWh" (incomplete - missing TOU periods, tiers, and other prices)

**Relationship to "Tariff":**
URPX uses "tariff" for formal regulatory documents (tariff books, tariff statements, supplements, addenda), while "rate plan" refers to the semantic structure containing complete pricing information. A tariff book may contain multiple rate plans, and URPX captures all document types with specific classes (TariffBookDocument, TariffStatementDocument, etc.).

**Ontology Alignment:**
- `RatePlan` class = master template across time
- `RatePlanVersion` class = temporal instance with specific charges and schedules
- Clear terminology ensures semantic precision for standards review

This standardized terminology provides clarity for implementers, ensures data exchange completeness, and aligns with semantic web precision requirements for W3C standards compliance.