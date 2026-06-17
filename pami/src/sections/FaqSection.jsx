import ScrollReveal from '../components/ScrollReveal.jsx';
import Accordion from '../components/Accordion.jsx';
import { FAQS } from '../data/faqs.js';

export default function FaqSection() {
  return (
    <section className="shell py-section" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-4">
          <p className="eyebrow mb-4">Questions</p>
          <h2 id="faq-heading" className="font-display text-step-4 text-ink">
            Good to know
          </h2>
          <p className="mt-4 max-w-prose text-step-0 text-ink-2">
            A few things people often ask about Pami and how this site works.
          </p>
        </ScrollReveal>
        <ScrollReveal className="lg:col-span-8" delay={0.1}>
          <Accordion items={FAQS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
