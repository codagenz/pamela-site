import Accordion from './Accordion.jsx';
import ResponsiveImage from './ResponsiveImage.jsx';

// Renders a catalogue product in either 'grid' or 'list' layout. The product
// "details" copy reuses the shared Accordion expander.
export default function ProductCard({ product, layout = 'grid' }) {
  const { name, category, blurb, details, image, price } = product;

  const detailItems = [
    { id: `${product.id}-details`, q: 'Product details', a: details },
  ];

  if (layout === 'list') {
    return (
      <article className="grid grid-cols-[112px_1fr] gap-5 border-b border-line py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
        <div className="overflow-hidden rounded-md bg-paper-2">
          <ResponsiveImage
            image={image}
            sizes="(max-width: 640px) 112px, 160px"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="eyebrow mb-1">{category}</p>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-step-2 text-ink">{name}</h3>
            {price != null && (
              <span className="shrink-0 text-step-0 text-ink-2">${price}</span>
            )}
          </div>
          <p className="mt-2 max-w-prose text-step-0 text-ink-2">{blurb}</p>
          <div className="mt-3">
            <Accordion items={detailItems} />
          </div>
        </div>
      </article>
    );
  }

  // grid
  return (
    <article data-cursor className="group flex flex-col">
      <div className="relative overflow-hidden rounded-md bg-paper-2">
        <ResponsiveImage
          image={image}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="eyebrow mb-1">{category}</p>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-step-1 leading-tight text-ink">{name}</h3>
          {price != null && (
            <span className="shrink-0 text-step--1 text-ink-2">${price}</span>
          )}
        </div>
        <p className="mt-2 text-step-0 text-ink-2">{blurb}</p>
      </div>
    </article>
  );
}
