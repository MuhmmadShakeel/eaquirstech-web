import Button from '@/components/ui/Button';
import { revealProps } from '@/lib/reveal';

export default function CTABand() {
  return (
    <section className="section-y section-dark relative overflow-hidden">

      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <p {...revealProps(0)} className="text-micro font-bold uppercase tracking-label text-amber mb-4">
            Ready to build?
          </p>
          <h2 {...revealProps(1)} className="text-h2 font-bold leading-tight text-white">
            Let us turn your hardest problem into your best product
          </h2>
          <p {...revealProps(2)} className="mt-5 text-body text-on-dark-muted">
            Most teams reach us when previous attempts have failed, the deadline moved, or the project is on fire.
            We are comfortable in all three scenarios.
          </p>
          <div {...revealProps(3)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
              Start a conversation
            </Button>
            <Button href="/work" variant="ghost" size="lg" className="text-white/80 hover:text-white">
              See our work first
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
