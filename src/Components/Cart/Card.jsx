import React, { useState, useEffect } from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { cartTotalSelector } from "../Redux/selectors";
import { AiOutlineClose, AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { toggle } from "../Redux/uiSlice";
import { increament, decrement, remove,clear } from "../Redux/cartSlice";
import { cartTotalPriceSelector } from "../Redux/selectors";
import { Link } from 'react-router-dom';




const Card = () => {
    const [cardOpen, setCardOpen] = useState(false)
      const [change, setChange] = useState(false);
    
   
const HandleDeleteCart = (id) => {
  dispatch(remove(id))
}
    

    const closeCard = () => {
        setCardOpen(null)
    }

   const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
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
        <div className='card flex items-center justify-center flex-row cursor-pointer ' onClick={() => setCardOpen(!cardOpen)}>
            <BiShoppingBag className='cardIcon'size={20}/>
            <span className='span-cart absolute top-0 right-[-15px]'>{total}</span>
        </div>
        <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

        <div className={cardOpen ? "cartItemz" : "cardhide"}>
            <div className='flex justify-between items-center '>
                <h1>Shopping Cart</h1>
                <button onClick={closeCard}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className='m-auto'>
                <button onClick={() => {
                    dispatch(clear());
                  }} className='flex items-center justify-center bg-blue-500 m-auto w-full text-white'>Clear</button>
            </div>


            {cart.map((cartitem) => (
              <div className=''>
                <div className='cartContent'>
               <div className='img '>
                 <img src={cartitem.image} alt="img"/>
                 <button className='remove flexCenter' onClick={() => HandleDeleteCart(cartitem.id)}>
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
               </div>
            ))}
            <div className='checkOut' >
                <button onClick={closeCard}>
                    <Link to="/checkout">
                    <span>Proceed To Checkout</span>
                    </Link>
                    <label>${totalPrice} </label>
                </button>
            </div>
        </div>

    </>
  )
}

export default Card