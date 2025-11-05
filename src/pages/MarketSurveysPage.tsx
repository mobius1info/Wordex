import { TrendingUp, TrendingDown, BarChart3, Target, Clock } from 'lucide-react';
import { analyticsTranslations } from '../translations/analyticsTranslations';

interface MarketSurveysPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function MarketSurveysPage({ language = 'ru' }: MarketSurveysPageProps) {
  const t = analyticsTranslations[language].marketSurveys;
  const surveys = [
    {
      date: '15 ноября 2025',
      time: '14:30',
      title: 'EUR/USD: Ожидается коррекция после резкого роста',
      analyst: 'Александр Петров',
      image: 'eurusd',
      trend: 'down',
      summary: 'Пара EUR/USD показала значительный рост за последние несколько дней, достигнув уровня 1.1200. Технические индикаторы указывают на перекупленность, что может привести к коррекции в ближайшие дни.',
      targets: { support: '1.1050', resistance: '1.1250' },
      recommendation: 'Продажа от текущих уровней с целью 1.1050'
    },
    {
      date: '15 ноября 2025',
      time: '12:00',
      title: 'Золото укрепляется на фоне геополитической напряженности',
      analyst: 'Мария Иванова',
      image: 'gold',
      trend: 'up',
      summary: 'Цена на золото продолжает рост, достигнув отметки $2,100 за унцию. Инвесторы ищут безопасные активы на фоне нестабильной геополитической обстановки и опасений рецессии.',
      targets: { support: '2,050', resistance: '2,150' },
      recommendation: 'Покупка при откате к уровню $2,070'
    },
    {
      date: '14 ноября 2025',
      time: '16:45',
      title: 'GBP/USD: Фунт под давлением из-за слабых данных по ВВП',
      analyst: 'Дмитрий Соколов',
      image: 'gbpusd',
      trend: 'down',
      summary: 'Британский фунт ослаб после публикации данных по ВВП, которые оказались хуже прогнозов. Пара GBP/USD тестирует поддержку на уровне 1.2500.',
      targets: { support: '1.2450', resistance: '1.2600' },
      recommendation: 'Воздержаться от торговли до пробития ключевых уровней'
    },
    {
      date: '14 ноября 2025',
      time: '11:20',
      title: 'Нефть WTI: Цены стабилизируются после падения',
      analyst: 'Елена Смирнова',
      image: 'oil',
      trend: 'up',
      summary: 'Цены на нефть WTI стабилизировались около $78 за баррель после резкого падения на прошлой неделе. ОПЕК+ рассматривает возможность сокращения добычи для поддержки цен.',
      targets: { support: '75', resistance: '82' },
      recommendation: 'Покупка от уровня $76 с целью $81'
    },
    {
      date: '13 ноября 2025',
      time: '15:30',
      title: 'Bitcoin тестирует сопротивление $45,000',
      analyst: 'Игорь Волков',
      image: 'bitcoin',
      trend: 'up',
      summary: 'Bitcoin продолжает восходящее движение и тестирует важный уровень сопротивления $45,000. Пробой этого уровня может открыть путь к $50,000.',
      targets: { support: '42,000', resistance: '45,000' },
      recommendation: 'Покупка при пробое $45,000 с целью $48,000'
    },
    {
      date: '13 ноября 2025',
      time: '10:15',
      title: 'USD/JPY: Иена слабеет на фоне политики ЦБ Японии',
      analyst: 'Наталья Федорова',
      image: 'usdjpy',
      trend: 'up',
      summary: 'Пара USD/JPY продолжает рост к уровню 151.00 на фоне сохранения сверхмягкой денежно-кредитной политики Банка Японии. Ожидается дальнейшее ослабление иены.',
      targets: { support: '149.50', resistance: '152.00' },
      recommendation: 'Покупка от текущих уровней с целью 151.50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <BarChart3 className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Обзоров в неделю</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <Target className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Точность прогнозов</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <TrendingUp className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-1">15</div>
              <div className="text-sm text-gray-600">Опытных аналитиков</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <Clock className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-yellow-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Мониторинг рынков</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
              Все обзоры
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
              Валюты
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
              Металлы
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
              Нефть
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
              Криптовалюты
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
              Индексы
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {surveys.map((survey, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                      survey.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {survey.trend === 'up' ? (
                        <TrendingUp className="h-12 w-12 text-green-600" />
                      ) : (
                        <TrendingDown className="h-12 w-12 text-red-600" />
                      )}
                    </div>
                    <div className={`text-2xl font-bold ${
                      survey.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {survey.trend === 'up' ? 'Бычий тренд' : 'Медвежий тренд'}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {survey.date} в {survey.time}
                    </div>
                    <div className="text-sm font-medium text-blue-600">
                      {survey.analyst}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{survey.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{survey.summary}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Поддержка</div>
                      <div className="text-xl font-bold text-red-600">{survey.targets.support}</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Сопротивление</div>
                      <div className="text-xl font-bold text-green-600">{survey.targets.resistance}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <div className="text-sm font-semibold text-blue-900 mb-1">Рекомендация:</div>
                    <div className="text-blue-800">{survey.recommendation}</div>
                  </div>

                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Читать полный анализ →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Загрузить ещё обзоры
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 mt-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Хотите получать аналитику на email?</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на ежедневную рассылку с обзорами рынков и торговыми идеями
          </p>
          <div className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
