import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MegaMenu from './MegaMenu.jsx';
import Icon from './Icon.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { COLLECTIONS, PAMI_WORLD } from '../data/collections.js';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // collection slug or null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();
  const reduced = usePrefersReducedMotion();

  // Close menus on route change.
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Subtle elevation once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes any open menu.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openMenu = (slug) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(slug);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const activeCollection = COLLECTIONS.find((c) => c.slug === activeMenu);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || activeMenu ? 'shadow-1' : ''
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Link to="/" data-cursor aria-label="Pami home" className="font-display text-step-2 leading-none tracking-tightish text-ink">
          Pami
        </Link>

        {/* Right cluster: nav + theme toggle (desktop) / toggle + menu (mobile) */}
        <div className="flex items-center gap-4 md:gap-6">
        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to={PAMI_WORLD.slug === 'pami-world' ? '/pami-world' : '/'}
                data-cursor
                className={({ isActive }) =>
                  `link-underline text-step-0 ${isActive ? 'text-clay' : 'text-ink'}`
                }
                onMouseEnter={() => setActiveMenu(null)}
              >
                Pami World
              </NavLink>
            </li>
            {COLLECTIONS.map((c) => (
              <li key={c.slug} onMouseEnter={() => openMenu(c.slug)}>
                <NavLink
                  to={`/${c.slug}`}
                  data-cursor
                  aria-haspopup="true"
                  aria-expanded={activeMenu === c.slug}
                  onFocus={() => openMenu(c.slug)}
                  className={({ isActive }) =>
                    `link-underline text-step-0 ${isActive ? 'text-clay' : 'text-ink'}`
                  }
                >
                  {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme toggle — visible on every breakpoint */}
        <ThemeToggle />

        {/* Mobile menu button */}
        <button
          type="button"
          data-cursor
          className="md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
        </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {activeCollection && (
          <motion.div
            key={activeCollection.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full hidden border-t border-line bg-paper md:block"
            onMouseEnter={() => openMenu(activeCollection.slug)}
            onMouseLeave={scheduleClose}
          >
            <MegaMenu collection={activeCollection} onNavigate={() => setActiveMenu(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-6">
              <li>
                <Link to="/pami-world" className="block py-3 font-display text-step-2 text-ink">
                  Pami World
                </Link>
              </li>
              {COLLECTIONS.map((c) => (
                <li key={c.slug} className="border-t border-line pt-1">
                  <Link to={`/${c.slug}`} className="block py-3 font-display text-step-2 text-ink">
                    {c.name}
                  </Link>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 pb-3">
                    {c.subcategories.map((s) => (
                      <li key={s}>
                        <Link to={`/${c.slug}`} className="text-step--1 text-ink-2">
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
