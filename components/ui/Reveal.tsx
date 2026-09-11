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

    const normaliseVisibleCopy = (root: Node = document.body) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          const parent = node.parentElement;
          return parent && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      });

      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      nodes.forEach((node) => {
        const cleaned = node.data.replace(/\s*(?:â€”|—)\s*/g, '. ');
        if (cleaned !== node.data) node.data = cleaned;
      });
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
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const observeAll = (root: ParentNode = document) => {
      normaliseVisibleCopy(root);
      root
        .querySelectorAll<HTMLElement>('main > section:not([data-reveal])')
        .forEach((el) => el.setAttribute('data-reveal', 'hidden'));
      root
        .querySelectorAll<HTMLElement>('[data-reveal="hidden"]')
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeAll(node as Element);
        });
      }
    });
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
