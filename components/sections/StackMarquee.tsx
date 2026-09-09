import Button from '@/components/ui/Button';
import { stack } from '@/lib/content/misc';

export default function StackMarquee() {
  return (
    <section className="section-light flex min-h-[calc(100svh-var(--header-h))] items-center py-10 lg:py-12">
      <div className="container-site">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl bg-white p-5"><img src="/mockups/hero-platform.png" alt="Eaquirs Tech platform" className="w-full object-contain" /></div>
          </div>
          <div className="order-1 lg:order-2">
        <p className="text-micro font-bold uppercase tracking-label text-amber-deep">Built for the real world</p>
        <div className="mt-4">
          <h2 className="font-black uppercase leading-[0.92] tracking-tight text-ink" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.25rem)' }}>
            WE BUILD<br /><span className="text-amber">PRODUCTION</span><br /><span className="text-muted">SOFTWARE</span>
          </h2>
          <div className="mt-5 max-w-xl">
            <p className="text-body-lg leading-relaxed text-body">Senior engineers combine product thinking and AI-assisted delivery to ship software people can rely on.</p>
            <Button href="/contact" size="lg" arrow className="mt-7 bg-amber text-white hover:bg-amber-bright">Start a project</Button>
          </div>
        </div>
        </div>
        </div>
        <div className="mt-8 overflow-hidden border-t border-line pt-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-micro font-bold uppercase tracking-label text-muted">Technologies we ship with</p>
            <span className="text-micro uppercase tracking-label text-amber-deep">Production-ready stack</span>
          </div>
          <div className="marquee-mask mt-4 space-y-2">
            <TechMarquee />
            <TechMarquee reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-hidden">
      <ul className={`marquee-track flex w-max gap-2 ${reverse ? 'marquee-track-reverse' : ''}`}>
        {items.map((tech, index) => (
          <li key={`${tech}-${index}`} className="flex min-h-10 items-center justify-center rounded-lg border border-line bg-white px-4 py-2 text-caption font-semibold text-ink">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
