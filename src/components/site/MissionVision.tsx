import { Reveal } from "./Primitives";

export function MissionVision() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage/30 py-32 md:py-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/40 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.42em] text-charcoal/50">Mission</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light italic leading-[1.15] text-charcoal">
              To encourage, empower, and inspire — through thoughtful and transparent word and
              deed.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="mt-10 inline-block h-px w-16 bg-gold" />
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden bg-cream py-32 md:py-40">
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.42em] text-charcoal/50">Vision</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.1] text-charcoal">
              To be the <em className="text-gold">manifested heart, hands, and feet</em> of God
              the Father in the Earth.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}