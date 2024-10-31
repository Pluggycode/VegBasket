import React, { useState } from 'react'
import './Home.css'
import Header from '../../compo/headder/Header'
import ExploreMenu from '../../compo/ExploreMenu/ExploreMenu';
import VegDisplay from '../../compo/foodDisplay/VegDisplay';
import AppDown from '../../compo/appdownload/AppDown';


const Home = () => {

  const [category,setCategory] = useState("All")
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <VegDisplay category={category}/>
        <AppDown />
        
    </div>
  )
}

export default Home