export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md p-6
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
