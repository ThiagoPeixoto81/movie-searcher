import React from 'react'
import "./CardError.css"


export default function CardError(props: any) {
  return (
    <div className="card Error">
      <div className='cardError d-flex justify-content-center align-items-center'>
        <div className='loadingDiv d-flex flex-column align-items-center justify-content-center'>
          {props.loader && <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}

          <span className='loadingSub mt-4 text-center'>{props.msg}</span>
        </div>
      </div>
    </div>
  )
}
