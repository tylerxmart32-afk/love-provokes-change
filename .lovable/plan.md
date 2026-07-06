
# Love Provoking Change — Website Plan

An Awwwards-caliber editorial site for Min. Marsha Holland Kahn: elegant serif display type, cinematic motion, generous whitespace, and Marsha's four portraits placed with intention. Built on TanStack Start with Lovable Cloud powering the CMS.

## Visual system

- **Palette**: Warm White `#FAF8F4`, Cream `#F5F1EA`, Light Beige `#ECE7DD`, Soft Sage `#A8B5A2`, Gold `#C6A35A`, Deep Charcoal `#1D1D1D`.
- **Type**: Fraunces (display serif, similar to Canela/Playfair, italic swash for accents) + Inter (body). Both self-hosted via `@fontsource`.
- **Motion**: Framer Motion for scroll reveals, parallax, staggered text; Lenis smooth scroll; slow ken-burns zoom on hero; scroll-linked rotation on the book mockup; blurred gold/sage gradient orbs behind key sections; glass panels for CTAs and testimonial cards.
- **Layout**: Editorial magazine grid, oversized numerals as section markers (I. II. III. …), generous vertical rhythm, mobile-first.

## Portrait placement (four uploads)

- Black-outfit library portrait → About Marsha (large editorial portrait, staggered captions).
- Colorful smiling portrait → Speaking section (energy, joy, audience-facing).
- Zebra painting portrait → Gallery lead image + hero rotation.
- Circular colorful portrait → Testimonials avatar / small About sidebar chip.
- Hero uses a slow-crossfading slideshow across all four with cinematic zoom and dark gradient overlay for legibility.

## Sections (single-page, one route per shareable section)

1. **Nav** — thin, transparent, gold underline on hover, glass on scroll.
2. **Hero** — fullscreen slideshow of the four portraits, cinematic zoom + parallax overlay, headline "Love Provoking Change", subheadline, "Buy the Book" and "Invite Marsha to Speak" CTAs, animated scroll indicator.
3. **Scripture** — Jeremiah 31:3 (NASB) in oversized italic Fraunces, word-by-word fade-reveal, sage/gold ornament.
4. **Featured Book** — Apple-launch feel. 3D CSS book mockup (front cover + spine + shadow) that rotates on scroll. "Love Provoking Change" title, description, why/who/gains three-column callouts, "Order Now" + "Read Sample" CTAs.
5. **About Marsha** — split editorial: large black-portrait on one side, staggered paragraphs on the other, name/credential/location block, timeline chips.
6. **Mission** — full-width sage-tinted band, oversized centered serif.
7. **Vision** — full-width cream band, oversized centered serif with gold accent rule.
8. **Book Themes** — 8 glass cards on cream (Faith, Healing, Purpose, Forgiveness, Hope, Transformation, Grace, Identity) with Lucide icons in gold, hover lift + gradient sheen.
9. **Testimonials** — auto-scrolling marquee of glass cards with large gold quote marks, 5-star gold ratings, circular avatar for one card using the circular portrait.
10. **Speaking** — colorful portrait on the left, six engagement types on the right (Women's Conferences, Church Events, Retreats, Bible Studies, Leadership, Panel Discussions), "Book Marsha" CTA.
11. **Gallery** — masonry grid with the four portraits + generated supporting imagery, hover zoom, lightbox modal, slow reveal on scroll.
12. **Contact** — two-column: contact form (Name, Email, Phone, Organization, Message) with inline validation, right-side card with phone `(609) 922-4957`, Durham NC, socials.
13. **Footer** — minimal, Jeremiah 31:3 quote, social icons, copyright, gold hairline.

Content-heavy sections (About, Book, Speaking, Contact) also get dedicated routes (`/about`, `/book`, `/speaking`, `/contact`) with unique `head()` metadata for SEO and shareability. Home aggregates all sections for the cinematic scroll experience.

## Backend & CMS (Lovable Cloud)

Enable Lovable Cloud, then create CMS-editable tables with RLS + `TO anon` SELECT policies for public reads and authenticated write policies for the admin:

- `books` (title, subtitle, description, why_written, who_for, gains, cover_url, buy_url, sample_url, published)
- `testimonials` (author, role, quote, rating, avatar_url, featured, published)
- `gallery_items` (image_url, caption, tags, order_index, published)
- `events` (title, date, location, description, cta_url, published)
- `speaking_engagements` (type, description, order_index)
- `blog_posts` (slug, title, excerpt, body_md, cover_url, published_at, published)
- `devotionals` (slug, title, scripture, body_md, published_at, published)
- `contact_submissions` (name, email, phone, organization, message, created_at) — anon insert, authenticated select.

Public pages fetch through a server publishable client (anon key + narrow public SELECT policies), keeping loaders SSR-safe. Contact form posts through a `createServerFn` that validates with Zod and inserts into `contact_submissions`.

Draft placeholder testimonials, speaking types, gallery captions, and book copy are seeded via a migration so the site looks complete on first load; Marsha edits later through a simple `/admin` route gated by `_authenticated/`.

## SEO & performance

- Per-route `head()`: unique title, description, og:title/description, og:url, canonical, og:type. Home og:image = generated hero composite; About og:image = black portrait; Book og:image = book mockup render.
- JSON-LD: `Person` (Marsha), `Book` (Love Provoking Change), `Organization` (Love Provoking Change Outreach), `Article` on blog posts.
- Keywords baked in: Christian Author, Christian Speaker, Women's Ministry, Inspirational Book, Faith-Based Encouragement, Love Provoking Change, Marsha Holland Kahn.
- Lovable Assets CDN for all portraits + generated imagery; `loading="lazy"` below the fold; `fetchpriority="high"` preload on the LCP hero image.
- Semantic landmarks, single `<h1>`, alt text everywhere, keyboard-navigable, focus-visible states, `prefers-reduced-motion` respected on all motion.

## Technical details

- Packages: `bun add framer-motion lenis lucide-react @fontsource/fraunces @fontsource/inter zod react-hook-form @hookform/resolvers`.
- New routes: `src/routes/index.tsx` (rebuilt), `about.tsx`, `book.tsx`, `speaking.tsx`, `contact.tsx`, `gallery.tsx`, plus `_authenticated/admin.tsx` for CMS editing.
- Shared components in `src/components/site/`: `Nav`, `Hero`, `Scripture`, `BookShowcase`, `About`, `Mission`, `Vision`, `Themes`, `Testimonials`, `Speaking`, `Gallery`, `Contact`, `Footer`, plus primitives `Reveal`, `Parallax`, `GlassCard`, `SectionMarker`.
- Portraits uploaded to Lovable CDN via `lovable-assets create` and referenced through `.asset.json` pointers.
- Root `__root.tsx`: update title/description, add global font imports, mount Lenis, register `onAuthStateChange` for admin.

## Out of scope for v1

- Payments/checkout for the book (external buy link only).
- Blog/devotional editor rich text — v1 uses markdown textarea.
- Realtime notifications.
