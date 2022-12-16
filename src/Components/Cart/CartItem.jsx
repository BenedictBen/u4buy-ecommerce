import React,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const CartItem = (props) => {
    const {id, name, price, image, path} = props.data;
    const {  cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='flex flex-col items-center justify-center gap-5 shadow md:flex-row'>
        <img src={image} className="w-24 sm:32 md:w-56 lg:w-72"/>
        <div>  
        <div className='flex flex-col px-2 pag-5'>
            <h1 className='font-bold text-xl md:text-2xl'>{name}</h1>
            <p className='text-lg'>${price}</p>
            
        </div>
        <div className='flex items-center justify-center'>
                <button className='mr-2 text-lg border-2 font-bold px-2 lg:text-2xl' onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} className="w-4"  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button className='text-lg border-2 font-bold px-2 lg:text-2xl' onClick={() => addToCart(id)}>+</button>
            </div>
            </div>
    </div>
  )
}

export default CartItem