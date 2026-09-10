import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import Icon from '@/components/ui/Icon';
import { siteConfig } from '@/lib/content/site';

const cols = [
  {
    heading: 'Services',
    links: [
      { label: 'Product Engineering', href: '/services' },
      { label: 'ERP & Business Systems', href: '/services' },
      { label: 'AI & Automation', href: '/services' },
      { label: 'Rescue & Modernization', href: '/services' },
      { label: 'Design Systems', href: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Work', href: '/work' },
      { label: 'Consultancy', href: '/consultancy' },
      { label: 'Industries', href: '/industries' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: siteConfig.social.linkedin },
      { label: 'GitHub', href: siteConfig.social.github },
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer body */}
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo imageClassName="h-16 md:h-20" />
            <p className="mt-5 max-w-xs text-body-sm text-white/60 leading-relaxed">
              AI-native software engineering from Bahawalpur, Pakistan.
              We build production systems that handle real scale, real data, and real edge cases.
            </p>
            <address className="mt-6 not-italic text-body-sm text-white/50 leading-relaxed">
              Bahawalpur, Pakistan
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-fast hover:text-amber"
              >
                {siteConfig.email}
              </a>
            </address>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-micro font-bold uppercase tracking-label text-white/40 mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-white/70 transition-colors duration-fast hover:text-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center gap-3 py-6 text-micro text-white/40 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Eaquirs Tech. All rights reserved.
          </p>
          <p>Built with Next.js — Bahawalpur, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
