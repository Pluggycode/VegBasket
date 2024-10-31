import React, { useContext } from 'react'
import "./VegDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import VegItem from '../vegitem/VegItem'

const VegDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='veg-display' id='veg-display'>
        <h2>Things near you</h2>
        <div className='veg-display-list'>
            {food_list.map((item,index) => {
                if (category==="All" || category===item.category) {
             return <VegItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
             
                }
            })}
            
        </div>
        <hr />
        
    </div>
    
  )
}

export default VegDisplay