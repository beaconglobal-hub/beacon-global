// Checks the built site (out/) against the build spec. Run: npm run build && npm run check
// Writes screenshots to qa/current/; qa/screenshots/ contains the original baseline.
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const ROOT = 'out';
const PAGES = ['/', '/about/', '/contact/', '/legal/'];
const VIEWPORTS = { desktop: { width: 1280, height: 800 }, mobile: { width: 390, height: 844 } };
const STRIPE = 'https://buy.stripe.com/6oU14n1Mk5d38CX9zz1B600';
const LEGAL_NAME = 'Beacon Global, Inc.';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const body = await readFile(join(ROOT, p));
    res.writeHead(200, { 'content-type': TYPES[extname(p)] ?? 'application/octet-stream' }).end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const BASE = `http://localhost:${server.address().port}`;

const results = [];
const check = (page, vp, name, ok, detail = '') => results.push({ page, vp, name, ok, detail });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
await mkdir('qa/current', { recursive: true });

for (const [vp, size] of Object.entries(VIEWPORTS)) {
  const ctx = await browser.newContext({ viewport: size, reducedMotion: 'reduce' });
  for (const path of PAGES) {
    const page = await ctx.newPage();
    const external = [];
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (r) => { if (!r.url().startsWith(BASE)) external.push(r.url()); });
    const resp = await page.goto(BASE + path, { waitUntil: 'networkidle' });
    check(path, vp, 'page loads (200)', resp.status() === 200);
    check(path, vp, 'no third-party requests', external.length === 0, external.join(', '));

    const data = await page.evaluate((LEGAL_NAME) => {
      const lum = (c) => {
        const m = c.match(/[\d.]+/g).map(Number);
        const [r, g, b] = m.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const bgOf = (el) => {
        for (let e = el; e; e = e.parentElement) {
          const cs = getComputedStyle(e);
          if (cs.backgroundImage !== 'none' && cs.backgroundImage.includes('url(')) return { photo: true };
          const m = cs.backgroundColor.match(/[\d.]+/g);
          if (m && (m[3] === undefined || Number(m[3]) > 0.9)) return { color: cs.backgroundColor };
        }
        return { color: 'rgb(7,38,59)' };
      };
      const contrast = [];
      for (const el of document.querySelectorAll('body *')) {
        const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
        if (!own || !el.offsetParent && getComputedStyle(el).position !== 'fixed') continue;
        if (el.closest('.sr-only')) continue;
        const cs = getComputedStyle(el);
        const bg = bgOf(el);
        if (bg.photo) continue; // text over photo scrims: reviewed visually
        const a = lum(cs.color), b = lum(bg.color);
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        const px = parseFloat(cs.fontSize), large = px >= 24 || (px >= 18.66 && Number(cs.fontWeight) >= 700);
        const need = large ? 3 : 4.5;
        if (ratio < need) contrast.push(`${el.textContent.trim().slice(0, 40)} ${ratio.toFixed(2)}:1 (<${need})`);
      }
      const targets = [];
      for (const el of document.querySelectorAll('a, button')) {
        const r = el.getBoundingClientRect();
        if (!r.width || el.closest('.sr-only') || el.closest('[hidden]')) continue;
        const inline = el.closest('p, dd') && getComputedStyle(el).display === 'inline';
        if (r.height < 44 && !inline) targets.push(`${el.textContent.trim().slice(0, 30)} (${Math.round(r.height)}px)`);
      }
      const inView = (txt) => {
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n; (n = w.nextNode()); ) {
          if (!n.textContent.includes(txt)) continue;
          const r = n.parentElement.getBoundingClientRect();
          if (r.height && r.bottom <= innerHeight && !n.parentElement.closest('.sr-only')) return true;
        }
        return false;
      };
      return {
        h1: document.querySelectorAll('h1').length,
        text: document.body.innerText,
        contrast, targets,
        imgsNoAlt: [...document.querySelectorAll('img:not([alt])')].map((i) => i.src),
        stripe: [...document.querySelectorAll('a')].filter((a) => a.textContent.includes('Give')).map((a) => a.href),
        internal: [...new Set([...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href').split('#')[0]))],
        fold: { name: inView(LEGAL_NAME), status: inView('501(c)(3)'), contact: inView('info@beaconglobal.org') },
        hscroll: document.documentElement.scrollWidth > innerWidth,
        title: document.title,
        desc: document.querySelector('meta[name="description"]')?.content,
        og: document.querySelector('meta[property="og:image"]')?.content,
        noindex: !!document.querySelector('meta[name="robots"][content*="noindex"]'),
      };
    }, LEGAL_NAME);

    check(path, vp, 'exactly one h1', data.h1 === 1, `found ${data.h1}`);
    check(path, vp, 'text contrast AA (solid backgrounds)', data.contrast.length === 0, data.contrast.join('; '));
    check(path, vp, 'touch targets ≥44px', data.targets.length === 0, data.targets.join('; '));
    check(path, vp, 'all images have alt', data.imgsNoAlt.length === 0, data.imgsNoAlt.join(', '));
    check(path, vp, 'no horizontal scroll', !data.hscroll);
    check(path, vp, 'title + description + og:image', !!(data.title && data.desc && data.og));
    check(path, vp, 'no placeholder copy', !/coming soon|lorem|placeholder|drop a/i.test(data.text));
    check(path, vp, 'no EIN shown', !/\bEIN\b|\d{2}-\d{7}/.test(data.text));
    const verses = data.text.match(/(Mark|Matthew|John|Luke|Psalm|Isaiah)\s+\d+:\d+[^\n]*/g) ?? [];
    check(path, vp, 'every verse cites translation', verses.every((v) => /\((NIV|NLT|ESV|KJV|NKJV|NASB|CSB)\)/.test(v)), verses.join(' | '));
    if (vp === 'desktop' || path === '/') {
      const give = data.stripe.filter(Boolean);
      check(path, vp, 'Give links go to Stripe', give.length > 0 && give.every((h) => h === STRIPE), give.join(', '));
    }
    for (const href of data.internal) {
      const r = await page.request.get(BASE + href);
      if (r.status() !== 200) check(path, vp, `internal link ${href}`, false, `status ${r.status()}`);
    }
    if (path === '/' && vp === 'desktop') {
      check(path, vp, 'legal name above fold @1280×800', data.fold.name);
      check(path, vp, '501(c)(3) above fold @1280×800', data.fold.status);
      check(path, vp, 'contact above fold @1280×800', data.fold.contact);
      check(path, vp, 'states Beacon Global, Inc. operates God’s Beacon', data.text.includes(`${LEGAL_NAME} operates God's Beacon`) || data.text.includes(`${LEGAL_NAME} is a 501(c)(3) non-profit organization based in Libertyville, Illinois. We operate God's Beacon`));
    }
    check(path, vp, 'legal name spelled consistently', !/Beacon Global Inc\b/.test(data.text));

    if (path === '/' && vp === 'mobile') {
      await page.getByRole('button', { name: 'Open menu' }).click();
      const menu = page.locator('#mobile-menu');
      check(path, vp, 'mobile menu opens', await menu.isVisible());
      await menu.getByRole('link', { name: 'About', exact: true }).click();
      await page.waitForURL('**/about/');
      check(path, vp, 'mobile navigation reaches About', await page.getByRole('heading', { level: 1 }).innerText() === 'About Beacon Global');
      check(path, vp, 'mobile menu closes after navigation', !(await menu.isVisible()));
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
    }
    check(path, vp, 'no browser runtime errors', errors.length === 0, errors.join('; '));

    const name = path === '/' ? 'home' : path.replaceAll('/', '');
    await page.screenshot({ path: `qa/current/${name}-${vp}.png`, fullPage: true });
    await page.close();
  }
  await ctx.close();
}

for (const f of ['sitemap.xml', 'robots.txt', 'icon.svg', 'og-image.png']) {
  const r = await fetch(`${BASE}/${f}`);
  check('/', '-', `${f} exists`, r.ok);
}

await browser.close();
server.close();

const failed = results.filter((r) => !r.ok);
for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.vp.padEnd(7)} ${r.page.padEnd(10)} ${r.name}${!r.ok && r.detail ? `\n        → ${r.detail}` : ''}`);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
