import React from 'react'
import { ErrorProps } from '../../types/ErrorProps'
import "./CardError.css"


export default function CardError(props:any) {
  return (
    <div className="card">
        <div className='cardError d-flex justify-content-center align-items-center'>
            <div className='loadingDiv d-flex flex-column align-items-center justify-content-center'>
                {props.loader && <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                
                <span className='loadingSub mt-4 fs-1'>{props.msg}</span>
            </div>  
        </div>
    </div>
  )
}
