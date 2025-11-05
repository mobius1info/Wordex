import { DollarSign, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import { analyticsTranslations } from '../translations/analyticsTranslations';

interface StockDividendsPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function StockDividendsPage({ language = 'ru' }: StockDividendsPageProps) {
  const t = analyticsTranslations[language].stockDividends;
  const dividends = [
    {
      company: 'Apple Inc.',
      ticker: 'AAPL',
      dividend: '$0.24',
      yield: '0.52%',
      exDate: '10 ноября 2025',
      payDate: '16 ноября 2025',
      frequency: 'Квартальные',
      sector: 'Технологии'
    },
    {
      company: 'Microsoft Corporation',
      ticker: 'MSFT',
      dividend: '$0.75',
      yield: '0.78%',
      exDate: '15 ноября 2025',
      payDate: '12 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Технологии'
    },
    {
      company: 'Coca-Cola Company',
      ticker: 'KO',
      dividend: '$0.46',
      yield: '3.12%',
      exDate: '1 декабря 2025',
      payDate: '15 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Товары повседневного спроса'
    },
    {
      company: 'JPMorgan Chase',
      ticker: 'JPM',
      dividend: '$1.05',
      yield: '2.45%',
      exDate: '5 декабря 2025',
      payDate: '31 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Финансы'
    },
    {
      company: 'Johnson & Johnson',
      ticker: 'JNJ',
      dividend: '$1.19',
      yield: '3.05%',
      exDate: '20 ноября 2025',
      payDate: '12 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Здравоохранение'
    },
    {
      company: 'Procter & Gamble',
      ticker: 'PG',
      dividend: '$0.94',
      yield: '2.48%',
      exDate: '18 ноября 2025',
      payDate: '15 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Товары повседневного спроса'
    },
    {
      company: 'ExxonMobil',
      ticker: 'XOM',
      dividend: '$0.95',
      yield: '3.42%',
      exDate: '12 ноября 2025',
      payDate: '10 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Энергетика'
    },
    {
      company: 'AT&T Inc.',
      ticker: 'T',
      dividend: '$0.28',
      yield: '6.87%',
      exDate: '9 ноября 2025',
      payDate: '1 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Телекоммуникации'
    },
    {
      company: 'Intel Corporation',
      ticker: 'INTC',
      dividend: '$0.13',
      yield: '1.23%',
      exDate: '7 ноября 2025',
      payDate: '1 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Технологии'
    },
    {
      company: 'Pfizer Inc.',
      ticker: 'PFE',
      dividend: '$0.42',
      yield: '5.67%',
      exDate: '1 ноября 2025',
      payDate: '6 декабря 2025',
      frequency: 'Квартальные',
      sector: 'Здравоохранение'
    }
  ];

  const upcomingHighYield = [
    { company: 'AT&T Inc.', ticker: 'T', yield: '6.87%' },
    { company: 'Pfizer Inc.', ticker: 'PFE', yield: '5.67%' },
    { company: 'ExxonMobil', ticker: 'XOM', yield: '3.42%' },
    { company: 'Coca-Cola Company', ticker: 'KO', yield: '3.12%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Дивиденды на акции</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Календарь выплаты дивидендов по акциям крупнейших мировых компаний
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Что такое дивиденды?</h2>
              <p className="text-lg opacity-90 mb-6">
                Дивиденды - это часть прибыли компании, которая распределяется между акционерами.
                Покупая акции компаний, выплачивающих дивиденды, вы можете получать регулярный пассивный доход.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Подробнее о дивидендах
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <DollarSign className="h-10 w-10 mb-3" />
                <div className="text-3xl font-bold mb-1">250+</div>
                <div className="text-sm opacity-90">Акций с дивидендами</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="h-10 w-10 mb-3" />
                <div className="text-3xl font-bold mb-1">5.2%</div>
                <div className="text-sm opacity-90">Средняя доходность</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Все компании
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Высокая доходность
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Технологии
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Финансы
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Компания</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Тикер</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Дивиденд</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Доходность</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Экс-дата</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Дата выплаты</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Частота</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dividends.map((stock, index) => (
                  <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{stock.company}</div>
                      <div className="text-sm text-gray-500">{stock.sector}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {stock.ticker}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">
                      {stock.dividend}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-semibold ${
                        parseFloat(stock.yield) > 3 ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {stock.yield}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {stock.exDate}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {stock.payDate}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {stock.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Акции с высокой доходностью</h3>
            <div className="space-y-4">
              {upcomingHighYield.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{stock.company}</div>
                    <div className="text-sm text-gray-600">{stock.ticker}</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{stock.yield}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Важные даты</h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Экс-дата (Ex-Dividend Date)</div>
                  <div className="text-sm text-gray-600">
                    Дата, до которой нужно купить акции, чтобы получить дивиденды
                  </div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Дата выплаты (Payment Date)</div>
                  <div className="text-sm text-gray-600">
                    Дата, когда дивиденды будут зачислены на ваш счет
                  </div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Дата фиксации (Record Date)</div>
                  <div className="text-sm text-gray-600">
                    Дата, на которую определяется список акционеров для выплаты дивидендов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <h4 className="font-semibold text-blue-900 mb-3">Важная информация о торговле акциями CFD:</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• При торговле акциями CFD дивиденды начисляются для длинных позиций, открытых до экс-даты</li>
            <li>• Дивиденды списываются с коротких позиций</li>
            <li>• Сумма дивидендов зависит от размера вашей позиции</li>
            <li>• Дивиденды начисляются в валюте базового актива</li>
            <li>• Корпоративные действия могут повлиять на выплату дивидендов</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl p-8">
            <DollarSign className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Начните инвестировать</h3>
            <p className="mb-6 opacity-90">
              Откройте счет и начните получать дивиденды от торговли акциями мировых компаний
            </p>
            <button className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Открыть счет
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Обучение инвестициям</h3>
            <p className="mb-6 opacity-90">
              Изучите стратегии дивидендного инвестирования и начните строить пассивный доход
            </p>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Перейти к обучению
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
