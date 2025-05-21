import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import DonationForm from '../components/donations/DonationForm';
import ImpactInfo from '../components/donations/ImpactInfo';

const Donations: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20 bg-cover bg-center" style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/7550222/pexels-photo-7550222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'multiply'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('donate.title')}</h1>
            <p className="text-xl text-primary-100 mb-4">{t('donate.subtitle')}</p>
            <div className="w-20 h-1 bg-secondary-300 mx-auto my-6"></div>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <DonationForm />
            </div>
            <div>
              <ImpactInfo />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Donations;