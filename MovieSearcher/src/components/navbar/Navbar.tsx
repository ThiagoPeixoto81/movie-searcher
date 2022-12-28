import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import LogoMs from '../../assets/logoMs.svg'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar px-4 py-4 mt-4" >
            <div className="container-fluid d-flex justify-content-spacebetween align-items-center" >
                <img className='navbar-brand' src={LogoMs} alt="Logo Movie Searcher" />
                <div className="input-group">
                    <input type="text" className="form-control bg-transparent" placeholder="Pesquise um filme aqui..." aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text pe-4" id="basic-addon1"><MagnifyingGlass size={20} color="#ffffff" weight="bold" ></MagnifyingGlass></span>
                </div>
            </div >
        </nav >
    )
}
