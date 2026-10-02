import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { EMAIL, GODS_BEACON_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Beacon Global, Inc. in Libertyville, Illinois: info@beaconglobal.org.',
  alternates: { canonical: '/contact/' },
};

const cardLabel = 'text-label font-semibold uppercase tracking-[0.08em] text-muted-foreground';

export default function ContactPage() {
  return (
    <div className="container-site flex flex-col gap-[clamp(40px,5vw,56px)] pb-section pt-[clamp(40px,6vw,72px)]">
      <header className="flex max-w-[820px] flex-col gap-[18px]">
        <p className="eyebrow">Contact</p>
        <h1 className="text-[clamp(36px,4.3vw,56px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
          Get in touch
        </h1>
        <p className="text-lead text-foreground">
          We welcome questions from partners, churches, donors and anyone interested in the work of Beacon Global, Inc.
        </p>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        <section
          aria-labelledby="c-email"
          className="col-span-full flex flex-col gap-3.5 rounded border border-border bg-card p-[clamp(24px,3vw,36px)]"
        >
          <h2 id="c-email" className={cardLabel}>
            General inquiries
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="flex min-h-[44px] items-center self-start break-words text-[clamp(24px,3vw,40px)] font-bold tracking-[-0.02em] text-white hover:text-link-hover"
          >
            {EMAIL}
          </a>
          <p className="text-[15px] leading-[1.55] text-muted-foreground">
            Email is the best way to reach us. We read every message.
          </p>
        </section>
        <section aria-labelledby="c-loc" className="flex flex-col gap-3 rounded border border-muted bg-card p-[clamp(24px,3vw,36px)]">
          <h2 id="c-loc" className={cardLabel}>
            Location
          </h2>
          <p className="text-[22px] font-bold text-white">Libertyville, Illinois</p>
          <p className="text-[15px] leading-[1.55] text-muted-foreground">
            Beacon Global, Inc. serves churches and audiences worldwide from Illinois.
          </p>
        </section>
        <section aria-labelledby="c-app" className="flex flex-col gap-3 rounded border border-muted bg-card p-[clamp(24px,3vw,36px)]">
          <h2 id="c-app" className={cardLabel}>
            God&apos;s Beacon app support
          </h2>
          <p className="text-body leading-[1.6] text-foreground">
            For questions about using the God&apos;s Beacon app, visit the product site.
          </p>
          <ExternalLink href={GODS_BEACON_URL} className="link-cta">
            godsbeacon.org{' '}
          </ExternalLink>
        </section>
      </div>
    </div>
  );
}
