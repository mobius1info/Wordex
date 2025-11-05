import { analyticsTranslations } from '../translations/analyticsTranslations';

interface QuotesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function QuotesPage({ language = 'ru' }: QuotesPageProps) {
  const t = analyticsTranslations[language].quotes;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 py-16">
        <div className="text-center mb-8 max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-4" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
          <iframe
            src="https://client.yourbroker.digital/iframe/info/symbols"
            className="w-full h-full border-0"
            title="Trading Quotes"
            allow="fullscreen"
          />
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-7xl mx-auto">
          <p className="text-blue-800 text-sm">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
