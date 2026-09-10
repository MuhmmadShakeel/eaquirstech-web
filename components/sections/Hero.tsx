import Button from '@/components/ui/Button';
import { headlineStats } from '@/lib/content/site';

export default function Hero() {
  return (
    <section className="hero-section relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy text-center">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-45"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-navy/55" />

      <div className="container-site relative py-20 sm:py-24 lg:py-20">
        <div className="hidden">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-micro font-bold uppercase tracking-label text-amber">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            AI-native software engineering · Bahawalpur, Pakistan
          </span>
        </div>
        <h1 className="hero-enter hero-enter-delay-1 mx-auto max-w-5xl font-black uppercase leading-[0.94] tracking-tight text-white" style={{ fontSize: 'clamp(2.35rem, 5.7vw, 5.25rem)' }}>
          <span className="text-amber">#1 AI-NATIVE</span><br />
          <span>SOFTWARE ENGINEERING</span><br />
          <span className="text-white/35">PARTNER</span>
        </h1>
        <div className="hero-enter hero-enter-delay-2 mx-auto mt-8 max-w-2xl">
          <p className="text-body-lg leading-relaxed text-on-dark-muted">We build ERP platforms, AI systems and production software — including the projects other vendors left behind.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" arrow className="!h-16 !px-11 text-body-lg bg-amber text-white hover:bg-amber-bright">Book a free call</Button>
            <Button href="/work" size="lg" variant="outline" className="!h-16 !px-11 border-amber bg-transparent text-body-lg text-amber hover:border-amber-bright hover:text-amber-bright">See our work</Button>
          </div>
        </div>
        <dl className="hero-enter hero-enter-delay-3 mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-5 sm:grid-cols-4">
          {headlineStats.map((s) => (
            <div key={s.label}>
              <dt className="text-[1.65rem] font-light leading-none text-amber">{s.value}</dt>
              <dd className="mt-1.5 block text-caption font-semibold text-white">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
