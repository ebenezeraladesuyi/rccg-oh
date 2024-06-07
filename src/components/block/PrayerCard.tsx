// import React from 'react'

interface iPrayerCard {
    content? : string,
    buttonContent? : string
}

const PrayerCard:React.FC<iPrayerCard> = ({content, buttonContent})  => {
  return (
    <div className="w-full h-full">

        <div className="flex flex-col gap-5 items-center">
            <h6 className="text-white font-bold text-[16px] md:text-[17px] lg:text-[20px] text-center leading-6 w-[50%] md:w-[45%] ">
                {/* Share your Testimony <br/>with us */}
                {content}
            </h6>

            <a href="" className="bg-white text-[#28166f] p-2 w-[200px] text-[14px] md:text-[16px] flex justify-center items-center rounded-md font-bold animate-bounce ">
                {/* Share With Us */}
                {buttonContent}
            </a>
        </div>
        
    </div>
  )
}

export default PrayerCard