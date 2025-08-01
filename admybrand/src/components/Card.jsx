const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-black shadow-lg shadow-black/50 border border-white/10',
    glass: 'bg-black/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/30',
    solid: 'bg-black shadow-xl shadow-black/50'
  }

  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card 