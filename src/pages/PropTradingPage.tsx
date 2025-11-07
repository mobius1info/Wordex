import { TrendingUp, DollarSign, Target, Award, CheckCircle, BarChart3, Shield, X } from 'lucide-react';
import { useState } from 'react';


const translations = {
  ru: {
    title: 'Проп трейдинг',
    subtitle: 'Выберите сумму которую хотите получить в управление пройдя челлендж и изучите правила',
    intro: {
      title: 'Что такое проп трейдинг?',
      text: 'Проп трейдинг (Proprietary Trading) — это торговля на финансовых рынках с использованием капитала компании, а не собственных средств. Проп-компании предоставляют трейдерам доступ к большому капиталу в обмен на часть прибыли.'
    },
    benefits: {
      title: 'Преимущества проп трейдинга',
      items: [
        {
          title: 'Большой капитал',
          description: 'Торгуйте с суммами от $10,000 до $200,000 без риска потери собственных средств'
        },
        {
          title: 'Высокая доля прибыли',
          description: 'Получайте до 90% от прибыли, которую вы генерируете'
        },
        {
          title: 'Защита капитала',
          description: 'Торгуйте без страха потерять свои деньги — риску подвергается только капитал компании'
        },
        {
          title: 'Профессиональное развитие',
          description: 'Обучение, поддержка и доступ к профессиональным инструментам'
        }
      ]
    },
    howItWorks: {
      title: 'Как это работает',
      steps: [
        {
          title: 'Шаг 1: Оценка',
          description: 'Пройдите тестовое задание (challenge), чтобы доказать свои навыки. Обычно нужно достичь определенной цели прибыли, соблюдая правила риск-менеджмента.'
        },
        {
          title: 'Шаг 2: Верификация',
          description: 'После успешного прохождения оценки подтвердите свои результаты на верификационном счете.'
        },
        {
          title: 'Шаг 3: Получение счета',
          description: 'Получите финансируемый счет с капиталом компании и начните зарабатывать реальные деньги.'
        },
        {
          title: 'Шаг 4: Вывод прибыли',
          description: 'Выводите свою долю прибыли регулярно — обычно раз в неделю или месяц.'
        }
      ]
    },
    rules: {
      title: 'Основные правила',
      items: [
        'Максимальный дневной убыток: 5% от начального капитала',
        'Максимальный общий убыток: 10% от начального капитала',
        'Цель прибыли: 10% для прохождения этапа',
        'Минимальные торговые дни: 3 дня'
      ]
    },
    costs: {
      title: 'Стоимость участия',
      text: 'Большинство проп-компаний берут единоразовую плату за участие в оценке:',
      items: [
        '$10,000 счет: $100-150',
        '$25,000 счет: $200-300',
        '$50,000 счет: $300-500',
        '$100,000 счет: $500-800'
      ]
    },
    tips: {
      title: 'Советы для успеха',
      items: [
        'Строго соблюдайте правила риск-менеджмента',
        'Не торопитесь — принимайте решение об открытии сделки рассудительно и спокойно',
        'Используйте проверенную стратегию',
        'Сосредоточьтесь на качестве сделок, а не на количестве',
        'Ведите торговый журнал',
        'Начните с меньшего счета, чтобы освоиться'
      ]
    },
    popular: {
      title: 'Популярные проп-компании',
      items: [
        'FTMO',
        'The5%ers',
        'TopStep Trader',
        'Earn2Trade',
        'MyForexFunds'
      ]
    },
    cta: {
      title: 'Готовы начать?',
      text: 'Проп трейдинг — это отличная возможность для талантливых трейдеров начать зарабатывать с большим капиталом без собственных инвестиций.',
      button: 'Пройти Челлендж'
    }
  },
  uk: {
    title: 'Проп трейдинг',
    subtitle: 'Торгуйте з капіталом компанії та отримуйте до 90% прибутку',
    intro: {
      title: 'Що таке проп трейдинг?',
      text: 'Проп трейдинг (Proprietary Trading) — це торгівля на фінансових ринках з використанням капіталу компанії, а не власних коштів. Проп-компанії надають трейдерам доступ до великого капіталу в обмін на частину прибутку.'
    },
    benefits: {
      title: 'Переваги проп трейдингу',
      items: [
        {
          title: 'Великий капітал',
          description: 'Торгуйте з сумами від $10,000 до $200,000 без ризику втрати власних коштів'
        },
        {
          title: 'Висока частка прибутку',
          description: 'Отримуйте до 90% від прибутку, який ви генеруєте'
        },
        {
          title: 'Захист капіталу',
          description: 'Торгуйте без страху втратити свої гроші — ризику піддається тільки капітал компанії'
        },
        {
          title: 'Професійний розвиток',
          description: 'Навчання, підтримка та доступ до професійних інструментів'
        }
      ]
    },
    howItWorks: {
      title: 'Як це працює',
      steps: [
        {
          title: 'Крок 1: Оцінка',
          description: 'Пройдіть тестове завдання (challenge), щоб довести свої навички. Зазвичай потрібно досягти певної мети прибутку, дотримуючись правил ризик-менеджменту.'
        },
        {
          title: 'Крок 2: Верифікація',
          description: 'Після успішного проходження оцінки підтвердіть свої результати на верифікаційному рахунку.'
        },
        {
          title: 'Крок 3: Отримання рахунку',
          description: 'Отримайте фінансований рахунок з капіталом компанії і почніть заробляти реальні гроші.'
        },
        {
          title: 'Крок 4: Виведення прибутку',
          description: 'Виводьте свою частку прибутку регулярно — зазвичай раз на тиждень або місяць.'
        }
      ]
    },
    rules: {
      title: 'Основні правила',
      items: [
        'Максимальний денний збиток: зазвичай 5% від рахунку',
        'Максимальний загальний збиток: зазвичай 10% від початкового капіталу',
        'Мета прибутку: 8-10% для проходження оцінки',
        'Мінімальні торгові дні: зазвичай 4-5 днів',
        'Заборонена торгівля новинами в деяких компаніях'
      ]
    },
    costs: {
      title: 'Вартість участі',
      text: 'Більшість проп-компаній беруть одноразову плату за участь в оцінці:',
      items: [
        '$10,000 рахунок: $100-150',
        '$25,000 рахунок: $200-300',
        '$50,000 рахунок: $300-500',
        '$100,000 рахунок: $500-800'
      ],
      note: 'Багато компаній повертають цю плату після першого виведення прибутку.'
    },
    tips: {
      title: 'Поради для успіху',
      items: [
        'Суворо дотримуйтесь правил ризик-менеджменту',
        'Не поспішайте — у вас зазвичай немає часових обмежень',
        'Використовуйте перевірену стратегію',
        'Зосередьтесь на якості угод, а не на кількості',
        'Ведіть торговий журнал',
        'Почніть з меншого рахунку, щоб освоїтись'
      ]
    },
    popular: {
      title: 'Популярні проп-компанії',
      items: [
        'FTMO',
        'The5%ers',
        'TopStep Trader',
        'Earn2Trade',
        'MyForexFunds'
      ]
    },
    cta: {
      title: 'Готові почати?',
      text: 'Проп трейдинг — це чудова можливість для талановитих трейдерів почати заробляти з великим капіталом без власних інвестицій.',
      button: 'Почати навчання'
    }
  },
  en: {
    title: 'Prop Trading',
    subtitle: 'Trade with company capital and earn up to 90% of profits',
    intro: {
      title: 'What is Prop Trading?',
      text: 'Prop trading (Proprietary Trading) is trading in financial markets using company capital rather than your own funds. Prop companies provide traders with access to large capital in exchange for a share of the profits.'
    },
    benefits: {
      title: 'Benefits of Prop Trading',
      items: [
        {
          title: 'Large Capital',
          description: 'Trade with amounts from $10,000 to $200,000 without risking your own funds'
        },
        {
          title: 'High Profit Share',
          description: 'Receive up to 90% of the profits you generate'
        },
        {
          title: 'Capital Protection',
          description: 'Trade without fear of losing your money — only company capital is at risk'
        },
        {
          title: 'Professional Development',
          description: 'Training, support, and access to professional tools'
        }
      ]
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          title: 'Step 1: Evaluation',
          description: 'Pass a challenge to prove your skills. Usually you need to achieve a certain profit target while following risk management rules.'
        },
        {
          title: 'Step 2: Verification',
          description: 'After successfully passing the evaluation, confirm your results on a verification account.'
        },
        {
          title: 'Step 3: Get Funded',
          description: 'Receive a funded account with company capital and start earning real money.'
        },
        {
          title: 'Step 4: Withdraw Profits',
          description: 'Withdraw your share of profits regularly — usually once a week or month.'
        }
      ]
    },
    rules: {
      title: 'Basic Rules',
      items: [
        'Maximum daily loss: usually 5% of account',
        'Maximum overall loss: usually 10% of initial capital',
        'Profit target: 8-10% to pass evaluation',
        'Minimum trading days: usually 4-5 days',
        'News trading prohibited in some companies'
      ]
    },
    costs: {
      title: 'Participation Cost',
      text: 'Most prop companies charge a one-time fee for evaluation participation:',
      items: [
        '$10,000 account: $100-150',
        '$25,000 account: $200-300',
        '$50,000 account: $300-500',
        '$100,000 account: $500-800'
      ],
      note: 'Many companies refund this fee after your first profit withdrawal.'
    },
    tips: {
      title: 'Tips for Success',
      items: [
        'Strictly follow risk management rules',
        'Don\'t rush — you usually have no time limits',
        'Use a proven strategy',
        'Focus on trade quality, not quantity',
        'Keep a trading journal',
        'Start with a smaller account to get familiar'
      ]
    },
    popular: {
      title: 'Popular Prop Companies',
      items: [
        'FTMO',
        'The5%ers',
        'TopStep Trader',
        'Earn2Trade',
        'MyForexFunds'
      ]
    },
    cta: {
      title: 'Ready to Start?',
      text: 'Prop trading is an excellent opportunity for talented traders to start earning with large capital without their own investments.',
      button: 'Start Learning'
    }
  },
  tr: {
    title: 'Prop Trading',
    subtitle: 'Şirket sermayesi ile ticaret yapın ve kârın %90\'ına kadar kazanın',
    intro: {
      title: 'Prop Trading Nedir?',
      text: 'Prop trading (Proprietary Trading), kendi fonlarınız yerine şirket sermayesi kullanarak finansal piyasalarda ticaret yapmaktır. Prop şirketleri, yatırımcılara kârın bir kısmı karşılığında büyük sermayeye erişim sağlar.'
    },
    benefits: {
      title: 'Prop Trading Avantajları',
      items: [
        {
          title: 'Büyük Sermaye',
          description: 'Kendi fonlarınızı riske atmadan $10,000 ile $200,000 arasında tutarlarla ticaret yapın'
        },
        {
          title: 'Yüksek Kâr Payı',
          description: 'Elde ettiğiniz kârın %90\'ına kadar alın'
        },
        {
          title: 'Sermaye Koruması',
          description: 'Paranızı kaybetme korkusu olmadan ticaret yapın — sadece şirket sermayesi risk altındadır'
        },
        {
          title: 'Profesyonel Gelişim',
          description: 'Eğitim, destek ve profesyonel araçlara erişim'
        }
      ]
    },
    howItWorks: {
      title: 'Nasıl Çalışır',
      steps: [
        {
          title: 'Adım 1: Değerlendirme',
          description: 'Yeteneklerinizi kanıtlamak için bir challenge geçin. Genellikle risk yönetimi kurallarına uyarak belirli bir kâr hedefine ulaşmanız gerekir.'
        },
        {
          title: 'Adım 2: Doğrulama',
          description: 'Değerlendirmeyi başarıyla geçtikten sonra sonuçlarınızı doğrulama hesabında onaylayın.'
        },
        {
          title: 'Adım 3: Fon Alma',
          description: 'Şirket sermayeli fonlu bir hesap alın ve gerçek para kazanmaya başlayın.'
        },
        {
          title: 'Adım 4: Kâr Çekme',
          description: 'Kâr payınızı düzenli olarak çekin — genellikle haftada veya ayda bir kez.'
        }
      ]
    },
    rules: {
      title: 'Temel Kurallar',
      items: [
        'Maksimum günlük kayıp: genellikle hesabın %5\'i',
        'Maksimum toplam kayıp: genellikle başlangıç sermayesinin %10\'u',
        'Kâr hedefi: değerlendirmeyi geçmek için %8-10',
        'Minimum ticaret günleri: genellikle 4-5 gün',
        'Bazı şirketlerde haber ticareti yasak'
      ]
    },
    costs: {
      title: 'Katılım Maliyeti',
      text: 'Çoğu prop şirketi değerlendirme katılımı için tek seferlik bir ücret alır:',
      items: [
        '$10,000 hesap: $100-150',
        '$25,000 hesap: $200-300',
        '$50,000 hesap: $300-500',
        '$100,000 hesap: $500-800'
      ],
      note: 'Birçok şirket bu ücreti ilk kâr çekiminizden sonra iade eder.'
    },
    tips: {
      title: 'Başarı İçin İpuçları',
      items: [
        'Risk yönetimi kurallarına kesinlikle uyun',
        'Acele etmeyin — genellikle zaman sınırınız yoktur',
        'Kanıtlanmış bir strateji kullanın',
        'Ticaret miktarından çok kalitesine odaklanın',
        'Ticaret günlüğü tutun',
        'Alışmak için daha küçük bir hesapla başlayın'
      ]
    },
    popular: {
      title: 'Popüler Prop Şirketleri',
      items: [
        'FTMO',
        'The5%ers',
        'TopStep Trader',
        'Earn2Trade',
        'MyForexFunds'
      ]
    },
    cta: {
      title: 'Başlamaya Hazır mısınız?',
      text: 'Prop trading, yetenekli yatırımcıların kendi yatırımları olmadan büyük sermaye ile kazanmaya başlamaları için mükemmel bir fırsattır.',
      button: 'Öğrenmeye Başla'
    }
  },
  zh: {
    title: '自营交易',
    subtitle: '使用公司资本交易，赚取高达90%的利润',
    intro: {
      title: '什么是自营交易？',
      text: '自营交易（Proprietary Trading）是使用公司资本而非您自己的资金在金融市场进行交易。自营公司为交易者提供大量资本，以换取部分利润。'
    },
    benefits: {
      title: '自营交易的好处',
      items: [
        {
          title: '大额资本',
          description: '使用$10,000至$200,000的资金进行交易，无需冒险使用自己的资金'
        },
        {
          title: '高利润份额',
          description: '获得您产生利润的高达90%'
        },
        {
          title: '资本保护',
          description: '无需担心损失自己的钱——只有公司资本面临风险'
        },
        {
          title: '专业发展',
          description: '培训、支持和专业工具的访问权限'
        }
      ]
    },
    howItWorks: {
      title: '工作原理',
      steps: [
        {
          title: '步骤1：评估',
          description: '通过挑战来证明您的技能。通常需要在遵守风险管理规则的同时达到一定的利润目标。'
        },
        {
          title: '步骤2：验证',
          description: '成功通过评估后，在验证账户上确认您的结果。'
        },
        {
          title: '步骤3：获得资金',
          description: '获得具有公司资本的资助账户，开始赚取真钱。'
        },
        {
          title: '步骤4：提取利润',
          description: '定期提取您的利润份额——通常每周或每月一次。'
        }
      ]
    },
    rules: {
      title: '基本规则',
      items: [
        '最大日损失：通常为账户的5%',
        '最大总损失：通常为初始资本的10%',
        '利润目标：通过评估需要8-10%',
        '最少交易天数：通常为4-5天',
        '某些公司禁止新闻交易'
      ]
    },
    costs: {
      title: '参与费用',
      text: '大多数自营公司收取一次性评估参与费：',
      items: [
        '$10,000账户：$100-150',
        '$25,000账户：$200-300',
        '$50,000账户：$300-500',
        '$100,000账户：$500-800'
      ],
      note: '许多公司在您首次提取利润后退还此费用。'
    },
    tips: {
      title: '成功秘诀',
      items: [
        '严格遵守风险管理规则',
        '不要着急——您通常没有时间限制',
        '使用经过验证的策略',
        '注重交易质量，而非数量',
        '保持交易日志',
        '从较小的账户开始以熟悉'
      ]
    },
    popular: {
      title: '热门自营公司',
      items: [
        'FTMO',
        'The5%ers',
        'TopStep Trader',
        'Earn2Trade',
        'MyForexFunds'
      ]
    },
    cta: {
      title: '准备开始了吗？',
      text: '自营交易是才华横溢的交易者在无需自己投资的情况下用大量资本开始赚钱的绝佳机会。',
      button: '开始学习'
    }
  }
};

interface PropTradingPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function PropTradingPage({ language = 'ru' }: PropTradingPageProps) {

  const t = translations[language] || translations.ru;
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);

  const accountData = {
    5000: {
      stages: [
        { stage: 'Этап 1', profit: '8%', dailyLoss: '5%', totalLoss: '10%', timeframe: '3 дня' },
        { stage: 'Этап 2', profit: '5%', dailyLoss: '5%', totalLoss: '10%', timeframe: '7 дней' },
        { stage: 'Счет в управление', profit: 'До 90%', dailyLoss: '5%', totalLoss: '10%', timeframe: 'Бессрочно' }
      ]
    },
    10000: {
      stages: [
        { stage: 'Этап 1', profit: '8%', dailyLoss: '5%', totalLoss: '10%', timeframe: '3 дня' },
        { stage: 'Этап 2', profit: '5%', dailyLoss: '5%', totalLoss: '10%', timeframe: '7 дней' },
        { stage: 'Счет в управление', profit: 'До 90%', dailyLoss: '5%', totalLoss: '10%', timeframe: 'Бессрочно' }
      ]
    },
    25000: {
      stages: [
        { stage: 'Этап 1', profit: '8%', dailyLoss: '5%', totalLoss: '10%', timeframe: '3 дня' },
        { stage: 'Этап 2', profit: '5%', dailyLoss: '5%', totalLoss: '10%', timeframe: '7 дней' },
        { stage: 'Счет в управление', profit: 'До 90%', dailyLoss: '5%', totalLoss: '10%', timeframe: 'Бессрочно' }
      ]
    }
  };

  const handleAccountClick = (amount: number) => {
    setSelectedAccount(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">{t.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <button
                onClick={() => handleAccountClick(5000)}
                className={`group relative overflow-hidden px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 transform shadow-2xl ${
                  selectedAccount === 5000
                    ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white ring-4 ring-emerald-300 ring-offset-2'
                    : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:from-emerald-400 hover:to-emerald-600 hover:border-emerald-300'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  5,000
                </span>
              </button>
              <button
                onClick={() => handleAccountClick(10000)}
                className={`group relative overflow-hidden px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 transform shadow-2xl ${
                  selectedAccount === 10000
                    ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white ring-4 ring-blue-300 ring-offset-2'
                    : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:from-blue-400 hover:to-blue-600 hover:border-blue-300'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  10,000
                </span>
              </button>
              <button
                onClick={() => handleAccountClick(25000)}
                className={`group relative overflow-hidden px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 transform shadow-2xl ${
                  selectedAccount === 25000
                    ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white ring-4 ring-amber-300 ring-offset-2'
                    : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:from-amber-400 hover:to-amber-600 hover:border-amber-300'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  25,000
                </span>
              </button>
            </div>

            {selectedAccount && (
              <div className="mt-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto relative">
                <button
                  onClick={() => setSelectedAccount(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Программа челленджа ${selectedAccount.toLocaleString()}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-center py-3 px-4 font-bold text-gray-900 w-[15%]">Этап</th>
                        <th className="text-center py-3 px-4 font-bold text-gray-900 w-[18%]">Цель прибыли</th>
                        <th className="text-center py-3 px-4 font-bold text-gray-900 w-[22%]">Макс. дневная просадка</th>
                        <th className="text-center py-3 px-4 font-bold text-gray-900 w-[22%]">Макс. общая просадка</th>
                        <th className="text-center py-3 px-4 font-bold text-gray-900 w-[23%]">Минимум дней торговли</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accountData[selectedAccount as keyof typeof accountData].stages.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-gray-800 text-center">{row.stage}</td>
                          <td className="py-4 px-4 text-gray-700 text-center">{row.profit}</td>
                          <td className="py-4 px-4 text-gray-700 text-center">{row.dailyLoss}</td>
                          <td className="py-4 px-4 text-gray-700 text-center">{row.totalLoss}</td>
                          <td className="py-4 px-4 text-gray-700 text-center">{row.timeframe}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.intro.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t.intro.text}</p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.benefits.items.map((item, index) => {
              const icons = [DollarSign, Award, Shield, Target];
              const Icon = icons[index];
              const colors = ['blue', 'green', 'orange', 'teal'];
              const color = colors[index];

              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className={`bg-${color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.howItWorks.title}</h2>
          <div className="space-y-6">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t.rules.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.rules.items.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{t.costs.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{t.costs.text}</p>
            <ul className="space-y-2 mb-4">
              {t.costs.items.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">{t.tips.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.tips.items.map((tip, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t.cta.text}</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg hover:scale-105 transform">
            {t.cta.button}
          </button>
        </div>
      </div>
    </div>
  );
}
