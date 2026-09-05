'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import { faqs } from '@/lib/content/faq';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Questions"
          title="Things people usually ask"
        />

        <div className="mt-14 mx-auto max-w-3xl divide-y divide-line">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="py-5">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className={cn(
                  'text-body font-medium leading-snug transition-colors duration-fast',
                  open === i ? 'text-amber-deep' : 'text-ink',
                )}>
                  {faq.question}
                </span>
                <span className={cn(
                  'mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-base',
                  open === i
                    ? 'border-amber bg-amber text-white'
                    : 'border-line bg-gray-50 text-gray-400',
                )}>
                  <Icon
                    name={open === i ? 'minus' : 'plus'}
                    className="h-3.5 w-3.5"
                    strokeWidth={2.5}
                  />
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-base',
                  open === i ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0',
                )}
              >
                <p className="text-body-sm text-body leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
