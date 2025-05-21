import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-center bg-primary-50 py-20"
    >
      <div className="text-center px-4">
        <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
          <AlertTriangle size={50} className="text-primary-700" />
        </div>
        <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Page Not Found</h2>
        <p className="text-primary-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-secondary-500 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors"
        >
          <Home size={20} className="mr-2" />
          Go to Homepage
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;