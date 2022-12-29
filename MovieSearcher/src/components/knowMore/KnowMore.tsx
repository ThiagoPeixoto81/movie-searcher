import { ArrowRight } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import MoreMovies from '../MoreMovies/MoreMovies'
import './KnowMore.css'


export default function KnowMore() {

    const [poster, setPoster] = useState("")
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [rest, setRest] = useState<[]>([])

    useEffect(() => {
        defineHome();
    }, [])

    async function defineHome() {
        const searchParams = ["cars", "american", "last", "soccer", "war", "batman", "fast"]
        let index = Math.floor(Math.random() * searchParams.length)
        let search = searchParams[index]

        let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${search}`)
        let res = await req.json();

        let moviesOnTheScreen = res.Search

        setPoster(moviesOnTheScreen[0].Poster)
        setTitle(moviesOnTheScreen[0].Title)
        setYear(`(${moviesOnTheScreen[0].Year})`)
        setRest(moviesOnTheScreen)
    }

    console.log(rest)
    return (
        <div className='d-flex justify-content-center flex-column align-items-center mt-5 pt-5'>
            <div className='d-flex flex-column align-items-center mb-5'>
                <img src={poster} alt="Poster" className='mb-4' />

                <h2 className='text-wrap text-truncate d-inline-block text-uppercase'>{title}</h2>
                <span className='mb-5'>{year}</span>

                <div className='seeMoreDiv d-flex align-items-center'>
                    <span className='seemoreText me-2'>Veja mais sobre este filme</span>
                    <div className='arrow-animation'>
                        <ArrowRight size={16} color="#ffffff" weight="bold"></ArrowRight>
                    </div>
                </div>
            </div>

            <MoreMovies arrayPreCarrosel={rest} />
            <Footer />
        </div>
    )
}
