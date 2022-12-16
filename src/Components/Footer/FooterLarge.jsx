import React from 'react'
import { footers } from './FooterData';
import { BsFillCaretUpFill } from "react-icons/bs";
import ButtonUp from './ButtonUp';


const FooterLarge = () => {
  return (
    <div className=' hidden lg:block'>
        
       <hr className='w-full bg-black mt-12'/>
    <div className='mt-12'>
        {footers.map((foot) =>(
            <div className='grid grid-cols-3 grid gap-5 '>
               {foot.sublinks.map((down) => (
                <div className=' '>
                    <div className='mx-7 '>
                    <div className=''>
                    <h1 className='font-bold text-left text-xl'>{down.Head}</h1>
                    </div>
                    {down.sublink.map((list) =>(
                        <div className=' '>
                            <p className=''>{list.sub}</p>
                        </div>
                    ))}
                    </div>
                </div>
               ))}
               
            </div>
        ))}
            <div className='float-right mx-3 mb-3'>
                 <ButtonUp />
            </div>
               
    </div>
        
           
    </div>
  )
}

export default FooterLarge