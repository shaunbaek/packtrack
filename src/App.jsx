import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Team from './components/sections/Team'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Process />
        <Team />
      </main>
      <Footer />
      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}

export default App
