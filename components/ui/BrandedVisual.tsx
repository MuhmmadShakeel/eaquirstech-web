import Image from 'next/image';
import { cn } from '@/lib/utils';

type BrandTreatment = 'mark' | 'signature' | 'both';

const imageDimensions: Record<string, { width: number; height: number }> = {
  '/about/muhammad-safdar-iqbal-coat.png': { width: 800, height: 800 },
  '/contact-visual.png': { width: 540, height: 360 },
  '/home-product-technology.png': { width: 1536, height: 1024 },
  '/mockups/desktop-dashboard.png': { width: 1500, height: 1125 },
  '/mockups/hero-platform.png': { width: 1501, height: 1126 },
  '/service-visuals/ai-hiring-platform.png': { width: 1672, height: 941 },
  '/service-visuals/consultancy-ai.png': { width: 1536, height: 1024 },
  '/service-visuals/consultancy-strategy.png': { width: 1536, height: 1024 },
  '/service-visuals/services-hero-team.png': { width: 1586, height: 992 },
  '/service-visuals/team-collaboration.png': { width: 1672, height: 941 },
  '/service-visuals/work-hero-production.png': { width: 1672, height: 941 },
  '/uploads/services/8dd7ea20-fa2f-41f4-acae-0d217f0a0ca5.png': { width: 1000, height: 667 },
};

/**
 * Places a quiet, consistent Eaquirs signature over editorial imagery.
 * The mark is intentionally small and anchored to the frame, so imagery remains
 * useful while the site keeps a clear sense of ownership.
 */
export default function BrandedVisual({
  src,
  alt,
  className,
  imageClassName,
  treatment = 'signature',
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  treatment?: BrandTreatment;
  priority?: boolean;
}) {
  const showMark = treatment === 'mark' || treatment === 'both';
  const showSignature = treatment === 'signature' || treatment === 'both';
  const dimensions = imageDimensions[src] ?? { width: 1600, height: 900 };

  return (
    <div className={cn('group/brand relative isolate overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
        className={cn('h-full w-full object-cover', imageClassName)}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-navy/10" />
      {showMark && (
        <span aria-hidden className="pointer-events-none absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-amber/60 bg-navy/95 p-2 shadow-xl backdrop-blur-sm">
          <Image src="/brand/eaquirs-tech-logo-navy-amber.png" alt="" width={1287} height={1222} sizes="40px" className="h-full w-full object-contain object-top" />
        </span>
      )}
      {showSignature && (
        <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg border border-amber/60 bg-navy/95 px-3 py-2 shadow-xl backdrop-blur-sm">
          <Image src="/brand/eaquirs-tech-logo-navy-amber.png" alt="" width={1287} height={1222} sizes="16px" className="h-4 w-4 object-contain object-top" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-bright">Eaquirs Tech</span>
        </span>
      )}
    </div>
  );
}
