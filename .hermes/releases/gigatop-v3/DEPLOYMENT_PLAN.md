# Hermes deployment plan

This package does not authorize deployment.

1. Fetch `origin/release/gigatop-v3` and check out its remote head without modifying `main`.
2. Verify the branch head and deployment authority `aa832d2137bb58cf3dcf7d998e575cd722ef1a2b` using `HERMES_FETCH.md` and `PRE_DEPLOY_CHECKS.json`. The external design reference is provenance-only and is not a required Git object.
3. Record explicit owner approval containing `DEPLOY PRODUCTION` and the current live Pages deployment before making any production change.
4. Run the rights, lint and static-export gates. The deployable artifact is `dist/client/`; prepare its custom-domain and route metadata with `node scripts/prepare-pages.mjs` before upload.
5. Confirm `.github/workflows/pages.yml` still deploys only on pushes to `main` or an explicit manual dispatch.
6. Promote deploy commit `aa832d2137bb58cf3dcf7d998e575cd722ef1a2b` to `main` only through the owner's approved repository process. Do not edit source during promotion.
7. Let the GitHub Pages workflow deploy the exact promoted commit, then run every check in `POST_DEPLOY_CHECKS.json` against `https://gigatop.io/`.
8. On a critical failure, mark the release `DEGRADED`, execute `ROLLBACK_PLAN.json`, verify the restored site and stop. Do not automatically retry.

All paths in this contract are relative to the repository root.
