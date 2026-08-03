<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX Release Runbook

This runbook covers URPX source releases and the GitHub Pages publication mesh. Keep release changes small and reviewable.

## Release Sequence

The v0.3 series ships as three tags, each carrying one kind of change, so that every diff a reviewer opens is about one subject.

| Tag | Carries |
|-----|---------|
| `v0.3.0` | The vocabulary and shapes as reviewed, on the current namespace |
| `v0.3.1` | The licence transition described in `TRANSITION.md`: specifications to the W3C Document Licence, datasets to CDLA-Permissive-2.0, source and metadata remaining Apache-2.0 |
| `v0.4.0` | The move to the `urpx.org` namespace, the dereferencing that goes with it, and the published JSON-LD context |

The namespace move is a minor bump rather than a patch because changing the term namespace is a breaking change, and pre-1.0 the minor digit carries breaking changes. See the Versioning Scheme section of the README.

Run `deno task release:validate` and the full Turtle and SHACL checks at each tag, not only the last one.

Two consequences for anyone following this runbook:

- **The namespace changes at `v0.4.0`.** Every `urpx:` IRI takes a new base. A consumer binding to URPX IRIs should bind to the `v0.4.0` namespace; the earlier published mesh remains resolvable as an archive of the `v0.2.x` state.
- **Local names are settled before `v0.3.0`.** The `v0.4.0` change is a base-IRI substitution and nothing else, so a term whose local name is wrong at `v0.3.0` stays wrong through the substitution.

## Release Surfaces

- Source repo: `git@github.com-fluxtailor:urpx-org/urpx.git`
- Source branch: `main`
- Publication branch: `gh-pages`
- Pages base: `https://urpx-org.github.io/urpx/`
- Active release files:
  - `ontology/urpx-ontology.ttl`
  - `shacl/urpx-shacl.ttl`

The source tag and `gh-pages` publication are separate surfaces. A Turtle file in a source tag is not publicly dereferenceable until the Pages branch contains the intended generated payload or page.

## Source Preflight

Choose the release version and issue date, then update deterministic metadata:

```sh
deno task release:set-version -- --version 0.2.1 --issued 2026-05-22
```

Validate release metadata and notes:

```sh
deno task release:validate -- --version 0.2.1
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
git add deno.json deno.json.license scripts ontology shacl documentation/pages/urpx-release-notes-v0.2.1.md dev-docs/release-runbook.md
git commit -m "chore: prepare URPX v0.2.1 release"
```

Create and push an annotated tag:

```sh
git tag -a v0.2.1 -m "URPX v0.2.1"
git push origin main
git push origin v0.2.1
deno task release:validate -- --version 0.2.1 --require-tag
```

The `GitHub Release` workflow normally builds its release body from `documentation/pages/urpx-release-notes-vX.Y.Z.md` using private release-helper code from `urpx-org/urpx-website-staging`. Until that repository is public, configure `URPX_AUTOMATION_TOKEN` as an organization or repository secret with access to the helper repository. A manual workflow run can instead provide `release_body` text in the Actions UI, which skips the helper checkout.

The release notes are read from the tagged commit, so they must be committed before the tag rather than added afterwards.

The `v0.3.1` release replaces `URPX_AUTOMATION_TOKEN` with an organization-owned GitHub App that mints a short-lived token per run, so automation is no longer tied to one contributor's account. Three workflows change together: `regen-generated-content.yml`, `release.yml` and `trigger-staging-rebuild.yml`. The existing secret stays in place until all three are converted and verified, because `trigger-staging-rebuild.yml` fails closed without it and the website would stop rebuilding.

## Website Publication

A push to `main` triggers `trigger-staging-rebuild.yml`, which dispatches a rebuild of the documentation website. That build re-syncs the pages in `documentation/pages/`, including `urpx-release-notes-v*.md`, into the website's own release-notes section. Publishing release notes to the site therefore needs no manual step beyond committing them here.

## Pages Publication

**The GitHub Actions workflow is the path to use.** Run `Weave URPX Semantic Flow Site` from the Actions tab, giving it the release version and the source ref. It uses Node 24 action versions, initializes `gh-pages` when needed, and publishes the woven site to `gh-pages`. Running it from Actions rather than a laptop is what keeps the publication reproducible by anyone with repository access.

The rest of this section is the **local fallback**: the same sequence by hand, for diagnosing a workflow failure or publishing when Actions is unavailable. It is not the normal path.

Use the npm-published Weave CLI. Pin the package version used for the release:

```sh
npm view @semantic-flow/weave version bin
weave() { npx -y @semantic-flow/weave@0.1.2 "$@"; }
```

Set local paths. `URPX_REPO` is your own clone of this repository and `URPX_PUB` a separate worktree checked out on `gh-pages`:

```sh
export URPX_REPO="$HOME/path/to/urpx"
export URPX_PUB=/tmp/urpx-gh-pages
export URPX_RELEASE_VERSION=0.2.1
export URPX_RELEASE_STATE="v$URPX_RELEASE_VERSION"
export WEAVE_LOG_DIR=/tmp/weave-logs
mkdir -p "$WEAVE_LOG_DIR"
```

Preflight both worktrees:

```sh
git -C "$URPX_REPO" status --short --branch
git -C "$URPX_PUB" status --short --branch
(cd "$URPX_REPO" && deno task release:validate -- --version "$URPX_RELEASE_VERSION")
```

For a disposable local publication worktree, clear generated output but keep `.git`:

```sh
find "$URPX_PUB" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
```

Create the mesh:

```sh
weave mesh create \
  --workspace "$URPX_PUB" \
  --mesh-base 'https://urpx-org.github.io/urpx/' \
  --publication-profile github-pages
```

Add a root welcome page:

```sh
cat > "$URPX_PUB/welcome.ttl" <<'TTL'
@base <https://urpx-org.github.io/urpx/> .
@prefix dcterms: <http://purl.org/dc/terms/> .

<https://urpx-org.github.io/urpx> dcterms:title "URPX" ;
  dcterms:description "The Utility Rate Plan Exchange ontology provides RDF, OWL, SHACL, and related resources for exchanging utility rate plan information." .
TTL

weave integrate "$URPX_PUB/welcome.ttl" / --mesh-root "$URPX_PUB"
weave --mesh-root "$URPX_PUB" --target 'designatorPath=/,historySegment=main'
```

Integrate source payloads with floating repository bindings:

```sh
weave integrate "$URPX_REPO/ontology/urpx-ontology.ttl" ontology \
  --mesh-root "$URPX_PUB" \
  --grant-source-directory "$URPX_REPO" \
  --source-repository-current \
  --source-repository-url 'https://github.com/urpx-org/urpx.git'

weave integrate "$URPX_REPO/shacl/urpx-shacl.ttl" ontology/shacl \
  --mesh-root "$URPX_PUB" \
  --grant-source-directory "$URPX_REPO" \
  --source-repository-current \
  --source-repository-url 'https://github.com/urpx-org/urpx.git'
```

Set release history and weave release payloads:

```sh
weave set history ontology releases --mesh-root "$URPX_PUB"
weave set next-state ontology "$URPX_RELEASE_STATE" --mesh-root "$URPX_PUB"

weave set history ontology/shacl releases --mesh-root "$URPX_PUB"
weave set next-state ontology/shacl "$URPX_RELEASE_STATE" --mesh-root "$URPX_PUB"

weave \
  --mesh-root "$URPX_PUB" \
  --payload-manifestation-segment ttl \
  --target 'designatorPath=ontology' \
  --target 'designatorPath=ontology/shacl'
```

Extract terms, generate pages, and validate:

```sh
weave extract --all-terms \
  --mesh-root "$URPX_PUB" \
  --source ontology \
  --add-source-references \
  --reference-role canonical \
  --accept-preview

weave extract --all-terms \
  --mesh-root "$URPX_PUB" \
  --source ontology/shacl \
  --add-source-references \
  --reference-role canonical \
  --accept-preview

weave --mesh-root "$URPX_PUB"
weave generate --mesh-root "$URPX_PUB"
weave validate mesh --mesh-root "$URPX_PUB"
weave validate publication --mesh-root "$URPX_PUB"
```

Inspect expected payloads before committing `gh-pages`:

```sh
find "$URPX_PUB" \
  -path "*/releases/$URPX_RELEASE_STATE/ttl/*.ttl" \
  -o -path '*/_s0001/ttl/*.ttl' \
  | sort

git -C "$URPX_PUB" status --short --branch
git -C "$URPX_PUB" diff --stat
```

Commit and push the publication branch only after reviewing the generated output:

```sh
git -C "$URPX_PUB" add .
git -C "$URPX_PUB" commit -m "Publish URPX $URPX_RELEASE_STATE"
git -C "$URPX_PUB" push origin gh-pages
```

## Post-Publish Checks

```sh
curl -fsSL "https://urpx-org.github.io/urpx/ontology/releases/$URPX_RELEASE_STATE/ttl/urpx-ontology.ttl" >/tmp/urpx-ontology.ttl
curl -fsSL "https://urpx-org.github.io/urpx/ontology/shacl/releases/$URPX_RELEASE_STATE/ttl/urpx-shacl.ttl" >/tmp/urpx-shacl.ttl
riot --validate /tmp/urpx-ontology.ttl /tmp/urpx-shacl.ttl
```
