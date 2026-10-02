'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GODS_BEACON_URL, STRIPE_URL } from '@/lib/site';

const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/legal/', label: 'Legal' },
];

const deskLink =
  'flex h-11 items-center px-3.5 text-[15px] font-medium text-foreground no-underline hover:text-white aria-[current=page]:text-white aria-[current=page]:shadow-[inset_0_-2px_0_#FFCC33]';
const mobileLink =
  'flex min-h-[52px] items-center border-b border-muted text-[17px] font-medium text-foreground no-underline hover:text-white aria-[current=page]:text-white';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (pathname === href || pathname === href.slice(0, -1) ? 'page' : undefined);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-muted bg-background">
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" onClick={close} className="flex min-h-[44px] items-center gap-3 text-white no-underline hover:text-white">
          <img src="/assets/beacon-global-mark.svg" alt="" width={48} height={36} className="block h-auto w-12" />
          <span className="text-lg font-bold tracking-[-0.01em]">Beacon Global</span>
          <span className="sr-only"> — home</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 nav:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)} className={deskLink}>
              {n.label}
            </Link>
          ))}
          <a href={GODS_BEACON_URL} target="_blank" rel="noopener" className={`${deskLink} gap-1.5`}>
            God&apos;s Beacon <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={STRIPE_URL}
            className="ml-2.5 flex h-11 items-center rounded bg-primary px-[22px] text-[15px] font-bold text-primary-foreground no-underline hover:bg-primary-hover hover:text-primary-foreground"
          >
            Give
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative flex h-11 w-11 items-center justify-center rounded border border-border bg-card nav:hidden"
        >
          {open ? (
            <span aria-hidden="true" className="relative block h-5 w-5">
              <span className="absolute left-0 top-[9px] h-0.5 w-5 rotate-45 rounded-sm bg-white" />
              <span className="absolute left-0 top-[9px] h-0.5 w-5 -rotate-45 rounded-sm bg-white" />
            </span>
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-0.5 w-5 rounded-sm bg-white" />
              <span className="block h-0.5 w-5 rounded-sm bg-white" />
              <span className="block h-0.5 w-5 rounded-sm bg-white" />
            </span>
          )}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="flex-col border-t border-muted bg-background px-gutter pb-5 pt-2 [&:not([hidden])]:flex nav:!hidden"
      >
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={current(n.href)} className={mobileLink} onClick={close}>
            {n.label}
          </Link>
        ))}
        <a href={GODS_BEACON_URL} target="_blank" rel="noopener" className={`${mobileLink} gap-1.5`}>
          God&apos;s Beacon <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={STRIPE_URL}
          className="mt-4 flex min-h-[52px] items-center justify-center rounded bg-primary text-[17px] font-bold text-primary-foreground no-underline hover:bg-primary-hover hover:text-primary-foreground"
        >
          Give
        </a>
      </nav>
    </header>
  );
}
