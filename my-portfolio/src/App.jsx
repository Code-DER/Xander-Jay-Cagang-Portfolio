import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Contact />
    </div>
  )
}

export default App
