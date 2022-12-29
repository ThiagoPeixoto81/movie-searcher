import React, { useState, KeyboardEvent, MouseEvent } from 'react'
import "../pages/MovieSearcher.css"
import MsLogo from '../assets/logoMS.svg'
import { MagnifyingGlass } from "phosphor-react";
import MovieCard from '../components/MovieCard/MovieCard';
import CardError from '../components/CardError/CardError';

export default function MovieSearcher() {
  const [inputValue, setInputValue] = useState("")
  const [movie, setMovie] = useState(Object)
  const [loading, setLoading] = useState(true)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState("Search your movie on the input on the top of the page")

  async function getMovie(movieName: string) {
    setLoading(true)
    setLoader(true)
    setError("")

    let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&t=${movieName}`)

    let res = await req.json();
    console.log(res)

    if (res.Response == "False") {
      setLoading(true)
      setLoader(false)
      setError(`${res.Error}`)

    } else {

      const { Poster, Title, Plot, imdbRating, Metascore, Actors, Director, Writer, Genre, Released, BoxOffice, Country } = res;

      const movie = {
        Poster, Title,
        Plot,
        imdbRating,
        Metascore,
        Actors,
        Director,
        Writer,
        Genre,
        Released,
        BoxOffice,
        Country
      }

      setMovie(movie)
      setLoading(false)

    }

  }

  function enterSearch(e: KeyboardEvent) {
    if (e.key === "Enter") {
      getMovie(inputValue)
    }
  }

  return (
    <>
      <div className='searcher'>
        <img src={MsLogo} className='mb-3 mt-4 mt-sm-0' />
        <div className="typeHere d-flex justify-content-center w-100 mb-5 ">

          <input className='form-control me-4 ps-4 fw-normal' type="text" placeholder='Search one movie...' onChange={(e) => { setInputValue(e.target.value) }} onKeyDown={(e) => { enterSearch(e) }} />

          <button className='btn btn-primary' onClick={() => { getMovie(inputValue) }}><MagnifyingGlass size={24} color="#ffffff" weight="fill" /></button>
        </div>

        {loading ? <CardError msg={error} loader={loader} /> : <MovieCard {...movie} />}

      </div>
    </>

  )
}
