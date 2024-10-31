import React from 'react'
import './AppDown.css'
import { assets } from '../../assets/assets'

const AppDown = () => {
  return (
    <div className='AppDown' id='AppDown'>
        <p>For better experiance Download <br /> TCMC app from PlayStore</p>
        <div className='AppDownload-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDown