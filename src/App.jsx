import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Homepage />} />
            <Route path="/movies/:id" element={<h1>Dettaglio films</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
