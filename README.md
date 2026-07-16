<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX: Utility Rate Plan Exchange Ontology

**Version 0.3.0** | **W3C-Ready Semantic Standard**

 [![Documentation](https://img.shields.io/badge/Documentation-Complete-green)](documentation/) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

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

---

## Repository Structure

```
urpx/
├── documentation/     # Complete documentation (start at index)
├── ontology/          # Core OWL ontology file
├── shacl/             # SHACL validation constraints
├── skos/              # SKOS mappings to related standards
├── test-cases/        # Test datasets and examples
├── dev-docs/          # Working group development documents
├── scripts/           # Project tooling
```

---

## Versioning Scheme

URPX uses Semantic Versioning: `MAJOR.MINOR.PATCH`.

| Level | What it means for the URPX ontology |
|-------|--------------------------------------|
| **MAJOR** | Breaking changes: class removals, property renames, namespace changes. Removes backward compatibility. |
| **MINOR** | Additive changes: new classes, new properties, new enumeration values. Backward compatible. |
| **PATCH** | Non-breaking corrections: annotation fixes, label typos, SHACL constraint corrections. No structural change. |

---

## License

This **pre-Draft** version is licensed under [Apache 2.0](LICENSE). Intended for working group review purposes only.

Upon acceptance as a Working Group Draft, specification files will transition to the **W3C Document License** and dataset files to **CDLA-Permissive-2.0**. Source code and meta files remain Apache-2.0. See [TRANSITION.md](TRANSITION.md) for the full license transition plan and file-classification manifest.

Contributions are governed by the Developer Certificate of Origin v1.1. See [CONTRIBUTING.md](CONTRIBUTING.md).

Security issues: see [SECURITY.md](SECURITY.md).

---

## Support & Contact

- **Documentation**: [documentation/index.md](documentation/index.md)
- **Bug Reports and Feedback**: [GitHub Issues](https://github.com/urpx-org/urpx/issues)

- **Mailing List**: [URPX Working Group](https://lists.lfenergy.org/g/urpx-wg)

---

*Open standard for utility rate plan data exchange • Built on W3C semantic web standards*
