/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaRegCalendarCheck } from "react-icons/fa";

interface iBlogCard {
    pic? : any;
    author?: string;
    title?: string;
    details?: string;
    date? : string;
}

const BlogCard:React.FC<iBlogCard> = ({pic, author, title, details, date}) => {
  return (
    <div className='w-[275px] h-[400px] bg-whit flex flex-col gap-2  mr-[6px ml-[6px shadow-md rounded-md overflow-hidden mb-[10px] bg-[#ffffff]'>
        <div className='w-full h-[50%]'>
            <img className='h-full w-full' src={pic} alt="" />
        </div>

        <div className='p-4 flex flex-col gap-2 justify-between item'>
            <h6 className='w-[150px] h-[23px] rounded-[15px] bg-[#33a866] text-white text-[12px] flex items-center justify-center'>
                {/* TMC */}
                {author}
            </h6>

            <h5 className='text-[13px] font-bold'>
                {/* Why You Should Be Saved */}
                {title}
            </h5>

            <h6 className='text-[10px] text-justify  text-[#000000]'>
                {/* Looking around and admiring the wonders of nature, animals, plants, food crops, birds, fishes all existing in their kinds and the rich diversity of the universe one can't help but… */}
                {details}...
            </h6>

            <div className='flex items-center justify-between'>
                <h5 className='text-[10px] flex items-center gap-1'>
                    {/* October 24, 2020 */}
                    <span><FaRegCalendarCheck /></span>
                    {date}
                </h5>

                <NavLink to="/allblogs">
                    <h5 className='text-[10px] flex items-center gap-2 text-[#33a866]'>Read More <span><FaArrowRightLong /></span></h5>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default BlogCard