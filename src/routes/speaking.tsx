import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getSiteContent, type SiteContent } from "@/lib/content.functions";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Speaking } from "@/components/site/Speaking";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import joyAsset from "@/assets/marsha-portrait-joy.png.asset.json";

const q = queryOptions<SiteContent>({
  queryKey: ["site-content"],
  queryFn: () => getSiteContent(),
});

export const Route = createFileRoute("/speaking")({
  loader: ({ context }) => context.queryClient.ensureQueryData(q),
  head: () => ({
    meta: [
      { title: "Speaking — Marsha Holland Kahn" },
      {
        name: "description",
        content:
          "Invite Min. Marsha Holland Kahn to speak at your women's conference, church event, retreat, Bible study, leadership session, or panel.",
      },
      { property: "og:title", content: "Speaking — Marsha Holland Kahn" },
      {
        property: "og:description",
        content:
          "Keynotes, retreats, revivals, and panels — grounded in scripture and delivered with warmth.",
      },
      { property: "og:url", content: "/speaking" },
      { property: "og:image", content: joyAsset.url },
    ],
    links: [{ rel: "canonical", href: "/speaking" }],
  }),
  component: SpeakingPage,
});

function SpeakingPage() {
  const { data } = useSuspenseQuery(q);
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="pt-24">
        <Speaking items={data.speaking} />
        <Testimonials items={data.testimonials} />
      </main>
      <Footer />
    </>
  );
}