import Button from '../ui/Button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center pt-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-white text-center">
          <h1 className="heading-1 mb-6 hero-animate">
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
              className="border-white text-white hover:bg-white hover:text-coral"
            >
              The Problem
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  )
}
