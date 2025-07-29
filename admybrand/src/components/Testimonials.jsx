import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director at TechCorp',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote: 'ADmyBRAND AI has revolutionized our marketing strategy. We\'ve seen a 300% increase in engagement and our content creation time has been cut in half.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO at StartupX',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      quote: 'The AI-powered insights have been game-changing for our campaigns. We\'re now able to predict trends and adjust our strategy in real-time.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager at GrowthCo',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      quote: 'The automated reporting and campaign optimization have saved us countless hours. The ROI we\'ve seen is incredible.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 bg-white dark:bg-black overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary dark:from-primary dark:to-secondary-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Hear from the businesses that have transformed their marketing with ADmyBRAND AI
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div className="relative h-[400px] sm:h-[350px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full"
                >
                  <Card variant="glass" className="mx-4">
                    <div className="flex flex-col items-center text-center p-6 sm:p-8">
                      <motion.img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full mb-6 border-2 border-primary dark:border-primary-light"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                      <motion.p
                        className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6 italic transition-colors duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        "{testimonials[currentIndex].quote}"
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="text-gray-900 dark:text-white font-semibold transition-colors duration-200">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                          {testimonials[currentIndex].role}
                        </p>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-2 backdrop-blur-lg transition-all z-10"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-2 backdrop-blur-lg transition-all z-10"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary dark:bg-primary-light w-8'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-light/10 dark:bg-primary/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-light/10 dark:bg-secondary/10 rounded-full blur-3xl"
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

export default Testimonials 