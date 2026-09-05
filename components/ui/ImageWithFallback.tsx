'use client';

import { useState } from 'react';

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
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={fallbackClassName ?? 'flex items-center justify-center bg-gray-50 text-gray-400'}>
        {fallbackContent ?? <span className="text-sm">Image unavailable</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
