# URPX Release Workflow

This document describes the steps for releasing a new version of the URPX ontology. It covers pre-release preparation, the version-bump commit, tagging, and post-release follow-up.

The GitHub Actions workflow (`.github/workflows/release.yml`) handles creating the GitHub release from these materials — it does **not** create the version-bump commit or the release notes file.

---

## Versioning scheme

URPX uses **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

| Level | When to use |
|-------|-------------|
| **MAJOR** | Breaking changes — class removals, property renames, namespace changes |
| **MINOR** | Additive changes — new classes, new properties, new enumeration values |
| **PATCH** | Non-breaking corrections — SHACL constraint fixes, annotation/label updates, test-case updates |

---

## Pre-release checklist

Before creating the version-bump commit, verify:

- [ ] All ontology and SHACL changes are merged to `main`.
- [ ] Generated artifacts are up to date (`chore: refresh generated URPX artifacts` was run).
- [ ] SHACL validates cleanly against the updated ontology.
- [ ] Any affected test cases have been updated and re-validated.
- [ ] The release notes file (see below) is drafted and ready.

---

## The version-bump commit

The version bump should be a **dedicated commit on `main`** made immediately before tagging. Ideally this is the merge commit of the release PR (or a follow-up commit if the PR was already merged without bumping).

### Files to update

**`ontology/urpx-ontology.ttl`** — all locations in the metadata block:
```
# Version: X.Y.Z pre-draft                          ← comment header (line ~8)
dcterms:modified "YYYY-MM-DD"^^xsd:date             ← today's date
dcterms:hasVersion <.../ontology/releases/vX.Y.Z>
owl:versionInfo "X.Y.Z"                             ← on the main ontology resource
owl:versionIRI <.../vX.Y.Z/ontology/urpx-ontology.ttl>

<.../ontology/releases/vX.Y.Z>
    dcterms:issued "YYYY-MM-DD"^^xsd:date
    owl:versionInfo "X.Y.Z"
    dcat:distribution <.../ontology/releases/vX.Y.Z/ttl>

<.../ontology/releases/vX.Y.Z/ttl>
    dcat:downloadURL <.../vX.Y.Z/ontology/urpx-ontology.ttl>
    dcat:downloadURL <.../ontology/releases/vX.Y.Z/ttl/urpx-ontology.ttl>
```

Also update the `skos:note` example URL on `urpx:targetURPXVersion`.

**`shacl/urpx-shacl.ttl`** — same pattern:
```
# Version: X.Y.Z Pre-Draft                          ← comment header
dcterms:modified "YYYY-MM-DD"^^xsd:date
dcterms:hasVersion <.../shacl/releases/vX.Y.Z>
owl:versionInfo "X.Y.Z"                             ← on the main shapes graph resource
owl:versionIRI <.../vX.Y.Z/shacl/urpx-shacl.ttl>

<.../shacl/releases/vX.Y.Z>
    dcterms:issued "YYYY-MM-DD"^^xsd:date
    owl:versionInfo "X.Y.Z"
    dcat:distribution <.../shacl/releases/vX.Y.Z/ttl>

<.../shacl/releases/vX.Y.Z/ttl>
    dcat:downloadURL <.../vX.Y.Z/shacl/urpx-shacl.ttl>
    dcat:downloadURL <.../shacl/releases/vX.Y.Z/ttl/urpx-shacl.ttl>
```

**`urpx-changelog.md`** — update the header:
```
**Version:** X.Y.Z (Pre-draft)
**Last Updated:** YYYY-MM-DD
```

**`documentation/pages/urpx-release-notes-vX.Y.Z.md`** — must exist before tagging (the release workflow requires it). See below.

### Suggested commit message

```
chore: bump version to vX.Y.Z
```

---

## Release notes

Create `documentation/pages/urpx-release-notes-vX.Y.Z.md` before the version-bump commit. Use `urpx-release-notes-v0.2.1.md` as a template for patch releases and `urpx-release-notes-v0.2.0.md` for minor/major releases.

Required sections:
- **Overview** — one-paragraph summary; state whether data migration is required.
- **What Changed** — table of ontology, SHACL, test-case, and documentation changes.
- **Migration** — explicit "no migration required" or step-by-step instructions.
- **References** — design decisions, prior release notes.

The file must include the SPDX header block (copy from an existing release notes file).

---

## Tagging and the GitHub release

Once the version-bump commit is on `main`:

1. Create and push the tag:
   ```
   git tag vX.Y.Z <commit-sha>
   git push origin vX.Y.Z
   ```
   Pushing the tag triggers `.github/workflows/release.yml`, which reads the release notes file, strips Docusaurus chrome, and creates the GitHub release automatically.

2. If the tag needs to be moved to a different commit after the fact:
   - **GitHub UI:** Releases → Edit vX.Y.Z → change the "Target" field to the correct commit SHA or branch tip → Save.
   - **CLI:** `git tag -f vX.Y.Z <new-sha> && git push origin vX.Y.Z --force`
   - Re-run the release workflow manually if needed: Actions → "GitHub Release" → Run workflow → supply the tag.

3. Verify the GitHub release body matches the release notes content.

---

## Post-release

- [ ] Confirm the GitHub release page looks correct.
- [ ] Notify the working group (if a MINOR or MAJOR release).
- [ ] Open a PR to bump `next`-branch content toward the next version if applicable.
