import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:" ",
        description:" ",
        price:" ",
        category:"Vegitables"
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }
    
    const onSubmitHandler = async (event) => {
        

        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/veg/add`,formData)
        
        if(response.data.success) {
            setData({
                name:" ",
                description:" ",
                price:" ",
                category:"Vegitables"
            })
            setImage(false)
            toast.success(response.data.message)

        }
        else{
            toast.error(response.data.error)
        }
        
    }
  return (
    <div className='add'>
        <form  className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />

            </div>
            <div className="add-product-name flex-col" >
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="type here" />
            </div>
            <div className="add-product-discription flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here'></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Vegitables">Vegitables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Leafs">Leafs</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Dry Fruits">Dry Fruits</option>
                        <option value="Dry Fish">Dry Fish</option>
                        <option value="Flower Maalas">Flower Maalas</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='₹20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add