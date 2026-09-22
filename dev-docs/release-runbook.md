<!-- SPDX-FileCopyrightText: The URPX Authors -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX Release Runbook

This runbook covers URPX source releases and the Semantic Flow namespace published with the documentation site. Keep release changes small and reviewable.

## Release Sequence

Recent releases established the source and namespace baselines used by the publication workflow.

| Tag | Carries |
|-----|---------|
| `v0.4.0` | The reviewed vocabulary and shapes immediately before the namespace cutover |
| `v0.5.0` | The move to the permanent `urpx.org` slash namespaces and the matching JSON-LD context |

The namespace move is a minor bump rather than a patch because changing the term namespace is a breaking change, and pre-1.0 the minor digit carries breaking changes. See the Versioning Scheme section of the README.

Run `deno task release:validate` and the full Turtle and SHACL checks at each tag, not only the last one.

Three consequences for anyone following this runbook:

- **The namespace changes at `v0.5.0`.** Bind `urpx` to `https://urpx.org/ns/ontology/` and `urpx-shacl` to `https://urpx.org/ns/shacl/core/`.
- **The context is a governed publication artifact.** Its stable identifier is `https://urpx.org/ns/context`, with immutable release states under `releases/<tag>`.
- **Term identifiers are stable across releases.** The ontology, SHACL, and context payload histories advance; extracted term ResourcePages point to the exact source state for the selected release.

## Release Surfaces

- Source repo: `https://github.com/urpx-org/urpx.git`
- Source branch: `main`
- Canonical mesh base: `https://urpx.org/ns/`
- Publication assembly: the documentation site's GitHub Pages artifact
- Active release files:
  - `ontology/urpx-ontology.ttl`
  - `shacl/urpx-shacl.ttl`
  - `context/urpx-context.jsonld`

The source tag and website publication are separate surfaces. A source tag is not a successful namespace release until the assembled Pages artifact contains the matching Semantic Flow mesh and passes its publication checks.

## Source Preflight

Choose the release version and issue date, then update deterministic metadata:

```sh
deno task release:set-version -- --version 0.5.0 --issued 2026-09-08
```

Validate release metadata and notes:

```sh
deno task release:validate -- --version 0.5.0
deno task ci
riot --validate ontology/urpx-ontology.ttl shacl/urpx-shacl.ttl
git diff --check
```

Review pending changes before committing:

```sh
git status --short
git diff --stat
git diff
```

## Source Release

Commit the reviewed source release:

```sh
git add deno.json deno.json.license scripts ontology shacl context documentation/pages/urpx-release-notes-v0.5.0.md dev-docs/release-runbook.md
git commit -m "chore: prepare URPX v0.5.0 release"
```

Create and push an annotated tag:

```sh
git tag -a v0.5.0 -m "URPX v0.5.0"
git push origin main
git push origin v0.5.0
deno task release:validate -- --version 0.5.0 --require-tag
```

The `GitHub Release` workflow normally builds its release body from `documentation/pages/urpx-release-notes-vX.Y.Z.md` using the configured release helper and a short-lived organization-owned GitHub App token. A manual workflow run can instead provide `release_body` text in the Actions UI.

The release notes are read from the tagged commit, so they must be committed before the tag rather than added afterwards.

## Website Publication

A push to `main` triggers `trigger-staging-rebuild.yml`, which dispatches a rebuild of the documentation website. That build re-syncs the pages in `documentation/pages/`, including `urpx-release-notes-v*.md`, into the website's own release-notes section. Publishing release notes to the site therefore needs no manual step beyond committing them here.

## Semantic Flow Pages Publication

URPX publishes the `/ns` tree with [Semantic Flow](https://github.com/semantic-flow/weave). The normal path is the documentation site's `Deploy to GitHub Pages (Staging)` workflow, followed by its reviewed production promotion. Do not run the legacy `Weave URPX Semantic Flow Site` workflow in this repository; it targets the retired GitHub-hosted namespace and standalone `gh-pages` tree.

The publication workflow takes two source coordinates:

- `urpx_ref` selects content for the documentation website.
- `semantic_flow_ref` must select one exact URPX release tag for the namespace mesh.

For a release publication, use the same immutable tag for both. The workflow checks out the semantic source separately, pins the released `@semantic-flow/weave` package, and fails unless the Git tag, ontology `owl:versionInfo`, and SHACL `dcat:version` agree.

Semantic Flow creates three versioned payload artifacts:

| Identifier | Source | Immutable release bytes |
|---|---|---|
| `https://urpx.org/ns/ontology` | `ontology/urpx-ontology.ttl` | `/ns/ontology/releases/<tag>/ttl/urpx-ontology.ttl` |
| `https://urpx.org/ns/shacl/core` | `shacl/urpx-shacl.ttl` | `/ns/shacl/core/releases/<tag>/ttl/urpx-shacl.ttl` |
| `https://urpx.org/ns/context` | `context/urpx-context.jsonld` | `/ns/context/releases/<tag>/jsonld/urpx-context.jsonld` |

The ontology and SHACL payloads drive all-terms extraction. Each ontology term and core shape receives a stable ResourcePage. The term's source registry points to the exact tag-named payload state used to generate the page. Support metadata remains current-only; the three payload histories retain the release snapshots.

The build rejects any Knop below `ontology/releases/` or `shacl/core/releases/`. Those paths belong to artifact histories, states, manifestations, and files, not vocabulary terms. It also rejects source/snapshot byte drift, runner-local paths in public output, tag/version mismatches, and invalid Semantic Flow mesh or GitHub Pages output.

GitHub Pages does not vary responses by `Accept` header, and URPX does not require content negotiation. Identifier IRIs resolve to human-readable ResourcePages. Machine-readable ontology, SHACL, and JSON-LD context files are available at the explicit release paths above.

## Post-Publish Checks

```sh
export URPX_RELEASE_STATE=v0.5.0
curl -fsSL "https://urpx.org/ns/ontology/releases/$URPX_RELEASE_STATE/ttl/urpx-ontology.ttl" >/tmp/urpx-ontology.ttl
curl -fsSL "https://urpx.org/ns/shacl/core/releases/$URPX_RELEASE_STATE/ttl/urpx-shacl.ttl" >/tmp/urpx-shacl.ttl
curl -fsSL "https://urpx.org/ns/context/releases/$URPX_RELEASE_STATE/jsonld/urpx-context.jsonld" >/tmp/urpx-context.jsonld
riot --validate /tmp/urpx-ontology.ttl /tmp/urpx-shacl.ttl
node -e "JSON.parse(require('fs').readFileSync('/tmp/urpx-context.jsonld', 'utf8'))"
```

Also fetch representative term and shape ResourcePages, confirm the HTML canonical links use `urpx.org`, and verify that no `_knop` path exists below either release history.
