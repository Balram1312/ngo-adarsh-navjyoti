import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ImpactSection from '../components/home/ImpactSection';
import UpdatesSection from '../components/home/UpdatesSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ImpactSection />
      <UpdatesSection />
    </motion.div>
  );
};

export default Home;