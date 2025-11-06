import { BookOpen, Search } from 'lucide-react';
import { glossaryTranslations } from '../translations/glossaryTranslations';

interface GlossaryPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function GlossaryPage({ language = 'ru' }: GlossaryPageProps) {
  const t = glossaryTranslations[language] || glossaryTranslations.ru;

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
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center">
            <BookOpen className="h-12 w-12 mr-4" />
            <div>
              <h2 className="text-3xl font-bold mb-2">{t.learnTitle}</h2>
              <p className="text-lg opacity-90">
                {t.learnSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {t.terms.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-3xl font-bold mr-4">
                  {section.letter}
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>

              <div className="space-y-6">
                {section.terms.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">{t.notFoundTitle}</h4>
          <p className="text-blue-800 mb-4">
            {t.notFoundText}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {t.contactButton}
          </button>
        </div>
      </div>
    </div>
  );
}
