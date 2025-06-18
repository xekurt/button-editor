// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './src/app/pages/**/*.{html,ts}',
    './src/app/shared/**/*.{html,ts}',
  ],

  theme: {
    extend: {
      // Colors
      colors: {
        primary: {
          light: '#4F46E5', // Indigo-600
          DEFAULT: '#4338CA', // Indigo-700
          dark: '#312E81', // Indigo-800
        },
        secondary: {
          light: '#4ADE80', // Green-400
          DEFAULT: '#22C55E', // Green-500
          dark: '#15803D', // Green-700
        },
        success: {
          light: '#4ADE80', // Green-400
          DEFAULT: '#22C55E', // Green-500
          dark: '#15803D', // Green-700
        },
        warning: {
          light: '#FACC15', // Yellow-400
          DEFAULT: '#EAB308', // Yellow-500
          dark: '#CA8A04', // Yellow-600
        },
        error: {
          light: '#F87171', // Red-400
          DEFAULT: '#EF4444', // Red-500
          dark: '#DC2626', // Red-600
        },
        neutral: {
          50: '#FAFAFA', // Lightest gray (light mode bg)
          100: '#F4F4F5',
          200: '#E5E7EB',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#6B7280',
          600: '#4B5563',
          700: '#3F3F46',
          800: '#1E1E2E', // Dark mode bg
          900: '#181825', // Darkest gray
        },
        text: {
          light: '#1F2937', // Gray-800 for light mode
          dark: '#F5F5F5', // Gray-100 for dark mode
        },
      },
      // Typography
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
      },
      // Spacing
      spacing: {
        xs: '0.25rem', // 4px
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '3rem', // 48px
      },
      // Breakpoints
      screens: {
        sm: '640px', // Mobile
        md: '768px', // Tablet
        lg: '1024px', // Desktop
        xl: '1280px', // Large desktop
      },
      // Border Radius
      borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
      },
      // Box Shadow
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        lg: '0 4px 8px 0 rgba(0, 0, 0, 0.15)',
      },
      // Opacity
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      // Transition
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
    },
  },
  plugins: [],
};
