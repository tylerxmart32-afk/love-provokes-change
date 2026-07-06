import { Reveal, SectionMarker } from "./Primitives";
import { portraits } from "@/lib/portraits";

export function About() {
  return (
    <section className="relative overflow-hidden bg-beige py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="iii." label="About Marsha" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={portraits.library}
                  alt="Portrait of Min. Marsha Holland Kahn seated in a library."
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex items-center gap-4 text-charcoal/60">
                <img src={portraits.circle} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover ring-1 ring-charcoal/10" />
                <p className="text-xs uppercase tracking-[0.28em]">Durham, North Carolina</p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.02] text-charcoal">
                Min. Marsha
                <br />
                <em className="text-gold">Holland Kahn,</em>
                <span className="text-charcoal/60"> M.Div.</span>
              </h2>
            </Reveal>
            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal/75">
              <Reveal delay={0.1}>
                <p>
                  Marsha is a minister, author, and founder of Love Provoking Change Outreach —
                  a ministry born from the conviction that God's love is not a distant idea, but
                  the most practical, transformative force we will ever encounter.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  She writes and teaches with the tenderness of someone who has needed the words
                  she now offers. Her ministry is quiet, courageous, and unmistakably rooted in
                  the Word — meeting readers, women, and leaders in the places where hope has
                  gone thin.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  From pulpits and retreat halls to living rooms and small kitchen tables, her
                  message is the same: the Father has loved you with an everlasting love, and He
                  is still, at this very moment, continuing His faithfulness to you.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {[
                  { k: "Founder", v: "Love Provoking Change Outreach" },
                  { k: "Education", v: "Master of Divinity" },
                  { k: "Base", v: "Durham, NC" },
                ].map((f) => (
                  <div key={f.k}>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{f.k}</p>
                    <p className="mt-2 text-sm text-charcoal/80">{f.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}