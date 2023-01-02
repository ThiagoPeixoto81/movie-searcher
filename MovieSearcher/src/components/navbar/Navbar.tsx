import { MagnifyingGlass } from 'phosphor-react'
import React, { KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoMs from '../../assets/logoMs.svg'
import './navbar.css'

interface INavbar {
    search?: string,
    setsearch: (value: string) => void,
    searchMovie: () => void
}

export default function Navbar({ search, setsearch, searchMovie }: INavbar) {

    function enterSearch(e: KeyboardEvent) {
        if (e.key === "Enter") {
            searchMovie()
        }
    }

    return (
        <nav className="navbar px-4 py-4 mt-4" >
            <div className="container-fluid d-flex justify-content-spacebetween align-items-center" >
                <Link to='/'><img className='navbar-brand' src={LogoMs} alt="Logo Movie Searcher" /></Link>
                <div className="input-group">
                    <Link to='/search' className='text-decoration-none'><input type="text" defaultValue={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={(e) => { enterSearch(e) }} className="form-control bg-transparent ps-md-4" placeholder="Pesquise um filme aqui..." aria-label="Username" aria-describedby="basic-addon1" /></Link>

                    <span className="input-group-text pe-4 bg-transparent" id="basic-addon1" onClick={() => { searchMovie() }}><MagnifyingGlass size={20} color="#ffffff" weight="bold" ></MagnifyingGlass></span>
                </div>
            </div >
        </nav >
    )
}
