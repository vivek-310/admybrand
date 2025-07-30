const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white dark:bg-black shadow-lg dark:shadow-black/50 border border-gray-200 dark:border-white/10',
    glass: 'bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 shadow-xl dark:shadow-black/30',
    solid: 'bg-white dark:bg-black shadow-xl dark:shadow-black/50'
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