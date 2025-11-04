import {
  TrendingUp, DollarSign, Users, Shield, Smartphone, Monitor, Award, BarChart3,
  BookOpen, HelpCircle, Settings, Copy, Zap, Gift, CreditCard, ArrowRight,
  CheckCircle, Star, Download, Clock, Target, Briefcase, Database, LineChart, Globe
} from 'lucide-react';

interface HomePageProps {
  t: any;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export default function HomePage({ t, currentSlide, setCurrentSlide }: HomePageProps) {
  return (
    <>
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        {t.hero.slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${
              index === 0 ? 'from-blue-600 to-blue-800' :
              index === 1 ? 'from-purple-600 to-purple-800' :
              index === 2 ? 'from-red-600 to-red-800' :
              'from-green-600 to-green-800'
            } flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                      {t.hero.learnMore}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                      {t.hero.openAccount}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {t.hero.slides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$1</div>
              <div className="text-gray-600">{t.stats.minDeposit}</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">13+</div>
              <div className="text-gray-600">{t.stats.yearsMarket}</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">350K+</div>
              <div className="text-gray-600">{t.stats.activeClients}</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">{t.stats.countries}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.offers.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.offers.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Gift className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.offers.bonus100.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.offers.bonus100.description}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                {t.offers.bonus100.button} <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.offers.cashback.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.offers.cashback.description}
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                {t.offers.cashback.button} <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.offers.copystart.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.offers.copystart.description}
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                {t.offers.copystart.button} <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.trading.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.trading.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Copy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.trading.copy.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.trading.copy.description}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.copy.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.copy.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.copy.feature3}</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.trading.copy.button}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.trading.jet.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.trading.jet.description}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.jet.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.jet.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.jet.feature3}</span>
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                {t.trading.jet.button}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.trading.forex.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.trading.forex.description}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.forex.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.forex.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t.trading.forex.feature3}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t.trading.forex.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t.platforms.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t.platforms.subtitle}
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Monitor className="h-6 w-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg mb-1">{t.platforms.feature1.title}</div>
                    <div className="text-blue-200">{t.platforms.feature1.description}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg mb-1">{t.platforms.feature2.title}</div>
                    <div className="text-blue-200">{t.platforms.feature2.description}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg mb-1">{t.platforms.feature3.title}</div>
                    <div className="text-blue-200">{t.platforms.feature3.description}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  MetaTrader 4
                </button>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  MetaTrader 5
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                <div className="font-semibold mb-1">{t.platforms.desktop}</div>
                <div className="text-sm text-blue-200">Windows & Mac</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Smartphone className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                <div className="font-semibold mb-1">{t.platforms.mobile}</div>
                <div className="text-sm text-blue-200">iOS & Android</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Globe className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                <div className="font-semibold mb-1">{t.platforms.web}</div>
                <div className="text-sm text-blue-200">Browser Trading</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Database className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                <div className="font-semibold mb-1">{t.platforms.vps}</div>
                <div className="text-sm text-blue-200">Virtual Server</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.payment.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.payment.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <CreditCard className="h-12 w-12 text-gray-700 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">{t.payment.cards}</div>
              <div className="text-sm text-gray-600 mt-1">Visa, MasterCard</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <DollarSign className="h-12 w-12 text-gray-700 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">{t.payment.emoney}</div>
              <div className="text-sm text-gray-600 mt-1">Skrill, Neteller</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <Target className="h-12 w-12 text-gray-700 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">{t.payment.crypto}</div>
              <div className="text-sm text-gray-600 mt-1">Bitcoin, USDT</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <Smartphone className="h-12 w-12 text-gray-700 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">{t.payment.mobile}</div>
              <div className="text-sm text-gray-600 mt-1">{t.payment.mobile}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.education.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.education.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.education.courses.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.education.courses.description}
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                {t.education.courses.button} <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.education.analytics.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.education.analytics.description}
              </p>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                {t.education.analytics.button} <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.education.tools.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.education.tools.description}
              </p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                {t.education.tools.button} <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.education.support.title}</h3>
              <p className="text-gray-600 mb-4">
                {t.education.support.description}
              </p>
              <a href="#" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                {t.education.support.button} <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
              {t.cta.openReal}
            </button>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              {t.cta.tryDemo}
            </button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            {t.cta.features}
          </p>
        </div>
      </section>
    </>
  );
}
