import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand amber (from logo)
        amber: {
          DEFAULT: '#FFD230',
          bright: '#FFE16B',
          mid: '#E9BB16',
          deep: '#B88E00',
          dark: '#806200',
          tint: '#FFF7CD',
          wash: '#FFFBEA',
        },
        // Brand navy
        navy: {
          DEFAULT: '#071B3A',
          light: '#102B55',
          deep: '#041226',
        },
        // Light surface ladder (primary)
        white: '#FFFFFF',
        paper: '#FAFAF8',
        'gray-50': '#F5F5F3',
        'gray-100': '#EDEDEA',
        'gray-200': '#E0DDD8',
        'gray-300': '#C8C5BE',
        'gray-400': '#A8A49C',
        'gray-500': '#88847C',
        'gray-600': '#66625C',
        'gray-700': '#46433E',
        'gray-800': '#2C2A26',
        'gray-900': '#1A1816',
        ink: '#071B3A',
        // Dark section surfaces
        dark: '#071B3A',
        'dark-2': '#071B3A',
        'dark-card': '#102B55',
        'dark-border': 'rgba(255,255,255,0.10)',
        // Line/border
        line: '#E8E5E0',
        'line-strong': '#D0CCC5',
      },
      textColor: {
        DEFAULT: '#14110E',
        body: '#4A4740',
        muted: '#88847C',
        'on-dark': 'rgba(241,240,238,0.85)',
        'on-dark-muted': 'rgba(241,240,238,0.56)',
      },
      borderColor: {
        DEFAULT: '#E8E5E0',
        hairline: 'rgba(0,0,0,0.07)',
        'hairline-dark': 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        micro: ['0.75rem', { lineHeight: '1.4' }],
        caption: ['0.875rem', { lineHeight: '1.4' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
        body: ['1rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        lead: ['1.25rem', { lineHeight: '1.6' }],
        h4: ['1.625rem', { lineHeight: '1.25' }],
        h3: ['2rem', { lineHeight: '1.2' }],
        h2: ['2.75rem', { lineHeight: '1.14' }],
        h1: ['3.5rem', { lineHeight: '1.08' }],
        display: ['4.5rem', { lineHeight: '1.02' }],
      },
      letterSpacing: {
        display: '-0.03em',
        heading: '-0.02em',
        snug: '-0.01em',
        label: '0.07em',
      },
      maxWidth: {
        container: '1280px',
        narrow: '980px',
        reading: '680px',
        measure: '540px',
      },
      borderRadius: {
        pill: '1.875rem',
        card: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
        amber: '0 4px 24px rgba(242,169,59,0.30)',
        'amber-lg': '0 8px 48px rgba(242,169,59,0.25)',
        mega: '0 24px 64px rgba(0,0,0,0.14)',
        focus: '0 0 0 3px rgba(242,169,59,0.35)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast: '180ms',
        base: '280ms',
        slow: '400ms',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-up': 'fade-up 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fade-in 0.3s ease both',
        'slide-down': 'slide-down 0.25s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
