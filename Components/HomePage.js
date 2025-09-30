'use client'
import About from '@/Components/About'
import AboutAbove from '@/Components/AboutAbove'
import Amenties from '@/Components/Amenties'
import Configuration from '@/Components/Configuration'
import ContactUs from '@/Components/ContactUs'
import Gallery_Section from '@/Components/Gallery_Section'
import Location from '@/Components/Location'
import LocationAbove from '@/Components/LocationAbove'
import LocationBelow from '@/Components/LocationBelow'
import Nav_Slider from '@/Components/Nav_Slider'
import Overview from '@/Components/Overview'
import OverviewBelow from '@/Components/OverviewBelow'
import React from 'react'
import Modal from './Modal'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pageview } from '@/lib/gtm'
import EnquireNowButton from './EnquireNowButton'
import BigImage from './BigImage'
import MaritimeCitySection from './MaritimeCitySection'
import WhyInvest from './WhyInvest'
const HomePage = ({ countryFromURL }) => {
const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    pageview(pathname); 
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
   <>
     <div id="home"><Nav_Slider /></div>
      <div id="overview"><Overview /></div>
      <div><OverviewBelow /></div>
      <div id="configuration"><Configuration /></div>
      <div><Amenties /></div>
      {/* <div><AmentiesBelowSlider/></div> */}
           <div id="amenities"> <BigImage/></div>
      <div><LocationAbove /></div>
      <div id="location"><MaritimeCitySection /></div> 
      <div><LocationBelow /></div>
      <div className='bg-black'>
        <div id="gallery"><Gallery_Section /></div>
      <WhyInvest/>
      </div>
      <div><AboutAbove /></div>
      <div id="about"><About /></div>
      <div id="contact"><ContactUs countryFromURL={countryFromURL}/></div>
      <div><EnquireNowButton countryFromURL={countryFromURL}/></div>
      <div>
        <Modal countryFromURL={countryFromURL} isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)} />
      </div>
   </>
  )
}

export default HomePage
