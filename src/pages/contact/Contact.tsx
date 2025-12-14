import React, { useState } from 'react'
import { motion } from "framer-motion"
import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline,
  IoTimeOutline 
} from "react-icons/io5";
import { 
  FaFacebookSquare, 
  FaTwitter, 
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";
import { 
  FaSquareInstagram,
  FaWhatsapp
} from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { iContact } from '../../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { url } from '../../api/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const Contact = () => {
  const [formData, setFormData] = useState<iContact>({
    reason: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${url}/contact/createcontactmail`, formData);
      console.log('Message sent successfully:', response.data);
      
      // Reset form
      setFormData({
        reason: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      
      setIsSubmitted(true);
      toast.success('Message Sent Successfully! We\'ll get back to you soon.');

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Error Sending Message. Please, Try Again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const contactInfo = [
    {
      icon: <IoLocationOutline className="text-2xl" />,
      title: "Our Location",
      details: "20/21 Lee Rd, Dublin Industrial Estate, Glasnevin Dublin 11, Ireland",
      sub: "Eircode: D11PX89",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <IoCallOutline className="text-2xl" />,
      title: "Call Us",
      details: "+353 (0) 87-416-0229",
      sub: "Available Monday-Friday, 9AM-5PM",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <IoMailOutline className="text-2xl" />,
      title: "Email Us",
      details: "info@rccgopenheavens.com",
      sub: "rccgopenheavensdub@yahoo.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <IoTimeOutline className="text-2xl" />,
      title: "Service Times",
      details: "Sundays: 10:30 AM",
      sub: "Tuesdays: 7:00 PM (Digging Deep)",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookSquare />, label: "Facebook", color: "bg-blue-600 hover:bg-blue-700", link: "#" },
    { icon: <FaSquareInstagram />, label: "Instagram", color: "bg-pink-600 hover:bg-pink-700", link: "#" },
    { icon: <FaTwitter />, label: "Twitter", color: "bg-sky-500 hover:bg-sky-600", link: "#" },
    { icon: <FaYoutube />, label: "YouTube", color: "bg-red-600 hover:bg-red-700", link: "#" },
    { icon: <FaWhatsapp />, label: "WhatsApp", color: "bg-green-500 hover:bg-green-600", link: "#" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white font-mont relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#433482] to-[#5a4b9f] rounded-full mb-6 shadow-xl">
            <FaPhoneAlt className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#433482]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for prayers, inquiries, or to share your testimony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-[#28166f] rounded-2xl shadow-2xl p-8 text-white h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-orange-400" />
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-200">{info.details}</p>
                      <p className="text-gray-300 text-sm mt-1">{info.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FaPaperPlane className="mr-3 text-orange-400" />
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className={`${social.color} text-white p-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map/Address Highlight */}
              {/* <div className="mt-8 p-6 bg-black/20 rounded-xl">
                <h4 className="font-bold text-lg mb-3 flex items-center">
                  <IoLocationOutline className="mr-2" />
                  Find Us Easily
                </h4>
                <p className="text-gray-300 text-sm">
                  Located in Dublin Industrial Estate with ample parking. Easily accessible by public transport.
                </p>
              </div> */}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We've received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-gradient-to-r from-[#433482] to-[#5a4b9f] text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300"
                        placeholder="+353 87 416 0229"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      What can we help you with? *
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300 appearance-none bg-white"
                    >
                      <option value="">Select a reason</option>
                      <option value="Prayer Request">🙏 Prayer Request</option>
                      <option value="Testimony">✨ Share a Testimony</option>
                      <option value="General Inquiry">💬 General Inquiry</option>
                      <option value="Volunteer">🤲 Volunteer Interest</option>
                      <option value="Donation">❤️ Donation Inquiry</option>
                      <option value="Other">📝 Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#433482] focus:ring-2 focus:ring-[#433482]/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Please share your message, prayer request, or testimony here..."
                    />
                  </div>

                  <div className="pt-4">
                    {loading ? (
                      <div className="flex justify-center">
                        <DatasIsaLoading />
                      </div>
                    ) : (
                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#433482] to-[#5a4b9f] text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <FaPaperPlane />
                          Send Message
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5a4b9f] to-[#433482] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Banner */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-[#433482] to-[#28166f] rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-gray-200">
                For urgent prayer requests, call our prayer line 24/7
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="tel:+353874160229"
                className="bg-white text-[#433482] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                <FaPhoneAlt />
                Call Now: +353 87 416 0229
              </a>
              <a 
                href="mailto:info@rccgopenheavens.com"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <MdOutlineAttachEmail />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact