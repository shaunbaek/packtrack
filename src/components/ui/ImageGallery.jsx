import { useState } from 'react'
import Lightbox from './Lightbox'

export default function ImageGallery({ visuals, columns = 2 }) {
  const [lightboxImage, setLightboxImage] = useState(null)

  if (!visuals || visuals.length === 0) return null

  return (
    <>
      <div className={`grid gap-4 grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {visuals.map((visual) => (
          <div
            key={visual.id}
            className="group cursor-pointer"
            onClick={() => setLightboxImage(visual)}
          >
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={visual.url}
                alt={visual.alt}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {visual.caption && (
              <p className="text-sm text-slate mt-2 text-center">
                {visual.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          imageSrc={lightboxImage.url}
          imageAlt={lightboxImage.alt}
          caption={lightboxImage.caption}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  )
}
