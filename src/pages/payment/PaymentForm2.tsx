import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { url } from '../../api/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentForm2: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>(''); // Change to string state
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // Allow empty string or valid numbers
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Validate amount
    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setLoading(true);

    try {
      // Make a request to create a payment intent on your server
      const response = await axios.post(`${url}/payment/create-payment-intent`, {
        amount: amountNum * 100, // Convert to cents
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
          billing_details: {},
        },
      });

      if (error) {
        setError(error.message ?? 'An error occurred');
        toast.error(error.message ?? 'An error occurred');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        toast.success('Payment successful.');
        setAmount(''); // Reset to empty string
      }

    } catch (error) {
      console.error('Error confirming payment:', error);
      setError('Payment failed. Please try again.');
      toast.error('Transaction not successful. Please, try again.');
    }

    setLoading(false);
  };

  // Calculate display amount for button
  const displayAmount = amount === '' ? '0.00' : parseFloat(amount || '0').toFixed(2);

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-cente'>
      <label className='text-[#28166f]'>
        Amount (in Euros):
        <input 
          className='border-[1px] outline-none border-gray-300 rounded-md h-[40px] w-full pl-2 bg-[#ffffff] text-[#000000]' 
          type="text" // Change to text type for better control
          inputMode="decimal" // Shows numeric keypad on mobile
          value={amount}
          onChange={handleChange}
          placeholder="0.00"
        />
      </label>
      <br />
      <label className='text-[#28166f]'>
        Card Details:
        <div className='border-[1px] outline-none border-gray-300 rounded-md h-[40px] w-full'> 
          <CardElement className='flex flex-col justify-center items-center p-2' />
        </div>
      </label>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button 
        className='mt-[15px] bg-[#28166f] text-white' 
        type="submit" 
        disabled={!stripe || loading || !amount || parseFloat(amount) <= 0}
      >
        {loading ? (
          <div className='w-full flex justify-center items-center'>
            <DatasIsaLoading />
          </div>
        ) : (
          `Pay €${displayAmount}`
        )}
      </button>
    </form>
  );
};

export default PaymentForm2;