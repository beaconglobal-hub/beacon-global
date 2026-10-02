# Deployment and Apple enrollment

## Repository setup

Marissa's source is at the repository root, retaining the supplied design and four-page structure. It uses a static Next.js export, a pinned Next.js patch release, Node.js 24, bundled local Inter fonts, and a pinned static preview server. No runtime secrets or backend services are needed. The build explicitly uses Webpack because Turbopack worker sockets are restricted in the development workspace; Vercel runs the same build command.

The original handoff and build spec are historical references. Their QA claims describe the supplied version. Their proposed move into the God's Beacon repository is superseded by the decision to keep this repository separate and use the same Vercel team.

## Deployment

Vercel's Next.js adapter reads build metadata from `.next`, so `vercel.json` uses that output directory. The standalone static export for local preview remains in `out/`. Pointing the adapter at `out` caused the first deployment to fail after a successful build because `routes-manifest.json` lives in `.next`.

Repository verification on October 2, 2026: production export built successfully with Webpack, TypeScript checking passed, and all 120 automated desktop/mobile checks passed. Home screenshots were visually reviewed at both widths. Browser checks include client runtime errors and mobile menu navigation. Real-device video playback, external destination ownership, domain configuration, and organization records remain outside those automated checks.

1. Import this repository into a separate `beacon-global` Vercel project in the God's Beacon team. Set the root directory to the repository root and select Node.js 24.
2. Verify a preview: all pages, mobile navigation, email, donation, and God's Beacon links. Check video playback on iOS Safari and Chrome.
3. Attach `beaconglobal.org` and `www.beaconglobal.org`. Apply DNS values shown by Vercel; preserve Google Workspace MX/TXT records and nameservers.
4. Confirm the canonical URL is `https://beaconglobal.org`, HTTPS works, and production is publicly accessible in a signed-out browser.
5. Submit the organization URL to Apple once organization records and the authorized enrollee are ready.

## Facts and content to confirm before launch

This setup preserves supplied copy rather than guessing unresolved facts from the handoff.

- Verify the legal entity name against incorporation documents and the D-U-N-S record. The site says `Beacon Global, Inc.`; the handoff reports IRS styling as `BEACON GLOBAL INC`.
- Resolve founding dates: the site says 2023 / December 2023; the handoff reports an IRS determination letter dated December 27, 2022. Confirm the intended meaning before changing claims.
- Confirm charitable status, leadership, location, contact mailbox, and the relationship to God's Beacon. Confirm enrollment address and telephone against organization records; do not invent a street address.
- Review the supplied draft privacy notice. It describes no forms, accounts, or analytics; confirm that it reflects hosting logs and actual operational practices.
- Confirm rights to supplied photos, logo, app screenshot, and video. Credits alone do not establish permission.
- Confirm the Stripe destination belongs to the organization and external URLs are correct.

## Apple requirements and our content priorities

Apple requires a publicly available functional organization website whose domain is associated with the organization, a qualifying legal entity, a D-U-N-S Number, and an enrollee with legal authority. A website alone does not guarantee enrollment approval. See [Apple enrollment requirements](https://developer.apple.com/programs/enroll/) and [D-U-N-S guidance](https://developer.apple.com/help/account/membership/D-U-N-S).

Clear identity, mission, contact information, and the relationship to God's Beacon are our content priorities. Apple does not prescribe these four pages or this technology stack. Keep the site factual and consistent with enrollment records.
