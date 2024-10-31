import React from 'react'

const Omline = () => {
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'>ENTER-OTP</p>
                <div className='multi-fileds'>
                    <input type="text" placeholder='XXXXXX' />
                </div>
                <div className='multi-fileds'>
                    <button>reset</button>
                    <button onClick={() => navigate('/comfirm')}>submit</button>
                </div>
            </div>
        </form>
    )
}

export default Omline