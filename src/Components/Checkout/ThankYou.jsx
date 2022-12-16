import React from 'react'
import { Link } from 'react-router-dom'
const ThankYou = () => {
  return (
    <div className='mt-9'>
        <Link to="/shop">
        <h1 className='font-bold text-xl underline pl-10'>Go back</h1>
        </Link>
        <div>
        <h1 className='m-auto text-lg font-bold text-blue-500 w-96'>Thank you for shopping with us. We’ve successfully processed your payment. You can access your order information through the link below. </h1>
        </div>
    </div>
  )
}

export default ThankYou