import React, {createContext, useState} from 'react'
import { allshop } from "../ShopMain/ShopData"


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < allshop.length + 1; i++){
        cart[i] = 0
    }
    return cart
}



const ShopContextProvider = (props) => {
    const [cartItems, setCardItems] = useState(getDefaultCart());
    


    const addToCart = (itemId) => {
        setCardItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allshop.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * Math.round(itemInfo.price);
      }
    }
    return totalAmount;
  };

 

     const removeFromCart = (itemId) => {
        setCardItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    

    const updateCartItemCount = (newAmount, itemId) => {
      setCardItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider