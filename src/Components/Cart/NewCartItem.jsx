//  <div className='flex flex-col justify-center items-center '>
//       <div className='my-9 flex '>
//         <h1 className='font-bold text-xl md:text-2xl m-auto text-blue-500'>Your Cart Items</h1>
//       </div>
//       <div>
//         {allshop.map((product) => {
//           if(cartItems[product.id] !== 0) {
//             return <CartItem data={product}/>
//           }
//         })}
//       </div>

//         {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ${totalAmount} </p>
//           <Link to="/shop">
//           <button className='text-lg border-2 font-bold px-2 lg:text-2xl bg-black text-white py-2 rounded-lg'> Continue Shopping </button>
//           </Link>
//           <Link to="/checkout">
//           <button className='text-lg border-2 font-bold px-2 lg:text-2xl bg-black text-white py-2 rounded-lg'> Checkout </button>
//           </Link>
//         </div>
//       ) : (
//         <img src={Cart1}/> 
//       )}
//     </div>