import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start playing when 30% of the section is visible
      if (rect.top < viewportHeight * 0.7 && rect.bottom > viewportHeight * 0.3) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Optional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;