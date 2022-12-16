import React from 'react'
import ButtonUp from './ButtonUp';


const Footer = () => {
  return (
      <div className='bg-black text-white block lg:hidden '>
          <div className='flex flex-row items-center justify-between'>          
        <div className='pl-3 py-5 '>
            <p className='pb-2'>Home</p>
            <p className='pb-2'>Sign in/Register</p>
            <p className='pb-2'>Sell an item</p>
            <p className='pb-2'>Help & Contact</p>
            <p className='pb-2'>Download the free U4buy</p>
        </div>
         <div className='pr-3'>
                 <ButtonUp />
            </div>
        </div>
        <hr className='w-full '/>

        <div className=' flex items-center justify-center pt-4 pb-2'>
            <p>Site map,</p>
            <p>User Agreement,</p>
            <p>Privacy,</p>
            <p>Cookies&AdChoice.</p>
        </div>
        <div className=' flex items-center justify-center py-2'>
            <p>
            @ 2022 U4buy Inc
            </p>
        </div>
        <div className=' flex items-center justify-center pb-4'>
            <p>Mobile / Classic Site</p>
        </div>
        
   
        
    </div>
  )
}

export default Footer


