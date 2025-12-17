import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCalendarAlt, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaUsers, 
  FaClock, 
  FaInfoCircle,
  FaChurch,
  FaHandshake
} from 'react-icons/fa'

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    proposedDate: '',
    eventType: '',
    expectedGuests: '',
    eventStartTime: '',
    eventEndTime: '',
    additionalNotes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be added later
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white font-mont">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Our Facility
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Host your special events in our Hall.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] p-3 rounded-lg">
                    <FaChurch className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Booking Request Form
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaUser className="text-[#28166f]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email & Contact Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                        <FaEnvelope className="text-[#28166f]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                        <FaPhone className="text-[#28166f]" />
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                        placeholder="+353 87 416 0229"
                      />
                    </div>
                  </div>

                  {/* Proposed Date */}
                  <div>
                    <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaCalendarAlt className="text-[#28166f]" />
                      Proposed Date of Event *
                    </label>
                    <input
                      type="date"
                      name="proposedDate"
                      value={formData.proposedDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaInfoCircle className="text-[#28166f]" />
                      Event Type *
                    </label>
                    <input
                      type="text"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                      placeholder="e.g. Musical Concert, Birthday, Conference, etc."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Please specify the type of event you want to host
                    </p>
                  </div>

                  {/* Expected Guests */}
                  <div>
                    <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaUsers className="text-[#28166f]" />
                      Number of Expected Guests *
                    </label>
                    <input
                      type="number"
                      name="expectedGuests"
                      value={formData.expectedGuests}
                      onChange={handleChange}
                      required
                      min="1"
                      max="10000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                      placeholder="e.g., 150"
                    />
                  </div>

                  {/* Event Times */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                        <FaClock className="text-[#28166f]" />
                        Event Start Time *
                      </label>
                      <input
                        type="time"
                        name="eventStartTime"
                        value={formData.eventStartTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                      />
                    </div>

                    <div>
                      <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                        <FaClock className="text-[#28166f]" />
                        Event End Time *
                      </label>
                      <input
                        type="time"
                        name="eventEndTime"
                        value={formData.eventEndTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 resize-none bg-[#ffffff] text-[#000000]"
                      placeholder="Any special requirements, equipment needs, or additional information..."
                    />
                  </div>

                  {/* Important Notice */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <div className="text-red-500 mt-1">⚠️</div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-1">Important Notice</h4>
                        <p className="text-red-600">
                          <strong>No Alcohol consumption in the church premises</strong>
                        </p>
                        <p className="text-red-600 text-sm mt-2">
                          Filling this application doesn't guarantee Hall usage. We will reach out to you if your application is approved.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Booking Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Facility Info Card */}
              <div className="bg-gradient-to-br from-gray-900 to-[#28166f] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FaChurch className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">Our Facility</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-medium mb-2">Capacity</p>
                    <p className="text-2xl font-bold">300</p>
                    <p className="text-sm opacity-80">Seated capacity</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-medium mb-2">Amenities</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Modern sound system
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Projector & screen
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Parking space
                      </li>
                      {/* <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Kitchen facilities
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Process</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Submit Request</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Fill out the booking form with your event details
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Review Process</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Our team reviews your application (24-48 hours)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Confirmation</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        We contact you with approval and next steps
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaHandshake className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Need Help?</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Contact our events coordinator for assistance:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      <strong>Phone:</strong> +353 (0) 87-416-0229
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Email:</strong> building@rccgopenheavens.com
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <strong>Office Hours:</strong><br />
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Events */}
              {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Events</h3>
                <div className="space-y-3">
                  {['Weddings', 'Baptisms', 'Thanksgiving Services', 'Conferences', 'Concerts', 'Community Events'].map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-[#28166f] rounded-full"></div>
                      <span className="text-gray-700">{event}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Considering RCCG Open Heavens
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We are honored that you're considering our facility for your special event. 
                Our team is committed to providing a welcoming and well-equipped space for 
                your celebration, worship, or gathering. We look forward to serving you!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Bookings