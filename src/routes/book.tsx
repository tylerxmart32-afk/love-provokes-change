import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getSiteContent, type SiteContent } from "@/lib/content.functions";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { BookShowcase } from "@/components/site/BookShowcase";
import { Themes } from "@/components/site/Themes";
import { Scripture } from "@/components/site/Scripture";
import { Footer } from "@/components/site/Footer";

const q = queryOptions<SiteContent>({
  queryKey: ["site-content"],
  queryFn: () => getSiteContent(),
});

export const Route = createFileRoute("/book")({
  loader: ({ context }) => context.queryClient.ensureQueryData(q),
  head: () => ({
    meta: [
      { title: "The Book — Love Provoking Change" },
      {
        name: "description",
        content:
          "Love Provoking Change — the debut book from Min. Marsha Holland Kahn on the everlasting love of Christ and the tender, patient work of transformation.",
      },
      { property: "og:title", content: "Love Provoking Change — The Book" },
      {
        property: "og:description",
        content:
          "An everlasting love, put to paper. A tender, unflinching call to let Christ finish what He began.",
      },
      { property: "og:url", content: "/book" },
      { property: "og:type", content: "book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Love Provoking Change",
          author: { "@type": "Person", name: "Marsha Holland Kahn" },
          inLanguage: "en",
          bookFormat: "https://schema.org/EBook",
        }),
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { data } = useSuspenseQuery(q);
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="pt-24">
        <BookShowcase book={data.book} />
        <Themes />
        <Scripture />
      </main>
      <Footer />
    </>
  );
}