import React from 'react'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
        <div className=''>

        <div className='flex items-center justify-center'>
            <div className=''>
            <input type="text" placeholder='Search for anything' className='ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 indent-3 w-full border-black border-solid border pr-24 sm:pr-72 md:pr-96 py-2 placeholder:p-4'/>
            </div>
            <div className='bg-blue-500 p-3'>
            <BsSearch  className='text-white' size={20}/>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Search