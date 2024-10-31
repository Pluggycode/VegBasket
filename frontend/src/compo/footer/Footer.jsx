import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo'/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                     <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy and Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN Touch</h2>
                <ul>
                    <li>1800-909-900</li>
                    <li>Contact@TCMC.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024 @ TCMC.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer