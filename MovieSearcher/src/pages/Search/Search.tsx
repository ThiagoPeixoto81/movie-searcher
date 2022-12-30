import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Search.css'

export default function Search() {
    const [search, setsearch] = useState("")
    return (
        <div className='container'>
            <Navbar search={search} setsearch={setsearch} />
            <div className='w-100'>
                <h3 className=''>{search}</h3>
            </div>
        </div>

    )
}
