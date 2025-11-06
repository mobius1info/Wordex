import { Calendar, Star, TrendingUp, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { analyticsTranslations } from '../translations/analyticsTranslations';

export default function EventCalendarPage() {
  const { language } = useLanguage();
  const t = analyticsTranslations[language].eventCalendar;
  const events = [
    {
      date: '18 ноября',
      time: '16:30',
      country: '🇺🇸 США',
      event: 'Решение ФРС по процентной ставке',
      forecast: '5.50%',
      previous: '5.50%',
      impact: 'high',
      description: 'Федеральная резервная система объявит решение по ключевой процентной ставке'
    },
    {
      date: '18 ноября',
      time: '14:00',
      country: '🇪🇺 Еврозона',
      event: 'Индекс потребительских цен (CPI)',
      forecast: '2.4%',
      previous: '2.9%',
      impact: 'high',
      description: 'Месячные данные по инфляции в странах еврозоны'
    },
    {
      date: '17 ноября',
      time: '16:00',
      country: '🇺🇸 США',
      event: 'Розничные продажи',
      forecast: '0.3%',
      previous: '0.7%',
      impact: 'medium',
      description: 'Изменение общего объема продаж на уровне розничной торговли'
    },
    {
      date: '17 ноября',
      time: '12:30',
      country: '🇬🇧 Великобритания',
      event: 'Данные по занятости',
      forecast: '4.1%',
      previous: '4.2%',
      impact: 'medium',
      description: 'Уровень безработицы и изменение количества занятых'
    },
    {
      date: '16 ноября',
      time: '09:00',
      country: '🇩🇪 Германия',
      event: 'ВВП (квартальный)',
      forecast: '0.2%',
      previous: '0.0%',
      impact: 'high',
      description: 'Изменение валового внутреннего продукта Германии'
    },
    {
      date: '16 ноября',
      time: '03:00',
      country: '🇨🇳 Китай',
      event: 'Промышленное производство',
      forecast: '5.6%',
      previous: '5.4%',
      impact: 'medium',
      description: 'Изменение общего объема производства китайских заводов и шахт'
    },
    {
      date: '15 ноября',
      time: '16:30',
      country: '🇺🇸 США',
      event: 'Индекс цен производителей (PPI)',
      forecast: '2.3%',
      previous: '2.2%',
      impact: 'medium',
      description: 'Изменение цен, которые производители получают за свою продукцию'
    },
    {
      date: '15 ноября',
      time: '13:45',
      country: '🇪🇺 Еврозона',
      event: 'Решение ЕЦБ по процентной ставке',
      forecast: '4.50%',
      previous: '4.50%',
      impact: 'high',
      description: 'Европейский центральный банк объявит решение по базовой процентной ставке'
    }
  ];

  const upcomingHighImpact = [
    { date: '20 ноября', event: 'Выступление главы ФРС Джерома Пауэлла', country: '🇺🇸' },
    { date: '22 ноября', event: 'Данные по ВВП США (предварительные)', country: '🇺🇸' },
    { date: '24 ноября', event: 'Заседание Банка Японии', country: '🇯🇵' },
    { date: '28 ноября', event: 'Инфляция в Германии', country: '🇩🇪' }
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Высокая важность</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Средняя важность</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">45</div>
                <div className="text-sm text-gray-600">Всего событий</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Важно знать:</h4>
              <p className="text-blue-800 text-sm">
                События с высокой важностью могут вызвать сильную волатильность на рынках. Рекомендуется соблюдать
                осторожность при открытии позиций непосредственно перед публикацией важных данных.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
            Все события
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
            Высокая важность
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
            США
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
            Еврозона
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium border border-gray-200">
            Великобритания
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Дата/Время</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Страна</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Событие</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Важность</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Прогноз</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Предыдущее</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{event.date}</div>
                      <div className="text-sm text-gray-500">{event.time} MSK</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{event.country}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 mb-1">{event.event}</div>
                      <div className="text-sm text-gray-500">{event.description}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center w-20 px-2 py-1 rounded-full text-xs font-semibold ${
                        event.impact === 'high'
                          ? 'bg-red-100 text-red-700'
                          : event.impact === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {event.impact === 'high' ? '🔴 Высокая' : event.impact === 'medium' ? '🟡 Средняя' : '🟢 Низкая'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">
                      {event.forecast}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {event.previous}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Предстоящие важные события</h3>
            <div className="space-y-4">
              {upcomingHighImpact.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{item.country}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.event}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                  </div>
                  <Star className="h-5 w-5 text-red-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Настройте уведомления</h3>
            <p className="mb-6 opacity-90">
              Получайте push-уведомления о важных экономических событиях прямо на ваш телефон или email
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                Выбирайте интересующие страны
              </li>
              <li className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                Фильтруйте по уровню важности
              </li>
              <li className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                Получайте напоминания заранее
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Настроить уведомления
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
