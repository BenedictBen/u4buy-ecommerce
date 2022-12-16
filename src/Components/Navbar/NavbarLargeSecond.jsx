import React from 'react';
import NavbarDropdown from './NavbarDropdown';
import { BsSearch } from "react-icons/bs";
import NavbarAllCategories from './NavbarAllCategories';
import Logo1 from '../../Assets/images/Logo1.png';
import { NavLink } from "react-router-dom";


const NavbarLargeSecond = () => {
  return (
<div className='hidden lg:block'>
    <div className='bg-black flex w-screen items-center justify-center '>

    <div className='lg:flex py-2 space-x-3 items-center'>
        <div className=''>
             
             <div className='w-56'>
                <NavLink to="/">

                <img className='' src={Logo1} alt='logo'/>
                </NavLink>
             </div>
        </div>
        <div>
            <NavbarDropdown />
        </div>
        <div className='relative lg:flex px-5 py-2 space-x-3 items-center'>
            <div className='absolute left-12 z-50'>
            <BsSearch />
            </div>
            <div className='relative'>
            <input type="text" className=' lg:ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 indent-12 border-black border-solid border pr-80 py-2 placeholder:p-4'/>
            </div>
           <div className='absolute left-96 '>
            <NavbarAllCategories />
           </div>
        </div>
        <div>
            <button className='bg-blue-500 px-9 py-2 text-white -ml-4'>Search</button>
        </div>
    </div>    
        
    </div>    
    
</div>
  )
}

export default NavbarLargeSecond