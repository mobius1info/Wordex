import { useState, useEffect } from 'react';

import { Calendar, TrendingUp, Award } from 'lucide-react';
import { analyticsTranslations } from '../translations/analyticsTranslations';
import { supabase, NewsItem } from '../lib/supabase';

interface CompanyNewsPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function CompanyNewsPage({ language = 'ru' }: CompanyNewsPageProps) {

  const translations = analyticsTranslations[language] || analyticsTranslations.ru;
  const t = translations.companyNews || analyticsTranslations.ru.companyNews;
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const languageField = `publish_${language}`;
    console.log('Loading news for language:', language, 'field:', languageField);

    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq(languageField, true)
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading news:', error);
    } else {
      console.log('Loaded news:', data);
      setNews(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, [language]);

  const fallbackNews = [
    {
      date: '15 ноября 2025',
      title: 'Изменение расписания торговых сессий в период новогодних праздников',
      content: 'Уважаемые клиенты! Информируем вас об изменениях в расписании торговых сессий в период новогодних и рождественских праздников. С 24 декабря по 2 января торговля некоторыми инструментами будет ограничена или приостановлена.',
      category: 'Важное'
    },
    {
      date: '10 ноября 2025',
      title: 'Запуск нового типа счета - ECN Pro',
      content: 'WorldForex представляет новый тип торгового счета ECN Pro со спредами от 0 пунктов и прямым доступом к межбанковской ликвидности. Минимальный депозит - $500, комиссия всего $2.5 за лот.',
      category: 'Продукты'
    },
    {
      date: '5 ноября 2025',
      title: 'Обновление торговой платформы MetaTrader 5',
      content: 'Вышла новая версия платформы MT5 с улучшенной функциональностью и повышенной скорость исполнения ордеров. Рекомендуем всем клиентам обновить свои платформы до последней версии.',
      category: 'Технологии'
    },
    {
      date: '1 ноября 2025',
      title: 'WorldForex получил награду "Лучший Forex брокер 2025"',
      content: 'Мы рады сообщить, что WorldForex был признан лучшим Forex брокером 2025 года по версии международного рейтинга. Это признание нашей приверженности предоставлению лучших торговых условий для наших клиентов.',
      category: 'Награды'
    },
    {
      date: '28 октября 2025',
      title: 'Расширение линейки криптовалют',
      content: 'Добавлено 15 новых криптовалютных пар для торговли, включая популярные альткоины: Cardano (ADA), Polkadot (DOT), Chainlink (LINK) и другие. Торговля доступна 24/7 с кредитным плечом до 1:50.',
      category: 'Продукты'
    },
    {
      date: '20 октября 2025',
      title: 'Снижение спредов на основные валютные пары',
      content: 'С 25 октября вступают в силу новые, более выгодные торговые условия. Спреды на пары EUR/USD, GBP/USD и USD/JPY снижены на 20-30%. Улучшенные условия доступны для всех типов счетов.',
      category: 'Торговля'
    },
    {
      date: '15 октября 2025',
      title: 'Запуск программы кэшбека для активных трейдеров',
      content: 'WorldForex запускает программу лояльности с возвратом до 15% от спреда на каждую сделку. Чем больше вы торгуете, тем выше ваш кэшбек. Программа доступна для всех клиентов автоматически.',
      category: 'Бонусы'
    },
    {
      date: '10 октября 2025',
      title: 'Новый образовательный портал для трейдеров',
      content: 'Представляем обновленный образовательный центр с более чем 100 видеоуроками, вебинарами и торговыми стратегиями от профессиональных трейдеров. Доступ бесплатный для всех клиентов.',
      category: 'Обучение'
    },
    {
      date: '5 октября 2025',
      title: 'Улучшение мобильных приложений',
      content: 'Выпущены обновленные версии мобильных приложений для iOS и Android с новым интерфейсом, улучшенными графиками и возможностью торговли в один клик. Обновите приложения в App Store и Google Play.',
      category: 'Технологии'
    },
    {
      date: '1 октября 2025',
      title: 'Изменение маржинальных требований',
      content: 'С 1 октября вводятся новые маржинальные требования для некоторых торговых инструментов. Подробная информация доступна в личном кабинете и на сайте в разделе спецификаций контрактов.',
      category: 'Важное'
    }
  ];


  const displayNews = news.length > 0 ? news : fallbackNews;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600 mt-4">Загрузка новостей...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {displayNews.map((item, index) => {
              const titleKey = `title_${language}` as keyof NewsItem;
              const contentKey = `content_${language}` as keyof NewsItem;

              console.log(`Item ${index}:`, {
                language,
                titleKey,
                contentKey,
                hasKey: titleKey in item,
                value: item[titleKey],
                originalTitle: item.title
              });

              let displayTitle = item.title;
              let displayContent = item.content;

              if (titleKey in item && item[titleKey]) {
                displayTitle = item[titleKey] as string;
              }

              if (contentKey in item && item[contentKey]) {
                displayContent = item[contentKey] as string;
              }

              console.log(`  -> Displaying: ${displayTitle?.substring(0, 50)}`);

              return (
                <div
                  key={item.id || index}
                  className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{displayTitle}</h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">{displayContent}</div>
                </div>
              );
            })}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Обзоры рынка</h4>
            <p className="text-gray-600 mb-4">Профессиональная аналитика и прогнозы</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Перейти →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Календарь событий</h4>
            <p className="text-gray-600 mb-4">Важные экономические события</p>
            <button className="text-purple-600 font-semibold hover:text-purple-700">
              Перейти →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">О компании</h4>
            <p className="text-gray-600 mb-4">История и достижения WorldForex</p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Перейти →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
