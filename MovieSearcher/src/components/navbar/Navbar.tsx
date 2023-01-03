import { FilmSlate, MagnifyingGlass } from 'phosphor-react'
import React, { KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'
import './navbar.css'

interface INavbar {
    search?: string,
    setsearch: (value: string) => void,
    searchMovie: (value: string) => void
}

export default function Navbar({ search, setsearch, searchMovie }: INavbar) {

    return (
        <nav className="navbar px-4 py-4 mt-4" >
            <div className="container-fluid d-flex justify-content-spacebetween align-items-center" >
                <Link to='/'><FilmSlate></FilmSlate></Link>
                <InputSearch searchMovie={searchMovie} setsearch={setsearch} search={search} />
            </div >
        </nav >
    )
}
