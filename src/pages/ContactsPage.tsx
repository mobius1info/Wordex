import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { contactsTranslations } from '../translations/contactsTranslations';

interface ContactsPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function ContactsPage({ language = 'ru' }: ContactsPageProps) {
  const t = contactsTranslations[language] || contactsTranslations.ru;

  const contacts = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: t.contacts[0].title,
      content: t.contacts[0].content,
      description: t.contacts[0].description
    },
    {
      icon: <Phone className="h-8 w-8 text-green-600" />,
      title: t.contacts[1].title,
      content: t.contacts[1].content,
      description: t.contacts[1].description
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: t.contacts[2].title,
      content: t.contacts[2].content,
      description: t.contacts[2].description
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">{contact.content}</p>
              <p className="text-sm text-gray-600">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.form.title}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.nameLabel}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.emailLabel}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.subjectLabel}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.form.subjectPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.messageLabel}</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.form.messagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {t.form.submitButton}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.offices.title}</h2>
              <div className="space-y-6">
                {t.offices.list.map((office, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <div className="flex items-start mb-2">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{office.country}</h4>
                        <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                        <span className="text-xs text-blue-600 font-semibold">{office.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{t.workingHours.title}</h3>
              <div className="space-y-2 text-blue-100">
                <p className="flex justify-between">
                  <span>{t.workingHours.support}</span>
                  <span className="font-semibold">{t.workingHours.supportTime}</span>
                </p>
                <p className="flex justify-between">
                  <span>{t.workingHours.trading}</span>
                  <span className="font-semibold">{t.workingHours.tradingTime}</span>
                </p>
                <p className="flex justify-between">
                  <span>{t.workingHours.office}</span>
                  <span className="font-semibold">{t.workingHours.officeTime}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">{t.faq.title}</h4>
          <p className="text-blue-800 mb-4">
            {t.faq.text}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {t.faq.button}
          </button>
        </div>
      </div>
    </div>
  );
}
