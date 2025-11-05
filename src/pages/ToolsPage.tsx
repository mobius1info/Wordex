import { Settings, Calculator, TrendingUp, Zap } from 'lucide-react';

interface ToolsPageProps {
  t: Record<string, unknown>;
}

export default function ToolsPage({ t }: ToolsPageProps) {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Settings className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.nav.tools}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools to help you trade more effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Calculators</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Calculate pip value, position size, profit/loss, and more
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Pip Value Calculator</li>
              <li>• Position Size Calculator</li>
              <li>• Risk/Reward Calculator</li>
              <li>• Currency Converter</li>
            </ul>
            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
              Use Tools →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Economic Calendar</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Track major economic events that affect currency movements
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Real-time event updates</li>
              <li>• Impact analysis</li>
              <li>• Historical comparisons</li>
              <li>• Customizable alerts</li>
            </ul>
            <button className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
              View Calendar →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Trading Signals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get real-time trading signals based on technical analysis
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Buy/Sell signals</li>
              <li>• Entry & exit points</li>
              <li>• Stop loss recommendations</li>
              <li>• Success rate statistics</li>
            </ul>
            <button className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
              Subscribe →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Settings className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Analysis Tools</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advanced charting and technical analysis tools
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Multi-timeframe analysis</li>
              <li>• 100+ technical indicators</li>
              <li>• Drawing tools</li>
              <li>• Pattern recognition</li>
            </ul>
            <button className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
              Access Tools →
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Premium Tools & Features</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Unlock advanced tools and get an edge in your trading
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Upgrade Your Account
          </button>
        </div>
      </div>
    </section>
  );
}
