import Button from '@/components/ui/Button';
import { differentiators } from '@/lib/content/misc';
import { revealProps } from '@/lib/reveal';

export default function Differentiators() {
  return (
    <section className="relative isolate overflow-hidden section-dark py-14 lg:py-20">

      <div className="container-site relative">
        {/* Massive heading */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2
              className="font-black uppercase leading-[0.88] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)' }}
            >
              WHY
              <br />
              <span className="text-amber">CLIENTS</span>
              <br />
              <span className="text-white/25">CHOOSE US</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-body leading-relaxed text-on-dark-muted">
              Senior engineers. Honest scope. Working software every week.
              These are not aspirations — they are how we have operated across every engagement.
            </p>
            <Button href="/contact" size="md" arrow className="mt-6 bg-amber text-white hover:bg-amber-bright">
              Start a conversation
            </Button>
          </div>
        </div>

        {/* Differentiator cards */}
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
