import React, { Component } from 'react'
import "./MovieCard.css"
import ImdbLogo from '../../assets/imdb.svg'
import MetaLogo from '../../assets/metacritic.svg'
import { Person, VideoCamera, FilmSlate, Calendar, Money, Flag, Quotes } from 'phosphor-react'
import { MovieProps } from '../../types/MovieProps'


export default function MovieCard(props: MovieProps) {
    return (
        <div className="card p-sm-5 py-5 ps-4">
            <div className="movieTitle w-100 d-flex justify-content-start align-items-center ms-4">
                <img src={props.Poster} alt="Movie Poster" className='poster me-4 me-sm-5' />

                <div className='movieInfo text-start'>
                    <h1 className='movieName'>{props.Title}</h1>
                    <p className='aboutMovie'>{props.Plot}</p>

                    <div className='ratings mt-5 d-flex'>
                        <div className="imdb d-flex align-items-center me-3 me-sm-5">
                            <img src={ImdbLogo} alt="imdb Logo" />
                            <span className='ms-sm-3 ms-2'>{props.imdbRating}/10</span>
                        </div>

                        <div className="toamtoes d-flex align-items-center">
                            <img src={MetaLogo} alt="Tomatoes Logo" className='metaLogo' />
                            <span className='ms-sm-3 ms-2'>{props.Metascore}/100</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movieStats w-100 d-flex justify-content-start flex-column mt-5">
                <div className='d-flex flex-wrap flex-sm-nowrap'>
                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-0 ms-3">
                        <Person size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Actors}</span>
                            <span className='Statcategory'>Actors</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-4 ms-3">
                        <VideoCamera size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Director}</span>
                            <span className='Statcategory'>Director</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-4 ms-3">
                        <Quotes size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Writer}</span>
                            <span className='Statcategory'>Writer</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-wrap flex-sm-nowrap mt-sm-4'>
                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-0 ms-3">
                        <FilmSlate size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Genre}</span>
                            <span className='Statcategory'>Genre</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-4 ms-3">
                        <Calendar size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.Released}</span>
                            <span className='Statcategory'>Release Date</span>
                        </div>
                    </div>
                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-4 ms-3">
                        <Money size={25} color="#ffffff" weight="fill" />
                        <div className="stat-info d-flex flex-column align-items-start ms-3">
                            <span className='StatMain'>{props.BoxOffice}</span>
                            <span className='Statcategory'>Box office</span>
                        </div>
                    </div>

                    <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-4 ms-3">
                        <Flag size={25} color="#ffffff" weight="fill" />
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
