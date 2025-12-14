import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { iFirstTimer } from '../../types/interface'
import axios from 'axios';
import { url } from '../../api/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { 
  FaUser, 
  FaHome, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaPhone, 
  FaMobileAlt, 
  FaEnvelope,
  FaPrayingHands,
  FaCross,
  FaHandsHelping,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

const FirstTimer = () => {
    const [formData, setFormData] = useState<iFirstTimer>({ 
        name: '',
        address: '',
        county: '',
        occupation: '',
        telHome: '',
        telWork: '',
        mobile: '',
        email: '',
        visitOrStay: '',
        prayerRequest: '',
        haveJesus: '',
        pastorVisit: '',
    });
    
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.post(`${url}/firsttimer/registerfirst`, formData);
            console.log('Registration successful:', response.data);
            
            // Reset form data
            setFormData({ 
                name: '',
                address: '',
                county: '',
                occupation: '',
                telHome: '',
                telWork: '',
                mobile: '',
                email: '',
                visitOrStay: '',
                prayerRequest: '',
                haveJesus: '',
                pastorVisit: '',
            });
            
            setIsSubmitted(true);
            toast.success('Welcome to the family! We\'re excited to have you.');

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setCurrentStep(1);
            }, 5000);

        } catch (err) {
            console.error('Error submitting form:', err);
            toast.error('Unable to submit form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSections = [
        { number: 1, title: "Personal Info", icon: <FaUser /> },
        { number: 2, title: "Contact Details", icon: <FaPhone /> },
        { number: 3, title: "Spiritual Journey", icon: <FaCross /> }
    ];

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white font-mont">
            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-[#23a1db] to-[#33a866] text-white py-16 px-4">
                <motion.div 
                    className="max-w-6xl mx-auto text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                        <FaStar className="text-3xl" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Welcome to the Family!
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 opacity-90">
                        We're thrilled to have you worship with us
                    </p>
                    <motion.p 
                        className="text-lg animate-bounce"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        ✨ You're in the right place ✨
                    </motion.p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {isSubmitted ? (
                    <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-12 text-center shadow-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <div className="text-green-500 text-7xl mb-6">
                            <FaCheckCircle />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Welcome to the Family!
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Thank you for taking the time to fill out our first-timer form. 
                            We're excited to get to know you better and support you on your spiritual journey.
                        </p>
                        <div className="bg-white rounded-xl p-6 inline-block shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">What's Next?</h3>
                            <ul className="text-gray-600 text-left space-y-3">
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span>You'll receive a welcome email shortly</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span>Look out for a call from our welcome team</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span>Join us for our next newcomers' gathering</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Progress Steps */}
                        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 border-b">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    First Timer Registration
                                </h2>
                                <span className="bg-gradient-to-r from-[#23a1db] to-[#33a866] text-white px-4 py-2 rounded-full text-sm font-bold">
                                    Step {currentStep} of 3
                                </span>
                            </div>
                            
                            <div className="flex justify-between relative">
                                {formSections.map((section) => (
                                    <div key={section.number} className="flex flex-col items-center relative z-10">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 transition-all duration-300 ${
                                            currentStep >= section.number 
                                                ? 'bg-gradient-to-r from-[#23a1db] to-[#33a866] shadow-lg' 
                                                : 'bg-gray-300'
                                        }`}>
                                            {currentStep > section.number ? <FaCheckCircle /> : section.icon}
                                        </div>
                                        <span className={`text-sm font-medium ${
                                            currentStep >= section.number ? 'text-gray-900' : 'text-gray-400'
                                        }`}>
                                            {section.title}
                                        </span>
                                    </div>
                                ))}
                                <div className="absolute top-6 left-12 right-12 h-1 bg-gray-200 -z-10">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-[#23a1db] to-[#33a866]"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Form Content */}
                        <form onSubmit={handleSubmit} className="p-6 md:p-8">
                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FaUser className="text-[#23a1db]" />
                                        Personal Information
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaUser className="text-[#33a866]" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="John Smith"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaHome className="text-[#33a866]" />
                                                Address *
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="Street Address"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-[#33a866]" />
                                                County *
                                            </label>
                                            <input
                                                type="text"
                                                name="county"
                                                value={formData.county}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="County"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaBriefcase className="text-[#33a866]" />
                                                Occupation *
                                            </label>
                                            <input
                                                type="text"
                                                name="occupation"
                                                value={formData.occupation}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="Your profession"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Contact Details */}
                            {currentStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FaPhone className="text-[#23a1db]" />
                                        Contact Details
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaPhone className="text-[#33a866]" />
                                                Telephone (Home)
                                            </label>
                                            <input
                                                type="tel"
                                                name="telHome"
                                                value={formData.telHome}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="Home phone number"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaPhone className="text-[#33a866]" />
                                                Telephone (Work)
                                            </label>
                                            <input
                                                type="tel"
                                                name="telWork"
                                                value={formData.telWork}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="Work phone number"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaMobileAlt className="text-[#33a866]" />
                                                Mobile *
                                            </label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="Mobile number"
                                            />
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaEnvelope className="text-[#33a866]" />
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Spiritual Journey */}
                            {currentStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FaCross className="text-[#23a1db]" />
                                        Spiritual Journey
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Are you visiting or planning to stay with us? *
                                            </label>
                                            <select
                                                name="visitOrStay"
                                                value={formData.visitOrStay}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300 appearance-none bg-white"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Visiting">Just visiting today</option>
                                                <option value="Staying">Planning to stay with this church</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaPrayingHands className="text-[#33a866]" />
                                                Prayer Request
                                            </label>
                                            <textarea
                                                name="prayerRequest"
                                                value={formData.prayerRequest}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300 resize-none"
                                                placeholder="Share any prayer requests or areas where you need support..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Have you accepted Jesus Christ as your personal Lord and Savior? *
                                            </label>
                                            <select
                                                name="haveJesus"
                                                value={formData.haveJesus}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300 appearance-none bg-white"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Yes">Yes, I have</option>
                                                <option value="No">Not yet, but I'm interested</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="bloc text-gray-700 font-medium mb-2 flex items-center gap-2">
                                                <FaHandsHelping className="text-[#33a866]" />
                                                Would you like a pastor or counselor to visit you? *
                                            </label>
                                            <select
                                                name="pastorVisit"
                                                value={formData.pastorVisit}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#23a1db] focus:ring-2 focus:ring-[#23a1db]/20 outline-none transition-all duration-300 appearance-none bg-white"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Yes">Yes, I'd appreciate a visit</option>
                                                <option value="No">Not at this time, thank you</option>
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                                        currentStep === 1 
                                            ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                    disabled={currentStep === 1}
                                >
                                    Previous
                                </button>
                                
                                {currentStep < 3 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-8 py-3 bg-gradient-to-r from-[#23a1db] to-[#33a866] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-3 bg-gradient-to-r from-[#23a1db] to-[#33a866] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <DatasIsaLoading />
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            'Complete Registration'
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* Form Tips */}
                        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 border-t">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-3 rounded-full shadow">
                                        <FaEnvelope className="text-[#23a1db]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Your Privacy Matters</h4>
                                        <p className="text-sm text-gray-600">We respect your privacy and will keep your information confidential</p>
                                    </div>
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="text-sm text-gray-600">
                                        Questions? Contact us at <a href="tel:+353874160229" className="text-[#33a866] font-bold hover:underline">+353 87 416 0229</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Welcome Message */}
            <motion.div 
                className="max-w-6xl mx-auto px-4 pb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        What to Expect Next
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-[#23a1db] text-3xl mb-4">📞</div>
                            <h4 className="font-bold text-gray-900 mb-2">Welcome Call</h4>
                            <p className="text-gray-600">Our welcome team will reach out within 48 hours</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-[#33a866] text-3xl mb-4">🎁</div>
                            <h4 className="font-bold text-gray-900 mb-2">Welcome Gift</h4>
                            <p className="text-gray-600">Receive a special welcome package on your next visit</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-[#23a1db] text-3xl mb-4">🤝</div>
                            <h4 className="font-bold text-gray-900 mb-2">Connection</h4>
                            <p className="text-gray-600">Get connected with small groups and ministries</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FirstTimer;