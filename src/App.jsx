import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Media from './components/Media'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'



function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    
    <Media/>
    </div>
  )
}

export default App