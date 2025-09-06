import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import bg from './assets/bg.svg'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
