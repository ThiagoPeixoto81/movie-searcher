import { FilmSlate } from 'phosphor-react'
import React from 'react'
import Carrousel from '../swipers/Carrousel'
import './MoreMovies.css'

type prepareForCarrosel = {
    arrayPreCarrosel: []
}

export default function MoreMovies({ arrayPreCarrosel }: prepareForCarrosel) {
    console.log(arrayPreCarrosel)
    return (
        <div className='mt-5 w-100 mb-5'>
            <div className="title ms-5 d-flex align-items-center">
                <FilmSlate className='me-3' size={25} color="#CCCCCC" weight="bold"></FilmSlate>
                <span className='text-uppercase title'>Mais filmes</span>
            </div>

            <div className='ms-5 d-flex justify-content-around'>
                <Carrousel arrayInCarrossel={arrayPreCarrosel} />
            </div>
        </div>
    )
}
