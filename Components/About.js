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
          <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 tracking-wide mb-2">
            ABOUT US
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-[#535353] font-sans text-sm md:text-base/7 font-light leading-relaxed">
            Sobha Realty redefines the concept of luxury residential living with
            a repertoire of real estate projects across Dubai. With razor-sharp
            focus on quality and innovation, it has created a plethora of iconic
            spaces such as extravagant palaces, ornate mosques, cutting-edge
            campuses, and ultra-luxurious communities with grand villas and
            apartments. Pioneering the ‘Backward Integration’ model in real
            estate, Sobha Realty employs in-house mastery to create a unique
            offering of fine living that extends beyond the customer’s
            expectations.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
