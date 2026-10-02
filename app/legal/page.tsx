import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { APP_TERMS_URL, EMAIL, PHOTO_CREDITS, PRIVACY_EFFECTIVE_DATE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Legal & privacy',
  description: 'Website privacy notice for beaconglobal.org and links to the God’s Beacon app terms and privacy policy.',
  alternates: { canonical: '/legal/' },
};

// DRAFT: requires legal review before launch (build spec §4).
const PRIVACY = [
  {
    title: 'What this website collects',
    body: 'This website has no forms, no user accounts and no analytics. We do not use it to collect personal information from visitors.',
  },
  {
    title: 'Email',
    body: `If you email ${EMAIL}, we use your message and email address only to respond to you and to keep a record of our correspondence.`,
  },
  {
    title: 'Donations',
    body: 'The Give link takes you to a payment page hosted by Stripe. Stripe processes your payment and payment details on its own page under its own privacy policy; that information is not entered on this website.',
  },
  {
    title: 'Changes to this notice',
    body: 'If this notice changes, we will post the updated version on this page with a new effective date.',
  },
];

const credit = 'text-muted-foreground hover:text-foreground';
const block = 'flex flex-col gap-2 border-t border-muted pt-6';

export default function LegalPage() {
  return (
    <div className="container-site flex flex-wrap items-start gap-[clamp(40px,5vw,72px)] pb-section pt-[clamp(40px,6vw,72px)]">
      <header className="flex max-w-[820px] flex-[1_1_100%] flex-col gap-[18px]">
        <p className="eyebrow">Legal</p>
        <h1 className="text-[clamp(36px,4.3vw,56px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
          Legal &amp; privacy
        </h1>
      </header>
      <article aria-labelledby="privacy-h" className="flex min-w-0 max-w-[720px] flex-[2_1_460px] flex-col gap-7">
        <div className="flex flex-col gap-2.5">
          <h2 id="privacy-h" className="text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
            Website Privacy Notice
          </h2>
          <p className="text-sm text-muted-foreground">Effective {PRIVACY_EFFECTIVE_DATE}</p>
        </div>
        <p className="text-body leading-[1.7] text-foreground">
          This notice covers beaconglobal.org, the website of Beacon Global, Inc. It does not cover the God&apos;s Beacon
          app, which has its own terms and privacy policy.
        </p>
        {PRIVACY.map((p) => (
          <section key={p.title} className={block}>
            <h3 className="text-lg font-bold text-white">{p.title}</h3>
            <p className="text-base leading-[1.7] text-foreground">{p.body}</p>
          </section>
        ))}
        <section className={block}>
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <p className="text-base leading-[1.7] text-foreground">
            Questions about this notice can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>
      </article>
      <aside
        aria-labelledby="terms-h"
        className="flex min-w-0 flex-[1_1_280px] flex-col gap-3.5 rounded border border-border bg-card p-[clamp(24px,3vw,32px)]"
      >
        <h2 id="terms-h" className="text-xl font-bold leading-[1.3] text-white">
          God&apos;s Beacon app Terms &amp; Privacy
        </h2>
        <p className="text-[15px] leading-[1.6] text-foreground">
          The terms of use and privacy policy for the God&apos;s Beacon app are published on the product site.
        </p>
        <ExternalLink href={APP_TERMS_URL} className="link-cta">
          Read the app terms{' '}
        </ExternalLink>
      </aside>
      <p className="flex-[1_1_100%] text-xs leading-relaxed text-muted-foreground">
        Photos by{' '}
        {PHOTO_CREDITS.map((c, i) => (
          <span key={c.href}>
            <a href={c.href} target="_blank" rel="noopener" className={credit}>
              {c.name}
            </a>
            {i < PHOTO_CREDITS.length - 2 ? ', ' : i === PHOTO_CREDITS.length - 2 ? ', and ' : ' '}
          </span>
        ))}
        on{' '}
        <a href="https://unsplash.com" target="_blank" rel="noopener" className={credit}>
          Unsplash
        </a>
      </p>
    </div>
  );
}
