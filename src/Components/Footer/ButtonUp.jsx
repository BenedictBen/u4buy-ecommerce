import React, {useEffect, useState} from 'react'
import { BsFillCaretUpFill } from "react-icons/bs";

const ButtonUp = () => {
    const [toTop, setToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <>
    
    <div className='block lg:hidden'>
        {toTop && (
            <BsFillCaretUpFill size={40} style={{color: 'white'}} onClick={scrollUp}/>

        )}
    </div>
    <div className='hidden lg:block'>
        {toTop && (
            <BsFillCaretUpFill size={40} style={{color: 'black'}} onClick={scrollUp}/>

        )}
    </div>
    </>
  )
}

export default ButtonUp