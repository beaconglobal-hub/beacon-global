// Bundles the built site (out/) into one self-contained HTML file for quick viewing
// where no server is available. Not for deployment. Run: npm run build && node scripts/preview-bundle.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const ROOT = 'out';
const MIME = { '.jpg': 'image/jpeg', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };
const dataUri = async (p) => `data:${MIME[extname(p)]};base64,${(await readFile(join(ROOT, p))).toString('base64')}`;
const PAGES = { home: '/', about: '/about/', contact: '/contact/', legal: '/legal/' };

const browser = await chromium.launch();
const page = await browser.newPage();
const sections = {};
let chrome;
for (const [key, path] of Object.entries(PAGES)) {
  await page.goto(`file://${process.cwd()}/${ROOT}${path}index.html`);
  const html = await page.evaluate(() => ({
    main: document.querySelector('main').innerHTML,
    header: document.querySelector('header').outerHTML,
    footer: document.querySelector('main').parentElement.innerHTML.split('</main>')[1],
    css: [...document.querySelectorAll('link[rel=stylesheet]')].map((l) => l.getAttribute('href')),
  }));
  sections[key] = html.main;
  chrome ??= html;
}
await browser.close();

let css = '';
for (const href of chrome.css) css += await readFile(join(ROOT, href), 'utf8');
// Next emits font URLs relative to the CSS chunk (../media/x.woff2).
for (const m of [...new Set(css.match(/\.\.\/media\/[^)"']+/g) ?? [])]) css = css.replaceAll(m, await dataUri(`/_next/static/${m.slice(3)}`));

let body = `${chrome.header}<main id="main" class="flex-1">${Object.entries(sections)
  .map(([k, h]) => `<div data-page="${k}"${k === 'home' ? '' : ' hidden'}>${h}</div>`)
  .join('')}</main>${chrome.footer}`;
for (const m of [...new Set(body.match(/\/assets\/[\w.-]+/g) ?? [])]) body = body.replaceAll(m, await dataUri(m));
body = body
  .replace(/href="\/(about|contact|legal)\/(#[\w-]+)?"/g, 'href="#$1"')
  .replace(/href="\/"/g, 'href="#home"')
  .replace(/<video /, '<video autoplay ');

const script = `
const show = () => {
  const k = (location.hash.slice(1) || 'home');
  const key = document.querySelector('[data-page="' + k + '"]') ? k : 'home';
  document.querySelectorAll('[data-page]').forEach((el) => (el.hidden = el.dataset.page !== key));
  document.querySelectorAll('nav a').forEach((a) => a.getAttribute('href') === '#' + key ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  const menu = document.getElementById('mobile-menu'); if (menu) menu.hidden = true;
  document.querySelector('[aria-controls=mobile-menu]')?.setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
};
addEventListener('hashchange', show); show();
const btn = document.querySelector('[aria-controls=mobile-menu]');
btn?.addEventListener('click', () => {
  const m = document.getElementById('mobile-menu'); m.hidden = !m.hidden;
  btn.setAttribute('aria-expanded', String(!m.hidden)); btn.textContent = m.hidden ? 'Menu' : 'Close';
});
document.querySelectorAll('button').forEach((b) => {
  if (b.textContent.includes('Copy')) b.addEventListener('click', () => navigator.clipboard?.writeText(document.getElementById('mission-text').innerText).then(() => { b.firstChild.textContent = 'Copied'; }));
  if (/Pause|Play/.test(b.textContent)) b.addEventListener('click', () => { const v = b.parentElement.querySelector('video'); v.paused ? v.play() : v.pause(); b.textContent = v.paused ? 'Play' : 'Pause'; });
});`;

const out = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Beacon Global site preview</title><style>${css}</style></head>
<body class="${await (async () => (await readFile(join(ROOT, 'index.html'), 'utf8')).match(/<html[^>]*class="([^"]*)"/)?.[1] ?? '')()}"><div class="flex min-h-screen flex-col">${body}</div><script>${script}</script></body></html>`;
await mkdir('preview', { recursive: true });
await writeFile('preview/beacon-global-preview.html', out);
console.log(`wrote preview/beacon-global-preview.html (${(out.length / 1e6).toFixed(1)} MB)`);
