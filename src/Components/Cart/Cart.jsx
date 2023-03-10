import React, { useState, useEffect } from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { allshop } from '../ShopMain/ShopData';
import { useSelector, useDispatch } from 'react-redux';
import { cartTotalSelector } from "../Redux/selectors";
import { AiOutlineClose, AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { toggle } from "../Redux/uiSlice";
import { increament, decrement, clear } from "../Redux/cartSlice";
import { cartTotalPriceSelector } from "../Redux/selectors";
import { Link } from 'react-router-dom';

const Cart = () => {
      const [change, setChange] = useState(false);

    

   const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const totalPrice = useSelector(cartTotalPriceSelector);

  useEffect(() => {
    if (total !== 0) {
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 1000);
    }
  }, [total]);

  return (
    <>
    {cart.map((cartitem) => (
                <div className='cartContent'>
               <div className='img '>
                 <img src={cartitem.image} alt="img"/>
                 <button className='remove flexCenter'>
                     <AiOutlineClose className=' ' size={20}/>
                 </button>
               </div>
               <div className='details'>
                 <p>{cartitem.name}</p>
                 <label>${cartitem.quantity * Math.round(cartitem.price)}</label>
                 <div className='price'>
                   <div className='qty flexCenter'>
                     <button className='minus' disabled={cartitem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartitem.id));
                  }}>
                       <AiOutlineMinus />
                     </button>
                         <button>{cartitem.quantity}</button>
                     <button className='plus' 
            onClick={() => {
                    dispatch(increament(cartitem.id));
                  }}>
                       <AiOutlinePlus/>
                     </button>
                   </div>
                 </div>
                 <div className='priceTitle'></div>
               </div>
         </div>
            ))}
            <div className='bg-black text-white w-64 md:w-72 rounded-lg mb-3' >
                <button className='flex gap-3 px-2 py-1 divide-x '>
                    <Link to="/checkout">
                    <span>Proceed To Checkout</span>
                    </Link>
                    <label className='pl-2'>${totalPrice} </label>
                </button>
            </div>
        
    
    </>
   
  )
}

export default Cart