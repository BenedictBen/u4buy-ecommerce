import React,{ useState } from 'react'


const Pagination = () => {
   

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2'>
            {data.map((shop, i) =>(
                <div className='pb-3 relative group1 h-96 '>
                    <div>
                    <div className='z-0 cursor-pointer md:flex flex items-center justify-center'>
                        <Link to={shop.path}>
                        <img src={shop.image} alt='shop-img' key={i} className='w-32 h-40 sm:w-32 md:w-56 sm:h-60'/>
                        </Link>
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
    </>
  )
}

export default Pagination