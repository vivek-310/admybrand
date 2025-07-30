import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds (reduced from 3 seconds)
    const interval = 20; // Update every 20ms (reduced from 50ms for smoother animation)
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 300); // Reduced delay after completion
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Progress indicator */}
        <div className="fixed top-0 right-0 p-8 text-white text-4xl font-bold">
          {Math.round(progress)}%
        </div>

        {/* Main content - Staggered text */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-[100px] font-medium leading-none tracking-tighter"
          >
            Making it 
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white text-[90px] font-bold leading-none tracking-tighter ml-48"
          >
            make a sense
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader; 