import SectionHeading from '@/components/ui/SectionHeading';
import Icon, { type IconName } from '@/components/ui/Icon';
import { industries } from '@/lib/content/misc';
import { revealProps } from '@/lib/reveal';

export default function Industries() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the demands of your sector"
          intro="Real estate, healthcare, jewellery, hiring — each domain has different data, compliance requirements and failure modes. We have shipped in several of them."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              {...revealProps(i, 55)}
              className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-5 py-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:border-amber/50 hover:shadow-card-hover cursor-default"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                <Icon name={ind.icon as IconName} className="h-6 w-6" />
              </span>
              <span className="text-center text-caption font-medium text-ink">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
