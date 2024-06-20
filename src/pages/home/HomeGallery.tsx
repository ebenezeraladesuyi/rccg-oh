import React, { useEffect } from 'react'

import HomeGalleryCard from "../../components/block/HomeGalleryCard";
import { FaArrowRightLong } from "react-icons/fa6";
// import  pic1 from '../../assets/gallery/3Q6A5445.jpg';
// // import  pic2 from '../../assets/gallery/3Q6A5948.jpg';
// // import  pic3 from '../../assets/gallery/3Q6A5993.jpg';
// import  pic4 from '../../assets/gallery/3Q6A6007.jpg';
// import  pic5 from '../../assets/gallery/3Q6A6008.jpg';
// import  pic6 from '../../assets/gallery/3Q6A6042.jpg';
// import  pic7 from '../../assets/gallery/3Q6A6083.jpg';
// import  pic8 from '../../assets/gallery/3Q6A6158.jpg';
// import  pic9 from '../../assets/gallery/3Q6A6225.jpg';
// import  pic10 from '../../assets/gallery/3Q6A6233.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { iGallery } from '../../types/interface';
import { url } from '../../api/Api';
import axios from 'axios';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

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

    const [allGallery, setAllGallery] = React.useState<iGallery[]>([]);
    const [loading, setLoading] = React.useState(false);

    // fetch images from gallery api
  useEffect(() => {
    const fetchImages = async () => {
        setLoading(true);
      try {
        const response = await axios.get(`${url}/gallery/getimages`);
        const sortedImages = response.data && response.data.sort((a: iGallery, b: iGallery) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setAllGallery(sortedImages);

        setLoading(false);
        
      } catch (error) {
        console.error("Error getting images:", error);

        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return  
        <div className="w-full flex justify-center items-center">
            <DatasIsaLoading />
        </div>
  }

  return (
    <div className="w-full flex justify-center items-center py-[30px] overflow-hidden">
        <div className="w-[90%] flex flex-col gap-5">

            <div className="w-full text-[12px] flex items-center justify-between  text-[#28166f]">
                <h5 className="font-bold text-[14px] md:text-[18px] lg:text-[22px] ">Our Gallery</h5>

                <NavLink to="/gallery">
                    <h6 className="flex gap-2 items-center hover:text-orange-400 cursor-pointer animate-bounce">View More Pictures <span><FaArrowRightLong /></span></h6>
                </NavLink>
            </div>

            <div className="w-full">
                <Slider {...settings}>
                    {allGallery && allGallery.map((image: iGallery) => (
                        <div className="w-[290px] h-[190px] shadow-md overflow-hidden">
                            <HomeGalleryCard 
                                pic={image?.gacImage}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default HomeGallery