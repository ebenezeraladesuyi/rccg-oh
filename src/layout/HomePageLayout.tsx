// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "../components/static/Header"

const HomePageLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomePageLayout;