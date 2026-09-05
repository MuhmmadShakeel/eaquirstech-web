import Button from '@/components/ui/Button';
import { stack } from '@/lib/content/misc';

export default function StackMarquee() {
  return (
    <section className="relative isolate overflow-hidden section-dark">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark opacity-60" />
      <div aria-hidden className="glow-amber-dark pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[40rem] w-[70rem] -translate-x-1/2 opacity-40" />

      <div className="container-site py-20 lg:py-28">
        {/* Massive "WE BUILD" heading */}
        <h2
          className="font-black uppercase leading-[0.88] tracking-tight text-white"
          style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}
        >
          WE BUILD
          <br />
          <span className="text-amber">PRODUCTION</span>
          <br />
          <span className="text-white/25">SOFTWARE</span>
        </h2>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <p
            className="max-w-lg font-light uppercase tracking-widest text-on-dark-muted"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
          >
            Delivery time cut by 30–80% · Senior engineers on every project · AI-assisted, engineer-reviewed
          </p>
          <Button
            href="/contact"
            size="lg"
            arrow
            className="bg-amber text-white hover:bg-amber-bright self-end shrink-0"
          >
            Book a free call
          </Button>
        </div>

        {/* Tech stack logo grid */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="mb-7 text-micro font-bold uppercase tracking-label text-on-dark-muted">
            Technologies we ship with
          </p>
          <ul className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-body-sm font-medium text-white/70 backdrop-blur-sm transition-colors duration-fast hover:border-amber/40 hover:text-amber"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
