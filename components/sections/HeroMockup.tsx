'use client';

import ImageWithFallback from '@/components/ui/ImageWithFallback';

export default function HeroMockup() {
  return (
    <div className="relative select-none">
      {/* Main hero image */}
      <div className="relative">
        <ImageWithFallback
          src="/mockups/laptop-phone-login.png"
          alt="Eaquirs Tech — Turner10 real estate ERP on MacBook and mobile"
          className="w-full object-contain drop-shadow-2xl"
          loading="eager"
          decoding="async"
          fallbackClassName="aspect-[16/10] w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-amber border border-amber-deep/30"
          fallbackContent={
            <div className="text-center">
              <div className="text-5xl font-light text-amber mb-3">ET</div>
              <div className="text-body-sm text-body">Production ERP platform</div>
            </div>
          }
        />
      </div>

      {/* Floating stat card — bottom left */}
      <div className="absolute -bottom-3 -left-3 hidden rounded-xl border border-amber-deep/30 bg-amber p-4 shadow-mega backdrop-blur-sm md:block">
        <p className="text-micro text-body">Avg. performance gain</p>
        <p className="mt-0.5 text-[2rem] font-light leading-none text-amber">95%</p>
        <p className="mt-1 text-micro text-body">hospital system rebuild</p>
      </div>

      {/* Floating badge — top right */}
      <div className="absolute -top-3 -right-3 hidden rounded-full border border-amber/30 bg-amber/10 px-4 py-2 backdrop-blur-sm md:flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
        <span className="text-micro font-semibold text-amber">4 platforms live</span>
      </div>
    </div>
  );
}
