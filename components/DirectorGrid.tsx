import { DIRECTORS } from '@/lib/site';

export function DirectorGrid() {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 p-0">
      {DIRECTORS.map((d) => (
        <li key={d.name} className="flex flex-col gap-2 rounded border border-muted bg-card p-6">
          <span className="text-lg font-bold text-white">{d.name}</span>
          <span className="text-[15px] leading-normal text-muted-foreground">{d.role}</span>
        </li>
      ))}
    </ul>
  );
}
