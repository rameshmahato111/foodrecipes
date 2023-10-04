import React, { useState, useEffect } from 'react'
import CardComponent from '../CardComponent'
import axios from 'axios'
import ButtonComponent from '../ButtonComponent'
const PopularComponent = () => {
  const api_url = process.env.REACT_APP_API_URL
  const api_key = process.env.REACT_APP_API_KEY
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(12)
  const uid = new Date().getTime()
  const getItems = async()=> {
    try {
     const result = await  axios.get(`${api_url}/recipes/random?apiKey=${api_key}&number=20`)
     setPopular(result.data.recipes)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // axios.get(`${api_url}/recipes/random?apiKey=${api_key}&number=20`)
    //   .then(res => setPopular(res.data.recipes))
    //   .catch(err => console.log(err))
    // setLoading(false)

    const delay = setTimeout(()=> {
         getItems()
         clearTimeout(delay)
    }, 2000)
  
  }, [])

  return (
    <>
 <h1 className='text-center font-navtitle text-3xl text-yellow'>Popular Foods </h1>     
  {loading ? <div className='max-w-sm mx-auto px-4 py-4'>Loading please wait<span className='animate-ping '>.....</span></div> :
              
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 dark:bg-black dark:text-white px-2'>
           
          {popular && popular.slice(0, limit).map((items) => (
            <>
              <CardComponent data={items} key={uid} />
            </>
          ))}
        </div>
      }

      <div className='max-w-sm mx-auto my-5 flex items-center gap-5 px-5'>
        {limit < popular.length &&
          <ButtonComponent onClick={() => setLimit(limit + 4)} tittle={'Load More'} backgroundColor={'bg-yellow'} textColor={'text-white'} />
        }
        {limit > 12 &&

          <ButtonComponent onClick={() => setLimit(limit - 4)} tittle={'Back'} backgroundColor={'bg-yellow'} textColor={'text-white'} />
        }
      </div>
    </>
  )
}

export default PopularComponent