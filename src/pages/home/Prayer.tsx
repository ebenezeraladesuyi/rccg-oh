// import React from 'react'

// import Reveal from "../../animations/Reveal";
import { NavLink } from "react-router-dom";
import RevealMap from "../../animations/RevealMap";
import { PrayerCard } from "../../components";

const Prayer = () => {
  return (
    <div className="w-full flex justify-center items-center py-[30px]  bg-white">
        <div className="w-[90%] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <RevealMap className={`w-full md:w-[48%]`}>
                <div className="w-ful md:w-[50% h-[290px] bg-prayer-bg3  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between overflow-hidden">

                    <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-30% to-transparent to-50%"></div>

                    <div className="text-[#1515157e]"></div>

                    <NavLink to="/contact">
                        <div className="mb-[20px] z-20">
                            <PrayerCard 
                                content="Share your Testimony with us"
                                buttonContent="Share With Us"
                            />
                        </div>
                    </NavLink>

                </div>
            </RevealMap>

            
            <RevealMap className={`w-full md:w-[48%]`}>
                <div className="w-ful md:w-[48% h-[290px] bg-prayer-bg1  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between overflow-hidden">

                    <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-30% to-transparent to-50%"></div>

                    <div className="text-[#1515157e]"></div>

                    <NavLink to="/contact">
                        <div className="mb-[20px] z-20">
                            <PrayerCard 
                                content="Want to send a Prayer Request?"
                                buttonContent="Send Prayer Request"
                            />
                        </div>
                    </NavLink>

                </div> 
            </RevealMap>
        </div>
    </div>
  )
}

export default Prayer