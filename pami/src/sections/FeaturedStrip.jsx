import ScrollReveal from '../components/ScrollReveal.jsx';
import ProductCard from '../components/ProductCard.jsx';

// A compact, scroll-revealed grid of hand-picked products.
export default function FeaturedStrip({ eyebrow = 'Featured', title, products }) {
  if (!products?.length) return null;
  return (
    <section className="shell py-section" aria-labelledby="featured-heading">
      <ScrollReveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-prose">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 id="featured-heading" className="font-display text-step-4 text-ink">
            {title}
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {products.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.06}>
            <ProductCard product={p} layout="grid" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
