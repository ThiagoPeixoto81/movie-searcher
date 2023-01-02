import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ResultCard from '../../components/resultCard/ResultCard'
import './Search.css'

export default function Search() {
    const [search, setsearch] = useState("")
    const [result, setResult] = useState<Array<Object> | null>([])
    const [error, setError] = useState("")

    async function searchMovie() {
        setResult([])
        setError("")
        let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${search}&type=movie`)

        let res = await req.json()
        console.log(res)

        if (res.Response === 'True' && search != "") {
            setResult(res.Search)
            console.log(result)
        } else if (search === "") {
            setError("Procure um filme!")
        }

        setError(res.Error)

    }

    return (
        <div className='container'>
            <Navbar search={search} setsearch={setsearch} searchMovie={searchMovie} />
            <div className='w-100 pb-5'>
                <h3 className='searchingText text-center mt-5 text-uppercase'>{search}</h3>
            </div>

            <div className='d-flex justify-content-center mb-5'>
                {
                    result.length > 1 ?
                        <div className='d-flex flex-column justify-content-center w-100 align-items-center resultsShow'>
                            <ResultCard poster={result[0].Poster} title={result[0].Title} imdbId={result[0].imdbID} year={result[0].Year} key={result[0].imdbId} />
                            <ResultCard poster={result[1].Poster} title={result[1].Title} imdbId={result[1].imdbID} year={result[1].Year} key={result[1].imdbId} />
                            <ResultCard poster={result[2].Poster} title={result[2].Title} imdbId={result[2].imdbID} year={result[2].Year} key={result[2].imdbId} />
                            <ResultCard poster={result[3].Poster} title={result[3].Title} imdbId={result[3].imdbID} year={result[3].Year} key={result[3].imdbId} />
                        </div>
                        :
                        <div className='divError d-flex justify-content-center align-items-center'>
                            <p className='error text-center'>{error}</p>
                        </div>
                }

            </div>

            <Footer />

        </div>


    )
}
