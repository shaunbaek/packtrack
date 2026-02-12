export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'

  const variants = {
    primary: 'bg-coral text-white hover:bg-coral-dark hover:shadow-xl focus:ring-coral shadow-lg',
    secondary: 'bg-navy text-white hover:bg-navy-light hover:shadow-lg focus:ring-navy shadow-md',
    outline: 'border-2 border-coral text-coral hover:bg-coral hover:text-white focus:ring-coral',
    ghost: 'text-coral hover:bg-coral/10 focus:ring-coral',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
