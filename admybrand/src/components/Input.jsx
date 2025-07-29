import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Input = ({
  type = 'text',
  label,
  error,
  className = '',
  required = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          className={`block text-sm font-medium mb-2 transition-colors ${
            error ? 'text-red-400' : 'text-gray-300'
          }`}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          className={`
            w-full bg-white/5 border rounded-lg px-4 py-2 text-white 
            placeholder-gray-400 transition-all duration-200
            focus:outline-none focus:ring-2
            ${
              error
                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
            }
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {/* Focus indicator */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`absolute inset-0 rounded-lg ${
                error ? 'bg-red-500/5' : 'bg-blue-500/5'
              } pointer-events-none`}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Input 