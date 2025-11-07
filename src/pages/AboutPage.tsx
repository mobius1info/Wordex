import { Building2, Award, Users, Globe, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  t: Record<string, unknown>;
}

export default function AboutPage({ t }: AboutPageProps) {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.nav.about}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A trusted broker with 13+ years of experience in global financial markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2011, Vantage Point has grown to become one of the most trusted and innovative online brokers in the financial industry. Our commitment to excellence and customer satisfaction has earned us the trust of over 350,000 clients across 50 countries.
            </p>
            <p className="text-gray-600 mb-4">
              We are dedicated to providing our clients with the best trading platforms, competitive spreads, and exceptional customer support. Our team of experts works tirelessly to ensure your trading experience is smooth, secure, and profitable.
            </p>
            <p className="text-gray-600">
              At Vantage Point, we believe in transparency, integrity, and innovation. We continuously upgrade our platforms and services to meet the evolving needs of our trading community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">13+ Years</h3>
              </div>
              <p className="text-gray-600">Experience in financial markets with consistent growth</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">350,000+</h3>
              </div>
              <p className="text-gray-600">Active clients worldwide trusting us with their trades</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">50+ Countries</h3>
              </div>
              <p className="text-gray-600">Global presence with localized support and services</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regulated & Licensed</h3>
                <p className="text-gray-600">
                  We are fully regulated and licensed to operate in major jurisdictions worldwide
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Spreads</h3>
                <p className="text-gray-600">
                  Enjoy spreads from 0 pips on major currency pairs
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available around the clock to assist you
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Building2 className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Platforms</h3>
                <p className="text-gray-600">
                  Trade on our secure, fast, and user-friendly platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Become part of a global community of successful traders
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Open Account Now
          </button>
        </div>
      </div>
    </section>
  );
}
