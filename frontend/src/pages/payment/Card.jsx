import React from 'react'

import { useNavigate } from 'react-router-dom'

const Card = () => {
    const navigate = useNavigate();
  return (
    <form className='place-order'>
          <div className="place-order-left">
        <p className='title'>ENTER-OTP</p>
          <div className='multi-fileds'> 
          <input type="text" placeholder='XXXXXX'/>
      </div>
      <div className='multi-fileds'> 
        <button type='reset'>reset</button>
        <button type='radio' onClick={() => navigate('/confirm')}>submit</button>
      </div>
      </div>
    </form>
  )
}

export default Card