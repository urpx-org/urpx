---
id: reporturpxont20260810hashnamespacechange
title: "Superseded proposal — hash namespace for URPX term identifiers"
desc: "Historical proposal for a hash namespace. Superseded before v0.5.0 by the adopted urpx.org slash namespace and Semantic Flow directory-per-identifier publication."
updated: 1786320000000
created: 1786320000000
---

# Superseded proposal — hash namespace for URPX term identifiers

**Status: superseded.** This report preserves the hash-namespace proposal considered in August 2026; it is not current implementation guidance. URPX v0.5.0 instead adopted slash identifiers under `https://urpx.org/ns/ontology/` and `https://urpx.org/ns/shacl/core/`. The directory-per-identifier site is generated with [Semantic Flow](https://github.com/semantic-flow/weave), with GitHub Pages as the static host and `urpx.org` as the canonical domain. `Accept`-header content negotiation is not required.

Current release and publication instructions are in [the release runbook](../release-runbook.md) and [the v0.5.0 release notes](../../documentation/pages/urpx-release-notes-v0.5.0.md). Everything below is the preserved superseded proposal.

**The change.** URPX term identifiers become fragments of a single vocabulary document — `https://urpx.org/ns/urpx#RatePlan` — instead of one web resource per term, `https://urpx-org.github.io/urpx/ontology/RatePlan/`. It lands at v0.4.0, in the same release that moves the identifiers to urpx.org, so there is one identifier change rather than two. The model does not change: same classes, same properties, same local names.

This note is here so the reasoning is on the record and open to review. Comments are welcome on this report or as a GitHub issue, and they are most useful before the v0.4.0 cutover work starts.

## What changes

| | Today | At v0.4.0 |
|---|---|---|
| Prefix declaration | `@prefix urpx: <https://urpx-org.github.io/urpx/ontology/> .` | `@prefix urpx: <https://urpx.org/ns/urpx#> .` |
| A class | `…/ontology/RatePlan/` | `https://urpx.org/ns/urpx#RatePlan` |
| A property | `…/ontology/hasIdentifier/` | `https://urpx.org/ns/urpx#hasIdentifier` |
| Published form | a directory per term, each holding an HTML page and a Turtle file | one vocabulary document, fetched whole |

Two changes are bundled here and worth separating. The **host** moves from GitHub Pages to urpx.org, which is already planned for v0.4.0. The **form** of the identifier is what this note is about: whether a term is its own web resource or a fragment of one document.

## What does not change

- Every class, property, and enumeration member keeps its local name. `RatePlan` stays `RatePlan`.
- The `urpx:` prefix stays `urpx:`, so anything written with the prefix rather than the full identifier reads the same.
- The data dictionary remains the human-readable face of the vocabulary. It also becomes the page a browser lands on when it follows a term identifier, with each term reachable at its own anchor.

## The case for hash

- **The vocabulary is small enough to serve whole.** About half a megabyte in total — 356 KB of ontology and 180 KB of shapes — covering 291 classes, 197 object properties, 149 datatype properties, and the code-list members alongside them. One request returns all of it.
- **It is what the W3C recommends at this size.** *Best Practice Recipes for Publishing RDF Vocabularies* names the hash namespace as the pattern for a small-to-medium vocabulary served in a single web access, and it is the one pattern that needs no server configuration.
- **Content negotiation reduces to one document.** A browser asking for the namespace gets an HTML page; a machine follows the Turtle link from it. That has to work once, for one document, instead of once for each of a thousand-odd terms.
- **It matches the vocabularies URPX aligns to.** SKOS, OWL, RDFS, SHACL, PROV, and Web Annotation are all hash namespaces. URPX is currently the outlier among its own imports.
- **It is the form a consuming tool wants.** An RDF library, a validator, or a language model asked to work with URPX gets the whole vocabulary in one fetch rather than crawling term by term.
- **Publication becomes a handful of files** rather than a directory per term, which removes the duplication between the published term pages and the data dictionary.

## The case for slash, stated fairly

- **A consumer can fetch one term's statements without downloading the vocabulary.** That is a genuine advantage, and it is what large or database-backed vocabularies rely on — schema.org, DBpedia, and QUDT are the usual examples. Neither description fits URPX at half a megabyte.
- **Per-term pages are individually addressable and individually cacheable.** Under hash, a link to a term is a link to an anchor in one document.
- **If URPX later splits into modules** — a core vocabulary plus published mappings — each module takes its own document under hash. That is the pattern W3C uses for SOSA/SSN, so modularity is not foreclosed, but it is a shape to plan for rather than something that falls out for free.

Slash has been in the URPX ontology since the first commit and was never weighed against hash. It is also what the current directory-per-term publication layout requires, so it arrived with the publication path rather than as a choice on its merits. This is that choice being made deliberately.

## Why at v0.4.0 rather than after it

Changing the form of an identifier is a breaking change, the same class of change as moving the host. v0.4.0 already carries the host move, so taking both together is one change for implementers to absorb. Taken later, it is a second breaking change, and by then there may be adopters outside this group bound to the identifiers.

Everything up to and including v0.4.0 happens before the standard is public, so no identifier being changed here has been published to anyone outside the working group.

## What it means for anyone holding data or a branch

- **One find-and-replace, at v0.4.0.** The exact before and after strings are published with the release, along with the updated JSON-LD context, so the substitution can be applied mechanically rather than derived.
- **Earlier releases stay reachable.** Prior versions of the vocabulary are republished as version snapshots under the new address, starting from the v0.3.0 baseline, so a version transition is something an implementer can see handled rather than have to take on trust.
- **Nothing is required before v0.4.0.** A branch or a dataset written against the current identifiers keeps working until the cutover, and the cutover is announced with the strings.

## Sequence

An interim **v0.3.1** comes first, carrying the license conversion together with a set of ontology corrections and documentation fixes; its release notes list every term-level change. The identifier work lands at **v0.4.0**.

## Review

If this is awkward for an implementation you are building, or the reasoning above misses something, say so on this report or in a GitHub issue. Feedback that arrives before the cutover work starts is feedback that can still shape it.

## References

- W3C, *Best Practice Recipes for Publishing RDF Vocabularies*: https://www.w3.org/TR/swbp-vocab-pub/
- W3C wiki, *HashVsSlash*: https://www.w3.org/wiki/HashVsSlash
