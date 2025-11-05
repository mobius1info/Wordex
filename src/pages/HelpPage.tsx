import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

interface HelpPageProps {
  t: Record<string, unknown>;
}

export default function HelpPage({ t }: HelpPageProps) {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.nav.help}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Contact our support team 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 text-center hover:shadow-xl transition-shadow">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Speak with our support team directly
            </p>
            <p className="text-blue-600 font-semibold">+1 (855) 123-4567</p>
            <p className="text-sm text-gray-500 mt-2">24 hours a day, 7 days a week</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 text-center hover:shadow-xl transition-shadow">
            <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Send us your questions anytime
            </p>
            <p className="text-purple-600 font-semibold">support@wforex.com</p>
            <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 text-center hover:shadow-xl transition-shadow">
            <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with support instantly
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
              Start Chat →
            </button>
            <p className="text-sm text-gray-500 mt-2">Available now</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do I open an account?</h3>
              <p className="text-gray-600">
                Opening an account is simple and takes just 2 minutes. Click on "Open Account" in the top menu, fill in your information, and verify your identity.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is the minimum deposit?</h3>
              <p className="text-gray-600">
                The minimum deposit is just $1. With our 100% bonus offer, your first deposit can be doubled, giving you more capital to start trading.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How can I withdraw my funds?</h3>
              <p className="text-gray-600">
                You can withdraw funds through the same method you used to deposit. We support bank cards, e-wallets, and cryptocurrencies. Most withdrawals are processed within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is my account secure?</h3>
              <p className="text-gray-600">
                Yes, we use the latest encryption technology and comply with international security standards. Your personal and financial information is completely protected.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Visit our help center for detailed guides and tutorials
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Help Center
          </button>
        </div>
      </div>
    </section>
  );
}
