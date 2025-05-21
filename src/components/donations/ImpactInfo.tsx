import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImpactInfo: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impactItems = [
    {
      icon: BookOpen,
      text: t('donate.impactList.education'),
    },
    {
      icon: Heart,
      text: t('donate.impactList.health'),
    },
    {
      icon: Coffee,
      text: t('donate.impactList.meals'),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-primary-50 rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-primary-900 mb-4">
        {t('donate.impactTitle')}
      </h3>
      
      <p className="text-primary-700 mb-6">
        {t('donate.impactText')}
      </p>
      
      <motion.ul
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="space-y-4"
      >
        {impactItems.map((impact, index) => {
          const Icon = impact.icon;
          return (
            <motion.li key={index} variants={item} className="flex items-start">
              <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                <Icon size={20} className="text-secondary-500" />
              </div>
              <span className="text-primary-700">{impact.text}</span>
            </motion.li>
          );
        })}
      </motion.ul>
      
      <div className="mt-8">
        <img 
          src="https://images.pexels.com/photos/8364057/pexels-photo-8364057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Impact of donations" 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImpactInfo;