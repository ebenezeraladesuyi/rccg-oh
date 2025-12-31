// import React from 'react'

// import Hero from "./Hero"
import Believe from "./Believe"
// import Blog from "./Blog"
import HeroPage from "./HeroPage"
import HomeGallery from "./HomeGallery"
import Prayer from "./Prayer"
import Service from "./Service"

const HomeComp = () => {
  return (
    <div>
        <HeroPage />
        <Prayer />
        <HomeGallery />
        <Believe />
        {/* <Blog /> */}
        <Service />
    </div>
  )
}

export default HomeComp