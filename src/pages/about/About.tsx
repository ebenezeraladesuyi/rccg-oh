// import React from 'react'

import RevealMap from "../../animations/RevealMap"

const About = () => {
  return (
    <RevealMap>
    <div className="w-full h-[100%] flex flex-col justify-center items-center font-pop">

        <div className="w-full h-[50vh] lg:h-[60vh] bg-about-bg bg-cover bg-center text-whit flex flex-col justify-center items-center relative">
        
            {/* <div className="absolute lg:hidde h-full w-full bg-black top-0 left-0 opacity-50"></div> */}

            <h6 className="z-20 text-[30px] md:text-[50px] font-bold">About Us</h6>

            <h6 className="z-20 text-center mb-[-15px] md:text-[22px] md:w-[60%] lg:w-[50%] ">THE WORD | RIGHTEOUSNESS | EXCELLENCE</h6>
        </div>

        {/* <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-cente mt-[30px] gap-5">
            <div className="w-full md:w-[45%] flex flex-col gap-4">
                <div className="w-full h-[250px] bg-about-bg3 bg-center bg-cover rounded-bl-[120px] md:rounded-bl-[150px] rounded-tr-[120px] md:rounded-tr-[150px]"></div>

                <div className="w-full  shadow-md border-[1px] rounded-[10px] mt-[10px] h-[100px] md:h-[140px] border-[#23a1db flex justify-center items-center relative">

                    <h6 className="absolute top-[-15px] bg-[#23a1db] text-white p-1 px-3 rounded-md">OUR MISSION</h6>

                    <h6 className="mt-[10px] font-bold text-center p-2">BUILDING A TOTAL MAN IN CHRIST JESUS</h6>
                </div>
            </div>

            <div className="w-full md:w-[45%] flex flex-col gap-4">
                <div className="w-full h-[250px] bg-about-bg2 bg-center bg-cover rounded-bl-[120px] md:rounded-bl-[150px] rounded-tr-[120px] md:rounded-tr-[150px]"></div>

                <div className="w-full  shadow-md border-[1px] rounded-[10px] mt-[10px] h-[140px] border-[#23a1db flex justify-center items-center relative">

                    <h6 className="absolute top-[-15px] bg-[#23a1db] text-white p-1 px-3 rounded-md">OUR MANDATE</h6>

                    <h6 className="mt-[10px] text-[13px] font-bold text-center p-2">TO BRING MEN TO THE PLACE OF DEEP INTIMACY WITH THE FATHER, REGARDLESS OF THEIR LIMITATIONS, LIVING A TOTALLY GOOD LIFE GOD ORDAINED FOR HIS PEOPLE</h6>
                </div>
            </div>


            <div className=""></div>
        </div> */}

    </div>
    </RevealMap>
  )
}

export default About