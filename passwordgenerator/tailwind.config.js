// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        tiny: ['0.625rem', { lineHeight: '1.5rem' }],
        sm: ['0.75rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      colors: {
        mint: {
          100: 'oklch(0.97 0.15 145)',
          200: 'oklch(0.92 0.18 145)',
          300: 'oklch(0.85 0.22 145)',
          400: 'oklch(0.78 0.25 145)',
          500: 'oklch(0.7 0.28 145)',
          600: 'oklch(0.63 0.3 145)',
          700: 'oklch(0.56 0.32 145)',
          800: 'oklch(0.48 0.35 145)',
          900: 'oklch(0.4 0.37 145)',
        },
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
}