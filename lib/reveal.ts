import type React from 'react';

/**
 * Helper for staggering siblings: `{...revealProps(i)}` on each grid child.
 *
 * Lives in lib/ (not components/ui/Reveal.tsx which is 'use client') so server
 * components can import and call it without triggering the client boundary check.
 */
export function revealProps(
  index = 0,
  step = 80,
): { 'data-reveal': string; style: React.CSSProperties } {
  return {
    'data-reveal': 'hidden',
    style: { '--reveal-delay': `${index * step}ms` } as React.CSSProperties,
  };
}
