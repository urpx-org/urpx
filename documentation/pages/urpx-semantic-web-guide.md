<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- SPDX-Transition-License-After-Draft: W3C-20231102 -->
<!-- Comment: Will transition to W3C Document License upon Working Group Draft acceptance. See TRANSITION.md. -->

---
site_category: learning
site_id: semantic-web-guide
site_title: "Semantic Web Guide"
site_position: 1
---

# Semantic Web Guide for URPX

**Version:** 0.4.0 (Pre-draft) 
**Last Updated:** 2026-07-07

**A beginner-friendly introduction to semantic web technologies for the URPX working group**

[← Back to Index](/docs/getting-started/overview)

---

## Table of Contents

1. [Why Semantic Web for Rate Plan Data?](#why-semantic-web-for-rate-plan-data)
2. [Semantic Web 101](#semantic-web-101)
3. [Core Technologies](#core-technologies)
4. [Learning Resources](#learning-resources)

---

## Why Semantic Web for Rate Plan Data?

### The Physical-World-to-Bill Connection

Rate plan data bridges two worlds:
- **Physical World**: Kilowatt-hours consumed, peak demand measured, time periods tracked
- **Financial World**: Line items on bills, charges calculated, costs allocated

This connection requires **rich semantics** to accurately represent:
- Conditions (time-of-use, seasonal variations)
- Eligibility rules (customer qualifications, program enrollment)
- Geographic applicability (service territories, jurisdictions)
- Regulatory context (tariff filings, approval dates)

Traditional flat file formats (CSV, basic JSON) lack the expressiveness needed for these complex relationships. Semantic web technologies provide the structure and vocabulary to capture this complexity while maintaining machine-readability.


### AI and Machine Learning Benefits

Semantically-rich, interconnected data dramatically improves AI/ML applications:

**Intelligent Rate Plan Comparison**
- LLMs can understand rate plan structure relationships
- Contextual recommendations based on usage patterns
- Automated tariff analysis across utilities

**Customer-Specific Optimization**
- Machine learning on knowledge graphs
- Cost optimization considering time-of-use and tiers
- Personalized rate plan recommendations

**Regulatory Compliance**
- Automated validation of tariff structures
- Identification of compliance issues
- Cross-jurisdictional analysis

**Market Analysis**
- Pattern recognition across rate plans
- Regional pricing trend identification
- Competitive rate plan structure analysis

---

## Semantic Web 101

### What is the Semantic Web?

The semantic web represents data as **interconnected graphs** of meaning, not just isolated records.

**Traditional Approach (Tables/JSON):**
```json
{
  "price_id": "PRC-001",
  "type": "energy",
  "price": 0.12,
  "unit": "kWh"
}
```

**Semantic Web Approach (Linked Data with JSON-LD):**
```json
{
  "@context": {
    "urpx": "https://urpx-org.github.io/urpx/ontology/",
    "ex": "https://example.com/"
  },
  "@id": "ex:PRC-001",
  "@type": "urpx:Price",
  "urpx:chargeType": {"@id": "urpx:usageCharge"},
  "urpx:chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "urpx:unitPrice": 0.12,
  "urpx:hasMetricSpecification": {
    "urpx:commodity": {"@id": "urpx:electricity"},
    "urpx:measurementKind": {"@id": "urpx:energy"},
    "urpx:unitOfMeasure": {"@id": "urpx:kWh"}
  }
}
```

Notice how the semantic version explicitly **links** the charge to:
- Its type via IRI reference (`urpx:usageCharge`)
- Its measurement specification with commodity, kind, and unit
- All values are dereferenceable IRIs that machines can follow

Machines can follow these links to understand relationships and answer complex questions.

### RDF: The Foundation

**RDF (Resource Description Framework)** expresses data as **triples**:

```
Subject → Predicate → Object
```

Every statement has three parts:

**Example 1: Simple Property**
```
:PRC-001 → urpx:unitPrice → 0.12
(This price) (has unit price) (0.12)
```

**Example 2: Relationship**
```
:VERSION-2025 → urpx:forRatePlan → :RES-TOU-2025
(This version snapshot) (is for rate plan) (RES-TOU-2025)
```

**Example 3: Type Declaration**
```
:PRC-001 → rdf:type → urpx:Price
(PRC-001) (is a) (Price)
```

### Graph Visualization

A simple rate plan forms an interconnected graph.

This graph structure enables:
- **Navigation**: Follow links to find related data
- **Inference**: Deduce new facts from relationships
- **Validation**: Check structural constraints
- **Querying**: Ask complex questions across the graph

### Benefits Over Flat Formats

**1. Explicit Relationships**
- No ambiguity about how data connects
- Machine-understandable semantics
- Self-documenting structure

**2. Extensibility**
- Add new properties without breaking existing data
- Multiple standards can reference the same entities
- Modular ontology design

**3. Integration**
- Different systems can map to the same concepts
- Cross-standard queries possible
- Reduces integration complexity

**4. Validation**
- Structural constraints enforced
- Data quality rules automated
- Consistency across datasets

---

## Core Technologies

### Ontologies (OWL)

**What They Are**

An ontology is a **formal specification** of a domain's concepts and relationships. Think of it as a "data dictionary with superpowers."

**URPX Ontology Structure:**
- **Classes**: RatePlan, RatePlanVersion, PricingModel, Price, TOUSchedule, Season, Organization
- **Properties**: hasPrice, chargeType, unitPrice, effectiveDate, forRatePlan
- **Relationships**: Prices belong to PriceSets, and PriceSets belong to RatePlanVersions through the Prices container; versions link back to their plan identity via forRatePlan
- **Constraints**: Every RatePlanVersion must name its plan (forRatePlan) and declare a CoverageClaim

**Why We Use OWL:**
- **W3C Standard**: Globally recognized and widely supported
- **Reasoning**: Machines can infer new facts from existing data
- **Validation**: Structural constraints ensure data quality
- **Interoperability**: Common vocabulary across systems

**Example OWL Definition:**
```turtle
urpx:Price a owl:Class ;
    rdfs:label "Price" ;
    skos:definition "An individual pricing component within a rate plan".

urpx:chargeType a owl:ObjectProperty ;
    rdfs:label "Charge Type"@en ;
    dcterms:description "Identifies the specific type of charge implementation. Multiple chargeType values can be assigned to a single charge."@en ;
    rdfs:comment "Specific implementation type of a charge"@en ;
    rdfs:domain [ a owl:Class ;
            owl:unionOf ( urpx:Price urpx:PriceDefinition urpx:PriceSet ) ] ;
    rdfs:range urpx:ChargeTypeValue .
```

### JSON-LD

**JSON for Developers, RDF for Machines**

JSON-LD is **JSON with a semantic layer**. Developers work with familiar JSON syntax, while the `@context` provides RDF semantics.

**Basic Charge Example:**
```json
{
  "@context": {
    "urpx": "https://urpx-org.github.io/urpx/ontology/",
    "ex": "https://example.com/"
  },
  "@id": "ex:PRC-001",
  "@type": "urpx:Price",
  "urpx:name": "Summer Energy Price",
  "urpx:chargeType": {"@id": "urpx:usageCharge"},
  "urpx:chargeCategory": {"@id": "urpx:auxiliaryCharge"},
  "urpx:unitPrice": 0.12,
  "urpx:priceCurrency": "USD",
  "urpx:hasMetricSpecification": {
    "urpx:commodity": {"@id": "urpx:electricity"},
    "urpx:measurementKind": {"@id": "urpx:energy"},
    "urpx:unitOfMeasure": {"@id": "urpx:kWh"}
  }
}
```

**Price Set Alternatives with Profile-Alternative References:**

This example demonstrates the current URPX pattern in which a `PriceSetAlternative` links to a reusable `ProfileAlternative` by IRI:

```json
{
  "@context": {
    "urpx": "https://urpx-org.github.io/urpx/ontology/",
    "ex": "https://example.com/"
  },
  "@graph": [
    {
      "@id": "ex:zone-h-secondary",
      "@type": "urpx:ProfileAlternative",
      "urpx:name": "Zone H - Secondary Voltage Alternative",
      "urpx:hasConditionExpression": {
        "@id": "ex:condition-expression-zone-h-secondary"
      }
    },
    {
      "@id": "ex:charges-zone-h-secondary",
      "@type": "urpx:PriceSetAlternative",
      "urpx:referencesProfileAlternative": {"@id": "ex:zone-h-secondary"},
      "urpx:name": "Zone H - Secondary Voltage",
      "urpx:hasPrice": [
        {"@id": "ex:energy-charge-zone-h-secondary"},
        {"@id": "ex:demand-charge-zone-h-secondary"}
      ]
    }
  ]
}
```

The `referencesProfileAlternative` property uses an **IRI reference** (`ex:zone-h-secondary`) to link the price set alternative to its profile alternative. The `ProfileAlternative` points to its defining `ConditionExpression` by IRI instead of embedding the full expression graph inline. This enables:
- Dereferenceable links for metadata lookup
- Clean separation between alternative metadata and charges
- Reusable alternative resources across multiple rate plans
- Required attachment of `hasConditionExpression` on the referenced `ProfileAlternative`

**The @context Explained:**
- Maps JSON keys to RDF predicates
- Defines namespace prefixes
- Specifies data types
- Converts JSON to RDF triples automatically

**Why JSON-LD:**
- **Developer Friendly**: Looks like regular JSON
- **Tool Support**: Excellent library ecosystem
- **Compatibility**: Standard JSON tools work
- **Semantic Power**: Full RDF capabilities when needed

### SHACL (Shapes Constraint Language)

**Data Validation and Quality**

SHACL defines **shapes** that data must conform to. Think of it as "JSON Schema for RDF."

**Example SHACL Shape:**
```turtle
urpx-shacl:PriceShape a sh:NodeShape ;
    sh:targetClass urpx:Price ;
    sh:property [
        sh:path urpx:chargeType ;
        sh:node urpx-shacl:ChargeTypeValueShape ;
        sh:minCount 0 ;
    ] .
```

**URPX SHACL Validation:**
- **Structural Rules**: Required properties, cardinality constraints
- **Data Type Rules**: Decimal prices, date formats, string patterns
- **Business Rules**: Charge combination matrices, applicability logic
- **Relationship Rules**: References must point to valid entities

**How Validation Works:**
1. Load your URPX data (JSON-LD or Turtle)
2. Load URPX SHACL shapes
3. Run SHACL validator
4. Receive validation report with any errors

**Benefits:**
- **Automatic Quality Checks**: Catch errors before data exchange
- **Clear Error Messages**: Know exactly what's wrong and where
- **Specification Enforcement**: Ensure conformance to standard
- **Documentation**: Shapes document requirements

### SPARQL

**Querying Graph Data**

SPARQL is the "SQL for RDF" - a query language for semantic data.

**Example 1: Find All Prices in a Rate Plan**
```sparql
PREFIX urpx: <https://urpx-org.github.io/urpx/ontology/>

SELECT ?price ?name ?unitPrice
WHERE {
  ?ratePlan urpx:ratePlanUniqueIdentifier "RES-TOU-2025" .
  ?version  urpx:forRatePlan ?ratePlan ;
            urpx:hasPrices/urpx:hasPriceSet/urpx:hasPrice ?price .
  ?price    urpx:name ?name ;
            urpx:unitPrice ?unitPrice .
}
```

Note the query starts from the version snapshot: versions point at their plan via `forRatePlan`, so the plan is found by identifier and the versions are found by their link back to it.

**SPARQL Use Cases:**
- **Rate Comparison**: Find best rate plans for specific usage patterns
- **Trend Analysis**: Track price changes over time
- **Compliance Checking**: Verify regulatory requirements
- **Data Discovery**: Explore available rate plans

**Benefits:**
- **Powerful Queries**: Navigate complex graph relationships
- **Standardized**: Works across any RDF data source
- **Flexible**: Can combine data from multiple sources
- **Expressive**: Ask questions impossible in SQL

---

## Learning Resources

### RDF & Linked Data

**Official Specifications:**
- [W3C RDF Primer](https://www.w3.org/TR/rdf11-primer/) - Comprehensive introduction to RDF concepts
- [Linked Data Principles](https://www.w3.org/DesignIssues/LinkedData.html) - Tim Berners-Lee's original vision

**Video Tutorials:**
- [Linked Data Basics](https://www.youtube.com/watch?v=4x_xzT5eF5Q) - Tim Berners-Lee's TED talk (16 min)
- [RDF in 30 Minutes](https://www.youtube.com/watch?v=zeYfT1cNKQg) - Cambridge Semantics tutorial
- [Understanding the Semantic Web](https://www.youtube.com/watch?v=OGg8A2zfWKg) - Ivan Herman's introduction

**Interactive Tools:**
- [RDF Playground](http://rdfplayground.dcc.uchile.cl/) - Experiment with RDF triples
- [Linked Data Visualizer](http://www.visualdataweb.de/webvowl/) - See ontologies as graphs

### JSON-LD

**Official Resources:**
- [W3C JSON-LD Specification](https://www.w3.org/TR/json-ld11/) - Full standard
- [JSON-LD Playground](https://json-ld.org/playground/) - Interactive converter and validator

**Video Tutorials:**
- [JSON-LD Introduction](https://www.youtube.com/watch?v=vioCbTo3C-4) - Gregg Kellogg's overview (30 min)
- [JSON-LD for Web Developers](https://www.youtube.com/watch?v=UmvWk_TQ30A) - Google Developers

**Practical Guides:**
- [JSON-LD Best Practices](https://w3c.github.io/json-ld-bp/) - W3C working group notes
- [Schema.org with JSON-LD](https://schema.org/docs/gs.html) - Real-world examples

### Ontologies (OWL)

**Official Specifications:**
- [OWL 2 Primer](https://www.w3.org/TR/owl2-primer/) - W3C official guide
- [OWL Web Ontology Language Guide](https://www.w3.org/TR/owl-guide/) - Comprehensive reference

**Video Tutorials:**
- [Protégé Tutorial](https://www.youtube.com/watch?v=v4ZxJN8MLk4) - Stanford ontology editor introduction (45 min)
- [Building Ontologies](https://www.coursera.org/lecture/web-semantique/ontologies-introduction-VV7hO) - Coursera course excerpt

**Tools:**
- [Protégé](https://protege.stanford.edu/) - Popular ontology editor from Stanford
- [TopBraid Composer](https://www.topquadrant.com/products/topbraid-composer/) - Enterprise ontology development

### SHACL

**Official Resources:**
- [SHACL Specification](https://www.w3.org/TR/shacl/) - W3C standard
- [SHACL Advanced Features](https://www.w3.org/TR/shacl-af/) - Advanced constraint types

**Video Tutorials:**
- [SHACL Tutorial](https://www.youtube.com/watch?v=hQ2LVT6R4Gk) - Holger Knublauch's overview (20 min)
- [Data Validation with SHACL](https://www.youtube.com/watch?v=lJjpWw4w9wc) - TopQuadrant webinar

**Interactive Tools:**
- [SHACL Playground](https://shacl.org/playground/) - Test validation online
- [SHACL Validator](https://www.itb.ec.europa.eu/shacl/any/upload) - EU validation service

### SPARQL

**Official Resources:**
- [SPARQL 1.1 Query Language](https://www.w3.org/TR/sparql11-query/) - W3C specification
- [SPARQL Tutorial](https://www.w3.org/2009/Talks/0615-qbe/) - W3C interactive guide

**Video Tutorials:**
- [SPARQL in 11 Minutes](https://www.youtube.com/watch?v=FvGndkpa4K0) - Quick video introduction
- [Advanced SPARQL](https://www.youtube.com/watch?v=qSJhXRfDDq0) - Bob DuCharme's tutorial

**Reference Materials:**
- [SPARQL Cheat Sheet](https://www.iro.umontreal.ca/~lapalme/ift6282/sparql-1_1-cheat-sheet.pdf) - Quick reference
- [SPARQL by Example](https://www.w3.org/2009/Talks/0615-SanJose-tutorial/Slides.pdf) - W3C tutorial slides

**Query Endpoints:**
- [DBpedia SPARQL](https://dbpedia.org/sparql) - Practice on real data
- [Wikidata Query Service](https://query.wikidata.org/) - User-friendly interface

### Knowledge Graphs

**General Resources:**
- [Knowledge Graphs 101](https://www.youtube.com/watch?v=Fa1sxrAZjmM) - Google's introduction (12 min)
- [Knowledge Graphs](https://kgbook.org/) - Free online textbook
- [Semantic Web Company Resources](https://semantic-web.com/knowledge-graphs-resources/) - Comprehensive guides

**Industry Applications:**
- [Google Knowledge Graph](https://blog.google/products/search/introducing-knowledge-graph-things-not/) - Real-world example
- [Enterprise Knowledge Graphs](https://www.youtube.com/watch?v=mmUrKQT5h5g) - Industry use cases

### Books

**For Beginners:**
- "Learning SPARQL" by Bob DuCharme - Practical query guide
- "Semantic Web for the Working Ontologist" by Dean Allemang & James Hendler - Industry standard

**For Advanced Users:**
- "Validating RDF Data" by Jose Labra Gayo et al. - SHACL deep dive
- "Linked Data: Evolving the Web into a Global Data Space" by Tom Heath & Christian Bizer

### Communities

**Discussion Forums:**
- [W3C Semantic Web Interest Group](https://www.w3.org/community/swig/) - Official community
- [Semantic Web Subreddit](https://www.reddit.com/r/semanticweb/) - Active discussion
- [Stack Overflow](https://stackoverflow.com/questions/tagged/semantic-web) - Q&A

**Conferences:**
- [ISWC (International Semantic Web Conference)](https://iswc2024.semanticweb.org/) - Premier academic conference
- [Knowledge Graph Conference](https://www.knowledgegraph.tech/) - Industry-focused

---

## Next Steps

### For Working Group Members

1. **Start Simple**: Review the RDF Primer and try the JSON-LD Playground
2. **Hands-On Practice**: Work through URPX examples in the [Tutorial](urpx-tutorial.md)
3. **Ask Questions**: Use GitHub Discussions in [urpx-org repositories](https://github.com/urpx-org)
4. **Contribute**: Test with real rate plan data and provide feedback

### Deeper Learning Path

**Week 1-2: Foundations**
- Watch introductory videos on RDF and Linked Data
- Experiment with JSON-LD Playground
- Read W3C RDF Primer

**Week 3-4: URPX Specifics**
- Study URPX ontology structure
- Work through tutorial examples
- Try SHACL validation on sample data

**Week 5-6: Querying**
- Learn SPARQL basics
- Practice queries on URPX data
- Explore DBpedia for broader context

**Week 7-8: Advanced Topics**
- Review ontology design patterns
- Understand SHACL advanced features
- Contribute to URPX development

---


[← Back to Index](/docs/getting-started/overview) | [URPX Interoperability Guide →](urpx-interoperability.md)
