import { Calendar, Bell, TrendingUp, Award } from 'lucide-react';
import { analyticsTranslations } from '../translations/analyticsTranslations';

interface CompanyNewsPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function CompanyNewsPage({ language = 'ru' }: CompanyNewsPageProps) {
  const t = analyticsTranslations[language].companyNews;
  const news = [
    {
      date: '15 ноября 2025',
      title: 'Изменение расписания торговых сессий в период новогодних праздников',
      content: 'Уважаемые клиенты! Информируем вас об изменениях в расписании торговых сессий в период новогодних и рождественских праздников. С 24 декабря по 2 января торговля некоторыми инструментами будет ограничена или приостановлена.',
      category: 'Важное'
    },
    {
      date: '10 ноября 2025',
      title: 'Запуск нового типа счета - ECN Pro',
      content: 'WorldForex представляет новый тип торгового счета ECN Pro со спредами от 0 пунктов и прямым доступом к межбанковской ликвидности. Минимальный депозит - $500, комиссия всего $2.5 за лот.',
      category: 'Продукты'
    },
    {
      date: '5 ноября 2025',
      title: 'Обновление торговой платформы MetaTrader 5',
      content: 'Вышла новая версия платформы MT5 с улучшенной функциональностью и повышенной скорость исполнения ордеров. Рекомендуем всем клиентам обновить свои платформы до последней версии.',
      category: 'Технологии'
    },
    {
      date: '1 ноября 2025',
      title: 'WorldForex получил награду "Лучший Forex брокер 2025"',
      content: 'Мы рады сообщить, что WorldForex был признан лучшим Forex брокером 2025 года по версии международного рейтинга. Это признание нашей приверженности предоставлению лучших торговых условий для наших клиентов.',
      category: 'Награды'
    },
    {
      date: '28 октября 2025',
      title: 'Расширение линейки криптовалют',
      content: 'Добавлено 15 новых криптовалютных пар для торговли, включая популярные альткоины: Cardano (ADA), Polkadot (DOT), Chainlink (LINK) и другие. Торговля доступна 24/7 с кредитным плечом до 1:50.',
      category: 'Продукты'
    },
    {
      date: '20 октября 2025',
      title: 'Снижение спредов на основные валютные пары',
      content: 'С 25 октября вступают в силу новые, более выгодные торговые условия. Спреды на пары EUR/USD, GBP/USD и USD/JPY снижены на 20-30%. Улучшенные условия доступны для всех типов счетов.',
      category: 'Торговля'
    },
    {
      date: '15 октября 2025',
      title: 'Запуск программы кэшбека для активных трейдеров',
      content: 'WorldForex запускает программу лояльности с возвратом до 15% от спреда на каждую сделку. Чем больше вы торгуете, тем выше ваш кэшбек. Программа доступна для всех клиентов автоматически.',
      category: 'Бонусы'
    },
    {
      date: '10 октября 2025',
      title: 'Новый образовательный портал для трейдеров',
      content: 'Представляем обновленный образовательный центр с более чем 100 видеоуроками, вебинарами и торговыми стратегиями от профессиональных трейдеров. Доступ бесплатный для всех клиентов.',
      category: 'Обучение'
    },
    {
      date: '5 октября 2025',
      title: 'Улучшение мобильных приложений',
      content: 'Выпущены обновленные версии мобильных приложений для iOS и Android с новым интерфейсом, улучшенными графиками и возможностью торговли в один клик. Обновите приложения в App Store и Google Play.',
      category: 'Технологии'
    },
    {
      date: '1 октября 2025',
      title: 'Изменение маржинальных требований',
      content: 'С 1 октября вводятся новые маржинальные требования для некоторых торговых инструментов. Подробная информация доступна в личном кабинете и на сайте в разделе спецификаций контрактов.',
      category: 'Важное'
    }
  ];

  const categories = [t.categories.all, t.categories.important, t.categories.products, t.categories.technology, t.categories.trading, t.categories.awards, t.categories.bonuses, t.categories.education];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <Bell className="h-12 w-12 mr-4" />
            <div>
              <h2 className="text-3xl font-bold">{t.subscribe.title}</h2>
              <p className="text-blue-100 mt-2">{t.subscribe.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <input
              type="email"
              placeholder={t.subscribe.placeholder}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t.subscribe.button}
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === 'Все'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  item.category === 'Важное' ? 'bg-red-100 text-red-700' :
                  item.category === 'Продукты' ? 'bg-blue-100 text-blue-700' :
                  item.category === 'Технологии' ? 'bg-purple-100 text-purple-700' :
                  item.category === 'Награды' ? 'bg-yellow-100 text-yellow-700' :
                  item.category === 'Торговля' ? 'bg-green-100 text-green-700' :
                  item.category === 'Бонусы' ? 'bg-pink-100 text-pink-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
              <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Читать далее →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Загрузить ещё
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Обзоры рынка</h4>
            <p className="text-gray-600 mb-4">Профессиональная аналитика и прогнозы</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Перейти →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Календарь событий</h4>
            <p className="text-gray-600 mb-4">Важные экономические события</p>
            <button className="text-purple-600 font-semibold hover:text-purple-700">
              Перейти →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">О компании</h4>
            <p className="text-gray-600 mb-4">История и достижения WorldForex</p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Перейти →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
