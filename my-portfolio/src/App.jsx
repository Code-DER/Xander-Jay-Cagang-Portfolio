import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
