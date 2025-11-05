import { useState, useEffect } from 'react';
import {
  Globe, ChevronDown, Menu, X, TrendingUp, DollarSign, Users, Shield,
  Smartphone, Monitor, Award, BarChart3, BookOpen, HelpCircle, Settings,
  Copy, Zap, Gift, CreditCard, ArrowRight, CheckCircle, Star, Download,
  Clock, Target, Briefcase, Database, LineChart
} from 'lucide-react';
import Header from './components/Header';
import WhereToStartPage from './pages/WhereToStartPage';
import TradingSchedulePage from './pages/TradingSchedulePage';
import HowToTradePage from './pages/HowToTradePage';
import WhatIsForexPage from './pages/WhatIsForexPage';
import ForexAdvantagesPage from './pages/ForexAdvantagesPage';
import DemoAccountPage from './pages/DemoAccountPage';
import TradingInstrumentsPage from './pages/TradingInstrumentsPage';
import PlatformsPage from './pages/PlatformsPage';
import AccountTypesPage from './pages/AccountTypesPage';
import CompanyNewsPage from './pages/CompanyNewsPage';
import MarketSurveysPage from './pages/MarketSurveysPage';
import EventCalendarPage from './pages/EventCalendarPage';
import QuotesPage from './pages/QuotesPage';
import StockDividendsPage from './pages/StockDividendsPage';
import DepositWithdrawalPage from './pages/DepositWithdrawalPage';
import GlossaryPage from './pages/GlossaryPage';
import AboutCompanyPage from './pages/AboutCompanyPage';
import ContactsPage from './pages/ContactsPage';

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
    hero: {
      slides: [
        {
          title: 'Копи-трейдинг',
          subtitle: 'Следуйте за успешными трейдерами и автоматически копируйте их сделки'
        },
        {
          title: 'Кэшбэк Клуб',
          subtitle: 'Получайте до $25 за каждый торгуемый лот'
        },
        {
          title: 'Jet Trade',
          subtitle: 'Торгуйте цифровыми контрактами с прибылью до 95%'
        },
        {
          title: 'Бонус 100%',
          subtitle: 'Удвойте свой первый депозит и начните с большим капиталом'
        }
      ],
      learnMore: 'Узнать больше',
      openAccount: 'Открыть счет'
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
      cashback: {
        title: 'Кэшбэк до $25',
        description: 'Получайте кэшбэк за каждый торгуемый лот. До $25 за лот в программе лояльности',
        button: 'Подробнее'
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
      jet: {
        title: 'Jet Trade',
        description: 'Торгуйте цифровыми контрактами. Прибыль до 95% за минуты.',
        feature1: 'Прибыль до 95%',
        feature2: 'Контракты от 60 секунд',
        feature3: '100+ торговых активов',
        button: 'Открыть JetTrade'
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
      title: 'Торговые платформы',
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
      description: 'Надежный брокер с 13-летним опытом работы на финансовых рынках',
      trading: 'Торговля',
      information: 'Информация',
      contacts: 'Контакты',
      copyTrading: 'Копи-трейдинг',
      jetTrade: 'Jet Trade',
      forexCFD: 'Forex/CFD',
      platforms: 'Торговые платформы',
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
    hero: {
      slides: [
        {
          title: 'Копі-трейдинг',
          subtitle: 'Слідуйте за успішними трейдерами та автоматично копіюйте їх угоди'
        },
        {
          title: 'Кешбек Клуб',
          subtitle: 'Отримуйте до $25 за кожен лот, що торгується'
        },
        {
          title: 'Jet Trade',
          subtitle: 'Торгуйте цифровими контрактами з прибутком до 95%'
        },
        {
          title: 'Бонус 100%',
          subtitle: 'Подвойте свій перший депозит і почніть з більшим капіталом'
        }
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
      cashback: {
        title: 'Кешбек до $25',
        description: 'Отримуйте кешбек за кожен лот, що торгується. До $25 за лот у програмі лояльності',
        button: 'Детальніше'
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
      jet: {
        title: 'Jet Trade',
        description: 'Торгуйте цифровими контрактами. Прибуток до 95% за хвилини.',
        feature1: 'Прибуток до 95%',
        feature2: 'Контракти від 60 секунд',
        feature3: '100+ торгових активів',
        button: 'Відкрити JetTrade'
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
      description: 'Надійний брокер з 13-річним досвідом роботи на фінансових ринках',
      trading: 'Торгівля',
      information: 'Інформація',
      contacts: 'Контакти',
      copyTrading: 'Копі-трейдинг',
      jetTrade: 'Jet Trade',
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
    hero: {
      slides: [
        {
          title: 'Copy Trading',
          subtitle: 'Follow successful traders and automatically copy their trades'
        },
        {
          title: 'Cashback Club',
          subtitle: 'Get up to $25 for each traded lot'
        },
        {
          title: 'Jet Trade',
          subtitle: 'Trade digital contracts with up to 95% profit'
        },
        {
          title: '100% Bonus',
          subtitle: 'Double your first deposit and start with bigger capital'
        }
      ],
      learnMore: 'Learn More',
      openAccount: 'Open Account'
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
      cashback: {
        title: 'Cashback up to $25',
        description: 'Get cashback for each traded lot. Up to $25 per lot in loyalty program',
        button: 'Learn More'
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
      jet: {
        title: 'Jet Trade',
        description: 'Trade digital contracts. Up to 95% profit in minutes.',
        feature1: 'Profit up to 95%',
        feature2: 'Contracts from 60 seconds',
        feature3: '100+ trading assets',
        button: 'Open JetTrade'
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
      description: 'Reliable broker with 13 years of experience in financial markets',
      trading: 'Trading',
      information: 'Information',
      contacts: 'Contacts',
      copyTrading: 'Copy Trading',
      jetTrade: 'Jet Trade',
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
    hero: {
      slides: [
        {
          title: 'Kopya Ticaret',
          subtitle: 'Başarılı yatırımcıları takip edin ve işlemlerini otomatik olarak kopyalayın'
        },
        {
          title: 'Cashback Kulübü',
          subtitle: 'Her işlem lotundan 25$\'a kadar kazanın'
        },
        {
          title: 'Jet Trade',
          subtitle: '%95\'e varan kârla dijital sözleşmeler ticareti yapın'
        },
        {
          title: '%100 Bonus',
          subtitle: 'İlk depozitonuzu ikiye katlayın ve daha büyük sermaye ile başlayın'
        }
      ],
      learnMore: 'Daha Fazla Bilgi',
      openAccount: 'Hesap Aç'
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
      cashback: {
        title: '25$\'a kadar Cashback',
        description: 'Her işlem lotu için cashback kazanın. Sadakat programında lot başına 25$\'a kadar',
        button: 'Daha Fazla'
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
      jet: {
        title: 'Jet Trade',
        description: 'Dijital sözleşmeler ticareti yapın. Dakikalar içinde %95\'e varan kâr.',
        feature1: '%95\'e kadar kâr',
        feature2: '60 saniyeden başlayan sözleşmeler',
        feature3: '100+ ticaret varlığı',
        button: 'JetTrade Aç'
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
      description: 'Finansal piyasalarda 13 yıllık deneyime sahip güvenilir broker',
      trading: 'Ticaret',
      information: 'Bilgi',
      contacts: 'İletişim',
      copyTrading: 'Kopya Ticaret',
      jetTrade: 'Jet Trade',
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
    hero: {
      slides: [
        {
          title: '复制交易',
          subtitle: '跟随成功的交易者并自动复制他们的交易'
        },
        {
          title: '返现俱乐部',
          subtitle: '每笔交易手数可获得高达25美元'
        },
        {
          title: 'Jet Trade',
          subtitle: '交易数字合约，利润高达95%'
        },
        {
          title: '100%奖金',
          subtitle: '首次存款翻倍，以更大的资本开始'
        }
      ],
      learnMore: '了解更多',
      openAccount: '开设账户'
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
      cashback: {
        title: '高达25美元返现',
        description: '每笔交易手数获得返现。忠诚计划中每手高达25美元',
        button: '了解更多'
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
      jet: {
        title: 'Jet Trade',
        description: '交易数字合约。几分钟内获得高达95%的利润。',
        feature1: '利润高达95%',
        feature2: '合约从60秒起',
        feature3: '100+交易资产',
        button: '打开JetTrade'
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
      description: '在金融市场拥有13年经验的可靠经纪商',
      trading: '交易',
      information: '信息',
      contacts: '联系方式',
      copyTrading: '复制交易',
      jetTrade: 'Jet Trade',
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
  const [language, setLanguage] = useState<'ru' | 'uk' | 'en' | 'tr' | 'zh'>('ru');
  const [showLanguages, setShowLanguages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePage, setActivePage] = useState<string | null>(null);

  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [language]);

  const languageLabels = {
    ru: 'Русский',
    uk: 'Українська',
    en: 'English',
    tr: 'Türkçe',
    zh: '中文'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        language={language}
        showLanguages={showLanguages}
        setShowLanguages={setShowLanguages}
        setLanguage={setLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setActivePage={setActivePage}
        translations={translations}
      />

      {activePage === 'start' && <WhereToStartPage />}
      {activePage === 'what-is-forex' && <WhatIsForexPage />}
      {activePage === 'advantages' && <ForexAdvantagesPage />}
      {activePage === 'demo' && <DemoAccountPage />}
      {activePage === 'trading-schedule' && <TradingSchedulePage />}
      {activePage === 'company-news' && <CompanyNewsPage />}
      {activePage === 'market-surveys' && <MarketSurveysPage />}
      {activePage === 'event-calendar' && <EventCalendarPage />}
      {activePage === 'quotes' && <QuotesPage />}
      {activePage === 'dividends' && <StockDividendsPage />}
      {activePage === 'how-to-trade' && <HowToTradePage />}
      {activePage === 'deposit-withdrawal' && <DepositWithdrawalPage />}
      {activePage === 'glossary' && <GlossaryPage />}
      {activePage === 'about-company' && <AboutCompanyPage />}
      {activePage === 'contacts' && <ContactsPage />}
      {activePage === 'trading-instruments' && <TradingInstrumentsPage />}
      {activePage === 'platforms' && <PlatformsPage />}
      {activePage === 'account-types' && <AccountTypesPage />}

      {!activePage && (
        <>
      <main>
        <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
          {t.hero.slides.map((slide, index) => (
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
            {t.hero.slides.map((_, index) => (
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
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">WorldForex</div>
                  <div className="text-xs text-gray-400">Online Trading</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.trading}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.copyTrading}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.jetTrade}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.forexCFD}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.platforms}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.information}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.about}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.documents}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.analytics}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.education}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contacts}</h4>
              <div className="space-y-2 text-sm mb-4">
                <p>Email: support@wforex.com</p>
                <p>{t.footer.support}</p>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">TW</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">TG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-xs text-gray-500 space-y-3">
              <p>
                <strong className="text-gray-400">{t.footer.riskWarning.split(':')[0]}:</strong> {t.footer.riskWarning.split(':')[1]}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <p>&copy; 2011-2024 WorldForex. {t.footer.rights}</p>
                <div className="flex items-center space-x-4 text-xs">
                  <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">{t.footer.documents}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
      )}
    </div>
  );
}

export default App;
