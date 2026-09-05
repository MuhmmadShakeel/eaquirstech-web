'use client';

import { useEffect } from 'react';

/**
 * Global scroll-reveal driver (spec §9 — fade-up, ~80ms stagger, never bouncy).
 * Mounted once in the root layout. Uses a single shared IntersectionObserver.
 */
export default function Reveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const showAll = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal="hidden"]')
        .forEach((el) => el.setAttribute('data-reveal', 'shown'));
    };

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.setAttribute('data-reveal', 'shown');
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal="hidden"]')
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    const failsafe = window.setTimeout(showAll, 3000);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
