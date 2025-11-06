import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactsPage() {
  const contacts = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: 'Email',
      content: 'support@worldforex.com',
      description: 'Ответим в течение 2 часов'
    },
    {
      icon: <Phone className="h-8 w-8 text-green-600" />,
      title: 'Телефон',
      content: '+1 (855) 123-4567',
      description: 'Доступен 24/7'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: 'Онлайн-чат',
      content: 'Написать в чат',
      description: 'Мгновенные ответы'
    }
  ];

  const offices = [
    {
      country: 'Сент-Винсент и Гренадины',
      address: 'Suite 305, Griffith Corporate Centre, Beachmont, Kingstown',
      description: 'Главный офис'
    },
    {
      country: 'Сент-Люсия',
      address: 'First Floor, First St Vincent Bank Ltd Building, James Street, Kingstown',
      description: 'Региональный офис'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Наша команда поддержки работает 24/7
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Напишите нам</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Тема сообщения</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Вопрос о торговле"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Отправить сообщение
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши офисы</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
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
              <h3 className="text-2xl font-bold mb-3">Время работы</h3>
              <div className="space-y-2 text-blue-100">
                <p className="flex justify-between">
                  <span>Поддержка:</span>
                  <span className="font-semibold">24/7</span>
                </p>
                <p className="flex justify-between">
                  <span>Торговля:</span>
                  <span className="font-semibold">24/5</span>
                </p>
                <p className="flex justify-between">
                  <span>Офис:</span>
                  <span className="font-semibold">Пн-Пт 9:00-18:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">Часто задаваемые вопросы</h4>
          <p className="text-blue-800 mb-4">
            Перед тем как связаться с нами, ознакомьтесь с нашим разделом FAQ — возможно, вы найдете там ответ на свой вопрос.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Перейти к FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
