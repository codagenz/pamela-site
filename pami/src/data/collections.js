// ============================================================================
// COLLECTION DEFINITIONS — the information architecture of Pami.
// Drives routing, the mega menu, collection pages and structured data.
// ============================================================================
import { IMAGES } from './images.js';

export const COLLECTIONS = [
  {
    slug: 'pami-glow',
    name: 'Pami Glow',
    tagline: 'Skincare, beauty & scent',
    description:
      'Considered skincare, refined beauty tools and quietly memorable fragrance — a daily ritual that feels like care, not effort.',
    accentVar: '--glow-accent',
    hero: IMAGES.glowHero,
    subcategories: ['Skincare', 'Beauty Accessories', 'Perfume'],
    featured: ['glow-radiance-serum', 'glow-amber-eau', 'glow-sculpt-roller'],
  },
  {
    slug: 'pami-style',
    name: 'Pami Style',
    tagline: 'Fashion & accessories',
    description:
      'Wardrobe staples and the accessories that finish them — dresses, tees, denim and tailoring alongside bags, watches and eyewear built to last.',
    accentVar: '--style-accent',
    hero: IMAGES.styleHero,
    subcategories: ['Dresses', 'T-Shirts', 'Shirts', 'Knitwear', 'Jeans', 'Trousers', 'Official Wear', 'Footwear', 'Bags', 'Accessories', 'Smart Watches', 'Eyeglasses'],
    featured: ['style-midi-dress', 'style-leather-tote', 'style-smart-watch'],
  },
  {
    slug: 'pami-corner',
    name: 'Pami Corner',
    tagline: 'Beverages, freshly made',
    description:
      'Cold-pressed juices, craft soft drinks and everyday refreshment made with real ingredients and a lighter hand with sugar.',
    accentVar: '--corner-accent',
    hero: IMAGES.cornerHero,
    subcategories: ['Juices', 'Soft Drinks', 'Coffee & Tea'],
    featured: ['corner-orange-juice', 'corner-craft-cola', 'corner-berry-smoothie'],
  },
];

// Pami World is the umbrella "shop all" landing — not a product collection
// itself, but it appears in navigation and structured data.
export const PAMI_WORLD = {
  slug: 'pami-world',
  name: 'Pami World',
  tagline: 'Shop all of Pami',
  description:
    'Every collection, one world. Explore the full Pami catalogue across skincare, fashion and beverages.',
  hero: IMAGES.brandWorld,
};

export const getCollection = (slug) =>
  COLLECTIONS.find((c) => c.slug === slug);
