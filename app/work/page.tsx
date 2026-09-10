import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import WorkGallery from '@/components/sections/WorkGallery';

export const metadata: Metadata = {
  title: 'Work | Eaquirs Tech',
  description:
    'Four production platforms — OpenInterview.me, real estate ERP, hospital management system, and jewellery ERP — built and deployed by Eaquirs Tech.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden min-h-[60vh] flex items-center pt-36 pb-24">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <img src="/mockups/hero-platform.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 hidden w-[34rem] opacity-35 lg:block" />
        <div className="container-site relative w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-micro font-bold uppercase tracking-label text-amber mb-5">Selected work</p>
            <h1 className="text-h1 font-bold leading-[1.05] text-white">
              Four platforms in production
            </h1>
            <p className="mt-6 text-body-lg text-on-dark-muted max-w-2xl mx-auto">
              Not demos. Real inventory. Real patients. Real payments. Real hiring.
              Systems handling daily operations across four distinct industries.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Start your project
              </Button>
              <Button href="/services" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                Our services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WorkGallery />

      <section className="section-y bg-white">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-micro font-bold uppercase tracking-label text-amber">Delivery standard</p><h2 className="mt-3 text-h2 font-bold text-ink">Built around the moment the work becomes operational.</h2></div>
          <p className="text-body leading-relaxed text-body">Every platform starts with the workflows people rely on most. We make those flows clear, dependable, and measurable before adding complexity—so the first release earns trust with the people who use it every day.</p>
        </div>
      </section>

      <section className="section-y bg-navy text-white">
        <div className="container-site grid gap-8 md:grid-cols-3"><div><p className="text-micro font-bold uppercase tracking-label text-amber">01</p><h2 className="mt-4 text-body-lg font-semibold text-white">Real context</h2><p className="mt-3 text-body-sm leading-relaxed text-white/65">We map the operation before we build the interface.</p></div><div><p className="text-micro font-bold uppercase tracking-label text-amber">02</p><h2 className="mt-4 text-body-lg font-semibold text-white">Visible progress</h2><p className="mt-3 text-body-sm leading-relaxed text-white/65">Working reviews keep decisions close to the actual product.</p></div><div><p className="text-micro font-bold uppercase tracking-label text-amber">03</p><h2 className="mt-4 text-body-lg font-semibold text-white">Durable delivery</h2><p className="mt-3 text-body-sm leading-relaxed text-white/65">Release, reliability, and handover are part of the work—not an afterthought.</p></div></div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-line">
        <div className="container-site py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {[
              { value: '95%', label: 'Performance improvement', sub: 'Hospital system rebuild' },
              { value: '6 wks', label: 'Full system replacement', sub: 'Zero care disruption' },
              { value: '4', label: 'Live platforms', sub: 'Serving real users now' },
              { value: '2', label: 'Industry ERPs shipped', sub: 'Real estate & jewellery' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[2.5rem] font-bold text-amber-deep leading-none">{s.value}</p>
                <p className="mt-2 text-body-sm font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-micro text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y overflow-hidden">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center"><p className="text-micro font-bold uppercase tracking-label text-amber">What good delivery feels like</p><h2 className="mt-3 text-h2 font-bold text-ink">Clear systems. Confident teams. Visible outcomes.</h2><p className="mt-5 text-body leading-relaxed text-body">The platforms above look different because the operations behind them are different. The delivery standard stays the same.</p></div>
          <div className="relative mx-auto mt-12 grid max-w-6xl items-center gap-6 lg:grid-cols-[0.8fr_1.25fr_0.8fr]">
            <div className="space-y-5"><div className="rounded-[1.75rem] bg-white p-6 shadow-card"><p className="text-body font-semibold text-ink">Operational clarity</p><p className="mt-2 text-body-sm leading-relaxed text-body">The critical workflows are understandable at a glance.</p></div><div className="rounded-[1.75rem] bg-white p-6 shadow-card"><p className="text-body font-semibold text-ink">Evidence, not guesses</p><p className="mt-2 text-body-sm leading-relaxed text-body">Teams can see what happened, who owns it, and what comes next.</p></div></div>
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-amber/20 bg-navy p-2"><img src="/service-visuals/team-collaboration.png" alt="Eaquirs Tech delivery team" className="h-full w-full rounded-full object-cover" /></div>
            <div className="space-y-5"><div className="rounded-[1.75rem] bg-white p-6 shadow-card"><p className="text-body font-semibold text-ink">Built for adoption</p><p className="mt-2 text-body-sm leading-relaxed text-body">The people doing the work can move through it with confidence.</p></div><div className="rounded-[1.75rem] bg-white p-6 shadow-card"><p className="text-body font-semibold text-ink">Ready for the next stage</p><p className="mt-2 text-body-sm leading-relaxed text-body">A stable foundation makes the next release easier, not riskier.</p></div></div>
          </div>
        </div>
      </section>

    </>
  );
}
