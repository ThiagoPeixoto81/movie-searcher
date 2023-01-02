import React from 'react'
import KnowMore from '../../components/knowMore/KnowMore'
import Navbar from '../../components/navbar/Navbar'

export default function Home() {
    return (
        <div className='container'>
            <Navbar setsearch={function (value: string): void {
                throw new Error('Function not implemented.')
            }} searchMovie={function (): void {
                throw new Error('Function not implemented.')
            }} />
            <KnowMore />
        </div>

    )
}
