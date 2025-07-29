const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-light to-secondary dark:from-primary dark:to-secondary-dark text-white hover:from-primary-dark hover:to-secondary-dark dark:hover:from-primary-light dark:hover:to-secondary focus:ring-primary/50 dark:focus:ring-primary-dark/50',
    secondary: 'bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 focus:ring-gray-500 dark:focus:ring-white/30',
    outline: 'border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light hover:bg-primary/5 dark:hover:bg-primary-light/5 focus:ring-primary/50 dark:focus:ring-primary-light/50',
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