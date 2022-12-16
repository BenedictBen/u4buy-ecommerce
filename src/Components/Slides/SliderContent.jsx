import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from '../../Assets/images/slide1.png';
import slide2 from '../../Assets/images/slide2.png';
import slide3 from '../../Assets/images/slide3.png';
import slide4 from '../../Assets/images/slide4.png';

const SliderContent = () => {
  return (
    <div className='hidden lg:block'>
   <Swiper
               spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={slide1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={slide2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={slide3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={slide4}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default SliderContent