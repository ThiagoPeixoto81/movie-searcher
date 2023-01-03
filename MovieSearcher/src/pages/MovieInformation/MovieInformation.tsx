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
    const [Loading, setLoading] = useState(true)

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
            setLoading(true)
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

    if (!Loading) {
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
                    <div className='d-flex align-items-center justify-content-sm-start flex-column flex-sm-row mainAnimation w-100'>
                        <img className='detailedPoster mb-5' src={searchmovie.Poster} alt={searchmovie.Title} />

                        <div className='d-flex flex-column align-items-center align-items-sm-start ms-sm-5'>
                            <h3 className='MovieName text-uppercase mb-3 text-sm-start'>{searchmovie.Title}</h3>

                            <div className='plotRating d-flex mb-5'>
                                <div className='d-flex align-items-center me-5'>
                                    <img className='imdb me-3' src={ImdbLogo} alt="ImDb" />
                                    <span className='fw-normal rating'>{searchmovie.imdbRating}/10</span>
                                </div>

                                {
                                    searchmovie.Metascore != 'N/A' &&
                                    <div className='d-flex align-items-center'>
                                        <img className='metascore me-3' src={MetaLogo} alt="ImDb" />
                                        <span className='fw-normal rating'>{searchmovie.Metascore}/100</span>
                                    </div>
                                }

                            </div>

                            <p className='moviePlot text-center text-sm-start mb-sm-5'>{searchmovie.Plot}</p>
                        </div>
                    </div>

                    <div className='d-flex flex-column flex-sm-row flex-wrap justify-content-start w-100 ms-4 my-5 statInfo'>

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
                            searchmovie.BoxOffice != "N/A" &&
                            <Stat infoType='Box Office' info={searchmovie.BoxOffice}>
                                <Money size={36} color="#ffffff" weight="fill" ></Money>
                            </Stat>
                        }

                    </div>

                </div>
                <Footer />
            </div>
        )
    } else {
        <div className="container">
            <Navbar setsearch={function (value: string): void {
                throw new Error('Function not implemented.')
            }} searchMovie={function (): void {
                throw new Error('Function not implemented.')
            }} />

            <div className="loader">
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    }


}
