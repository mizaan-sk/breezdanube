"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import Modal from "@/Components/Modal"
import Link from "next/link"

const ThNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    if (isOpen || modalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = originalOverflow
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, modalOpen])

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Overview", href: "#overview" },
    { name: "Configuration", href: "#configuration" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  const handleQuoteClick = () => {
    setIsOpen(false)
    setTimeout(() => setModalOpen(true), 300)
  }

  return (
    <>
   {/* Navbar */}
      <div
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/60 shadow-md"
      >
        <div className="flex items-center justify-between container mx-auto px-4 md:px-10 py-3 md:py-4">
          <div>
            <Link href="/">
      <Image
        src="/danube/breez_logo.webp"
        width={200}
        height={200}
        alt="logo"
        className="w-[120px] md:w-[180px]"
      />
    </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setModalOpen(true)}
              className="font-oswald text-white bg-[#C39F3D] hover:bg-[#B8923A] transition-colors duration-300 cursor-pointer md:text-[17px] text-[15px] px-[12px] py-[3px] md:px-4 tracking-widest md:py-[6px] rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              GET A QUOTE
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:text-3xl text-2xl ml-6 text-[#C39F3D] hover:text-[#C39F3D] cursor-pointer transition-colors duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            ><RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[80px] md:h-[90px]"></div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/80 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-10 z-[1010] text-3xl text-white bg-[#C39F3D] rounded-full p-1 shadow-lg hover:bg-[#B8923A] transition"
          aria-label="Close menu"
        >
          <RxCross2 />
        </button>

        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center relative">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #C39F3D 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, #C39F3D 2px, transparent 2px)
                `,
                backgroundSize: "50px 50px",
                backgroundPosition: "0 0, 25px 25px",
              }}
            ></div>
            <div className="text-center transition-all duration-700 delay-300 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">MENU</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Desktop Menu */}
<div className="hidden md:flex w-1/2 h-screen overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#333] items-center justify-center">
            <div className="w-full max-w-md px-8 h-full py-8">
              <nav className="space-y-6">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="group cursor-pointer" onClick={() => handleNavClick(item.href)}>
                    <div className="flex items-center space-x-6 px-2 rounded-lg hover:bg-white/5 transition">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#C39F3D] font-bold text-lg bg-white/10 backdrop-blur-sm border border-white/20">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-2xl font-light tracking-wide group-hover:text-[#C39F3D] transition">
                          {item.name}
                        </span>
                        <div className="h-px bg-gradient-to-r from-[#C39F3D] to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                      <div className="w-6 h-6 border border-white/30 rotate-45 group-hover:rotate-90 group-hover:border-[#C39F3D] transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-8 pb-7 border-t border-white/20 text-white/60 text-sm space-y-2">
                <p>Ready to get started?</p>
                <button onClick={handleQuoteClick} className="text-[#C39F3D] hover:text-white font-semibold transition">
                  Get Your Quote →
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
        <div className="md:hidden w-full h-screen overflow-y-auto bg-[#1a1a1a] pt-24 px-6">
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="border-b border-white/10 pb-3"
                  onClick={() => handleNavClick(item.href)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#C39F3D] font-bold bg-white/10">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <span className="text-white text-xl font-light">{item.name}</span>
                  </div>
                </div>
              ))}
            </nav>
            <div className="mt-8 pt-4 border-t border-white/20 text-white/60 text-sm space-y-2">
              <p>Ready to get started?</p>
              <button onClick={handleQuoteClick} className="text-[#C39F3D] font-semibold">
                Get Your Quote →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
     <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </>
  )
}

export default ThNavbar
