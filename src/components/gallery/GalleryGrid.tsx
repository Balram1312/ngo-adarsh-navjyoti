import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Gallery photo types
type PhotoCategory = "general";

interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategory;
}

const GalleryGrid: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter] = useState<PhotoCategory | "all">("all");
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample gallery photos
  const photos: GalleryPhoto[] = [
    {
      alt: "",
      category: "general",
      id: 1,
      src: "./gallery_images/image1.jpg",
    },
    {
      alt: "",
      category: "general",
      id: 2,
      src: "./gallery_images/image2.jpg",
    },
    {
      alt: "",
      category: "general",
      id: 3,
      src: "./gallery_images/image3.jpg",
    },
    {
      alt: "",
      category: "general",
      id: 4,
      src: "./gallery_images/image4.jpg",
    },
    {
      alt: "",
      category: "general",
      id: 5,
      src: "./gallery_images/image5.jpg",
    },
  ];

  // const filterCategories = [
  //   { value: "all", label: t("gallery.categories.all") },
  //   { value: "education", label: t("gallery.categories.education") },
  //   { value: "health", label: t("gallery.categories.health") },
  //   { value: "women", label: t("gallery.categories.women") },
  //   { value: "community", label: t("gallery.categories.community") },
  // ];

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  // const handleFilterChange = (category: PhotoCategory | "all") => {
  //   setActiveFilter(category);
  //   setVisiblePhotos(6);
  // };

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => Math.min(prev + 3, filteredPhotos.length));
  };

  const visibleFilteredPhotos = filteredPhotos.slice(0, visiblePhotos);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-primary-600 mb-6">
            {t("gallery.subtitle")}
          </p>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  handleFilterChange(category.value as PhotoCategory | "all")
                }
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.value
                    ? "bg-secondary-500 text-white"
                    : "bg-primary-100 text-primary-700 hover:bg-primary-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div> */}
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleFilteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={item}
              className="overflow-hidden rounded-xl shadow-custom group"
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visiblePhotos < filteredPhotos.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMorePhotos}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              {t("gallery.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
