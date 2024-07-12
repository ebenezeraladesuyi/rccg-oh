// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const PaymentLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PaymentLayout;