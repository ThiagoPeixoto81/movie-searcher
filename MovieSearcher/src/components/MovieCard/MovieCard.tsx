import React, { Component } from 'react'
import "./MovieCard.css"
import ImdbLogo from '../../assets/imdb.svg'
import MetaLogo from '../../assets/metacritic.svg'
import { Person, VideoCamera, FilmSlate, Calendar, Money, Flag, Quotes } from 'phosphor-react'
import { MovieProps } from '../../types/MovieProps'
import Stat from '../Stat/Stat'


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

                        {props.Metascore != "N/A" &&
                            <div className="toamtoes d-flex align-items-center">
                                <img src={MetaLogo} alt="Tomatoes Logo" className='metaLogo' />
                                <span className='ms-sm-3 ms-2'>{props.Metascore}/100</span>
                            </div>
                        }

                    </div>
                </div>
            </div>

            <div className="movieStats w-100 d-flex justify-content-start flex-column mt-5">
                <div className='d-flex flex-wrap flex-sm-nowrap'>

                    <Stat info={props.Actors} infoType={"Actors"}>
                        <Person size={25} color="#ffffff" weight="fill" ></Person>
                    </Stat>

                    {props.Director != "N/A" &&
                        <Stat info={props.Director} infoType={"Director"}>
                            <VideoCamera size={25} color="#ffffff" weight="fill" ></VideoCamera>
                        </Stat>
                    }

                    {props.Writer != "N/A" &&
                        <Stat info={props.Writer} infoType={"Writer"}>
                            <Quotes size={25} color="#ffffff" weight="fill" ></Quotes>
                        </Stat>
                    }

                </div>

                <div className='d-flex flex-wrap flex-sm-nowrap mt-sm-4'>

                    <Stat info={props.Genre} infoType={"Genre"}>
                        <FilmSlate size={25} color="#ffffff" weight="fill" />
                    </Stat>

                    {props.Released != "N/A" &&
                        <Stat info={props.Released} infoType={"Release Date"}>
                            <Calendar size={25} color="#ffffff" weight="fill" />
                        </Stat>
                    }

                    {props.BoxOffice != "N/A" || null &&
                        <Stat info={props.BoxOffice} infoType={"Box office"}>
                            <Money size={25} color="#ffffff" weight="fill" />
                        </Stat>
                    }

                    <Stat info={props.Country} infoType={"Country"}>
                        <Flag size={25} color="#ffffff" weight="fill" />
                    </Stat>
                </div>
            </div>
        </div>
    )
}
