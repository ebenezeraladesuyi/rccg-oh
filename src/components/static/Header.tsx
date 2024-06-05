import React from 'react'
import logo from "../../assets/images/Rccg_logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// import { Link } from "react-scroll";
import {motion}  from "framer-motion";

const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <motion.div className={`w-full h-[75px] lg:h-[130px flex lg:justify-center items-center font-pop fixed z-40 bg-whit text-white  shadow-m `}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    >
        <div className="w-[90%] h-full flex flex-co justify-between items-center  ml-[20px] lg:ml-0">

            

            {/* <div className='flex justify-between items-center w-full'> */}
            <NavLink to='/'>
                <div className=' p- rounded-md shadow-m w-[45px] md:w-[55px] z-40 h- py-0 bg-whit '>
                    <img className="w-full  " src={logo} alt="rccg-logo" />
                    {/* <h5 className='text-black font-bold'>GAC</h5> */}
                </div>
            </NavLink>


            {

                <div className='lg:bg-whit lg:bg-opacity-4 rounded-[30px] lg:shadow-m py-1 p-3'>
                    <li className="hidden lg:flex items-center gap-7 text-[15px] transition-all duration-500 ease-in-out">
                        <NavLink to="/">
                            <ol className='text-[#fbfbfb] hover:text-[#23a1db cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:border-b'>Home</ol>
                        </NavLink>

                        
                        <NavLink to="aboutus">
                            <ol className='text-[#fbfbfb] hover:text-[#23a1db cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:border-b'>What We Belief</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="services"> */}
                        {/* <NavLink to='/'>
                            <ol className='text-[#063e60] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Departments</ol>
                        </NavLink> */}

                        <NavLink to='/'>
                            <ol className='text-[#fbfbfb] hover:text-[#23a1db cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:border-b'>Newsletters</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                        <NavLink to='/contact'>
                            <ol className='text-[#fbfbfb] hover:text-[#23a1db cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:border-b'>Contact Us</ol>
                        </NavLink>

                        <NavLink to="/">
                            <button className=' px-5 py-2 bg-[#28166f] hover:text-[#fbfbfb] hover:border-[#fbfbfb] hover:bg-transparent text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out hover:px- hover:py- animate-bounce'>
                                Give Online
                            </button>
                        </NavLink>
                    </li>

                    

                { dropdown ?
                    // <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#23a1db] relative z-50 p-1 rounded-md bg-white" onClick={showDropdown}>
                    //     <MdClose /> 
                    // </div>
                    null
                :
                    <div className="lg:hidden text-[22px] cursor-pointer text-[#28166f] shadow-md bg-white p-1 rounded-md ml-[6px] relative z-50" onClick={showDropdown}>
                        <HiMenuAlt3 /> 
                    </div>
                }

                </div>

            }

        </div>


            <div className={` ${dropdown ? 'transform translate-y-0' : 'transform -translate-x-full'} lg:hidden w-[80%] h-[100vh] absolute bg-whit backdrop-blur-m bg-[#28166f] bg-opacity-6 top-0 transition-all ease-in-out z-30 duration-300relative`} onClick={showDropdown}>

                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#28166f]  z-50 p-1 rounded-md bg-white absolute right-[15px] top-[25px]" onClick={showDropdown}>
                    <MdClose /> 
                </div>

                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute ">
                    {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
                        <NavLink to="/">
                            <ol className='text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                        </NavLink>

                        <NavLink to="/">
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>What We Belief</ol>
                        </NavLink>

                        {/* <Link  offset={-100} smooth={true} duration={500} to="services">
                        {/* <NavLink to='/'> */}
                            {/* <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Departments</ol> */}
                        {/* </Link> */} 

                        <NavLink to='/'>
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>NewsLetters</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                        <NavLink to='/contact'>
                            <ol className='text-white  hover:text-[#eedfb0s] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact Us</ol>
                        </NavLink>

                        <NavLink to="/becomeamember">
                            <button className='w-[150px bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px]'>
                                Give Online
                            </button>
                        </NavLink>
                    {/* </li> */}
                </div>
            </div>

                    {/* <div className="flex items-center mt-[12px] animate-pulse text-[var(--accent)]">
                      <motion.button
                        animate={{ x: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="w-[150px] h-[45px]  rounded-md text-[20px]  border border-[#12C5E4]  dark:text-[#12C5E4]"
                      >
                        Contact Me
                      </motion.button>
                    </div> */}
    </motion.div>
  )
}

export default Header;

// #80c41c
// #3d82b3