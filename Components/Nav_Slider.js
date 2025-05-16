"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "./Navbar";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Images_Slider = [
  { src: "/assets/slide1.jpg" },
  { src: "/assets/slide2.jpg" },
];

export default function Nav_Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar OVER Swiper */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute border-0 outline-0 z-20 top-1/2 left-1 md:left-5 lg:left-10 text-2xl md:text-5xl text-[#f6f8f770] cursor-pointer hover:text-white font-black -translate-y-1/2"
      >
        <IoIosArrowBack />
      </button>
      <button
        ref={nextRef}
        className="absolute border-0 outline-0 z-20 top-1/2 right-1 md:right-5 lg:right-10 text-2xl md:text-5xl text-[#f6f8f770] cursor-pointer hover:text-white font-bold -translate-y-1/2"
      >
        <IoIosArrowForward />
      </button>

      {/* Custom Pagination Dots */}
      <div
        ref={paginationRef}
        className="absolute bottom-10 z-100 left-1/2 text-white -translate-x-1/2"
      ></div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-3 h-3 bg-white opacity-40 inline-block rounded-full mx-1"></span>`;
          },
          bulletActiveClass: "opacity-100",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
      >
        {Images_Slider.map((item, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Background Image */}
            <Image
              src={item.src}
              alt={`slide-${idx + 1}`}
              width={1200}
              height={600}
              className="w-full  h-screen object-cover"
              priority // load first
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex  md:mt-0 mt-15 flex-col items-center justify-center text-white text-center">
              {/* Text */}
              <h2
                className="text-white text-2xl md:text-4xl font-medium px-4 -mb-49 md:-mb-36 fade-in  md:mt-40 z-10"
                style={{ animationDelay: "0.5s" }}
              >
                A REGAL TALE OF THE BARONIAL PRECINCT
              </h2>
              <Image
                src="/assets/sliderLogo.png"
                alt="Logo"
                width={320}
                height={250}
                className="md:-mt-15 mt-19  w-[150px] md:w-[300px] z-0 fade-in"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
