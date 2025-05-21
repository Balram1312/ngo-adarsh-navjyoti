import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-white p-3 rounded-full shadow-button flex items-center justify-center hover:bg-primary-50 transition-colors duration-300"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe size={24} className="text-primary-700" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-custom p-2 min-w-32 animate-fade-in">
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
              i18n.language === 'en' 
                ? 'bg-primary-100 text-primary-900 font-medium' 
                : 'text-primary-700 hover:bg-primary-50'
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('hi')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
              i18n.language === 'hi' 
                ? 'bg-primary-100 text-primary-900 font-medium' 
                : 'text-primary-700 hover:bg-primary-50'
            }`}
          >
            हिंदी (Hindi)
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;