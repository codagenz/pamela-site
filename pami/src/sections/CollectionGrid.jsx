import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import LayoutToggle from '../components/LayoutToggle.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

// Product browser with a grid/list layout toggle and optional category filter.
// `products` is the full set to display.
export default function CollectionGrid({ products, categories = [], title = 'The collection' }) {
  const [layout, setLayout] = useState('grid');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = useMemo(() => {
    if (activeCat === 'All') return products;
    return products.filter((p) => p.category === activeCat);
  }, [products, activeCat]);

  const filters = ['All', ...categories];

  return (
    <section className="shell py-section" aria-labelledby="grid-heading">
      <div className="mb-8 flex flex-col gap-5 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="grid-heading" className="font-display text-step-3 text-ink">
          {title}
        </h2>
        <div className="flex items-center justify-between gap-4">
          <span className="text-step--1 text-ink-2">{filtered.length} items</span>
          <LayoutToggle layout={layout} onChange={setLayout} />
        </div>
      </div>

      {filters.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((cat) => {
            const active = activeCat === cat;
            return (
              <button
                key={cat}
                type="button"
                data-cursor
                aria-pressed={active}
                onClick={() => setActiveCat(cat)}
                className={`rounded-pill border px-4 py-2 text-step--1 transition-colors duration-300 ${
                  active
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line text-ink-2 hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {layout === 'grid' ? (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 3) * 0.05}>
              <ProductCard product={p} layout="grid" />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} layout="list" />
          ))}
        </div>
      )}
    </section>
  );
}
