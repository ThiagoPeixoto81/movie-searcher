import React, { Component, ReactNode } from 'react'
import './Stat.css'

type StatProp = {
    children?: ReactNode,
    info?: string,
    infoType: string
}


export default function Stat({ children, info, infoType }: StatProp) {
    return (
        <div className="stat actors p-4 d-flex align-items-center mb-3 ms-sm-3 ms-3">
            {children}
            <div className="stat-info d-flex flex-column align-items-start ms-3">
                <span className='StatMain'>{info}</span>
                <span className='Statcategory'>{infoType}</span>
            </div>
        </div>
    )
}
