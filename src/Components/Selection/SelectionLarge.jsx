import React from 'react'
import { NavLink } from 'react-router-dom'

const SelectionLarge = () => {
    const activeLink = 'text-orange-500 underline'
    const normalLink = ''
  return (
    <div className='hidden lg:block'>
        <div className='flex items-center justify-center  lg:text-sm Font-["Poppins] font-bold xl:space-x-3 xl:text-base '>
            <NavLink to="/" className={({ isActive }) => 
                isActive ? activeLink: normalLink } >
            <h1 className='pr-3 hover:text-yellow-500'>Home</h1>
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
              <h1 className='pr-3 hover:text-yellow-500'>Shop</h1>
            </NavLink>
            <NavLink to="/electronics" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Electronics</h1>
            </NavLink>
            <NavLink to="/motors" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Motors</h1>
            </NavLink>
            <NavLink to="/fashion" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
              <h1 className='pr-3 hover:text-yellow-500'>Fashion</h1>
            </NavLink>
            
            <NavLink to="collectible" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Collectibles and Art</h1>
            </NavLink>
            <NavLink to="/sports" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Sports</h1>
            </NavLink>
            <NavLink to="/healthbeauty" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Health & Beauty</h1>
            </NavLink>
            <NavLink to="/industrialequipment" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Industrial equipment</h1>
            </NavLink>
            <NavLink to="/homegarden" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Home & Garden</h1>
            </NavLink>    
            <NavLink to="/foods" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>Foods</h1>
            </NavLink> 
            <NavLink to="/category" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>
            <h1 className='pr-3 hover:text-yellow-500'>All</h1>
            </NavLink>     
            <NavLink to="/vendorhome" className={({ isActive }) => 
                isActive ? activeLink: normalLink }>

              <h1 className='hover:text-yellow-500'>Sell</h1>
            </NavLink>
            
        </div>
    </div>
  )
}

export default SelectionLarge