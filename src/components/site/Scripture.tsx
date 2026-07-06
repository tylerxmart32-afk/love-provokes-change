import { SCRIPTURE } from "@/lib/site-data";
import { WordReveal, Reveal } from "./Primitives";

export function Scripture() {
  return (
    <section id="scripture" className="relative overflow-hidden bg-cream py-32 md:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Scripture</p>
            <div className="mt-6 flex items-center gap-4">
              <span className="gold-rule" />
              <span className="font-display text-2xl italic text-charcoal/60">i.</span>
            </div>
          </Reveal>
        </div>
        <blockquote className="md:col-span-8">
          <p className="font-display text-[clamp(2rem,4.8vw,4.25rem)] font-light italic leading-[1.15] text-charcoal">
            <WordReveal text={`"${SCRIPTURE.text}"`} />
          </p>
          <Reveal delay={0.6}>
            <footer className="mt-10 flex items-center gap-4 text-charcoal/60">
              <span className="gold-rule" />
              <cite className="not-italic text-sm uppercase tracking-[0.3em]">{SCRIPTURE.ref}</cite>
            </footer>
          </Reveal>
        </blockquote>
      </div>
    </section>
  );
}