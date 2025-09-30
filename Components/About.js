import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white md:py-14 py-12 px-4 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-15 md:w-17 mx-auto">
            <Image
              src="/assets/Banner_Logo.webp"
              width={112}
              height={112}
              alt="Sliders Logo"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-extralight text-[#0F4977] tracking-wide mb-2">
            ABOUT US
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-[#535353] font-sans text-sm md:text-base/7 font-light leading-relaxed">
          At Breez, every material is carefully
handpicked and thoughtfully curated.
From the elegance of marble and the natural
warmth of travertine, to the sophistication of
fluted glass and leather-finish cladding -
each element comes with a stamp of luxury.
This is a home where craftsmanship
meets contemporary design
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
