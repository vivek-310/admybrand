import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import PricingCalculator from './PricingCalculator'

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [calculatedPrice, setCalculatedPrice] = useState(49)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 29,
      features: [
        '1,000 AI Credits per month',
        'Basic content generation',
        'Email support',
        'Standard analytics',
        '1 team member'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Ideal for growing businesses and marketing teams',
      price: 49,
      features: [
        '5,000 AI Credits per month',
        'Advanced content generation',
        'Campaign optimization',
        'Priority support',
        'Advanced analytics',
        'Up to 5 team members',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: null,
      features: [
        'Unlimited AI Credits',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced security',
        'Unlimited team members',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ]

  const handlePriceChange = (price) => {
    setCalculatedPrice(price)
  }

  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-black overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Choose the plan that fits your business needs. All plans include our core AI features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full"
            >
              <Card
                variant="glass"
                className={`relative h-full flex flex-col bg-black/30 backdrop-blur-lg hover:bg-black/40 border border-gray-700/50 ${
                  plan.popular ? 'border-primary transform md:scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </span>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors duration-200">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6 transition-colors duration-200">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold text-white transition-colors duration-200">${plan.price}</span>
                        <span className="text-gray-400 transition-colors duration-200">/month</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white transition-colors duration-200">Custom</span>
                        <span className="text-gray-400 transition-colors duration-200"> pricing</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features - This section will grow to fill available space */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 transition-colors duration-200">
                        <svg
                          className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - This will always be at the bottom */}
                <div className="mt-8 pt-6">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.price ? 'Get Started' : 'Contact Sales'}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <PricingCalculator onPriceChange={handlePriceChange} />
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing 