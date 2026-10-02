import Link from 'next/link';
import { APP_TERMS_URL, EMAIL } from '@/lib/site';

const footLink = 'flex min-h-[44px] items-center text-sm text-foreground hover:text-white';

export function SiteFooter() {
  return (
    <footer className="border-t border-muted bg-deep">
      <div className="container-site flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8">
        <div className="flex items-center gap-3">
          <img src="/assets/beacon-global-mark.svg" alt="" width={36} height={27} className="block h-auto w-9" />
          <p className="text-sm leading-normal text-muted-foreground">
            © 2026 Beacon Global, Inc. · A 501(c)(3) non-profit organization
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
          <Link href="/legal/" className={footLink}>
            Privacy
          </Link>
          <a href={APP_TERMS_URL} target="_blank" rel="noopener" className={footLink}>
            God&apos;s Beacon app Terms<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${EMAIL}`} className={footLink}>
            {EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
