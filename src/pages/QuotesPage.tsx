import { TrendingUp, TrendingDown, RefreshCw, BarChart3 } from 'lucide-react';
import { analyticsTranslations } from '../translations/analyticsTranslations';

interface QuotesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function QuotesPage({ language = 'ru' }: QuotesPageProps) {
  const t = analyticsTranslations[language].quotes;
  const quotes = {
    forex: [
      { pair: 'EUR/USD', bid: '1.0895', ask: '1.0897', change: '+0.15%', trend: 'up' },
      { pair: 'GBP/USD', bid: '1.2534', ask: '1.2536', change: '-0.23%', trend: 'down' },
      { pair: 'USD/JPY', bid: '150.82', ask: '150.85', change: '+0.42%', trend: 'up' },
      { pair: 'USD/CHF', bid: '0.8821', ask: '0.8823', change: '-0.11%', trend: 'down' },
      { pair: 'AUD/USD', bid: '0.6523', ask: '0.6525', change: '+0.31%', trend: 'up' },
      { pair: 'USD/CAD', bid: '1.3745', ask: '1.3748', change: '+0.08%', trend: 'up' },
      { pair: 'NZD/USD', bid: '0.5987', ask: '0.5989', change: '-0.19%', trend: 'down' },
      { pair: 'EUR/GBP', bid: '0.8691', ask: '0.8693', change: '+0.27%', trend: 'up' }
    ],
    metals: [
      { pair: 'Золото', bid: '2,098.45', ask: '2,099.25', change: '+0.82%', trend: 'up' },
      { pair: 'Серебро', bid: '24.87', ask: '24.91', change: '+1.15%', trend: 'up' },
      { pair: 'Платина', bid: '921.50', ask: '923.00', change: '-0.34%', trend: 'down' },
      { pair: 'Палладий', bid: '1,045.30', ask: '1,047.80', change: '+0.51%', trend: 'up' }
    ],
    commodities: [
      { pair: 'Нефть WTI', bid: '78.42', ask: '78.47', change: '+1.23%', trend: 'up' },
      { pair: 'Нефть Brent', bid: '83.15', ask: '83.21', change: '+0.98%', trend: 'up' },
      { pair: 'Природный газ', bid: '2.87', ask: '2.89', change: '-2.15%', trend: 'down' },
      { pair: 'Медь', bid: '3.82', ask: '3.84', change: '+0.45%', trend: 'up' }
    ],
    indices: [
      { pair: 'S&P 500', bid: '4,567.12', ask: '4,567.45', change: '+0.65%', trend: 'up' },
      { pair: 'Nasdaq 100', bid: '15,987.34', ask: '15,988.21', change: '+0.89%', trend: 'up' },
      { pair: 'Dow Jones', bid: '35,421.67', ask: '35,422.89', change: '+0.42%', trend: 'up' },
      { pair: 'FTSE 100', bid: '7,523.45', ask: '7,524.12', change: '-0.18%', trend: 'down' },
      { pair: 'DAX 40', bid: '16,234.78', ask: '16,235.90', change: '+0.31%', trend: 'up' },
      { pair: 'Nikkei 225', bid: '32,678.45', ask: '32,680.12', change: '+0.76%', trend: 'up' }
    ],
    crypto: [
      { pair: 'BTC/USD', bid: '44,523.50', ask: '44,545.80', change: '+2.34%', trend: 'up' },
      { pair: 'ETH/USD', bid: '2,387.20', ask: '2,389.40', change: '+1.87%', trend: 'up' },
      { pair: 'XRP/USD', bid: '0.6234', ask: '0.6238', change: '+3.12%', trend: 'up' },
      { pair: 'LTC/USD', bid: '73.45', ask: '73.52', change: '+0.98%', trend: 'up' }
    ]
  };

  const renderQuoteTable = (title: string, data: any[], icon: any) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center">
          {icon}
          <h3 className="text-2xl font-bold ml-3">{title}</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Инструмент</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Bid</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Ask</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Изменение</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">График</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((quote, index) => (
              <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 font-semibold text-gray-900">{quote.pair}</td>
                <td className="px-6 py-4 text-right font-mono text-gray-900">{quote.bid}</td>
                <td className="px-6 py-4 text-right font-mono text-gray-900">{quote.ask}</td>
                <td className="px-6 py-4 text-right">
                  <span className={`inline-flex items-center font-semibold ${
                    quote.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {quote.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    {quote.change}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-blue-600 hover:text-blue-700">
                    <BarChart3 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Котировки в реальном времени</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Актуальные цены на валюты, металлы, сырье, индексы и криптовалюты
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Котировки обновляются в реальном времени</span>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <RefreshCw className="h-4 w-4" />
              <span>Обновить</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-2">Валютные пары</div>
            <div className="text-3xl font-bold text-blue-600">{quotes.forex.length}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-2">Металлы</div>
            <div className="text-3xl font-bold text-yellow-600">{quotes.metals.length}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-2">Индексы</div>
            <div className="text-3xl font-bold text-purple-600">{quotes.indices.length}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-2">Криптовалюты</div>
            <div className="text-3xl font-bold text-orange-600">{quotes.crypto.length}</div>
          </div>
        </div>

        {renderQuoteTable('Валютные пары', quotes.forex, <TrendingUp className="h-8 w-8" />)}
        {renderQuoteTable('Драгоценные металлы', quotes.metals, <BarChart3 className="h-8 w-8" />)}
        {renderQuoteTable('Сырьевые товары', quotes.commodities, <BarChart3 className="h-8 w-8" />)}
        {renderQuoteTable('Фондовые индексы', quotes.indices, <TrendingUp className="h-8 w-8" />)}
        {renderQuoteTable('Криптовалюты', quotes.crypto, <TrendingUp className="h-8 w-8" />)}

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <h4 className="font-semibold text-blue-900 mb-3">Важная информация:</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Котировки обновляются каждые несколько секунд</li>
            <li>• Bid - цена, по которой вы можете продать актив</li>
            <li>• Ask - цена, по которой вы можете купить актив</li>
            <li>• Разница между Bid и Ask называется спредом</li>
            <li>• Указанные котировки являются ориентировочными и могут отличаться от цен в торговой платформе</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Начните торговать</h3>
            <p className="mb-6 opacity-90">
              Откройте реальный счет и получите доступ к торговле более чем 200 инструментами
            </p>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Открыть счет
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Торговые платформы</h3>
            <p className="mb-6 opacity-90">
              Скачайте MetaTrader 4 или MetaTrader 5 для профессиональной торговли
            </p>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Скачать платформу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
