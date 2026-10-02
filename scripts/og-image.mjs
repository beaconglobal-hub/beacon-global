// Regenerates public/og-image.png (1200×630). Run: npm run og
import { readFile, writeFile } from 'node:fs/promises';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';

const font = (w) => readFile(`node_modules/@fontsource/inter/files/inter-latin-${w}-normal.woff`);
const svg = await readFile('public/assets/beacon-global-mark.svg');
const mark = `data:image/svg+xml;base64,${svg.toString('base64')}`;

const tree = h(
  'div',
  {
    style: {
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      background: '#07263B', padding: 80, color: '#FFFFFF', fontFamily: 'Inter',
    },
  },
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 24 } },
    h('img', { src: mark, width: 104, height: 79 }),
    h('span', { style: { fontSize: 42, fontWeight: 700, letterSpacing: -0.5 } }, 'Beacon Global')),
  h('div', { style: { display: 'flex', flexDirection: 'column', gap: 28 } },
    h('div', { style: { display: 'flex', flexWrap: 'wrap', fontSize: 72, fontWeight: 800, lineHeight: 1.06, letterSpacing: -1.8, maxWidth: 980 } },
      'Helping spread the Gospel to ',
      h('span', { style: { color: '#FFCC33' } }, 'all the world.')),
    h('div', { style: { display: 'flex', fontSize: 30, fontWeight: 400, color: '#97ABBF' } },
      'Beacon Global, Inc. · 501(c)(3) non-profit · Libertyville, Illinois')),
);

const res = new ImageResponse(tree, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Inter', data: await font(400), weight: 400 },
    { name: 'Inter', data: await font(700), weight: 700 },
    { name: 'Inter', data: await font(800), weight: 800 },
  ],
});
await writeFile('public/og-image.png', Buffer.from(await res.arrayBuffer()));
console.log('wrote public/og-image.png');
