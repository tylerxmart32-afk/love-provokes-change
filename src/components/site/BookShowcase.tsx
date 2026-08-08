import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionMarker } from "./Primitives";
import type { SiteContent } from "@/lib/content.functions";

export function BookShowcase({ book }: { book: SiteContent["book"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const b = book ?? {
    title: "In It! Over It! Under It!",
    subtitle: "A Poetic Journey Through the Chaos of Love",
    description:
      "A poetic journey through the chaos of love — in it, over it, under it — where the everlasting love of Christ meets us in every layer and finishes the work of transformation He began.",
    why_written:
      "Written from a season where love felt scarce and hope felt distant.",
    who_for:
      "For anyone who has doubted themselves, questioned God, and/or given up on the idea of true and everlasting love.",
    gains: "A softer heart. A steadier hope. A re-introduction to the Father's love.",
    buy_url: null,
    sample_url: null,
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-warm-white py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="ii." label="Featured Book" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-6" style={{ perspective: 1600 }}>
            <motion.div
              style={{ rotateY, y }}
              className="relative mx-auto aspect-[3/4] w-full max-w-md"
            >
              {/* Book */}
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                {/* Shadow */}
                <div
                  aria-hidden
                  className="absolute -inset-x-8 bottom-0 h-10 rounded-[50%] bg-charcoal/30 blur-2xl"
                />
                {/* Cover */}
                <div className="relative h-full w-full overflow-hidden rounded-sm shadow-[0_60px_120px_-40px_rgba(29,29,29,0.55)] [transform:translateZ(20px)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#2a2620] to-[#3a2f1e]" />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(198,163,90,0.55), transparent 55%)",
                    }}
                  />
                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-10 text-warm-white">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.42em] text-gold">
                        A Book by Marsha Holland Kahn
                      </p>
                      <div className="mt-8 h-px w-12 bg-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-4xl italic leading-[0.95] text-warm-white">
                        {b.title}
                      </h3>
                      <p className="mt-6 font-display text-xs uppercase tracking-[0.32em] text-warm-white/70">
                        Jeremiah 31:3
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-6 bg-gold" />
                        <span className="text-[10px] uppercase tracking-[0.42em] text-warm-white/60">
                          Everlasting Love
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-6">
            <Reveal>
              <h2 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-medium leading-[1.05] text-charcoal">
                An <em className="text-gold">everlasting</em> love,
                <br />
                put to paper.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/75">
                {b.description}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                { label: "Why it was written", body: b.why_written },
                { label: "Who it's for", body: b.who_for },
                { label: "What you'll gain", body: b.gains },
              ].map((it, idx) => (
                <Reveal key={it.label} delay={0.15 + idx * 0.08}>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{it.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{it.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.45}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center bg-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-warm-white transition hover:bg-gold hover:text-charcoal"
                >
                  Order Now
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center border border-charcoal/25 px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-charcoal transition hover:border-gold hover:text-gold"
                >
                  Read a Sample
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}