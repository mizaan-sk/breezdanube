import Image from 'next/image'
import React from 'react'

const Amenties = () => {
  return (
   <>
    <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden">
           {/* Background Image */}
           <Image
             src="/assets/AmenitiesImage.webp"
             alt="Luxury Pool View"
             fill
             priority
             className="object-cover z-0"
           />
   
           {/* Overlay Content */}
           <div className="absolute inset-0 bg-black/40 md:-mt-17  flex flex-col items-center justify-center px-4 text-center z-10">
             <Image
               src="/assets/Banner_Logo.webp"
               alt="Logo"
               width={150}
               height={100}
               className="md:-mb-39 -mb-29 md:w-49 w-35 opacity-70" 
             />
             <h1 className='uppercase z-10 text-white text-2xl md:text-4xl font-medium tracking-wider'>Amenities</h1>
             <h1 className="text-white z-10 text-xl font-sans sm:text-2xl md:text-3xl lg:text-3xl tracking-wide mt-3 font-normal ">
              IN THE LAP OF LEISURE
             </h1>
           </div>
         </section>
   </>
  )
}

export default Amenties