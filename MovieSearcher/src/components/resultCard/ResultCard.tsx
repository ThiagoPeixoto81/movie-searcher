import { ArrowRight, Calendar } from 'phosphor-react'
import React from 'react'
import './ResultCard.css'

type resultProps = {
    poster: string,
    title: string,
    imdbId: string,
    year: string
}

export default function ResultCard({poster, title, imdbId, year}:resultProps) {
  return (
    <div className='resultcard mt-5 p-5 d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <img className='me-5' src={poster} alt="Movie Poster" />

            <div className='w-100'>
                <h3 className='text-uppercase SearchTitle'>{title}</h3>
                <span className='imdbId'>{imdbId}</span>

                <div className='mt-4 d-flex align-items-center'>
                    <Calendar className='me-2' size={30} color="#ffffff" weight="fill"></Calendar>
                    <span className='year'>{year}</span>
                </div>
            </div>
        </div>

        <a href=""><ArrowRight size={64} color="#ffffff" weight="bold"/></a>
    </div>
  )
}
