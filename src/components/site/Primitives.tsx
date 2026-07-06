import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { type ReactNode, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-pre"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

export function Parallax({
  children,
  strength = 60,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function SectionMarker({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-charcoal/60">
      <span className="font-display text-lg italic">{n}</span>
      <span className="gold-rule" />
      <span className="text-xs uppercase tracking-[0.32em]">{label}</span>
    </div>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`glass rounded-2xl p-8 shadow-[0_20px_60px_-30px_rgba(29,29,29,0.35)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function GoldButton({
  as = "button",
  href,
  onClick,
  type,
  children,
  variant = "solid",
  className,
  disabled,
}: {
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  disabled?: boolean;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm uppercase tracking-[0.22em] transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "solid"
      ? "bg-charcoal text-warm-white hover:bg-charcoal/90"
      : "border border-charcoal/25 text-charcoal hover:border-gold hover:text-charcoal";
  const Cmp = as === "a" ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled as never}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gold/20 transition-transform duration-700 group-hover:scale-x-100"
      />
    </Cmp>
  );
}

export function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-[24rem] w-[24rem] rounded-full bg-sage/25 blur-[120px]" />
    </div>
  );
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}