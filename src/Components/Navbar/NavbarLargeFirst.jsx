import React from 'react'
import { BsFillBellFill, BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarLargeFirst = () => {
  return (
    <>
    
    <div className='hidden lg:block divide-solid divide-red-500 divide-x-8 '>
        
    <div className='flex items-center justify-between w-screen px-7 pb-2'>
            {/* left side */}
      <div className='flex space-x-5 pt-2 font-bold'>
            <div>
            <h1>Hi!</h1>
            </div>
            <div>
                <Link to="/login">
                <p className='text-blue-500'>Sign in  </p>
                </Link>
            </div>
            <div>
                <Link to="/register">
                <p className='text-blue-500'>Register  </p>
                </Link>
            </div>
            <div>
                <h1>Daily Deals</h1>
            </div>
            <div>
                <h1>Help & Contact</h1>
            </div>
        </div>

        {/* right side */}
        <div className='flex space-x-5 pt-2 font-bold'>
            <div>
                <p>Ship to</p>
            </div>
                <p>Sell</p>
            <div>
                <p>Watchlist</p>
            </div>
            <div>
                <p>My u4buy</p>
            </div>
            <div>
                <BsFillBellFill size={20}/>
            </div>
            <div>
                <Link to="/cart">
                    <BsCart2 size={25}/>
                </Link>
            </div>
            
        </div>
    </div>
    
    
 </div>
   
 </>
  )
}

export default NavbarLargeFirst