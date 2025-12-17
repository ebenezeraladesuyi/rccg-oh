import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Import your CSR images
import csr1 from "../../assets/csr-images/csr1.jpeg";
import csr2 from "../../assets/csr-images/csr2.jpeg";
import csr3 from "../../assets/csr-images/csr3.jpeg";
import csr4 from "../../assets/csr-images/csr4.jpeg";
import csr5 from "../../assets/csr-images/csr5.jpeg";
import csr6 from "../../assets/csr-images/csr6.jpeg";
import csr7 from "../../assets/csr-images/csr7.jpeg";
import csr8 from "../../assets/csr-images/csr8.jpeg";
import csr9 from "../../assets/csr-images/csr9.jpeg";
import csr10 from "../../assets/csr-images/csr10.jpeg";
import csr11 from "../../assets/csr-images/csr11.jpeg";
import csr12 from "../../assets/csr-images/csr12.jpeg";
import csr13 from "../../assets/csr-images/csr13.jpeg";
import csr14 from "../../assets/csr-images/csr14.jpeg";
import csr15 from "../../assets/csr-images/csr15.jpeg";
import csr16 from "../../assets/csr-images/csr16.jpeg";
import csr17 from "../../assets/csr-images/csr17.jpeg";
import csr18 from "../../assets/csr-images/csr18.jpeg";
import csr19 from "../../assets/csr-images/csr19.jpeg";

// Import icons
// import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";

const CSR = () => {
  const csrPoints = [
    "Helping those in need, with groceries every Sunday.",
    "Caring for the poor, feeding the hungry, sheltering the homeless, and those in rehabilitation.",
    "We do giveaways to the community during Christmas and some other festive occasions",
    "We plan to build strong, supportive communities through our Foodbank fostering relationships that promote peace, love, and cooperation in our local community. An initiative that creates stronger ties between individuals and groups."
  ];

  // Carousel images (first 6 images for the main carousel)
  const carouselImages = [
    { src: csr1, title: "", description: "" },
    { src: csr2, title: "" },
    { src: csr3, title: "", description: "S" },
    { src: csr4, title: "", description: "" },
    { src: csr5, title: "", description: "" },
    { src: csr6, title: "", description: "" }
  ];

  // Grid images (next 12 images for the gallery grid)
  const gridImages = [
    { src: csr7, title: "" },
    { src: csr8, title: "" },
    { src: csr9, title: " " },
    { src: csr10, title: " " },
    { src: csr11, title: " " },
    { src: csr12, title: " " },
    { src: csr13, title: " " },
    { src: csr14, title: " " },
    { src: csr15, title: " " },
    { src: csr16, title: "" },
    { src: csr17, title: " " },
    { src: csr18, title: " " },
    // csr19 can be used as backup or in the hero section
  ];

  // Hero background image (using csr19 for the hero)
  const heroImage = csr19;

  return (
    <div className="w-full min-h-screen bg-white font-pop">
      {/* Hero Section */}
      <motion.div 
        className="w-full h-[60vh] bg-center bg-cover flex justify-center items-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="z-30 text-white text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            CHRISTIAN SOCIAL RESPONSIBILITY
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Expressing Faith Through Actions
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Christian Social Responsibility (CSR) is the concept that Christians and the Church have a moral obligation to care for others and contribute positively to society, particularly for the poor, marginalized, and vulnerable.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            It is an expression of our faith through actions that reflect the teachings of our Lord Jesus Christ, such as love, compassion, and service to others. This concept encourages individuals and Christian communities to actively engage in efforts that improve the well-being of society, no one should go hungry in our churches as we are to support one another.
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center flex items-end p-8"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image.src})`
                  }}
                >
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Key Aspects */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#28166f] mb-8 text-center">
            Key Aspects of Our CSR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {csrPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-[#28166f]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#28166f] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#28166f] mb-8 text-center">
            Our CSR In Action
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridImages.map((image, index) => (
              <motion.div 
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg h-64"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.3), rgba(40, 22, 111, 0.3)), url(${image.src})`
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {/* Showing God's love in practical ways */}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* If you want to use all 19 images, you can add another row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* You can add more images here if needed */}
          </div>
        </motion.div>

        {/* Stats Section (Optional - using remaining images as background) */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="rounded-xl p-8 text-white relative overflow-hidden h-64"
              style={{ backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.8), rgba(40, 22, 111, 0.8)), url(${csr16})` }}
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-2">100+</h3>
                <p className="text-lg">Families Supported Weekly</p>
              </div>
            </div>
            
            <div 
              className="rounded-xl p-8 text-white relative overflow-hidden h-64"
              style={{ backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.8), rgba(40, 22, 111, 0.8)), url(${csr17})` }}
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className="text-lg">Active Volunteers</p>
              </div>
            </div>
            
            <div 
              className="rounded-xl p-8 text-white relative overflow-hidden h-64"
              style={{ backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.8), rgba(40, 22, 111, 0.8)), url(${csr18})` }}
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-2">12+</h3>
                <p className="text-lg">Community Programs</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div 
          className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] rounded-2xl p-8 md:p-12 text-white text-center mb-12"
          style={{ backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.9), rgba(40, 22, 111, 0.9)), url(${csr19})` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-95">
              CSR is an outward expression of love, kindness rooted in biblical principles.
            </p>
            <p className="text-2xl font-bold">
              God helping us.
            </p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Follow Our Journey
          </h3>
          <div className="flex justify-center gap-6">
            <motion.a 
              href="" 
              className="text-[#28166f] text-3xl hover:text-[#3a2a8a] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSquareInstagram />
            </motion.a>
            <motion.a 
              href="" 
              className="text-[#28166f] text-3xl hover:text-[#3a2a8a] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookSquare />
            </motion.a>
            <motion.a 
              href="" 
              className="text-[#28166f] text-3xl hover:text-[#3a2a8a] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="" 
              className="text-[#28166f] text-3xl hover:text-[#3a2a8a] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
          </div> */}
          <p className="text-gray-600 mt-6">
            Join us in making a difference in our community
            <br /><span className="text-[#9e9c9c]">Contact Us:</span> csr@rccgopenheavens.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CSR;