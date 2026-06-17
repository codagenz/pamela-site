import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon.jsx';
import { useTheme } from '../hooks/useTheme.js';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

// Light/dark switch. The icon swaps (sun ⇄ moon) with a small fade/rotate that
// degrades to an instant swap under reduced-motion. Light is the default.
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      data-cursor
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`grid h-9 w-9 place-items-center rounded-pill border border-line text-ink transition-colors duration-300 ease-editorial hover:border-ink ${className}`}
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={reduced ? false : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <Icon name={isDark ? 'moon' : 'sun'} size={18} />
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
