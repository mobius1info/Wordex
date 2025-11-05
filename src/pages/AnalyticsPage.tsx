import { BarChart3, TrendingUp, Calendar, FileText } from 'lucide-react';

interface AnalyticsPageProps {
  t: Record<string, unknown>;
}

export default function AnalyticsPage({ t }: AnalyticsPageProps) {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.nav.analytics}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access professional market analysis and trading insights from our expert team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Daily Market Review</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Get daily market reviews and analysis from our team of professional traders
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
              Read Today's Review →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Trading Ideas</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Exclusive trading signals and market opportunities tailored for your strategy
            </p>
            <button className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
              View Ideas →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Economic Calendar</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Track important economic events and their potential impact on markets
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
              Open Calendar →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Market Forecasts</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Expert predictions and technical analysis for major currency pairs
            </p>
            <button className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
              View Forecasts →
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Premium Analytics</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get access to advanced analytics tools and real-time market data with a premium account
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
}
