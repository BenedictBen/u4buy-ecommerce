import React from 'react'
import FooterLarge from './FooterLarge'
import Footer from './Footer'

const FooterMain = () => {
  return (
    <div >
        <Footer />
        <div className='hidden lg:block'>

        <FooterLarge />
        </div>
    </div>
  )
}

export default FooterMain