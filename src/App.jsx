import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';

import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <Navbar />
      <Hero />
      <Services />
     
    </div>
    </>
  )
}

export default App
