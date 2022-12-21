import React from 'react'
import "../pages/searchTeam.css"
import reactLogo from '../assets/react.svg'

import InputSearch  from "../components/inputSearch"
import TeamImage from '../components/TeamImage'

export default function SearchTeam() {
    
  return (
    <>
        <TeamImage url={reactLogo}/>
        <InputSearch/>
    </>
    
  )
}
