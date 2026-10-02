import type { ReactNode } from 'react';

const Rule = () => <span aria-hidden="true" className="block h-[3px] w-10 rounded-[2px] bg-primary" />;

type Quote = { quote: string; cite: string };

/** Full-bleed photo band, text on the right over a navy side scrim. */
export function ScriptureBand({ quote, cite, photo }: Quote & { photo: string }) {
  return (
    <section
      aria-label="Scripture"
      className="relative overflow-hidden border-y border-muted bg-deep bg-cover"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(2,24,39,0.62) 0%,rgba(2,24,39,0.72) 40%,rgba(2,24,39,0.95) 68%),url('${photo}')`,
        backgroundPosition: '30% 50%',
      }}
    >
      <div className="container-site flex min-h-[clamp(420px,44vw,580px)] items-center justify-end">
        <figure className="m-0 flex max-w-[540px] flex-col gap-[22px] py-[clamp(56px,7vw,88px)]">
          <Rule />
          <blockquote className="m-0 text-scripture-xl text-white [text-wrap:balance]">“{quote}”</blockquote>
          <figcaption className="text-[15px] font-semibold tracking-[0.02em] text-primary">{cite}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Portrait photo card with the verse at the bottom over a navy bottom scrim. */
export function ScriptureCard({
  quote,
  cite,
  photo,
  position,
  scrim = 'linear-gradient(180deg,rgba(2,24,39,0.05) 0%,rgba(2,24,39,0.3) 40%,rgba(2,24,39,0.95) 80%)',
  size = 'lg',
}: Quote & { photo: string; position: string; scrim?: string; size?: 'lg' | 'md' }) {
  return (
    <figure
      className="relative m-0 box-border flex aspect-[4/5] max-h-[600px] flex-col justify-end gap-4 overflow-hidden rounded border border-muted bg-deep bg-cover p-card-pad"
      style={{ backgroundImage: `${scrim},url('${photo}')`, backgroundPosition: position }}
    >
      <Rule />
      <blockquote className={`m-0 text-white ${size === 'lg' ? 'text-scripture-lg' : 'text-scripture-md'}`}>
        “{quote}”
      </blockquote>
      <figcaption className="text-[15px] font-semibold text-primary">{cite}</figcaption>
    </figure>
  );
}

export function SectionIntro({ eyebrow, title, id, small, children }: {
  eyebrow: string;
  title: string;
  id: string;
  small?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[18px]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className={`text-white ${small ? 'text-h2-sm' : 'text-h2'}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}
