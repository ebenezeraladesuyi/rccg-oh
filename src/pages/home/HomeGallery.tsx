// import React from 'react'

import HomeGalleryCard from "../../components/block/HomeGalleryCard";
import { FaArrowRightLong } from "react-icons/fa6";
import  pic1 from '../../assets/gallery/3Q6A5445.jpg';
// import  pic2 from '../../assets/gallery/3Q6A5948.jpg';
// import  pic3 from '../../assets/gallery/3Q6A5993.jpg';
import  pic4 from '../../assets/gallery/3Q6A6007.jpg';
import  pic5 from '../../assets/gallery/3Q6A6008.jpg';
import  pic6 from '../../assets/gallery/3Q6A6042.jpg';
import  pic7 from '../../assets/gallery/3Q6A6083.jpg';
import  pic8 from '../../assets/gallery/3Q6A6158.jpg';
import  pic9 from '../../assets/gallery/3Q6A6225.jpg';
// import  pic10 from '../../assets/gallery/3Q6A6233.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeGallery = () => {
     
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
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
    <div className="w-full flex justify-center items-center py-[30px]">
        <div className="w-[90%] flex flex-col gap-5">

            <div className="w-full text-[12px] flex items-center justify-between  text-[#28166f]">
                <h5 className="font-bold md:text-[18px] lg:text-[22px] ">Our Gallery</h5>

                <h6 className="flex gap-2 items-center hover:text-orange-400 cursor-pointer animate-bounce">View More Pictures <span><FaArrowRightLong /></span></h6>
            </div>

            <div className="w-full">
                <Slider {...settings}>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic1}
                        />
                    </div>
                    {/* <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic2}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic3}
                        />
                    </div> */}
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic4}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic5}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic6}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic7}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic8}
                        />
                    </div>
                    <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic9}
                        />
                    </div>
                    {/* <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                        <HomeGalleryCard 
                            pic={pic10}
                        />
                    </div> */}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default HomeGallery