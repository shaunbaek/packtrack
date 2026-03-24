import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Lightbox({ isOpen, imageSrc, imageAlt, caption, onClose }) {
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Image Container */}
      <div
        className="max-w-[95vw] max-h-[95vh] md:max-w-[90vw] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="text-white text-center mt-4 text-sm md:text-base px-4">
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}
