import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
    const navigate = useNavigate();

  return (
    <form className='place-order'>
         <div className="place-order-left">
        <p className='title'>Thankyou for shopping with Us..</p>
          <div className='multi-fileds'> 
            <button onClick={() => navigate('/')}>Home</button>
      </div>
      </div>
        
    
    
     </form>
  )
}

export default Confirm