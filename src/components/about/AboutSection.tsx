import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Lightbulb } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            {t('about.subtitle')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="space-y-10"
        >
          {/* History */}
          <motion.div variants={item} className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center">
                <BookOpen size={32} />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                {t('about.history')}
              </h3>
              <p className="text-primary-700">
                {t('about.historyText')}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div variants={item} className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-secondary-100 text-secondary-700 w-16 h-16 rounded-full flex items-center justify-center">
                <Heart size={32} />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                {t('about.mission')}
              </h3>
              <p className="text-primary-700">
                {t('about.missionText')}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={item} className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-accent-100 text-accent-700 w-16 h-16 rounded-full flex items-center justify-center">
                <Lightbulb size={32} />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                {t('about.vision')}
              </h3>
              <p className="text-primary-700">
                {t('about.visionText')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;