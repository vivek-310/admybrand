import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const firstLine = "Making it".split("");
  const secondLine = "make a sense".split("");

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 1000); // Wait for exit animation
        }, 300);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }),
    exit: (i) => ({
      y: -100,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

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
          <div className="flex">
            {firstLine.map((letter, i) => (
              <motion.span
                key={`first-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={isExiting ? "exit" : "visible"}
                className="text-white text-[100px] font-medium leading-none tracking-tighter"
                style={{ display: letter === " " ? "inline-block" : "inline-block", width: letter === " " ? "0.5em" : "auto" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex ml-48">
            {secondLine.map((letter, i) => (
              <motion.span
                key={`second-${i}`}
                custom={i + firstLine.length} // Delay based on total previous letters
                variants={letterVariants}
                initial="hidden"
                animate={isExiting ? "exit" : "visible"}
                className="text-white text-[90px] font-bold leading-none tracking-tighter"
                style={{ display: letter === " " ? "inline-block" : "inline-block", width: letter === " " ? "0.5em" : "auto" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader; 