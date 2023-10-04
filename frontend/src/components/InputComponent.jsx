import React from 'react'

const InputComponent = ({type, name, id, placeholder, onChange}) => {
  return (
    <input onChange={onChange} type={type} name={name} id={id} placeholder={placeholder} className='w-full h-14 focus:border-gray-200 focus:ring-yellow focus:ring-2 focus:outline-none bg-black text-white font-poppins rounded'/>
  )
}

export default InputComponent