import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
          <div className='multi-fileds'> 
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Second Name'/>
      </div>
      <input type="email" placeholder='Email Address'/>
      <input type="text" placeholder='Street'/>
      <div className='multi-fileds'> 
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className='multi-fileds'> 
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone' />
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
            <button onClick={() => navigate('/payment')}>PROCEED TO PAYMENT</button>
            </div>


      </div>
    </form>
  
  )
}

export default PlaceOrder