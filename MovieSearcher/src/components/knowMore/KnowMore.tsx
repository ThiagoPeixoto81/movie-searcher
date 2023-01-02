import { ArrowRight } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import MoreMovies from '../MoreMovies/MoreMovies'
import Carrousel from '../swipers/Carrousel'
import './KnowMore.css'


export default function KnowMore() {

    const [poster, setPoster] = useState("")
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [rest, setRest] = useState<[]>([])
    const [url, setUrl] = useState("")

    useEffect(() => {
        defineHome();
    }, [])

    async function defineHome() {
        const searchParams = ["cars", "american", "last", "soccer", "war", "batman", "fast", "love", "adventure", "brazil"]
        let index = Math.floor(Math.random() * searchParams.length)
        let search = searchParams[index]

        let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${search}&type=movie`)
        let res = await req.json();

        let moviesOnTheScreen = res.Search

        setPoster(moviesOnTheScreen[0].Poster)
        setTitle(moviesOnTheScreen[0].Title)
        setYear(`(${moviesOnTheScreen[0].Year})`)
        setRest(moviesOnTheScreen)

        let MovieUrl = (moviesOnTheScreen[0].Title).replace(".", "")
        setUrl("/movieinfo/" + MovieUrl)
    }

    if (rest.length > 0) {
        return (
            <div className='d-flex justify-content-center flex-column align-items-center mt-5 pt-5 w-100 main'>
                <div className='d-flex flex-column flex-md-row align-items-center justify-content-md-start mb-5 w-100 ms-md-5'>
                    <img src={poster} alt="Poster" className='mb-4' />

                    <div className='ms-md-5 d-flex flex-column align-items-center align-items-md-start w-100'>
                        <h2 className='text-wrap text-truncate d-inline-block text-uppercase text-md-start'>{title}</h2>
                        <span className='mb-5 d-md-block'>{year}</span>


                        <div className='seeMoreDiv d-flex align-items-center'>
                            <Link to={url} className='text-decoration-none'><span className='seemoreText me-2'>Veja mais sobre este filme</span></Link>
                            <div className='arrow-animation'>
                                <ArrowRight size={16} color="#ffffff" weight="bold"></ArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
                <MoreMovies {...rest} />
                <Footer />
            </div>
        )
    } else {
        return (
            <div className='h-100 d-flex justify-content-center align-items-center'>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )
    }
}

