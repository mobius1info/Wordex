import { Monitor, Smartphone, Download, CheckCircle, Zap, BarChart3 } from 'lucide-react';
import { platformsTranslations } from '../translations/platformsTranslations';

interface PlatformsPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function PlatformsPage({ language = 'ru' }: PlatformsPageProps) {
  const t = platformsTranslations[language] || platformsTranslations.ru;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>

            <div className="relative p-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-lg mr-6">
                  <Monitor className="h-14 w-14 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{t.mt4.title}</h2>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <span className="text-cyan-300 text-sm font-semibold">Professional Trading Platform</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                {t.mt4.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {t.mt4.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg p-1.5 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-100 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="group relative flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center overflow-hidden hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="h-6 w-6 mr-3 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10 text-lg">{t.mt4.downloadButton}</span>
                </button>
                <button className="flex-1 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105">
                  {t.mt4.webButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Мобильная торговля</h2>
            <p className="text-xl text-gray-600">
              Торгуйте в любом месте и в любое время с мобильными приложениями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">iOS</h4>
              <p className="text-gray-600 mb-4">
                Приложения для iPhone и iPad
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                App Store
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Android</h4>
              <p className="text-gray-600 mb-4">
                Приложения для всех Android устройств
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full">
                Google Play
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Планшеты</h4>
              <p className="text-gray-600 mb-4">
                Оптимизированные версии для планшетов
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full">
                Скачать
              </button>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Возможности мобильных приложений:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Полный функционал десктопных версий</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Синхронизация между устройствами</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Push-уведомления о сделках</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Touch ID / Face ID авторизация</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества наших платформ</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Быстрое исполнение</h4>
              <p className="text-gray-600">
                Средняя скорость исполнения ордеров менее 0.1 секунды
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Продвинутая аналитика</h4>
              <p className="text-gray-600">
                Сотни индикаторов и инструментов технического анализа
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Надежность</h4>
              <p className="text-gray-600">
                Стабильная работа платформ 24/7 без сбоев
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Начните торговать прямо сейчас</h2>
          <p className="text-xl mb-8 opacity-90">
            Скачайте платформу и откройте демо-счет для практики
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Скачать платформу
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
