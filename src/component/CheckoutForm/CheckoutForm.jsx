import React, { useState } from 'react';
import './CheckoutForm.css'
import logo from './../../assets/logo.jpg';
import bankIcon from './../../assets/bank-card.jpeg';
import momoIcon from './../../assets/mobile-money.jpeg';
import qrIcon from './../../assets/qr-code.svg';
import bkIcon from './../../assets/bank.svg';
import fgIcon from './../../assets/finger-pointing.svg';

// payment options data
const Payment_options = [
    {name: "Bank Card",
     logo: bankIcon
    }, 
    {name: "Mobile Money", 
    logo: momoIcon
    },
    {name: "Scan and Pay", 
    logo: qrIcon
    },
    {name: "Pay with *222#",
    logo: fgIcon
    },
    {name: "Pay at Bank",
    logo: bkIcon
    },
];

const CheckoutForm = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event, name) => {
    console.log("e.target.checked", event.target.checked)
    setSelectedPayment(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Selected Payment Method:", selectedPayment);
    console.log("Selected Payment Method:", selectedPayment);

    setIsSubmitted(true);
  };

  return (

    <div>
        <div className='header'>
            <input className='desc' placeholder='Hi, Miss Dede'/>
        </div>
        <div className='for-span'>
            <img className='header-logo' src={logo} style={{width: "80px", height: "auto"}}/><span>GHS1,800.00</span>
        </div>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <div>
          <label>Choose a payment method:</label>
          {Payment_options.map((option, index) => (
            <div key={index} className='for-payment'>
              <input
                type="radio"
                value={option.name}
                checked={selectedPayment === option.name}
                onChange={(e) => handleChange(e,option.name)}
              />
              <label>{option.name}</label>
              <img src={option.logo} alt={option.name} style={{width: "40px", height: "auto"}} />
              
            </div>
          ))}
        </div>
        <button className='btn' type="submit" disabled={!selectedPayment}>
          Continue
        </button>
      </form>
      {isSubmitted && <p>Success! You have selected {selectedPayment} as your payment method.</p>}
    </div>
  );
};

export default CheckoutForm;
