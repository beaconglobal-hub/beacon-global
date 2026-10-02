import { EMAIL, ORG_FACTS } from '@/lib/site';

/** Compact facts row under the Home hero. */
export function FactsList() {
  const items = [
    ...ORG_FACTS.map((f) => ({ label: f.label, value: <>{f.value}</> })),
    { label: 'Contact', value: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> },
  ];
  return (
    <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-x-7 gap-y-3.5">
      {items.map((f) => (
        <div key={f.label} className="flex flex-col gap-0.5">
          <dt className="text-label text-muted-foreground">{f.label}</dt>
          <dd className="m-0 text-[15px] font-medium text-foreground">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
