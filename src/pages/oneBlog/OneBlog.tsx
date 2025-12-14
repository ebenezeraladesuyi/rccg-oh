// import React from 'react'

import { NavLink, useParams } from "react-router-dom";
// import pic1 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
import {FaArrowRightLong} from "react-icons/fa6"
import { useEffect, useState } from "react";
import { iBlog } from "../../types/interface";
import axios from "axios";
import { url } from "../../api/Api";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";


const OneBlog = () => {

    const { id } = useParams<{id: string}>();
    const [blog, setBlog] = useState<iBlog | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchBLog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}/blog/getoneblog/${id}`);

                setBlog(response.data);
                
                setLoading(false)

            } catch (error) {
                console.error("error getting one blog:", error)
 
                setLoading(false)
            }
        };

        fetchBLog();
    }, [id]);

    if (loading) {
        return 
        <div className="w-full flex justify-center items-center">
            <DatasIsaLoading />
        </div>;
    }

    if (!blog) {
        return 
            <div className="w-full justify-center items-center text-[25px] font-bold">
                Blog Not Found
            </div>
    }


  return (
    <div className="w-full flex justify-center items-center bg-white text-[#000000]">
        <div className="w-[90%] mt-[80px] md:mt-[100px] flex flex-col gap-4 relative">
            <NavLink to="/allblogs">
                <h6 className="bg-[#ec0e0e] p-1 px-2 text-white text-[13px] w-[100px] text-center flex items-center justify-center gap-2"><span><FaArrowLeftLong /></span>Blog</h6>
            </NavLink>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            <div className="w-full flex flex-col gap-3">
                <h5 className="font-bold text-[22px] md:text-[27px] lg:text-[33px] ">
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
                    {blog?.title.toUpperCase()}
                </h5>
                
                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                    <h5 className="text-[#bab9c1]">BY <span className="text-[#ec2b43]">{blog?.author}</span></h5>

                    <h5 className="text-[#bab9c1] flex items-center gap-1"> <span className='text-[12px]'><FaRegCalendarCheck /></span> {blog?.createdAt.slice(0, 10)} <span className='text-[12px]'><IoTimeOutline /></span>{blog?.createdAt.slice(11, 16)}</h5>
                </div>

                <div className="w-full lg:w-[65%]">
                    <img className="w-full" src={blog?.blogImage} alt={blog?.title} />
                </div>

                <h5 className="text-[11px] md:text-[13px] lg:text-[14px] text-justify w-full lg:w-[70%]">
                   
                    {blog?.details}
                </h5>
            </div>

            <NavLink to="/allblogs" >
                <div className="flex gap-2 items-center hover:text-orange-400 cursor-pointer animate-bounce text-[#28166f] text-[12px] md:text-[14px] mt-[10px]">
                    <h6 className="">Return to all Blogs</h6>
                    <div className="hidden md:block"><FaArrowRightLong /></div>
                </div>
            </NavLink>

            <hr className="w-full border-[1px] border-gray-200 mt-[20px]" />

            

            <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-[172px] border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
                <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
                <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
            </div>

        </div>

        
    </div>
  )
}

export default OneBlog