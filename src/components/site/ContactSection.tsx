import { Phone, MapPin, Mail } from "lucide-react";
import { Reveal, SectionMarker } from "./Primitives";
import { CONTACT } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionMarker n="viii." label="Contact" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05] text-charcoal">
                Let's begin
                <br />
                <em className="text-gold">a conversation.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
                For speaking invitations, media, prayer, or a quiet note — reach out directly by
                phone or email.
              </p>
            </Reveal>
            <div className="mt-12 space-y-6">
              <Reveal delay={0.2}>
                <a href={CONTACT.phoneHref} className="group flex items-center gap-4 text-charcoal">
                  <Phone size={18} className="text-gold" strokeWidth={1.6} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-charcoal/50">Phone</p>
                    <p className="mt-1 text-lg group-hover:text-gold">{CONTACT.phone}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="flex items-center gap-4 text-charcoal">
                  <MapPin size={18} className="text-gold" strokeWidth={1.6} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-charcoal/50">Based in</p>
                    <p className="mt-1 text-lg">{CONTACT.city}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.36}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 text-charcoal"
                >
                  <Mail size={18} className="text-gold" strokeWidth={1.6} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-charcoal/50">Email</p>
                    <p className="mt-1 text-lg group-hover:text-gold">{CONTACT.email}</p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="glass rounded-2xl p-10 md:p-14">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">Invitations</p>
                <p className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-light italic leading-[1.2] text-charcoal">
                  Every invitation is read personally — churches, conferences, women's gatherings,
                  youth and young adult events.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center bg-charcoal px-8 py-4 text-xs uppercase tracking-[0.28em] text-warm-white transition hover:bg-gold hover:text-charcoal"
                  >
                    Email Marsha
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center border border-charcoal/20 px-8 py-4 text-xs uppercase tracking-[0.28em] text-charcoal transition hover:border-gold hover:text-gold"
                  >
                    Call the Ministry
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
