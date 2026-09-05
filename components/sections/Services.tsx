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
      <div className="container-site pb-0 pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left: giant text */}
          <div>
            <h2
              className="font-black uppercase leading-[0.88] tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 8.5rem)' }}
            >
              WHAT YOU
              <br />
              <span className="text-amber">GET WHEN</span>
            </h2>
            <p
              className="mt-4 font-light uppercase tracking-widest text-muted"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2.6rem)' }}
            >
              Senior engineers build it
            </p>
          </div>

          {/* Right: description */}
          <div className="pb-2">
            <p className="text-body leading-relaxed text-gray-600">
              We combine senior engineering expertise with AI tooling to deliver outcomes that
              traditional agencies can&apos;t match on timeline, cost, or scale.
            </p>
            <Button href="/services" variant="outline" size="md" arrow className="mt-6">
              All services
            </Button>
          </div>
        </div>

        {/* ── 3 stat boxes ── */}
        <div className="mt-12 grid gap-4 border-t border-line pt-10 sm:grid-cols-3">
          {quickStats.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-paper p-7 transition-all duration-base hover:border-amber/30 hover:shadow-card"
            >
              <p
                className="font-black leading-none text-amber"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {s.value}
              </p>
              <p className="mt-3 text-body-sm font-bold uppercase tracking-label text-ink">{s.title}</p>
              <p className="mt-2 text-body-sm leading-relaxed text-body">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Service cards ── */}
      <div className="mt-14 border-t border-line">
        <div className="container-site py-16">
          <p className="mb-10 text-micro font-bold uppercase tracking-label text-muted">
            04 · Scale &amp; Advisory
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.num}
                {...revealProps(i)}
                className="group relative flex flex-col rounded-xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover md:p-8"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                    <Icon name={service.icon as IconName} className="h-6 w-6" />
                  </span>
                  <span className="text-micro font-light tabular-nums text-muted">{service.num}</span>
                </div>

                <h3 className="mt-5 text-[1.2rem] font-semibold leading-snug text-ink">{service.title}</h3>
                <p className="mt-2.5 text-body-sm text-body">{service.description}</p>

                <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
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

          <div data-reveal="hidden" className="mt-12 flex justify-center">
            <Button href="/services" variant="outline" size="lg" arrow>
              Explore all services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
