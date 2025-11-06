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
    if (!text || text.trim() === '') {
      return text;
    }

    const sourceLangCode = languageCodes[sourceLang] || sourceLang;
    const targetLangCode = languageCodes[targetLang] || targetLang;

    if (sourceLangCode === targetLangCode) {
      return text;
    }

    const encodedText = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLangCode}|${targetLangCode}`;

    console.log(`Translating from ${sourceLangCode} to ${targetLangCode}`);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Translation API error: ${response.statusText}`);
      return text;
    }

    const data = await response.json();

    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      console.log(`Translated: ${text.substring(0, 30)}... -> ${data.responseData.translatedText.substring(0, 30)}...`);
      return data.responseData.translatedText;
    }

    console.log('No translation returned, using original');
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

    console.log('Fetching all news items...');

    const { data: newsItems, error: fetchError } = await supabase
      .from('news')
      .select('*')
      .eq('published', true);

    if (fetchError) {
      console.error('Fetch error:', fetchError);
      throw new Error(`Failed to fetch news: ${fetchError.message}`);
    }

    console.log(`Found ${newsItems?.length || 0} news items`);

    if (!newsItems || newsItems.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'No news items found',
          totalItems: 0,
          translatedCount: 0
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let translatedCount = 0;
    let processedCount = 0;

    for (const item of newsItems) {
      processedCount++;
      console.log(`Processing item ${processedCount}/${newsItems.length}: ${item.title?.substring(0, 30)}`);

      const sourceLang = item.language || 'tr';
      const updates: any = {};
      let needsUpdate = false;

      for (const lang of allLanguages) {
        const titleField = `title_${lang}`;
        const contentField = `content_${lang}`;

        if (!item[titleField] || item[titleField] === '' || item[titleField] === item.title) {
          needsUpdate = true;
          if (lang === sourceLang) {
            updates[titleField] = item.title;
          } else {
            const translated = await translateText(item.title, sourceLang, lang);
            updates[titleField] = translated;
            await new Promise(resolve => setTimeout(resolve, 400));
          }
        }

        if (!item[contentField] || item[contentField] === '' || item[contentField] === item.content) {
          needsUpdate = true;
          if (lang === sourceLang) {
            updates[contentField] = item.content;
          } else {
            const translated = await translateText(item.content, sourceLang, lang);
            updates[contentField] = translated;
            await new Promise(resolve => setTimeout(resolve, 400));
          }
        }
      }

      if (needsUpdate && Object.keys(updates).length > 0) {
        console.log(`Updating item ${item.id} with ${Object.keys(updates).length} fields`);
        const { error: updateError } = await supabase
          .from('news')
          .update(updates)
          .eq('id', item.id);

        if (updateError) {
          console.error(`Failed to update news ${item.id}:`, updateError);
        } else {
          translatedCount++;
          console.log(`Successfully updated item ${translatedCount}`);
        }
      } else {
        console.log(`Item ${item.id} already has all translations`);
      }
    }

    const result = {
      success: true,
      message: 'Translation completed',
      totalItems: newsItems.length,
      translatedCount: translatedCount
    };

    console.log('Final result:', result);

    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
        totalItems: 0,
        translatedCount: 0
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});