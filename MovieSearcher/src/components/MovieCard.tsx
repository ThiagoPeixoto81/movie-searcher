import React from 'react'
import "../components/MovieCard.css"
import ImdbLogo from '../assets/imdb.svg'
import TomatoesLogo from '../assets/tomatoes.svg'
import MetaLogo from '../assets/metacritic.svg'
import { Person, VideoCamera, FilmSlate, Calendar, Money, Flag, Quotes } from 'phosphor-react'
import { MovieProps } from '../types/MovieProps'



export default function MovieCard(props: MovieProps) {
    return (
        <div className="card">
            <div className="movieTitle w-100 d-flex justify-content-start align-items-center mt-4">
                <img src={props.Poster} alt="Movie Poster" className='poster me-5' />

                <div className='movieInfo text-start'>
                    <h1 className='movieName'>{props.Title}</h1>
                    <p className='aboutMovie'>{props.Plot}</p>

                    <div className='ratings mt-5 d-flex'>
                        <div className="imdb d-flex align-items-center me-5">
                            <img src={ImdbLogo} alt="imdb Logo" />
                            <span className='ms-3'>{props.imdbRating}/10</span>
                        </div>

                        <div className="toamtoes d-flex align-items-center">
                            <img src={MetaLogo} alt="Tomatoes Logo" className='metaLogo' />
                            <span className='ms-3'>{props.Metascore}/100</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movieStats w-100 d-flex justify-content-start flex-column mt-5">
                <div className='d-flex'>
                    <div className="stat actors p-4 d-flex align-items-center">
                        <Person size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Actors}</span>
                            <span className='Statcategory'>Actors</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center ms-5">
                        <VideoCamera size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Director}</span>
                            <span className='Statcategory'>Director</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center ms-5">
                        <Quotes size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Writer}</span>
                            <span className='Statcategory'>Writer</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex mt-4'>
                    <div className="stat actors p-4 d-flex align-items-center">
                        <FilmSlate size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Genre}</span>
                            <span className='Statcategory'>Genre</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center ms-5">
                        <Calendar size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Released}</span>
                            <span className='Statcategory'>Release Date</span>
                        </div>
                    </div>
                    <div className="stat actors p-4 d-flex align-items-center ms-5">
                        <Money size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.BoxOffice}</span>
                            <span className='Statcategory'>Box office</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center ms-5">
                        <Flag size={60} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Country}</span>
                            <span className='Statcategory'>Country</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
