<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# Security Policy

## Reporting a security issue

If you believe you have found a security issue in URPX, please do
**not** open a public GitHub issue. Instead, report it privately so
maintainers can triage and coordinate disclosure responsibly.

Report to: `security@urpx.org`

When reporting, please include:

- A description of the issue.
- The commit hash, tag, or file path at which you observed it.
- Steps to reproduce, including any sample data or queries.
- The potential impact as you understand it.
- Any suggested mitigation, if you have one.

## Response timeline

We aim to:

- **Acknowledge** your report within **2 business days**.
- **Assess and triage** within **5 business days**.
- **Provide a status update** at least every **14 calendar days** until
  the issue is resolved or a decision is made not to act on it.

Actual timelines may vary depending on the severity and complexity of
the issue.

## Scope

URPX is a specification repository: RDF/OWL ontology files, SHACL
shapes, SKOS mappings, documentation, test data, and supporting
artifacts. Relevant security concerns may include:

- **Malformed or malicious test data** that could exploit downstream
  RDF parsers or SHACL validators.
- **Misleading specification text** that could cause downstream
  implementations to mishandle rate plan data in ways that affect
  billing or grid decisions.
- **Supply-chain issues** in the tooling used to generate artifacts
  in this repository.

Report concerns in any of these categories through the private channel
above.

## Out of scope

- Issues in third-party software that URPX merely references (report
  those to their upstream maintainers).
- Opinions about the design of the specification itself (use the
  Working Group mailing list or GitHub Issues).

## Credits

We credit reporters of validated security issues in release notes
unless the reporter requests otherwise.
