/*
  # Add translation fields to news table

  1. Changes
    - Add `title_ru`, `title_uk`, `title_en`, `title_tr`, `title_zh` columns for translated titles
    - Add `content_ru`, `content_uk`, `content_en`, `content_tr`, `content_zh` columns for translated content
    - These fields will store automatic translations of the news
  
  2. Notes
    - Original `title` and `content` fields remain as the source language
    - Translation fields allow null values (filled when auto-translate is triggered)
*/

DO $$
BEGIN
  -- Add title translation fields
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'news' AND column_name = 'title_ru'
  ) THEN
    ALTER TABLE news ADD COLUMN title_ru text;
    ALTER TABLE news ADD COLUMN title_uk text;
    ALTER TABLE news ADD COLUMN title_en text;
    ALTER TABLE news ADD COLUMN title_tr text;
    ALTER TABLE news ADD COLUMN title_zh text;
  END IF;

  -- Add content translation fields
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'news' AND column_name = 'content_ru'
  ) THEN
    ALTER TABLE news ADD COLUMN content_ru text;
    ALTER TABLE news ADD COLUMN content_uk text;
    ALTER TABLE news ADD COLUMN content_en text;
    ALTER TABLE news ADD COLUMN content_tr text;
    ALTER TABLE news ADD COLUMN content_zh text;
  END IF;
END $$;