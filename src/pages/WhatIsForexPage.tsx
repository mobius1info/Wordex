import { TrendingUp, Globe, Clock, Users, BarChart3, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { pageTranslations } from '../translations/pageTranslations';

export default function WhatIsForexPage() {
  const { language } = useLanguage();
  const translations = pageTranslations[language] || pageTranslations.ru;
  const t = translations.whatIsForex || pageTranslations.ru.whatIsForex;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.mainTitle}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t.mainText}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{t.characteristics}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold">{t.char1.title}</h4>
                </div>
                <p className="text-gray-700">
                  {t.char1.text}
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold">{t.char2.title}</h4>
                </div>
                <p className="text-gray-700">
                  {t.char2.text}
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-purple-600 mr-3" />
                  <h4 className="text-xl font-semibold">{t.char3.title}</h4>
                </div>
                <p className="text-gray-700">
                  {t.char3.text}
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
                  <h4 className="text-xl font-semibold">{t.char4.title}</h4>
                </div>
                <p className="text-gray-700">
                  {t.char4.text}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как работает Forex</h3>
            <p className="text-lg text-gray-700 mb-4">
              На рынке Forex валюты торгуются парами, например EUR/USD (евро/доллар США). Когда вы покупаете
              валютную пару, вы фактически покупаете базовую валюту (первая в паре) и продаете валюту котировки
              (вторая в паре).
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-semibold mb-3">Пример торговли:</h4>
              <p className="text-gray-700 mb-2">
                Если вы считаете, что евро укрепится относительно доллара, вы покупаете пару EUR/USD.
                Если курс вырастет с 1.1000 до 1.1100, вы заработаете на разнице в 100 пунктов.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Основные участники рынка</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Центральные банки</strong> — регулируют денежную политику и курсы валют
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Коммерческие банки</strong> — основные участники межбанковского рынка
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Инвестиционные фонды</strong> — управляют крупными портфелями активов
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Брокеры и дилеры</strong> — обеспечивают доступ на рынок розничным трейдерам
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Частные трейдеры</strong> — индивидуальные участники рынка
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Популярные валютные пары</h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Пара</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Название</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Описание</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-blue-600">EUR/USD</td>
                    <td className="px-6 py-4">Евро/Доллар США</td>
                    <td className="px-6 py-4 text-gray-600">Самая популярная валютная пара в мире</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-blue-600">GBP/USD</td>
                    <td className="px-6 py-4">Фунт/Доллар США</td>
                    <td className="px-6 py-4 text-gray-600">Известна как "Кабель"</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-blue-600">USD/JPY</td>
                    <td className="px-6 py-4">Доллар США/Иена</td>
                    <td className="px-6 py-4 text-gray-600">Основная азиатская пара</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-blue-600">USD/CHF</td>
                    <td className="px-6 py-4">Доллар США/Франк</td>
                    <td className="px-6 py-4 text-gray-600">Валюта-убежище</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-blue-600">AUD/USD</td>
                    <td className="px-6 py-4">Австралийский доллар</td>
                    <td className="px-6 py-4 text-gray-600">Сырьевая валюта</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 mr-4" />
                <h3 className="text-2xl font-bold">{t.ctaTitle}</h3>
              </div>
              <p className="text-lg mb-6">
                {t.ctaText}
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
