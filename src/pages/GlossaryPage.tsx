import { BookOpen, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function GlossaryPage() {
  const terms = [
    { letter: 'A', terms: [
      { term: 'Ask', definition: 'Цена, по которой вы можете купить валюту. Также называется ценой предложения.' },
      { term: 'Аналитика', definition: 'Изучение рынка с помощью технического и фундаментального анализа для прогнозирования движения цен.' }
    ]},
    { letter: 'B', terms: [
      { term: 'Bid', definition: 'Цена, по которой вы можете продать валюту. Также называется ценой спроса.' },
      { term: 'Брокер', definition: 'Компания, предоставляющая доступ к торговле на финансовых рынках.' }
    ]},
    { letter: 'D', terms: [
      { term: 'Демо-счет', definition: 'Учебный счет с виртуальными деньгами для практики торговли без риска.' },
      { term: 'Дивиденд', definition: 'Часть прибыли компании, выплачиваемая акционерам.' }
    ]},
    { letter: 'E', terms: [
      { term: 'ECN', definition: 'Electronic Communication Network — электронная система, обеспечивающая прямой доступ к межбанковской ликвидности.' }
    ]},
    { letter: 'F', terms: [
      { term: 'Forex', definition: 'Foreign Exchange — международный валютный рынок, где торгуются валюты.' },
      { term: 'Фундаментальный анализ', definition: 'Метод анализа рынка на основе экономических показателей и новостей.' }
    ]},
    { letter: 'L', terms: [
      { term: 'Leverage (Кредитное плечо)', definition: 'Возможность торговать суммами, превышающими ваш депозит. Например, плечо 1:100 позволяет торговать суммой в 100 раз большей вашего капитала.' },
      { term: 'Лот', definition: 'Стандартная единица объема сделки. 1 стандартный лот = 100,000 единиц базовой валюты.' }
    ]},
    { letter: 'M', terms: [
      { term: 'Маржа', definition: 'Залоговая сумма, необходимая для открытия и поддержания позиции.' },
      { term: 'MetaTrader', definition: 'Популярная торговая платформа для трейдинга на Forex и CFD рынках.' }
    ]},
    { letter: 'P', terms: [
      { term: 'Pip (Пункт)', definition: 'Минимальное изменение цены валютной пары. Для большинства пар это 0.0001.' },
      { term: 'Позиция', definition: 'Открытая сделка на покупку (длинная) или продажу (короткая) финансового инструмента.' }
    ]},
    { letter: 'S', terms: [
      { term: 'Спред', definition: 'Разница между ценой покупки (Ask) и ценой продажи (Bid). Это основная комиссия брокера.' },
      { term: 'Stop Loss', definition: 'Ордер на автоматическое закрытие позиции при достижении определенного уровня убытка.' },
      { term: 'Swap', definition: 'Плата или начисление за перенос позиции на следующий торговый день.' }
    ]},
    { letter: 'T', terms: [
      { term: 'Take Profit', definition: 'Ордер на автоматическое закрытие позиции при достижении желаемого уровня прибыли.' },
      { term: 'Технический анализ', definition: 'Метод прогнозирования цен на основе изучения графиков и индикаторов.' },
      { term: 'Тренд', definition: 'Направление движения цены: восходящий (бычий), нисходящий (медвежий) или боковой.' }
    ]},
    { letter: 'V', terms: [
      { term: 'Volatility (Волатильность)', definition: 'Степень изменчивости цены. Высокая волатильность означает большие колебания цены.' },
      { term: 'VPS', definition: 'Virtual Private Server — виртуальный сервер для бесперебойной работы торговых роботов 24/7.' }
    ]}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Словарь терминов Forex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все термины и определения трейдинга в одном месте
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск термина..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center">
            <BookOpen className="h-12 w-12 mr-4" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Изучайте терминологию</h2>
              <p className="text-lg opacity-90">
                Понимание терминов — ключ к успешной торговле на Forex
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {terms.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-3xl font-bold mr-4">
                  {section.letter}
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>

              <div className="space-y-6">
                {section.terms.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">Не нашли нужный термин?</h4>
          <p className="text-blue-800 mb-4">
            Напишите нам, и мы добавим объяснение в словарь
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}
