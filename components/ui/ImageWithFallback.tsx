'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackContent,
  ...rest
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackContent?: React.ReactNode;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'>) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={fallbackClassName ?? 'flex items-center justify-center bg-gray-50 text-gray-400'}>
        {fallbackContent ?? <span className="text-sm">Image unavailable</span>}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1586}
      height={992}
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 720px"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
