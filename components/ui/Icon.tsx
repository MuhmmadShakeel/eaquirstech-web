import { cn } from '@/lib/utils';

export type IconName =
  | 'code' | 'layers' | 'spark' | 'shield' | 'link' | 'pen'
  | 'building' | 'health' | 'factory' | 'store' | 'users' | 'card' | 'truck' | 'cloud'
  | 'arrow' | 'check' | 'plus' | 'minus' | 'external' | 'menu' | 'close' | 'mail'
  | 'globe' | 'ai' | 'chart' | 'rocket' | 'lightning' | 'monitor' | 'cpu';

const paths: Record<IconName, React.ReactNode> = {
  code: <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
  spark: <><path d="M12 2v5" /><path d="M12 17v5" /><path d="M4.2 4.2 7.8 7.8" /><path d="m16.2 16.2 3.6 3.6" /><path d="M2 12h5" /><path d="M17 12h5" /><path d="M4.2 19.8 7.8 16.2" /><path d="m16.2 7.8 3.6-3.6" /></>,
  shield: <><path d="M12 2 4 6v6c0 5 3.4 9.1 8 10 4.6-.9 8-5 8-10V6l-8-4Z" /><path d="m9 12 2 2 4-4" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></>,
  building: <><path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M14 9h4a2 2 0 0 1 2 2v10" /><path d="M2 21h20" /><path d="M8 7h2M8 11h2M8 15h2" /></>,
  health: <><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" /><path d="M12 9v4M10 11h4" /></>,
  factory: <><path d="M2 20h20" /><path d="M4 20V9l5 3V9l5 3V6l5 3v11" /><path d="M8 16h2M14 16h2" /></>,
  store: <><path d="M3 9 5 4h14l2 5" /><path d="M3 9h18v11H3z" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 20a7 7 0 0 1 14 0" /><path d="M17 5.5a3.5 3.5 0 0 1 0 7" /><path d="M18 14.5a6 6 0 0 1 4 5.5" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></>,
  truck: <><path d="M2 7h11v10H2z" /><path d="M13 10h4l4 4v3h-8z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  cloud: <><path d="M6.5 18a4.5 4.5 0 0 1-.7-8.95 6 6 0 0 1 11.6 1.45A3.75 3.75 0 0 1 17.5 18Z" /></>,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  check: <path d="m4 12 5 5L20 6" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  external: <><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  menu: <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>,
  close: <><path d="M6 6 18 18" /><path d="M18 6 6 18" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a14 14 0 0 1 4 10 14 14 0 0 1-4 10 14 14 0 0 1-4-10A14 14 0 0 1 12 2z" /></>,
  ai: <><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2Z" /><path d="m4.9 4.9 1.4 1.4a2 2 0 0 1-2.8 2.8L2.1 7.7" /><path d="M2 12h2a2 2 0 0 1 0 4H2" /><path d="m4.9 19.1 1.4-1.4a2 2 0 0 1 2.8 2.8l-1.4 1.4" /><path d="M12 22a2 2 0 0 1-2-2v-2a2 2 0 0 1 4 0v2a2 2 0 0 1-2 2Z" /><path d="m19.1 19.1-1.4-1.4a2 2 0 0 1 2.8-2.8l1.4 1.4" /><path d="M22 12h-2a2 2 0 0 1 0-4h2" /><path d="m19.1 4.9-1.4 1.4a2 2 0 0 1-2.8-2.8l1.4-1.4" /></>,
  chart: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
  lightning: <><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
  cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" /></>,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0', className)}
    >
      {paths[name]}
    </svg>
  );
}
