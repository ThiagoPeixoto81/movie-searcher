import React from 'react'
import "../pages/searchTeam.css"
import reactLogo from '../assets/react.svg'

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

export default function SearchTeam() {

  return (
    <>
      <img src={reactLogo} />
      <h1>SearchTeam</h1>
      <input type="text" onChange={() => { getTeam() }} />
    </>

  )
}
