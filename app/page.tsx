import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StackMarquee from '@/components/sections/StackMarquee';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import Differentiators from '@/components/sections/Differentiators';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'Eaquirs Tech — AI-Native Software Engineering Partner',
  description:
    'Eaquirs Tech builds ERP platforms, AI systems and production software for founders and operating teams. Four platforms live. Rescue engagements welcome.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Services />
      <Work />
      <Industries />
      <Process />
      <Differentiators />
      <Pricing />
      <FAQ />
    </>
  );
}
