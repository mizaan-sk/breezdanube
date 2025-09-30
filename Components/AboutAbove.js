import Image from 'next/image'
import React from 'react'

const AboutAbove = () => {
  return (
    <>
     <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src="/danube/bg3.webp"
                    alt="Luxury Pool View"
                    fill
                    priority
                    className="object-cover z-0"
                  />
          
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-black/70 md:-mt-17  flex flex-col items-center justify-center px-4 text-center z-10">
                    <Image
                      src="/assets/Banner_Logo.webp"
                      alt="Logo"
                      width={150}
                      height={100}
                      className="md:-mb-35 -mb-5 md:w-49 w-35 opacity-70"
                    />
                    <h1 className="text-white uppercase text-xl z-10  sm:text-2xl md:text-2xl lg:text-4xl tracking-[6px] md:mt-0 -mt-[80px]">
                    Inspired by the Ocean’s Rhythm
                    </h1>
                  </div>
                </section>
    </>
  )
}

export default AboutAbove