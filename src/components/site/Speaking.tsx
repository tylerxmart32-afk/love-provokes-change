import { Link } from "@tanstack/react-router";
import { Reveal, SectionMarker } from "./Primitives";
import { engagementIcons } from "@/lib/site-data";
import { portraits } from "@/lib/portraits";
import type { SiteContent } from "@/lib/content.functions";
import { Sparkles } from "lucide-react";

export function Speaking({ items }: { items: SiteContent["speaking"] }) {
  return (
    <section className="relative overflow-hidden bg-warm-white py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="vi." label="Speaking" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={portraits.joy}
                  alt="Marsha smiling — vibrant portrait for speaking engagements."
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal/70">
                Marsha brings a rare combination of warmth and rigor to every room — from
                Sunday pulpits to Saturday retreats, from panels to prayer rooms.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05] text-charcoal">
                Invite Marsha
                <br />
                <em className="text-gold">to your gathering.</em>
              </h2>
            </Reveal>
            <ul className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {(items.length
                ? items
                : [
                    { id: "1", type: "Women's Conferences", description: "Keynotes and breakouts.", icon: "flame" },
                    { id: "2", type: "Church Events", description: "Sundays, revivals, special observances.", icon: "church" },
                    { id: "3", type: "Retreats", description: "Day and weekend intensives.", icon: "mountain" },
                    { id: "4", type: "Bible Studies", description: "Warm, accessible teaching.", icon: "book-open" },
                    { id: "5", type: "Leadership", description: "Sessions for pastors and teams.", icon: "compass" },
                    { id: "6", type: "Panel Discussions", description: "Faith, womanhood, healing, hope.", icon: "messages-square" },
                  ]
              ).map((s, i) => {
                const Icon = (s.icon && engagementIcons[s.icon]) || Sparkles;
                return (
                  <Reveal key={s.id} delay={i * 0.05}>
                    <li className="group flex items-center gap-6 py-6 transition-colors hover:text-charcoal">
                      <span className="w-10 font-display text-sm italic text-charcoal/40">
                        0{i + 1}
                      </span>
                      <Icon className="text-gold" size={22} strokeWidth={1.4} />
                      <div className="flex-1">
                        <p className="font-display text-2xl text-charcoal">{s.type}</p>
                        {s.description ? (
                          <p className="mt-1 text-sm text-charcoal/60">{s.description}</p>
                        ) : null}
                      </div>
                      <span className="hidden h-px w-10 bg-charcoal/20 transition-all group-hover:w-20 group-hover:bg-gold md:block" />
                    </li>
                  </Reveal>
                );
              })}
            </ul>
            <Reveal delay={0.4}>
              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-warm-white transition hover:bg-gold hover:text-charcoal"
                >
                  Book Marsha
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}