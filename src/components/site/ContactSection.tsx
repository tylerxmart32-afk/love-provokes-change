import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { Phone, MapPin, Mail } from "lucide-react";
import { Reveal, SectionMarker } from "./Primitives";
import { CONTACT } from "@/lib/site-data";
import { submitContact } from "@/lib/contact.functions";

const Schema = z.object({
  name: z.string().trim().min(1, "Please share your name.").max(120),
  email: z.string().trim().email("A valid email helps us respond.").max(200),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10, "Tell us a little more.").max(4000),
});
type FormValues = z.infer<typeof Schema>;

export function ContactSection() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    setErrMsg(null);
    try {
      await submit({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          organization: values.organization || "",
          message: values.message,
        },
      });
      setStatus("ok");
      reset();
    } catch (e) {
      setStatus("err");
      setErrMsg(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

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
                For speaking invitations, media, prayer, or a quiet note — we read every
                message.
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
                <div className="flex items-center gap-4 text-charcoal">
                  <Mail size={18} className="text-gold" strokeWidth={1.6} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-charcoal/50">Email</p>
                    <p className="mt-1 text-lg">{CONTACT.email}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass rounded-2xl p-8 md:p-10"
                noValidate
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} className={inputCls} autoComplete="name" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" className={inputCls} autoComplete="email" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className={inputCls} autoComplete="tel" />
                  </Field>
                  <Field label="Organization" error={errors.organization?.message}>
                    <input {...register("organization")} className={inputCls} autoComplete="organization" />
                  </Field>
                </div>
                <div className="mt-6">
                  <Field label="Message" error={errors.message?.message}>
                    <textarea {...register("message")} rows={5} className={`${inputCls} resize-none`} />
                  </Field>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-charcoal/50">
                    {status === "ok"
                      ? "Thank you — your message has been received."
                      : status === "err"
                        ? errMsg
                        : "We reply within a few business days."}
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center bg-charcoal px-8 py-4 text-xs uppercase tracking-[0.28em] text-warm-white transition hover:bg-gold hover:text-charcoal disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "peer w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal placeholder:text-transparent focus:border-gold focus:outline-none focus:ring-0";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.32em] text-charcoal/60">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}