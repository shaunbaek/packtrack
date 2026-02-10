import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Team from './components/sections/Team'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
