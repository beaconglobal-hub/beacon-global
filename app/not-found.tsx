import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-site flex flex-col gap-5 pb-section pt-[clamp(40px,6vw,72px)]">
      <p className="eyebrow">Page not found</p>
      <h1 className="text-[clamp(36px,4.3vw,56px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
        We couldn&apos;t find that page
      </h1>
      <Link href="/" className="btn-primary self-start">
        Go to the home page
      </Link>
    </div>
  );
}
