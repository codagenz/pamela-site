// ============================================================================
// SITE-WIDE + PER-ROUTE METADATA and structured data.
// Consumed by <Seo /> (react-helmet-async). Keeping it here keeps SEO copy
// out of components and easy to audit.
// ============================================================================
import { OG_IMAGE } from './images.js';

// Canonical production origin. Update on deploy; used for canonical + OG URLs.
export const SITE_URL = 'https://pami.example.com';
export const SITE_NAME = 'Pami';

const ogImageAbs = OG_IMAGE; // already an absolute https Unsplash URL

export const META = {
  '/': {
    title: 'Pami — A modern lifestyle brand for glow, style & everyday',
    description:
      'Pami is a multi-category lifestyle brand: skincare and scent (Glow), fashion and accessories (Style) and freshly made beverages (Corner). Explore the full catalogue.',
    path: '/',
  },
  '/pami-world': {
    title: 'Pami World — Shop all collections',
    description:
      'Every Pami collection in one place. Browse the full catalogue across skincare, fashion and beverages — Pami Glow, Pami Style and Pami Corner.',
    path: '/pami-world',
  },
  '/pami-glow': {
    title: 'Pami Glow — Skincare, beauty accessories & perfume',
    description:
      'Considered skincare, refined beauty tools and quietly memorable fragrance from Pami Glow. A daily ritual that feels like care, not effort.',
    path: '/pami-glow',
  },
  '/pami-style': {
    title: 'Pami Style — Fashion, bags, watches & eyewear',
    description:
      'Wardrobe staples and the accessories that finish them: dresses, tees, denim and tailoring with bags, smart watches and eyeglasses built to last.',
    path: '/pami-style',
  },
  '/pami-corner': {
    title: 'Pami Corner — Cold-pressed juices & craft soft drinks',
    description:
      'Cold-pressed juices, craft soft drinks and everyday refreshment from Pami Corner — made with real ingredients and a lighter hand with sugar.',
    path: '/pami-corner',
  },
};

export const DEFAULT_META = {
  title: 'Pami',
  description: 'A modern multi-category lifestyle brand.',
  path: '/',
};

export const getMeta = (path) => META[path] || { ...DEFAULT_META, path };
export const OG_IMAGE_URL = ogImageAbs;

// ---- Organization JSON-LD (site-wide) ----
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: META['/'].description,
  brand: ['Pami Glow', 'Pami Style', 'Pami Corner'].map((name) => ({
    '@type': 'Brand',
    name,
  })),
  sameAs: [
    'https://instagram.com/pami',
    'https://www.pinterest.com/pami',
  ],
};
