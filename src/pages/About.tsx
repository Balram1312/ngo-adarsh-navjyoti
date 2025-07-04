import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutSection from '../components/about/AboutSection';
import ContactSection from '../components/about/ContactSection';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20 bg-cover bg-center" style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/7550305/pexels-photo-7550305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'multiply'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <div className="w-20 h-1 bg-secondary-300 mx-auto my-6"></div>
          </div>
        </div>
      </div>
      
      <AboutSection />
      <ContactSection />
    </motion.div>
  );
};

export default About;