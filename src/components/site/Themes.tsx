import { Reveal, SectionMarker } from "./Primitives";
import { bookThemes } from "@/lib/site-data";

export function Themes() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="iv." label="Book Themes" />
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05] text-charcoal">
              Eight quiet themes.
              <br />
              <em className="text-gold">One everlasting love.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="text-lg leading-relaxed text-charcoal/70">
              The threads that run through every page — small enough to hold, big enough to
              change everything.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookThemes.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-charcoal/8 bg-white/60 p-8 transition-all duration-700 hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all duration-700 group-hover:bg-gold/20"
                />
                <div className="relative">
                  <t.Icon className="text-gold" size={26} strokeWidth={1.4} />
                  <h3 className="font-display mt-8 text-2xl font-medium text-charcoal">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{t.blurb}</p>
                </div>
                <div className="relative mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-charcoal/40">
                  <span>0{i + 1}</span>
                  <span className="h-px w-8 bg-gold/60 transition-all group-hover:w-14" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}