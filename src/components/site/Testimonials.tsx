import { Star, Quote } from "lucide-react";
import { Reveal, SectionMarker } from "./Primitives";
import type { SiteContent } from "@/lib/content.functions";
import { portraits } from "@/lib/portraits";

export function Testimonials({ items }: { items: SiteContent["testimonials"] }) {
  const list = items.length ? items : [];
  if (!list.length) return null;
  const marquee = [...list, ...list];

  return (
    <section className="relative overflow-hidden bg-charcoal py-32 text-warm-white md:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sage/25 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="v." label="Testimonials" />
        <Reveal>
          <h2 className="font-display max-w-3xl text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05]">
            Words from those <em className="text-gold">Marsha has loved on paper.</em>
          </h2>
        </Reveal>
      </div>
      <div className="relative mt-20 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 pl-6 md:pl-10">
          {marquee.map((t, i) => (
            <figure
              key={`${t.id}-${i}`}
              className="glass w-[380px] flex-none rounded-2xl border-warm-white/10 p-8 text-warm-white"
              style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
            >
              <Quote className="text-gold" size={28} strokeWidth={1.4} />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg italic leading-relaxed text-warm-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-warm-white/10 pt-4">
                <img
                  src={t.avatar_url || portraits.circle}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-warm-white/20"
                />
                <div>
                  <p className="text-sm">{t.author}</p>
                  {t.role ? (
                    <p className="text-[10px] uppercase tracking-[0.28em] text-warm-white/50">
                      {t.role}
                    </p>
                  ) : null}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}