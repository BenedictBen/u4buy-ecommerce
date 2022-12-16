import React, { useState } from 'react';
import { all } from "./CategoryData";
import AllProduct from './AllProduct';


const CategoryLarge = () => {
    const [data, setData] = useState(all);
    

   const filterResult = (cartItem) => {
        const result = all.filter((cart) => {
            return cart.category === cartItem;

        })
        setData(result);
    }
    
  return (
    <div className='hidden lg:block '>
        <div className='grid grid-cols-3 mt-9'>
            <div className=' col-start-1 col-end-3 pl-7 '>
                <button className='text-lg mb-6' onClick={() => setData(all)}>All Categories</button>
                
                    <div className='flex-col flex'>
                        <button className='btn-button uppercase' onClick={() => filterResult('electronic')}>electronics</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('motors')}>motors</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('fashion')}>fasion</button> 
                        <button className='btn-button uppercase' onClick={() => filterResult('collectibles')}>collectibles & arts</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('sports')}>sports</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('healthbeauty')}>health & beauty</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('industrial')}>industrial equipment</button>
                        <button className='btn-button uppercase' onClick={() => filterResult('home')}>home & garden</button>
                    </div>
              
             </div>
             <div className='lg:col-start-4 lg:col-end-7 '>   
            <div className='  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
                {data.map((zproduct) =>(
                <AllProduct data={zproduct}/>
            ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryLarge