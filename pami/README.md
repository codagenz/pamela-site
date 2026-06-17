# Pami — Brand + Catalogue Website

A modern, premium, content-rich brand showcase and catalogue for the
multi-category lifestyle brand **Pami**. Frontend-only React (Vite, JSX) SPA,
**prerendered to static HTML** so meta tags and content exist in the initial
markup (indexable, social-previewable). No backend, no checkout — all
product/content data is static.

## Information architecture

| Collection | Route | Contents |
|------------|-------|----------|
| Pami World | `/pami-world` | Umbrella "shop all" landing |
| Pami Glow  | `/pami-glow`  | Skincare, beauty accessories, perfume |
| Pami Style | `/pami-style` | Fashion + accessories (bags, watches, eyewear) |
| Pami Corner| `/pami-corner`| Beverages (juices, soft drinks) |

Home lives at `/`. A catch-all renders a 404.

## Tech stack

- **React 18 + Vite** (JSX, no TypeScript)
- **react-router-dom** — one route per collection
- **vite-react-ssg** — static prerender (per-route HTML with meta + content)
- **react-helmet-async** — per-route `<head>` (via vite-react-ssg's `<Head>`)
- **Framer Motion** (animation) + **Lenis** (smooth scroll)
- **Tailwind CSS** with a centralised design-token layer
- **lucide-react** — one consistent line-icon set

## Design system

Tokens live in `src/styles/tokens.css` and are mapped into Tailwind via
`tailwind.config.js`: a warm editorial neutral palette with a single clay
accent, a fluid `clamp()` type scale (Fraunces display + Inter body), spacing,
radius and restrained shadow tokens. No gradient fills.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # Vite dev server (SPA)
npm run build    # vite-react-ssg build → prerendered static site in dist/
npm run preview  # preview the built static site
```

## Features

- Multi-column **mega menu** with category links, featured items and an image
  preview panel.
- **Grid / List** layout toggle on collection views.
- Reusable **Accordion** (`+` ⇄ `−`) reused for FAQs, product details and story.
- **Custom cursor** (disabled on touch + reduced-motion).
- **Scroll-reveal** animations (IntersectionObserver + Framer Motion) and Lenis
  smooth scrolling. Every animation respects `prefers-reduced-motion`.

## SEO

Per-route `<title>`, meta description, canonical, Open Graph + Twitter Card;
semantic HTML5 with one `<h1>` per page; `public/robots.txt` + `public/sitemap.xml`;
JSON-LD (Organization site-wide, ItemList + Product per collection). All emitted
into the prerendered HTML — verify with **view source** (not just devtools).

Imagery is sourced from Unsplash — see `ATTRIBUTIONS.md`.
