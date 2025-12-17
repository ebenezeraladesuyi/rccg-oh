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
  FaHandshake,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa'
import axios from 'axios'
import { url } from '../../api/Api'

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

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error' | 'info';
    title: string;
    message: string;
    details?: string[];
  } | null>(null)

  const showToast = (
    type: 'success' | 'error' | 'info',
    title: string,
    message: string,
    details?: string[]
  ) => {
    setToast({ show: true, type, title, message, details })
    
    // Auto-hide after 8 seconds for success, 10 seconds for errors
    const duration = type === 'success' ? 8000 : 10000
    setTimeout(() => {
      setToast(null)
    }, duration)
  }

  const hideToast = () => {
    setToast(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Required field validation
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required'
    
    if (!formData.proposedDate) newErrors.proposedDate = 'Proposed date is required'
    else if (new Date(formData.proposedDate) < new Date()) newErrors.proposedDate = 'Date must be in the future'
    
    if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required'
    
    if (!formData.expectedGuests) newErrors.expectedGuests = 'Number of guests is required'
    else if (parseInt(formData.expectedGuests) < 1) newErrors.expectedGuests = 'At least 1 guest is required'
    else if (parseInt(formData.expectedGuests) > 10000) newErrors.expectedGuests = 'Maximum 10,000 guests allowed'
    
    if (!formData.eventStartTime) newErrors.eventStartTime = 'Start time is required'
    if (!formData.eventEndTime) newErrors.eventEndTime = 'End time is required'
    else if (formData.eventStartTime && formData.eventEndTime) {
      if (formData.eventEndTime <= formData.eventStartTime) {
        newErrors.eventEndTime = 'End time must be after start time'
      }
    }
    
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      showToast('error', 'Validation Error', 'Please fill all required fields correctly')
      return
    }
    
    setLoading(true)
    setErrors({})
    
    try {
      // Prepare data for API
      const bookingData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        contactNumber: formData.contactNumber.trim(),
        proposedDate: formData.proposedDate,
        eventType: formData.eventType.trim(),
        expectedGuests: parseInt(formData.expectedGuests),
        eventStartTime: formData.eventStartTime,
        eventEndTime: formData.eventEndTime,
        additionalNotes: formData.additionalNotes.trim()
      }
      
      console.log('Submitting booking:', bookingData)
      
      // Make API call
      const response = await axios.post(`${url}/book/book`, bookingData)
      
      console.log('Booking response:', response.data)
      
      if (response.data.success) {
        // Show success toast
        showToast(
          'success',
          'Booking Submitted Successfully!',
          `Reference ID: ${response.data.data.referenceId}`,
          ['We will contact you within 24-48 hours.']
        )
        
        // Reset form
        setFormData({
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
        
      } else {
        // Show error from server
        showToast('error', 'Booking Failed', response.data.message || 'Failed to submit booking')
      }
      
    } catch (error: any) {
      console.error('Booking submission error:', error)
      
      // Handle specific error cases
      if (error.response) {
        // Server responded with error status
        const { status, data } = error.response
        
        if (status === 409 && data.conflictingBooking) {
          // Date conflict error
          showToast(
            'error',
            'Date Not Available',
            data.message,
            [`Existing booking: ${data.conflictingBooking.eventType} at ${data.conflictingBooking.time}`]
          )
        } else if (status === 400 && data.errors) {
          // Validation errors from server
          const errorMessages = data.errors.map((err: any) => err.msg || err)
          showToast(
            'error',
            'Validation Errors',
            'Please correct the following errors:',
            errorMessages
          )
          
          // Update form errors
          if (data.errors) {
            const serverErrors: Record<string, string> = {}
            data.errors.forEach((err: any) => {
              if (err.path) serverErrors[err.path] = err.msg
            })
            setErrors(serverErrors)
          }
        } else {
          // General server error
          showToast('error', `Error ${status}`, data.message || 'Failed to submit booking')
        }
      } else if (error.request) {
        // No response received
        showToast('error', 'Connection Error', 'No response from server. Please check your connection.')
      } else {
        // Request setup error
        showToast('error', 'Submission Error', 'Failed to submit booking request. Please try again.')
      }
      
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white font-mont relative">
      {/* Custom Toast Notification */}
      {toast?.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
              : toast.type === 'error'
              ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
          } rounded-xl shadow-2xl border p-4`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-full ${
              toast.type === 'success' 
                ? 'bg-green-100 text-green-600' 
                : toast.type === 'error'
                ? 'bg-red-100 text-red-600'
                : 'bg-blue-100 text-blue-600'
            }`}>
              {toast.type === 'success' ? (
                <FaCheckCircle size={20} />
              ) : (
                <FaExclamationTriangle size={20} />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className={`font-bold text-lg ${
                  toast.type === 'success' 
                    ? 'text-green-800' 
                    : toast.type === 'error'
                    ? 'text-red-800'
                    : 'text-blue-800'
                }`}>
                  {toast.title}
                </h3>
                <button
                  onClick={hideToast}
                  className={`text-lg ${
                    toast.type === 'success' 
                      ? 'text-green-400 hover:text-green-600' 
                      : toast.type === 'error'
                      ? 'text-red-400 hover:text-red-600'
                      : 'text-blue-400 hover:text-blue-600'
                  } transition-colors`}
                >
                  ×
                </button>
              </div>
              
              <p className={`text-sm mt-1 ${
                toast.type === 'success' 
                  ? 'text-green-700' 
                  : toast.type === 'error'
                  ? 'text-red-700'
                  : 'text-blue-700'
              }`}>
                {toast.message}
              </p>
              
              {toast.details && toast.details.length > 0 && (
                <div className="mt-2">
                  {toast.details.map((detail, index) => (
                    <p key={index} className={`text-xs ${
                      toast.type === 'success' 
                        ? 'text-green-600' 
                        : toast.type === 'error'
                        ? 'text-red-600'
                        : 'text-blue-600'
                    }`}>
                      • {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
      
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
              Host your special events at RCCG Open Heavens
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                        } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                        placeholder="+353 87 416 0229"
                      />
                      {errors.contactNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
                      )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.proposedDate ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                    />
                    {errors.proposedDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.proposedDate}</p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.eventType ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                      placeholder="e.g., Birthday, Thanksgiving, Conference, etc."
                    />
                    {errors.eventType && (
                      <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.expectedGuests ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                      placeholder="e.g., 150"
                    />
                    {errors.expectedGuests && (
                      <p className="text-red-500 text-sm mt-1">{errors.expectedGuests}</p>
                    )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.eventStartTime ? 'border-red-500' : 'border-gray-300'
                        } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                      />
                      {errors.eventStartTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.eventStartTime}</p>
                      )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.eventEndTime ? 'border-red-500' : 'border-gray-300'
                        } focus:border-[#28166f] focus:ring-2 focus:ring-[#28166f]/20 outline-none transition-all duration-300 bg-[#ffffff] text-[#000000]`}
                      />
                      {errors.eventEndTime && (
                        <p className="text-red-500 text-sm mt-1">{errors.eventEndTime}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="bloc text-gray-700 font-medium mb-2">
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
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#28166f] to-[#3a2a8a] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Booking Request'
                    )}
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
                    <p className="text-2xl font-bold">300+</p>
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