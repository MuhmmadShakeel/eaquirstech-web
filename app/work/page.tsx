import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { featuredProjects } from '@/lib/content/projects';
import { ProjectCard } from '@/components/sections/Work';

export const metadata: Metadata = {
  title: 'Work | Eaquirs Tech',
  description:
    'Four production platforms — AI hiring, real estate ERP, hospital management system, and jewellery ERP — built and deployed by Eaquirs Tech.',
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

      {/* Projects grid */}
      <section className="section-y section-light">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
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

      {/* CTA */}
      <section className="section-y section-dark relative overflow-hidden">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative text-center">
          <h2 className="text-h2 font-bold text-white">Your project could be next</h2>
          <p className="mt-5 text-body text-on-dark-muted max-w-xl mx-auto">
            We are currently taking on new clients. Reach out and let us scope your project together.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
              Start a conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
