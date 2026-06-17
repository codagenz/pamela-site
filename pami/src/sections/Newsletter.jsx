import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal.jsx';
import Icon from '../components/Icon.jsx';

// UI-only newsletter sign-up. No backend — submitting just shows a thank-you.
export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-ink py-section text-paper" aria-labelledby="newsletter-heading">
      <ScrollReveal className="shell flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-prose">
          <p className="eyebrow mb-3 text-paper/60">Stay close</p>
          <h2 id="newsletter-heading" className="font-display text-step-4 text-paper">
            New arrivals, in your inbox
          </h2>
          <p className="mt-3 text-step-0 text-paper/70">
            Occasional notes on new pieces across Glow, Style and Corner. No noise.
          </p>
        </div>

        {submitted ? (
          <p className="text-step-1 text-paper" role="status">
            Thank you — you’re on the list.
          </p>
        ) : (
          <form
            className="flex w-full max-w-md items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-pill border border-paper/30 bg-transparent px-5 py-3.5 text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none"
            />
            <button
              type="submit"
              data-cursor
              aria-label="Subscribe"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-paper text-ink transition-colors hover:bg-clay hover:text-paper"
            >
              <Icon name="arrowRight" size={20} />
            </button>
          </form>
        )}
      </ScrollReveal>
    </section>
  );
}
