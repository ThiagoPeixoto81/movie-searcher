import React from 'react'
import './App.css'
import MovieSearcher from './pages/MovieSearcher'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<MovieSearcher />} />
      </Routes>
    </>

  )
}

export default App
