import { HelpCircle, BookOpen, DollarSign, TrendingUp, Shield, Target } from 'lucide-react';

export default function ForexHelpPage() {
  const topics = [
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'Что такое Forex?',
      content: 'Forex (Foreign Exchange) — международный валютный рынок, где торгуются валюты разных стран. Это крупнейший финансовый рынок в мире с оборотом более 6 триллионов долларов в день.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Как работает торговля?',
      content: 'Вы покупаете одну валюту и продаете другую. Если курс изменится в вашу пользу — вы получаете прибыль. Торговля ведется парами, например EUR/USD.'
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: 'Кредитное плечо',
      content: 'Кредитное плечо позволяет торговать суммами, превышающими ваш депозит. Например, с плечом 1:100 имея $100, вы можете открыть позицию на $10,000.'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Управление рисками',
      content: 'Всегда используйте Stop Loss для ограничения убытков. Не рискуйте более 1-2% депозита на одну сделку. Диверсифицируйте торговлю между разными инструментами.'
    }
  ];

  const faqs = [
    {
      question: 'Сколько нужно денег для начала?',
      answer: 'Минимальный депозит для открытия счета — всего $10. Однако мы рекомендуем начинать с $100-500 для более комфортной торговли и управления рисками.'
    },
    {
      question: 'Какие часы торговли на Forex?',
      answer: 'Рынок Forex работает 24 часа в сутки 5 дней в неделю, с понедельника 00:00 по пятницу 23:59 по времени GMT.'
    },
    {
      question: 'Что такое спред?',
      answer: 'Спред — это разница между ценой покупки (Ask) и ценой продажи (Bid). Это основная комиссия брокера за предоставление услуг торговли.'
    },
    {
      question: 'Можно ли потерять больше депозита?',
      answer: 'Нет, у нас действует защита от отрицательного баланса. Максимум, что вы можете потерять — это сумма вашего депозита.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Помощь по Forex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все что нужно знать о торговле на валютном рынке
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-12 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Нужна помощь?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наша служба поддержки работает 24/7 и готова ответить на любые вопросы
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Написать в чат
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <div className="bg-gray-50 p-3 rounded-lg mr-4">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600">{topic.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
