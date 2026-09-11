import SectionHeading from '@/components/ui/SectionHeading';
import Icon, { type IconName } from '@/components/ui/Icon';
import { industries } from '@/lib/content/misc';

export default function Industries() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the demands of your sector"
          intro="Every industry has its own data, compliance needs, and operational risks. We bring experience from real estate, healthcare, jewellery, and hiring."
        />

        <div className="marquee-mask mt-6 overflow-hidden border-y border-line py-4">
          <div className="marquee-track marquee-track-reverse flex w-max gap-3">
            {[...industries, ...industries].map((ind, index) => (
              <div key={`${ind.label}-${index}`} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-4 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-amber">
                  <Icon name={ind.icon as IconName} className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap text-caption font-semibold text-ink">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
