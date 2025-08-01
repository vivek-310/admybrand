import { useState } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: '/path-to-sarah.jpg',
      content: 'ADmyBRAND AI has revolutionized our marketing strategy. The AI-powered content generation saves us hours every week, and the results speak for themselves - we\'ve seen a 40% increase in engagement.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      image: '/path-to-michael.jpg',
      content: 'The predictive analytics feature is game-changing. We can now forecast campaign performance with incredible accuracy and adjust our strategy in real-time. This tool has become indispensable.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      company: 'E-commerce Plus',
      image: '/path-to-emily.jpg',
      content: 'The multi-channel management dashboard is exactly what we needed. Managing campaigns across all platforms from one place has streamlined our entire marketing operation.'
    },
    {
      name: 'David Thompson',
      role: 'Growth Hacker',
      company: 'ScaleUp Inc',
      image: '/path-to-david.jpg',
      content: 'The audience insights are incredibly detailed. We\'ve discovered new customer segments we never knew existed, and our targeting has never been more precise.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 bg-black overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Don't just take our word for it. Here's what marketing professionals are saying about ADmyBRAND AI.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-gray-700/50 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full mb-6 border-2 border-primary mx-auto bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-300 text-base sm:text-lg mb-6 italic transition-colors duration-200">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center">
                      <h4 className="text-white font-semibold transition-colors duration-200">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 transition-colors duration-200">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

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

export default Testimonials 