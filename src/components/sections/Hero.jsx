import Button from '../ui/Button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative min-h-screen hero-gradient flex items-center pt-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-white text-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="PackTrack"
            className="h-56 md:h-72 w-auto mx-auto mb-8 hero-animate drop-shadow-xl"
          />
          <h1 id="hero-heading" className="heading-1 mb-6 hero-animate">
            Why Is Staying Fit
            <br />
            <span className="text-white/90">a Gamble?</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg mx-auto hero-animate hero-animate-delay-1">
            Emory students struggle with overcrowded campus gyms.
            We're exploring this problem space to design a solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate hero-animate-delay-2">
            <Button
              href="#process"
              variant="secondary"
              size="lg"
            >
              See Our Journey
            </Button>
            <Button
              href="#about"
              variant="outline"
              size="lg"
              className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-coral"
            >
              The Problem
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll to problem space section"
          className="text-white/80 hover:text-white transition-colors inline-flex rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-coral"
        >
          <ChevronDown size={32} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
