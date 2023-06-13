import { MagnifyingGlass, X } from 'phosphor-react'
import React, { KeyboardEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './InputSearch.css'


interface Iinput {
    search?: string,
    setsearch: (value: string) => void,
    searchMovie: (value: string) => void
}

export default function InputSearch({ search, setsearch, searchMovie }: Iinput) {
    const [open, setOpen] = useState(false)
    const [find, setFind] = useState("")
    const navigate = useNavigate();

    function enterSearch(e: KeyboardEvent) {
        if (e.key === "Enter") {
            navigate(`/search/${find}`)

        }
    }

    return (
        <div className="input-group">
            <input type="text" defaultValue={search} onChange={(e) => { setFind(e.target.value), setsearch(e.target.value), searchMovie(e.target.value) }} onKeyDown={(e) => { enterSearch(e) }} className={`form-control me-3 ps-3 bg-transparent ${open}`} placeholder="Pesquise um filme aqui..." aria-label="Username" aria-describedby="basic-addon1" />

            <span className="input-group-text pe-4 bg-transparent" id="basic-addon1">
                {open === false ?
                    <MagnifyingGlass className='Search-icon' size={24} color="#ffffff" weight="bold" onClick={() => { setOpen(true) }}></MagnifyingGlass>
                    :
                    <X className='Close-icon' size={24} color="#ffffff" weight="bold" onClick={() => { setOpen(false) }}></X>
                }
            </span>
        </div>
    )
}


