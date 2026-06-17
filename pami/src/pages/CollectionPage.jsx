import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import CollectionGrid from '../sections/CollectionGrid.jsx';
import FeaturedStrip from '../sections/FeaturedStrip.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import Newsletter from '../sections/Newsletter.jsx';
import NotFound from './NotFound.jsx';
import { getCollection } from '../data/collections.js';
import { getProductsByCollection, getProductById } from '../data/products.js';
import { getMeta, SITE_URL } from '../data/siteMeta.js';

// Single reusable template for Pami Glow / Style / Corner, selected by `slug`.
export default function CollectionPage({ slug }) {
  const collection = getCollection(slug);
  if (!collection) return <NotFound />;

  const meta = getMeta(`/${slug}`);
  const products = getProductsByCollection(slug);
  const featured = (collection.featured || []).map(getProductById).filter(Boolean);
  const pageUrl = `${SITE_URL}/${slug}`;

  // ItemList + Product structured data for this collection.
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: collection.name,
    description: collection.description,
    url: pageUrl,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        category: p.category,
        description: p.blurb,
        image: p.image.src,
        brand: { '@type': 'Brand', name: collection.name },
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <>
      <Seo {...meta} image={collection.hero.src} jsonLd={itemListLd} />
      <Hero
        eyebrow={collection.tagline}
        title={collection.name}
        lead={collection.description}
        image={collection.hero}
        cta={{ to: '/pami-world', label: 'Shop all of Pami' }}
      />
      <FeaturedStrip eyebrow="Featured" title={`Standouts from ${collection.name}`} products={featured} />
      <CollectionGrid
        products={products}
        categories={collection.subcategories.filter((c) =>
          products.some((p) => p.category === c),
        )}
        title={`The ${collection.name} collection`}
      />
      <FaqSection />
      <Newsletter />
    </>
  );
}
