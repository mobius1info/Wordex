import { CreditCard, Wallet, Bitcoin, CheckCircle, Clock, Shield } from 'lucide-react';
import { depositWithdrawalTranslations } from '../translations/depositWithdrawalTranslations';

interface DepositWithdrawalPageProps {
  language?: 'ru' | 'uk' | 'en' | 'tr' | 'zh';
}

export default function DepositWithdrawalPage({ language = 'ru' }: DepositWithdrawalPageProps) {
  const t = depositWithdrawalTranslations[language] || depositWithdrawalTranslations.ru;

  const icons = [
    <CreditCard className="h-12 w-12 text-blue-600" />,
    <Wallet className="h-12 w-12 text-green-600" />,
    <Bitcoin className="h-12 w-12 text-orange-600" />
  ];

  const infoIcons = [CheckCircle, Clock, Shield];
  const infoColors = ['text-green-500', 'text-blue-500', 'text-purple-500'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.methods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4">
                  {icons[index]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.labels.deposit}</span>
                  <span className="font-semibold text-gray-900">{method.depositTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.labels.withdrawal}</span>
                  <span className="font-semibold text-gray-900">{method.withdrawTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.labels.minimum}</span>
                  <span className="font-semibold text-gray-900">{method.minDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.labels.commission}</span>
                  <span className="font-semibold text-green-600">{method.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.howToDeposit.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.howToDeposit.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.importantInfo.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.importantInfo.items.map((item, index) => {
              const Icon = infoIcons[index];
              return (
                <div key={index} className="flex items-start">
                  <Icon className={`h-6 w-6 ${infoColors[index]} mr-3 flex-shrink-0 mt-1`} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">{t.withdrawalRules.title}</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            {t.withdrawalRules.rules.map((rule, index) => (
              <li key={index}>• {rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
