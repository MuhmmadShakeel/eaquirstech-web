import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { engagementModels } from '@/lib/content/misc';
import { cn } from '@/lib/utils';
import { revealProps } from '@/lib/reveal';

export default function Pricing() {
  return (
    <section className="section-y section-light">
      <div className="container-site">
        <SectionHeading
          eyebrow="Engagement models"
          title="Simple and flexible — no hidden costs"
          intro="Choose the model that matches your project shape. We will recommend the one that fits, not the one that bills the most."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model, i) => (
            <article
              key={model.name}
              {...revealProps(i, 100)}
              className={cn(
                'flex flex-col rounded-2xl border p-8 md:p-10 transition-all duration-base',
                model.featured
                  ? 'border-amber bg-white'
                  : 'border-line bg-white hover:border-amber/40',
              )}
            >
              {model.featured && (
                <span className="mb-5 inline-flex self-start rounded-full bg-amber px-4 py-1 text-micro font-bold uppercase tracking-label text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-h4 font-semibold text-ink">{model.name}</h3>
              <p className="mt-2 text-body-sm text-body">{model.tagline}</p>

              <ul className="my-8 flex flex-1 flex-col gap-3.5">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-body-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={model.featured ? 'primary' : 'outline'}
                size="md"
                className={cn('w-full', model.featured && 'bg-amber text-white hover:bg-amber-bright')}
                arrow
              >
                Get in touch
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
