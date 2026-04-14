import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Difference from './components/Difference'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Difference />
      <Services />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
