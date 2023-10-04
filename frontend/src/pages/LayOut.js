import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponent, FooterComponent } from '../components/Common'
const LayOut = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />

      <FooterComponent />


    </>
  )
}

export default LayOut