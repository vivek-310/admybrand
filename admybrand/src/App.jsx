import { lazy, Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import AnimatedLogo from './components/AnimatedLogo'
import { useScroll } from 'framer-motion'
import PreLoader from './components/PreLoader'

// Eagerly load Navbar and Hero for immediate display
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load other components
const VideoSection = lazy(() => import('./components/VideoSection'))
const Features = lazy(() => import('./components/Features'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component with modern animation
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="relative">
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-white opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 w-12 h-12 border-2 border-t-white border-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
)

// Scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <PreLoader onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <AnimatedBackground />
          <ScrollProgress />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            
            {/* Hero section - no lazy loading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>
            
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <VideoSection />
                </motion.div>
              </Suspense>

              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Features />
                </motion.div>
              </Suspense>

              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Pricing />
                </motion.div>
              </Suspense>

              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Testimonials />
                </motion.div>
              </Suspense>

              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <FAQ />
                </motion.div>
              </Suspense>

              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Footer />
                </motion.div>
              </Suspense>
            </AnimatePresence>
          </motion.div>

          {/* Quick Actions Menu */}
          <motion.div
            className="fixed bottom-8 right-8 flex flex-col gap-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              className="p-4 bg-white rounded-full text-black shadow-lg hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
            
            <motion.a
              href="#pricing"
              className="p-4 bg-white rounded-full text-black shadow-lg hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.a>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default App
