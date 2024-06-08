// import React from 'react'

import { NavLink } from "react-router-dom"
import "./Service2.css"

const Service = () => {
  return (
    <div className="w-full h-[45vh] py-[30px] flex justify-center items-center relative bg-service-bg bg-center bg-cover">

        <div className="absolute bg-black w-full h-full left-0 top-0 opacity-50"></div>

        <div className="w-[90%] flex flex-col justify-center items-center gap-3 text-white z-20">
            <h5 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">Our Service Schedule</h5>

            <div className="text-[13px] md:text-[16px] lg:text-[20px] text-center">
                <h6 className="cursor-pointr">Sunday School: <span>9:30am</span></h6>
                <h6 className="cursor-pointr">Sunday Service: <span>10:00am - 12:00Noon</span></h6>
                <h6 className="cursor-pointr">Tuesday: Digging Deep/Faith Clinic: <span>7:00pm - 9:00pm</span></h6>
            </div>

            <NavLink to="/contact">
                <button className="css-button-sliding-to-top--blue">
                    Contact Us
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Service