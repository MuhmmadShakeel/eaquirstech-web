'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { navItems, type NavItem } from '@/lib/content/nav';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [mobileOpen]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const startClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] transition-all duration-slow',
          'bg-[#000000] border-b border-white/10 py-0',
        )}
        style={{ height: 'var(--header-h)' }}
      >
        <div className="container-site flex h-full items-center justify-between gap-8">
          <Link href="/" aria-label="Eaquirs Tech — home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <NavEntry
                key={item.label}
                item={item}
                active={isActive(item.href)}
                menuOpen={activeMenu === item.label}
                onEnter={() => item.mega || item.simple ? openMenu(item.label) : undefined}
                onLeave={startClose}
                onPanelEnter={cancelClose}
                onPanelLeave={startClose}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" arrow className="hidden sm:inline-flex bg-amber hover:bg-amber-bright text-white">
              Book a call
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:border-amber hover:text-amber xl:hidden"
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega-menu panel (renders inside header so it gets the shadow) */}
        {activeMenu && (
          <div
            className="mega-panel"
            onMouseEnter={cancelClose}
            onMouseLeave={startClose}
            onClickCapture={() => setActiveMenu(null)}
          >
            {navItems.map((item) => {
              if (item.label !== activeMenu) return null;
              if (item.label === 'Consultancy') return <ConsultancyPanel key={item.label} item={item} />;
              if (item.mega) return <MegaPanel key={item.label} item={item} />;
              if (item.simple) return <SimplePanel key={item.label} item={item} />;
              return null;
            })}
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      <div
        className={cn('fixed inset-0 z-[99] xl:hidden', mobileOpen ? 'pointer-events-auto' : 'pointer-events-none')}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn('absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-base', mobileOpen ? 'opacity-100' : 'opacity-0')}
        />
        <nav
          aria-label="Mobile"
          className={cn(
            'absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white flex flex-col',
            'shadow-mega transition-transform duration-base',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          )}
          style={{ paddingTop: 'var(--header-h)' }}
        >
          <div className="flex flex-col divide-y divide-line px-5 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.mega || item.simple ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-4 text-base font-medium text-ink"
                    >
                      {item.label}
                      <Icon
                        name="arrow"
                        className={cn('h-4 w-4 text-gray-400 transition-transform duration-fast', mobileExpanded === item.label && 'rotate-90')}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-4">
                        {item.mega && item.mega.map((col) => (
                          <div key={col.heading} className="mb-4">
                            <p className="mb-2 text-micro font-semibold uppercase tracking-label text-amber">{col.heading}</p>
                            {col.links.map((link) => (
                              <Link key={link.href} href={link.href} className="block py-1.5 text-body-sm text-body hover:text-amber">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {item.simple && item.simple.map((link) => (
                          <Link key={link.href} href={link.href} className="block py-2 text-body-sm text-body hover:text-amber">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block py-4 text-base font-medium text-ink hover:text-amber">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto p-5 border-t border-line">
            <Button href="/contact" size="lg" className="w-full bg-amber hover:bg-amber-bright text-white" arrow>
              Book a free call
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavEntry({
  item, active, menuOpen, onEnter, onLeave, onPanelEnter, onPanelLeave,
}: {
  item: NavItem;
  active: boolean;
  menuOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onPanelEnter: () => void;
  onPanelLeave: () => void;
}) {
  const hasMenu = !!(item.mega || item.simple);
  return (
    <div
      className="relative"
      onMouseEnter={hasMenu ? onEnter : undefined}
      onMouseLeave={hasMenu ? onLeave : undefined}
    >
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-body-sm font-medium transition-colors duration-fast',
          active ? 'text-amber' : 'text-white/80 hover:bg-white/10 hover:text-amber',
        )}
      >
        {item.label}
        {hasMenu && (
          <Icon
            name="arrow"
            className={cn('h-3.5 w-3.5 rotate-90 text-white/45 transition-transform duration-fast', menuOpen && '-rotate-90')}
          />
        )}
      </Link>
    </div>
  );
}

function MegaPanel({ item }: { item: NavItem }) {
  const categoryPaths = ['/services/product-engineering', '/services/business-systems', '/services/ai-automation', '/services/rescue-modernization', '/services/specialist-services'];
  return (
    <div className="border-t border-line bg-white">
      <div className="container-site py-6">
      <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-micro font-bold uppercase tracking-label text-amber">Eaquirs delivery practice</p>
          <p className="mt-1 text-body-sm text-body">Senior teams for software that is built to run in production.</p>
        </div>
        <Link href={item.href} className="hidden rounded-full border border-amber/30 bg-amber-wash px-4 py-2 text-body-sm font-semibold text-amber-deep transition-colors hover:bg-amber hover:text-white lg:inline-flex">
          Explore all services
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {item.mega!.map((col, index) => (
          <div key={col.heading} className="border-l border-line pl-4 first:border-l-0 first:pl-0">
            <Link href={categoryPaths[index]} className="mb-3 block text-micro font-bold uppercase tracking-label text-amber hover:text-amber-deep">{col.heading}</Link>
            <ul className="flex flex-col gap-1">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex flex-col rounded-lg px-2 py-2 transition-all duration-fast hover:bg-amber-wash"
                  >
                    <span className="text-body-sm font-medium text-ink group-hover:text-amber">{link.label}</span>
                    {link.desc && <span className="text-micro text-muted">{link.desc}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <Link href={item.href} className="inline-flex items-center gap-2 text-body-sm font-medium text-amber hover:text-amber-deep transition-colors duration-fast">
          View all services <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
      </div>
    </div>
  );
}

function ConsultancyPanel({ item }: { item: NavItem }) {
  const links = item.simple ?? [];
  const groups = [
    { title: 'Direction', items: links.slice(0, 3) },
    { title: 'Assessment', items: links.slice(3, 6) },
    { title: 'Leadership', items: links.slice(6) },
  ];

  return (
    <div className="border-t border-navy/15 bg-[#F7F8FC]">
      <div className="container-site grid grid-cols-[17rem_1fr] gap-8 py-7">
        <div className="rounded-2xl bg-navy p-6 text-white">
          <p className="text-micro font-bold uppercase tracking-label text-amber">Eaquirs advisory</p>
          <h2 className="mt-3 text-h4 font-semibold leading-tight text-white">Clear technical decisions for consequential work.</h2>
          <p className="mt-3 text-body-sm leading-relaxed text-white/60">Independent advice, practical next steps, and no unnecessary retainer.</p>
          <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-body-sm font-semibold text-amber hover:text-amber-bright">
            Explore consultancy <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 py-2">
          {groups.map((group) => (
            <div key={group.title} className="border-l border-navy/15 pl-5 first:border-l-0 first:pl-0">
              <p className="mb-3 text-micro font-bold uppercase tracking-label text-navy">{group.title}</p>
              <ul className="space-y-1.5">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group block rounded-lg px-2 py-2.5 transition-colors hover:bg-white">
                      <span className="block text-body-sm font-semibold text-ink group-hover:text-amber-deep">{link.label}</span>
                      {link.desc && <span className="mt-0.5 block text-micro leading-relaxed text-muted">{link.desc}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimplePanel({ item }: { item: NavItem }) {
  return (
    <div className="container-site py-7">
      <div className="grid grid-cols-4 gap-3">
        {item.simple!.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col rounded-xl border border-hairline bg-gray-50 px-4 py-3.5 transition-all duration-fast hover:border-amber/40 hover:bg-amber-wash"
          >
            <span className="text-body-sm font-medium text-ink group-hover:text-amber">{link.label}</span>
            {link.desc && <span className="mt-0.5 text-micro text-muted">{link.desc}</span>}
          </Link>
        ))}
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <Link href={item.href} className="inline-flex items-center gap-2 text-body-sm font-medium text-amber hover:text-amber-deep transition-colors duration-fast">
          View all <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
