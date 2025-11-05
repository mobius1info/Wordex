import { analyticsTranslations } from '../translations/analyticsTranslations';

interface QuotesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function QuotesPage({ language = 'ru' }: QuotesPageProps) {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://client.yourbroker.digital/iframe/info/symbols"
        className="w-full h-full border-0"
        title="Trading Quotes"
        allow="fullscreen"
      />
    </div>
  );
}
