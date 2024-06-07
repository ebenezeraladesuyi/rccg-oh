// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components";

const HomePageLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomePageLayout;