import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import CollectionShowcase from '../sections/CollectionShowcase.jsx';
import StorySection from '../sections/StorySection.jsx';
import FeaturedStrip from '../sections/FeaturedStrip.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import Newsletter from '../sections/Newsletter.jsx';
import { getMeta, organizationLd } from '../data/siteMeta.js';
import { IMAGES } from '../data/images.js';
import { PRODUCTS } from '../data/products.js';

export default function Home() {
  const meta = getMeta('/');
  // One curated product from each collection for the featured strip.
  const featured = [
    PRODUCTS.find((p) => p.id === 'glow-amber-eau'),
    PRODUCTS.find((p) => p.id === 'style-leather-tote'),
    PRODUCTS.find((p) => p.id === 'corner-orange-juice'),
    PRODUCTS.find((p) => p.id === 'style-classic-watch'),
  ].filter(Boolean);

  return (
    <>
      <Seo {...meta} jsonLd={organizationLd} />
      <Hero
        eyebrow="A modern lifestyle brand"
        title="Pami"
        lead="Three considered worlds under one name — skincare and scent, fashion and accessories, and freshly made beverages. This is Pami."
        image={IMAGES.brandHero}
        cta={{
          to: '/pami-world',
          label: 'Explore Pami World',
          secondary: { to: '/pami-glow', label: 'Discover Glow' },
        }}
      />
      <CollectionShowcase />
      <FeaturedStrip title="A few of our favourites" products={featured} />
      <StorySection />
      <FaqSection />
      <Newsletter />
    </>
  );
}
