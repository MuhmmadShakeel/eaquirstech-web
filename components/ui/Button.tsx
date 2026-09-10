import Link from 'next/link';
import { cn } from '@/lib/utils';
import Icon from './Icon';

type Variant = 'primary' | 'outline' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

const base =
  'button-sweep group relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden font-semibold ' +
  'transition-[color,background-color,border-color,transform] duration-fast disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary: 'rounded-pill bg-amber !text-navy hover:bg-amber-bright active:bg-amber-mid',
  outline: 'rounded-pill border border-line bg-white text-ink hover:border-amber hover:text-amber',
  ghost:   'bg-transparent text-amber hover:text-amber-deep px-0 rounded-none',
  dark:    'rounded-pill bg-ink text-white hover:bg-gray-800',
};

const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-5 py-2 text-caption',
  md: 'min-h-11 px-6 py-2.5 text-body-sm',
  lg: 'min-h-13 px-8 py-3 text-body-sm md:text-body',
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children, href, variant = 'primary', size = 'md',
  className, arrow = false, external = false, ...rest
}: Props) {
  const classes = cn(base, variants[variant], variant !== 'ghost' && sizes[size], className);

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2.5">
      {children}
      {arrow && (
        <Icon
          name={external ? 'external' : 'arrow'}
          className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1"
        />
      )}
    </span>
  );

  if (href) {
    if (external || href.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{inner}</a>;
    }
    return <Link href={href} className={classes}>{inner}</Link>;
  }

  return <button className={classes} {...rest}>{inner}</button>;
}
