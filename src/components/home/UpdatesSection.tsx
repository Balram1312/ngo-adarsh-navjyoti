import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const UpdatesSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Recent Updates */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-white rounded-xl shadow-custom p-6 mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
              {t('home.updateTitle')}
            </h2>
            
            <div className="space-y-4">
              {/* Update Card */}
              <div className="border-l-4 border-secondary-500 pl-4 py-1">
                <div className="flex items-center text-primary-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{t('home.updateDate')}</span>
                </div>
                <p className="text-primary-700">{t('home.updateText')}</p>
              </div>
              
              {/* More updates could be added here */}
              
              <a 
                href="#" 
                className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium mt-4"
              >
                <span>View all updates</span>
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 bg-primary-900 rounded-xl shadow-custom p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 text-6xl opacity-20">❝</div>
            
            <h2 className="text-2xl font-bold mb-6 relative z-10">{t('home.testimonialTitle')}</h2>
            
            <p className="text-primary-100 mb-6 relative z-10 italic">
              "{t('home.testimonialText')}"
            </p>
            
            <div className="relative z-10">
              <p className="font-semibold">{t('home.testimonialAuthor')}</p>
            </div>
            
            <div className="absolute bottom-4 right-4 text-6xl opacity-20">❞</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;