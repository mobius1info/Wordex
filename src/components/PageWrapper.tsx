import { ReactNode } from 'react';
import { simplePageTranslations } from '../translations/simplePageTranslations';

interface PageWrapperProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
  pageKey: keyof typeof simplePageTranslations['ru'];
  children: ReactNode;
}

export default function PageWrapper({ language = 'ru', pageKey, children }: PageWrapperProps) {
  const t = (simplePageTranslations[language] || simplePageTranslations.ru)[pageKey];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
