import { useState, useRef } from 'react';
import Image from 'next/image';

export default function BigImage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const scrollContainerRef = useRef(null);

  // Image data array
  const images = [
    {
      id: 0,
      src: '/danube/img1.webp',
      alt: 'Breez Lagoon main view with infinity pool',
      title: 'Breez Lagoon',
      description: 'Waves at your feet & endless sea view. A shoreline crafted just for you.'
    },
    {
      id: 1,
      src: '/danube/img2.webp',
      alt: 'Luxury interior lounge area',
      title: 'View Dec',
      description: 'Embrace panoramic horizons — a vantage point where every moment feels elevate'
    },
    {
      id: 2,
      src: '/danube/img3.webp',
      alt: 'Beachside gazebo with ocean view',
      title: 'Breez Club House',
      description: 'Where connections flourish and celebrations find their perfect setting.'
    },
    {
      id: 3,
      src: '/danube/img4.webp',
      alt: 'Infinity pool with loungers',
      title: 'Breez 60',
      description: 'Enjoy panoramic views from the highest point in Maritime City.'
    },
    {
      id: 4,
      src: '/danube/img5.webp',
      alt: 'Outdoor dining area',
      title: 'Hammock',
      description: 'Sway into serenity — your perfect spot to unwind under open skies.'
    },
    {
      id: 5,
      src: '/danube/img1.webp',
      alt: 'Breez Lagoon main view with infinity pool',
      title: 'Breez Lagoon',
      description: 'Waves at your feet & endless sea view. A shoreline crafted just for you.'
    },
    {
      id: 6,
      src: '/danube/img2.webp',
      alt: 'Luxury interior lounge area',
      title: 'View Dec',
      description: 'Embrace panoramic horizons — a vantage point where every moment feels elevate'
    },
    {
      id: 7,
      src: '/danube/img3.webp',
      alt: 'Beachside gazebo with ocean view',
      title: 'Breez Club House',
      description: 'Where connections flourish and celebrations find their perfect setting.'
    },
    {
      id: 8,
      src: '/danube/img4.webp',
      alt: 'Infinity pool with loungers',
      title: 'Breez 60',
      description: 'Enjoy panoramic views from the highest point in Maritime City.'
    },
    {
      id: 9,
      src: '/danube/img5.webp',
      alt: 'Outdoor dining area',
      title: 'Hammock',
      description: 'Sway into serenity — your perfect spot to unwind under open skies.'
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-black">
      {/* Main Image Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 ">
          <div className="absolute bottom-8 px-4 md:bottom-12 bg-gradient-to-t from-black/90 to-transparent py-7 w-full md:px-8 lg:bottom-0  lg:px-12 text-white z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
              {images[selectedImage].title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-xl">
              {images[selectedImage].description}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Thumbnail Gallery */}
      <div className="relative ">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 transition-all"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Thumbnail Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-2 md:gap-3 p-2 md:p-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(index)}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ${
                selectedImage === index
                  ? 'ring-4 ring-white scale-105'
                  : 'opacity-80 hover:opacity-100'
              }`}
              style={{
                width: 'clamp(200px, 25vw, 350px)',
                height: 'clamp(120px, 15vh, 200px)'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 25vw, 350px"
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 transition-all"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}