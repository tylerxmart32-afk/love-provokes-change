import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function client() {
  return createClient<Database>(
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
}

export type SiteContent = {
  book: {
    title: string;
    subtitle: string | null;
    description: string | null;
    why_written: string | null;
    who_for: string | null;
    gains: string | null;
    buy_url: string | null;
    sample_url: string | null;
  } | null;
  testimonials: Array<{
    id: string;
    author: string;
    role: string | null;
    quote: string;
    rating: number;
    avatar_url: string | null;
  }>;
  speaking: Array<{ id: string; type: string; description: string | null; icon: string | null }>;
  events: Array<{ id: string; title: string; event_date: string | null; location: string | null; description: string | null }>;
};

export const getSiteContent = createServerFn({ method: "GET" }).handler(async (): Promise<SiteContent> => {
  const supabase = client();
  const [bookRes, testRes, speakRes, eventsRes] = await Promise.all([
    supabase.from("books").select("title,subtitle,description,why_written,who_for,gains,buy_url,sample_url").eq("published", true).order("order_index", { ascending: true }).limit(1).maybeSingle(),
    supabase.from("testimonials").select("id,author,role,quote,rating,avatar_url").eq("published", true).order("order_index", { ascending: true }),
    supabase.from("speaking_engagements").select("id,type,description,icon").eq("published", true).order("order_index", { ascending: true }),
    supabase.from("events").select("id,title,event_date,location,description").eq("published", true).order("event_date", { ascending: true }),
  ]);

  return {
    book: bookRes.data ?? null,
    testimonials: testRes.data ?? [],
    speaking: speakRes.data ?? [],
    events: eventsRes.data ?? [],
  };
});