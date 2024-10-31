import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"

const List = ({url}) => {
  

  const [list,setList] = useState([]);

  const fetchList = async () => {
    const respose = await axios.get(`${url}/api/veg/list`);
    
    if (respose.data.success){
      setList(respose.data.data);
    }
    else{
      toast.error("Error")
    }
  }
  const removeFood = async(vegId) =>{

    const response = await axios.post(`${url}/api/veg/remove`,{id:vegId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className='list add felx-col'>
      <p>All vegs list</p>
      <div className="list-table">
        <div className="list-tabel-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index) => {
          return (
            <div key={index} className="list-tabel-format ">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p  onClick={() => removeFood(item._id)}  className='cursor'>x</p>
            </div>

          )
})}
      </div>
    </div>
  )
}

export default List