import { ArrowLeft, Calendar, FilmSlate, Link, Money, Person, Quotes, VideoCamera } from 'phosphor-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import './MovieInformation.css'
import ImdbLogo from '../../assets/imdb.svg'
import MetaLogo from '../../assets/metacritic.svg'
import Stat from '../../components/Stat/Stat';
import Footer from '../../components/footer/Footer';

export default function MovieInformation() {
    const [searchmovie, setMovie] = useState(Object)

    const { movie } = useParams();
    console.log(movie)
    const navigate = useNavigate();

    useEffect(() => {
        getMovie(movie);
    }, [])

    async function getMovie(name: any) {
        let req = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&t=${name}&type=movie`)

        let res = await req.json();
        console.log(res)

        if (res.Response == "False") {

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
        }

    }

    return (
        <div className="container">
            <Navbar setsearch={function (value: string): void {
                throw new Error('Function not implemented.')
            }} searchMovie={function (): void {
                throw new Error('Function not implemented.')
            }} />

            <div className='container back w-100 pb-5'>
                <ArrowLeft size={32} color="#ffffff" weight="bold" className='mt-5 ms-4 click' onClick={() => { navigate(-1) }}></ArrowLeft>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                <img className='detailedPoster mb-5' src={searchmovie.Poster} alt={searchmovie.Title} />
                <h3 className='MovieName text-uppercase mb-3'>{searchmovie.Title}</h3>

                <div className='d-flex mb-5'>
                    <div className='d-flex align-items-center me-5'>
                        <img className='imdb me-3' src={ImdbLogo} alt="ImDb" />
                        <span className='fw-normal'>{searchmovie.imdbRating}/10</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img className='metascore me-3' src={MetaLogo} alt="ImDb" />
                        <span className='fw-normal'>{searchmovie.Metascore}/100</span>
                    </div>
                </div>

                <p className='moviePlot text-center'>{searchmovie.Plot}</p>

                <div className='d-flex flex-column justify-content-start w-100 ms-4 my-5'>

                    <Stat infoType='Release Date' info={searchmovie.Released}>
                        <Calendar size={36} color="#ffffff" weight="fill" ></Calendar>
                    </Stat>

                    {
                        searchmovie.Director != "N/A" &&
                        <Stat infoType='Director' info={searchmovie.Director}>
                            <VideoCamera size={36} color="#ffffff" weight="fill" ></VideoCamera>
                        </Stat>
                    }


                    <Stat infoType='Actors' info={searchmovie.Actors}>
                        <Person size={36} color="#ffffff" weight="fill" ></Person>
                    </Stat>

                    {
                        searchmovie.Writer != "N/A" &&
                        <Stat infoType='Writers' info={searchmovie.Writer}>
                            <Quotes size={36} color="#ffffff" weight="fill" ></Quotes>
                        </Stat>
                    }


                    <Stat infoType='Genre' info={searchmovie.Genre}>
                        <FilmSlate size={36} color="#ffffff" weight="fill" ></FilmSlate>
                    </Stat>

                    {
                        searchmovie.BoxOffice != "N/A" || null &&
                        <Stat infoType='Box Office' info={searchmovie.BoxOffice}>
                            <Money size={36} color="#ffffff" weight="fill" ></Money>
                        </Stat>
                    }

                </div>

            </div>
            <Footer />
        </div>
    )
}
