import { CheckCircle, TrendingUp, Clock, DollarSign, Globe, Zap, Shield, Users } from 'lucide-react';

export default function ForexAdvantagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Преимущества торговли на Forex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему миллионы трейдеров по всему миру выбирают валютный рынок
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Круглосуточная торговля</h3>
            <p className="text-gray-600">
              Рынок Forex работает 24 часа в сутки 5 дней в неделю. Вы можете торговать в любое удобное время,
              независимо от вашего часового пояса или рабочего графика.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Низкий порог входа</h3>
            <p className="text-gray-600">
              Начните торговать с минимальным депозитом от $10. Благодаря кредитному плечу вы можете контролировать
              крупные позиции с небольшим капиталом.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Высокая ликвидность</h3>
            <p className="text-gray-600">
              Ежедневный оборот более $6 триллионов обеспечивает мгновенное исполнение ордеров по оптимальным ценам
              без проскальзываний.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Кредитное плечо</h3>
            <p className="text-gray-600">
              Используйте кредитное плечо до 1:1000 для увеличения торгового потенциала. Контролируйте позиции в сотни
              раз превышающие ваш депозит.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Глобальный рынок</h3>
            <p className="text-gray-600">
              Торгуйте валютами со всего мира. Более 60 валютных пар доступны для трейдинга, от основных до экзотических.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Прозрачность</h3>
            <p className="text-gray-600">
              Все котировки в реальном времени, отсутствие скрытых комиссий. Вы всегда знаете реальную стоимость
              открытия и закрытия позиций.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества торговли с WorldForex</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Регулирование и безопасность</h4>
                <p className="text-gray-600">
                  Мы работаем под надзором международных регуляторов, обеспечивая полную безопасность средств клиентов.
                  Средства хранятся на сегрегированных счетах в банках первого эшелона.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Быстрое исполнение ордеров</h4>
                <p className="text-gray-600">
                  Средняя скорость исполнения ордеров менее 0.1 секунды. Используем технологии ECN/STP для прямого
                  доступа к межбанковской ликвидности.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Узкие спреды</h4>
                <p className="text-gray-600">
                  Спреды от 0 пунктов на основных валютных парах. Конкурентные условия торговли для всех типов счетов.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Профессиональная поддержка</h4>
                <p className="text-gray-600">
                  Служба поддержки 24/7 на вашем языке. Опытные специалисты помогут решить любой вопрос в кратчайшие сроки.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Обучающие материалы</h4>
                <p className="text-gray-600">
                  Бесплатный доступ к обучающим курсам, вебинарам, видео-урокам и аналитическим материалам от профессиональных трейдеров.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Множество торговых инструментов</h4>
                <p className="text-gray-600">
                  Более 200 торговых инструментов: валютные пары, металлы, индексы, акции, криптовалюты, товары.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к 350,000+ трейдеров</h2>
          <p className="text-xl mb-8 opacity-90">
            Начните торговать на Forex с надежным брокером уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Открыть реальный счет
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Попробовать демо
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
