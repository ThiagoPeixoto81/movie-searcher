import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ResultCard from "../../components/resultCard/ResultCard";
import { MovieProps } from "../../types/MovieProps";
import "./Search.css";

export default function Search() {
  const [searchAfter, setsearch] = useState<string | undefined>("");
  const [result, setResult] = useState<Array<MovieProps>>([]);
  const [error, setError] = useState("");

  const { search } = useParams();

  useEffect(() => {
    searchMovie(search);
    setsearch(search);
  }, []);

  async function searchMovie(movie: string | undefined) {
    if (movie === "") {
      setResult([]);
    } else {
      setResult([]);
      setError("");

      let req = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${movie}&type=movie`
      );

      let res = await req.json();
      console.log(res);

      if (res.Response === "True" && search !== "") {
        setResult(res.Search);
        console.log(result);
      } else if (search === "") {
        setError("Procure um filme!");
      }

      setError(res.Error);
    }
  }

  return (
    <div className="container">
      <Navbar search={search} setsearch={setsearch} searchMovie={searchMovie} />
      <div className="w-100 pb-5">
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
          <div className="divError d-flex justify-content-center align-items-center w-100">
            <p className="error text-center">{error}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
