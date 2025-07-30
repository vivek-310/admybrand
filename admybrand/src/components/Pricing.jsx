import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import PricingCalculator from './PricingCalculator'

const Pricing = () => {
  const [customPrice, setCustomPrice] = useState(null)

  const plans = [
    {
      name: 'Basic',
      price: 49,
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Content Generation (1000 credits/mo)',
        'Basic Campaign Analytics',
        'Single User Account',
        'Email Support',
        '5 Marketing Channels',
        'Basic Templates'
      ]
    },
    {
      name: 'Pro',
      price: 99,
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'AI Content Generation (5000 credits/mo)',
        'Advanced Campaign Analytics',
        '5 Team Members',
        'Priority Support',
        'Unlimited Marketing Channels',
        'Premium Templates',
        'Custom Branding',
        'API Access'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      customPrice: true,
      features: [
        'AI Content Generation (Unlimited)',
        'Custom Analytics Dashboard',
        'Unlimited Team Members',
        '24/7 Dedicated Support',
        'Custom Integration',
        'White Label Solution',
        'Custom AI Training',
        'SLA Guarantee'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-black dark:bg-black overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card
                variant={plan.popular ? 'glass' : 'default'}
                className={`relative h-full bg-white/5 dark:bg-black/30 backdrop-blur-lg hover:bg-white/10 dark:hover:bg-black/40 border border-white/10 dark:border-gray-700/50 ${
                  plan.popular ? 'border-primary dark:border-primary-light transform md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white dark:bg-white text-black dark:text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 dark:text-white mb-2 transition-colors duration-200">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 mb-6 transition-colors duration-200">{plan.description}</p>
                  
                  {!plan.customPrice ? (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-100 dark:text-white transition-colors duration-200">${plan.price}</span>
                      <span className="text-gray-300 dark:text-gray-400 transition-colors duration-200">/month</span>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-100 dark:text-white transition-colors duration-200">Custom</span>
                    </div>
                  )}

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 dark:text-gray-300 transition-colors duration-200">
                        <svg
                          className="w-5 h-5 text-primary dark:text-primary-light mr-3 flex-shrink-0"
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
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.customPrice ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <PricingCalculator
            onPriceChange={(price, details) => setCustomPrice(price)}
          />
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-light/10 dark:bg-primary/10 rounded-full blur-3xl"
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
            className="absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-light/10 dark:bg-secondary/10 rounded-full blur-3xl"
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