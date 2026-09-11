import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/lib/content/site';
import { differentiators } from '@/lib/content/misc';
import { revealProps } from '@/lib/reveal';
import BrandedVisual from '@/components/ui/BrandedVisual';

export const metadata: Metadata = {
  title: 'About | Eaquirs Tech',
  description: 'Eaquirs Tech is an AI-native software engineering firm from Bahawalpur, Pakistan, building enterprise-grade platforms across ERP, healthcare, and OpenInterview.me.',
};

const values = [
  {
    title: 'Honesty over comfort',
    body: 'We tell clients when a scope is too large, when a timeline is impossible, or when their existing codebase needs a hard reset.',
  },
  {
    title: 'Depth over coverage',
    body: 'We pick technologies we have shipped in production and stay at the frontier of what they can do, instead of claiming expertise in 40 frameworks.',
  },
  {
    title: 'Outcomes over output',
    body: 'Lines of code, commits, and ticket velocity are inputs. Deployed features solving real problems are the measure we care about.',
  },
  {
    title: 'Systematic over heroic',
    body: 'Good software is repeatable. We build systems — CI/CD, testing strategy, monitoring, documentation — so the product outlives any single engineer.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative flex min-h-[100svh] items-center overflow-hidden pb-0 pt-[var(--header-h)]">
        <video autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25">
          <source src="/about/eaquirs-story.mp4" type="video/mp4" />
        </video>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-navy/85" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
        <div className="container-site relative w-full">
          <div data-reveal="hidden" className="mx-auto max-w-3xl py-8 text-center sm:py-12">
            <p className="mb-2 text-micro font-bold uppercase tracking-label text-amber sm:mb-4">About us</p>
            <h1 className="text-h1 font-bold leading-tight text-white">
              <span className="block">We build software that survives</span>
              <span className="block">contact with reality</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-body text-on-dark-muted sm:mt-6">
              Eaquirs Tech is an AI-native software engineering company based in Bahawalpur, Pakistan.
              We specialize in building production-grade platforms for sectors where failure is not an option —
              healthcare, real estate, finance, and enterprise operations.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-4">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Work with us
              </Button>
              <Button href="/work" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                See our work
              </Button>
            </div>
            {/* Founding stats */}
            <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:mt-6 sm:gap-6 sm:pt-6">
              {[
                { value: '4', label: 'Platforms in production' },
                { value: 'Bahawalpur', label: 'Pakistan HQ' },
                { value: '100%', label: 'Written scope first' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="text-[1.35rem] font-light leading-none text-amber sm:text-[2rem]">{s.value}</dt>
                  <dd className="mt-1.5 text-micro text-on-dark-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-line">
        <div className="container-site py-14">
          <dl data-reveal="hidden" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-display font-bold text-amber leading-none">{stat.value}</dt>
                <dd className="mt-2 text-body-sm text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-10 sm:py-14">
        <div className="container-site grid items-start gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div {...revealProps(0)}>
            <SectionHeading eyebrow="Our story" title="Why Eaquirs Tech exists" align="left" />
            <div className="mt-6 space-y-5 text-body text-body leading-relaxed">
              <p>
                Most software agencies optimize for the sales cycle — promising whatever it takes to win the contract,
                then scrambling to deliver. We started Eaquirs Tech because we had been on the client side of that
                experience and found it consistently frustrating.
              </p>
              <p>
                We are a small team of engineers who have built — and broken — complex systems in production.
                We know what it costs when a hospital management system goes down during a shift handover,
                when an ERP incorrectly prices a jewellery consignment, or when a hiring platform leaks candidate data.
              </p>
              <p>
                That operational awareness shapes everything we build: the architecture decisions, the testing strategy,
                the deployment pipeline, the monitoring setup. We treat reliability as a first-class feature, not an afterthought.
              </p>
            </div>
          </div>
          <video
            {...revealProps(1)}
            className="h-[360px] w-full rounded-2xl object-cover sm:h-[410px] lg:h-[460px]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Eaquirs Tech story video"
          >
            <source src="/about/eaquirs-story.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-10 sm:py-14">
        <div className="container-site grid items-center gap-8 lg:grid-cols-[0.72fr_1fr] lg:gap-14">
          <BrandedVisual
            {...revealProps(0)}
            src="/about/muhammad-safdar-iqbal-coat.png"
            alt="Muhammad Safdar Iqbal, CEO of Eaquirs Tech"
            treatment="signature"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl"
            imageClassName="object-top"
          />
          <div {...revealProps(1)}>
            <p className="text-micro font-bold uppercase tracking-label text-amber">Leadership</p>
            <h2 className="mt-3 max-w-xl text-h3 font-bold text-ink">Muhammad Safdar Iqbal</h2>
            <p className="mt-2 text-body-sm font-semibold text-amber">CEO, Eaquirs Tech</p>
            <p className="mt-5 max-w-2xl text-body leading-relaxed text-body">
              I lead Eaquirs Tech with an engineering-first approach: turning demanding business operations into reliable software that teams can depend on every day.
            </p>
            <p className="mt-4 max-w-2xl text-body-sm leading-relaxed text-body">
              From product direction through production delivery, I focus on clear decisions, durable systems, and outcomes that make a visible difference for every client.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-dark relative overflow-hidden py-10 sm:py-14">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div data-reveal="hidden" className="container-site relative">
          <SectionHeading
            eyebrow="Why us"
            title="What clients actually notice"
            dark
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <article
                key={d.title}
                {...revealProps(i, 90)}
                className="radius-sig border border-white/15 bg-navy p-7 transition-all duration-base hover:-translate-y-1 hover:border-amber hover:shadow-card-hover"
              >
                <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-amber" />
                <h3 className="text-[1.1rem] font-semibold text-amber">{d.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-white/80">{d.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-site">
          <div data-reveal="hidden">
            <SectionHeading
              eyebrow="How we work"
              title="Values that guide our work"
              intro="The principles that keep our decisions practical, clear, and accountable."
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                {...revealProps(index, 80)}
                className="rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-amber" />
                <h3 className="text-[1.1rem] font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-body">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
