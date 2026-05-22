<!-- SPDX-FileCopyrightText: Flux Tailor LLC -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# URPX Release Runbook

This runbook covers URPX source releases and the GitHub Pages publication mesh. Keep release changes small and reviewable.

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

## Pages Publication

The manual GitHub Actions workflow for this path is `Weave URPX Semantic Flow Site`. It checks out a tagged `semantic-flow/weave` source ref, initializes `gh-pages` when needed, and publishes the woven site to `gh-pages`.

For local runs, use a Weave source checkout until the npm package includes the `defaults/` Turtle files needed by the compiled binary. Pin the Weave ref used for the release:

```sh
export WEAVE_ROOT=/home/djradon/hub/semantic-flow/weave
export WEAVE_CLI="$WEAVE_ROOT/src/main.ts"
git -C "$WEAVE_ROOT" status --short --branch
```

Set local paths:

```sh
export URPX_REPO=/home/djradon/hub/urpx-org/urpx
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
deno run -A "$WEAVE_CLI" mesh create \
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

deno run -A "$WEAVE_CLI" integrate "$URPX_PUB/welcome.ttl" / --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" --mesh-root "$URPX_PUB" --target 'designatorPath=/,historySegment=main'
```

Integrate source payloads with floating repository bindings:

```sh
deno run -A "$WEAVE_CLI" integrate "$URPX_REPO/ontology/urpx-ontology.ttl" ontology \
  --mesh-root "$URPX_PUB" \
  --grant-source-directory "$URPX_REPO" \
  --source-repository-current \
  --source-repository-url 'https://github.com/urpx-org/urpx.git'

deno run -A "$WEAVE_CLI" integrate "$URPX_REPO/shacl/urpx-shacl.ttl" ontology/shacl \
  --mesh-root "$URPX_PUB" \
  --grant-source-directory "$URPX_REPO" \
  --source-repository-current \
  --source-repository-url 'https://github.com/urpx-org/urpx.git'
```

Set release history and weave release payloads:

```sh
deno run -A "$WEAVE_CLI" set history ontology releases --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" set next-state ontology "$URPX_RELEASE_STATE" --mesh-root "$URPX_PUB"

deno run -A "$WEAVE_CLI" set history ontology/shacl releases --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" set next-state ontology/shacl "$URPX_RELEASE_STATE" --mesh-root "$URPX_PUB"

deno run -A "$WEAVE_CLI" \
  --mesh-root "$URPX_PUB" \
  --payload-manifestation-segment ttl \
  --target 'designatorPath=ontology' \
  --target 'designatorPath=ontology/shacl'
```

Extract terms, generate pages, and validate:

```sh
deno run -A "$WEAVE_CLI" extract --all-terms \
  --mesh-root "$URPX_PUB" \
  --source ontology \
  --add-source-references \
  --reference-role canonical \
  --accept-preview

deno run -A "$WEAVE_CLI" extract --all-terms \
  --mesh-root "$URPX_PUB" \
  --source ontology/shacl \
  --add-source-references \
  --reference-role canonical \
  --accept-preview

deno run -A "$WEAVE_CLI" --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" generate --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" validate mesh --mesh-root "$URPX_PUB"
deno run -A "$WEAVE_CLI" validate publication --mesh-root "$URPX_PUB"
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
