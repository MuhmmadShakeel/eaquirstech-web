import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/lib/content/site';
import { differentiators } from '@/lib/content/misc';
import { revealProps } from '@/lib/reveal';

export const metadata: Metadata = {
  title: 'About | Eaquirs Tech',
  description: 'Eaquirs Tech is an AI-native software engineering firm from Lahore, Pakistan, building enterprise-grade platforms across ERP, healthcare, and AI hiring.',
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
      <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center pt-36 pb-20">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <img src="/mockups/desktop-dashboard.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-16 hidden w-[38rem] opacity-25 xl:block" />
        <img src="/mockups/desktop-dashboard.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-16 hidden w-[38rem] opacity-25 xl:block" />
        <div className="container-site relative w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-micro font-bold uppercase tracking-label text-amber mb-4">About us</p>
            <h1 className="text-h1 font-bold leading-tight text-white">
              We build software that survives<br className="hidden md:block" /> contact with reality
            </h1>
            <p className="mt-6 text-body text-on-dark-muted max-w-2xl mx-auto">
              Eaquirs Tech is an AI-native software engineering company based in Lahore, Pakistan.
              We specialize in building production-grade platforms for sectors where failure is not an option —
              healthcare, real estate, finance, and enterprise operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Work with us
              </Button>
              <Button href="/work" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                See our work
              </Button>
            </div>
            {/* Founding stats */}
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { value: '4', label: 'Platforms in production' },
                { value: 'Lahore', label: 'Pakistan HQ' },
                { value: '100%', label: 'Written scope first' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="text-[2rem] font-light text-amber leading-none">{s.value}</dt>
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
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-display font-bold text-amber-deep leading-none">{stat.value}</dt>
                <dd className="mt-2 text-body-sm text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Our story" title="Why Eaquirs Tech exists" align="left" />
            <div className="mt-8 space-y-5 text-body text-body leading-relaxed">
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
        </div>
      </section>

      {/* Values */}
      <section className="section-y section-light">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we work"
            title="Values that show up in the code"
            intro="Principles are meaningless unless they change how you make decisions under pressure. These are the ones that actually guide our work."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <article
                key={v.title}
                {...revealProps(i, 80)}
                className="rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-amber" />
                <h3 className="text-[1.1rem] font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-body-sm text-body leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-y section-dark relative overflow-hidden">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Why us"
            title="What clients actually notice"
            dark
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <article
                key={d.title}
                {...revealProps(i, 90)}
                className="radius-sig border border-dark-border bg-dark-card p-7 transition-all duration-base hover:-translate-y-1 hover:border-amber/40"
              >
                <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-amber" />
                <h3 className="text-[1.1rem] font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-body-sm text-on-dark-muted">{d.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-white">
        <div className="container-site text-center">
          <h2 className="text-h2 font-bold text-ink">Ready to work with us?</h2>
          <p className="mt-4 text-body text-body max-w-xl mx-auto">
            Drop us a message. No obligation, no generic discovery call — just an honest conversation about what you are trying to build.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" arrow>
              Get in touch
            </Button>
            <Button href="/work" variant="outline" size="lg">
              See our work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
