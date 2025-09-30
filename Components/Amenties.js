import Image from 'next/image'
import React from 'react'

const Amenties = () => {
  return (
   <>
    <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden">
           {/* Background Image */}
           <Image
             src="/danube/bg4.webp"
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
               className="md:-mb-35 -mb-29 md:w-49 w-35 opacity-70" 
             />
             <h1 className="z-10 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest font-normal uppercase">
  Luxury that greets you at every step
  </h1>
           </div>
         </section>
   </>
  )
}

export default Amenties