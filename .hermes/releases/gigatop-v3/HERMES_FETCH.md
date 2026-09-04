# Hermes fetch and verification

Run from an existing clone of the shared repository:

```sh
git fetch origin
git fetch origin release/gigatop-v3
git switch --detach origin/release/gigatop-v3
git rev-parse HEAD
git status --porcelain
```

Compare the reported `HEAD` with `origin/release/gigatop-v3`, then verify the deploy commit contained in this repository:

```sh
test "$(git rev-parse HEAD)" = "$(git rev-parse origin/release/gigatop-v3)"
git cat-file -e aa832d2137bb58cf3dcf7d998e575cd722ef1a2b^{commit}
git diff --exit-code aa832d2137bb58cf3dcf7d998e575cd722ef1a2b HEAD -- . ':(exclude).hermes/releases/gigatop-v3/**'
```

The design reference `a1e0c5b23606d4a15dd38b596762574b614e5987` belongs to the separate local Creative-OS repository, which has no configured remote. It is provenance-only; do not require that object in this deployment clone. The deployment authority is `aa832d2137bb58cf3dcf7d998e575cd722ef1a2b`.

Inspect the manifest and the offline npm audit attestation, then run preflight from the repository root. The branch head differs from the deploy commit only by handoff metadata, so the build tree is identical:

```sh
sed -n '1,240p' .hermes/releases/gigatop-v3/RELEASE_MANIFEST.json
sed -n '1,260p' .hermes/releases/gigatop-v3/PRE_DEPLOY_CHECKS.json
sed -n '1,240p' .hermes/releases/gigatop-v3/NPM_AUDIT.json
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
