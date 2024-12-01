import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Login } from './pages/Signin'
import { Contact } from './pages/Contactus'
import { Register } from './pages/Signup'
import { Client, Databases } from 'appwrite';

function App() {
  const client = new Client ()
  client.setProject('6746c355001c07ae1c75');
  client.setEndpoint('https://cloud.appwrite.io/v1')

  const databases = new Databases(client);

  return (
    <>
    <Header text="Wine Valley" />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path='/register' element={ <Register/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/contact' element={ <Contact/> } />
    </Routes>
    </>
  )
}

export default App
