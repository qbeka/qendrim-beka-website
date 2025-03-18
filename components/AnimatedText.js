import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedText;
