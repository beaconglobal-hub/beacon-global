import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectorGrid } from '@/components/DirectorGrid';
import { ExternalLink } from '@/components/ExternalLink';
import { FactsList } from '@/components/FactsList';
import { ScriptureBand } from '@/components/Scripture';
import { GODS_BEACON_URL, STRIPE_URL } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function HomePage() {
  return (
    <>
      <section className="container-site pt-[clamp(36px,5vw,56px)]">
        <div className="flex flex-wrap items-center gap-[clamp(28px,4vw,56px)]">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col justify-center gap-[22px]">
            <h1 className="text-display text-white">
              Helping spread the Gospel to <span className="text-primary">all the world.</span>
            </h1>
            <p className="max-w-[560px] text-lead text-foreground">
              Beacon Global, Inc. is a 501(c)(3) non-profit organization based in Libertyville, Illinois. We operate
              God&apos;s Beacon, a digital platform that makes sermons and worship content from churches easily
              accessible anytime, anywhere.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3">
              <Link href="/about/" className="btn-primary">
                About the organization
              </Link>
              <Link href="/contact/" className="btn-outline">
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-w-[440px] flex-[1_1_320px] overflow-hidden rounded border border-muted bg-card">
            <img
              src="/assets/photo-bible-by-water.jpg"
              alt="A person turning the pages of a Bible beside sunlit water"
              width={1333}
              height={2000}
              fetchPriority="high"
              className="absolute inset-0 block h-full w-full object-cover object-[50%_70%]"
            />
          </div>
        </div>

        <section aria-labelledby="glance-h" className="mt-[clamp(32px,4vw,40px)] border-t border-muted pt-[18px]">
          <h2 id="glance-h" className="sr-only">
            Organization at a glance
          </h2>
          <FactsList />
        </section>
      </section>

      <section aria-labelledby="program-h" className="container-site py-section">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(32px,5vw,72px)]">
          <div className="flex flex-col gap-[18px]">
            <p className="eyebrow">Our program</p>
            <h2 id="program-h" className="text-h2 text-white">
              God&apos;s Beacon
            </h2>
            <p className="text-body text-foreground">
              Beacon Global, Inc. operates God&apos;s Beacon, a digital platform where churches share sermons and worship
              content with a global audience, reaching both lifelong believers and those just beginning their journey
              of faith.
            </p>
            <p className="text-body text-foreground">God&apos;s Beacon was released in April 2025.</p>
            <ExternalLink href={GODS_BEACON_URL} className="link-cta">
              Visit godsbeacon.org{' '}
            </ExternalLink>
          </div>
          <figure className="m-0 flex flex-col gap-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded border border-muted bg-deep">
              <img
                src="/assets/gods-beacon-screenshot.webp"
                alt="The God's Beacon app showing sermons from churches"
                loading="lazy"
                className="absolute inset-0 block h-full w-full object-contain"
              />
            </div>
            <figcaption className="text-sm leading-normal text-muted-foreground">
              God&apos;s Beacon, operated by Beacon Global, Inc.
            </figcaption>
          </figure>
        </div>
      </section>

      <ScriptureBand
        quote="Go into all the world and preach the gospel to all creation."
        cite="Mark 16:15 (NIV)"
        photo="/assets/photo-preacher-pulpit.jpg"
      />

      <section aria-labelledby="leaders-h" className="container-site pt-section">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3.5">
            <p className="eyebrow">Leadership</p>
            <h2 id="leaders-h" className="text-h2 text-white">
              Board of Directors
            </h2>
          </div>
        </div>
        <DirectorGrid />
      </section>

      <section aria-labelledby="give-h" className="container-site py-section">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded border border-border bg-card p-[clamp(28px,4vw,48px)]">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2
              id="give-h"
              className="text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.15] tracking-[-0.02em] text-white"
            >
              Support the mission
            </h2>
            <p className="text-body leading-[1.6] text-foreground">
              Your gift helps churches share their sermons and worship with the world through God&apos;s Beacon. Beacon
              Global, Inc. is a 501(c)(3) public charity, and contributions are tax-deductible.
            </p>
            <p className="text-sm leading-normal text-muted-foreground">
              Donations are processed securely by Stripe on Stripe&apos;s own page.
            </p>
          </div>
          <a href={STRIPE_URL} className="btn-primary min-h-[52px] px-7 text-[17px]">
            Give <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
