'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AmentiesBelowSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      title: "SAVOUR LIFE LIKE ROYALTY",
      description:
        "Sheikh Zayed Road at your doorstep. Within walking distance of the Jebel Ali Metro Station. Fast access to Dubai Marina, Al Khail, Downtown, DIFC, and beyond. This is a location that moves with you—no detours, no delays. Whether it’s the morning rush, a late-night grocery run, or weekend plans across town, every direction feels effortless. All paths point to Sobha Central.",
      mainImage: "/assets/02.webp",
      thumbImage: "/assets/02.webp",
    },
    {
      title: "ELEGANT ENTERTAINING SPACES",
      description:
        "Residing on Sheikh Zayed Road is synonymous with experiencing Dubai’s dynamic rhythm firsthand. With an array of dining, shopping and entertainment options, sophistication and convenience blends harmoniously. Life on this iconic address guarantees an exhilarating and enriched life.",
      mainImage: "/assets/07.webp",
      thumbImage: "/assets/07.webp",
    },
  ];

  // Autoplay effect
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [slides.length]);

  const resetAutoplay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="flex flex-col lg:flex-row h-full  md:min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center flex-1 md:py-0 py-7 p-2 sm:p-10 lg:p-16 bg-white relative">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-6">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600 text-lg lg:text-lg mb-6">
              {slides[currentSlide].description}
            </p>

            {/* Dots */}
            <div className="flex space-x-3 mb-6 lg:justify-start items-center justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrows - Mobile only */}
            <div className="flex gap-4 lg:hidden items-center  justify-center">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnail - Only large screens */}
          <div className="hidden lg:block absolute bottom-8 right-8 w-64 h-40 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={slides[currentSlide].thumbImage}
              alt="Slide thumbnail"
              fill
              sizes="(min-width: 1024px) 256px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-0">
          <Image
            src={slides[currentSlide].mainImage}
            alt={slides[currentSlide].title}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />

          {/* Desktop Arrows */}
          <div className="hidden lg:flex absolute top-1/2 left-8 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 right-8 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmentiesBelowSlider;
