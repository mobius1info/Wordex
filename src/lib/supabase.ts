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
  publish_ru?: boolean;
  publish_uk?: boolean;
  publish_en?: boolean;
  publish_tr?: boolean;
  publish_zh?: boolean;
  title_ru?: string;
  title_uk?: string;
  title_en?: string;
  title_tr?: string;
  title_zh?: string;
  content_ru?: string;
  content_uk?: string;
  content_en?: string;
  content_tr?: string;
  content_zh?: string;
  created_at?: string;
  updated_at?: string;
}
