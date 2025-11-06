import { Clock, Calendar, TrendingUp } from 'lucide-react';

import { simplePageTranslations } from '../translations/simplePageTranslations';

interface TradingSchedulePageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function TradingSchedulePage({ language = 'ru' }: TradingSchedulePageProps) {

  const translations = simplePageTranslations[language] || simplePageTranslations.ru;
  const t = translations.tradingSchedule || simplePageTranslations.ru.tradingSchedule;
  const sessions = [
    { name: 'Токио', open: '00:00', close: '09:00', color: 'bg-red-500' },
    { name: 'Лондон', open: '08:00', close: '17:00', color: 'bg-blue-500' },
    { name: 'Нью-Йорк', open: '13:00', close: '22:00', color: 'bg-green-500' },
    { name: 'Сидней', open: '22:00', close: '07:00', color: 'bg-purple-500' }
  ];

  const instruments = [
    { pair: 'EUR/USD', monday: '00:05 - 23:59', friday: '00:00 - 23:55' },
    { pair: 'GBP/USD', monday: '00:05 - 23:59', friday: '00:00 - 23:55' },
    { pair: 'USD/JPY', monday: '00:05 - 23:59', friday: '00:00 - 23:55' },
    { pair: 'USD/CHF', monday: '00:05 - 23:59', friday: '00:00 - 23:55' },
    { pair: 'AUD/USD', monday: '00:05 - 23:59', friday: '00:00 - 23:55' },
    { pair: 'Gold', monday: '01:00 - 23:59', friday: '01:00 - 23:55' },
    { pair: 'Silver', monday: '01:00 - 23:59', friday: '01:00 - 23:55' },
    { pair: 'Oil', monday: '03:00 - 23:59', friday: '03:00 - 23:55' }
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

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Торговые сессии</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Forex работает 24 часа в сутки, 5 дней в неделю. Время указано по МСК (GMT+3).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${session.color} mr-3`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{session.name}</h3>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="text-lg">{session.open} - {session.close} МСК</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Расписание инструментов</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Время торговли основных валютных пар и инструментов (МСК, GMT+3)
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Инструмент</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Понедельник</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Вторник - Четверг</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Пятница</th>
                </tr>
              </thead>
              <tbody>
                {instruments.map((instrument, index) => (
                  <tr key={instrument.pair} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="py-4 px-4 font-medium text-gray-900">{instrument.pair}</td>
                    <td className="py-4 px-4 text-gray-600">{instrument.monday}</td>
                    <td className="py-4 px-4 text-gray-600">00:00 - 23:59</td>
                    <td className="py-4 px-4 text-gray-600">{instrument.friday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Важная информация</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Торговля недоступна в выходные дни (суббота и воскресенье)</li>
            <li>• В праздничные дни расписание может меняться</li>
            <li>• Наиболее волатильные периоды - во время пересечения торговых сессий</li>
            <li>• Спреды могут увеличиваться в периоды низкой ликвидности</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
