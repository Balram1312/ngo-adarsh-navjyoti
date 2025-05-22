import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ImpactSection: React.FC = () => {
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

  const impactAreas = [
    {
      icon: BookOpen,
      title: t("home.impactSkillDevelopment"),
      text: t("home.impactSkillDevelopmentText"),
      color: "bg-accent-100 text-accent-700",
    },
    {
      icon: Users,
      title: t("home.impactWomenEmpowerment"),
      text: t("home.impactWomenEmpowermentText"),
      color: "bg-secondary-100 text-secondary-700",
    },
    {
      icon: Heart,
      title: t("home.impactSocialMedicalServices"),
      text: t("home.impactSocialMedicalServicesText"),
      color: "bg-primary-100 text-primary-700",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            {t("home.impactTitle")}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-custom p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full ${area.color} flex items-center justify-center mx-auto mb-4`}
              >
                <area.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {area.title}
              </h3>
              <p className="text-primary-600">{area.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
