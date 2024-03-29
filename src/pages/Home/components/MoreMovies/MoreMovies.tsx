import { FilmSlate } from "phosphor-react";
import Carrousel from "../MoreMoviesCarousel/Carrousel";
import "./MoreMovies.css";
import { MovieProps } from "../../../../@types/MovieProps";

export default function MoreMovies({
  arrayInCarrossel,
}: {
  arrayInCarrossel: MovieProps[];
}) {
  return (
    <div className="mt-5 w-100 mb-5 more">
      <div className="title d-flex align-items-center">
        <FilmSlate
          className="me-3"
          size={25}
          color="#CCCCCC"
          weight="bold"
        ></FilmSlate>
        <span className="text-uppercase title moremovies">Mais filmes</span>
      </div>

      <div className="d-flex justify-content-around w-100">
        <Carrousel arrayCarrossel={arrayInCarrossel} />
      </div>
    </div>
  );
}
