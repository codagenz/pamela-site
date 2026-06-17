import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

// Wraps children in a scroll-triggered reveal. Combines IntersectionObserver
// (useScrollReveal) with Framer Motion. When reduced-motion is preferred the
// content renders fully visible with no transform.
export default function ScrollReveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  className = '',
  ...rest
}) {
  const { ref, visible } = useScrollReveal();
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
