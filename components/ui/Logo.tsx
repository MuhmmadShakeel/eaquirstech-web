import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Brand mark — a vector interpretation of the Eaquirs Tech triangular knot,
 * so the site ships complete with no missing-asset flash.
 *
 * To swap in the official artwork: drop `logo-mark.svg` into /public/brand and
 * replace the <svg> body below with its contents (keep the viewBox + className).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 44"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0', className)}
    >
      {/* Outer triangular ribbon */}
      <path
        d="M24 3.5 44.5 39H3.5L24 3.5Z"
        stroke="#FFD230"
        strokeWidth="5.5"
        strokeLinejoin="round"
      />
      {/* Inner knot — three rounded strokes reading as the interlocked mark */}
      <path
        d="M18 30.5v-8.2a4.2 4.2 0 0 1 8.4 0v8.2"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.6 30.5V22"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className,
  imageClassName,
  showWordmark = true,
}: {
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
}) {
  if (showWordmark) {
    return (
      <span className={cn('inline-flex items-center', className)}>
        <Image
          src="/brand/eaquirs-tech-logo-navy-amber.png"
          alt="Eaquirs Tech"
          width={1287}
          height={1222}
          priority
          sizes="(max-width: 767px) 116px, 128px"
          className={cn('h-11 w-auto object-contain md:h-12', imageClassName)}
        />
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="h-9 w-auto md:h-10" />
    </span>
  );
}
