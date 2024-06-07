/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

interface iGalleryCard {
    pic : any;
}

const HomeGalleryCard:React.FC<iGalleryCard> = ({pic}) => {
  return (
    <div className="w-full h-full">
        <img src={pic} alt="" />
    </div>
  )
}

export default HomeGalleryCard