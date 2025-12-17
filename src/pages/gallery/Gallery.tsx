/* eslint-disable @typescript-eslint/no-explicit-any */


import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { iGallery } from '../../types/interface';
import axios from 'axios';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { url } from '../../api/Api';



const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of images per page
  const [allImages, setAllImages] = useState<iGallery[]>([]);
  const [loading, setLoading] = useState(false);


  // Fetch all images from API
  useEffect(() => {
    const fetchImages = async () => {
        setLoading(true);
      try {
        const response = await axios.get(`${url}/gallery/getimages`);
        const sortedImages = response.data && response.data.sort((a: iGallery, b: iGallery) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setAllImages(sortedImages);

        console.log(sortedImages)

        setLoading(false);
        
      } catch (error) {
        console.error("Error getting images:", error);

        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Calculate indexes of images to display for the current page
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = allImages && allImages.slice(indexOfFirstImage, indexOfLastImage);

  // Handle page change
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };



  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-6 py-[30px] bg[#ffffff]">
        
        <div className="w-full h-[50vh] flex flex-col justify-center items-center shadow-m gap-3">
            <h5 className="text-[30px] font-bold text-[#23a1db]">OUR GALLERY</h5>
            <i className="text-[20px]">Some Of Our Pictures...</i>
        </div>

        { loading ? 
            <div>
                <DatasIsaLoading />
            </div>
        :
            <div className="w-[90%] flex flex-wrap justify-center md:justify-between items-center gap-2">
            {currentImages && currentImages.map((image : iGallery) => (
            <div key={image._id} className="w-full h-[185px] md:w-[32.5%] lg:w-[24%] shadow-md">
                <img className="w-full h-full" src={image.rccgGallImage} alt="" />
            </div>
            ))}
            </div>
        }

      {/* Pagination */}
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Pagination
          count={Math.ceil(allImages && allImages.length / itemsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Gallery;
