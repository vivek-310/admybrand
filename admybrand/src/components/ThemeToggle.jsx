import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full w-12 h-12
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-colors duration-200
      `}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 45 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{ duration: 0.2 }}
        className="relative w-6 h-6 mx-auto"
      >
        {/* Sun */}
        <motion.div
          className={`
            absolute inset-0
            bg-yellow-400 dark:bg-gray-200
            rounded-full
            transition-colors duration-200
          `}
        />
        
        {/* Sun rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              height: isDark ? 0 : 8,
              opacity: isDark ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
            className={`
              absolute w-1 h-2
              bg-yellow-400 dark:bg-gray-200
              rounded-full
              origin-center
              transition-colors duration-200
            `}
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateY(-12px)`
            }}
          />
        ))}

        {/* Moon cutout */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            x: isDark ? 2 : 0,
            y: isDark ? -2 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-0 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full"
        />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle 