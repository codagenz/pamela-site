import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage.jsx';
import Icon from './Icon.jsx';
import { getProductById } from '../data/products.js';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';

// Multi-column mega-menu panel for a single collection: category links, a set
// of featured items, and an image preview panel that swaps as you hover links
// or featured products.
export default function MegaMenu({ collection, onNavigate }) {
  const reduced = usePrefersReducedMotion();
  const featured = (collection.featured || [])
    .map(getProductById)
    .filter(Boolean);
  const [preview, setPreview] = useState({
    image: collection.hero,
    label: collection.tagline,
  });

  const resetPreview = () =>
    setPreview({ image: collection.hero, label: collection.tagline });

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="shell grid grid-cols-12 gap-8 py-10"
      onMouseLeave={resetPreview}
    >
      {/* Categories */}
      <div className="col-span-12 md:col-span-3">
        <p className="eyebrow mb-4">Categories</p>
        <ul className="space-y-2">
          {collection.subcategories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/${collection.slug}`}
                onClick={onNavigate}
                onMouseEnter={() => setPreview({ image: collection.hero, label: cat })}
                data-cursor
                className="link-underline text-step-1 text-ink"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={`/${collection.slug}`}
          onClick={onNavigate}
          data-cursor
          className="mt-6 inline-flex items-center gap-2 text-step--1 font-medium text-clay"
        >
          Shop all {collection.name}
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>

      {/* Featured products */}
      <div className="col-span-12 md:col-span-5">
        <p className="eyebrow mb-4">Featured</p>
        <ul className="grid grid-cols-3 gap-4">
          {featured.map((p) => (
            <li key={p.id}>
              <Link
                to={`/${collection.slug}`}
                onClick={onNavigate}
                onMouseEnter={() => setPreview({ image: p.image, label: p.name })}
                data-cursor
                className="group block"
              >
                <div className="overflow-hidden rounded-md bg-paper-2">
                  <ResponsiveImage
                    image={p.image}
                    sizes="160px"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
                  />
                </div>
                <span className="mt-2 block text-step--1 text-ink">{p.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Image preview */}
      <div className="col-span-12 md:col-span-4">
        <div className="relative overflow-hidden rounded-lg bg-paper-2">
          <ResponsiveImage
            key={preview.image.src}
            image={preview.image}
            sizes="(max-width: 768px) 100vw, 360px"
            className="aspect-[4/3] w-full object-cover"
          />
          <span className="absolute bottom-0 left-0 right-0 bg-ink/70 px-4 py-3 text-step--1 text-paper backdrop-blur-sm">
            {preview.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
