import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionMarker } from "./Primitives";
import type { SiteContent } from "@/lib/content.functions";
import bookCover from "@/assets/book-cover.png.asset.json";

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
      "Written from seasons where love felt scarce, hope felt distant, and a mended heart felt impossible, this book is Marsha's encouragement to you to embrace the journey — no matter where you are on it. It will get better. Your heart will heal.",
    who_for:
      "For anyone who has doubted themselves, questioned God, and/or given up on the idea of true and everlasting love.",
    gains:
      "Reassurance that you are not alone. A new perspective on how true love is defined. Peace for the continued mending of some broken pieces of your heart. A new friend. And a re-introduction to God the Father and his kindness that leads us home.",
    buy_url: null as string | null,
    sample_url: null,
  };

  const AMAZON_URL =
    "https://www.amazon.com/Over-Under-Poetic-Journey-Through/dp/B0GTWFSRTH/";
  const buyUrl = b.buy_url ?? AMAZON_URL;

  return (
    <section ref={ref} className="relative overflow-hidden bg-warm-white py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="ii." label="Featured Book" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-6" style={{ perspective: 1600 }}>
            <motion.div
              style={{ rotateY, y }}
              className="relative mx-auto aspect-[809/1288] w-full max-w-md"
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
                  <img
                    src={bookCover.url}
                    alt={`Cover of ${b.title} — ${b.subtitle ?? "A Poetic Journey Through the Chaos of Love"} by Marsha Holland Kahn`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent" />
                  <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
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
                <a
                  href={buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-warm-white transition hover:bg-gold hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Order Now
                </a>
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