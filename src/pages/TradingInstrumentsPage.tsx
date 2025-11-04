import { TrendingUp, DollarSign, Briefcase, Bitcoin, BarChart3, Gem } from 'lucide-react';

export default function TradingInstrumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Торговые инструменты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 200 инструментов для диверсификации вашего портфеля
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Валютные пары</h3>
            <p className="text-gray-600 mb-4">
              Более 60 валютных пар, включая основные, кроссы и экзотические пары
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• EUR/USD, GBP/USD, USD/JPY</li>
              <li>• EUR/GBP, EUR/CHF, GBP/JPY</li>
              <li>• USD/TRY, EUR/TRY, USD/ZAR</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
            <Gem className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Драгоценные металлы</h3>
            <p className="text-gray-600 mb-4">
              Торгуйте золотом, серебром и другими драгоценными металлами
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Золото (XAU/USD)</li>
              <li>• Серебро (XAG/USD)</li>
              <li>• Платина, Палладий</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-500">
            <Briefcase className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Товары</h3>
            <p className="text-gray-600 mb-4">
              Нефть, газ и другие сырьевые товары
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Нефть Brent, WTI</li>
              <li>• Природный газ</li>
              <li>• Сельскохозяйственные товары</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Индексы</h3>
            <p className="text-gray-600 mb-4">
              Мировые фондовые индексы с выгодными условиями
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• S&P 500, Nasdaq 100</li>
              <li>• FTSE 100, DAX 40</li>
              <li>• Nikkei 225, Hang Seng</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <DollarSign className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Акции CFD</h3>
            <p className="text-gray-600 mb-4">
              Торгуйте акциями крупнейших мировых компаний
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Apple, Microsoft, Amazon</li>
              <li>• Tesla, Google, Facebook</li>
              <li>• Alibaba, Tencent</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <Bitcoin className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Криптовалюты</h3>
            <p className="text-gray-600 mb-4">
              Популярные криптовалюты 24/7
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Bitcoin (BTC/USD)</li>
              <li>• Ethereum (ETH/USD)</li>
              <li>• Ripple, Litecoin и др.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Условия торговли</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Инструмент</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Спред от</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Кредитное плечо</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Часы торговли</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">EUR/USD</td>
                  <td className="px-6 py-4 text-gray-900">0.1 пункта</td>
                  <td className="px-6 py-4 text-gray-900">1:1000</td>
                  <td className="px-6 py-4 text-gray-600">24/5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">GBP/USD</td>
                  <td className="px-6 py-4 text-gray-900">0.5 пункта</td>
                  <td className="px-6 py-4 text-gray-900">1:1000</td>
                  <td className="px-6 py-4 text-gray-600">24/5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-yellow-600">Золото</td>
                  <td className="px-6 py-4 text-gray-900">0.2 пункта</td>
                  <td className="px-6 py-4 text-gray-900">1:500</td>
                  <td className="px-6 py-4 text-gray-600">24/5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-red-600">Нефть WTI</td>
                  <td className="px-6 py-4 text-gray-900">3 цента</td>
                  <td className="px-6 py-4 text-gray-900">1:200</td>
                  <td className="px-6 py-4 text-gray-600">24/5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-orange-600">Bitcoin</td>
                  <td className="px-6 py-4 text-gray-900">$50</td>
                  <td className="px-6 py-4 text-gray-900">1:50</td>
                  <td className="px-6 py-4 text-gray-600">24/7</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-purple-600">S&P 500</td>
                  <td className="px-6 py-4 text-gray-900">0.4 пункта</td>
                  <td className="px-6 py-4 text-gray-900">1:200</td>
                  <td className="px-6 py-4 text-gray-600">24/5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Почему выбирают нас?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Узкие спреды от 0 пунктов</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Быстрое исполнение ордеров</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Без реквотов и проскальзываний</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Более 200 торговых инструментов</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Технологии торговли</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>ECN/STP технология</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>Прямой доступ к ликвидности</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>MetaTrader 4/5 платформы</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>Мобильная торговля 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Начните торговать сегодня</h2>
          <p className="text-xl mb-8 opacity-90">
            Откройте счет и получите доступ ко всем торговым инструментам
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Открыть торговый счет
          </button>
        </div>
      </div>
    </div>
  );
}
