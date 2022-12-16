import React, { useState } from 'react'
import {  BsPerson, BsCart2 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Search from './Search'
import NavbarLarge from './NavbarLarge';
import Logo1 from '../../Assets/images/Logo1.png'
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }
         const activeLink = 'text-orange-500 '
    const normalLink = ''
  return (
    <div className=''>
        {/* Top-Navbar */}
        <NavbarLarge />
        <div className='bg-black flex items-center justify-between px-4 py-4 lg:hidden'>

            <div className='w-44 '>
                {/* <h1 className='text-xl font-bold pl-2'>U4BUY</h1> */}

                 <NavLink to="/">

                <img className='' src={Logo1} alt='logo'/>
                </NavLink>
                
            </div>
            <div className='flex space-x-6 lg:hidden'>
                <div className=''>
                    <BsPerson size={28} style={{ color: 'white'}}/>
                </div>
                <div>
                    <Link to="/cart">
                        <BsCart2 size={28} style={{ color: 'white'}}/>
                    </Link>
                </div>
                <div>
                    <AiOutlineMenu onClick={showMenu} size={28} style={{ color: 'white'}}/>
                </div>
            </div>
            {/* Nav-Links */}
        </div>
            <div className='block z-50 lg:hidden'>
                <ul className={ `z-50 lg:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${active ? 'left-0' : "left-[-100%]"}` }>
                    <AiOutlineClose onClick={showMenu} className="absolute top-5 right-3" size={30}/>
                    <div className='px-3 text-left md:cursor-pointer'>
                        <NavLink to="/category" className={({ isActive }) => 
                                 isActive ? activeLink: normalLink }>
                            <h1 className='font-bold text-xl text-gray-700 mb-3'  onClick={{showMenu}}>Categories</h1>

                        </NavLink>
                        <NavLink to="/shop" className={({ isActive }) => 
                                 isActive ? activeLink: normalLink }>
                          <h1 className='font-bold text-xl text-gray-700 mb-3' onClick={{showMenu}}>Shop</h1>
                         </NavLink>
                        <NavLink>
                        <h1 className='font-bold text-xl text-gray-700 mb-3'  onClick={{showMenu}}>Sell</h1>
                        </NavLink> <br />
                        <NavLink>
                        <h1 className='font-bold text-xl text-gray-700'  onClick={{showMenu}}>Help</h1>
                        </NavLink>

                        <hr className='w-full my-4'/>

                        <div className='flex space-x-2'>
                        <NavLink>
                            <h1 className='text-lg text-blue-700'>Sign in</h1>
                        </NavLink>
                        <NavLink>
                            <h1 className='text-lg '>or</h1>
                        </NavLink>
                        <NavLink>
                            <h1 className='text-lg text-blue-700'>Register</h1>
                        </NavLink>
                        </div>
                    </div>
                </ul>
            </div>
        {/* Search bar */}
        <div className="lg:hidden">

        <Search />
        </div>
    </div>
  )
}

export default Navbar