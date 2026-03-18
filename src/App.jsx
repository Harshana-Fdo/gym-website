import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Contact from './Components/Contact';
import './Components/About';
import Footer from './Components/Footer';

import './App.css';
import About from './Components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
