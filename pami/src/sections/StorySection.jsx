import ScrollReveal from '../components/ScrollReveal.jsx';
import Accordion from '../components/Accordion.jsx';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import { STORY } from '../data/story.js';
import { IMAGES } from '../data/images.js';

// Brand story told through the reusable Accordion alongside a standing image.
export default function StorySection() {
  return (
    <section className="bg-paper-2 py-section" aria-labelledby="story-heading">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Our story</p>
          <h2 id="story-heading" className="font-display text-step-4 text-ink">
            Made with restraint, built to last
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg">
            <ResponsiveImage
              image={IMAGES.lifestyleOne}
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-7" delay={0.1}>
          <Accordion items={STORY} />
        </ScrollReveal>
      </div>
    </section>
  );
}
