import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

interface BeginnersPageProps {
  t: Record<string, unknown>;
}

export default function BeginnersPage({ t }: BeginnersPageProps) {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.nav.beginners}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn the fundamentals of trading and start your journey to financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Open your account in 2 minutes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Verify your identity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Make your first deposit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Start trading with confidence</span>
              </li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Beginner trading courses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Video tutorials & webinars</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Trading glossary & guides</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0 flex-shrink-0" />
                <span className="text-gray-700">Demo account access</span>
              </li>
            </ul>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
              View Resources <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start with as little as $1 and receive a 100% bonus on your first deposit
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Open Your Account Today
          </button>
        </div>
      </div>
    </section>
  );
}
