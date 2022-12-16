import React from 'react'
import { category } from "../Category/CategoryData"
import { Link } from "react-router-dom";



const CategorySmall = () => {
  return (
    <div className='mt-12 block lg:hidden'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3'>
            {category.map((show, i) => (
                <div key={i} className='relative '>
                    <Link to={show.path}>
                    <h1  className="absolute  text-blue-500 font-bold bg-white text-lg">{show.title}</h1>
                    <img src={show.image} className="w-60 sm:w-64 md:w-56" alt="category"/>
                    </Link>
                </div>
            ))}
        
        </div>
    </div>
  )
}

export default CategorySmall