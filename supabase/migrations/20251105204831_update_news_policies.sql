/*
  # Update RLS policies for news table
  
  1. Changes
    - Drop existing restrictive policies
    - Add permissive policies that allow anon role to manage news
    - This enables the admin panel to work without Supabase Auth
  
  2. Security
    - Anon users can INSERT, UPDATE, DELETE news (admin panel)
    - Public can still read published news
    - In production, you should implement proper authentication
  
  3. Important Notes
    - This is a simplified approach for demo purposes
    - For production, implement Supabase Auth with proper user roles
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can create news" ON news;
DROP POLICY IF EXISTS "Authenticated users can update news" ON news;
DROP POLICY IF EXISTS "Authenticated users can delete news" ON news;

-- Allow anon users to insert news
CREATE POLICY "Allow anon to create news"
  ON news
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon users to update news
CREATE POLICY "Allow anon to update news"
  ON news
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anon users to delete news
CREATE POLICY "Allow anon to delete news"
  ON news
  FOR DELETE
  TO anon
  USING (true);