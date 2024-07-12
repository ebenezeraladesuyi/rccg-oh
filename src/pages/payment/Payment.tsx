/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import PaymentForm from "./PaymentForm";
import PaymentForm2 from './PaymentForm2';


const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY!)


const Payment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
        <div className="w-full min-h-[90vh] flex justify-center items-center py-[30px] bg-[#f0f0f1]">
            <div className="w-[90%] md:w-[60%] lg:w-[50%] mt-[80px] p-6 flex flex-col justify-center items-center shadow-md bg-white rounded-md">
            <span className='bg-[#28166f] text-white py-2 rounded-md w-full text-[20px] md:text-[25px] lg:text-[30px] flex flex-col justify-center items-center font-bold mb-[30px]'>Give Online
                    <p className='text-[13px] md:text-[16px} lg:text-[19px} text-[#d0cbcb]'>(Pay with Card)</p>
                </span>
                <PaymentForm2 />
            </div>
        </div>
    </Elements>
  )
}

export default Payment

// Continue from PaymentForm.tsx



