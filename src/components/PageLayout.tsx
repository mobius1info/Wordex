import { ReactNode, useState, useEffect, cloneElement, isValidElement } from 'react';
import Header from './Header';

const translations = {
  ru: {
    nav: {
      beginners: 'Начинающим',
      analytics: 'Аналитика',
      help: 'Помощь',
      tools: 'Инструменты',
      about: 'О компании',
      openAccount: 'Открыть счет',
      login: 'Войти'
    },
    menuItems: {
      whereToStart: 'С чего начать',
      whatIsForex: 'Что такое форекс',
      forexAdvantages: 'Преимущества форекс',
      propTrading: 'Проп трейдинг',
      demoAccount: 'Учебный счет',
      accountTypes: 'Торговый счет',
      tradingSchedule: 'Расписание торгов',
      marketSurveys: 'Обзоры рынка',
      eventCalendar: 'Календарь событий',
      quotes: 'Котировки',
      dividends: 'Дивиденды на акции',
      howToTrade: 'Как торговать',
      depositWithdrawal: 'Пополнение и вывод средств',
      glossary: 'Словарь терминов',
      platforms: 'Платформы',
      tradingInstruments: 'Торговые инструменты',
      aboutCompany: 'О компании',
      companyNews: 'Новости компании',
      contacts: 'Контакты'
    }
  },
  uk: {
    nav: {
      beginners: 'Початківцям',
      analytics: 'Аналітика',
      help: 'Допомога',
      tools: 'Інструменти',
      about: 'Про компанію',
      openAccount: 'Відкрити рахунок',
      login: 'Увійти'
    },
    menuItems: {
      whereToStart: 'З чого почати',
      whatIsForex: 'Що таке форекс',
      forexAdvantages: 'Переваги форекс',
      propTrading: 'Проп трейдинг',
      demoAccount: 'Навчальний рахунок',
      accountTypes: 'Торговий рахунок',
      tradingSchedule: 'Розклад торгів',
      marketSurveys: 'Огляди ринку',
      eventCalendar: 'Календар подій',
      quotes: 'Котирування',
      dividends: 'Дивіденди на акції',
      howToTrade: 'Як торгувати',
      depositWithdrawal: 'Поповнення та виведення коштів',
      glossary: 'Словник термінів',
      platforms: 'Платформи',
      tradingInstruments: 'Торгові інструменти',
      aboutCompany: 'Про компанію',
      companyNews: 'Новини компанії',
      contacts: 'Контакти'
    }
  },
  en: {
    nav: {
      beginners: 'Beginners',
      analytics: 'Analytics',
      help: 'Help',
      tools: 'Tools',
      about: 'About',
      openAccount: 'Open Account',
      login: 'Login'
    },
    menuItems: {
      whereToStart: 'Where to Start',
      whatIsForex: 'What is Forex',
      forexAdvantages: 'Forex Advantages',
      propTrading: 'Prop Trading',
      demoAccount: 'Demo Account',
      accountTypes: 'Trading Account',
      tradingSchedule: 'Trading Schedule',
      marketSurveys: 'Market Surveys',
      eventCalendar: 'Event Calendar',
      quotes: 'Quotes',
      dividends: 'Stock Dividends',
      howToTrade: 'How to Trade',
      depositWithdrawal: 'Deposit and Withdrawal',
      glossary: 'Glossary',
      platforms: 'Platforms',
      tradingInstruments: 'Trading Instruments',
      aboutCompany: 'About Company',
      companyNews: 'Company News',
      contacts: 'Contacts'
    }
  },
  tr: {
    nav: {
      beginners: 'Yeni Başlayanlar',
      analytics: 'Analitik',
      help: 'Yardım',
      tools: 'Araçlar',
      about: 'Hakkında',
      openAccount: 'Hesap Aç',
      login: 'Giriş'
    },
    menuItems: {
      whereToStart: 'Nereden Başlanır',
      whatIsForex: 'Forex Nedir',
      forexAdvantages: 'Forex Avantajları',
      propTrading: 'Prop Trading',
      demoAccount: 'Demo Hesap',
      accountTypes: 'Ticaret Hesabı',
      tradingSchedule: 'İşlem Programı',
      marketSurveys: 'Piyasa Analizleri',
      eventCalendar: 'Etkinlik Takvimi',
      quotes: 'Fiyatlar',
      dividends: 'Hisse Temettüleri',
      howToTrade: 'Nasıl İşlem Yapılır',
      depositWithdrawal: 'Para Yatırma ve Çekme',
      glossary: 'Terimler Sözlüğü',
      platforms: 'Platformlar',
      tradingInstruments: 'İşlem Araçları',
      aboutCompany: 'Şirket Hakkında',
      companyNews: 'Şirket Haberleri',
      contacts: 'İletişim'
    }
  },
  zh: {
    nav: {
      beginners: '初学者',
      analytics: '分析',
      help: '帮助',
      tools: '工具',
      about: '关于',
      openAccount: '开户',
      login: '登录'
    },
    menuItems: {
      whereToStart: '从哪里开始',
      whatIsForex: '什么是外汇',
      forexAdvantages: '外汇优势',
      propTrading: '自营交易',
      demoAccount: '模拟账户',
      accountTypes: '交易账户',
      tradingSchedule: '交易时间表',
      marketSurveys: '市场调查',
      eventCalendar: '事件日历',
      quotes: '报价',
      dividends: '股票股息',
      howToTrade: '如何交易',
      depositWithdrawal: '存款和取款',
      glossary: '术语表',
      platforms: '平台',
      tradingInstruments: '交易工具',
      aboutCompany: '关于公司',
      companyNews: '公司新闻',
      contacts: '联系方式'
    }
  }
};

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [language, setLanguage] = useState<'ru' | 'uk' | 'en' | 'tr' | 'zh'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'ru' | 'uk' | 'en' | 'tr' | 'zh') || 'ru';
  });
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const childrenWithLanguage = isValidElement(children)
    ? cloneElement(children as React.ReactElement<any>, { language })
    : children;

  return (
    <div className="min-h-screen bg-white">
      <Header
        language={language}
        showLanguages={showLanguages}
        setShowLanguages={setShowLanguages}
        setLanguage={setLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        translations={translations}
      />
      {childrenWithLanguage}

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img src="/Logo copy copy copy copy.png" alt="Vantage Point" className="h-32 w-auto" />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {translations[language].menuItems.aboutCompany}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Торговля</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#copy-trading" className="hover:text-white transition-colors">Копи-трейдинг</a></li>
                <li><a href="/#forex" className="hover:text-white transition-colors">Forex/CFD</a></li>
                <li><a href="/platforms" className="hover:text-white transition-colors">{translations[language].menuItems.platforms}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about-company" className="hover:text-white transition-colors">{translations[language].menuItems.aboutCompany}</a></li>
                <li><a href="/company-news" className="hover:text-white transition-colors">{translations[language].menuItems.companyNews}</a></li>
                <li><a href="/analytics" className="hover:text-white transition-colors">{translations[language].nav.analytics}</a></li>
                <li><a href="/help" className="hover:text-white transition-colors">{translations[language].nav.help}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{translations[language].menuItems.contacts}</h4>
              <div className="space-y-2 text-sm mb-4">
                <p>Email: support@vantagepoint.com</p>
                <p>Поддержка: 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-xs text-gray-500 space-y-3">
              <p>
                <strong className="text-gray-400">Предупреждение о рисках:</strong> CFD являются сложными инструментами и несут высокий риск быстрой потери денег из-за кредитного плеча. Вы должны понимать, как работают CFD, и можете ли вы позволить себе рискнуть своими деньгами.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <p>&copy; 2011-2024 Vantage Point. Все права защищены.</p>
                <div className="flex items-center space-x-4 text-xs">
                  <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">Условия использования</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">Документы</a>
                  <span>•</span>
                  <a href="/admin" className="hover:text-white transition-colors">Admin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
