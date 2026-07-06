import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Please share your name.").max(120),
  email: z.string().trim().email("A valid email helps us respond.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more.").max(4000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      organization: data.organization || null,
      message: data.message,
    });
    if (error) throw new Error("We couldn't send your message. Please try again.");
    return { ok: true as const };
  });