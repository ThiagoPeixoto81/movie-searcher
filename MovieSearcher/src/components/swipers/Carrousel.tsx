import React, { ReactNode, useRef, useState } from 'react'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrousel.css"
import Slide from '../Slides/Slide';
import { Link } from 'react-router-dom';

export default function Carrousel(arrayCarrossel: any) {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                grabCursor={true}

                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },

                    992: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                }}


                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[1].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[1].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[1].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[2].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[2].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[2].Title}</span>
                        </div>
                    </Link>

                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[3].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[3].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[3].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[4].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[4].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[4].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[5].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[5].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[5].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[6].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[6].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[6].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[7].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[7].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[7].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[8].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[8].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[8].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='sliders'>
                    <Link to={"/movieinfo/" + (arrayCarrossel[9].Title).replace(".", "")} className='text-decoration-none'>
                        <div className="movieCard mt-5 d-flex flex-column align-items-center">
                            <img className='mb-2' src={arrayCarrossel[9].Poster} alt="" />
                            <span className='cardTitle text-truncate d-inline-block text-uppercase text-wrap'>{arrayCarrossel[9].Title}</span>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
