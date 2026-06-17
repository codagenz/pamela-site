import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import Icon from '../components/Icon.jsx';
import { COLLECTIONS } from '../data/collections.js';

// Home: three large, alternating editorial blocks — one per collection.
export default function CollectionShowcase() {
  return (
    <section className="shell pb-section" aria-labelledby="collections-heading">
      <ScrollReveal className="mb-12 max-w-prose">
        <p className="eyebrow mb-4">Three worlds</p>
        <h2 id="collections-heading" className="font-display text-step-4 text-ink">
          One brand, distinct collections
        </h2>
      </ScrollReveal>

      <div className="space-y-20 md:space-y-28">
        {COLLECTIONS.map((c, i) => (
          <ScrollReveal
            key={c.slug}
            className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="overflow-hidden rounded-lg bg-paper-2">
              <ResponsiveImage
                image={c.hero}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-3" style={{ color: `var(${c.accentVar})` }}>
                {c.tagline}
              </p>
              <h3 className="font-display text-step-4 text-ink">{c.name}</h3>
              <p className="mt-4 max-w-prose text-step-1 text-ink-2">{c.description}</p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-step--1 text-ink-2">
                {c.subcategories.map((s) => (
                  <li key={s} className="after:ml-3 after:text-line after:content-['/'] last:after:content-['']">
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to={`/${c.slug}`}
                data-cursor
                className="group mt-7 inline-flex items-center gap-2 text-step-0 text-ink"
              >
                <span className="link-underline">Explore {c.name}</span>
                <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
