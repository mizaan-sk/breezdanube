"use client"

import Image from "next/image"

export default function HoverCard() {

  return (
   <div className="relative w-[300px] mx-auto shadow-lg group overflow-hidden bg-white">
      {/* Top Section with upward triangle */}
      <div className="relative z-10 bg-white pt-6 pb-10 px-4 text-center transition-all duration-500 group-hover:pb-4 triangle-up">
        <h2 className="text-xl font-bold text-[#a88b3a]">5 BHK</h2>
        <div className="transition-opacity duration-500 group-hover:opacity-0">
          <p className="text-sm mt-1 text-black">Carpet Area</p>
          <p className="text-lg font-bold text-[#a88b3a] mt-1">5000 - 5500 SQ. FT.</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative transition-all duration-500 group-hover:scale-105 -mt-[60px]">
        <Image src='/assets/int.jpg' alt="4 BHK Interior" layout="responsive" width={500} height={500} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="bg-[#a88b3a] text-white font-bold py-2 px-6 mt-24">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  )
}
