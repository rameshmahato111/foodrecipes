import React, { useEffect, useState } from 'react'
import CardComponent from '../CardComponent'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const VegeterianComponent = () => {
    const [vegeterian, setVegeterian] = useState([])
    const api_url= process.env.REACT_APP_API_URL
    const api_key = process.env.REACT_APP_API_KEY
   
    useEffect(()=> {

        axios.get(`${api_url}/recipes/random?apiKey=${api_key}&number=20&tags=vegetarian`)
        .then(res => setVegeterian(res.data.recipes))
        .catch(error => console.log(error))
        

    }, [])
  return (
    <>
    <h1 className='text-center font-navtitle text-3xl text-yellow'>Vegeterian Foods| <span>
   
        <NavLink to={'/menu'} className={'underline decoration-yellow hover:decoration-red'}> back to menu</NavLink>
        </span> </h1>  
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 dark:bg-black dark:text-white'>
         
          {vegeterian && vegeterian.map((items) => (
            <>
              <CardComponent data={items} key={items.title} />
            </>
          ))}
        </div>
    </>
  )
}

export default VegeterianComponent