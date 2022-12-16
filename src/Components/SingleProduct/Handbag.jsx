import React, { useState } from 'react';
import image1 from "../../Assets/Store/handbag1.png"
import image2 from "../../Assets/Store/handbag2.png"
import image3 from "../../Assets/Store/handbag3.png"
import image4 from "../../Assets/Store/handbag4.png"

import { BsCart3, BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"


const Handbag = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [allImages, setAllImages] = useState([image1, image2, image3, image4]);
    
const products = [
    {
        id: 0,
        image: image1
    },
    {
         id: 1,
        image: image2
    },
    {
         id: 2,
        image: image3
    },
     {
         id: 3,
        image: image4
    }
]

   const [wordData,setWordData]=useState(products[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=products[index];
    setWordData(wordSlider)
  }
   
  return (
    <>

     <div className='flex flex-col items-center justify-center my-12 md:flex md:flex-row md:gap-5 lg:hidden'>
                <div className='relative'>
                <img className='w-72 h-72 md:w-96 md:h-96 border-2 border-inherit py-2' src={allImages[selectedImage]}/>

                 <div className='hover:bg-blue-500'>
                    <BsArrowLeftCircle className='absolute top-36 hover:text-blue-500' size={25} onClick={() => {
                        if (selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                    }}/>
                    <BsArrowRightCircle className='absolute right-0 top-36 hover:text-blue-500' size={25} onClick={() => {
                        if (selectedImage < allImages.length - 1)
                        setSelectedImage(selectedImage + 1)
                    }}/>
                 </div>
                </div>
                <div className='mt-20 flex sm:justify-center gap-3 flex-col px-2'>
                    <h1 className='font-bold text-3xl break-all'>Apple iPhone 11 Pro Max 64/256/512GB</h1>
                    <p className=' text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aliquid!</p>
                    <p className='font-bold text-lg'>$488.63</p>
                    <p className='line-through'>$688.63</p>
                    <div className='mt-12 flex gap-5 flex-row items-center justify-center'>
                        <button className='text-blue-500 sm:text-2xl'>-</button>
                        <p className='text-xl font-bold'>0</p>
                        <button className='text-blue-500 text-3xl'>+</button>
                        <button className='flex items-center bg-blue-500 rounded-lg px-5 py-3 gap-5 text-white font-bold'>
                            <BsCart3 size={20}/>
                            Add to cart</button>
                    </div>
            </div>
            </div>
        {/* large screen */}
       <div className='hidden lg:block mt-9'>
        <section className='max-w-7xl mx-auto grid grid-cols-2 gap-10 px-2'>   
            <div className=''>
                <div className=''>
                <img src={wordData.image} className=" border-2 border-inherit w-4/5"/>
                 </div>
                <div className='flex'>  
                {products.map((item, j) =>(
                    <div key={j} className="flex flex-row items-center justify-center border-2 border-inherit">
                        <img  src={item.image} alt="img" className={wordData.id==j?"border-2 border-blue-500 opacity-80":""} height="70" width="100" onClick={()=>handleClick(j)}/>
                    </div>
                ))}
                 </div>
            </div>
            <div className='mt-20 flex gap-3 flex-col'>
                    <h1 className='font-bold text-3xl break-all w-80'>Saint Laurent Mini Top Handle Bag</h1>
                    <p className='w-96 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aliquid!</p>
                    <p className='font-bold text-lg'>$250.66</p>
                    <p className='line-through'>$350.66</p>
                    <div className='mt-12 flex gap-3 flex-row items-center'>
                        <button className='text-blue-500 text-4xl'>-</button>
                        <p className='text-xl font-bold'>0</p>
                        <button className='text-blue-500 text-4xl'>+</button>
                        <button className='flex items-center bg-blue-500 rounded-lg px-7 py-3 gap-2 text-white font-bold'>
                            <BsCart3 size={20}/>
                            Add to cart</button>
                    </div>
            </div>
            </section>
       </div>
    </>
  )
}

export default Handbag

{/* border-b border-slate-400 */}