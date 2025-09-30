import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#B18613] md:pb-0 pb-15 flex items-center justify-center text-center px-2 text-white text-base font-sans">
        <p className="text-center text-[15px] font-sans pr-5 font-extralight text-white py-1 px-2">
          © 2025 Danube Properties. All rights reserved.
        </p>
        <span className="border-l h-4 pr-5 border-white "></span>
        <p className=" mid_text text-[15px] font-extralight text-white ">
          Designed & Developed by{" "}
          <Link
            href="https://www.nuvoraa.com/"
            className="mid_text hover:underline  font-medium"
          >
            Nuvoraa Digital
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
