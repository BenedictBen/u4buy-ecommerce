import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { drops } from "./DrropDownLinks";

const NavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        {drops.map((drop) => (
            <div className='z-50'>
                <div className='px-3 text-left group cursor-pointer z-50 '>
                    <h1 isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className='flex items-center text-white'>
                        {drop.name}
                        <span className='text-xl'>
                            <BsChevronDown />
                        </span>
                        </h1>
                    {drop.submenu && (
                    <div>
                        <div className='absolute top-20  hidden group-hover:block hover:block z-10'>
                            <div className="py-3">
                    {/* <div
                      className="w-9 h-4 left-3 top-0 absolute 
                    mt-1 bg-white rotate-45 border1 "
                    >

                    </div> */}
                  </div>
                            <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                {drop.sublinks.map((mysublink) =>(
                                    <div>
                                        <h1 className='text-lg font-semibold tex-black'>{mysublink.Head}</h1>
                                        {mysublink.sublink.map((sling) =>(
                                            <li className='text-sm text-gray-600 my-2.5 list-none'>
                                                
                                                {sling.name}
                                                 
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        ))}
    </>
  )
}

export default NavbarDropdown