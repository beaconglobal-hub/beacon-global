import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { PhoneVideo } from '@/components/PhoneVideo';
import { ScriptureCard } from '@/components/Scripture';
import { EMAIL, FEATURES, STRIPE_URL, TEAM } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Beacon Global, Inc., the 501(c)(3) non-profit in Libertyville, Illinois that operates God’s Beacon: vision, platform, team and approach to growth.',
  alternates: { canonical: '/about/' },
};

// Copy matches the About page on godsbeacon.org.
const twoCol = 'grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(28px,5vw,64px)]';
const divided = 'border-t border-muted pt-[clamp(40px,5vw,64px)]';
const h2 = 'text-h2-sm text-white';
const body = 'text-body text-foreground';

export default function AboutPage() {
  return (
    <div className="container-site flex flex-col gap-[clamp(56px,7vw,88px)] pb-section pt-[clamp(40px,6vw,72px)]">
      <section aria-labelledby="about-h" className={`${twoCol} !items-center`}>
        <div className="flex flex-col gap-5">
          <p className="eyebrow">About</p>
          <h1
            id="about-h"
            className="text-[clamp(36px,4.3vw,56px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white"
          >
            About Beacon Global
          </h1>
          <p className="text-lead text-foreground">
            Beacon Global, Inc. is a 501(c)(3) non-profit organization founded in December 2023 by Jennifer and Jerry
            Croft. Our mission is simple but powerful: to help spread the Gospel to all the world by making sermons and
            worship content easily accessible anytime, anywhere.
          </p>
          <p className={body}>
            Inspired by Mark 16:15 (NIV), “Go into all the world and preach the gospel to all creation,” Beacon Global
            has created God&apos;s Beacon, which serves as a digital platform where churches can share their messages
            with a global audience, reaching both lifelong believers and those just beginning their journey of faith.
          </p>
        </div>
        <ScriptureCard
          quote="Go into all the world and preach the gospel to all creation."
          cite="Mark 16:15 (NIV)"
          photo="/assets/photo-mountain-open-arms.jpg"
          position="50% 55%"
          scrim="linear-gradient(180deg,rgba(2,24,39,0) 0%,rgba(2,24,39,0.2) 50%,rgba(2,24,39,0.92) 85%)"
        />
      </section>

      <section aria-labelledby="vision-h" className={`${twoCol} ${divided}`}>
        <ScriptureCard
          quote="You are the light of the world—like a city on a hilltop that cannot be hidden."
          cite="Matthew 5:14 (NLT)"
          photo="/assets/photo-city-hilltop.jpg"
          position="60% 35%"
        />
        <div className="flex flex-col gap-[18px] self-center">
          <h2 id="vision-h" className={h2}>
            Our Vision
          </h2>
          <p className={body}>
            We believe that powerful, Spirit-led messages should not be confined to four walls. Every week, thousands
            of pastors deliver meaningful sermons many of which reach only a small audience. Beacon Global aims to
            change that by offering a platform where these messages can reach those who need them most.
          </p>
          <p className={body}>
            Guided by Matthew 5:14 (NLT), “You are the light of the world—like a city on a hilltop that cannot be
            hidden,” our goal is to be that beacon of light, shining God’s word across the globe.
          </p>
        </div>
      </section>

      <section aria-labelledby="features-h" className={`${twoCol} ${divided}`}>
        <div className="flex flex-col gap-5 self-center">
          <h2 id="features-h" className={h2}>
            Platform Features
          </h2>
          <p className={body}>
            God&apos;s Beacon functions like a faith-based streaming platform, similar to Netflix, offering:
          </p>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {FEATURES.map((f) => (
              <li key={f} className="grid grid-cols-[12px_1fr] items-baseline gap-3.5 text-body leading-[1.55] text-foreground">
                <span aria-hidden="true" className="h-2 w-2 -translate-y-0.5 rounded-[2px] bg-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className={body}>
            Whether you’re seeking comfort, growth, or deeper understanding, we want God&apos;s Beacon to meet you
            where you are.
          </p>
        </div>
        <PhoneVideo />
      </section>

      <section aria-labelledby="team-h" className={`${twoCol} ${divided}`}>
        <div className="flex flex-col gap-[18px]">
          <h2 id="team-h" className={h2}>
            The Team Behind the Vision
          </h2>
          <dl className="m-0 flex flex-col border-t border-muted">
            {TEAM.map((row) => (
              <div
                key={row.role}
                className="grid grid-cols-[minmax(0,200px)_minmax(0,1fr)] gap-x-6 gap-y-2 border-b border-muted py-4"
              >
                <dt className="text-[15px] text-muted-foreground">{row.role}</dt>
                <dd className="m-0 flex flex-col gap-1.5 text-base font-semibold leading-normal text-white">
                  {row.people.map((p) => (
                    <span key={p.name}>
                      {p.name}
                      {'title' in p && <span className="font-normal text-foreground">, {p.title}</span>}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          aria-hidden="true"
          className="min-h-[320px] self-stretch rounded border border-muted bg-deep bg-cover"
          style={{ backgroundImage: "url('/assets/photo-worship-hands.jpg')", backgroundPosition: '50% 45%' }}
        />
      </section>

      <section aria-labelledby="growth-h" className={`${twoCol} ${divided}`}>
        <div className="flex flex-col gap-[18px] self-center">
          <h2 id="growth-h" className={h2}>
            Our Approach to Growth
          </h2>
          <p className={body}>
            Success isn’t measured in numbers alone. While we hope to reach a wide audience, we are reminded of Matthew
            18:12 (NLT):
          </p>
          <p className={body}>Each person matters. Whether we reach one or one million, our mission remains the same.</p>
          <p className={body}>
            Beacon Global released God&apos;s Beacon in April, 2025. We’re exploring sustainable models for church and
            user access, with the potential for free or donation-based access as we grow.
          </p>
        </div>
        <ScriptureCard
          quote="If a man has a hundred sheep and one of them wanders away, what will he do? Won’t he leave the ninety-nine others on the hills and go out to search for the one that is lost?"
          cite="Matthew 18:12 (NLT)"
          photo="/assets/photo-hillside.jpg"
          position="50% 60%"
          scrim="linear-gradient(180deg,rgba(2,24,39,0) 0%,rgba(2,24,39,0.15) 45%,rgba(2,24,39,0.9) 70%,rgba(2,24,39,0.97) 100%)"
          size="md"
        />
      </section>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        <section aria-labelledby="donate-h" className="flex flex-col gap-4 rounded border border-border bg-card p-card-pad">
          <h2 id="donate-h" className={h2}>
            Donate
          </h2>
          <p className={body}>
            If you believe in our mission, we invite you to make a voluntary donation. Your gift helps Beacon Global
            reach more people with God’s Word. Every donation—large or small—makes a meaningful difference.
          </p>
          <ExternalLink href={STRIPE_URL} className="btn-primary min-h-[52px] self-start text-[17px]">
            Click here to donate securely via Stripe{' '}
          </ExternalLink>
          <p className="text-base italic leading-[1.6] text-foreground">
            Thank you for helping us shine Beacon Global farther and brighter.
          </p>
        </section>
        <section aria-labelledby="about-contact-h" className="flex flex-col gap-4 rounded border border-muted bg-card p-card-pad">
          <h2 id="about-contact-h" className={h2}>
            Contact Us
          </h2>
          <p className={body}>For more information, reach out to:</p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex min-h-[44px] items-center self-start text-[clamp(20px,2vw,24px)] font-bold"
          >
            {EMAIL}
          </a>
        </section>
      </div>
    </div>
  );
}
