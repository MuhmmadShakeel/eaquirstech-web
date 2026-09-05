import { cn } from '@/lib/utils';

export function Eyebrow({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <p className={cn(
      'mb-4 inline-flex items-center gap-2 text-micro font-bold uppercase tracking-label',
      dark ? 'text-amber' : 'text-amber-deep',
      className,
    )}>
      <span aria-hidden className={cn('h-px w-5', dark ? 'bg-amber/60' : 'bg-amber-deep/50')} />
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow, title, intro, align = 'center', dark, className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div
      data-reveal="hidden"
      className={cn('flex flex-col', centered ? 'items-center text-center' : 'items-start text-left', className)}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={cn(
        'text-[1.875rem] font-semibold leading-tight tracking-snug sm:text-[2.25rem] lg:text-[2.875rem]',
        centered ? 'max-w-[22ch]' : 'max-w-[20ch]',
        dark ? 'text-white' : 'text-ink',
      )}>
        {title}
      </h2>
      {intro && (
        <p className={cn(
          'mt-5 text-body-sm leading-relaxed',
          centered ? 'max-w-reading' : 'max-w-measure',
          dark ? 'text-on-dark-muted' : 'text-body',
        )}>
          {intro}
        </p>
      )}
    </div>
  );
}
