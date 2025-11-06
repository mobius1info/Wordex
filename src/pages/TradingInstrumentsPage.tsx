import { TrendingUp, Briefcase, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageWrapper from '../components/PageWrapper';

export default function TradingInstrumentsPage() {
  const { language } = useLanguage();
  return (
    <PageWrapper language={language} pageKey="tradingInstruments">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
          <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Валютные пары</h3>
          <p className="text-gray-600 mb-4">
            Более 60 валютных пар, включая основные, кроссы и экзотические пары
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
          <Gem className="h-12 w-12 text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Драгоценные металлы</h3>
          <p className="text-gray-600 mb-4">
            Торгуйте золотом, серебром и другими драгоценными металлами
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-500">
          <Briefcase className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Товары</h3>
          <p className="text-gray-600 mb-4">
            Нефть, газ и другие сырьевые товары
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
