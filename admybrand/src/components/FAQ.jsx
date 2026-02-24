import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getInitialOpenIndex ,formatQuestion} from '../utils/faqHelpers'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(getInitialOpenIndex())

  const faqs = [
    {
      question: 'What is ADmyBRAND AI and how does it work?',
      answer: 'ADmyBRAND AI is an advanced marketing platform that uses artificial intelligence to generate engaging content, optimize campaigns, and provide deep audience insights. Our AI analyzes your brand, target audience, and market trends to create personalized marketing content that drives results.'
    },
    {
      question: 'How accurate is the AI content generation?',
      answer: 'Our AI content generation is highly accurate and continuously improving. It learns from your brand voice, previous successful campaigns, and industry best practices. The content is reviewed by our team and can be customized to match your specific requirements and brand guidelines.'
    },
    {
      question: 'Can I integrate ADmyBRAND AI with my existing tools?',
      answer: 'Yes! ADmyBRAND AI integrates seamlessly with popular marketing platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, and many more. We also provide API access for custom integrations with your existing marketing stack.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers. Our team is available to help you get the most out of the platform and achieve your marketing goals.'
    },
    {
      question: 'Is my data secure with ADmyBRAND AI?',
      answer: 'Absolutely. We take data security seriously and implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR and other privacy regulations. Your data is never shared with third parties without your explicit consent.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. You\'ll continue to have access to the platform until the end of your current billing period. We also offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="relative py-16 sm:py-20 bg-black overflow-hidden transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Got questions? We've got answers. Here are the most common questions about ADmyBRAND AI.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`cursor-pointer transition-all duration-200 bg-black/30 backdrop-blur-lg hover:bg-black/40 border border-gray-700/50 ${
                  openIndex === index ? 'bg-black/40' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-base sm:text-lg font-medium text-white flex-1 transition-colors duration-200">
                    {formatQuestion(faq.question)}
                  </h3>
                  <motion.svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 shrink-0 mt-1 sm:mt-0 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="mt-4 text-sm sm:text-base text-gray-400 transition-colors duration-200">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6 transition-colors duration-200">
            Still have questions? We're here to help!
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Contact Support
          </button>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"
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

export default FAQ 