import { memo } from "react";
import { SwiperSlide } from "swiper/react";

type slideProps = {
  poster: string;
  title: string;
};

function Slide({ poster, title }: slideProps) {
  return (
    <SwiperSlide className="sliders">
      <div className="movieCard mt-5 d-flex flex-column align-items-center">
        <img className="mb-2" src={poster} alt="" />
        <span className="cardTitle text-truncate d-inline-block text-uppercase text-wrap">
          {title}
        </span>
      </div>
    </SwiperSlide>
  );
}

export default memo(Slide);
