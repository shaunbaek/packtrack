import { useEffect, useRef, useState } from 'react'

/**
 * Hook to trigger reveal animation when element enters viewport
 * @param {Object} options - Intersection Observer options
 * @returns {[ref, isVisible]} - Ref to attach to element and visibility state
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (don't re-hide on scroll up)
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options])

  return [ref, isVisible]
}

/**
 * Component wrapper for scroll reveal animations
 */
export function RevealOnScroll({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default useScrollReveal
