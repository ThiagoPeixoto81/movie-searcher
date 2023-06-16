import { ArrowRight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import MoreMovies from "./components/MoreMovies/MoreMovies";
import { MovieProps } from "../../@types/MovieProps";
import { searchMovie } from "../../services/api";
import { Loader } from "../../components/Loader";

export default function Home() {
  //HOOKS
  const [mainMovie, setMainMovie] = useState<MovieProps>();
  const [allMovies, setAllMovies] = useState<[] | null>(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (allMovies === null) {
      defineHome();
    }
  }, []);

  async function defineHome() {
    //Words to search when the user enter the site to give the sensation of random
    const searchParams = [
      "cars",
      "american",
      "last",
      "soccer",
      "war",
      "batman",
      "fast",
      "love",
      "adventure",
      "brazil",
      "double",
      "battle",
      "dirty",
      "girl",
    ];

    const index = Math.floor(Math.random() * searchParams.length);
    const search = searchParams[index];

    const movies = await searchMovie(search);

    setMainMovie(movies.Search[0]);
    setAllMovies(movies.Search);

    const MovieUrl = movies.Search[0].Title.replace(".", "");
    setUrl("/movieinfo/" + MovieUrl);
  }

  return allMovies != null && allMovies.length > 0 ? (
    <div className="d-flex justify-content-center flex-column align-items-center mt-5 pt-5 w-100 main">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-start mb-5 w-100">
        <img src={mainMovie?.Poster} alt="Poster" className="mb-4" />

        <div className="ms-md-5 d-flex flex-column align-items-center align-items-md-start w-100">
          <h2 className="text-wrap text-truncate d-inline-block text-uppercase text-md-start">
            {mainMovie?.Title}
          </h2>
          <span className="mb-5 d-md-block">{mainMovie?.Year}</span>

          <div className="seeMoreDiv d-flex align-items-center">
            <Link to={url} className="text-decoration-none">
              <span className="seemoreText me-2">
                Veja mais sobre este filme
              </span>
            </Link>
            <div className="arrow-animation">
              <ArrowRight size={16} color="#ffffff" weight="bold"></ArrowRight>
            </div>
          </div>
        </div>
      </div>

      <MoreMovies arrayInCarrossel={allMovies} />
    </div>
  ) : (
    <Loader />
  );
}
