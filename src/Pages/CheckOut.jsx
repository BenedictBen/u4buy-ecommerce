import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import Payment from "../Components/Checkout/Payment";
import { ShopContext } from '../Components/Context/ShopContext';



const CheckOut = () => {
    
   
  
const {  getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
   

  return (
    <div className='grid grid-cols-1 justify-items-center mt-12 md:grid-cols-2'>
        <div>
          <Link to="/shop">
          <h1 className='underline ml-5'>Go back</h1>
          </Link>
            <h1 className='uppercase flex items-center justify-center text-2xl font-bold'>checkout</h1>
              <h1 className='mb-5 text-blue-500 font-bold text-lg ml-5'>Billing Details</h1>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-5 md:ml-4'>
              <div>
                <label>Name</label>
                <input type="text" placeholder='Kofi Anokye' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
              </div>
                <div>
                <label>Email Address</label>
                <input type="text" placeholder='kofi@mail.com' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                <label>Phone Number</label>
                <input type="text" placeholder='+233-234-567-8910' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
               <div>
              
                  <label>Your Address</label>
                  <input type="text" placeholder='1234 Willian Avenue' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
               </div>
               <div>
                  <label>Zip code</label>
                  <input type="text" placeholder='11002' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
               </div>
               <div>
                  <label>City</label>
                  <input type="text" placeholder='Accra' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
               </div>
               <div>
                  <label>Country</label>
                  <input type="text" placeholder='United Kingdom' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>

               </div>
               
            </form>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 mt-9'>
                <div>
                  <h1 className='uppercase text-lg text-blue-500 font-bold mb-5'>Payment details</h1>
                  <h1 className='font-lighter '>Payment Method</h1>
                </div>
                <div>

                <Payment />
                </div>
            </div>
        </div>
        <div >
          <h1 className='font-bold text-2xl mb-2'>Summary</h1>
          <p className='mb-2'>Total: ${totalAmount}</p>
          <Link to="/thankyou">
          <button className='text-lg border-2 font-bold px-2 lg:text-2xl bg-black text-white py-2 rounded-lg'>Continue to pay</button>
          </Link>
        </div>
    </div>
  )
}

export default CheckOut