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
    </div>
  );
}
