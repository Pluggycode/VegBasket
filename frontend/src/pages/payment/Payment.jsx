
import './Payment.css'

import React, { useContext } from 'react'

import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate();
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Card-Payment</p>
          <div className='multi-fileds'> 
          <input type="text" placeholder='Card-No'/>
          <input type="text" placeholder='Enter-cvv'/>
      </div>
      <input type="email" placeholder='Card-owner'/>
      <input type="text" placeholder='register-moblie'/>
      <div className='multi-fileds'> 
          <input type="text" placeholder='Exp-date'/>
          <input type="text" placeholder='Card-bank'/>
        </div>
        <button onClick={() => navigate('/card')}>PAY</button>
      </div>
      <div className="place-order-left">
        <p className='title'>UPI-Pay</p>
          <div className='multi-fileds'> 
          <input type="text" placeholder='xxxxxxxx@ibl'/>
       
      </div>

        <button onClick={() => navigate('/card')}>PAY</button>
      </div>
      <div className="place-order-left">
        <p className='title'>Cash-On-Del</p>
          <div className='multi-fileds'> 
      </div>
        <button onClick={() => navigate('/confirm')}>PAY</button>
      </div>
     <div className="place-order-right">
     <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()+20}</b>
            </div>
            </div>
                
            </div>


      </div>
      <hr />
    </form>
  )
}

export default Payment