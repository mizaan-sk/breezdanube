"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function BigImage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    {
      id: 0,
      desktop: "/danube/img1.webp",
      mobile: "/danube/imgmob1.webp",
      alt: "Breez Lagoon main view with infinity pool",
      title: "Breez Lagoon",
      description:
        "Waves at your feet & endless sea view. A shoreline crafted just for you.",
    },
    {
      id: 1,
      desktop: "/danube/img2.webp",
      mobile: "/danube/imgmob2.webp",
      alt: "Luxury interior lounge area",
      title: "View Dec",
      description:
        "Embrace panoramic horizons — a vantage point where every moment feels elevated",
    },
    {
      id: 2,
      desktop: "/danube/img3.webp",
      mobile: "/danube/imgmob3.webp",
      alt: "Beachside gazebo with ocean view",
      title: "Breez Club House",
      description:
        "Where connections flourish and celebrations find their perfect setting.",
    },
    {
      id: 3,
      desktop: "/danube/img4.webp",
      mobile: "/danube/imgmob4.webp",
      alt: "Infinity pool with loungers",
      title: "Breez 60",
      description: "Enjoy panoramic views from the highest point in Maritime City.",
    },
    {
      id: 4,
      desktop: "/danube/img5.webp",
      mobile: "/danube/imgmob5.webp",
      alt: "Outdoor dining area",
      title: "Hammock",
      description:
        "Sway into serenity — your perfect spot to unwind under open skies.",
    },
    {
      id: 5,
      desktop: "/danube/img1.webp",
      mobile: "/danube/imgmob1.webp",
      alt: "Breez Lagoon main view with infinity pool",
      title: "Breez Lagoon",
      description:
        "Waves at your feet & endless sea view. A shoreline crafted just for you.",
    },
    {
      id: 6,
      desktop: "/danube/img2.webp",
      mobile: "/danube/imgmob2.webp",
      alt: "Luxury interior lounge area",
      title: "View Dec",
      description:
        "Embrace panoramic horizons — a vantage point where every moment feels elevated",
    },
    {
      id: 7,
      desktop: "/danube/img3.webp",
      mobile: "/danube/imgmob3.webp",
      alt: "Beachside gazebo with ocean view",
      title: "Breez Club House",
      description:
        "Where connections flourish and celebrations find their perfect setting.",
    },
    {
      id: 8,
      desktop: "/danube/img4.webp",
      mobile: "/danube/imgmob4.webp",
      alt: "Infinity pool with loungers",
      title: "Breez 60",
      description: "Enjoy panoramic views from the highest point in Maritime City.",
    },
    {
      id: 9,
      desktop: "/danube/img5.webp",
      mobile: "/danube/imgmob5.webp",
      alt: "Outdoor dining area",
      title: "Hammock",
      description:
        "Sway into serenity — your perfect spot to unwind under open skies.",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 200 : 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getImageSrc = (image) => {
    return isMobile ? image.mobile : image.desktop;
  };

  return (
    <div className="w-full bg-black">
      {/* Main Image Section */}
      <div className="relative w-full aspect-[16/6] overflow-hidden">
       <Image
             src={getImageSrc(images[selectedImage])}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent py-6 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
              {images[selectedImage].title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl">
              {images[selectedImage].description}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Thumbnail Gallery */}
      <div className="relative py-4 md:py-6">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all shadow-lg"
          aria-label="Scroll left"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Thumbnail Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-2 md:gap-3 px-12 py-3 md:px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(index)}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
                selectedImage === index
                  ? "ring-2 md:ring-4 ring-white scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{
                width: isMobile ? "150px" : "clamp(200px, 25vw, 350px)",
                height: isMobile ? "100px" : "clamp(120px, 15vh, 200px)",
              }}
            >
              <Image
                src={getImageSrc(image)}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all shadow-lg"
          aria-label="Scroll right"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
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
