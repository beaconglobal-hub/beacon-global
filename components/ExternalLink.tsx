import type { ReactNode } from 'react';

type Props = { href: string; className?: string; children: ReactNode; arrow?: boolean };

/** Opens in a new tab, marks it with ↗ and tells screen readers. */
export function ExternalLink({ href, className, children, arrow = true }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className}>
      {children}
      {arrow && <span aria-hidden="true">↗</span>}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
