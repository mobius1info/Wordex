import { Award, Users, TrendingUp, Shield, Globe, Target } from 'lucide-react';

export default function AboutCompanyPage() {
  const achievements = [
    { year: '2015', title: 'Основание компании', description: 'Начало работы на рынке Forex' },
    { year: '2017', title: '50,000+ клиентов', description: 'Достигнута отметка в 50 тысяч активных трейдеров' },
    { year: '2019', title: 'Международная экспансия', description: 'Открытие офисов в 15 странах мира' },
    { year: '2021', title: '100,000+ клиентов', description: 'Удвоение клиентской базы' },
    { year: '2023', title: 'Лидер отрасли', description: 'Признание как один из топ-10 брокеров мира' }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Надежность',
      description: 'Защита средств клиентов и прозрачность всех операций'
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход и поддержка 24/7'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: 'Инновации',
      description: 'Передовые технологии и торговые инструменты'
    },
    {
      icon: <Globe className="h-12 w-12 text-orange-600" />,
      title: 'Глобальность',
      description: 'Присутствие в более чем 50 странах мира'
    }
  ];

  const stats = [
    { value: '150,000+', label: 'Активных клиентов' },
    { value: '$2B+', label: 'Торговый оборот в месяц' },
    { value: '8 лет', label: 'На рынке' },
    { value: '50+', label: 'Стран присутствия' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">О компании World Forex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы — международная финансовая компания, предоставляющая услуги трейдинга на валютном рынке Forex.
            С 2015 года помогаем трейдерам по всему миру достигать финансовых целей.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Предоставить каждому человеку доступ к мировым финансовым рынкам,
              обеспечивая лучшие условия для трейдинга, современные технологии
              и профессиональную поддержку на каждом этапе торговли.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="bg-gray-50 p-4 rounded-lg mr-6 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Наши достижения</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-3xl font-bold text-blue-600 mb-2">{achievement.year}</h4>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h5>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Регулирование и лицензии</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              World Forex зарегистрирована в Сент-Винсенте и Гренадинах и Сент-Люсии.
              Компания работает в строгом соответствии с международными стандартами финансовой деятельности.
            </p>
            <p>
              Мы следуем политике AML (Anti-Money Laundering) и KYC (Know Your Customer),
              обеспечивая безопасность средств наших клиентов и предотвращая финансовые преступления.
            </p>
            <p>
              Средства клиентов хранятся на сегрегированных счетах в ведущих европейских банках,
              что гарантирует их полную защиту и доступность.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
