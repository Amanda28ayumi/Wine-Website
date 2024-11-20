import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Home} from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import {Header} from './components/Header'
import {About} from './pages/About'
import { Register } from './pages/Signup'

function App() {

  return (
    <>
    <Header text="Wine" />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path='/register' element={ <Register/> } />
    </Routes>
    </>
  )
}

export default App
