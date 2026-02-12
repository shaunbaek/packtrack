import Button from '../ui/Button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="heading-1 mb-6 hero-animate">
              Why Is Staying Fit
              <br />
              <span className="text-white/90">a Gamble?</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 hero-animate hero-animate-delay-1">
              Emory students struggle with overcrowded campus gyms.
              We're exploring this problem space to design a solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-animate hero-animate-delay-2">
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

          {/* Problem Visualization */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative hero-scale-in">
              {/* Gym Illustration Placeholder */}
              <div className="w-72 md:w-80 h-72 md:h-80 bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105">
                <div className="text-6xl mb-4">🏋️</div>
                <p className="text-white font-display font-bold text-xl mb-2 text-center">PackTrack</p>
                <p className="text-white/70 text-sm text-center">
                  Exploring gym crowding at Emory
                </p>
                <div className="mt-4 px-4 py-2 bg-amber-400/20 rounded-full badge-pulse">
                  <span className="text-amber-200 text-sm font-medium">Currently Researching</span>
                </div>
              </div>
              {/* Decorative Elements - Floating */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl float-animation"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-xl float-animation-delayed"></div>
            </div>
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
