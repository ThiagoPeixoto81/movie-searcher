import {
  ArrowLeft,
  Calendar,
  FilmSlate,
  Money,
  Person,
  Quotes,
  VideoCamera,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImdbLogo from "../../assets/imdb.svg";
import MetaLogo from "../../assets/metacritic.svg";
import Stat from "./components/Stat/Stat";
import { Loader } from "../../components/Loader";

import "./index.css";
import { findMovie } from "../../services/api";
import { MovieProps } from "../../@types/MovieProps";

export default function MovieInformation() {
  const [searchmovie, setMovie] = useState<MovieProps>();
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { movie } = useParams();

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    if (movie) {
      const movieFound = await findMovie(movie);

      movieFound.Response == "False" ? setLoading(true) : setMovie(movieFound),
        setLoading(false);
    }
  }

  return !Loading ? (
    <>
      <div className="back w-100 pb-5">
        <ArrowLeft
          size={32}
          color="#ffffff"
          weight="bold"
          className="mt-5 click"
          onClick={() => {
            navigate(-1);
          }}
        ></ArrowLeft>
      </div>

      {searchmovie && (
        <>
          <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <div className="d-flex align-items-center justify-content-sm-start flex-column flex-sm-row mainAnimation w-100">
              <img
                className="detailedPoster mb-5"
                src={searchmovie.Poster}
                alt={searchmovie.Title}
              />

              <div className="d-flex flex-column align-items-center align-items-sm-start ms-sm-5">
                <h3 className="MovieName text-uppercase mb-3 text-sm-start">
                  {searchmovie.Title}
                </h3>

                <div className="plotRating d-flex mb-5">
                  <div className="d-flex align-items-center me-5">
                    <img className="imdb me-3" src={ImdbLogo} alt="ImDb" />
                    <span className="fw-normal rating">
                      {searchmovie.imdbRating}/10
                    </span>
                  </div>

                  {searchmovie.Metascore != "N/A" && (
                    <div className="d-flex align-items-center">
                      <img
                        className="metascore me-3"
                        src={MetaLogo}
                        alt="ImDb"
                      />
                      <span className="fw-normal rating">
                        {searchmovie.Metascore}/100
                      </span>
                    </div>
                  )}
                </div>

                <p className="moviePlot text-center text-sm-start mb-sm-5">
                  {searchmovie.Plot}
                </p>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-start w-100 my-5 gap-3 statInfo">
              <Stat infoType="Release Date" info={searchmovie.Released}>
                <Calendar size={36} color="#ffffff" weight="fill"></Calendar>
              </Stat>

              {searchmovie.Director != "N/A" && (
                <Stat infoType="Director" info={searchmovie.Director}>
                  <VideoCamera
                    size={36}
                    color="#ffffff"
                    weight="fill"
                  ></VideoCamera>
                </Stat>
              )}

              <Stat infoType="Actors" info={searchmovie.Actors}>
                <Person size={36} color="#ffffff" weight="fill"></Person>
              </Stat>

              {searchmovie.Writer != "N/A" && (
                <Stat infoType="Writers" info={searchmovie.Writer}>
                  <Quotes size={36} color="#ffffff" weight="fill"></Quotes>
                </Stat>
              )}

              <Stat infoType="Genre" info={searchmovie.Genre}>
                <FilmSlate size={36} color="#ffffff" weight="fill"></FilmSlate>
              </Stat>

              {searchmovie.BoxOffice != "N/A" && (
                <Stat infoType="Box Office" info={searchmovie.BoxOffice}>
                  <Money size={36} color="#ffffff" weight="fill"></Money>
                </Stat>
              )}
            </div>
          </div>
        </>
      )}
    </>
  ) : (
    <Loader />
  );
}
