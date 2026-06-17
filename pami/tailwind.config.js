/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Dark mode flips CSS-variable tokens under `.dark` on <html>; the class
  // strategy lets us add `dark:` utilities later if ever needed.
  darkMode: 'class',
  theme: {
    // Centralized design tokens. Everything maps to CSS variables declared in
    // src/styles/tokens.css so the system stays single-sourced.
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        clay: 'var(--clay)',
        'clay-deep': 'var(--clay-deep)',
        line: 'var(--line)',
        // Subtle per-collection accent hints
        'glow-accent': 'var(--glow-accent)',
        'style-accent': 'var(--style-accent)',
        'corner-accent': 'var(--corner-accent)',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'step--1': 'var(--step--1)',
        'step-0': 'var(--step-0)',
        'step-1': 'var(--step-1)',
        'step-2': 'var(--step-2)',
        'step-3': 'var(--step-3)',
        'step-4': 'var(--step-4)',
        'step-5': 'var(--step-5)',
        'step-6': 'var(--step-6)',
      },
      borderRadius: {
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        pill: 'var(--r-pill)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
      },
      spacing: {
        section: 'var(--section-y)',
        gutter: 'var(--gutter)',
      },
      maxWidth: {
        shell: '1320px',
        prose: '68ch',
      },
      letterSpacing: {
        tightish: '-0.02em',
        eyebrow: '0.18em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
