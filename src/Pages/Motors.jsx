import React from 'react'
import { BsHeart } from "react-icons/bs";
import { motors } from "../Components/Motors/MotorsData";
import banner from "../Assets/motors/banner.webp";

const Motors = () => {
  return (
    <div className='mt-9'>
      <div>
        <div className=' hidden lg:block relative'>
          <div className='absolute top-7 left-16'>
            <h1 className='text-black font-bold text-3xl'>Vehicles Parts & Accessories</h1>
            <p className='text-black font-lighter text-xl'>The place to keep your ride since 1995</p>
          </div>
          <div className=''>
             <img src={banner} alt="banner" className='m-auto'/>
          </div>
        </div>
        <div className='mt-9'>
          <div className='block px-8 mb-2 lg:hidden'>
            <h1 className='font-bold text-lg underline'>Motors</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 sm:  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2'>
            {motors.map((shop, i) =>(
                <div className='pb-3 relative group1 h-96 hover:border-solid hover:border-2 hover:border-black hover:rounded-xl mx-2'>
                    <div>
                    <div className='z-0 cursor-pointer md:flex flex items-center justify-center border-solid border-2 rounded-lg'>
                        <img src={shop.image} alt='shop-img' key={i} className='sm:w-32 md:w-56 h-60'/>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 key={i} className="text-lg">{shop.name}</h1>
                        <p key={i} className="font-bold">{shop.price}</p>
                    </div>
                    </div>
                    <div className=' cursor-pointer  flex items-center justify-center flex-col '>
                        <div className=' child1 flex items-center justify-center flex-col space-y-2'>
                        <div className='absolute top-3 left-56  bg-gray-500 w-12 h-12 rounded-full hover:bg-blue-500 '>
                        <BsHeart className='absolute top-3 left-2 ' size={30} style={{color: 'white'}}/>
                        </div>
                        <div className=''>
                            <button className='uppercase bg-blue-500 px-3 py-2 rounded-lg text-white font-bold m-auto hover:bg-gray-500'>add to cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Motors