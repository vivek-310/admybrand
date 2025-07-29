import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How does ADmyBRAND AI generate content?',
      answer: 'Our AI uses advanced natural language processing and machine learning algorithms trained on successful marketing campaigns to generate high-quality, engaging content tailored to your brand voice and target audience.'
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
      answer: 'Yes! ADmyBRAND AI offers seamless integration with popular marketing platforms including Google Analytics, Facebook Ads, Mailchimp, and more through our API and native integrations.'
    },
    {
      question: 'How accurate are the AI-powered predictions?',
      answer: 'Our predictive analytics typically achieve 85-95% accuracy, based on historical data and real-time market trends. The AI continuously learns and improves its predictions as it processes more data from your campaigns.'
    },
    {
      question: 'What type of support do you offer?',
      answer: 'We offer different levels of support based on your plan. Basic plans include email support with 24-hour response time, while Pro and Enterprise plans include priority support, dedicated account managers, and 24/7 technical assistance.'
    },
    {
      question: 'Is my data secure with ADmyBRAND AI?',
      answer: 'Absolutely. We employ enterprise-grade encryption, regular security audits, and comply with GDPR, CCPA, and other major data protection regulations. Your data is stored in secure, SOC 2 certified data centers.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes will take effect at the start of your next billing cycle.'
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary dark:from-primary dark:to-secondary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Everything you need to know about ADmyBRAND AI
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant="default"
                className={`cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                  openIndex === index ? 'bg-gray-50 dark:bg-gray-800/50' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-start sm:items-center gap-4">
                  <motion.h3
                    className="text-base sm:text-lg font-medium text-gray-900 dark:text-white flex-1 transition-colors duration-200"
                    initial={false}
                    animate={{ 
                      color: openIndex === index 
                        ? 'rgb(59, 130, 246)' // blue-600 in light mode
                        : 'rgb(17, 24, 39)' // gray-900 in light mode
                    }}
                  >
                    {faq.question}
                  </motion.h3>
                  <motion.svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 shrink-0 mt-1 sm:mt-0 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={false}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-200"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default FAQ 