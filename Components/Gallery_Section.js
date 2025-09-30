"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Modal from "./Modal";

export default function Gallery_Section() {
  const [activeTab, setActiveTab] = useState("interior");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const interiorImages = [
    "/danube/interior1.webp",
    "/danube/interior2.webp",
    "/danube/interior3.webp",
  ];
  
  const planImages = [
    "/assets/14.webp", 
    "/assets/15.webp",
  ];

  const images = activeTab === "interior" ? interiorImages : planImages;

  const openSlider = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => setIsOpen(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 md:w-10 md:h-10 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  return (
    <div className="max-w-[1390px] mx-auto px-4 py-7 md:py-10 md:mb-5 bg-white">
      {/* Header */}
      <div className="text-center mb-5 md:mb-7">
        <div className="w-14 md:w-18 mx-auto mb-2">
          <Image
            src="/assets/Banner_Logo.webp"
            width={112}
            height={112}
            className="w-full h-auto"
            alt="Gallery Logo"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-extralight text-[#0F4977] tracking-wider mb-1">
          GALLERY
        </h2>
        <div className="w-12 h-0.5 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Tabs */}
<div className="flex justify-center mb-5 md:mb-8">
  <div className="flex gap-2 sm:gap-4 bg-gray-100 rounded-full p-1 text-sm sm:text-base tracking-wider">
    {["interior", "plans"].map((tab, index) => {
      const isActive = activeTab === tab;
      return (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 sm:px-5 rounded-full transition-all cursor-pointer duration-300 font-medium ${
            isActive
              ? "bg-yellow-600 text-white shadow-md"
              : "text-gray-700 hover:text-yellow-600"
          }`}
          aria-pressed={isActive}
        >
          {tab === "interior" ? "INTERIOR" : "FLOOR PLAN"}
        </button>
      );
    })}
  </div>
</div>


      {/* Image Grid */}
      {/* Image Grid */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4 }}
    className={`${
      activeTab === "plans"
        ? "flex justify-center flex-wrap gap-4 md:gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    }`}
  >
    {images.map((src, i) => (
  <div
    key={i}
    onClick={() => {
      if (activeTab === "plans") {
        setModalOpen(true); // open floor plan modal
      } else {
        openSlider(i); // open gallery slider
      }
    }}
    className="group relative w-full max-w-[460px] mx-auto h-64 sm:h-72 md:h-80 lg:h-94 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
  >
    <Image
      src={src}
      alt={`Gallery ${i + 1}`}
      fill
      className={`object-cover transition-transform duration-500 group-hover:scale-110 
        ${activeTab === "plans" ? "blur-[2px]" : ""}`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <PlusIcon />
    </div>
  </div>
))}

  </motion.div>
</AnimatePresence>


      {/* Modal Slider with Swiper */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={closeSlider}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl z-50 hover:text-yellow-500 transition-colors duration-200"
              aria-label="Close gallery"
            >
              ✕
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white text-sm sm:text-base z-50">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Main Swiper */}
            <div className="w-full max-w-6xl h-[60vh] sm:h-[70vh] md:h-[75vh] mb-4">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                thumbs={{ 
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null 
                }}
                initialSlide={selectedIndex}
                onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
                className="w-full h-full rounded-lg overflow-hidden"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority={index === selectedIndex}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button 
                className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl z-40 hover:text-yellow-500 transition-colors duration-200"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button 
                className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl z-40 hover:text-yellow-500 transition-colors duration-200"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Thumbnail Swiper */}
            <div className="w-full max-w-4xl h-16 sm:h-20 md:h-24">
              <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView="auto"
                freeMode={true}
                watchSlidesProgress={true}
                className="w-full h-full"
                breakpoints={{
                  320: {
                    slidesPerView: 4,
                    spaceBetween: 6,
                  },
                  640: {
                    slidesPerView: 6,
                    spaceBetween: 8,
                  },
                  768: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 10,
                    spaceBetween: 12,
                  },
                }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index} className="!w-auto">
                    <div 
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                        index === selectedIndex 
                          ? 'border-yellow-500 opacity-100' 
                          : 'border-transparent opacity-60 hover:opacity-80'
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #eab308;
        }
        .swiper-button-disabled {
          opacity: 0.3;
        }
      `}</style>
            {modalOpen && <Modal onClose={() => setModalOpen(false)} isOpen={modalOpen} />}
      
    </div>
  );
}