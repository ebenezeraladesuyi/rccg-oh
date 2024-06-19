// import React from 'react'

import pic1 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
import pic2 from "../../assets/blog/PeoplePraying-768x420.jpg";
import pic3 from "../../assets/blog/Beautiful_woman_prayer.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const AllBlogs = () => {
  return (
    <div className="w-full h-[100%] py-[30px] flex justify-center items-center bg-white">
        <div className="w-[90%] mt-[80px] md:mt-[90px]">
            <h6 className="text-[18px] md:text-[25px] font-bold mb-[10px] text-[#33a866]">Blogs</h6>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            <div className="w-full flex flex-col gap-4 relative">

                <div className="w-full lg:w-[70%] py-[10px] flex flex-col md:flex-row gap-3 bg-white">
                    <div className="w-full md:w-[40%]">
                        <img className="w-full" src={pic1} alt="" />
                    </div>

                    <div className="md:w-[58%] p-3 flex flex-col gap-2">
                        <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

                        <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                            <h5 className="text-[#bab9c1]">BY <span className="text-[#ec2b43]">TBD</span></h5>

                            <h5 className="text-[#bab9c1]">- JUNE 15, 2023</h5>
                        </div>

                        <h5 className="text-justify text-[11px] lg:text-[13px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                        </h5>

                        <NavLink to="/allblogs/oneblog">
                            <h5 className="text-[12px] text-[#ec2b43] flex gap-1 items-center cursor-pointer">Continue Reading <FaArrowRightLong /></h5>
                        </NavLink>
                    </div>
                </div>

                <div className="w-full lg:w-[70%] py-[10px] shadow-m flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-[40%]">
                        <img className="w-full" src={pic2} alt="" />
                    </div>

                    <div className="md:w-[58%] p-3 flex flex-col gap-2">
                        <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

                        <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                            <h5 className="text-[#bab9c1]">BY <span className="text-[#ec2b43]">TBD</span></h5>

                            <h5 className="text-[#bab9c1]">- JUNE 15, 2023</h5>
                        </div>

                        <h5 className="text-justify text-[11px] lg:text-[13px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                        </h5>

                        <h5 className="text-[12px] text-[#ec2b43] flex gap-1 items-center">Continue Reading <FaArrowRightLong /></h5>
                    </div>
                </div>

                <div className="w-full lg:w-[70%] py-[10px] shadow-m flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-[40%]">
                        <img className="w-full" src={pic3} alt="" />
                    </div>

                    <div className="md:w-[58%] p-3 flex flex-col gap-2">
                        <h5 className="text-[16px] lg:text-[20px] capitalize font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

                        <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                            <h5 className="text-[#bab9c1]">BY <span className="text-[#ec2b43]">TBD</span></h5>

                            <h5 className="text-[#bab9c1]">- JUNE 15, 2023</h5>
                        </div>

                        <h5 className="text-justify text-[11px] lg:text-[13px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsa totam excepturi qui tempora sapiente neque. Eaque provident dolore accusamus aliquam sapiente debitis obcaecati eos...
                        </h5>

                        <h5 className="text-[12px] text-[#ec2b43] flex gap-1 items-center">Continue Reading <FaArrowRightLong /></h5>
                    </div>
                </div>

                <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-0 border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                    <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                    <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
                    <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
                    <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AllBlogs