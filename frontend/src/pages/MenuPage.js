import React from 'react'
import { Helmet } from 'react-helmet'
import { ProductComponent, MenuComponent } from "../components/Common"
const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>
          menu page
        </title>
      </Helmet>

      <MenuComponent />

      <ProductComponent />
    </>
  )
}

export default MenuPage