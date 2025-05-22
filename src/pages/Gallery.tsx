import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GalleryGrid from "../components/gallery/GalleryGrid";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="pt-20 bg-fit bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./gallery_images/image3.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("gallery.title")}
            </h1>
            <div className="w-20 h-1 bg-secondary-300 mx-auto my-6"></div>
          </div>
        </div>
      </div>

      <GalleryGrid />
    </motion.div>
  );
};

export default Gallery;
