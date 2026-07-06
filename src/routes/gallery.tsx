import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Love Provoking Change" },
      {
        name: "description",
        content:
          "Photographs from the ministry, speaking engagements, and daily life of Min. Marsha Holland Kahn.",
      },
      { property: "og:title", content: "Gallery — Love Provoking Change" },
      { property: "og:description", content: "Moments from the journey." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="pt-24">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}