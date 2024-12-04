import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Blogs } from './pages/Blogs'
import { Login } from './pages/Signin'
import { Contact } from './pages/Contactus'
import { Register } from './pages/Signup'
import { Client, Account, Databases, Storage } from 'appwrite';

function App() {
  const client = new Client ()
  client.setProject('6746c355001c07ae1c75');
  client.setEndpoint('https://cloud.appwrite.io/v1')

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);

  return (
    <>

    <Header text=" Win&Valley" />
    <Routes>
      <Route path='/' element={ <Home db={database} str={storage}/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/blogs" element={ <Blogs/> } />
      <Route path='/register' element={ <Register/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/contact' element={ <Contact/> } />
    </Routes>
    </>
  )
}

export default App
