import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { url } from '../../api/Api'; // Adjust path as per your project structure
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentForm2: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0); // State to manage amount
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = Number(event.target.value);
    setAmount(inputAmount); // Update amount based on user input
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    setLoading(true); // Set loading state while processing payment

    try {
      // Make a request to create a payment intent on your server
      const response = await axios.post(`${url}/payment/create-payment-intent`, {
        amount: amount * 100, // Convert amount to cents as Stripe requires it in cents
      });

      const { clientSecret } = response.data;

      // Confirm the card payment with Stripe
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            // Include any additional billing details here if required
          },
        },
      });

      if (error) {
        setError(error.message ?? 'An error occurred');

        toast.error(error.message ?? 'An error occurred')
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
        // Handle successful payment here, e.g., show success message to user
        toast.success('Payment successfull.')
        setAmount(0);
      }

    } catch (error) {
      console.error('Error confirming payment:', error);
      setError('Payment failed. Please try again.');

      toast.error('Transaction not successfull. Please, Try Again.')
    }

    setLoading(false); // Reset loading state
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-cente'>
      <label className='text-[#28166f]'>
        Amount (in Euros):
        <input className='border-[1px] outline-none border-gray-300 rounded-md h-[40px] w-full pl-2' type="number" value={amount} onChange={handleChange} />
      </label>
      <br />
      <label className='text-[#28166f]'>
        Card Details:
        {/* <div className='border-[1px] outline-none border-gray-300 rounded-md h-[40px] w-full'> */}
            <CardElement className='flex flex-col justify-center items-cente p-2' />
        {/* </div> */}
      </label>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button className='mt-[15px] bg-[#28166f] text-white' type="submit" disabled={!stripe || loading}>
        {loading ? 
            (<div className='w-full flex justify-center items-center'>
                <DatasIsaLoading />
            </div>) 
        : 
            `Pay €${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm2;
