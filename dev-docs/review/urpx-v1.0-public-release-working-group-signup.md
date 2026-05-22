
# URPX v0.2.0 pre-draft(AKA v1.0.0 draft) Release: Working Group Review

## URPX Launch Actions Steps and Timeline:
1. Confirm voting capability with test vote #2 
2. Accept invitation to urpx-committers Github team
3. Tue 2026-05-26   URPX Working Group Meeting
4. Wed-Fri 2026-05-27, 28, and 29:  URPX Review office hours 12-1pm US ET
    zoom: https://us02web.zoom.us/j/87891641890?pwd=gRyHcOJCYzRS7NliCcWxpcagy1tpg5.1&jst=2
5. 2026-06-02 First formal vote to accept v0.2.x
6. Chair transforms materials to W3C license
7. Chair updates urpx.materials
8. Second formal vote after transform to accept v1.0.0 and go public with standard and urpx.org website

## URPX Launch Materials for Review
Candidate URPX v0.2.0 materials are ready for working group review:

Materials to made public upon acceptance of the V1.0.0 draft URPX standard
### Main URPX standard repository
  https://github.com/urpx-org/urpx
    
- It's private now but after working group acceptance this repository will be made public. 
- Where to comment: https://github.com/urpx-org/urpx/pull/39 v0.2.0 review branch open for committee feedback/proposed updates prior to converting this to W3C/CDLA  URPX v1.0.0. 
- How to comment: inline or with general review notes
### urpx.org website
Hosted via gh pages: https://legendary-adventure-2qlokyv.pages.github.io this site has a copy of the documentation materials available for each version and the "Next" version on main. 


## Review as desired: URPX.org build repositories
- https://github.com/urpx-org/urpx-website: production urpx.org content, currently only available when signed into github with the user associated with your urpx access. Once we go public with the urpx repo we will make these github pages public and will request LF energy to have urpx.org point to these GH pages.

- https://github.com/urpx-org/urpx-website-staging LF Energy internal "working group dev repo" with automated documentation maintenance workflows and docusaurus site published on GH pages. 
    - Let us know if you'd like write access to help work on automated documentation and diagramming workflows
    - We set up github actions for update automation workflows including drift detection to run
    - This repositpry will remain internal to LF Energy with limited working group web admin access, with select working group members interested in contributing to urpx.org updates/maintenance having approval/write access.

Sign up by entering your first name in an open slot. Up to 4 reviewers per item.

---

## 1. Ontology, SHACL & Data Dictionary

Organized by data dictionary section. Each group covers the same slice of the model across all three artifacts.

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| **Group 1 — Core Rate Plan Structure** | | | | |
| *URPXDocument · RatePlan · RatePlanVersion · RatePlanModifier · RatePlanModifierVersion · AccountServiceAgreement · PlanElements · BillingModel · BillingCycle · Ledger · ServiceTier · ServiceTiers* 

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Ontology | | | | |
| SHACL | | | | |
| Data Dictionary || | | |

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| **Group 2 — Pricing & Measurement** | | | | |
| *Prices · PriceSet · PriceSetAlternative · PriceSetAlternatives · Price · PriceDefinition · PriceSummary · PriceUpdateRule · ApplicabilityConstraint · DimensionValuePair · MetricInput · MetricSpecification · CalculationMethod* 
| Ontology | | | | |
| SHACL | | | | |
| Data Dictionary || | | |

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| **Group 3 — Time, Conditions & Eligibility** | | | | |
| *Season · TOUSchedule · TOUTier · TOUPeriod · TimeBracket · HolidayCalendar · Holiday · LocationDataSet · DynamicPricing · EligibilityRule · ApplicabilityRule · ApplicabilityGroup · Condition* | | | | |
| Ontology | | | | |
| SHACL | | | | |
| Data Dictionary || | | |

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| **Group 4 — Parties, Geography, Documents & Enumerations** | | | | |
| *Profile · CustomerProfile · ServicePointProfile · ProfileAlternative/s · AlternativeDimension/s · ServiceClass · RateGroup · ProgramEnrollment · PriorRatePlan · DistributedEnergyResource · Organization hierarchy · Geographic entities · Document types · All enumerations* | | | | |
| Ontology | | | | |
| SHACL | | | | |
| Data Dictionary || | | |

---

## 2. Documentation Pages

### Getting Started

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Overview | | | | |
| Tutorial |Don Jackson | | | |
| Test Cases |Don Jackson| | | |
| FAQ |Bruce Nordman| | | |

### Technical Reference

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Syntax Guidelines |David Richardson| | | |
| API Specification |Dai Lin| | | |
| Quality Assurance |Una Smithsimon & Klaartje De Schepper| | | |

### Advanced Topics

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Complex Condition Modeling |David Richardson| | | |
| Design Principles | | | | |
| Design Decisions 001–040 | | | | |
| Design Decisions 041–080 | | | | |

### Learning & Education

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Semantic Web Guide |David Richardson| | | |
| Diagram Index || | | |

### Integration & Standards

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| Interoperability & Integration | | | | |
| Internationalization Guide | | | | |

### Examples

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| PGE E-Elec 2026-01-01 |Don Jackson| | | |

---

## 3. Rest of /urpx Repo

| | Reviewer 1 | Reviewer 2 | Reviewer 3 | Reviewer 4 |
|---|---|---|---|---|
| **Mapping Files** | | | | |
| Green Button Mappings |Don Coffin| | | |
| LF Energy Mappings | | | | |
| Schema Mapping | | | | |
| **Test Case Data** | | | | |
| PGE E-Elec 2026-01-01 JSON-LD | | | | |
| Charge Taxonomy | | | | |
| **Release Notes** | | | | |
| v0.2.0 Release Notes | | | | |
| v0.1.2 Release Notes | | | | |
| v0.1.1 Release Notes | | | | |
| **Repository Meta** | | | | |
| README | | | | |
| CHANGELOG | | | | |
