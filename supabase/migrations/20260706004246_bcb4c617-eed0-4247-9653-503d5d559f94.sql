
-- Books
CREATE TABLE public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  why_written TEXT,
  who_for TEXT,
  gains TEXT,
  cover_url TEXT,
  buy_url TEXT,
  sample_url TEXT,
  order_index INT DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.books TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.books TO authenticated;
GRANT ALL ON public.books TO service_role;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published books" ON public.books FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage books" ON public.books FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Testimonials
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT NOT NULL,
  role TEXT,
  quote TEXT NOT NULL,
  rating INT NOT NULL DEFAULT 5,
  avatar_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  order_index INT DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published testimonials" ON public.testimonials FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Gallery
CREATE TABLE public.gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  tags TEXT[],
  order_index INT DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery_items TO authenticated;
GRANT ALL ON public.gallery_items TO service_role;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published gallery" ON public.gallery_items FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage gallery" ON public.gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Events
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  event_date DATE,
  location TEXT,
  description TEXT,
  cta_url TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published events" ON public.events FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage events" ON public.events FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Speaking engagements (types)
CREATE TABLE public.speaking_engagements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  order_index INT DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.speaking_engagements TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.speaking_engagements TO authenticated;
GRANT ALL ON public.speaking_engagements TO service_role;
ALTER TABLE public.speaking_engagements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read speaking types" ON public.speaking_engagements FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage speaking types" ON public.speaking_engagements FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Blog posts
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  body_md TEXT,
  cover_url TEXT,
  published_at TIMESTAMPTZ,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published blog" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage blog" ON public.blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Devotionals
CREATE TABLE public.devotionals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  scripture TEXT,
  body_md TEXT,
  published_at TIMESTAMPTZ,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.devotionals TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.devotionals TO authenticated;
GRANT ALL ON public.devotionals TO service_role;
ALTER TABLE public.devotionals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published devotionals" ON public.devotionals FOR SELECT USING (published = true);
CREATE POLICY "Authenticated can manage devotionals" ON public.devotionals FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Contact submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can read submissions" ON public.contact_submissions FOR SELECT TO authenticated USING (true);
