import React, { useEffect, useState } from 'react'
import { allshop } from './ShopData';
 
import Product from './Product';

const Shopping = () => {
    const [data, setData] = useState([]);
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
                {collection.map((item) => <li>
                    <button className='bg-cyan-500 px-3 py-2 text-white uppercase hover:bg-blue-500 cursor-pointer rounded-2xl' onClick={() =>{product_Filter(item)}}>{item}</button>
                </li>)}
            </ul>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2'>
            {data.map((product) =>(
                <Product data={product}/>
            ))}
        </div>

    </>
  )
}

export default Shopping