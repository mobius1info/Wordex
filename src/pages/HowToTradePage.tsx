import { Download, Monitor, TrendingUp, BarChart3, Shield, DollarSign } from 'lucide-react';

import PageWrapper from '../components/PageWrapper';

interface HowToTradePageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function HowToTradePage({ language = 'ru' }: HowToTradePageProps) {

  return (
    <PageWrapper language={language} pageKey="howToTrade">
      <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Download className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Установите торговую платформу</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Скачайте и установите торговый терминал MetaTrader 4 или MetaTrader 5. Это профессиональные платформы с широким функционалом для анализа и торговли.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Monitor className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Windows/Mac</h4>
                    <p className="text-sm text-gray-600">Полная версия для ПК</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Monitor className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">WebTrader</h4>
                    <p className="text-sm text-gray-600">Торговля в браузере</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Monitor className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Мобильное приложение</h4>
                    <p className="text-sm text-gray-600">iOS и Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Откройте торговый счет</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Зарегистрируйтесь и откройте торговый счет. Процесс занимает всего несколько минут.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Типы счетов:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span><strong>Демо-счет</strong> - виртуальные средства для обучения</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span><strong>Cent счет</strong> - для начинающих с минимальным депозитом</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span><strong>Standard счет</strong> - классический торговый счет</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span><strong>ECN счет</strong> - для профессионалов</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Изучите анализ рынка</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Освойте основные методы анализа рынка для принятия обоснованных торговых решений.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Технический анализ</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Графики и свечные паттерны</li>
                      <li>• Индикаторы и осцилляторы</li>
                      <li>• Уровни поддержки и сопротивления</li>
                      <li>• Трендовые линии</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Фундаментальный анализ</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Экономические новости</li>
                      <li>• Процентные ставки</li>
                      <li>• Геополитические события</li>
                      <li>• Отчеты центральных банков</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Откройте первую сделку</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  После подготовки можно открывать реальные торговые позиции. Начинайте с малого и постепенно увеличивайте объемы.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Основные понятия:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Buy (Покупка)</p>
                      <p className="text-gray-600">Открытие длинной позиции при ожидании роста</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Sell (Продажа)</p>
                      <p className="text-gray-600">Открытие короткой позиции при ожидании падения</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Stop Loss</p>
                      <p className="text-gray-600">Ограничение убытков</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Take Profit</p>
                      <p className="text-gray-600">Фиксация прибыли</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">5</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Управляйте рисками</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Правильное управление рисками - ключ к долгосрочному успеху в трейдинге.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Не рискуйте более 1-2% от депозита в одной сделке</p>
                      <p className="text-sm text-gray-600">Это позволит пережить серию убыточных сделок</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Всегда используйте Stop Loss</p>
                      <p className="text-sm text-gray-600">Защитите себя от неконтролируемых потерь</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Не торгуйте на эмоциях</p>
                      <p className="text-sm text-gray-600">Следуйте своей торговой стратегии</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Диверсифицируйте портфель</p>
                      <p className="text-sm text-gray-600">Не открывайте все позиции по одному инструменту</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Начните торговать сегодня</h2>
          <p className="text-xl mb-8 text-blue-100">
            Откройте счет и получите доступ к мировым финансовым рынкам
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Открыть торговый счет
          </button>
        </div>
    </PageWrapper>
  );
}
