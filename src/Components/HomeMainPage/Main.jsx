import React from 'react'
import {popular, popularcat, daily} from './MainData'
import '../../App.css';
import { BsFillForwardFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Soccer from '../../Assets/images/soccer.webp'
import MainLarge from './MainLarge';


const Main = () => {
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
    }

     const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollRight = slider.scrollRight + 500
    }
  return (
    <div >
        
            <MainLarge />
        
        <div className='block lg:hidden'>  
        <div className=' mb-5 '>
            <div className='mt-6'>
                <div className='text-left pl-3 text-xl mb-3'>
                    <h1 className='font-bold'>Explore Popular Categories</h1>
                </div>
                <div className='grid grid-cols-3 grid-rows-1 justify-items-center sm:flex items-center justify-center gap-2 sm:pr-2.5'>
                    {popular.map((list, index) => (
                        <div className='grid justify-items-center'>
                        <img src={list.image} key={index}/>
                        <h1 key={index} className="text-center sm:break-words">{list.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
                        </div>
            {/* Daily deals */}
            <div className='mt-5 '>
                        <div className='text-left pl-3 text-xl mb-3'>
                          <h1 className='font-bold'>Daily Deals <span>&#10095;</span></h1>
                        </div>
                    <div className=' flex items-center '>
                        <BsArrowLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={30}/>
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {daily.map((e, i) => (
                            
                            <div className='inline-block'>
                            <img className='w-28 sm:w-44 md:w-60 md:mr-4 sm:mr-2  cursor-pointer hover:scale p-2 md:p-1' src={e.image} alt="daily" key={i} />
                                <h1 key={i} className="pl-3 font-bold">{e.price}</h1>
                           </div>
        
                        ))}
                        </div>
                        <BsArrowRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={30}/>

                    </div>
                {/* Soccer */}
                     
                <div className='mt-6 bg-gray-200'>
                    <div className=' '>
                        <div className='pl-3 text-xl'>

                        <h1 className='font-bold'>Soccer euphoria is here</h1>
                        <p>Show your passion and take amazing collectibles with you</p>

                        </div>
                        <div className='flex items-center justify-left pl-3 mt-2'>
                            <button>Go now!</button>
                            <span className=''><BsFillForwardFill /></span>
                        </div>
                        <div >
                            <img src={Soccer} className="w-full bg-gray-200"/>
                        </div>
                   
                   </div>
                </div>

                {/* Explore popular categories */}
                <div className='mt-6'>
                <div className='text-left pl-3 text-xl mb-3 flex items-center justify-left'>
                    <h1 className='font-bold'>Explore Popular Categories</h1>
                            <span className=''><BsFillForwardFill /></span>
                </div>
                <div className='grid grid-cols-3 grid-rows-1 justify-items-center sm:flex items-center justify-center gap-2 sm:pr-2.5'>
                    {popularcat.map((list, index) => (
                        <div className='grid justify-items-center'>
                        <img src={list.image} key={index}/>
                        <h1 key={index} className="text-center sm:break-words">{list.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            </div>
        </div>

        
       
    
  )
}

export default Main
