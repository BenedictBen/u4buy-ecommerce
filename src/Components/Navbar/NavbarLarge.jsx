import React from 'react'
import NavbarLargeFirst from './NavbarLargeFirst'
import NavbarLargeSecond from './NavbarLargeSecond'


const NavbarLarge = () => {
  return (
    <>
    <div className='hidden lg:block w-screen divide-solid divide-black-500 divide-y'>
      <div className=' '>
      <NavbarLargeFirst />
      </div>
    

      <div className='divide-solid divide-black-500 divide-y z-50'>
        <NavbarLargeSecond />
    </div>
      
    </div>
   
    </>

  )
}

export default NavbarLarge