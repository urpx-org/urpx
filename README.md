<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX: Utility Rate Plan Exchange Ontology

**Version 0.5.1** | **Working Group Draft**, LF Energy Standards and Specifications

 [![Documentation](https://img.shields.io/badge/Documentation-Complete-green)](documentation/) [![License](https://img.shields.io/badge/License-Multiple-blue.svg)](NOTICE)

---

## What is URPX?

The **Utility Rate Plan Exchange (URPX)** ontology is an open standard for exchanging utility rate plan information using semantic web technologies (RDF, OWL, SHACL). URPX enables precise, machine-readable data exchange between utilities, regulators, vendors, and researchers.


## Documentation

**For complete documentation, guides, and technical reference, see [documentation/index.md](documentation/index.md)**

### Quick Links

- **[Overview](documentation/pages/urpx-overview.md)** - Understanding URPX
- **[Tutorial](documentation/pages/urpx-tutorial.md)** - Step-by-step guide
- **[Data Dictionary](documentation/pages/urpx-data-dictionary.md)** - Complete reference
- **[Test Cases](test-cases/index.md)** - Real-world example datasets
- **[FAQ](documentation/pages/urpx-faq.md)** - Frequently asked questions

## Published Namespaces

- Core ontology: `https://urpx.org/ns/ontology/`
- Core SHACL shapes: `https://urpx.org/ns/shacl/core/`
- JSON-LD context artifact: `https://urpx.org/ns/context`

URPX uses slash identifiers so every ontology term and SHACL shape has its own stable web identifier. The namespace site is generated with [Semantic Flow](https://github.com/semantic-flow/weave), which publishes human-readable identifier pages and immutable release-tagged snapshots of the ontology, shapes, and context.

---

## Repository Structure

```
urpx/
├── documentation/     # Complete documentation (start at index)
├── ontology/          # Core OWL ontology file
├── shacl/             # SHACL validation constraints
├── context/           # Published JSON-LD context
├── skos/              # SKOS mappings to related standards
├── test-cases/        # Test datasets and examples
├── scripts/           # Project tooling
```

Working group development documents (tasks, specifications, working reports, roadmaps, review materials, and the worked sample instances that accompany a specification) live in [`urpx-org/urpx-dev`](https://github.com/urpx-org/urpx-dev).

---

## Versioning Scheme

URPX uses Semantic Versioning: `MAJOR.MINOR.PATCH`.

| Level | What it means for the URPX ontology |
|-------|--------------------------------------|
| **MAJOR** | Breaking changes: class removals, property renames, namespace changes. Removes backward compatibility. |
| **MINOR** | Additive changes: new classes, new properties, new enumeration values. Backward compatible. |
| **PATCH** | Non-breaking corrections: annotation fixes, label typos, SHACL constraint corrections. No structural change. |

### Before 1.0

URPX is pre-1.0, and the table above describes the scheme from 1.0 onward. Until then the version digits shift down one place:

| Level | Pre-1.0 meaning |
|-------|-----------------|
| **MAJOR** (`0`) | Stays `0`. The move to `1.0.0` is a deliberate statement that the vocabulary is stable and that breaking changes will carry a major bump from then on. It is not reached by accumulating releases. |
| **MINOR** (`0.x`) | Breaking changes, as described for MAJOR above. A consumer should expect to migrate between minor versions. |
| **PATCH** (`0.x.y`) | Additive and non-breaking changes, as described for MINOR and PATCH above. |

So `v0.2.x` to `v0.3.0` was a breaking release, and a change of the term namespace is a minor bump while the vocabulary is pre-1.0.

Every release states its own compatibility in its release notes. Where a release is breaking, the notes carry a Breaking Changes section and a Migration section.

---

## License

Three licenses apply by file category. Specification files (the ontology, SHACL shapes, SKOS mappings, and documentation pages) are licensed under the W3C Software Notice and Document License (W3C-20150513). Dataset files (test-case data and index files) are licensed under the Community Data License Agreement - Permissive 2.0 (CDLA-Permissive-2.0). Source code and meta files, including this README, are licensed under the Apache License, Version 2.0. See [NOTICE](NOTICE) for the full statement, [LICENSE](LICENSE) for the Apache-2.0 text, and `LICENSES/` for the other two.

**Licensing before and after 2026-09-09.** The project-authored files in this repository were licensed under the Apache License, Version 2.0 from its first release until 2026-09-09; third-party public-record assets have carried their own notice throughout. On that date, following Working Group Draft acceptance, the category licensing above took effect: specification files moved to W3C-20150513 and dataset files to CDLA-Permissive-2.0, while source code and meta files stayed on Apache-2.0. A commit, release, or copy dated before 2026-09-09 is Apache-2.0 for every project-authored file. See [TRANSITION.md](TRANSITION.md) for the completed transition record and the file-classification manifest.

Contributions are governed by the Developer Certificate of Origin v1.1. See [CONTRIBUTING.md](CONTRIBUTING.md).

Security issues: see [SECURITY.md](SECURITY.md).

---

## Support & Contact

- **Documentation**: [documentation/index.md](documentation/index.md)
- **Bug Reports and Feedback**: [GitHub Issues](https://github.com/urpx-org/urpx/issues)

- **Mailing List**: [URPX Working Group](https://lists.lfenergy.org/g/urpx-wg)

---

*Open standard for utility rate plan data exchange • Built on W3C semantic web standards*
