import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import CollectionShowcase from '../sections/CollectionShowcase.jsx';
import CollectionGrid from '../sections/CollectionGrid.jsx';
import StorySection from '../sections/StorySection.jsx';
import Newsletter from '../sections/Newsletter.jsx';
import { PAMI_WORLD, COLLECTIONS } from '../data/collections.js';
import { PRODUCTS } from '../data/products.js';
import { getMeta, SITE_URL } from '../data/siteMeta.js';
import { IMAGES } from '../data/images.js';

// Umbrella "shop all" landing — the full catalogue across every collection.
export default function PamiWorld() {
  const meta = getMeta('/pami-world');

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pami World — all collections',
    url: `${SITE_URL}/pami-world`,
    numberOfItems: COLLECTIONS.length,
    itemListElement: COLLECTIONS.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: `${SITE_URL}/${c.slug}`,
    })),
  };

  return (
    <>
      <Seo {...meta} jsonLd={collectionLd} />
      <Hero
        eyebrow={PAMI_WORLD.tagline}
        title="Pami World"
        lead={PAMI_WORLD.description}
        image={IMAGES.brandWorld}
        cta={{ to: '/pami-glow', label: 'Start with Glow', secondary: { to: '/pami-style', label: 'Browse Style' } }}
      />
      <CollectionShowcase />
      <CollectionGrid
        products={PRODUCTS}
        categories={[...new Set(PRODUCTS.map((p) => p.category))]}
        title="The full Pami catalogue"
      />
      <StorySection />
      <Newsletter />
    </>
  );
}
