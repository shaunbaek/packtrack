export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="PackTrack"
            className="h-16 md:h-20 w-auto"
          />
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
