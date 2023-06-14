import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ResultCard from "./components/ResultCard/ResultCard";
import { MovieProps } from "../../@types/MovieProps";
import "./index.css";
import { searchMovie } from "../../services/api";
import { Loader } from "../../components/Loader";

export default function Search() {
  const [searchAfter, setsearch] = useState<string | undefined>("");
  const [result, setResult] = useState<Array<MovieProps>>([]);
  const [error, setError] = useState("");

  const { search } = useParams();

  useEffect(() => {
    getMovieList(search!);
    setsearch(search);
  }, [search]);

  async function getMovieList(movie: string) {
    if (movie === "") {
      setResult([]);
    } else {
      setResult([]);
      setError("");

      const foundedMovie = await searchMovie(movie);

      foundedMovie.Response === "True" && search != ""
        ? setResult(foundedMovie.Search)
        : setError("Nenhum filme encontrado. Tente novamente!");
    }
  }

  return (
    <>
      <Navbar
        search={search}
        setsearch={setsearch}
        searchMovie={searchMovie}
        alreadyOpen={true}
      />

      <div className="w-100 pb-sm-5">
        <h3 className="searchingText text-center mt-5 text-uppercase">
          {searchAfter}
        </h3>
      </div>

      <div className="d-flex justify-content-center justify-content-sm-between mb-5">
        {result.length > 1 ? (
          <div className="d-flex flex-column justify-content-center justify-content-around w-100 align-items-center resultsShow flex-sm-row flex-wrap mb-sm-5">
            {result.map((movie) => {
              return (
                <ResultCard
                  poster={movie.Poster}
                  title={movie.Title}
                  imdbId={movie.imdbID}
                  year={movie.Year}
                  key={movie.imdbID}
                />
              );
            })}
          </div>
        ) : (
          <div className="divError d-flex flex-column gap-5 justify-content-center align-items-center w-100">
            <Loader />
            <p className="error text-center">{error}</p>
          </div>
        )}
      </div>
    </>
  );
}
