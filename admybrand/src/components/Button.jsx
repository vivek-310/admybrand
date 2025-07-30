const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-500 dark:focus:ring-white/30',
    secondary: 'bg-black dark:bg-white border border-black dark:border-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 focus:ring-gray-500 dark:focus:ring-black/30',
    outline: 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:ring-black/50 dark:focus:ring-white/50'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 