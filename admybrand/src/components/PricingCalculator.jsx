import { useState } from 'react'
import { motion } from 'framer-motion'

const PricingCalculator = ({ onPriceChange }) => {
  const [credits, setCredits] = useState(1000)
  const [users, setUsers] = useState(1)
  const [billing, setBilling] = useState('monthly') // monthly or annual

  const calculatePrice = () => {
    const basePrice = billing === 'annual' ? 39 : 49
    const creditPrice = (credits / 1000) * (billing === 'annual' ? 8 : 10)
    const userPrice = (users - 1) * (billing === 'annual' ? 15 : 20)
    const totalPrice = basePrice + creditPrice + userPrice
    
    return billing === 'annual' ? totalPrice * 12 : totalPrice
  }

  const handleChange = () => {
    const price = calculatePrice()
    onPriceChange?.(price, { credits, users, billing })
  }

  return (
    <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 shadow-lg transition-colors duration-200">
      <h3 className="text-xl font-semibold text-white mb-6 transition-colors duration-200">Calculate Your Price</h3>
      
      {/* Credits Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200">
          Monthly AI Credits: {credits.toLocaleString()}
        </label>
        <input
          type="range"
          min="1000"
          max="50000"
          step="1000"
          value={credits}
          onChange={(e) => {
            setCredits(Number(e.target.value))
            handleChange()
          }}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white transition-colors duration-200"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1 transition-colors duration-200">
          <span>1,000</span>
          <span>50,000</span>
        </div>
      </div>

      {/* Team Size Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200">
          Team Members: {users}
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={users}
          onChange={(e) => {
            setUsers(Number(e.target.value))
            handleChange()
          }}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white transition-colors duration-200"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1 transition-colors duration-200">
          <span>1</span>
          <span>20</span>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200">
          Billing Period
        </label>
        <div className="flex items-center gap-4 bg-gray-800 rounded-lg p-1 transition-colors duration-200">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              billing === 'monthly'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => {
              setBilling('monthly')
              handleChange()
            }}
          >
            Monthly
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              billing === 'annual'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => {
              setBilling('annual')
              handleChange()
            }}
          >
            Annual (20% off)
          </button>
        </div>
      </div>

      {/* Price Display */}
      <motion.div
        className="text-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-3xl font-bold text-white transition-colors duration-200">
          ${calculatePrice().toLocaleString()}
          <span className="text-lg text-gray-400 ml-1 transition-colors duration-200">
            /{billing === 'annual' ? 'year' : 'month'}
          </span>
        </div>
        {billing === 'annual' && (
          <div className="text-sm text-green-400 mt-2 transition-colors duration-200">
            Save ${(calculatePrice() * 0.2).toLocaleString()} annually
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default PricingCalculator 