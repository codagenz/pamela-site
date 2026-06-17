import { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage.jsx';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

// Reusable expander. A "+" rotates/swaps to a "−" and the panel smoothly
// expands to reveal more text (and an optional image). Reused for FAQs,
// product details and story sections.
//
// Props:
//   items: [{ id, q (trigger), a (body text), image? }]
//   allowMultiple: open more than one panel at once (default false)
export default function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIds, setOpenIds] = useState(() => new Set());
  const reduced = usePrefersReducedMotion();
  const groupId = useId();

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const triggerId = `${groupId}-${item.id}-trigger`;
        const panelId = `${groupId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                data-cursor
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-step-1 leading-tight text-ink">
                  {item.q}
                </span>
                <span
                  className="relative grid h-9 w-9 shrink-0 place-items-center rounded-pill border border-line text-ink transition-colors duration-300 ease-editorial"
                  aria-hidden="true"
                >
                  {/* horizontal bar (always present) */}
                  <span className="absolute h-px w-4 bg-current" />
                  {/* vertical bar rotates away when open → + becomes − */}
                  <span
                    className="absolute h-4 w-px bg-current transition-transform duration-300 ease-editorial"
                    style={{ transform: isOpen ? 'rotate(90deg) scaleY(0)' : 'rotate(0) scaleY(1)' }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 md:grid-cols-[1fr] lg:grid-cols-[minmax(0,1fr)_auto]">
                    <p className="max-w-prose text-step-0 text-ink-2">{item.a}</p>
                    {item.image && (
                      <div className="overflow-hidden rounded-md lg:w-72">
                        <ResponsiveImage
                          image={item.image}
                          sizes="(max-width: 1024px) 90vw, 288px"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
