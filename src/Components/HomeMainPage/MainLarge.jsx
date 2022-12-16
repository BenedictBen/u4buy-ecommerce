import React from 'react'
import { BsFillForwardFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {popularL, popularcatL, daily, cell} from './MainData'
import '../../App.css';
import Soccer1 from '../../Assets/images/soccer1.webp'


const MainLarge = () => {

const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 200
    }

     const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 200
    }

  return (
    <div >
        <div className='hidden lg:block'>   
                                    {/* Explore Popular Categories */}
            <div className='flex flex-col items-left mt-9'>
                <div className=' ml-7 text-xl mb-6 pl-7 flex items-center'>
                    <h1 className=' font-bold text-3xl'>Explore Popular Categories</h1>
                    <p className='font-lighter text-2xl pl-2'>|    See all</p>
                            <BsFillForwardFill size={40}/>
                </div>
                <div className='grid grid-cols-3 grid-rows-1 justify-items-center sm:flex items-center justify-center gap-2 sm:pr-2.5'>
                    {popularL.map((list, index) => (
                        <div className='grid justify-items-center'>
                        <img src={list.image} key={index} className="w-36 "/>
                        <h1 key={index} className="text-center sm:break-words">{list.name}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Explore popular brands */}
            <div className='mt-12'>
                <div className=' ml-7 text-xl mb-6 pl-7 flex items-center'>
                    <h1 className=' font-bold text-3xl'>Explore Popular Brands</h1>
                    <p className='font-lighter text-2xl pl-2'>|    See all</p>
                            <BsFillForwardFill size={40}/>
                </div>
                <div className='grid grid-cols-3 grid-rows-1 justify-items-center sm:flex items-center justify-center gap-2 sm:pr-2.5'>
                    {popularcatL.map((list, index) => (
                        <div className='grid justify-items-center'>
                        <img src={list.image} key={index} className="w-36"/>
                        <h1 key={index} className="text-center sm:break-words">{list.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        
        {/* Daily Deals */}

        <div className='mt-12'>
            <div className=' ml-7 text-xl mb-6 pl-7 flex items-center'>
                    <h1 className=' font-bold text-3xl'>Daily Deals</h1>
                    <p className='font-lighter text-2xl pl-2'>|    See all</p>
                            <BsFillForwardFill size={40}/>
                </div>
            <div className=' flex items-center '>
                        <BsArrowLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={30}/>
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {daily.map((e, i) => (
                            
                            <div className='inline-block'>
                            <img className='w-36 mr-2  cursor-pointer hover:scale p-2 md:p-1' src={e.image} alt="daily" key={i} />
                                <h1 key={i} className="pl-3 font-bold">{e.price}</h1>
                           </div>
        
                        ))}
                        </div>
                        <BsArrowRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={30}/>

                    </div>
        </div>

        {/* Soccer */}
        <div className='relative mt-6 bg-gray-200 mt-12'>
                    <div className=''>
                        <div className='absolute top-16 left-12  '>

                        <h1 className='font-bold w-54 text-3xl mb-2'>Soccer euphoria is here</h1>
                        <p className='w-56'>Show your passion and take amazing collectibles with you</p>

                        </div>
                        <div className='absolute top-44 left-12 flex items-center justify-left pl-3 mt-2 border hover:bg-black hover:text-white'>
                           <div className=''>
                            <button className='px-2 py-2 '>Go now!</button>
                           </div>
                            <span className='pr-1'><BsFillForwardFill /></span>
                        </div>
                        <div >
                            <img src={Soccer1} className="w-screen bg-gray-200"/>
                        </div>
                   
                   </div>
                </div>

       
                
        </div>
        </div>

  )
}

export default MainLarge