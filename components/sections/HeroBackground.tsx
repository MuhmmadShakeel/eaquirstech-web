import type { CSSProperties } from 'react';

const RING_COUNT = 108;
const ORBITS = [
  { size: 12, duration: 16, delay: -1.5, direction: 'normal' },
  { size: 19, duration: 25, delay: -11, direction: 'reverse' },
  { size: 28, duration: 19, delay: -5, direction: 'normal' },
  { size: 38, duration: 31, delay: -23, direction: 'reverse' },
  { size: 49, duration: 22, delay: -8, direction: 'normal' },
  { size: 61, duration: 35, delay: -27, direction: 'reverse' },
  { size: 72, duration: 26, delay: -15, direction: 'normal' },
  { size: 82, duration: 39, delay: -31, direction: 'reverse' },
  { size: 90, duration: 29, delay: -19, direction: 'normal' },
];

/** Decorative, CSS-only hero motion with no images or client-side JavaScript. */
export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="hero-background">
      <div className="hero-background__grid" />
      <div className="hero-background__glow hero-background__glow--amber" />
      <div className="hero-background__glow hero-background__glow--blue" />
      <div className="hero-background__system">
        {Array.from({ length: RING_COUNT }, (_, index) => (
          <span
            key={index}
            className="hero-background__ring"
            style={{ '--ring-scale': (index + 1) / RING_COUNT } as CSSProperties}
          />
        ))}
        {ORBITS.map((orbit, index) => (
          <span
            key={orbit.size}
            className="hero-background__orbit"
            style={{
              '--orbit-size': `${orbit.size}%`,
              '--orbit-duration': `${orbit.duration}s`,
              '--orbit-delay': `${orbit.delay}s`,
              '--orbit-direction': orbit.direction,
              '--signal-delay': `${-index * 0.37}s`,
            } as CSSProperties}
          >
            <span className="hero-background__signal" />
          </span>
        ))}
        <span className="hero-background__core">AI</span>
      </div>
      <div className="hero-background__vignette" />
    </div>
  );
}
