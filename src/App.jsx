import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import Agence from './Pages/Agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {


  return (
    <>
    
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Agence" element={<Agence/>}/>
    </Routes>
    
    </>
  )
}

export default App
