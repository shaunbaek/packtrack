import { RevealOnScroll } from '../../hooks/useScrollReveal'

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'white',
}) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    coral: 'hero-gradient text-white',
  }

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[bgColor]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <RevealOnScroll>
            <div className="text-center mb-12">
              {title && (
                <h2 className={`heading-2 mb-4 ${bgColor === 'coral' ? 'text-white' : 'text-navy'}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg max-w-2xl mx-auto ${bgColor === 'coral' ? 'text-white/80' : 'text-slate'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </RevealOnScroll>
        )}
        {children}
      </div>
    </section>
  )
}
