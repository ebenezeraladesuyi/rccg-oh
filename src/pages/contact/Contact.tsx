import React from 'react'

// import conImg from "../../assets/images/contact/contact.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { iContact } from '../../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { url } from '../../api/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const Contact = () => {

  const [formData , setFormData] = React.useState<iContact>({
    reason: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${url}/contact/createcontactmail`, formData);
      console.log('message sent successfully:', response.data);
      // Reset form data
      setFormData({
        reason: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setError(null);

    //   for success notification
    toast.success('Message Sent Successfully')

    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send mail. Please try again.');

    //   for error registration notification
    toast.error('Error Sending Message. Please, Try Again.')

    } finally {
      setLoading(false);
    }
  };

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="" className="w-full md:h-[100vh flex flex-col justify-center items-center font-mont py-[30px] bg-white relative overflow-hidden">
      <div className="w-[90%] z-10 flex flex-col md:flex-row justify-center md:justify-between items-cente md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

        {/* <div className="hidden md:block w-full md:w-[60%]">
          <img className="w-full" src={conImg} alt="" />
        </div> */}

        <h5 className="md:hidden text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#433482] animate-bounce text-center md:text-lef">CONTACT US</h5>

        <div className="bg-[#33a866] rounded-md p-4 w-full md:w-[45%] text-white flex flex-col gap-3 bg-hero-bg bg-cover bg-center relative">

          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-65"></div>

          <div className="text-[12px] md:text-[16px] z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><IoLocationOutline /></span>
            <h5 className="">20/21 Lee Rd, Dublin Industrial Estate, Glasnevin Dublin 11,Ireland, Eircode: D11PX89</h5>
          </div>

          <div className="text-[12px] md:text-[16px] z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaPhoneAlt /></span>
            <h5 className="">+353 (0) 87-416-0229</h5>
          </div>

          <div className="text-[12px] md:text-[16px] z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><MdOutlineAttachEmail /></span>
            <h5 className="">info@rccgopenheavens.com ; rccgopenheavensdub@yahoo.com</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2 z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaFacebookSquare /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2 z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaTwitter /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2 z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaSquareInstagram /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2 z-20">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaYoutube /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

        </div>

        <form onSubmit={handleSubmit2} className="w-full  md:w-[45%] flex flex-col gap-4">

          <h5 className="hidden md:block text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#433482] animate-bounce text-center md:text-left">CONTACT US</h5>

          <h5 className="md:hidden text-[15px] font-bold  text-[#433482] animate-bounce text-center ">Kindly, Fill This Form</h5>

          <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]"
          name='reason' value={formData.reason} onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Testimony">Testimony</option>
            <option value="Prayer Request">Prayer Request</option>
          </select>

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="text" id="" placeholder="FirstName" 
          name='firstName' value={formData.firstName} onChange={handleChange}
          />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="text"  id="" placeholder="LastName" 
          name='lastName' value={formData.lastName} onChange={handleChange}
          />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="email" id="" placeholder="Email" 
          name='email' value={formData.email} onChange={handleChange}
          />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="number"  id="" placeholder="Phone Number" 
          name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}
          />

          <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#433482]"  id="" placeholder="Enter your message" 
          name='message' value={formData.message} onChange={handleChange}
          />

          { loading ? (
            <div className='w-full flex justify-center items-center'>
              <DatasIsaLoading />
            </div>
          ) : (
            <button type="submit" className="bg-[#433482] hover:border-[#50519f] hover:border-[1px] hover:bg-transparent hover:text-[#433482] text-white rounded-md font-bold">
                Submit
            </button>
          )}
          
          {error && <p className='text-[5px]'>{error}</p>}

        </form>

      </div>
    </div>
  )
}

export default Contact