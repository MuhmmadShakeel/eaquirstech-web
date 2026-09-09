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
      {/* Hero */}
      <section className="section-dark relative flex h-[100svh] items-center justify-center overflow-hidden px-0 pt-[var(--header-h)] text-center">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-site relative">
          <div data-reveal="hidden" className="mx-auto max-w-2xl">
          <p className="mb-4 text-micro font-bold uppercase tracking-label text-amber">Get in touch</p>
          <h1 className="text-h1 font-bold leading-tight text-white">
            Tell us what you are building
          </h1>
          <p className="mt-5 text-body text-on-dark-muted">
            Book a free 30-minute call. We will talk through your problem and come back with a realistic path to solve it.
          </p>
          </div>
        </div>
      </section>

      {/* Split layout */}
      <section className="flex min-h-[100svh] items-center bg-white py-12 sm:py-16">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left */}
            <div data-reveal="hidden">
              <img src="/contact-visual.png" alt="A contact form on a mobile device" className="aspect-[3/2] w-full rounded-2xl object-cover" />
              <h2 className="text-h3 font-bold text-ink">What to expect</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-body-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4">
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
                  Bahawalpur, Pakistan · Available worldwide
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div data-reveal="hidden" className="rounded-2xl border border-line bg-white p-8 shadow-card md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
