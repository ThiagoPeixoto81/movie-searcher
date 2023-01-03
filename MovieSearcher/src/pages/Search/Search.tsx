import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ResultCard from '../../components/resultCard/ResultCard'
import './Search.css'

export default function Search() {
    const [searchAfter, setsearch] = useState<string>("")
    const [result, setResult] = useState<Array<Object> | null>([])
    const [error, setError] = useState("")

    const { search } = useParams();

    useEffect(() => {
        searchMovie(search);
        setsearch(search);
    }, [])

    async function searchMovie(movie: string | undefined) {
        if (movie === "") {
            setResult([])
        } else {
            setResult([])
            setError("")

            let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${movie}&type=movie`)

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


    }

    return (
        <div className='container'>
            <Navbar search={search} setsearch={setsearch} searchMovie={searchMovie} />
            <div className='w-100 pb-5'>
                <h3 className='searchingText text-center mt-5 text-uppercase'>{searchAfter}</h3>
            </div>

            <div className='d-flex justify-content-center justify-content-sm-between mb-5'>
                {
                    result.length > 1 ?
                        <div className='d-flex flex-column justify-content-center justify-content-around w-100 align-items-center resultsShow flex-sm-row flex-wrap mb-sm-5'>
                            <ResultCard poster={result[0].Poster} title={result[0].Title} imdbId={result[0].imdbID} year={result[0].Year} key={result[0].imdbId} />
                            <ResultCard poster={result[1].Poster} title={result[1].Title} imdbId={result[1].imdbID} year={result[1].Year} key={result[1].imdbId} />
                            <ResultCard poster={result[2].Poster} title={result[2].Title} imdbId={result[2].imdbID} year={result[2].Year} key={result[2].imdbId} />
                            <ResultCard poster={result[3].Poster} title={result[3].Title} imdbId={result[3].imdbID} year={result[3].Year} key={result[3].imdbId} />
                            <ResultCard poster={result[4].Poster} title={result[4].Title} imdbId={result[4].imdbID} year={result[4].Year} key={result[4].imdbId} />
                            <ResultCard poster={result[5].Poster} title={result[5].Title} imdbId={result[5].imdbID} year={result[5].Year} key={result[5].imdbId} />
                            <ResultCard poster={result[6].Poster} title={result[6].Title} imdbId={result[6].imdbID} year={result[6].Year} key={result[6].imdbId} />
                            <ResultCard poster={result[7].Poster} title={result[7].Title} imdbId={result[7].imdbID} year={result[7].Year} key={result[7].imdbId} />
                        </div>
                        :
                        <div className='divError d-flex justify-content-center align-items-center w-100'>
                            <p className='error text-center'>{error}</p>
                        </div>
                }

            </div>

            <Footer />

        </div>


    )
}
