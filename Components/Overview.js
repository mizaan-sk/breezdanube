import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full h-[40vh] md:h-[70vh] lg:h-screen relative">
        <Image
          src="/assets/ovimage.webp"
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
          <h2 className="md:text-[22px] text-[16px] font-bold text-gray-700 uppercase font-serif">
            SOBHA CENTRAL
          </h2>
          <h1 className="text-[28px] md:text-[38px] font-bold uppercase text-[#E2BB6C] mb-4 md:mb-6">
            Overview
          </h1>
          <p className="text-[#666666] text-[15px]/8 md:text-[19px]/8  leading-relaxed font-light font-sans">
            Sheikh Zayed Road at your doorstep. Within walking distance of the
            Jebel Ali Metro Station. Fast access to Dubai Marina, Al Khail,
            Downtown, DIFC, and beyond. This is a location that moves with
            you—no detours, no delays. Whether it’s the morning rush, a
            late-night grocery run, or weekend plans across town, every
            direction feels effortless. All paths point to Sobha Central.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
