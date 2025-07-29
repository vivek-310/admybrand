import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './Button'
import AnimatedLogo from './AnimatedLogo'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // 3D Cards for features preview
  const previewFeatures = [
    { title: 'AI Content', icon: '🤖' },
    { title: 'Analytics', icon: '📊' },
    { title: 'Automation', icon: '⚡' }
  ]

  return (
    <div className="relative min-h-[100svh] flex items-center">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <AnimatedLogo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 px-4">
              Transform Your Brand with
              <br className="hidden sm:block" />
              <span className="sm:mt-2 inline-block">AI-Powered Marketing</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Harness the power of artificial intelligence to create, optimize, and scale your marketing campaigns like never before.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16"
          >
            <Button size="lg" className="group w-full sm:w-auto bg-white text-black hover:bg-gray-100">
              <span className="relative inline-flex items-center">
                Start Free Trial
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Button>
            <Button variant="secondary" size="lg" className="group w-full sm:w-auto border-2 border-white text-white hover:bg-white/10">
              <span className="relative inline-flex items-center">
                Watch Demo
                <motion.svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
            </Button>
          </motion.div>

          {/* Preview Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            {previewFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="w-64 h-48 bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-white/10"
                initial={{ opacity: 0, rotateX: 45, y: 100 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Hero 