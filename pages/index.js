import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStars(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <AnimatedBackground showStars={showStars} />
      <AnimatePresence>
        {!showStars && (
          <motion.div
            className="hero-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              Qendrim Beka
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              Computing Science &amp; Blockchain Enthusiast
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Extra spacer to allow scrolling */}
      <div className="scroll-spacer"></div>
    </div>
  );
}
