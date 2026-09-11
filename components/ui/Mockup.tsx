'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { LogoMark } from './Logo';

/**
 * Device-mockup image with a graceful fallback.
 *
 * The brand mockups live in /public/mockups. Until a file is present (or if one
 * ever fails to load) this renders an on-brand placeholder instead of a broken
 * image, so the layout never collapses. Drop the real PNG at the given path and
 * it appears automatically — no code change needed.
 */
export default function Mockup({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-raised via-surface to-canvas-deep p-8"
        >
          <LogoMark className="h-10 w-auto opacity-60" />
          <span className="text-center text-caption text-muted">{alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1500}
          height={1125}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 720px"
          onError={() => setFailed(true)}
          priority={priority}
          className={cn('h-full w-full object-contain', imgClassName)}
        />
      )}
    </div>
  );
}
