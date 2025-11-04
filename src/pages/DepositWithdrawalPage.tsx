import { CreditCard, Wallet, Bitcoin, CheckCircle, Clock, Shield } from 'lucide-react';

export default function DepositWithdrawalPage() {
  const methods = [
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600" />,
      title: 'Банковские карты',
      description: 'Visa, Mastercard, МИР',
      depositTime: 'Мгновенно',
      withdrawTime: '1-3 рабочих дня',
      minDeposit: '$10',
      fee: '0%'
    },
    {
      icon: <Wallet className="h-12 w-12 text-green-600" />,
      title: 'Электронные кошельки',
      description: 'Skrill, Neteller, PayPal',
      depositTime: 'Мгновенно',
      withdrawTime: 'До 24 часов',
      minDeposit: '$10',
      fee: '0%'
    },
    {
      icon: <Bitcoin className="h-12 w-12 text-orange-600" />,
      title: 'Криптовалюты',
      description: 'Bitcoin, Ethereum, USDT',
      depositTime: '10-30 минут',
      withdrawTime: '10-30 минут',
      minDeposit: '$50',
      fee: 'Комиссия сети'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Пополнение и вывод средств</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Удобные способы пополнения счета и быстрый вывод прибыли
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Пополнение:</span>
                  <span className="font-semibold text-gray-900">{method.depositTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Вывод:</span>
                  <span className="font-semibold text-gray-900">{method.withdrawTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Минимум:</span>
                  <span className="font-semibold text-gray-900">{method.minDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Комиссия:</span>
                  <span className="font-semibold text-green-600">{method.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как пополнить счет</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Войдите</h4>
              <p className="text-sm text-gray-600">Войдите в личный кабинет</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Выберите способ</h4>
              <p className="text-sm text-gray-600">Выберите удобный метод</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Введите сумму</h4>
              <p className="text-sm text-gray-600">Укажите сумму пополнения</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Готово</h4>
              <p className="text-sm text-gray-600">Средства на счете</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Важная информация</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Без комиссий</h4>
                <p className="text-sm text-gray-600">Мы не взимаем комиссии за пополнение и вывод средств</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Быстрая обработка</h4>
                <p className="text-sm text-gray-600">Заявки на вывод обрабатываются в течение 24 часов</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Безопасность</h4>
                <p className="text-sm text-gray-600">Все транзакции защищены SSL-шифрованием</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">Правила вывода средств:</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Вывод осуществляется тем же способом, что и пополнение</li>
            <li>• Минимальная сумма вывода — $10 (кроме криптовалют)</li>
            <li>• Для первого вывода необходимо верифицировать аккаунт</li>
            <li>• Вывод прибыли возможен только после совершения хотя бы одной сделки</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
