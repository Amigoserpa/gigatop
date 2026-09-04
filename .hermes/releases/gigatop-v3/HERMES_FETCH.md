# Hermes fetch and verification

Run from an existing clone of the shared repository:

```sh
git fetch origin
git fetch origin release/gigatop-v3
git switch --detach origin/release/gigatop-v3
git rev-parse HEAD
git status --porcelain
```

Compare the reported `HEAD` with the handoff commit supplied by the owner or Codex. It must equal `origin/release/gigatop-v3`. The approved V3 integration commit must be an ancestor:

```sh
test "$(git rev-parse HEAD)" = "$(git rev-parse origin/release/gigatop-v3)"
git merge-base --is-ancestor a15265fd0ecc27ef7284088bf084bc9186166e57 HEAD
git diff --name-only a15265fd0ecc27ef7284088bf084bc9186166e57 HEAD
```

That final diff may contain only the Hermes package and GitHub Pages deployment configuration (`.hermes/releases/gigatop-v3/`, `.github/workflows/pages.yml`, `next.config.ts`, and `scripts/prepare-pages.mjs`). Inspect the manifest and run preflight from the repository root:

```sh
sed -n '1,240p' .hermes/releases/gigatop-v3/RELEASE_MANIFEST.json
sed -n '1,260p' .hermes/releases/gigatop-v3/PRE_DEPLOY_CHECKS.json
npm ci
npm run release:asset-rights
npm run lint
npm run build
node scripts/prepare-pages.mjs
test -f dist/client/index.html
test -f dist/client/404.html
test -f dist/client/robots.txt
test -f dist/client/sitemap.xml
test "$(cat dist/client/CNAME)" = "gigatop.io"
```

Stop after preflight unless the owner has explicitly issued `DEPLOY PRODUCTION`. Do not merge or push `main`, manually dispatch the Pages workflow, or otherwise deploy without that approval.
