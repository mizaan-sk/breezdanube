import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full h-[40vh] md:h-[70vh] lg:h-screen relative">
        <Image
          src="/danube/ovleft.webp"
          alt="Interior of Fort Knox"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full bg-white flex items-center justify-center px-6 py-10 sm:px-10 text-center">
        <div className="w-full ">
          <Image
            src="/assets/Banner_Logo.webp"
            alt="The Fort Knox Logo"
            width={120}
            height={120}
            className="mx-auto mb-4 md:w-22 w-17"
          />
          <h2 className="md:text-[22px] text-[16px] font-bold text-[#0F4977] uppercase font-serif">
            Breez BY DANUBE
          </h2>
          <h1 className="text-[28px] md:text-[38px] font-bold uppercase text-gray-700  mb-4 md:mb-6">
            Overview
          </h1>
          <p className="text-[#666666] text-[15px]/8 md:text-[19px]/8  leading-relaxed font-light font-sans">
            Breez by Danube is a premium 60-floor waterfront residential tower
            in Dubai Maritime City. Inspired by seaside serenity and elevated
            living, Breez offers Fully Furnished Oceanfront Homes with over 40+
            resort-style amenities for a lifestyle that flows as effortlessly as
            its name. More than just a residence, Breez is your invitation to
            experience a life where the city’s pulse meets the calm of the sea
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
