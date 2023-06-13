import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import SearchingPage from './pages/Search/Search'
import MovieInformation from './pages/MovieInformation/MovieInformation'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<SearchingPage />} />
        <Route path='/movieinfo/:movie' element={<MovieInformation />} />
      </Routes>
    </>

  )
}

export default App
