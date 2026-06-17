import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — Pami"
        description="The page you were looking for could not be found."
        path="/404"
      />
      <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-section">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-step-6 text-ink">Page not found</h1>
        <p className="mt-5 max-w-prose text-step-1 text-ink-2">
          The page you were looking for has moved or never existed. Let’s get you
          back to somewhere good.
        </p>
        <Link
          to="/"
          data-cursor
          className="group mt-8 inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-paper transition-colors hover:bg-clay-deep"
        >
          Back to Pami
          <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
