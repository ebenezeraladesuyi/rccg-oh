// import React from 'react'

import { NavLink } from "react-router-dom";
import BlogCard from "../../components/block/BlogCard";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../assets/blog/Joseph_PotipharsWife-1.jpg";
import img2 from "../../assets/blog/Beautiful_woman_prayer.jpg";
import img3 from "../../assets/blog/PeoplePraying-768x420.jpg";
import img4 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    
     
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        // rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


  return (
    <div className="w-full bg-white flex justify-center items-center py-[30px] overflow-hidden">
        <div className="w-[90%] flex flex-col gap-5">

            <div className="w-full text-[10px] md:text-[12px] flex items-center justify-between  text-[#28166f]">
                <h5 className="font-bold text-[14px] md:text-[18px] lg:text-[22px] ">Blogs & NewLetters</h5>

                <NavLink to="/" >
                    <div className="flex gap-2 items-center hover:text-orange-400 cursor-pointer animate-bounce text-[#28166f]">
                        <h6 className="">See all Blogs & NewsLetters</h6>
                        <div className="hidden md:block"><FaArrowRightLong /></div>
                    </div>
                </NavLink>
            </div>

           <div className="w-full fle justify-between items-center"> 
                <Slider {...settings}>

                <div className=" shadow-m rounded-m overflow-hidde ">
                    <BlogCard 
                        pic={img1}
                        author="TMC"
                        title="Overcoming Temptation"
                        details="Just as we cannot stop birds from flying over our heads but can stop them from nesting in our hair, so also can we not stop temptation from coming. However, we…"
                        date="November 23, 2020"
                    />
                </div>

                <div className=" shadow-m rounded-md overflow-hidde ">
                    <BlogCard 
                        pic={img2}
                        author="TMC"
                        title="The Lord's Prayer"
                        details="INTRODUCTION Many people misunderstand the Lord’s prayer to be a prayer that we are to repeat word for word. It has been memorised by countless people throughout history and is…"
                        date="November 07, 2020"
                    />
                </div>

                <div className=" shadow-m rounded-md overflow-hidde ">
                    <BlogCard 
                        pic={img3}
                        author="TMC"
                        title="The Power Of A Praying Church"
                        details="REASONS AND CONDITIONS The church employs prayer to make effective the word, the name, and the Spirit of God in fulfilling her divine mandate (Acts 2:42). God listens to the…"
                        date="November 03, 2020"
                    />
                </div>

                <div className=" shadow-m rounded-md overflow-hidd  ">
                    <BlogCard 
                        pic={img4}
                        author="TMC"
                        title="Why You Should Be Saved"
                        details="Looking around and admiring the wonders of nature, animals, plants, food crops, birds, fishes all existing in their kinds and the rich diversity of the universe one can't help but…"
                        date="October 24, 2020"
                    />
                </div>

                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Blog