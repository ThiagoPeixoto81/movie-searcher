import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import LogoMs from '../../assets/logoMs.svg'
import './navbar.css'

interface INavbar {
    search: string,
    setsearch: (value: string) => void
}

export default function Navbar({ search, setsearch }: INavbar) {
    return (
        <nav className="navbar px-4 py-4 mt-4" >
            <div className="container-fluid d-flex justify-content-spacebetween align-items-center" >
                <img className='navbar-brand' src={LogoMs} alt="Logo Movie Searcher" />
                <div className="input-group">
                    <input type="text" defaultValue={search} onChange={(e) => setsearch(e.target.value)} className="form-control bg-transparent ps-md-4" placeholder="Pesquise um filme aqui..." aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text pe-4 bg-transparent" id="basic-addon1"><MagnifyingGlass size={20} color="#ffffff" weight="bold" ></MagnifyingGlass></span>
                </div>
            </div >
        </nav >
    )
}
