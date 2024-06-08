// import React from 'react'

// import conImg from "../../assets/images/contact/contact.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="" className="w-full md:h-[100vh] flex flex-col justify-center items-center font-mont py-[30px] bg-white relative overflow-hidden">
      <div className="w-[90%] z-10 flex flex-col md:flex-row justify-center md:justify-between items-cente md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

        {/* <div className="hidden md:block w-full md:w-[60%]">
          <img className="w-full" src={conImg} alt="" />
        </div> */}

        <h5 className="md:hidden text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#433482] animate-bounce text-center md:text-lef">CONTACT US</h5>

        <div className="bg-[#33a866] rounded-md p-4 w-full md:w-[45%] text-white flex flex-col gap-3">

          <div className="text-[12px] md:text-[16px]">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><IoLocationOutline /></span>
            <h5 className="">20/21 Lee Rd, Dublin Industrial Estate, Glasnevin Dublin 11,Ireland, Eircode: D11PX89</h5>
          </div>

          <div className="text-[12px] md:text-[16px]">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaPhoneAlt /></span>
            <h5 className="">+353 (0) 87-416-0229</h5>
          </div>

          <div className="text-[12px] md:text-[16px]">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><MdOutlineAttachEmail /></span>
            <h5 className="">info@rccgopenheavens.com ; rccgopenheavensdub@yahoo.com</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaFacebookSquare /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaTwitter /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaSquareInstagram /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

          <div className="text-[12px] md:text-[16px] flex items-center gap-2">
            <span className="text-[17px] md:text-[20px] text-[#d8d2f0]"><FaYoutube /></span>
            <h5 className="">@rccgopenheaven</h5>
          </div>

        </div>

        <form action="" className="w-full  md:w-[45%] flex flex-col gap-4">

          <h5 className="hidden md:block text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#433482] animate-bounce text-center md:text-left">CONTACT US</h5>

          <h5 className="md:hidden text-[15px] font-bold  text-[#433482] animate-bounce text-center ">Kindly, Fill This Form</h5>

          <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]">
            <option value="Testimony">Testimony</option>
            <option value="Prayer Request">Prayer Request</option>
          </select>

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="text" name="" id="" placeholder="Name" />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#433482]" type="email" name="" id="" placeholder="Email" />

          <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#433482]" name="" id="" placeholder="Enter your message" />

          <button type="submit" className="bg-[#433482] hover:border-[#50519f] hover:border-[1px] hover:bg-transparent hover:text-[#433482] text-white rounded-md font-bold">
              Submit
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact