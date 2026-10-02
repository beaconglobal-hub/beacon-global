import type { Config } from 'tailwindcss';

// Token names mirror godsbeacon.org's shadcn-style HSL variables (see app/globals.css).
const hsl = (v: string) => `hsl(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', nav: '880px', lg: '1024px' },
    extend: {
      colors: {
        background: hsl('background'),
        foreground: hsl('foreground'),
        card: { DEFAULT: hsl('card'), foreground: hsl('card-foreground') },
        muted: { DEFAULT: hsl('muted'), foreground: hsl('muted-foreground') },
        border: hsl('border'),
        primary: {
          DEFAULT: hsl('primary'),
          hover: hsl('primary-hover'),
          foreground: hsl('primary-foreground'),
        },
        ring: hsl('ring'),
        link: { DEFAULT: hsl('link'), hover: hsl('link-hover') },
        eyebrow: hsl('eyebrow'),
        deep: hsl('blue-900'),
      },
      borderRadius: { DEFAULT: 'var(--radius)', brand: 'var(--radius)' },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'] },
      fontSize: {
        display: ['clamp(38px, 4.3vw, 56px)', { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '800' }],
        h2: ['clamp(30px, 3.2vw, 42px)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-sm': ['clamp(28px, 3vw, 38px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'scripture-xl': ['clamp(28px, 3.2vw, 42px)', { lineHeight: '1.22', letterSpacing: '-0.02em', fontWeight: '700' }],
        'scripture-lg': ['clamp(22px, 2.2vw, 28px)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '700' }],
        'scripture-md': ['clamp(20px, 2vw, 24px)', { lineHeight: '1.4', fontWeight: '600' }],
        lead: ['clamp(17px, 1.4vw, 19px)', { lineHeight: '1.6' }],
        body: ['17px', { lineHeight: '1.65' }],
        label: ['13px', { lineHeight: '1.5' }],
      },
      maxWidth: { container: '1200px' },
      spacing: {
        gutter: 'clamp(20px, 4vw, 40px)',
        section: 'clamp(64px, 8vw, 104px)',
        'card-pad': 'clamp(24px, 3.4vw, 40px)',
      },
      backgroundImage: {
        'scrim-bottom':
          'linear-gradient(180deg, rgba(2,24,39,0.05) 0%, rgba(2,24,39,0.3) 40%, rgba(2,24,39,0.95) 80%)',
        'scrim-side':
          'linear-gradient(90deg, rgba(2,24,39,0.62) 0%, rgba(2,24,39,0.72) 40%, rgba(2,24,39,0.95) 68%)',
      },
    },
  },
  plugins: [],
};

export default config;
