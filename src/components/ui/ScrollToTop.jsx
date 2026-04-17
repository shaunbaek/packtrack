import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-navy text-white shadow-lg
        flex items-center justify-center transition-all duration-300
        hover:bg-coral hover:-translate-y-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ArrowUp size={20} />
    </button>
  )
}
