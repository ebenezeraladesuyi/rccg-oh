// import React from 'react'

import {motion}  from "framer-motion";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <motion.div className="w-full h-[100vh] bg-hero-bg bg-center bg-cover flex justify-center items-center font-pop relative"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    >
        <div className="absolute bg-black h-full w-full top-0 left-0 opacity-50 "></div>

        <div className="w-[90%] h-full z-30 text-white flex flex-col gap-4 justify-center items-center md:items-start mt-[60px] md:mt-[100px]">

            <motion.h5 className='text-[17px] text-center md:text-left tracking-[7px] md:text-[16px] font-bold lg:text-[22px] md:tracking-[9px] text-[#23a1db] bg-white w-[250px] lg:w-[300px] p-1 rounded-[20px] flex justify-center items-center'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                WELCOME TO
            </motion.h5>

            <div className="text-white text-[40px] md:text-[60px] lg:text-[70px] font-bold flex flex-col md:flex-ro gap-2 md:gap-6 lg:gap-8 leading-[45px] text-center md:text-left mt-[px]">
                {/* <div className="flex flex-col md:flex-row items-center gap-2"> */}

                    <motion.h5 className="md:hidde"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >RCCG</motion.h5>

                    <div className="flex flex-col md:flex-row items-center gap-">
                        <motion.h5 className="" 
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >OPEN</motion.h5>

                        <motion.h5 className=""
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >HEAVENS</motion.h5>
                    </div>
                {/* </div> */}

                <motion.h6 className="text-white font-bol text-[12px] md:text-[16px] md:w-[60%] lg:w-[55% leading-[18px] md:leading-[25px]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                >
                    ...Where God's word empower our vibrant church of destiny, with Prayer & Fasting.
                </motion.h6>
            </div>

            <motion.button className="w-[150px] md:w-[200px] py-2 bg-[#23a1db] text-white rounded-lg text-[15px] md:text-[18px] animate-pulse"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
            >
                About Us
            </motion.button>

            <div className="flex gap-3 items-center">
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
            >
                    <FaSquareInstagram />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
            >
                    <FaFacebookSquare />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
            >
                    <FaTwitter />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px] "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
            >
                    <FaYoutube />
                </motion.a>
            </div>

        </div>
    </motion.div>
  )
}

export default Hero;