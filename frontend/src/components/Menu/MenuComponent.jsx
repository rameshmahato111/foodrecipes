import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const MenuComponent = () => {
  const api_key= process.env.REACT_APP_API_KEY
  const [menu, setMenu] = useState([])
  useEffect(() => {

    axios.get(`https://api.spoonacular.com/random?apiKey=${api_key}&number=10&tags=vegeterian`)
      .then(res => console.log(setMenu(res.data.recipes)))
      .catch(err => console.log(err))

  }, [])
  return (
    <>

      <div className="max-w-md mx-auto my-10 px-3">
        <h1 className='text-red uppercase font-poppins text-center'>our menu</h1>
        <p className='font-navtitle text-3xl text-yellow'>check our yummy menu</p>

        <div className='flex items-center justify-center gap-5 py-10 font-poppins capitalize flex-wrap'>
          <div>
            <NavLink to={'/dessert'} className={({ isActive }) => `${isActive ? `underline decoration-red` : 'text-slate-400 underline decoration-red'}`}>Dessert</NavLink>
          </div>
          <div>
            <NavLink to={'/menu/vegeterian'} className='text-slate-400 underline decoration-slate-400'>vegeterian</NavLink>

          </div>
          <div>
            <NavLink to={'/menu/non-vegeterian'} className='text-slate-400 underline decoration-slate-400'>non-vegeterian</NavLink>

          </div>
          <div>
            <NavLink to={'/menu/burger'} className='text-slate-400 underline decoration-slate-400'>burger</NavLink>

          </div>
        </div>
      </div>

      <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-4 py-5'>




      </div>


    </>
  )
}

export default MenuComponent