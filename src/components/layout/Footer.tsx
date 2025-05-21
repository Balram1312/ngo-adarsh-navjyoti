import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto text-white" />
              <span className="ml-2 font-bold text-xl">Aadarsh Navjyoti</span>
            </div>
            <p className="text-primary-100 mb-4">
              Empowering rural communities through education, health, and social empowerment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className="text-white hover:text-secondary-300 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              {t('footer.links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-100 hover:text-white transition-colors">
                  {t('navigation.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-100 hover:text-white transition-colors">
                  {t('navigation.donate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-300 mt-1 mr-2 flex-shrink-0" />
                <span className="text-primary-100">
                  {t('about.locationText')}
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-300 mr-2 flex-shrink-0" />
                <a 
                  href="mailto:info@navjyotivikas.org" 
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  info@navjyotivikas.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-300 mr-2 flex-shrink-0" />
                <a 
                  href="tel:+911234567890" 
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  +91-1234567890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              {t('footer.subscribe')}
            </h3>
            <p className="text-primary-100 mb-4">
              {t('footer.subscribeText')}
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-300"
              />
              <button 
                type="submit"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                {t('footer.submitButton')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-10 pt-6 text-center">
          <p className="text-primary-300 text-sm">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
          <p className="text-primary-400 text-xs mt-2">
            {t('footer.registration')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;