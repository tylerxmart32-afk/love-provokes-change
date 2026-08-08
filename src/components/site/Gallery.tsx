import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionMarker } from "./Primitives";
import { portraits } from "@/lib/portraits";

type Item = { src: string; alt: string; span?: "row" | "col" | "both"; pos?: string };

const items: Item[] = [
  { src: portraits.library, alt: "Marsha in a library.", span: "col", pos: "50% 30%" },
  { src: portraits.joy, alt: "Marsha smiling.", pos: "50% 20%" },
  { src: portraits.zebra, alt: "Marsha beside a zebra painting.", span: "row" },
  { src: portraits.circle, alt: "Marsha portrait." },
  { src: portraits.library, alt: "Marsha in a library — detail.", pos: "60% 40%" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative overflow-hidden bg-beige py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="vii." label="Gallery" />
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05] text-charcoal">
              Moments from
              <br />
              <em className="text-gold">the journey.</em>
            </h2>
          </Reveal>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={
                it.span === "col"
                  ? "row-span-2"
                  : it.span === "row"
                    ? "col-span-2"
                    : it.span === "both"
                      ? "col-span-2 row-span-2"
                      : undefined
              }
            >
              <button
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden rounded-sm"
                aria-label={`Open image: ${it.alt}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{ objectPosition: it.pos ?? "center" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-6"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 text-warm-white"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={items[open].src}
              alt={items[open].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}