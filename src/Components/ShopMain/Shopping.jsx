import React, { useEffect, useState } from 'react'
import { allshop } from './ShopData';
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice"
import { useDispatch, useSelector } from 'react-redux';

 
// import Product from './Product';

const Shopping = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [data, setData] = useState([allshop]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(allshop);
        setCollection([... new Set(allshop.map((item) => item.category))])
    }, [])

   const product_Filter = (itemsData) => {
        const filterData = allshop.filter((item) => item.category == itemsData)
        setData(filterData);
   }
    

  return (
    <>
      
        <div className='mt-9 flex items-center justify-center mb-12'>
            <ul className='flex space-x-7 '>
                <li>
                    <button className='bg-cyan-500 px-3 py-2 text-white uppercase hover:bg-blue-500 cursor-pointer rounded-2xl' onClick={() => setData(allshop)}>All</button>
                </li>
                {collection.map((show) => <li>
                    <button className='bg-cyan-500 px-3 py-2 text-white uppercase hover:bg-blue-500 cursor-pointer rounded-2xl' onClick={() =>{product_Filter(show)}}>{show}</button>
                </li>)}
            </ul>
        </div>

            {/* {data.map((item) =>(
                <Product key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} path={item.path}/>
            ))}
            */}
        <div className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2'>
            {data.map((product, i) =>(
                <div className='pb-3 relative group1 h-96 '>
                    <div>
                    <div className='z-0 cursor-pointer md:flex flex items-center justify-center'>
                        <Link to={product.path}>
                        <img src={product.image} alt='shop-img' key={i} className='w-32 h-40 sm:w-32 md:w-56 sm:h-60'/>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 key={i} className="text-lg">{product.name}</h1>
                        <p key={i} className="font-bold">{product.price}</p>
                    </div>
                    </div>
                    <div className=' cursor-pointer  flex items-center justify-center flex-col '>
                        <div className=' child1 flex items-center justify-center flex-col space-y-2'>
                        <div className='absolute top-3 left-56  bg-gray-500 w-12 h-12 rounded-full hover:bg-blue-500 '>
                        <BsHeart className='absolute top-3 left-2 ' size={30} style={{color: 'white'}}/>
                        </div>
                        <div className=''>
                            <button className='uppercase bg-blue-500 px-3 py-2 rounded-lg text-white font-bold m-auto hover:bg-gray-500'  onClick={() => {
               
                        dispatch(addToCart(product))
                        }}>add to cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Shopping