import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="home-container">
      <AnimatedBackground />
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Qendrim Beka
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Computing Science & Blockchain Enthusiast
        </motion.p>
      </div>
    </div>
  );
}
