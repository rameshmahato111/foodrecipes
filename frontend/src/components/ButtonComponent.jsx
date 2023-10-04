import React from 'react'

const ButtonComponent = ({btnSize, type, tittle, backgroundColor, textColor, hover, onClick}) => {
  return (
    <>
      <button 
      type={type} onClick={onClick}
       className={`${backgroundColor ? `${backgroundColor}
        ${textColor}
         ${btnSize}
        ${hover}` : 'bg-gradient-to-r from-yellow to-black text-white'} 
        outline-none px-6 py-4 rounded-md capitalize font-poppins sm:text-md text-xs`}>
        {tittle}
      </button>
    
    </>
  )
}

export default ButtonComponent