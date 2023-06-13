import React, { ReactNode, useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrousel.css";
import Slide from "../Slides/Slide";
import { Link } from "react-router-dom";
import { MovieProps } from "../../types/MovieProps";

export default function Carrousel({
  arrayCarrossel,
}: {
  arrayCarrossel: MovieProps[];
}) {
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
            spaceBetween: 30,
          },

          992: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arrayCarrossel.map((movie: MovieProps, index) => {
          if (index > 0) {
            return (
              <SwiperSlide className="sliders">
                <Link
                  to={"/movieinfo/" + movie.Title.replace(".", "")}
                  className="text-decoration-none"
                >
                  <div className="movieCard mt-5 d-flex flex-column align-items-center">
                    <img className="mb-2" src={movie.Poster} alt="" />
                    <span className="cardTitle text-truncate d-inline-block text-uppercase text-wrap">
                      {movie.Title}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}
