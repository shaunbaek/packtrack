import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Problem', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Team', href: '#team' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMobileMenuOpen])

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}
    `}>
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" aria-label="PackTrack home" className="flex items-center rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="PackTrack"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`
                      font-medium transition-colors min-h-[44px] inline-flex items-center
                      ${isScrolled
                        ? isActive
                          ? 'text-coral-deep'
                          : 'text-navy hover:text-coral-deep'
                        : isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className={`md:hidden p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled ? 'text-navy' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 top-16 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <ul
              id="mobile-nav"
              className="md:hidden bg-white rounded-2xl shadow-lg mt-2 p-4 absolute left-4 right-4 list-none"
            >
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block py-3 px-4 font-medium rounded-lg transition-colors min-h-[44px]
                        ${isActive ? 'text-coral bg-coral/10' : 'text-navy hover:text-coral-deep hover:bg-coral/5'}
                      `}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </nav>
    </header>
  )
}
