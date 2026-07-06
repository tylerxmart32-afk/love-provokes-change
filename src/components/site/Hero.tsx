import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { heroSlides } from "@/lib/portraits";
import { BRAND } from "@/lib/site-data";

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-charcoal text-warm-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[i].src}
            alt={heroSlides[i].alt}
            fetchPriority={i === 0 ? "high" : "auto"}
            className="animate-kenburns h-full w-full object-cover"
            style={{ objectPosition: heroSlides[i].position }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/60 to-charcoal"
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.42em] text-warm-white/70"
        >
          <span className="h-px w-10 bg-gold" />
          Christian author · speaker · minister
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-5xl text-balance text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.95]"
        >
          Love <em className="not-italic text-gold">Provoking</em>
          <br />
          <span className="italic">Change</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.65 }}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-warm-white/85 md:text-xl"
        >
          Where faith becomes action, hope becomes healing, and love becomes transformation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/book"
            className="group relative inline-flex items-center justify-center gap-2 bg-warm-white px-8 py-4 text-xs uppercase tracking-[0.28em] text-charcoal transition-all hover:bg-gold"
          >
            Buy the Book
          </Link>
          <Link
            to="/speaking"
            className="group relative inline-flex items-center justify-center gap-2 border border-warm-white/40 px-8 py-4 text-xs uppercase tracking-[0.28em] text-warm-white transition-all hover:border-gold hover:text-gold"
          >
            Invite Marsha to Speak
          </Link>
        </motion.div>
        <span className="sr-only">{BRAND.tagline}</span>

        <div className="mt-16 flex items-center justify-between text-warm-white/60">
          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-px w-10 transition-all ${idx === i ? "bg-gold" : "bg-warm-white/30"}`}
              />
            ))}
          </div>
          <a href="#scripture" className="group hidden items-center gap-3 text-[10px] uppercase tracking-[0.42em] md:flex">
            Scroll
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}