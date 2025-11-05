import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

export interface NewsItem {
  id?: string;
  date: string;
  title: string;
  content: string;
  category: string;
  language: string;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}
