// import React from 'react'

import RevealMap from "../../animations/RevealMap"

const Mission = () => {
  return (
    <RevealMap><div className="w-full h-[100%] md:h-[45vh bg-prayer-bg2 bg-cover bg-center flex justify-center items-center relative py-[30px] font-pop">

        <div  className="absolute w-full h-full bg-black top-0 left-0 opacity-60"></div>

        {/* <RevealMap className="w-[90%]"> */}
            <div className="w-[90%] text-[#28166f] flex justify-center items-center z-20">

                <div className="w-full md:w-[60%] rounded-md p-4  pt-7 lg:pt-[40px] border-[2px border-whit bg-white text-[12px] md:text-[14px] lg:text-[16px] relative mt-">

                    <h5 className="absolute bg-orange-400 p-1 px-2 top-[-15px] left-[20px] rounded-md text-center text-white font-bold text-[16px] lg:text-[25px] ">OUR MISSION</h5>

                    <li>To make heaven.</li>
                    <li>To take as many people with us.</li>
                    <li>To have a member of RCCG in every family of all nations.</li>
                    <li>To accomplish No. 1 above, holiness will be our lifestyle.</li>
                    <li>To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.</li>
                </div>
            </div>
        {/* </RevealMap> */}
    </div>
    </RevealMap>
  )
}

export default Mission