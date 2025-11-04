import { BookOpen, CheckCircle, TrendingUp, Shield, Zap, Target } from 'lucide-react';

export default function DemoAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Учебный (Демо) счет</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Практикуйтесь в торговле без риска с виртуальными средствами
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Начните с демо-счета</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите $10,000 виртуальных средств и полный доступ ко всем функциям торговой платформы
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Открыть демо-счет бесплатно
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Что такое демо-счет?</h3>
            <p className="text-gray-600 mb-4">
              Демо-счет — это учебный счет с виртуальными деньгами, который полностью имитирует реальную торговлю
              на Forex. Это идеальный способ для новичков изучить платформу и отработать торговые стратегии
              без риска потери реальных средств.
            </p>
            <p className="text-gray-600">
              Все котировки, графики и инструменты полностью соответствуют реальному рынку, что позволяет
              получить максимально реалистичный опыт торговли.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Преимущества демо-счета</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Бесплатная регистрация без обязательств</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">$10,000 виртуальных средств для практики</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Реальные рыночные условия и котировки</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Доступ ко всем торговым инструментам</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Тестирование торговых стратегий</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Для кого подходит демо-счет?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Для новичков</h4>
              <p className="text-gray-600">
                Изучите основы торговли, познакомьтесь с платформой и поймите, как работает рынок Forex без риска
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Для опытных трейдеров</h4>
              <p className="text-gray-600">
                Протестируйте новые торговые стратегии и индикаторы перед применением на реальном счете
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Для всех желающих</h4>
              <p className="text-gray-600">
                Попробуйте торговлю на Forex прямо сейчас и примите взвешенное решение о начале реальной торговли
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как начать работу с демо-счетом</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-6">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Регистрация</h4>
                <p className="text-gray-600">
                  Заполните простую форму регистрации. Требуется только email и базовая информация. Процесс занимает менее 2 минут.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mr-6">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Скачайте платформу</h4>
                <p className="text-gray-600">
                  Загрузите торговую платформу MetaTrader 4 или MetaTrader 5 на ваш компьютер или мобильное устройство.
                  Также доступна веб-версия без установки.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-6">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Войдите в систему</h4>
                <p className="text-gray-600">
                  Используйте полученные логин и пароль для входа в торговую платформу. Ваш демо-счет уже пополнен виртуальными средствами.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl mr-6">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Начните торговать</h4>
                <p className="text-gray-600">
                  Изучите интерфейс платформы, откройте первую сделку и начните практиковаться в торговле на реальных рыночных условиях.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Готовы к реальной торговле?</h2>
          <p className="text-xl mb-8 opacity-90">
            После практики на демо-счете откройте реальный счет и начните зарабатывать на Forex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Открыть реальный счет
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Продолжить с демо
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
