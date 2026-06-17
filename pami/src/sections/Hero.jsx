import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Icon from '../components/Icon.jsx';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

// Editorial hero. Renders the page's single <h1>. The image is treated as a
// priority/eager load to keep the largest contentful paint fast.
export default function Hero({ eyebrow, title, lead, image, cta }) {
  const reduced = usePrefersReducedMotion();
  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="shell grid grid-cols-1 items-center gap-10 pb-section pt-12 md:pt-16 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-6">
        {eyebrow && (
          <motion.p className="eyebrow mb-5" {...rise(0)}>
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className="text-balance font-display text-step-6 text-ink"
          {...rise(0.06)}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p className="mt-6 max-w-prose text-step-1 text-ink-2" {...rise(0.14)}>
            {lead}
          </motion.p>
        )}
        {cta && (
          <motion.div className="mt-9 flex flex-wrap gap-4" {...rise(0.2)}>
            <Link
              to={cta.to}
              data-cursor
              className="group inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-step-0 text-paper transition-colors duration-300 hover:bg-clay-deep"
            >
              {cta.label}
              <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {cta.secondary && (
              <Link
                to={cta.secondary.to}
                data-cursor
                className="inline-flex items-center gap-2 rounded-pill border border-line px-7 py-3.5 text-step-0 text-ink transition-colors duration-300 hover:border-ink"
              >
                {cta.secondary.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        className="lg:col-span-6"
        initial={reduced ? false : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-lg bg-paper-2">
          <ResponsiveImage
            image={image}
            priority
            sizes="(max-width: 1024px) 92vw, 46vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
