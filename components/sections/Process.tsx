import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import { processSteps } from '@/lib/content/process';
import { revealProps } from '@/lib/reveal';

export default function Process() {
  return (
    <section id="process" className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="How we work"
          title="A four-step path from problem to production"
          intro="Every engagement follows the same disciplined pattern — whether it's a six-week replacement or a year-long product build."
        />

        <div className="relative mt-8">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] top-[2.75rem] hidden h-px bg-gradient-to-r from-amber/20 via-amber/50 to-amber/20 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <article
                key={step.num}
                {...revealProps(i, 100)}
                className="relative flex flex-col gap-5 rounded-xl border border-line bg-white p-6 md:p-7"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber text-white text-body-lg font-semibold">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-body">{step.description}</p>
                </div>
                <ul className="mt-auto flex flex-col gap-2 border-t border-line pt-5">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-body-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
