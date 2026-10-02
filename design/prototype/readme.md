# Beacon Global — Design System

Beacon Global Inc. is a 501(c)(3) public charity (est. 2022, Libertyville, Illinois) that operates **God's Beacon** (godsbeacon.org), a digital platform where churches share sermons and worship content. This system covers the **organization website, beaconglobal.org**. Its main job is to prove the nonprofit is real and active to verification reviewers (Apple Developer fee waiver, Goodstack / Google for Nonprofits). Secondary audiences: partners, donors, churches, and people coming from godsbeacon.org.

The site should look related to godsbeacon.org (same dark navy, same Inter, same mark) but read as an **organization**, not the app. Avoid streaming layouts, login elements and app-style chrome.

## Sources
- `uploads/beacon-global-build-spec.md` — build spec: facts, sitemap, copy, product color tokens, requirements
- `uploads/Beacon Global Logo.svg` — the B-and-dove mark (cleaned copy: `assets/beacon-global-mark.svg`)
- Product tokens are taken from godsbeacon.org's CSS, as given in the spec (not accessed directly)
- `Beacon Global Website.dc.html` — the approved website design this system was extracted from
- Photography: Unsplash (Jessica Mangano, Nycholas Benaia, Guilherme Stecanella, Joshua Earle, Ross Sneddon, Daniel Schaffer)

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `components/core/` — Button, TextLink, Eyebrow
- `components/content/` — SectionHeading (+ Highlight), FactsList (+ ORG_FACTS), PersonCard (+ PersonGrid), FeatureList
- `components/scripture/` — ScriptureQuote (+ ScriptureRule), ScriptureBand
- `components/navigation/` — SiteHeader, SiteFooter (+ PhotoCredits)
- `ui_kits/website/` — click-through Home / About / Contact / Legal
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand)
- `assets/` — mark SVG, four photographs, God's Beacon phone mockup video
- `design-tokens.md` — Tailwind / shadcn handoff mapping
- `SKILL.md` — Agent Skill entry point

## Content fundamentals
- **Voice:** plain, factual, warm, institutional "we" ("We operate God's Beacon…"). Speak to the reader as "you" only in invitations ("Your gift helps…").
- **Facts first.** Lead with verifiable facts: the legal name **Beacon Global Inc.**, **501(c)(3) public charity**, **Established 2022**, **Libertyville, Illinois**, **info@beaconglobal.org**. Never show the EIN or a street address.
- Say plainly that **Beacon Global Inc. operates God's Beacon**, which ties the App Store seller name to the app.
- **Mission statement** is fixed text that Goodstack copies word for word. Don't reword it.
- **Scripture:** always curly quotes, always cite book, chapter:verse and translation, e.g. "Mark 16:15 (NIV)", "Matthew 5:14 (NLT)".
- **Casing:** sentence case for headings and buttons ("About the organization", "Support the mission"). Eyebrows are uppercase via CSS; write them in sentence case.
- **No filler:** no "coming soon", no stats, no emoji, no exclamation marks. Everything on the page is real.
- Link labels say where they go: "Visit godsbeacon.org ↗", "Leadership & governance →".

## Visual foundations
- **Color:** dark theme only. Surfaces step through navy: page #07263B → card #142C3E → divider #213E54 → strong border #3B5B78; deep bands and the footer use #021827. Headings are white, body #E1ECF9, labels #97ABBF. **Yellow #FFCC33** marks action (primary buttons, Give) and scripture (rule and citation), plus one highlighted phrase in the Home H1. **Teal #4DEAFF** is for links and focus rings. The logo palette (navy, orange, amber) appears only inside the mark.
- **Type:** Inter only. Hierarchy comes from weight and size: H1 56/800 with −0.025em tracking, H2 38–42/700 with −0.02em, body 17/400 at 1.65, eyebrows 13/600 uppercase at +0.08em. Headings use `text-wrap: balance`; paragraphs use `pretty`.
- **Layout:** 1200px container, gutter clamp(20–40px), section rhythm clamp(64–104px). Two-column grids (`auto-fit minmax(420px,1fr)`) collapse to one column on mobile. Header is sticky at 72px.
- **Cards:** navy fill, 1px navy border, 10px radius, **no shadows**. Emphasis comes from a stronger border (#3B5B78), not elevation.
- **Borders and dividers:** 1px hairlines in #213E54 separate About sections and list rows.
- **Imagery:** real photography, warm natural or stage light, about Scripture, reading, preaching, worship and solitude. No app screenshots in heroes and no clichéd congregation stock. Always 10px radius or full-bleed.
- **Protection:** text on photos sits on **navy scrims, never black**. Portrait cards use `--scrim-bottom` with text at the bottom; full-bleed bands use `--scrim-side` with text on the right. Pick photos whose text area is already dark.
- **Scripture treatment:** 40×3 yellow rule, then the white quote at 600–700 weight, then the yellow citation. Three forms: a plain deep-navy card, a portrait photo card, and a full-bleed band.
- **Motion:** almost none. 150ms color transitions on hover and smooth-scroll only. The one video (phone mockup) is muted, looping, and has a Pause control.
- **Hover:** yellow buttons lighten to #FFDB70; outline buttons gain a card fill and a lighter border; links shift teal → pale teal. There's no press-shrink effect.
- **Focus:** 2px teal outline, 3px offset, on every link and button.
- **Transparency and blur:** only in scrims. No glass effects and no gradients as decoration.
- **Accessibility:** WCAG 2.1 AA; touch targets are 44px minimum (mobile nav rows 52px).

## Iconography
There is effectively no icon system. The only glyphs are Unicode arrows in link text: **↗** for external destinations (godsbeacon.org, Stripe) and **→** for internal "see more" links. No icon font, no SVG icon set, no emoji. The B-and-dove mark is the only graphic. It has a white outline designed for dark backgrounds, so place it only on navy, always with the words "Beacon Global" in Inter 700 beside it. There's no light-background variant yet.

## Intentional additions
- `PhotoCredits` — the site credits Unsplash photographers in one line above the footer.
- `Highlight` — a yellow phrase inside the Home H1.

## Caveats
- Inter loads from Google Fonts. No font binaries were provided.
- No light-background logo variant exists.
