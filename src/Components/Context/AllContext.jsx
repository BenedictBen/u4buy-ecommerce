import React, {createContext, useState} from 'react'

import { all } from '../Category/CategoryData';

export const AllContext = createContext(null);


const getDefaultCartOne = () => {
    let cart = {}
    for(let i = 1; i < all.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

const AllContextProvider = (props) => {
    
    const [zcartItems, setzCardItems] = useState(getDefaultCartOne());


    const addToCart = (itemId) => {
        setzCardItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    

  const getTotalCartAmountOne = () => {
    let totalAmount = 0;
    for (const item in zcartItems) {
      if (zcartItems[item] > 0) {
        let itemInfo = all.find((product) => product.id === Number(item));
        totalAmount += zcartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

   
    const removeFromCartOne = (itemId) => {
        setzCardItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }


   
     const updateCartItemCountOne = (newAmount, itemId) => {
      setzCardItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {zcartItems, addToCart,removeFromCartOne,updateCartItemCountOne, getTotalCartAmountOne}
  return (
    <AllContext.Provider value={contextValue}>{props.children}</AllContext.Provider>
  )
}

export default AllContextProvider