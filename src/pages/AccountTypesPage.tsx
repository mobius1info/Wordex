import { DollarSign, Star, Award, Zap, CheckCircle } from 'lucide-react';

export default function AccountTypesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Типы торговых счетов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите счет, который идеально подходит для вашего стиля торговли
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
              <DollarSign className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-blue-100">Для начинающих трейдеров</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">от $10</div>
                <div className="text-gray-600">минимальный депозит</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Кредитное плечо до 1:1000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Спред от 1.5 пункта</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Без комиссий</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Микро и стандартные лоты</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Все торговые инструменты</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Открыть счет
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-purple-500">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <Star className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-purple-100">Для активных трейдеров</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">от $100</div>
                <div className="text-gray-600">минимальный депозит</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Кредитное плечо до 1:500</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Спред от 0.5 пункта</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Комиссия $3 за лот</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">ECN/STP исполнение</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Приоритетная поддержка</span>
                </li>
              </ul>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Открыть счет
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8">
              <Award className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">VIP</h3>
              <p className="text-yellow-100">Для профессионалов</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">от $5000</div>
                <div className="text-gray-600">минимальный депозит</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Кредитное плечо до 1:200</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Спред от 0 пунктов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Комиссия $2 за лот</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Персональный менеджер</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Аналитика и сигналы</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Открыть счет
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сравнение счетов</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Характеристика</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Минимальный депозит</td>
                  <td className="px-6 py-4 text-center text-gray-700">$10</td>
                  <td className="px-6 py-4 text-center text-gray-700">$100</td>
                  <td className="px-6 py-4 text-center text-gray-700">$5000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Спред EUR/USD</td>
                  <td className="px-6 py-4 text-center text-gray-700">от 1.5 пип</td>
                  <td className="px-6 py-4 text-center text-gray-700">от 0.5 пип</td>
                  <td className="px-6 py-4 text-center text-gray-700">от 0 пип</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Комиссия</td>
                  <td className="px-6 py-4 text-center text-gray-700">Нет</td>
                  <td className="px-6 py-4 text-center text-gray-700">$3/лот</td>
                  <td className="px-6 py-4 text-center text-gray-700">$2/лот</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Кредитное плечо</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:1000</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:500</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Исполнение</td>
                  <td className="px-6 py-4 text-center text-gray-700">Рыночное</td>
                  <td className="px-6 py-4 text-center text-gray-700">ECN/STP</td>
                  <td className="px-6 py-4 text-center text-gray-700">ECN/STP</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Минимальный лот</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Персональный менеджер</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Торговые сигналы</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <Zap className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Преимущества всех счетов</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Моментальный вывод средств</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Без ограничений на стратегии</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Торговля на всех платформах</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>Защита от отрицательного баланса</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Дополнительные возможности</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>Программа лояльности и бонусы</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>Кэшбек на каждую сделку</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>Бесплатные обучающие материалы</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>VPS-сервер для автоматической торговли</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Не знаете, какой счет выбрать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши специалисты помогут подобрать оптимальный тип счета для ваших целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Связаться с нами
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Открыть демо-счет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
