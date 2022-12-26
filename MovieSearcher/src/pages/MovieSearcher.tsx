import React, { useState } from 'react'
import "../pages/MovieSearcher.css"
import MsLogo from '../assets/logoMS.svg'
import { MagnifyingGlass } from "phosphor-react";
import MovieCard from '../components/MovieCard';

export default function MovieSearcher() {
  const [inputValue, setInputValue] = useState("")
  const [movie, setMovie] = useState(Object)
  const [loading, setLoading] = useState(true)

  async function getMovie(movieName: string) {

    let req = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&t=${movieName}`)

    let res = await req.json();

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

  function enterSearch(e: KeyboardEvent) {
    if (e.key === "Enter") {
      getMovie(inputValue)
    }
  }

  return (
    <>
      <div className='searcher'>
        <img src={MsLogo} className='mb-3' />
        <div className="typeHere d-flex justify-content-center w-100 mb-5">

          <input className='form-control me-4 ps-4 fw-normal' type="text" placeholder='Search one movie...' onChange={(e) => { setInputValue(e.target.value) }} onKeyDown={(e) => { enterSearch(e) }} />

          <button className='btn btn-primary' onClick={() => { getMovie(inputValue) }}><MagnifyingGlass size={24} color="#ffffff" weight="fill" /></button>
        </div>

        {loading ? <div className='loadingDiv d-flex flex-column align-items-center justify-content-center'>
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className='loadingSub mt-4'>Search your movie/serie in the box on the top of the page</span>
        </div> : <MovieCard {...movie} />}

      </div>
    </>

  )
}
