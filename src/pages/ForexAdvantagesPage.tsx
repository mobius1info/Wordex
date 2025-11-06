import { CheckCircle, TrendingUp, Clock, DollarSign, Globe, Zap, Shield, Users } from 'lucide-react';
import { pageTranslations } from '../translations/pageTranslations';

interface ForexAdvantagesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function ForexAdvantagesPage({ language = 'ru' }: ForexAdvantagesPageProps) {
  const translations = pageTranslations[language] || pageTranslations.ru;
  const t = translations.forexAdvantages || pageTranslations.ru.forexAdvantages;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv1.title}</h3>
            <p className="text-gray-600">
              {t.adv1.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv2.title}</h3>
            <p className="text-gray-600">
              {t.adv2.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv3.title}</h3>
            <p className="text-gray-600">
              {t.adv3.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv4.title}</h3>
            <p className="text-gray-600">
              {t.adv4.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv5.title}</h3>
            <p className="text-gray-600">
              {t.adv5.text}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.adv6.title}</h3>
            <p className="text-gray-600">
              {t.adv6.text}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.ourAdvantages}</h2>

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
          <h2 className="text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              {t.realButton}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              {t.demoButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
