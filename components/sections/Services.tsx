import Icon, { type IconName } from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import { services } from '@/lib/content/services';
import { revealProps } from '@/lib/reveal';

const quickStats = [
  {
    value: '95%',
    title: 'PERFORMANCE GAIN',
    sub: 'Hospital system rebuilt in 6 weeks — zero care disruption',
  },
  {
    value: '6 WKS',
    title: 'FULL REPLACEMENT',
    sub: 'Complete hospital ERP replaced without a single day of downtime',
  },
  {
    value: '4+',
    title: 'PLATFORMS IN PRODUCTION',
    sub: 'ERP, AI hiring, healthcare — all live and serving users today',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* ── "WHAT YOU GET WHEN" oversized heading ── */}
      <div className="relative isolate overflow-hidden bg-[#000000] py-12 text-white lg:py-16">
      <img src="/mockups/hero-platform.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[46rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.14] sm:w-[58rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#000000]/60" />
      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Left: giant text */}
          <div>
            <h2 className="font-black uppercase leading-[0.92] tracking-tight text-white" style={{ fontSize: 'clamp(2.35rem, 4.8vw, 4.75rem)' }}>
              WHAT YOU
              <br />
              <span className="text-amber">GET WHEN</span>
            </h2>
            <p
              className="mt-4 font-light uppercase tracking-widest text-white/60"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2.6rem)' }}
            >
              Senior engineers build it
            </p>
          </div>

          {/* Right: description */}
          <div className="mx-auto mt-5 max-w-xl">
            <p className="text-body leading-relaxed text-white/70">
              We combine senior engineering expertise with AI tooling to deliver outcomes that
              traditional agencies can&apos;t match on timeline, cost, or scale.
            </p>
            <Button href="/services" variant="outline" size="md" arrow className="mt-6 border-amber/70 bg-transparent !text-amber hover:border-white/50 hover:!text-white">
              All services
            </Button>
          </div>
        </div>

        {/* ── 3 stat boxes ── */}
        <div className="mt-8 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
          {quickStats.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/15 bg-[#000000] p-5 transition-colors duration-base hover:border-amber/60"
            >
              <p
                className="font-black leading-none text-amber"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {s.value}
              </p>
              <p className="mt-3 text-body-sm font-bold uppercase tracking-label text-white">{s.title}</p>
              <p className="mt-2 text-body-sm leading-relaxed text-white/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* ── Service cards ── */}
      <div className="mt-8 border-t border-line">
        <div className="container-site py-10 lg:py-12">
          <p className="mb-6 text-micro font-bold uppercase tracking-label text-muted">
            04 · Scale &amp; Advisory
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.num}
                {...revealProps(i)}
                className="group relative flex min-h-[23rem] flex-col rounded-xl border border-line bg-white p-5 text-center transition-all duration-base hover:-translate-y-1 hover:border-amber/50 md:p-6"
              >
                {/* Top row */}
                <div className="flex justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber text-white transition-transform duration-base group-hover:scale-110">
                    <Icon name={service.icon as IconName} className="h-8 w-8" strokeWidth={2.4} />
                  </span>
                  <span className="absolute right-5 top-5 text-micro font-bold tabular-nums text-amber md:right-6 md:top-6">{service.num}</span>
                </div>

                <h3 className="mt-5 text-[1.2rem] font-semibold leading-snug text-ink">{service.title}</h3>
                <p className="mt-2.5 text-body-sm leading-relaxed text-body">{service.description}</p>

                <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5 text-left">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-body-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div data-reveal="hidden" className="mt-8 flex justify-center">
            <Button href="/services" variant="outline" size="lg" arrow>
              Explore all services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
