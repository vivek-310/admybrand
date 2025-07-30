const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700',
    glass: 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-gray-200/20 dark:border-white/10 shadow-xl dark:shadow-gray-900/30',
    solid: 'bg-white dark:bg-gray-900 shadow-xl dark:shadow-gray-900/50'
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