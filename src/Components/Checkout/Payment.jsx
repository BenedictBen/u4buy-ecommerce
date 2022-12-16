import React, { useState } from 'react'
import "./Checkout.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


const Payment = () => {
    const [index, setIndex] = useState(0);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

  return (
    <div className='Tabs my-12'>
        <div className='flex items-center justify-center '>
            <div className={index === 0 ? "tabs active-tabs" : "tabs"} onClick={() => (setIndex(0))}>
                <h1>
                Pay with Card
                </h1>
            </div>
            <div className={index === 1 ? "tabs active-tabs" : "tabs"} onClick={() => (setIndex(1))}>
               <h1>
                Pay with Momo
               </h1>
            </div>
        </div>
        <div className='flex items-center justify-center'>

        <div className='' hidden={index != 0}>
            <div className='my-5'></div>
           <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cv={cvc}
            focused={focus}
           />
           <h1 className=' flex items-center justify-center my-3 font-bold text-lg text-blue-500'>Enter your Card details</h1>
           <form className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-9'>
            <input className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'
            type="tel" 
            name="number" 
            placeholder='Card Number' 
            value={number} 
            onChange={e => setNumber(e.target.value)} 
            onFocus={e => setFocus(e.target.name)}
            />
             <input className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'
            type="text" 
            name="name" 
            placeholder='Name' 
            value={name} 
            onChange={e => setName(e.target.value)} 
            onFocus={e => setFocus(e.target.name)}
            />
            <input className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'
            type="text" 
            name="expiry" 
            placeholder='MM/YY' 
            value={expiry} 
            onChange={e => setExpiry(e.target.value)} 
            onFocus={e => setFocus(e.target.name)}
            />
            <input className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'
            type="tel" 
            name="cvc" 
            placeholder='CVC' 
            value={cvc} 
            onChange={e => setCvc(e.target.value)} 
            onFocus={e => setFocus(e.target.name)}
            />
           </form>
        </div>
        <div className='' hidden={index != 1}>
                <h1 className=' flex items-center justify-center my-3 font-bold text-lg text-blue-500'>Enter your Momo details</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:ml-5 md:w-96'>
                    <div>
                        <label className='font-bold '>Momo Number</label>
                          <input type="text" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' placeholder='233-245-67910'/>
                    </div>
                    <div>
                        <label className='font-bold '>Momo pin</label>
                          <input type="text" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' placeholder='2345'/>
                    </div>
                </div>
               
        </div>
        </div>
       
    </div>
  )
}

export default Payment