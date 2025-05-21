import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, UserPlus, Coffee } from 'lucide-react';

type DonationType = 'one-time' | 'monthly';

const DonationForm: React.FC = () => {
  const { t } = useTranslation();
  const [donationType, setDonationType] = useState<DonationType>('one-time');
  const [donationAmount, setDonationAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonationTypeChange = (type: DonationType) => {
    setDonationType(type);
    // Reset amount when changing donation type
    setDonationAmount(1000);
    setCustomAmount('');
  };

  const handlePresetAmountClick = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = donationAmount || (customAmount ? parseInt(customAmount) : 0);
    
    // Here you would integrate with a payment gateway
    console.log('Processing donation:', {
      type: donationType,
      amount: finalAmount,
    });
    
    alert(`Thank you for your ${donationType} donation of ₹${finalAmount}!`);
  };

  const presetAmounts = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-custom p-6 md:p-8">
      <div className="tabs mb-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleDonationTypeChange('one-time')}
            className={`flex-1 py-4 font-medium text-center border-b-2 ${
              donationType === 'one-time'
                ? 'border-secondary-500 text-secondary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('donate.oneTime')}
          </button>
          <button
            onClick={() => handleDonationTypeChange('monthly')}
            className={`flex-1 py-4 font-medium text-center border-b-2 ${
              donationType === 'monthly'
                ? 'border-secondary-500 text-secondary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('donate.monthly')}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-primary-900 font-medium mb-3">{t('donate.amount')}</label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((amount) => (
              <button
                key={amount.value}
                type="button"
                onClick={() => handlePresetAmountClick(amount.value)}
                className={`py-3 rounded-lg border transition-colors ${
                  donationAmount === amount.value
                    ? 'bg-secondary-500 border-secondary-500 text-white'
                    : 'border-gray-300 hover:border-secondary-300 text-primary-700'
                }`}
              >
                {amount.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">₹</span>
            </div>
            <input
              type="number"
              placeholder={t('donate.custom')}
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {donationType === 'monthly' && (
          <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <UserPlus className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium text-primary-900 mb-1">{t('donate.childSponsorship')}</h4>
                <p className="text-primary-700 text-sm mb-3">{t('donate.childSponsorshipText')}</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors inline-flex items-center"
                >
                  <Heart size={16} className="mr-2" />
                  {t('donate.sponsorButton')}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-3 mb-6">
          <p className="text-sm text-primary-700">
            <Coffee size={16} className="inline-block mr-2" />
            {t('donate.taxBenefit')}
          </p>
          <p className="text-sm text-primary-700">
            <Heart size={16} className="inline-block mr-2" />
            {t('donate.transparency')}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-button"
        >
          {t('donate.donateButton')}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;