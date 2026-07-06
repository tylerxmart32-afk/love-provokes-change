import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getSiteContent, type SiteContent } from "@/lib/content.functions";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Scripture } from "@/components/site/Scripture";
import { BookShowcase } from "@/components/site/BookShowcase";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Themes } from "@/components/site/Themes";
import { Testimonials } from "@/components/site/Testimonials";
import { Speaking } from "@/components/site/Speaking";
import { Gallery } from "@/components/site/Gallery";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import libraryAsset from "@/assets/marsha-portrait-library.png.asset.json";

const contentQuery = queryOptions<SiteContent>({
  queryKey: ["site-content"],
  queryFn: () => getSiteContent(),
});

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  head: () => ({
    meta: [
      { title: "Love Provoking Change — Min. Marsha Holland Kahn" },
      {
        name: "description",
        content:
          "Christian author, speaker, and founder of Love Provoking Change Outreach. Encouraging hearts, empowering lives, and inspiring lasting change through the love of Christ.",
      },
      {
        property: "og:title",
        content: "Love Provoking Change — Min. Marsha Holland Kahn",
      },
      {
        property: "og:description",
        content:
          "Where faith becomes action, hope becomes healing, and love becomes transformation.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: libraryAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { data } = useSuspenseQuery(contentQuery);
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Scripture />
        <BookShowcase book={data.book} />
        <About />
        <MissionVision />
        <Themes />
        <Testimonials items={data.testimonials} />
        <Speaking items={data.speaking} />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
