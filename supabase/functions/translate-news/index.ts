import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TranslateRequest {
  text: string;
  sourceLang: string;
  targetLangs: string[];
}

interface TranslateResponse {
  translations: Record<string, string>;
}

const languageCodes: Record<string, string> = {
  ru: 'ru',
  uk: 'uk',
  en: 'en',
  tr: 'tr',
  zh: 'zh-CN'
};

async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    const sourceLangCode = languageCodes[sourceLang] || sourceLang;
    const targetLangCode = languageCodes[targetLang] || targetLang;
    
    // Use MyMemory Translation API (free, no API key required)
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
    const { text, sourceLang, targetLangs }: TranslateRequest = await req.json();

    if (!text || !sourceLang || !targetLangs || targetLangs.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const translations: Record<string, string> = {};
    translations[sourceLang] = text;

    // Translate sequentially to avoid rate limiting
    for (const targetLang of targetLangs) {
      if (targetLang !== sourceLang) {
        translations[targetLang] = await translateText(text, sourceLang, targetLang);
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    const response: TranslateResponse = { translations };

    return new Response(
      JSON.stringify(response),
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