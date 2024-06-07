// import React from 'react'

import logo from "../../assets/images/Rccg_logo.png";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-full h-[60vh pt-[30px] bg- flex flex-col justify-center items-center font-pop shadow-md bg-white bg-footer-bg3 bg-cover bg-bottom relative">

      <div className="bg-white absolute h-full w-full top-0 left-0 opacity-90"></div>

      <div className="w-[90%] flex flex-col md:flex-row gap-8 mb-[25px] md:mb- z-20">

        <div className="flex flex-col md:flex-row gap-5 w-full md:w-[40% ">
          <div className="flex flex-col gap-5 md:w-[40%]">
            <div className="w-[55px]">
              <img className="w-full" src={logo} alt="" />
            </div>

          {/* <h6 className="text-[12px] md:text-[15px] text-justify text-[#50519f]">
            Volatic Academy. We are a supportive and inclusive Academy, where every student is inspired to dream big, while challenging them and the status quo, equipping them with business skill, technology skills, leadership skills and life skills.
          </h6> */}

            <h5 className="text-[11px] lg:text-[14px] text-cente mb-[0px] flex flex-col text-[#28166f]">
              <span className="text-[#33a866]">Address:</span>220/21 Lee Rd, Dublin Industrial Estate, Glasnevin Dublin 11, Ireland,
              Eircode:D11PX89.  <span className="text-[#33a866]">Phone:</span> +353 (0) 87-416-0229 <span className="text-[#33a866]">Email:</span>  info@rccgopenheavens.com ; rccgopenheavensdub@yahoo.com
            </h5> 
          </div>

          <div className="flex flex-col gap-3 text-[11px] md:text-[12px] text-[#28166f]">
            <h6 className="cursor-pointr mb-[0px] text-[14px] md:text-[16px] lg:text-[18px] font-bold md:mt-[20px text-[#33a866]">Service Schedule</h6>
            <h6 className="cursor-pointr">Sunday School <span>9:30am</span></h6>
            <h6 className="cursor-pointr">Sunday Service <span>10:00am - 12:00Noon</span></h6>
            <h6 className="cursor-pointr">Tuesday: Digging Deep/Faith Clinic<span>7:00pm - 9:00pm</span></h6>
            {/* <h6 className="cursor-pointe">Product Engineering</h6>
            <h6 className="cursor-pointr">Product Strategy</h6>
            <h6 className="cursor-pointr">Creative Design</h6>
            <h6 className="cursor-pointr">Digital Marketing</h6>
            <h6 className="cursor-poiner">Professional Training</h6> */}
          </div>

          <div className="flex gap-3 items-cente">
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center bg-[#33a866] text-white  rounded-full hover:text-white hover:bg-[#28166f]">
              <FaFacebookSquare />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center  bg-[#33a866] text-white  rounded-full hover:text-white hover:bg-[#28166f]">
              <FaTwitter />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center  bg-[#33a866] text-white  rounded-full hover:text-white hover:bg-[#28166f]">
              <FaSquareInstagram />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center bg-[#33a866] text-white  rounded-full hover:text-white hover:bg-[#28166f]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col font-semibold gap-3 text-[13px] md:text-[15px] text-[#50519f] md:ml-[30px]">
          <h6 className="cursor-pointr mb-[0px] text-[16px] md:text-[18px] font-bold md:mt-[20px]">Service Schedule</h6>
          <h6 className="cursor-pointr">Sunday Service <span>8:30am</span></h6>
          <h6 className="cursor-pointr">Mid-Week Service (Wednesdays) <span>5:00pm</span></h6>
          {/* <h6 className="cursor-pointe">Product Engineering</h6>
          <h6 className="cursor-pointr">Product Strategy</h6>
          <h6 className="cursor-pointr">Creative Design</h6>
          <h6 className="cursor-pointr">Digital Marketing</h6>
          <h6 className="cursor-poiner">Professional Training</h6> */}
        {/* </div> */} 

      </div>

      <div className="bg-[#28166f] py-5 w-full flex items-center justify-center z-20">
        <h5 className="text-[12px] md:text-[15px] text-white mt-[30px w-[90%] text-center">
          Copyright &#169; 2024 RCCG OPEN HEAVENS, DUBLIN
        </h5>
      </div>
    </div>
  )
}

export default Footer