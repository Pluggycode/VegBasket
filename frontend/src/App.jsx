import React, { useState } from 'react'
import Navbar from './compo/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './compo/footer/Footer'
import LoginPopUp from './compo/loginpopup/LoginPopUp'
import Payment from './pages/payment/Payment'
import Card from './pages/payment/Card'

import Online from './pages/payment/Online'
import Confirm from './pages/payment/Confirm'


const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin ={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/card' element={<Card />} />
        <Route path='/online' element={<Online />} />
        <Route path='/confirm' element={<Confirm />} />

      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App