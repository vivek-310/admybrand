import { motion } from 'framer-motion'

const AnimatedLogo = () => {
 console.log("TEST");
 console.log("TEST2");
  return (
    <div className="relative w-24 h-24">
      {/* 3D Rotating Cube */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateY: 360,
          rotateX: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl">AI</span>
        </motion.div>

        {/* Back face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'rotateY(180deg) translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl">AI</span>
        </motion.div>

        {/* Top face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'rotateX(90deg) translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        />

        {/* Bottom face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'rotateX(-90deg) translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        />

        {/* Left face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'rotateY(-90deg) translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        />

        {/* Right face */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl"
          style={{
            transform: 'rotateY(90deg) translateZ(12px)',
            backfaceVisibility: 'hidden',
          }}
        />
      </motion.div>

      {/* Glowing effect */}
      <div className="absolute inset-0 bg-white/10 rounded-full blur-xl" />
    </div>
  )
}

export default AnimatedLogo 