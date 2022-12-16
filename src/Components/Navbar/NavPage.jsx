import React from 'react'
import Selection from '../Selection/Selection'
import SelectionLarge from '../Selection/SelectionLarge'
import Navbar from './Navbar'

const NavPage = () => {
  return (
    <div className=''>
        <Navbar />
        {/* <SelectionLarge /> */}
        <Selection />
    </div>
  )
}

export default NavPage