'use client';

import ImageWithFallback from '@/components/ui/ImageWithFallback';

export default function ServicesHeroImage() {
  return (
    <div className="relative select-none">
      <ImageWithFallback
        src="/service-visuals/services-hero-team.png"
        alt="Eaquirs Tech — software platform on MacBook"
        className="w-full object-contain drop-shadow-2xl"
        loading="eager"
        decoding="async"
        fallbackClassName="aspect-[4/3] w-full flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        fallbackContent={
          <div className="text-center px-8">
            <div className="mb-6 flex justify-center gap-3">
              {['Product', 'ERP', 'AI', 'Rescue'].map((s) => (
                <span key={s} className="rounded-lg border border-amber/30 bg-amber/10 px-3 py-1.5 text-micro font-semibold text-amber">
                  {s}
                </span>
              ))}
            </div>
            <div className="text-[3rem] font-light text-white/20 leading-none">01</div>
            <div className="mt-3 text-body-sm text-on-dark-muted">Senior engineers. Working software weekly.</div>
          </div>
        }
      />

      {/* Floating badge — top left */}

      {/* Floating badge — bottom right */}
    </div>
  );
}
