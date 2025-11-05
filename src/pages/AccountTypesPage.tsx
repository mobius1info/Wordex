import { DollarSign, Star, Award, Zap, CheckCircle } from 'lucide-react';
import { pageTranslations } from '../translations/pageTranslations';

interface AccountTypesPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function AccountTypesPage({ language = 'ru' }: AccountTypesPageProps) {
  const t = pageTranslations[language].accountTypes;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
              <DollarSign className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.standard.name}</h3>
              <p className="text-blue-100">{t.standard.description}</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{t.standard.minDeposit}</div>
                <div className="text-gray-600">{t.standard.minDepositLabel}</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.standard.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.standard.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.standard.feature3}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.standard.feature4}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.standard.feature5}</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.standard.button}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-purple-500">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                {t.pro.badge}
              </div>
              <Star className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.pro.name}</h3>
              <p className="text-purple-100">{t.pro.description}</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{t.pro.minDeposit}</div>
                <div className="text-gray-600">{t.pro.minDepositLabel}</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.pro.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.pro.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.pro.feature3}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.pro.feature4}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.pro.feature5}</span>
                </li>
              </ul>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {t.pro.button}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8">
              <Award className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.vip.name}</h3>
              <p className="text-yellow-100">{t.vip.description}</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{t.vip.minDeposit}</div>
                <div className="text-gray-600">{t.vip.minDepositLabel}</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.vip.feature1}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.vip.feature2}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.vip.feature3}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.vip.feature4}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t.vip.feature5}</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                {t.vip.button}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.comparison.title}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.comparison.characteristic}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t.standard.name}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t.pro.name}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t.vip.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.minDeposit}</td>
                  <td className="px-6 py-4 text-center text-gray-700">$10</td>
                  <td className="px-6 py-4 text-center text-gray-700">$100</td>
                  <td className="px-6 py-4 text-center text-gray-700">$5000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.spread}</td>
                  <td className="px-6 py-4 text-center text-gray-700">1.5 pips</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.5 pips</td>
                  <td className="px-6 py-4 text-center text-gray-700">0 pips</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.commission}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{t.comparison.no}</td>
                  <td className="px-6 py-4 text-center text-gray-700">$3/lot</td>
                  <td className="px-6 py-4 text-center text-gray-700">$2/lot</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.leverage}</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:1000</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:500</td>
                  <td className="px-6 py-4 text-center text-gray-700">1:200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.execution}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{t.comparison.market}</td>
                  <td className="px-6 py-4 text-center text-gray-700">ECN/STP</td>
                  <td className="px-6 py-4 text-center text-gray-700">ECN/STP</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.minLot}</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                  <td className="px-6 py-4 text-center text-gray-700">0.01</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.personalManager}</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{t.comparison.tradingSignals}</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <Zap className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.benefits.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>{t.benefits.item1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>{t.benefits.item2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>{t.benefits.item3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✓</span>
                <span>{t.benefits.item4}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.additional.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>{t.additional.item1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>{t.additional.item2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>{t.additional.item3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-200 mr-3">✓</span>
                <span>{t.additional.item4}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              {t.cta.contactButton}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              {t.cta.demoButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
