import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import ResultCard from '../../components/resultCard/ResultCard'
import './Search.css'

export default function Search() {
    const [search, setsearch] = useState("")
    const [result, setResult] = useState([])

    async function searchMovie(){
        let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${search}&type=movie`)

        let res = await req.json()

        setResult(res.Search)
    }

    return (
         <div className='container'>
            <Navbar search={search} setsearch={setsearch} searchMovie={searchMovie} />
            <div className='w-100 pb-5'>
                <h3 className='searchingText text-center mt-5 text-uppercase'>{search}</h3>
            </div>
            {
                result.length > 0 ?
                result.map((movie) => {
                    <ResultCard poster={movie.Poster} title={movie.Title} imdbId={movie.imdbID} year={movie.Year}/>
                })
                : <p>Não deu</p>
            }
        </div>
       

    )
}
