import { motion } from 'framer-motion'
import Button from './Button'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange-600/20 blur-[120px] rounded-full" />
      
      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Page indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-white/50 text-sm"
            >
              1/4
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight"
            >
              We create videos
            </motion.h1>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl text-white/70 text-lg mb-12"
            >
              <p>WE ARE A VIDEO PRODUCTION STUDIO</p>
              <p>THAT CREATES HIGH-QUALITY CONTENT</p>
              <p>SO YOU CAN REACH A BIGGER AUDIENCE</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <Button
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  QUALIFY FOR AN INTERVIEW
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/4 right-[10%] w-32 h-32 rounded-2xl overflow-hidden"
          >
            <img
              src="/path-to-your-image1.jpg"
              alt="Video production"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          {/* Bottom left image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-1/4 left-[10%] w-32 h-32 rounded-2xl overflow-hidden"
          >
            <img
              src="/path-to-your-image2.jpg"
              alt="Video production"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 w-full py-8 px-8 flex justify-between items-center">
        {/* Play button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>

        {/* Social links */}
        <div className="flex gap-4">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Hero