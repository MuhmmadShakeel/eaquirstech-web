import Button from '@/components/ui/Button';
import { headlineStats } from '@/lib/content/site';

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden section-dark flex flex-col justify-center"
      style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-h) + 2rem)', paddingBottom: '4rem' }}
    >
      {/* Grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark" />

      {/* Amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[50rem] w-[60rem] -translate-x-1/2 glow-amber-dark opacity-50"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[#0F0F0D]" />

      {/* Decorative wavy lines — right side */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-[55%] overflow-hidden opacity-[0.12]">
        <svg className="h-full w-full" viewBox="0 0 700 900" preserveAspectRatio="xMaxYMid slice" fill="none">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <path
              key={i}
              d={`M${750 - i * 80} 0 Q${500 - i * 50} 450 ${750 - i * 80} 900`}
              stroke="#F2A93B"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="container-site">
        {/* Eyebrow pill */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-micro font-bold uppercase tracking-label text-amber">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            AI-native software engineering · Lahore, Pakistan
          </span>
        </div>

        {/* Massive headline */}
        <h1
          className="font-black uppercase leading-[0.88] tracking-tight text-white"
          style={{ fontSize: 'clamp(3.25rem, 9.5vw, 9.5rem)' }}
        >
          <span className="text-amber">#1 AI-NATIVE</span>
          <br />
          <span>SOFTWARE</span>
          <br />
          <span>ENGINEERING</span>
          <br />
          <span className="text-white/30">PARTNER</span>
        </h1>

        {/* Body + CTAs pushed to right half on desktop */}
        <div className="mt-10 grid items-end gap-8 lg:grid-cols-2 lg:mt-12">
          <div />
          <div>
            <p className="max-w-lg text-body-lg text-on-dark-muted leading-relaxed">
              We build ERP platforms, AI systems and production software — and we take over
              the projects other vendors left behind. Four platforms live and serving users today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" arrow className="bg-amber text-white hover:bg-amber-bright">
                Book a free call
              </Button>
              <Button
                href="/work"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:border-amber hover:text-amber"
              >
                See our work
              </Button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <dl className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-10 sm:grid-cols-4">
          {headlineStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <dt className="text-[2rem] font-light leading-none text-amber">{s.value}</dt>
              <dd className="mt-2 block text-caption font-semibold text-white">{s.label}</dd>
              <dd className="mt-0.5 block text-micro text-on-dark-muted">{(s as any).note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
