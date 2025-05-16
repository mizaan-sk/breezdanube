"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Modal from "./Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div>
        <div className=" flex items-center justify-between  container mx-auto px-1 md:px-10 py-3">
          <div>
            <Image
              src="/assets/Kub_logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-[130px] md:w-[180px]"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={handleClick}
              className="font-oswald text-white bg-[#C39F3D] cursor-pointer md:text-[17px] text-[13px] px-[10px] py-[3px] md:px-4 tracking-widest md:py-[6px]"
            >
              GET A QUOTE
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:text-3xl text-2xl ml-6 text-white"
            >
              {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Optional: Add your mobile menu here */}
        {isOpen && (
          <div className=" text-white px-4 py-2">
            <a href="#" className="block py-2">
              Home
            </a>
            <a href="#" className="block py-2">
              About
            </a>
            <a href="#" className="block py-2">
              Contact
            </a>
          </div>
        )}
      </div>
      {modalOpen && <Modal onClose={() => setModalOpen(false)}/>}
    </>
  );
};

export default Navbar;
