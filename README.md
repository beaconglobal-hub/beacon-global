# Beacon Global

Public organization website for Beacon Global, Inc., which operates God's Beacon. The initial launch supports organization enrollment in the Apple Developer Program. Built from Marissa's supplied Next.js site, with Home, About, Contact, and Legal pages.

## Local development

Use Node.js 24 and npm (see `.nvmrc`). No environment variables, database, or API credentials are required.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Inter fonts are bundled locally; builds do not fetch Google Fonts.

## Production verification

```bash
npm run build
npm run typecheck
npx playwright install chromium
npm run check
npm start
```

The build exports to `out/`. `npm start` serves that export on port 3000. Browser checks cover all four pages at desktop and mobile widths, metadata, internal links, basic accessibility, runtime errors, and mobile navigation. New screenshots go to ignored `qa/current/`; the supplied baseline remains in `qa/screenshots/`. Set `CHROMIUM_PATH` to use an existing Chromium installation.

Optional utilities: `npm run og` regenerates the social image; `npm run preview` creates a standalone HTML reference, not a deployment artifact.

## Vercel

Import this repository into a separate `beacon-global` project in the same Vercel team as God's Beacon. Use the repository root, Next.js preset, and Node.js 24. `vercel.json` specifies installation, build, and static output settings. No environment variables are needed.

Review a preview deployment, then attach `beaconglobal.org` and `www.beaconglobal.org`. The canonical URL currently uses `https://beaconglobal.org`. Apply Vercel's DNS values while preserving email records and nameservers. Production must be accessible without authentication before submitting its URL to Apple.

See [deployment and enrollment notes](docs/launch.md) for outstanding decisions. No Vercel project or domain has been provisioned by this repository setup.

## Source references

- `lib/site.ts`: organization facts, leadership, email, and links. Some page copy repeats facts; search pages when updating organization details.
- `app/`: pages, metadata, sitemap, and robots.
- `public/assets/`: supplied logo, photos, screenshot, and video.
- `design/prototype/`: supplied Claude Design reference, excluded from the deployed site.
- [Original specification](docs/build-spec.md) and [original handoff](HANDOFF.md): historical decisions and QA claims; current setup is documented in [launch notes](docs/launch.md).

The original ZIP remains locally available and is ignored by Git because its contents are extracted.
