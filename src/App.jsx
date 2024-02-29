import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experiences from './components/Experience/Experiences'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/Number'
import HallofFrame from './components/HallofFrame/HallofFrame'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Number />
      <Skills />
      <Experiences />
      <Portfolio />
      <HallofFrame />
      <Contact />
      <Footer />
    </>
  )
}

export default App
