import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/book", label: "The Book" },
  { to: "/about", label: "About" },
  { to: "/speaking", label: "Speaking" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-charcoal/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className={`h-2 w-2 rounded-full transition-colors ${scrolled ? "bg-gold" : "bg-warm-white"}`} />
          <span
            className={`font-display text-lg tracking-tight transition-colors ${
              scrolled ? "text-charcoal" : "text-warm-white"
            }`}
          >
            Love <span className="italic">Provoking</span> Change
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`group relative text-xs uppercase tracking-[0.28em] transition-colors ${
                scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-warm-white/80 hover:text-warm-white"
              }`}
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-charcoal" : "text-warm-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="glass border-t border-charcoal/5 md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-xs uppercase tracking-[0.28em] text-charcoal/70"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}