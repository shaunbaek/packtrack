export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-coral text-white hover:bg-coral-dark focus:ring-coral shadow-lg hover:shadow-xl',
    secondary: 'bg-navy text-white hover:bg-navy-light focus:ring-navy',
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
