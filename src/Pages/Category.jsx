import React from 'react'
import CategoryLarge from '../Components/Category/CategoryLarge'
import CategorySmall from '../Components/Category/CategorySmall'


const Category = () => {
  return (
    <div className='mb-3'>
        <CategorySmall />
       <CategoryLarge />
    </div>
  )
}

export default Category