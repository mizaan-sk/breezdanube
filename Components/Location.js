"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GoogleImage from "./GoogleImage";

const slides = [
  {
    image: "/assets/Locat1.webp",
    title: "Slide One",
    description:
      "Sheikh Zayed Road at your doorstep. Within walking distance of the Jebel Ali Metro Station. Fast access to Dubai Marina, Al Khail, Downtown, DIFC, and beyond. This is a location that moves with you—no detours, no delays. Whether it's the morning rush, a late-night grocery run, or weekend plans across town, every direction feels effortless. All paths point to Sobha Central.",
  },
  {
    image: "/assets/Locat2.webp",
    title: "Slide Two",
    description:
      "Residing on Sheikh Zayed Road is synonymous with experiencing Dubai's dynamic rhythm firsthand. With an array of dining, shopping and entertainment options, sophistication and convenience blends harmoniously. Life on this iconic address guarantees an exhilarating and enriched life.",
  },
];

const Location = () => {
  const [googleOpen, setGoogleOpen] = useState(false);

  const handleClick = () => {
    setGoogleOpen(!googleOpen);
  };

  return (
    <>
      <div className="bg-white py-8 md:py-12 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center">
          <div className="w-24 md:w-28 mx-auto mb-4">
            <Image
              src="/assets/Banner_Logo.webp"
              width={90}
              height={70}
              alt="Sliders Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 uppercase tracking-wide mb-2">
            Location Advantages
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full max-w-7xl px-4">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".location-next-btn",
              prevEl: ".location-prev-btn"
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8">
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 h-70 sm:h-80 md:h-[500px] relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover rounded-[6px]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
                    <p className="text-[#757575] text-lg md:text-[27px] md:leading-[40px] tracking-[1px] text-center leading-relaxed font-light lg:text-start">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
       {/* Navigation Buttons */}
<div className="flex justify-center md:mt-1 lg:mt-10 border-2 border-[#C39F3D] rounded overflow-hidden">
  <button className="location-prev-btn cursor-pointer px-2 md:px-4 py-2 md:py-2 text-2xl text-[#C39F3D] border-r border-[#C39F3D] hover:bg-[#C39F3D] hover:text-white transition-colors duration-200">
    <IoIosArrowBack />
  </button>
  <button className="location-next-btn cursor-pointer px-2 md:px-4 py-2 md:py-2 text-2xl text-[#C39F3D] hover:bg-[#C39F3D] hover:text-white transition-colors duration-200">
    <IoIosArrowForward />
  </button>
</div>


        {/* Google Map Button */}
        {/* <button
          onClick={handleClick}
          className="mt-6 border-2 rounded uppercase tracking-wide md:text-[20px] text-[15px] cursor-pointer px-6 py-2 border-[#C39F3D] text-[#C39F3D] hover:bg-[#C39F3D] hover:text-white transition-colors duration-200"
        >
          View Google Map
        </button> */}
      </div>

      {/* Google Map Modal */}
      {googleOpen && (
        <GoogleImage isOpen={googleOpen} onClose={() => setGoogleOpen(false)} />
      )}
    </>
  );
};

export default Location;