import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: '-1' }}>
        <Stars count={2000} factor={8} speed={2} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default AnimatedBackground;
