import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Footer } from "@/components/site/Footer";
import libraryAsset from "@/assets/marsha-portrait-library.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marsha — Love Provoking Change" },
      {
        name: "description",
        content:
          "Min. Marsha Holland Kahn, M.Div. — founder of Love Provoking Change Outreach, Christian author and speaker based in Durham, North Carolina.",
      },
      { property: "og:title", content: "About Marsha — Love Provoking Change" },
      {
        property: "og:description",
        content:
          "The story, mission, and vision behind Love Provoking Change Outreach.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: libraryAsset.url },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="bg-warm-white pt-24">
        <About />
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}