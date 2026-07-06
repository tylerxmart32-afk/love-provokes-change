import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Love Provoking Change" },
      {
        name: "description",
        content:
          "Reach Min. Marsha Holland Kahn and the Love Provoking Change team for speaking invitations, media, and prayer.",
      },
      { property: "og:title", content: "Contact — Love Provoking Change" },
      {
        property: "og:description",
        content: "Speaking invitations, media, prayer, or a quiet note — we read every message.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}