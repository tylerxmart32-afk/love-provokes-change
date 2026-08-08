import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionMarker } from "./Primitives";
import { portraits } from "@/lib/portraits";
import praiseFlyer from "@/assets/journey-praise-flyer.jpeg.asset.json";
import worshipMic from "@/assets/journey-worship-mic.jpeg.asset.json";
import gradCap from "@/assets/journey-graduation-cap.jpg.asset.json";
import gradCelebrate from "@/assets/journey-graduation-celebrate.jpg.asset.json";
import necklace from "@/assets/journey-marsha-necklace.jpg.asset.json";
import preaching from "@/assets/journey-preaching-pulpit.jpeg.asset.json";
import praiseHands from "@/assets/journey-praise-hands.jpeg.asset.json";
import studioBow from "@/assets/studio-bow.jpg.asset.json";
import studioChair from "@/assets/studio-chair.jpg.asset.json";
import studioSmile from "@/assets/studio-smile.jpg.asset.json";
import studioColorUp from "@/assets/studio-color-look-up.jpg.asset.json";
import studioColorPortrait from "@/assets/studio-color-portrait.jpg.asset.json";
import studioArmsOpen from "@/assets/studio-arms-open.jpg.asset.json";
import pianoService from "@/assets/ministry-piano-service.jpg.asset.json";
import speakerSlide from "@/assets/ministry-speaker-slide.jpg.asset.json";
import flyerYouth from "@/assets/flyer-youth-weekend.jpg.asset.json";
import flyerFridayNight from "@/assets/flyer-friday-night-live.jpg.asset.json";
import flyerFaithTabernacle from "@/assets/flyer-faith-tabernacle.jpeg.asset.json";

type Item = { src: string; alt: string; span?: "row" | "col" | "both"; pos?: string };

const items: Item[] = [
  { src: portraits.library, alt: "Marsha in a library.", span: "col", pos: "50% 30%" },
  { src: portraits.joy, alt: "Marsha smiling.", pos: "50% 20%" },
  { src: portraits.zebra, alt: "Marsha beside a zebra painting.", span: "row" },
  { src: portraits.circle, alt: "Marsha portrait." },
  {
    src: preaching.url,
    alt: "Marsha preaching from the pulpit at Redeeming Life Full Gospel Ministries.",
    span: "col",
    pos: "50% 30%",
  },
  {
    src: praiseHands.url,
    alt: "Marsha lifting a hand in worship beneath the Redeeming Life Full Gospel Ministries sign.",
    span: "row",
    pos: "60% 60%",
  },
  { src: worshipMic.url, alt: "Marsha leading worship with a microphone at a women's gathering.", pos: "50% 35%" },
  {
    src: gradCelebrate.url,
    alt: "Marsha celebrating with arms raised in cap and gown at her seminary graduation.",
    span: "row",
    pos: "50% 30%",
  },
  { src: gradCap.url, alt: "Marsha smiling in her graduation cap and tassel.", pos: "50% 40%" },
  { src: necklace.url, alt: "Marsha smiling in sunglasses, wearing her name necklace.", pos: "50% 45%" },
  {
    src: praiseFlyer.url,
    alt: "Event flyer announcing Min. Marsha Holland Kahn of Love Provoking Change Outreach Ministry as guest speaker.",
    span: "col",
    pos: "50% 45%",
  },
  {
    src: studioSmile.url,
    alt: "Studio portrait of Marsha resting her chin on her hand, smiling.",
    span: "row",
    pos: "50% 40%",
  },
  { src: studioBow.url, alt: "Marsha in all black, leaning forward with a warm smile in the studio.", pos: "50% 40%" },
  { src: studioChair.url, alt: "Marsha seated in a black striped armchair in the studio.", span: "col", pos: "50% 40%" },
  {
    src: studioColorPortrait.url,
    alt: "Studio portrait of Marsha in a bright paint-splatter top.",
    span: "row",
    pos: "50% 35%",
  },
  { src: studioColorUp.url, alt: "Marsha looking upward in a vivid paint-splatter top.", pos: "50% 35%" },
  {
    src: studioArmsOpen.url,
    alt: "Marsha with both arms raised in joy, wearing a denim jacket and olive skirt.",
    span: "col",
    pos: "50% 35%",
  },
  { src: pianoService.url, alt: "Marsha seated during a worship service beside the piano and keyboard.", pos: "50% 45%" },
  {
    src: speakerSlide.url,
    alt: "Marsha preaching beside a screen announcing her message, 'Don't Despise it Eat it Up.'",
    span: "row",
    pos: "50% 45%",
  },
  { src: flyerYouth.url, alt: "Flyer for GGBC Youth Weekend 2014 featuring Minister Marsha Holland.", pos: "50% 45%" },
  {
    src: flyerFridayNight.url,
    alt: "Friday Night Live flyer from New Holy Cross Church with guest preacher Minister Marsha Holland.",
    pos: "50% 40%",
  },
  {
    src: flyerFaithTabernacle.url,
    alt: "Faith Tabernacle Holy Church service flyer with guest worship leader Ms. Marsha Holland.",
    pos: "50% 40%",
  },
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