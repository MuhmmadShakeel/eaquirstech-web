import type { Metadata } from 'next';
import Icon from '@/components/ui/Icon';
import { siteConfig } from '@/lib/content/site';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Eaquirs Tech',
  description: 'Book a free 30-minute scoping call with Eaquirs Tech, or send us a note about your project.',
  alternates: { canonical: '/contact' },
};

const points = [
  'A short, focused call — no sales deck',
  'We ask the right questions about your problem',
  'You get back a written recommendation with rough scope and estimate',
  'No obligation either way',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero strip */}
      <section className="section-dark relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-site relative">
          <p className="text-micro font-bold uppercase tracking-label text-amber mb-4">Get in touch</p>
          <h1 className="text-h1 font-bold leading-tight text-white max-w-2xl">
            Tell us what you are building
          </h1>
          <p className="mt-5 text-body text-on-dark-muted max-w-xl">
            Book a free 30-minute call. We will talk through your problem and come back with a realistic path to solve it.
          </p>
        </div>
      </section>

      {/* Split layout */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
            {/* Left */}
            <div>
              <h2 className="text-h3 font-bold text-ink">What to expect</h2>
              <ul className="mt-7 flex flex-col gap-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-body-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-col gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 text-body-sm font-medium text-ink transition-colors duration-fast hover:text-amber"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-tint text-amber-deep">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  {siteConfig.email}
                </a>
                <div className="inline-flex items-center gap-3 text-body-sm text-body">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-tint text-amber-deep">
                    <Icon name="globe" className="h-5 w-5" />
                  </span>
                  Lahore, Pakistan · Available worldwide
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-line bg-white p-8 shadow-card md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
