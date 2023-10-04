import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ButtonComponent from ".././ButtonComponent"
import { useDispatch } from 'react-redux'
import { add } from '../../features/cart/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetailsComponent = () => {
  const [details, setDetails] = useState([])
  const params = useParams()
  const pid = params.itemsId
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${pid}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => setDetails(res.data))
      .catch(err => console.log(err))
  }, [pid])

  const addToCart = (details)=> {
    console.log('added to cart')
    // disptach an add action
     dispatch(add(details))
     toast('items is added to the cart')
  }
  return (
    <>
      <ToastContainer position='top-right' theme='light' />
      <div className='max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-6 px-4'>
        <div className='py-4 my-6 '>
          <img src={details.image} alt="" className='w-full h-[80%] object-contain rounded-lg ' />
        </div>

        <div className='px-4 py-5'>
          <h1 className='text-center font-poppins text-3xl'>{details.title}</h1>

          <h1 className='text-start font-poppins' dangerouslySetInnerHTML={{ __html: details.summary }}></h1>

          <div className='mt-4'>
            <ButtonComponent tittle={'ADD TO CART'}
              btnSize={'w-full'}
              backgroundColor={'bg-gray-400'}
              textColor={'text-white'} 
              hover={'hover:bg-gray-600'}
              onClick={()=> addToCart(details)}
              />
          </div>
          <div className='mt-4'>
            <ButtonComponent
             tittle={'ORDER NOW'} 
             btnSize={'w-full'} 
             backgroundColor={'bg-gray-400'}
              textColor={'text-white'}
              hover={'hover:bg-gray-600'}
              />
          </div>

        </div>

      </div>


    </>
  )
}

export default ProductDetailsComponent