# Release asset provenance

## Infrastructure scene

The public release contains no NVIDIA product photograph, exploded view, render or downloaded vendor image.

The Infrastructure scene uses an original, code-native editorial system diagram implemented in `app/v3/homepage-v3.tsx` and `app/globals.css`. It is a non-representational Local Compute Boundary: typography, rules and verified facts only. It does not depict or imitate the appearance of DGX hardware and is explicitly labelled `TECHNISCHE REFERENZ · KEIN PRODUKTBILD`.

The two earlier NVIDIA marketing assets, `dgx-exploded-view.png` and `dgx-front-angle-2.png`, were removed from `public/assets/` in release commit `d64536bdd797e41ef13f889c9369a0d307fe1d94`. Copies retained outside the site checkout in `phase4/rights-hold/` are excluded from every build and deployment package.

## Other public assets

- `public/og.png`: original Gigatop social-preview artwork produced for this release.
- `public/icon.svg`: original Gigatop mark produced for this release.
- `public/assets/visual-critic-ui.png`: owner-controlled screenshot of the local Gigatop Visual Critic; visibly labelled as demo data in the page.
- Instrument Sans and IBM Plex Mono WOFF2 files: SIL Open Font License 1.1; see `THIRD_PARTY_NOTICES.md`.
