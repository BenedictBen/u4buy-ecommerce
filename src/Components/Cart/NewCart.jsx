import React, { useContext } from 'react'
import { AllContext } from '../Context/AllContext'
import NewCartItem from './NewCartItem';
import { Link } from 'react-router-dom';
import Cart1 from "../Cart/Cart.png";
import { all } from "../Category/CategoryData"


const NewCart = () => {
    const {  zcartItems, getTotalCartAmountOne } = useContext(AllContext);
    const totalAmount = getTotalCartAmountOne()

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='my-9 flex '>
        <h1 className='font-bold text-xl md:text-2xl m-auto text-blue-500'>Your Cart Items</h1>
      </div>
      <div>
        {all.map((zproduct) => {
          if(zcartItems[zproduct.id] !== 0) {
            return <NewCartItem data={zproduct}/>
          }
        })}
      </div>

        {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <Link to="/category">
          <button> Continue Shopping </button>
          </Link>
          <Link to="/checkout">
          <button> Checkout </button>
          </Link>
        </div>
      ) : (
        <img src={Cart1}/> 
      )}
    </div>
  )
}

export default NewCart