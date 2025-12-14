
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

// Using the same icons as Hero.tsx for consistency
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const CSR = () => {
  const csrPoints = [
    "Helping those in need, with groceries every Sunday.",
    "Caring for the poor, feeding the hungry, sheltering the homeless, and those in rehabilitation.",
    "We do giveaways to the community during Christmas and some other festive occasions",
    "We plan to build strong, supportive communities through our Foodbank fostering relationships that promote peace, love, and cooperation in our local community. An initiative that creates stronger ties between individuals and groups."
  ];

  return (
    <div className="w-full min-h-screen bg-white font-pop">
      {/* Hero Section */}
      <motion.div 
        className="w-full h-[60vh] bg-hero-bg bg-center bg-cover flex justify-center items-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute bg-black h-full w-full top-0 left-0 opacity-60"></div>
        
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
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-hero-bg bg-center bg-cover flex items-end p-8"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-${1515378791036 + index}?auto=format&fit=crop&w=1920')`
                  }}
                >
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Serving Our Community {index + 1}
                    </h3>
                    <p className="text-lg opacity-90">
                      Showing God's love through practical actions
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
            {[...Array(6)].map((_, index) => (
              <motion.div 
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg h-64"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(40, 22, 111, 0.3), rgba(40, 22, 111, 0.3)), url('https://images.unsplash.com/photo-${1515378791036 + index + 6}?auto=format&fit=crop&w=800')`
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      Community Service {index + 1}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div 
          className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] rounded-2xl p-8 md:p-12 text-white text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Commitment
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-95">
            CSR is an outward expression of love, kindness rooted in biblical principles.
          </p>
          <p className="text-2xl font-bold">
            God helping us.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
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
          </div>
          <p className="text-gray-600 mt-6">
            Join us in making a difference in our community
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CSR;