import React, { useContext } from 'react';
import { BsHeart } from "react-icons/bs";
import { ShopContext } from '../Context/ShopContext';



const AllProduct = (props) => {
    const {id, name, price, image, path} = props.data;
    
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id]

  return (
    <div className='hidden lg:block'>
        <div className='pb-3 relative group1 h-96'>
                    <div>
                    <div className='z-0 cursor-pointer md:flex flex items-center justify-center'>
                        <img src={image} alt='shop-img'  className='sm:w-32 md:w-72 lg:w-40 h-60'/>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1  className="text-lg break-all">{name}</h1>
                        <p className="font-bold">${price}</p>
                    </div>
                    </div>
                    <div className=' cursor-pointer  flex items-center justify-center flex-col '>
                        <div className=' child1 flex items-center justify-center flex-col space-y-2'>
                        <div className='absolute top-3 left-56  bg-gray-500 w-12 h-12 rounded-full hover:bg-blue-500 '>
                        <BsHeart className='absolute top-3 left-2 ' size={30} style={{color: 'white'}}/>
                        </div>
                        <div className=''>
                           <div className=''>
                            <button className='uppercase bg-blue-500 px-3 py-2 rounded-lg text-white font-bold m-auto hover:bg-gray-500' onClick={() => addToCart(id)}>add to cart {cartItemCount > 0 && <> ({cartItemCount}) </>}</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AllProduct