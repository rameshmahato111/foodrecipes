import React, { useEffect, useState } from 'react'
import CardComponent from '../CardComponent'
import axios from 'axios'

const ProductComponent = () => {
  const api_key= process.env.REACT_APP_API_KEY
  const [product, setProduct] = useState([])

  useEffect(()=> {
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10&tags=dessert`)
    .then(res => setProduct(res.data.recipes))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      
    <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        
            {product && product.map((products)=> (
              <CardComponent data={products}  key={products.id} />
            ))}

        
      </div>
    
    </>
  )
}

export default ProductComponent