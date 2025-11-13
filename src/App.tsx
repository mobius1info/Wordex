import { useState, useEffect } from 'react';
import {
  Globe, DollarSign, Users,
  Smartphone, Monitor, Award, BarChart3, BookOpen, HelpCircle, Settings,
  Copy, Zap, Gift, CreditCard, ArrowRight, CheckCircle, Star, Download,
  Clock, Target, Database, LineChart, ChevronLeft, ChevronRight
} from 'lucide-react';
import Header from './components/Header';

const translations = {
  ru: {
    topBar: {
      years: '13+ лет на рынке',
      clients: '350,000+ клиентов',
      countries: '50+ стран',
      support: 'Поддержка 24/7'
    },
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
    },
    hero: {
      slides: [
        {
          badge: 'Популярно',
          title: 'Копи-трейдинг',
          subtitle: 'Следуйте за успешными трейдерами и автоматически копируйте их сделки'
        },
        {
          badge: 'Выгодно',
          title: 'Бонус 100%',
          subtitle: 'Удвойте свой первый депозит и начните с большим капиталом'
        },
        {
          badge: 'Возможность',
          title: 'Проп Трейдинг',
          subtitle: 'Пройди 3 этапа челленджа и получи в управление сумму до $25,000 - разделяя прибыль 80% на 20%'
        },
      ],
      learnMore: 'Узнать больше',
      openAccount: 'Открыть счет',
      takeChallenge: 'Пройти челлендж'
    },
    stats: {
      minDeposit: 'Минимальный депозит',
      yearsMarket: 'Лет на рынке',
      activeClients: 'Активных клиентов',
      countries: 'Стран присутствия'
    },
    offers: {
      title: 'Специальные предложения',
      subtitle: 'Выгодные бонусы для наших клиентов',
      bonus100: {
        title: 'Бонус 100%',
        description: 'Удвойте свой первый депозит. Получите 100% бонус на счет при пополнении',
        button: 'Получить бонус'
      },
      copystart: {
        title: 'Copystart',
        description: 'Бонус для начинающих в копи-трейдинге. Начните копировать сделки профессионалов',
        button: 'Начать копирование'
      }
    },
    trading: {
      title: 'Торговые возможности',
      subtitle: 'Выберите оптимальный способ торговли',
      copy: {
        title: 'Копи-трейдинг',
        description: 'Автоматически копируйте сделки успешных трейдеров. Без опыта и специальных знаний.',
        feature1: 'Более 100 успешных трейдеров',
        feature2: 'Детальная статистика',
        feature3: 'Минимальные вложения от $1',
        button: 'Начать копирование'
      },
      forex: {
        title: 'Forex/CFD',
        description: 'Классическая торговля на Forex и CFD. Доступ к глобальным рынкам.',
        feature1: '120+ валютных пар',
        feature2: 'Спреды от 0 пунктов',
        feature3: 'Кредитное плечо до 1:2000',
        button: 'Начать торговлю'
      }
    },
    platforms: {
      title: 'Торговая платформа',
      subtitle: 'MetaTrader 4 и MetaTrader 5 - самые популярные платформы в мире',
      feature1: {
        title: 'Для всех устройств',
        description: 'Windows, Mac, Android, iOS, Linux, WebTrader'
      },
      feature2: {
        title: 'Продвинутый анализ',
        description: 'Технические индикаторы и графические инструменты'
      },
      feature3: {
        title: 'Автоматическая торговля',
        description: 'Поддержка Expert Advisors и торговых роботов'
      },
      desktop: 'Desktop',
      mobile: 'Mobile',
      web: 'Web',
      vps: 'VPS'
    },
    payment: {
      title: 'Способы пополнения и вывода',
      subtitle: 'Удобные и быстрые методы работы со средствами',
      cards: 'Банковские карты',
      emoney: 'Электронные деньги',
      crypto: 'Криптовалюты',
      mobile: 'Мобильные платежи'
    },
    education: {
      title: 'Обучение и поддержка',
      subtitle: 'Все необходимые знания для успешной торговли',
      courses: {
        title: 'Обучающие курсы',
        description: 'Бесплатные видеокурсы и вебинары для начинающих и опытных трейдеров',
        button: 'Смотреть курсы'
      },
      analytics: {
        title: 'Аналитика',
        description: 'Ежедневные обзоры рынков, торговые идеи и прогнозы от экспертов',
        button: 'Читать аналитику'
      },
      tools: {
        title: 'Инструменты',
        description: 'Калькуляторы, экономический календарь и другие полезные инструменты',
        button: 'Использовать'
      },
      support: {
        title: 'Поддержка 24/7',
        description: 'Профессиональная служба поддержки готова помочь в любое время',
        button: 'Связаться'
      }
    },
    cta: {
      title: 'Начните торговать уже сегодня',
      subtitle: 'Откройте счет за 2 минуты и получите доступ к мировым финансовым рынкам',
      openReal: 'Открыть реальный счет',
      tryDemo: 'Попробовать демо',
      features: 'Минимальный депозит всего $1 • Бонусы до 100% • Поддержка 24/7'
    },
    footer: {
      description: 'Надежный брокер с большим опытом работы на финансовых рынках',
      trading: 'Торговля',
      information: 'Информация',
      contacts: 'Контакты',
      copyTrading: 'Копи-трейдинг',
      forexCFD: 'Forex/CFD',
      platforms: 'Торговая платформа',
      about: 'О компании',
      documents: 'Документы',
      analytics: 'Аналитика',
      education: 'Обучение',
      support: 'Поддержка: 24/7',
      riskWarning: 'CFD являются сложными инструментами и несут высокий риск быстрой потери денег из-за использования кредитного плеча. Вам следует оценить, понимаете ли вы, как работают CFD, и можете ли вы позволить себе принять высокий риск потери своих денег.',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования'
    }
  },
  uk: {
    topBar: {
      years: '13+ років на ринку',
      clients: '350,000+ клієнтів',
      countries: '50+ країн',
      support: 'Підтримка 24/7'
    },
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
    },
    hero: {
      slides: [
        {
          badge: 'Популярно',
          title: 'Копі-трейдинг',
          subtitle: 'Слідуйте за успішними трейдерами та автоматично копіюйте їх угоди'
        },
        {
          badge: 'Вигідно',
          title: 'Бонус 100%',
          subtitle: 'Подвойте свій перший депозит і почніть з більшим капіталом'
        },
        {
          badge: 'Можливість',
          title: 'Проп Трейдинг',
          subtitle: 'Пройди 3 етапи челленджу і отримай можливість торгувати на гроші (3000-5000-10000-25000) компанії розділяючи прибуток 50 - 50'
        },
      ],
      learnMore: 'Дізнатися більше',
      openAccount: 'Відкрити рахунок'
    },
    stats: {
      minDeposit: 'Мінімальний депозит',
      yearsMarket: 'Років на ринку',
      activeClients: 'Активних клієнтів',
      countries: 'Країн присутності'
    },
    offers: {
      title: 'Спеціальні пропозиції',
      subtitle: 'Вигідні бонуси для наших клієнтів',
      bonus100: {
        title: 'Бонус 100%',
        description: 'Подвойте свій перший депозит. Отримайте 100% бонус на рахунок при поповненні',
        button: 'Отримати бонус'
      },
      copystart: {
        title: 'Copystart',
        description: 'Бонус для початківців у копі-трейдингу. Почніть копіювати угоди професіоналів',
        button: 'Почати копіювання'
      }
    },
    trading: {
      title: 'Торгові можливості',
      subtitle: 'Оберіть оптимальний спосіб торгівлі',
      copy: {
        title: 'Копі-трейдинг',
        description: 'Автоматично копіюйте угоди успішних трейдерів. Без досвіду і спеціальних знань.',
        feature1: 'Понад 100 успішних трейдерів',
        feature2: 'Детальна статистика',
        feature3: 'Мінімальні вкладення від $1',
        button: 'Почати копіювання'
      },
      forex: {
        title: 'Forex/CFD',
        description: 'Класична торгівля на Forex і CFD. Доступ до глобальних ринків.',
        feature1: '120+ валютних пар',
        feature2: 'Спреди від 0 пунктів',
        feature3: 'Кредитне плече до 1:2000',
        button: 'Почати торгівлю'
      }
    },
    platforms: {
      title: 'Торгові платформи',
      subtitle: 'MetaTrader 4 і MetaTrader 5 - найпопулярніші платформи у світі',
      feature1: {
        title: 'Для всіх пристроїв',
        description: 'Windows, Mac, Android, iOS, Linux, WebTrader'
      },
      feature2: {
        title: 'Просунутий аналіз',
        description: 'Технічні індикатори та графічні інструменти'
      },
      feature3: {
        title: 'Автоматична торгівля',
        description: 'Підтримка Expert Advisors і торгових роботів'
      },
      desktop: 'Desktop',
      mobile: 'Mobile',
      web: 'Web',
      vps: 'VPS'
    },
    payment: {
      title: 'Способи поповнення та виведення',
      subtitle: 'Зручні та швидкі методи роботи з коштами',
      cards: 'Банківські карти',
      emoney: 'Електронні гроші',
      crypto: 'Криптовалюти',
      mobile: 'Мобільні платежі'
    },
    education: {
      title: 'Навчання та підтримка',
      subtitle: 'Всі необхідні знання для успішної торгівлі',
      courses: {
        title: 'Навчальні курси',
        description: 'Безкоштовні відеокурси та вебінари для початківців та досвідчених трейдерів',
        button: 'Дивитись курси'
      },
      analytics: {
        title: 'Аналітика',
        description: 'Щоденні огляди ринків, торгові ідеї та прогнози від експертів',
        button: 'Читати аналітику'
      },
      tools: {
        title: 'Інструменти',
        description: 'Калькулятори, економічний календар та інші корисні інструменти',
        button: 'Використовувати'
      },
      support: {
        title: 'Підтримка 24/7',
        description: 'Професійна служба підтримки готова допомогти у будь-який час',
        button: "Зв'язатися"
      }
    },
    cta: {
      title: 'Почніть торгувати вже сьогодні',
      subtitle: 'Відкрийте рахунок за 2 хвилини та отримайте доступ до світових фінансових ринків',
      openReal: 'Відкрити реальний рахунок',
      tryDemo: 'Спробувати демо',
      features: 'Мінімальний депозит лише $1 • Бонуси до 100% • Підтримка 24/7'
    },
    footer: {
      description: 'Надійний брокер з великим досвідом роботи на фінансових ринках',
      trading: 'Торгівля',
      information: 'Інформація',
      contacts: 'Контакти',
      copyTrading: 'Копі-трейдинг',
      forexCFD: 'Forex/CFD',
      platforms: 'Торгові платформи',
      about: 'Про компанію',
      documents: 'Документи',
      analytics: 'Аналітика',
      education: 'Навчання',
      support: 'Підтримка: 24/7',
      riskWarning: 'CFD є складними інструментами і несуть високий ризик швидкої втрати грошей через використання кредитного плеча. Вам слід оцінити, чи розумієте ви, як працюють CFD, і чи можете ви дозволити собі прийняти високий ризик втрати своїх грошей.',
      rights: 'Всі права захищені.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання'
    }
  },
  en: {
    topBar: {
      years: '13+ years on the market',
      clients: '350,000+ clients',
      countries: '50+ countries',
      support: 'Support 24/7'
    },
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
      accountTypes: 'Account Types',
      tradingSchedule: 'Trading Schedule',
      marketSurveys: 'Market Surveys',
      eventCalendar: 'Event Calendar',
      quotes: 'Quotes',
      dividends: 'Stock Dividends',
      howToTrade: 'How to Trade',
      depositWithdrawal: 'Deposit & Withdrawal',
      glossary: 'Glossary',
      platforms: 'Platforms',
      tradingInstruments: 'Trading Instruments',
      aboutCompany: 'About Company',
      companyNews: 'Company News',
      contacts: 'Contacts'
    },
    hero: {
      slides: [
        {
          badge: 'Popular',
          title: 'Copy Trading',
          subtitle: 'Follow successful traders and automatically copy their trades'
        },
        {
          badge: 'Profitable',
          title: '100% Bonus',
          subtitle: 'Double your first deposit and start with bigger capital'
        },
        {
          badge: 'Opportunity',
          title: 'Prop Trading',
          subtitle: 'Pass 3 stages of challenge and get up to $25,000 to manage - sharing profit 80% to 20%'
        },
      ],
      learnMore: 'Learn More',
      openAccount: 'Open Account',
      takeChallenge: 'Take Challenge'
    },
    stats: {
      minDeposit: 'Minimum Deposit',
      yearsMarket: 'Years in Market',
      activeClients: 'Active Clients',
      countries: 'Countries'
    },
    offers: {
      title: 'Special Offers',
      subtitle: 'Profitable bonuses for our clients',
      bonus100: {
        title: '100% Bonus',
        description: 'Double your first deposit. Get 100% bonus on your account when depositing',
        button: 'Get Bonus'
      },
      copystart: {
        title: 'Copystart',
        description: 'Bonus for beginners in copy trading. Start copying professional trades',
        button: 'Start Copying'
      }
    },
    trading: {
      title: 'Trading Opportunities',
      subtitle: 'Choose the optimal trading method',
      copy: {
        title: 'Copy Trading',
        description: 'Automatically copy trades from successful traders. No experience or special knowledge needed.',
        feature1: 'Over 100 successful traders',
        feature2: 'Detailed statistics',
        feature3: 'Minimum investment from $1',
        button: 'Start Copying'
      },
      forex: {
        title: 'Forex/CFD',
        description: 'Classic Forex and CFD trading. Access to global markets.',
        feature1: '120+ currency pairs',
        feature2: 'Spreads from 0 pips',
        feature3: 'Leverage up to 1:2000',
        button: 'Start Trading'
      }
    },
    platforms: {
      title: 'Trading Platforms',
      subtitle: 'MetaTrader 4 and MetaTrader 5 - the most popular platforms in the world',
      feature1: {
        title: 'For All Devices',
        description: 'Windows, Mac, Android, iOS, Linux, WebTrader'
      },
      feature2: {
        title: 'Advanced Analysis',
        description: 'Technical indicators and graphical tools'
      },
      feature3: {
        title: 'Automated Trading',
        description: 'Support for Expert Advisors and trading robots'
      },
      desktop: 'Desktop',
      mobile: 'Mobile',
      web: 'Web',
      vps: 'VPS'
    },
    payment: {
      title: 'Deposit and Withdrawal Methods',
      subtitle: 'Convenient and fast methods for managing funds',
      cards: 'Bank Cards',
      emoney: 'E-Money',
      crypto: 'Cryptocurrencies',
      mobile: 'Mobile Payments'
    },
    education: {
      title: 'Education and Support',
      subtitle: 'All the knowledge you need for successful trading',
      courses: {
        title: 'Training Courses',
        description: 'Free video courses and webinars for beginners and experienced traders',
        button: 'Watch Courses'
      },
      analytics: {
        title: 'Analytics',
        description: 'Daily market reviews, trading ideas and forecasts from experts',
        button: 'Read Analytics'
      },
      tools: {
        title: 'Tools',
        description: 'Calculators, economic calendar and other useful tools',
        button: 'Use Tools'
      },
      support: {
        title: 'Support 24/7',
        description: 'Professional support service ready to help at any time',
        button: 'Contact Us'
      }
    },
    cta: {
      title: 'Start Trading Today',
      subtitle: 'Open an account in 2 minutes and get access to global financial markets',
      openReal: 'Open Real Account',
      tryDemo: 'Try Demo',
      features: 'Minimum deposit only $1 • Bonuses up to 100% • Support 24/7'
    },
    footer: {
      description: 'Reliable broker with extensive experience in financial markets',
      trading: 'Trading',
      information: 'Information',
      contacts: 'Contacts',
      copyTrading: 'Copy Trading',
      forexCFD: 'Forex/CFD',
      platforms: 'Trading Platforms',
      about: 'About',
      documents: 'Documents',
      analytics: 'Analytics',
      education: 'Education',
      support: 'Support: 24/7',
      riskWarning: 'CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  },
  tr: {
    topBar: {
      years: '13+ yıl piyasada',
      clients: '350,000+ müşteri',
      countries: '50+ ülke',
      support: 'Destek 24/7'
    },
    nav: {
      beginners: 'Yeni Başlayanlar',
      analytics: 'Analitik',
      help: 'Yardım',
      tools: 'Araçlar',
      about: 'Hakkımızda',
      openAccount: 'Hesap Aç',
      login: 'Giriş'
    },
    menuItems: {
      whereToStart: 'Nereden Başlamalı',
      whatIsForex: 'Forex Nedir',
      forexAdvantages: 'Forex Avantajları',
      propTrading: 'Prop Trading',
      demoAccount: 'Demo Hesap',
      accountTypes: 'Hesap Türleri',
      tradingSchedule: 'Ticaret Programı',
      marketSurveys: 'Piyasa İncelemeleri',
      eventCalendar: 'Etkinlik Takvimi',
      quotes: 'Kotasyonlar',
      dividends: 'Hisse Temettüleri',
      howToTrade: 'Nasıl Ticaret Yapılır',
      depositWithdrawal: 'Para Yatırma ve Çekme',
      glossary: 'Terimler Sözlüğü',
      platforms: 'Platformlar',
      tradingInstruments: 'Ticaret Araçları',
      aboutCompany: 'Şirket Hakkında',
      companyNews: 'Şirket Haberleri',
      contacts: 'İletişim'
    },
    hero: {
      slides: [
        {
          badge: 'Popüler',
          title: 'Kopya Ticaret',
          subtitle: 'Başarılı yatırımcıları takip edin ve işlemlerini otomatik olarak kopyalayın'
        },
        {
          badge: 'Karlı',
          title: '%100 Bonus',
          subtitle: 'İlk depozitonuzu ikiye katlayın ve daha büyük sermaye ile başlayın'
        },
        {
          badge: 'Fırsat',
          title: 'Prop Trading',
          subtitle: '3 aşamalı challenge\'ı tamamlayın ve yönetmek üzere 25.000$\'a kadar kazanın - karı %80 - %20 paylaşın'
        },
      ],
      learnMore: 'Daha Fazla Bilgi',
      openAccount: 'Hesap Aç',
      takeChallenge: 'Challenge\'a Katıl'
    },
    stats: {
      minDeposit: 'Minimum Depozito',
      yearsMarket: 'Piyasada Yıl',
      activeClients: 'Aktif Müşteri',
      countries: 'Ülke'
    },
    offers: {
      title: 'Özel Teklifler',
      subtitle: 'Müşterilerimiz için karlı bonuslar',
      bonus100: {
        title: '%100 Bonus',
        description: 'İlk depozitonuzu ikiye katlayın. Para yatırdığınızda hesabınıza %100 bonus alın',
        button: 'Bonus Al'
      },
      copystart: {
        title: 'Copystart',
        description: 'Kopya ticarette yeni başlayanlar için bonus. Profesyonel işlemleri kopyalamaya başlayın',
        button: 'Kopyalamaya Başla'
      }
    },
    trading: {
      title: 'Ticaret Fırsatları',
      subtitle: 'En uygun ticaret yöntemini seçin',
      copy: {
        title: 'Kopya Ticaret',
        description: 'Başarılı yatırımcıların işlemlerini otomatik olarak kopyalayın. Deneyim veya özel bilgi gerekmez.',
        feature1: '100\'den fazla başarılı yatırımcı',
        feature2: 'Detaylı istatistikler',
        feature3: '1$\'dan başlayan minimum yatırım',
        button: 'Kopyalamaya Başla'
      },
      forex: {
        title: 'Forex/CFD',
        description: 'Klasik Forex ve CFD ticareti. Küresel piyasalara erişim.',
        feature1: '120+ döviz çifti',
        feature2: '0 pipten başlayan spreadler',
        feature3: '1:2000\'e kadar kaldıraç',
        button: 'Ticarete Başla'
      }
    },
    platforms: {
      title: 'Ticaret Platformları',
      subtitle: 'MetaTrader 4 ve MetaTrader 5 - dünyanın en popüler platformları',
      feature1: {
        title: 'Tüm Cihazlar İçin',
        description: 'Windows, Mac, Android, iOS, Linux, WebTrader'
      },
      feature2: {
        title: 'Gelişmiş Analiz',
        description: 'Teknik göstergeler ve grafik araçları'
      },
      feature3: {
        title: 'Otomatik Ticaret',
        description: 'Expert Advisors ve ticaret robotları desteği'
      },
      desktop: 'Masaüstü',
      mobile: 'Mobil',
      web: 'Web',
      vps: 'VPS'
    },
    payment: {
      title: 'Para Yatırma ve Çekme Yöntemleri',
      subtitle: 'Fonlarınızı yönetmek için hızlı ve kolay yöntemler',
      cards: 'Banka Kartları',
      emoney: 'Elektronik Para',
      crypto: 'Kripto Paralar',
      mobile: 'Mobil Ödemeler'
    },
    education: {
      title: 'Eğitim ve Destek',
      subtitle: 'Başarılı ticaret için ihtiyacınız olan tüm bilgiler',
      courses: {
        title: 'Eğitim Kursları',
        description: 'Yeni başlayanlar ve deneyimli yatırımcılar için ücretsiz video kursları ve webinarlar',
        button: 'Kursları İzle'
      },
      analytics: {
        title: 'Analitik',
        description: 'Uzmanlardan günlük piyasa incelemeleri, ticaret fikirleri ve tahminler',
        button: 'Analitik Oku'
      },
      tools: {
        title: 'Araçlar',
        description: 'Hesap makineleri, ekonomik takvim ve diğer yararlı araçlar',
        button: 'Kullan'
      },
      support: {
        title: 'Destek 24/7',
        description: 'Profesyonel destek hizmeti her zaman yardıma hazır',
        button: 'İletişime Geç'
      }
    },
    cta: {
      title: 'Bugün Ticarete Başlayın',
      subtitle: '2 dakikada hesap açın ve küresel finansal piyasalara erişim kazanın',
      openReal: 'Gerçek Hesap Aç',
      tryDemo: 'Demo Dene',
      features: 'Sadece 1$ minimum depozito • %100\'e kadar bonus • 7/24 destek'
    },
    footer: {
      description: 'Finansal piyasalarda geniş deneyime sahip güvenilir broker',
      trading: 'Ticaret',
      information: 'Bilgi',
      contacts: 'İletişim',
      copyTrading: 'Kopya Ticaret',
      forexCFD: 'Forex/CFD',
      platforms: 'Ticaret Platformları',
      about: 'Hakkımızda',
      documents: 'Belgeler',
      analytics: 'Analitik',
      education: 'Eğitim',
      support: 'Destek: 24/7',
      riskWarning: 'CFD\'ler karmaşık araçlardır ve kaldıraç nedeniyle hızlı para kaybetme yüksek riskini taşır. CFD\'lerin nasıl çalıştığını anlayıp anlamadığınızı ve paranızı kaybetme yüksek riskini alıp alamayacağınızı düşünmelisiniz.',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları'
    }
  },
  zh: {
    topBar: {
      years: '13+年市场经验',
      clients: '350,000+客户',
      countries: '50+个国家',
      support: '24/7支持'
    },
    nav: {
      beginners: '初学者',
      analytics: '分析',
      help: '帮助',
      tools: '工具',
      about: '关于我们',
      openAccount: '开设账户',
      login: '登录'
    },
    menuItems: {
      whereToStart: '从哪里开始',
      whatIsForex: '什么是外汇',
      forexAdvantages: '外汇优势',
      propTrading: '自营交易',
      demoAccount: '模拟账户',
      accountTypes: '账户类型',
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
    },
    hero: {
      slides: [
        {
          badge: '热门',
          title: '复制交易',
          subtitle: '跟随成功的交易者并自动复制他们的交易'
        },
        {
          badge: '优惠',
          title: '100%奖金',
          subtitle: '首次存款翻倍，以更大的资本开始'
        },
        {
          badge: '机会',
          title: '自营交易',
          subtitle: '通过3阶段挑战，获得高达25,000美元的管理资金 - 分享80% - 20%的利润'
        },
      ],
      learnMore: '了解更多',
      openAccount: '开设账户',
      takeChallenge: '参加挑战'
    },
    stats: {
      minDeposit: '最低存款',
      yearsMarket: '市场年数',
      activeClients: '活跃客户',
      countries: '覆盖国家'
    },
    offers: {
      title: '特别优惠',
      subtitle: '为我们的客户提供丰厚的奖金',
      bonus100: {
        title: '100%奖金',
        description: '首次存款翻倍。存款时获得100%账户奖金',
        button: '获取奖金'
      },
      copystart: {
        title: 'Copystart',
        description: '复制交易初学者奖金。开始复制专业交易',
        button: '开始复制'
      }
    },
    trading: {
      title: '交易机会',
      subtitle: '选择最佳交易方式',
      copy: {
        title: '复制交易',
        description: '自动复制成功交易者的交易。无需经验或专业知识。',
        feature1: '100多位成功交易者',
        feature2: '详细统计',
        feature3: '最低投资1美元起',
        button: '开始复制'
      },
      forex: {
        title: '外汇/差价合约',
        description: '经典外汇和差价合约交易。访问全球市场。',
        feature1: '120+货币对',
        feature2: '点差从0点起',
        feature3: '杠杆高达1:2000',
        button: '开始交易'
      }
    },
    platforms: {
      title: '交易平台',
      subtitle: 'MetaTrader 4和MetaTrader 5 - 世界上最受欢迎的平台',
      feature1: {
        title: '适用于所有设备',
        description: 'Windows, Mac, Android, iOS, Linux, WebTrader'
      },
      feature2: {
        title: '高级分析',
        description: '技术指标和图形工具'
      },
      feature3: {
        title: '自动交易',
        description: '支持EA和交易机器人'
      },
      desktop: '桌面版',
      mobile: '移动版',
      web: '网页版',
      vps: 'VPS'
    },
    payment: {
      title: '存款和提款方式',
      subtitle: '便捷快速的资金管理方法',
      cards: '银行卡',
      emoney: '电子货币',
      crypto: '加密货币',
      mobile: '移动支付'
    },
    education: {
      title: '教育和支持',
      subtitle: '成功交易所需的所有知识',
      courses: {
        title: '培训课程',
        description: '为初学者和经验丰富的交易者提供免费视频课程和网络研讨会',
        button: '观看课程'
      },
      analytics: {
        title: '分析',
        description: '来自专家的每日市场评论、交易理念和预测',
        button: '阅读分析'
      },
      tools: {
        title: '工具',
        description: '计算器、经济日历和其他有用工具',
        button: '使用工具'
      },
      support: {
        title: '24/7支持',
        description: '专业支持服务随时准备帮助',
        button: '联系我们'
      }
    },
    cta: {
      title: '今天就开始交易',
      subtitle: '2分钟开设账户，获得全球金融市场访问权',
      openReal: '开设真实账户',
      tryDemo: '试用演示',
      features: '最低存款仅1美元 • 高达100%奖金 • 24/7支持'
    },
    footer: {
      description: '在金融市场拥有丰富经验的可靠经纪商',
      trading: '交易',
      information: '信息',
      contacts: '联系方式',
      copyTrading: '复制交易',
      forexCFD: '外汇/差价合约',
      platforms: '交易平台',
      about: '关于我们',
      documents: '文档',
      analytics: '分析',
      education: '教育',
      support: '支持：24/7',
      riskWarning: '差价合约是复杂的工具，由于杠杆作用，存在快速亏损的高风险。您应该考虑是否了解差价合约的运作方式，以及是否能够承受损失资金的高风险。',
      rights: '版权所有。',
      privacy: '隐私政策',
      terms: '使用条款'
    }
  }
};

function App() {
  const [language, setLanguage] = useState<'ru' | 'uk' | 'en' | 'tr' | 'zh'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'ru' | 'uk' | 'en' | 'tr' | 'zh') || 'ru';
  });
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const t = translations[language] || translations.ru;

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [language, t.hero.slides.length]);

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
      <main>
        <section className="relative h-[600px] sm:h-[700px] lg:h-[750px] overflow-hidden">
          {t.hero.slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div className={`h-full relative ${
                index === 0 ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' :
                index === 1 ? 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900' :
                index === 2 ? 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900' :
                'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'
              } flex items-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>
                {index === 0 && (
                  <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
                    <div className="flex items-center gap-12">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-2xl animate-pulse-slow mb-4">
                          <div className="text-white font-bold text-sm mb-2">Master Trader</div>
                          <div className="bg-white/20 rounded-lg p-3 mb-2">
                            <div className="text-white text-xs">EUR/USD</div>
                            <div className="text-green-300 font-bold text-lg">BUY</div>
                          </div>
                          <div className="flex justify-between text-white text-xs">
                            <span>+125 pips</span>
                            <span>$2,500</span>
                          </div>
                        </div>
                        <div className="bg-blue-500/30 rounded-lg px-4 py-2">
                          <div className="text-white text-xs font-semibold">Account #1</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <div className="animate-arrow-flow">
                          <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-300">
                            <path d="M 5 20 L 60 20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                            <polygon points="60,15 75,20 60,25" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="animate-arrow-flow" style={{ animationDelay: '0.5s' }}>
                          <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-300">
                            <path d="M 5 20 L 60 20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                            <polygon points="60,15 75,20 60,25" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="animate-arrow-flow" style={{ animationDelay: '1s' }}>
                          <svg width="80" height="40" viewBox="0 0 80 40" className="text-blue-300">
                            <path d="M 5 20 L 60 20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                            <polygon points="60,15 75,20 60,25" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 shadow-xl animate-trade-signal">
                          <div className="text-white text-xs font-semibold mb-1">Follower #1</div>
                          <div className="text-white text-xs">Copy: 100%</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 shadow-xl animate-trade-signal" style={{ animationDelay: '0.5s' }}>
                          <div className="text-white text-xs font-semibold mb-1">Follower #2</div>
                          <div className="text-white text-xs">Copy: 75%</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 shadow-xl animate-trade-signal" style={{ animationDelay: '1s' }}>
                          <div className="text-white text-xs font-semibold mb-1">Follower #3</div>
                          <div className="text-white text-xs">Copy: 50%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 0 && (
                  <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-3 shadow-xl animate-pulse-slow">
                        <div className="text-white text-xs font-bold">Master</div>
                      </div>
                      <div className="animate-arrow-flow">
                        <svg width="40" height="20" viewBox="0 0 40 20" className="text-blue-300">
                          <path d="M 2 10 L 30 10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                          <polygon points="30,7 38,10 30,13" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 shadow-xl animate-trade-signal">
                          <div className="text-white text-xs">F1</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 shadow-xl animate-trade-signal" style={{ animationDelay: '0.5s' }}>
                          <div className="text-white text-xs">F2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
                    <div className="flex items-end justify-around h-full px-8 pb-20">
                      <div className="animate-candle" style={{ animationDelay: '0s' }}>
                        <div className="w-2 bg-green-600" style={{ height: '180px' }}></div>
                        <div className="w-8 bg-green-500 -ml-3 mt-2" style={{ height: '100px' }}></div>
                        <div className="w-2 bg-green-600 ml-3" style={{ height: '80px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '0.5s' }}>
                        <div className="w-2 bg-red-600" style={{ height: '120px' }}></div>
                        <div className="w-8 bg-red-500 -ml-3 mt-2" style={{ height: '140px' }}></div>
                        <div className="w-2 bg-red-600 ml-3" style={{ height: '60px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '1s' }}>
                        <div className="w-2 bg-green-600" style={{ height: '90px' }}></div>
                        <div className="w-8 bg-green-500 -ml-3 mt-2" style={{ height: '160px' }}></div>
                        <div className="w-2 bg-green-600 ml-3" style={{ height: '100px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '1.5s' }}>
                        <div className="w-2 bg-green-600" style={{ height: '150px' }}></div>
                        <div className="w-8 bg-green-500 -ml-3 mt-2" style={{ height: '120px' }}></div>
                        <div className="w-2 bg-green-600 ml-3" style={{ height: '70px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '2s' }}>
                        <div className="w-2 bg-red-600" style={{ height: '100px' }}></div>
                        <div className="w-8 bg-red-500 -ml-3 mt-2" style={{ height: '110px' }}></div>
                        <div className="w-2 bg-red-600 ml-3" style={{ height: '90px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '2.5s' }}>
                        <div className="w-2 bg-green-600" style={{ height: '140px' }}></div>
                        <div className="w-8 bg-green-500 -ml-3 mt-2" style={{ height: '180px' }}></div>
                        <div className="w-2 bg-green-600 ml-3" style={{ height: '60px' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
                    <div className="flex items-end justify-center gap-3 h-32">
                      <div className="animate-candle" style={{ animationDelay: '0s' }}>
                        <div className="w-1 bg-green-600" style={{ height: '60px' }}></div>
                        <div className="w-4 bg-green-500 -ml-1.5" style={{ height: '40px' }}></div>
                        <div className="w-1 bg-green-600 ml-1.5" style={{ height: '30px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '0.5s' }}>
                        <div className="w-1 bg-red-600" style={{ height: '40px' }}></div>
                        <div className="w-4 bg-red-500 -ml-1.5" style={{ height: '50px' }}></div>
                        <div className="w-1 bg-red-600 ml-1.5" style={{ height: '20px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '1s' }}>
                        <div className="w-1 bg-green-600" style={{ height: '50px' }}></div>
                        <div className="w-4 bg-green-500 -ml-1.5" style={{ height: '60px' }}></div>
                        <div className="w-1 bg-green-600 ml-1.5" style={{ height: '35px' }}></div>
                      </div>
                      <div className="animate-candle" style={{ animationDelay: '1.5s' }}>
                        <div className="w-1 bg-green-600" style={{ height: '55px' }}></div>
                        <div className="w-4 bg-green-500 -ml-1.5" style={{ height: '45px' }}></div>
                        <div className="w-1 bg-green-600 ml-1.5" style={{ height: '25px' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col gap-4">
                        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-2xl animate-bounce-slow">
                          <div className="text-white font-bold text-lg mb-2">Stage 1</div>
                          <div className="bg-white/20 rounded-lg p-3 mb-2">
                            <div className="text-white text-sm font-semibold">Target: 8%</div>
                            <div className="text-white/80 text-xs">Max DD: 5%</div>
                          </div>
                          <div className="text-white text-xs">$3,000</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="animate-pulse-slow">
                          <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-300">
                            <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                            <polygon points="25,30 35,35 35,25" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 shadow-2xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                          <div className="text-white font-bold text-lg mb-2">Stage 2</div>
                          <div className="bg-white/20 rounded-lg p-3 mb-2">
                            <div className="text-white text-sm font-semibold">Target: 5%</div>
                            <div className="text-white/80 text-xs">Max DD: 5%</div>
                          </div>
                          <div className="text-white text-xs">$5,000</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="animate-pulse-slow" style={{ animationDelay: '0.3s' }}>
                          <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-300">
                            <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                            <polygon points="25,30 35,35 35,25" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-6 shadow-2xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                          <div className="text-white font-bold text-lg mb-2">Stage 3</div>
                          <div className="bg-white/20 rounded-lg p-3 mb-2">
                            <div className="text-white text-sm font-semibold">Funded!</div>
                            <div className="text-white/80 text-xs">80/20 Split</div>
                          </div>
                          <div className="text-white text-xs">$25,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-3 shadow-xl animate-bounce-slow">
                        <div className="text-white text-xs font-bold">Stage 1</div>
                        <div className="text-white text-xs">$3k</div>
                      </div>
                      <div className="animate-pulse-slow">
                        <svg width="30" height="30" viewBox="0 0 30 30" className="text-orange-300">
                          <polygon points="10,15 20,18 20,12" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                        <div className="text-white text-xs font-bold">Stage 2</div>
                        <div className="text-white text-xs">$5k</div>
                      </div>
                      <div className="animate-pulse-slow" style={{ animationDelay: '0.3s' }}>
                        <svg width="30" height="30" viewBox="0 0 30 30" className="text-orange-300">
                          <polygon points="10,15 20,18 20,12" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg p-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                        <div className="text-white text-xs font-bold">Funded</div>
                        <div className="text-white text-xs">$10k+</div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 lg:pr-[500px]">
                  <div className="max-w-4xl text-center lg:text-left">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                      ✨ {slide.badge}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                      <button className="group bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 transform">
                        {t.hero.learnMore}
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                      <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:bg-white/20 transition-all hover:scale-105 transform">
                        {index === 2 ? t.hero.takeChallenge : t.hero.openAccount}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {t.hero.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-12' : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => prev === 0 ? t.hero.slides.length - 1 : prev - 1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 border border-white/20 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 border border-white/20 group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-gray-50 -mt-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transform">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">$1</div>
                <div className="text-gray-600 font-medium">{t.stats.minDeposit}</div>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 hover:border-green-200 hover:-translate-y-2 transform">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2">13+</div>
                <div className="text-gray-600 font-medium">{t.stats.yearsMarket}</div>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 hover:border-teal-200 hover:-translate-y-2 transform">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">350K+</div>
                <div className="text-gray-600 font-medium">{t.stats.activeClients}</div>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 hover:border-orange-200 hover:-translate-y-2 transform">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 font-medium">{t.stats.countries}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                {t.offers.title}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.offers.subtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-100 overflow-hidden hover:-translate-y-2 transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.offers.bonus100.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {t.offers.bonus100.description}
                  </p>
                  <button className="group/btn text-blue-600 font-bold hover:text-blue-700 inline-flex items-center">
                    {t.offers.bonus100.button}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-100 overflow-hidden hover:-translate-y-2 transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.offers.copystart.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {t.offers.copystart.description}
                  </p>
                  <button className="group/btn text-green-600 font-bold hover:text-green-700 inline-flex items-center">
                    {t.offers.copystart.button}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
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

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/20">
                  Торговая платформа
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  {t.platforms.title}
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  {t.platforms.subtitle}
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                      <Monitor className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{t.platforms.feature1.title}</div>
                      <div className="text-white/70">{t.platforms.feature1.description}</div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="bg-teal-500/20 p-3 rounded-xl mr-4">
                      <BarChart3 className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{t.platforms.feature2.title}</div>
                      <div className="text-white/70">{t.platforms.feature2.description}</div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                      <Zap className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{t.platforms.feature3.title}</div>
                      <div className="text-white/70">{t.platforms.feature3.description}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all inline-flex items-center shadow-xl hover:scale-105 transform">
                    <Download className="h-5 w-5 mr-2" />
                    MetaTrader 4
                  </button>
                  <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center hover:scale-105 transform">
                    <Download className="h-5 w-5 mr-2" />
                    MetaTrader 5
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-10 w-10 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">{t.platforms.desktop}</div>
                  <div className="text-sm text-white/70">Windows & Mac</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">{t.platforms.mobile}</div>
                  <div className="text-sm text-white/70">iOS & Android</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">{t.platforms.web}</div>
                  <div className="text-sm text-white/70">Browser Trading</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="h-10 w-10 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">{t.platforms.vps}</div>
                  <div className="text-sm text-white/70">Virtual Server</div>
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

        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-8 shadow-2xl animate-pulse">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <button className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-5 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transform">
                {t.cta.openReal}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-white/20 transition-all hover:scale-105 transform">
                {t.cta.tryDemo}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Минимальный депозит $1</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Бонусы до 100%</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="text-center lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start">
                <img src="/Logo copy copy copy copy.png" alt="Vantage Point" className="h-24 sm:h-32 w-auto" />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {t.footer.description}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:contents gap-6">
              <div className="text-center lg:text-left">
                <h4 className="text-white font-semibold mb-3 sm:mb-4">{t.footer.trading}</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.copyTrading}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.forexCFD}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.platforms}</a></li>
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <h4 className="text-white font-semibold mb-3 sm:mb-4">{t.footer.information}</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.about}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.documents}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.analytics}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.footer.education}</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-3 sm:mb-4">{t.footer.contacts}</h4>
              <div className="space-y-2 text-sm mb-4">
                <p className="break-words">Email: support@vantage-point.digital</p>
                <p>{t.footer.support}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="text-xs text-gray-500 space-y-3">
              <p className="text-center sm:text-left">
                <strong className="text-gray-400">{t.footer.riskWarning.split(':')[0]}:</strong> {t.footer.riskWarning.split(':')[1]}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-4">
                <p className="text-center">&copy; 2021-2025 Vantage Point. {t.footer.rights}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
