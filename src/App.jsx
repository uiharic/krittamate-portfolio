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
    <AnimatedCursor
      innerSize={15}
      outerSize={8}
      color='20, 95, 365'
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={{
        border: '3px solid red'
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <Portfolio />
      <Number />
      <HallofFrame />
      <Contact />
      <Footer />
    </>
  )
}

export default App
