import React, { ReactNode, useRef, useState } from 'react'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrousel.css"
import Slide from '../Slides/Slide';

type CarrosselProps = {
    arrayInCarrossel: []
}

export default function Carrousel({ arrayInCarrossel, ...props }: CarrosselProps) {
    let testArray = Array.from(arrayInCarrossel)
    console.log(testArray)
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                grabCursor={true}


                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[1].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[1].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[2].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[2].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[3].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[3].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[4].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[4].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[5].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[5].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[6].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[6].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[7].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[7].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[8].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[8].Title}</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <div className="movieCard mt-5 d-flex flex-column align-items-center">
                        <img className='mb-2' src={testArray[9].Poster} alt="" />
                        <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{testArray[9].Title}</span>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}
