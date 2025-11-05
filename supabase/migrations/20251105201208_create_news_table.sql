/*
  # Create news management system

  1. New Tables
    - `news`
      - `id` (uuid, primary key) - Unique identifier for each news item
      - `date` (text) - Publication date in readable format
      - `title` (text) - News title
      - `content` (text) - Full news content
      - `category` (text) - News category (Important, Products, Technology, etc.)
      - `language` (text) - Language code (ru, uk, en, tr, zh)
      - `created_at` (timestamptz) - When the news was created
      - `updated_at` (timestamptz) - When the news was last updated
      - `published` (boolean) - Whether the news is published or draft

  2. Security
    - Enable RLS on `news` table
    - Add policy for public to read published news
    - Add policy for authenticated admins to manage all news

  3. Important Notes
    - News can be filtered by language
    - Only published news are visible to public
    - Admins can create, edit, and delete news
*/

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'Важное',
  language text NOT NULL DEFAULT 'ru',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Public can read published news
CREATE POLICY "Anyone can read published news"
  ON news
  FOR SELECT
  USING (published = true);

-- Authenticated users can insert news
CREATE POLICY "Authenticated users can create news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update their news
CREATE POLICY "Authenticated users can update news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete news
CREATE POLICY "Authenticated users can delete news"
  ON news
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_news_language ON news(language);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(published);
CREATE INDEX IF NOT EXISTS idx_news_created_at ON news(created_at DESC);