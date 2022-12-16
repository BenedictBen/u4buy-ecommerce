import React from 'react'
import { categories } from './Categories'

const NavbarAllCategories = () => {
  return (
    <select className=' w-36 border py-2 items-center justify-center flex'>
        {categories.map((list) => (
            <>
                All Categories
                <option>{list.name}</option>
            </>
        ))}
    </select>
  )
}

export default NavbarAllCategories