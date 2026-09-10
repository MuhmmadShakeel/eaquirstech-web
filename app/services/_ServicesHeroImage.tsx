'use client';

import ImageWithFallback from '@/components/ui/ImageWithFallback';

export default function ServicesHeroImage() {
  return (
    <div className="relative select-none">
      <ImageWithFallback
        src="/mockups/hero-platform.png"
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
      <div className="absolute -top-4 -left-4 hidden rounded-xl border border-amber-deep/30 bg-amber px-4 py-3 shadow-mega backdrop-blur-sm md:block">
        <p className="text-micro text-body">Fastest delivery</p>
        <p className="mt-0.5 text-[1.6rem] font-light leading-none text-amber">6 wks</p>
        <p className="mt-1 text-micro text-body">full system replacement</p>
      </div>

      {/* Floating badge — bottom right */}
      <div className="absolute -bottom-4 -right-4 hidden rounded-full border border-amber-deep/30 bg-amber px-4 py-2.5 backdrop-blur-sm md:flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-micro font-semibold text-navy">Senior engineers only</span>
      </div>
    </div>
  );
}
