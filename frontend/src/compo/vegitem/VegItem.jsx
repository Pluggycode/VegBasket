import React, { useContext } from 'react'
import "./VegItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const VegItem = ({id,name,price,description,image}) => {
 
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext); 
  return (
    <div className='veg-item'>
        <div className="food-item-img-container">
            <img  className="food-item-image" src={image} alt="" />
            {
              !cartItems[id]
              ?<img  classname="addit" onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id) }src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id) }src={assets.add_icon_green} alt="" />

                </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default VegItem