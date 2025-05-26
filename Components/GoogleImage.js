'use client';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function GoogleImage({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  const stopPropagation = (e) => e.stopPropagation();
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#3d3c3c] rounded-[6px] shadow-2xl w-full max-w-[90vw] sm:max-w-[570px] max-h-[95vh] flex flex-col items-center overflow-hidden"
        onClick={stopPropagation}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white cursor-pointer hover:text-red-500 text-xl sm:text-2xl z-10 p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <RxCross2 />
        </button>
        
        {/* Logo */}
        <div className="mt-4 sm:mt-6 mb-2 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-white rounded-full px-1 flex-shrink-0">
          <Image
            src="/assets/Banner_Logo.webp"
            alt="Logo"
            width={50}
            height={60}
            className="w-auto h-auto max-w-[40px] sm:max-w-[50px] max-h-[50px] sm:max-h-[60px]"
          />
        </div>
        
        {/* Heading */}
        <h2 className="text-center text-base sm:text-lg md:text-xl font-extralight tracking-widest text-white mb-3 sm:mb-4 px-2">
          GOOGLE MAP
        </h2>
        
        {/* Google Map Container */}
        <div className="flex-1 w-full px-2 sm:px-4 pb-4 flex items-center justify-center min-h-0">
          <div className="relative shadow-2xl w-full max-w-[550px] aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
            <Image
              src="/assets/map.png"
              alt="Map Detail"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 550px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}