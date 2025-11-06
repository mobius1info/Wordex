import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const languageCodes: Record<string, string> = {
  ru: 'ru',
  uk: 'uk',
  en: 'en',
  tr: 'tr',
  zh: 'zh-CN'
};

const allLanguages = ['ru', 'uk', 'en', 'tr', 'zh'];

async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    const sourceLangCode = languageCodes[sourceLang] || sourceLang;
    const targetLangCode = languageCodes[targetLang] || targetLang;
    
    const encodedText = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLangCode}|${targetLangCode}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Translation API error: ${response.statusText}`);
      return text;
    }

    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return data.responseData.translatedText;
    }
    
    return text;
  } catch (error) {
    console.error(`Translation error for ${targetLang}:`, error);
    return text;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get all news items without complete translations
    const { data: newsItems, error: fetchError } = await supabase
      .from('news')
      .select('*')
      .or('title_ru.is.null,title_uk.is.null,title_en.is.null,title_tr.is.null,title_zh.is.null');

    if (fetchError) {
      throw new Error(`Failed to fetch news: ${fetchError.message}`);
    }

    if (!newsItems || newsItems.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No news items need translation', count: 0 }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let translatedCount = 0;

    for (const item of newsItems) {
      const sourceLang = item.language || 'ru';
      const updates: any = {};

      // Translate title
      for (const lang of allLanguages) {
        const titleField = `title_${lang}`;
        if (!item[titleField] || item[titleField] === '') {
          if (lang === sourceLang) {
            updates[titleField] = item.title;
          } else {
            const translated = await translateText(item.title, sourceLang, lang);
            updates[titleField] = translated;
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      }

      // Translate content
      for (const lang of allLanguages) {
        const contentField = `content_${lang}`;
        if (!item[contentField] || item[contentField] === '') {
          if (lang === sourceLang) {
            updates[contentField] = item.content;
          } else {
            const translated = await translateText(item.content, sourceLang, lang);
            updates[contentField] = translated;
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      }

      if (Object.keys(updates).length > 0) {
        const { error: updateError } = await supabase
          .from('news')
          .update(updates)
          .eq('id', item.id);

        if (updateError) {
          console.error(`Failed to update news ${item.id}:`, updateError);
        } else {
          translatedCount++;
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        message: 'Translation completed', 
        totalItems: newsItems.length,
        translatedCount 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});