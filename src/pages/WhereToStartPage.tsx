import { ArrowRight, CheckCircle, TrendingUp, BookOpen, DollarSign, Users } from 'lucide-react';

export default function WhereToStartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">С чего начать торговлю на Forex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пошаговое руководство для новичков в мире валютного трейдинга
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Шаг 1: Обучение</h3>
            <p className="text-gray-600 mb-6">
              Изучите основы торговли на Forex. Понимание базовых понятий, терминологии и механизмов работы рынка - это фундамент успешной торговли.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Что такое валютные пары и котировки</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Как работают спреды и комиссии</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Понятие кредитного плеча</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Шаг 2: Демо счет</h3>
            <p className="text-gray-600 mb-6">
              Откройте бесплатный демо-счет и практикуйтесь без риска потери реальных средств. Это позволит освоить платформу и протестировать стратегии.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Виртуальные $100,000 для практики</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Реальные рыночные условия</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Неограниченный срок использования</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Шаг 3: Торговая стратегия</h3>
            <p className="text-gray-600 mb-6">
              Разработайте собственную торговую стратегию или используйте проверенные подходы. Определите правила входа и выхода из позиций.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Технический и фундаментальный анализ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Управление рисками и капиталом</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Психология трейдинга</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Шаг 4: Реальная торговля</h3>
            <p className="text-gray-600 mb-6">
              Откройте реальный торговый счет и начните с небольшого депозита. Постепенно увеличивайте объемы по мере роста опыта.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Минимальный депозит от $10</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Бонусы для новых клиентов</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Поддержка 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Откройте бесплатный демо-счет сегодня и начните свой путь в трейдинге
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              Открыть демо-счет
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center border-2 border-white">
              Открыть реальный счет
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Важное предупреждение</h3>
          <p className="text-yellow-800">
            Торговля на валютном рынке сопряжена с высоким уровнем риска и может привести к потере всего инвестированного капитала.
            Начинайте торговлю только после тщательного изучения рынка и с капиталом, потерю которого вы можете себе позволить.
          </p>
        </div>
      </div>
    </div>
  );
}
