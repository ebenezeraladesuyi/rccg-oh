
import RevealMap from "../../animations/RevealMap"
import { motion } from "framer-motion"
import { FaBullseye, FaCross, FaUsers, FaGlobeAmericas, FaChurch, FaWalking, FaCar } from "react-icons/fa"

const Mission = () => {
  const missionPoints = [
    {
      id: 1,
      text: "To make heaven.",
      icon: <FaCross className="text-white" size={20} />,
      color: "from-[#28166f] to-[#3a2a8a]"
    },
    {
      id: 2,
      text: "To take as many people with us.",
      icon: <FaUsers className="text-white" size={20} />,
      color: "from-[#3a2a8a] to-[#4d3ca5]"
    },
    {
      id: 3,
      text: "To have a member of RCCG in every family of all nations.",
      icon: <FaGlobeAmericas className="text-white" size={20} />,
      color: "from-[#4d3ca5] to-[#28166f]"
    },
    {
      id: 4,
      text: "To accomplish No. 1 above, holiness will be our lifestyle.",
      icon: <FaBullseye className="text-white" size={20} />,
      color: "from-[#28166f] to-[#3a2a8a]"
    },
    {
      id: 5,
      text: "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.",
      icon: <FaChurch className="text-white" size={20} />,
      color: "from-[#3a2a8a] to-[#4d3ca5]"
    }
  ]

  return (
    <RevealMap>
      <div className="w-full min-h-[100vh] md:min-h-[80vh] bg-gradient-to-br from-gray-900 via-[#28166f] to-gray-900 flex flex-col justify-center items-center relative py-16 px-4 font-pop overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4 shadow-lg">
            <FaBullseye className="text-white" size={28} />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            OUR MISSION
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Guided by purpose, driven by faith, committed to transformation
          </p>
        </motion.div>

        {/* Mission Points Container */}
        <div className="w-full max-w-6xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Mission Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform hover:-translate-y-2 transition-transform duration-300 border-l-8 border-orange-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-lg mr-4">
                  <FaCross size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#28166f]">
                  Core Mission Statement
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are committed to fulfilling God's purpose through a clear, actionable mission that transforms lives and communities across the globe.
              </p>

              {/* Distance Visualization */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#28166f] mb-4 flex items-center">
                  <FaGlobeAmericas className="mr-2" />
                  Global Church Planting Vision
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center flex-1">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                      <FaWalking size={24} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800">Developing Countries</h4>
                    <p className="text-gray-600 text-sm">5 minutes walking distance</p>
                  </div>
                  <div className="text-2xl text-gray-300">• • •</div>
                  <div className="text-center flex-1">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                      <FaCar size={24} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800">Developed Countries</h4>
                    <p className="text-gray-600 text-sm">5 minutes driving distance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Points List */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  className="group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-orange-200">
                    <div className="flex items-start">
                      <div className={`bg-gradient-to-r ${point.color} p-4 rounded-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {point.icon}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="bg-gray-100 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                            {point.id}
                          </span>
                          <h3 className="text-lg font-bold text-gray-800">
                            Mission Point {point.id}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-[#28166f]/10 to-[#3a2a8a]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Join Us in Fulfilling Our Mission
                </h3>
                <p className="text-gray-200">
                  Be part of a community committed to making a difference
                </p>
              </div>
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Involved
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white/10"></path>
          </svg>
        </div>
      </div>
    </RevealMap>
  )
}

export default Mission