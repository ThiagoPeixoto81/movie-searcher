import React from 'react'
import "../pages/MovieSearcher.css"
import MsLogo from '../assets/logoMS.svg'
import { MagnifyingGlass } from "phosphor-react";

async function getTeam() {

  let req = await fetch("https://api.football-data.org/v4/matches", {
    mode: "no-cors",
    headers: {
      'X-Auth-Token': 'd16096d25e704de5aa11ef07ef73eb91',
      "Content-Type": "application/json;charset=utf-8",
    }
  })

  let res = await req.json();

  console.log(res)
}

export default function MovieSearcher() {

  return (
    <>
      <div className='searcher'>
        <img src={MsLogo} />
        <div className="typeHere">
          <input type="text" onChange={() => { getTeam() }} />
          <button><MagnifyingGlass size={32} color="#ffffff" weight="fill" /></button>
        </div>

      </div>
    </>

  )
}
