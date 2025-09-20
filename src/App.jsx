import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import Agence from './Pages/Agence'

function App() {
  const [count, setCount] = useState(0)

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
