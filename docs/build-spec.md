# Beacon Global — Website Build Spec & Plan

**Site:** beaconglobal.org · **Owner:** Beacon Global, Inc. · **Status:** Visual design approved (Phase 2). Proof-of-concept build complete; production QA and legal review pending.
**Brief date:** September 24, 2026 · **Last updated:** September 26, 2026 (see §10, Decision log)

> **Design source:** the approved Claude Design prototype, `Beacon Global Website.dc.html`. Where this spec and the prototype differ, §10 (Decision log) records which one wins. Everything below is decided unless listed under Open Items.

---

## 1. Purpose and audience

**The site's main job is to prove Beacon Global, Inc. is a real, active 501(c)(3) nonprofit with its own web presence.** The organization needs this to apply for nonprofit programs and discounts. The Apple Developer Program fee waiver comes first; Google for Nonprofits, Canva and similar programs (verified through Goodstack) follow.

**Primary audience: verification reviewers.** They check:

- **Apple (organization enrollment):**
  - The website must be publicly available and functional, on a domain associated with the organization.
  - Social media links, registrar parking pages and sites with minimal content are rejected.
  - The work email must be on the organization's domain.
  - The legal entity name (matched to the D-U-N-S record) appears as the App Store seller.
- **Goodstack (Google for Nonprofits and others):**
  - Checks the organization's legal and programmatic information to confirm it is active.
  - The application asks for a mission statement copied from the website.
  - Goodstack may email any address listed on the site.

**Secondary audiences:** partners, donors, churches, and people arriving from godsbeacon.org.

**Design implications**
- Show the legal name, 501(c)(3) status and contact **above the fold on the Home page** at a common laptop size (1280×800).
- ~~Make the mission statement a clean, easy-to-copy block of text.~~ *Superseded (§10): the mission appears in the About intro, matching godsbeacon.org/about. Goodstack copies it from there.*
- State plainly that **Beacon Global, Inc. operates God's Beacon.** This links the App Store seller name to the app.
- Use real, substantial content on every page. No placeholder or "coming soon" sections.

---

## 2. Organization facts (verified)

| Field | Value | Source |
|---|---|---|
| Legal name | **Beacon Global, Inc.** *(owner decision, §10. IRS lists "BEACON GLOBAL INC"; confirm against the articles of incorporation and D-U-N-S record)* | Owner / IRS |
| Status | 501(c)(3) public charity; contributions deductible | IRS records |
| Established | **2023** (owner decision, §10; matches godsbeacon.org/about "founded in December 2023". Note: the IRS determination letter is dated Dec 27, 2022) | Owner |
| Location | **Libertyville, Illinois.** City and state only; don't publish a street address. | Owner decision |
| Public email | **info@beaconglobal.org** (Google Workspace group; must be monitored) | Owner |
| Program | God's Beacon (godsbeacon.org), released April 2025 | godsbeacon.org |
| EIN | **Do not display** | Owner decision |

**Leadership (all to be shown)**
- **Founders & Directors:** Jennifer Croft, Jerry Croft
- **Board of Directors:**
  - Russ Whitman — Technology Transformation Executive
  - Matt Furr — Lead Pastor, Center Point Church (Concord, NH)
- **God's Beacon team** (label as program team, separate from the board):
  - Digital Architecture: Jon Arnold & Russ Whitman
  - Product Owner & Marketing: Marissa Smith
  - Project Manager: Ted Mandelkorn

Home shows the board as four directors: the two founders plus Russ and Matt. The About page follows godsbeacon.org/about and lists "Founders" and "Board Members" in one team list with the program team (owner decision, §10).

---

## 3. Sitemap and navigation

```
Home  /
About  /about
Contact  /contact
Legal  /legal
```

- **Header:** Beacon Global logo and name · About · Contact · Legal · "God's Beacon ↗" (external link) · **Give** button
- **Footer:** "© 2026 Beacon Global, Inc. · A 501(c)(3) non-profit organization" · Privacy · God's Beacon app Terms · info@beaconglobal.org
- **Give** is a plain link to the existing Stripe payment link. No embed, no Stripe script.
  `https://buy.stripe.com/6oU14n1Mk5d38CX9zz1B600`

---

## 4. Page content (draft copy; adjust wording as needed without changing any facts)

### Home
- **Eyebrow:** none. *Removed intentionally: it repeated the "Organization at a glance" row, which already shows status, location and year above the fold.*
- **Headline:** Helping spread the Gospel to all the world.
- **Intro:** Beacon Global, Inc. is a 501(c)(3) non-profit organization based in Libertyville, Illinois. We operate God's Beacon, a digital platform that makes sermons and worship content from churches easily accessible anytime, anywhere.
- **Buttons:** About the organization (primary) · Contact us (secondary)
- **Organization at a glance** (above the fold): Legal name · Status · Established · Based in · Contact
- **Our program — God's Beacon:** Beacon Global, Inc. operates God's Beacon, a digital platform where churches share sermons and worship content with a global audience, reaching both lifelong believers and those just beginning their journey of faith. God's Beacon was released in April 2025. → Visit godsbeacon.org ↗
  - Includes a God's Beacon app screenshot beside the copy.
- **Scripture:** "Go into all the world and preach the gospel to all creation." — Mark 16:15 (NIV)
- **Leadership preview:** four directors, linking to About
- **Give:** a short invitation plus the Stripe link

### About
*Copy matches the About page on godsbeacon.org (owner decision, §10). Source of truth: `design/prototype/Beacon Global Website.dc.html` v2 and `app/about/page.tsx`.*

- **Intro:** "About Beacon Global". Founded December 2023 by Jennifer and Jerry Croft; the mission sentence; inspired by Mark 16:15 (NIV). Photo card with the Mark 16:15 verse.
- **Our Vision:** four walls / thousands of pastors; guided by Matthew 5:14 (NLT). Photo card with the verse.
- **Platform Features:** "a faith-based streaming platform, similar to Netflix", with four bullets (curated sermons and worship from church YouTube channels; search by verse, topic and life stage; AI-powered search; mobile and desktop web). Phone-mockup video.
- **The Team Behind the Vision:** Founders · Board Members · Digital Architecture · Product Owner & Marketing · Project Manager. Photo beside it.
- **Our Approach to Growth:** one or one million; Matthew 18:12 (NLT) in full on a photo card; released April 2025; exploring sustainable access models.
- **Donate** card (Stripe link) and **Contact Us** card (info@).

### Contact
- General inquiries: info@beaconglobal.org (a mailto link; no form)
- Location: Libertyville, Illinois
- A short line pointing product and app support questions to godsbeacon.org

### Legal
- **Website Privacy Notice** (new and short): the site uses no forms, no accounts and no analytics; email correspondence is handled via info@; donations are processed by Stripe on Stripe's own page. Include a contact line and an effective date. **Requires legal review before launch.**
- **God's Beacon app Terms & Privacy** → link to godsbeacon.org/terms-and-privacy-policy (not copied here)

**Scripture rule:** cite the translation on every verse, as shown above.

---

## 5. Brand and visual direction

**Relationship to the product:** a visible **family resemblance to godsbeacon.org is intended**, since Beacon Global is the parent organization. It must still read as an organization site, not the app. No streaming-style layouts or login elements. **App screenshots are approved** as supporting images in the program sections (an app screenshot on Home and a phone-mockup video on About), but never as the hero.

**Logo:** Beacon Global's logo is the same "B"-and-dove mark as God's Beacon (the file `Beacon_Global_Logo.svg` is attached separately). It's a symbol only, so set "Beacon Global" in type beside it.
- The mark has a white outline designed for dark backgrounds.
- On light backgrounds the outline and the tail of the swoosh disappear, so any light section needs a variant or a navy container behind the mark.

**Typography:** **Inter**, matching godsbeacon.org. Build hierarchy with weight and size; the owner asked for Inter specifically.

**Product color tokens** (from godsbeacon.org's CSS; the product uses a dark theme only)

| Token | HSL | Hex |
|---|---|---|
| background | 204.2 78.8% 12.9% | #07263B |
| blue-900 | 204 90% 8% | #021827 |
| blue-800 (card) | 206 52% 16% | #142C3E |
| blue-700 | 206 43% 23% | #213E54 |
| blue-500 (border) | 208 34% 35% | #3B5B78 |
| blue-200 (muted) | 210 24% 67% | #97ABBF |
| blue-50 | 214 68% 93% | #E1ECF9 |
| bright-teal | 187 100% 65% | #4DEAFF |
| dull-teal | 193 98% 83% | #A9ECFE |
| accent (yellow) | 45 100% 60% | #FFCC33 |
| accent hover | 45 100% 72% | #FFDB70 |
| radius | — | 10px |

**Logo palette:** navy #00386C · orange #F16122 · amber #F7941D · yellow #FFCC32 / #FFDE2F · pale #FFEBAA

**Photography:** one hero photo, from free stock (Unsplash or Pexels; confirm the license at selection). The theme is light, a beacon, reaching out. Avoid clichéd stock congregation shots and anything that looks like the app. Credit the photographer where the license asks for it.

**Approved imagery:** six Unsplash photos (credited on the Legal page) and the God's Beacon screenshot and phone mockup. The mockups come from products whose licenses allow commercial use.

---

## 6. Requirements

**Accessibility (WCAG 2.1 AA)**
- Text contrast at least 4.5:1 (3:1 for text 24px and larger); non-text UI elements at least 3:1.
  - *Accepted exception:* outline-button and mobile Menu button borders (#3B5B78 on #07263B, 2.19:1). Each button has a text label that identifies it, so the border isn't the only indicator. Kept as designed.
- Touch targets at least 44px, including nav links on mobile.
- Real `<a>` and `<button>` elements, meaningful alt text, and visible focus states.

**Responsive:** design desktop (1280–1440px) and mobile (390px) for all four pages.

**Technical (for the developer handoff)**
- Static Next.js site (`output: 'export'`) in a subfolder of the existing God's Beacon repository, deployed as a **separate Vercel project** on beaconglobal.org. The product uses Next.js App Router + Payload CMS on Vercel; this site uses no CMS.
- Styling: Tailwind v3 with shadcn-style HSL CSS variables, matching the product's conventions so the tokens transfer directly.
- No analytics or third-party scripts, so the privacy notice stays minimal. The only third-party connection is the outbound Stripe link.
- Metadata: a page title and description per page, an Open Graph image, favicon from the logo mark, and a sitemap.xml.

---

## 7. Design deliverables requested

1. A visual direction on the Home page, desktop and mobile.
2. Once the direction is approved: About, Contact and Legal, desktop and mobile.
3. Design tokens (colors, type scale, spacing, radius) written in a form that maps to the Tailwind/shadcn variables above.

---

## 8. Project plan and status

| Phase | Status |
|---|---|
| 0 — Technical alignment (stack, domain, repo approach) | ✅ Done |
| 1 — Purpose, information architecture and facts | ✅ Done |
| 2 — Visual direction | ✅ Approved in Claude Design |
| 3 — Content: final copy, photo selection, privacy notice (legal review) | ▶ Copy and photos approved; privacy notice awaiting legal review |
| 4 — Proof of concept: clickable prototype, review, save approved references | ✅ Done (prototype approved; baseline screenshots in `qa/screenshots/`) |
| 5 — Production build in Claude Code: static Next.js site, tokens, HANDOFF.md (file placement, Vercel project, DNS steps, test checklist) | ▶ Built as a standalone repo (`BeaconGlobal`) to move into the God's Beacon repo later; see HANDOFF.md |
| 6 — QA and handoff: accessibility, responsive checks, Lighthouse, links; Vercel preview → production | — |

---

## 9. Open items (outside design scope; track separately)

- ~~godsbeacon.org/about says "founded in December 2023."~~ *Resolved differently (§10): both sites now say December 2023. Open risk: the IRS determination letter is dated Dec 27, 2022, before that founding date; a reviewer comparing the two may ask.*
- **Legal name punctuation** must match exactly across the articles of incorporation, the D-U-N-S record, both websites and the Apple enrollment.
- **DNS:** when adding beaconglobal.org to Vercel, change only the A/CNAME records at GoDaddy. Do not move the nameservers, or Google Workspace email breaks.
- **Email authentication:** confirm DKIM is enabled in Google Workspace Admin (no record found at the default selector). DMARC is currently `p=none`.
- **Google Group settings:** set "Who can post" to "Anyone on the web" for info@.
- **Apple fee waiver condition:** the waiver requires that you distribute no paid apps and sell no digital goods through your apps. Any future App Store subscriptions for God's Beacon would end the waiver.
- **Donations** (deferred): recurring giving, the Stripe merchant name ("Beacon Global, Inc."), receipts for gifts of $250 or more, and Illinois Attorney General charitable registration.
- **Domain renewal:** beaconglobal.org expires Dec 22, 2026.

---

## 10. Decision log

| Date | Decision | Replaces |
|---|---|---|
| Sept 24, 2026 | Home eyebrow removed; the "at a glance" facts row covers it. | §4 Home eyebrow |
| Sept 24, 2026 | App screenshots approved in the program sections (laptop mockup on Home, phone video on About), not in the hero. | §5 "No app screenshots" |
| Sept 24, 2026 | Laptop and phone mockups cleared for use (from commercially licensed products). | — |
| Sept 24, 2026 | Outline and Menu button borders stay at #3B5B78 (2.19:1); text labels identify the buttons. | §6 non-text 3:1 (exception) |
| Sept 24, 2026 | Built in a standalone repo for now; the move into the God's Beacon repo is deferred until access is available. | §6 "subfolder of the existing God's Beacon repository" (still the target) |
| Sept 26, 2026 | Claude Design v2 ported: About page rewritten to match godsbeacon.org/about; hamburger menu icon; new Home screenshot; photo credits moved to Legal. | §4 About |
| Sept 26, 2026 | Established year is **2023** (Home facts row and About intro). | §2 "2022" and the §9 item asking godsbeacon.org to change |
| Sept 26, 2026 | Legal name written **"Beacon Global, Inc."** and **"non-profit"** everywhere on the site. | §2 "Beacon Global Inc." |
| Sept 26, 2026 | About has no standalone mission block and no facts block; the mission is in the intro. | §1 easy-to-copy block, §4 About mission/facts |
| Sept 26, 2026 | About lists "Founders" and "Board Members" as designed (Home keeps four director cards). | §2 four-director display on About |
| Sept 26, 2026 | Scripture keeps translation labels; Matthew 18:12 and 5:14 use exact NLT text. | v2 design's unlabeled / shortened verses |
