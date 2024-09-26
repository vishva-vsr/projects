import React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Profile from "../Review/profile1.png"
import { useState } from 'react'


const Review = () => {

    const [count, setCount] = useState(0)
   
    return (
        <div className='bdy-rvw'>
            <div>
                <h1>Love By Many <br />
                    Trusted By All :)</h1>
            </div>
            <div className='slides'>

                <Swiper
                    modules={[Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <p class="fluid">
                            "As a satisfied customer of [Widezo], I want to share my positive experience with others.
                            Their software as a service platform has greatly improved the efficiency and productivity
                            of our business operations.The cloud-based solution is user-friendly and regularly updated
                            to stay ahead of the technology"
                        </p>
                        <div className='Profile'>
                            <div><img src={Profile} alt="" id='img-pro' /></div>
                            <div className='txt-pro'>
                                <span id='txt-H'><span id='text-p'>Savannah Nguyen </span>
                                <br/>
                               <span id='txt-b'>Bosch Design head</span> </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><p> "As a satisfied customer of , I want to share my positive experience with others.
                        Their software as a service platform has greatly improved the efficiency and productivity of our business operations.
                        The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology</p></SwiperSlide>
                    <SwiperSlide><p> "As a satisfied customer of , I want to share my positive experience with others.
                        Their software as a service platform has greatly improved the efficiency and productivity of our business operations.
                        The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology</p></SwiperSlide>
                    <SwiperSlide><p> "As a satisfied customer of [Widezo], I want to share my positive experience with others.
                        Their software as a service platform has greatly improved the efficiency and productivity of our business operations.
                        The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology</p></SwiperSlide>
                </Swiper>
                

            </div>
        </div>
    )
}

export default Review