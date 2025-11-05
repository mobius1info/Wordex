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
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => setActivePage(null)} className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/Logo.png" alt="Vantage Point" className="h-32" />
            </button>

            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-6">
                  {t.nav.beginners}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[200px]">
                    <button onClick={() => setActivePage('start')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.whereToStart}</button>
                    <button onClick={() => setActivePage('what-is-forex')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.whatIsForex}</button>
                    <button onClick={() => setActivePage('advantages')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.forexAdvantages}</button>
                    <button onClick={() => setActivePage('demo')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.demoAccount}</button>
                    <button onClick={() => setActivePage('account-types')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.accountTypes}</button>
                    <button onClick={() => { setActivePage(null); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.literature}</button>
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
                    <button onClick={() => setActivePage('trading-schedule')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.tradingSchedule}</button>
                    <button onClick={() => setActivePage('market-surveys')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.marketSurveys}</button>
                    <button onClick={() => setActivePage('event-calendar')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.eventCalendar}</button>
                    <button onClick={() => setActivePage('quotes')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.quotes}</button>
                    <button onClick={() => setActivePage('dividends')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.dividends}</button>
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
                    <button onClick={() => setActivePage('how-to-trade')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.howToTrade}</button>
                    <button onClick={() => setActivePage('deposit-withdrawal')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.depositWithdrawal}</button>
                    <button onClick={() => setActivePage('glossary')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.glossary}</button>
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
                    <button onClick={() => setActivePage('platforms')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.platforms}</button>
                    <button onClick={() => setActivePage('platforms')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.mobileApps}</button>
                    <button onClick={() => setActivePage('account-types')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.accountTypes}</button>
                    <button onClick={() => setActivePage('trading-instruments')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.tradingInstruments}</button>
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
                    <button onClick={() => setActivePage('about-company')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.aboutCompany}</button>
                    <button onClick={() => setActivePage('company-news')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.companyNews}</button>
                    <button onClick={() => setActivePage('contacts')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 transition-colors">{t.menuItems.contacts}</button>
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
