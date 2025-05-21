import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('navigation.home') },
    { to: '/about', label: t('navigation.about') },
    { to: '/gallery', label: t('navigation.gallery') },
    { to: '/donate', label: t('navigation.donate') }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <Logo className={`h-10 w-auto ${scrolled ? 'text-primary-900' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-lg md:text-xl transition-colors ${
              scrolled ? 'text-primary-900' : 'text-white'
            }`}>
              Aadarsh Navjyoti
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  font-medium text-base transition-colors hover:text-secondary-500
                  ${scrolled 
                    ? (isActive ? 'text-secondary-500' : 'text-primary-900') 
                    : (isActive ? 'text-secondary-300' : 'text-white')
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/donate"
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 
                ${scrolled 
                  ? 'bg-secondary-500 text-white hover:bg-secondary-600' 
                  : 'bg-white text-secondary-500 hover:bg-secondary-50'
                }
              `}
            >
              {t('home.donateButton')}
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-primary-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-4 p-4 absolute left-4 right-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `
                    font-medium px-3 py-2 rounded-md transition-colors
                    ${isActive 
                      ? 'bg-primary-100 text-secondary-500' 
                      : 'text-primary-900 hover:bg-primary-50'
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/donate"
                className="bg-secondary-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-secondary-600 transition-colors"
              >
                {t('home.donateButton')}
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;