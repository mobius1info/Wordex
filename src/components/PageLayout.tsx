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
      literature: 'Литература',
      tradingSchedule: 'Расписание торгов',
      marketSurveys: 'Обзоры рынка',
      eventCalendar: 'Календарь событий',
      quotes: 'Котировки',
      dividends: 'Дивиденды на акции',
      howToTrade: 'Как торговать',
      depositWithdrawal: 'Пополнение и вывод средств',
      glossary: 'Словарь терминов',
      platforms: 'Платформы',
      mobileApps: 'Мобильные приложения',
      tradingInstruments: 'Торговые инструменты',
      aboutCompany: 'О компании',
      companyNews: 'Новости компании',
      contacts: 'Контакты'
    }
  }
};

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [language, setLanguage] = useState<'ru' | 'uk' | 'en' | 'tr' | 'zh'>('ru');
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
