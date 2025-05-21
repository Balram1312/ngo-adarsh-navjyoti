import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900/90" />
      
      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('home.tagline')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('home.subTagline')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              to="/donate" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-button"
            >
              {t('home.donateButton')}
            </Link>
            <Link 
              to="/gallery" 
              className="bg-white hover:bg-primary-50 text-primary-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-button"
            >
              {t('home.workButton')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;