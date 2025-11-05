interface QuotesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function QuotesPage(_props: QuotesPageProps) {
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
