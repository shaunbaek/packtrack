export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-coral-light flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">P</span>
          </div>
          <span className="font-display font-bold text-xl">PackTrack</span>
        </div>
        <p className="text-white/60 text-sm mb-2">
          CS 485/584 Human-Computer Interaction
        </p>
        <p className="text-white/60 text-sm">
          Emory University &bull; Spring 2026
        </p>
      </div>
    </footer>
  )
}
