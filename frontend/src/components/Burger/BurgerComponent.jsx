import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BurgerComponent = () => {
    api_url= process.env.REACT_APP_API_URL
    api_key= process.env.REACT_APP_API_KEY
    const [burger, setBurger] = useState([])

    useEffect(()=> {
        axios.get(`${api_url}/`)
    })
  return (
    <>
    
    
    </>
  )
}

export default BurgerComponent