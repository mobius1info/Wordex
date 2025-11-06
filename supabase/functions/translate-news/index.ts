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

const languageNames: Record<string, string> = {
  ru: 'Russian',
  uk: 'Ukrainian',
  en: 'English',
  tr: 'Turkish',
  zh: 'Chinese'
};

async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    const prompt = `Translate the following text from ${languageNames[sourceLang] || sourceLang} to ${languageNames[targetLang] || targetLang}. Preserve all formatting, line breaks, and paragraph structure. Only return the translated text without any additional comments or explanations.\n\nText to translate:\n${text}`;
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a professional translator. Translate text accurately while preserving formatting, tone, and meaning. Return only the translation without any additional text.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content?.trim() || text;
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

    for (const targetLang of targetLangs) {
      if (targetLang !== sourceLang) {
        translations[targetLang] = await translateText(text, sourceLang, targetLang);
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