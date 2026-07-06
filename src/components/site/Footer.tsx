import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { SCRIPTURE, BRAND, CONTACT } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-charcoal py-20 text-warm-white/70">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-2xl italic leading-[1.35] text-warm-white/90 md:text-3xl">
              &ldquo;{SCRIPTURE.text}&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.32em] text-gold">{SCRIPTURE.ref}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-warm-white/40">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/book" className="hover:text-gold">The Book</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/speaking" className="hover:text-gold">Speaking</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-warm-white/40">Reach</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phone}</a></li>
              <li>{CONTACT.city}</li>
            </ul>
            <div className="mt-6 flex gap-4 text-warm-white/60">
              <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gold"><Youtube size={18} /></a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-gold"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-warm-white/10 pt-8 text-xs text-warm-white/45">
          <p>
            © {new Date().getFullYear()} {BRAND.name} Outreach · Founded by {BRAND.founder}
          </p>
          <p className="uppercase tracking-[0.32em]">Encouraging · Empowering · Inspiring</p>
        </div>
      </div>
    </footer>
  );
}