import { ArrowRight, Calendar } from "phosphor-react";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./ResultCard.css";

type resultProps = {
  poster: string | undefined;
  title: string;
  imdbId: string | undefined;
  year: string | undefined;
};

function ResultCard({ poster, title, imdbId, year }: resultProps) {
  return (
    <div className="resultcard mt-5 p-sm-5 p-4 d-flex justify-content-between align-items-center me-sm-4">
      <div className="d-flex align-items-center">
        <img className="me-5" src={poster} alt={title} />

        <div className="infoSearch">
          <h3 className="text-uppercase SearchTitle d-inline-block text-truncate text-wrap">
            {title}
          </h3>
          <span className="imdbId">{imdbId}</span>

          <div className="mt-4 d-flex align-items-center">
            <Calendar
              className="me-2"
              size={30}
              color="#ffffff"
              weight="fill"
            ></Calendar>
            <span className="year">{year}</span>
          </div>
        </div>
      </div>

      <Link to={"/movieinfo/" + title.replace(".", "")}>
        <ArrowRight size={48} color="#ffffff" weight="bold" />
      </Link>
    </div>
  );
}

export default memo(ResultCard);
