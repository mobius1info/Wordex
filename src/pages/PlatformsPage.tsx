import { Monitor, Smartphone, Download, CheckCircle, Zap, BarChart3 } from 'lucide-react';

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Торговые платформы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные инструменты для успешной торговли на любом устройстве
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <div className="flex items-center mb-6">
              <Monitor className="h-12 w-12 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">MetaTrader 4</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Самая популярная торговая платформа в мире с миллионами пользователей
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Удобный и интуитивный интерфейс</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Более 30 встроенных индикаторов</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Поддержка автоматической торговли</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Торговые сигналы и советники</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Встроенный маркет индикаторов</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Скачать MT4
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Веб-версия
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-600">
            <div className="flex items-center mb-6">
              <Monitor className="h-12 w-12 text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">MetaTrader 5</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Новое поколение торговых платформ с расширенными возможностями
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Все функции MT4 + расширенные возможности</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">38 встроенных индикаторов</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Больше таймфреймов для анализа</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Экономический календарь встроен</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Улучшенная система тестирования</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Скачать MT5
              </button>
              <button className="flex-1 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Веб-версия
              </button>
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
