import { Globe, ChevronDown, Menu, X, TrendingUp, HelpCircle } from 'lucide-react';

interface HeaderProps {
  language: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
  showLanguages: boolean;
  setShowLanguages: (show: boolean) => void;
  setLanguage: (lang: 'ru' | 'uk' | 'en' | 'tr' | 'zh') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setActivePage: (page: string | null) => void;
  translations: any;
}

export default function Header({
  language,
  showLanguages,
  setShowLanguages,
  setLanguage,
  mobileMenuOpen,
  setMobileMenuOpen,
  setActivePage,
  translations
}: HeaderProps) {
  const t = translations[language];

  const languageLabels = {
    ru: 'Русский',
    uk: 'Українська',
    en: 'English',
    tr: 'Türkçe',
    zh: '中文'
  };

  return (
    <>
      <div className="bg-blue-700 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">{t.topBar.years}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t.topBar.clients}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{t.topBar.countries}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-xs hover:text-blue-200 flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" />
              {t.topBar.support}
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => setActivePage(null)} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">WorldForex</div>
                <div className="text-xs text-gray-500">Online Trading</div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.beginners}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[200px]">
                    <button onClick={() => setActivePage('start')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">С чего начать</button>
                    <a href="#what-is-forex" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Что такое форекс</a>
                    <a href="#advantages" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Преимущества форекс</a>
                    <a href="#demo" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Учебный счет</a>
                    <a href="#trading-account" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Торговый счет</a>
                    <a href="#literature" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Литература</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.analytics}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[220px]">
                    <button onClick={() => setActivePage('trading-schedule')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Расписание торгов</button>
                    <a href="#company-news" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Новости компании</a>
                    <a href="#market-surveys" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Обзоры рынка</a>
                    <a href="#news" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Новости</a>
                    <a href="#events-calendar" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Календарь событий</a>
                    <a href="#quotes" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Котировки</a>
                    <a href="#dividends" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Дивиденды на акции</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.help}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[240px]">
                    <a href="#help-forex" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Форекс</a>
                    <a href="#digital-contracts" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Цифровые контракты</a>
                    <button onClick={() => setActivePage('how-to-trade')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Как торговать</button>
                    <a href="#deposit-withdrawal" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Пополнение и вывод средств</a>
                    <a href="#calculation-speed" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Скорость расчетов</a>
                    <a href="#knowledge-base" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">База знаний</a>
                    <a href="#glossary" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Словарь терминов</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.tools}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[200px]">
                    <a href="#platforms" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Платформы</a>
                    <a href="#mobile-apps" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Мобильные приложения</a>
                    <a href="#calculators" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Калькуляторы</a>
                    <a href="#analytics-tools" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Инструменты анализа</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.about}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px]">
                    <a href="#about-company" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">О компании</a>
                    <a href="#licenses" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Лицензии</a>
                    <a href="#contacts" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
                    <a href="#documents" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">Документы</a>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="hidden md:flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Globe className="h-5 w-5 mr-1" />
                  <span className="text-sm">{language.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {showLanguages && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                    {(Object.keys(languageLabels) as Array<'ru' | 'uk' | 'en' | 'tr' | 'zh'>).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLanguages(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          language === lang ? 'text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {languageLabels[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.nav.openAccount}
              </button>

              <button className="hidden md:block text-blue-600 font-semibold hover:text-blue-700">
                {t.nav.login}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
