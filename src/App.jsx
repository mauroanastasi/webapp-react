import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={DefaultLayout} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
