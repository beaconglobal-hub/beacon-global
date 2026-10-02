'use client';

import { useEffect, useRef, useState } from 'react';

/** Muted looping mockup with a Pause control. Respects prefers-reduced-motion. */
export function PhoneVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    v.play().then(() => setPaused(false)).catch(() => setPaused(true));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <figure className="m-0 flex flex-col gap-2.5 self-center">
      <div className="relative w-full overflow-hidden rounded border border-muted bg-deep">
        {/* #t=0.1 makes Safari paint a first frame when autoplay is off (reduced motion). */}
        <video
          ref={ref}
          src="/assets/gods-beacon-mockup.mp4#t=0.1"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="The platform shown on a phone: browsing and searching sermons"
          className="block h-auto w-full"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? 'Play video' : 'Pause video'}
          className="absolute bottom-3 right-3 flex h-11 items-center justify-center rounded border border-border bg-deep px-4 text-sm font-semibold text-white hover:border-muted-foreground"
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </figure>
  );
}
