// import React from 'react'

import { NavLink } from "react-router-dom";

const Believe = () => {
  return (
    <div className="w-full h-[60vh] md:h-[50vh] flex flex-col justify-center items-center bg-be bg-center bg-cover relative font-pop bg-prayer-bg2 text-white overflow-hidden">

        <div  className="absolute w-full h-full bg-black top-0 left-0 opacity-60"></div>

        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-5 z-20">
            <h6 className="text-center md:text-left text-[30px] md:text-[40px] lg:text-[45px] leading-[35px] md:leading-[50px] font-bold md:w-[60%] lg:w-[50%]">
                Ready to Begin A New Experience with Christ?
            </h6>

            <NavLink to="/">
                <a href="" className="p-2 px-5 bg-[#23a1db] text-white rounded-[20px] animate-bounce">Become A Believer</a>
            </NavLink>
        </div>

        <h6 className="text-center text-[13px] md:text-[18px] lg:text-[20px] text-[#28166f] font-bold z-20 mt-[30px] bg-white p-2 px-3 rounded-[25px] w-[90%]">"Jesus Christ is the same yesterday, today and forever" Heb 13:8</h6>
    </div>
  )
}

export default Believe;