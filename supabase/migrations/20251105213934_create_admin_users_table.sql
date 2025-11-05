/*
  # Create admin users table for secure authentication

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key) - Unique identifier
      - `username` (text, unique) - Admin username
      - `password_hash` (text) - Bcrypt hashed password
      - `created_at` (timestamptz) - When admin was created
      - `last_login` (timestamptz) - Last login timestamp

  2. Security
    - Enable RLS on `admin_users` table
    - No public access - only Edge Functions can access this table
    - Service role is required to read/write

  3. Important Notes
    - Passwords are hashed using bcrypt
    - Never expose password hashes to the client
    - Authentication happens server-side via Edge Functions
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- No policies - only service role can access
-- This prevents client-side access entirely

-- Create index for faster username lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Insert default admin user (password: admin123)
-- Hash generated with bcrypt, 10 rounds
INSERT INTO admin_users (username, password_hash)
VALUES ('admin', '$2a$10$rVZvXqnJVwH0VLNuGQqZN.Xx7XqGZF5jJ5BH4lNWZqK8qh6KN1YVe')
ON CONFLICT (username) DO NOTHING;