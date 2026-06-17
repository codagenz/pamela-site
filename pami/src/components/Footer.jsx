import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { COLLECTIONS } from '../data/collections.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-section border-t border-line bg-paper-2">
      <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-step-4 leading-none text-ink">Pami</p>
          <p className="mt-4 max-w-prose text-step-0 text-ink-2">
            One brand, three worlds — glow, style and everyday refreshment. Made
            with restraint and meant to last.
          </p>
          <a
            href="https://instagram.com/pami"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="mt-6 inline-flex items-center gap-2 text-step--1 text-ink hover:text-clay"
          >
            <Icon name="instagram" size={18} />
            Follow @pami
          </a>
        </div>

        <nav aria-label="Collections" className="md:col-span-3">
          <p className="eyebrow mb-4">Collections</p>
          <ul className="space-y-2">
            <li>
              <Link to="/pami-world" data-cursor className="text-step-0 text-ink-2 hover:text-ink">
                Pami World
              </Link>
            </li>
            {COLLECTIONS.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} data-cursor className="text-step-0 text-ink-2 hover:text-ink">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Information</p>
          <ul className="space-y-2 text-step-0 text-ink-2">
            <li>This is a brand showcase, not a checkout.</li>
            <li>Imagery via Unsplash — see attributions.</li>
            <li>Built as a prerendered React single-page app.</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-line py-6 text-step--1 text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Pami. All rights reserved.</p>
        <p>Glow · Style · Corner</p>
      </div>
    </footer>
  );
}
