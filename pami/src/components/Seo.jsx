import { Head } from 'vite-react-ssg';
import { SITE_URL, SITE_NAME, OG_IMAGE_URL } from '../data/siteMeta.js';

// Centralised per-route <head>: title, description, canonical, Open Graph,
// Twitter Card, plus any page-specific JSON-LD passed via `jsonLd`.
// Uses vite-react-ssg's <Head> (bound to its bundled react-helmet-async) so the
// tags are collected into the prerendered HTML.
export default function Seo({ title, description, path = '/', image, jsonLd }) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = image || OG_IMAGE_URL;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Head>
  );
}
