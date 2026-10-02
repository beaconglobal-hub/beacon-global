// Single source for organization facts and copy that reviewers cross-check.
// Change a fact here, not in page markup.

export const SITE_URL = 'https://beaconglobal.org';
export const STRIPE_URL = 'https://buy.stripe.com/6oU14n1Mk5d38CX9zz1B600';
export const GODS_BEACON_URL = 'https://godsbeacon.org';
export const APP_TERMS_URL = 'https://godsbeacon.org/terms-and-privacy-policy';
export const EMAIL = 'info@beaconglobal.org';

export const LEGAL_NAME = 'Beacon Global, Inc.';

export const ORG_FACTS = [
  { label: 'Legal name', value: LEGAL_NAME },
  { label: 'Status', value: '501(c)(3) public charity' },
  { label: 'Established', value: '2023' },
  { label: 'Based in', value: 'Libertyville, Illinois' },
] as const;

// About page "The Team Behind the Vision", matching godsbeacon.org/about.
export const TEAM = [
  { role: 'Founders', people: [{ name: 'Jennifer & Jerry Croft' }] },
  {
    role: 'Board Members',
    people: [
      { name: 'Russ Whitman', title: 'Technology Transformation Executive' },
      { name: 'Matt Furr', title: 'Lead Pastor, Center Point Church (Concord, NH)' },
    ],
  },
  { role: 'Digital Architecture', people: [{ name: 'Jon Arnold & Russ Whitman' }] },
  { role: 'Product Owner & Marketing', people: [{ name: 'Marissa Smith' }] },
  { role: 'Project Manager', people: [{ name: 'Ted Mandelkorn' }] },
];

// Home "Board of Directors" cards.
export const DIRECTORS = [
  { name: 'Jennifer Croft', role: 'Founder & Director' },
  { name: 'Jerry Croft', role: 'Founder & Director' },
  { name: 'Russ Whitman', role: 'Director · Technology Transformation Executive' },
  { name: 'Matt Furr', role: 'Director · Lead Pastor, Center Point Church (Concord, NH)' },
];

export const FEATURES = [
  'Curated sermons and worship videos from church YouTube channels',
  'Easy-to-use search tools (by Bible verse, topic, life stage, and more)',
  'AI-powered search tools',
  'Content accessible on mobile devices and desktop via web browser',
];

export const PHOTO_CREDITS = [
  { name: 'Guilherme Stecanella', href: 'https://unsplash.com/@guilhermestecanella' },
  { name: 'Jessica Mangano', href: 'https://unsplash.com/@jfdelp' },
  { name: 'Joshua Earle', href: 'https://unsplash.com/photos/oz1GKlRWab4' },
  { name: 'Ross Sneddon', href: 'https://unsplash.com/photos/6iIPZMfoYAo' },
  { name: 'Daniel Schaffer', href: 'https://unsplash.com/photos/25TdvIG_G6s' },
  { name: 'Nycholas Benaia', href: 'https://unsplash.com/@nycholasbenaia' },
];

export const PRIVACY_EFFECTIVE_DATE = 'September 24, 2026';
